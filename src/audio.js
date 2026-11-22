// ============ Web Audio 程序化音效 ============
// 所有声音均实时合成，无外部音频文件。

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.sfxGain = null;
    this.musicGain = null;
    this.noiseBuf = null;
    this.last = {};
    this.muted = false;
    this.musicOn = true;
    this.musicTimer = null;
    this.musicStep = 0;
  }

  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = 0.7;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.ratio.value = 6;
    this.master.connect(comp);
    comp.connect(this.ctx.destination);
    this.sfxGain = this.ctx.createGain();
    this.sfxGain.gain.value = 0.55;
    this.sfxGain.connect(this.master);
    this.musicGain = this.ctx.createGain();
    this.musicGain.gain.value = 0.12;
    this.musicGain.connect(this.master);
    // 白噪声缓冲
    const len = this.ctx.sampleRate * 1.5;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    // 简易混响
    this.reverb = this.ctx.createConvolver();
    const rl = this.ctx.sampleRate * 1.8;
    const ir = this.ctx.createBuffer(2, rl, this.ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = ir.getChannelData(ch);
      for (let i = 0; i < rl; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / rl, 3);
    }
    this.reverb.buffer = ir;
    const rg = this.ctx.createGain();
    rg.gain.value = 0.25;
    this.reverb.connect(rg);
    rg.connect(this.master);
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.value = m ? 0 : 0.7;
  }

  // ---- 基础构件 ----
  tone({ type = 'sine', f0 = 440, f1 = null, t = 0.2, vol = 0.3, attack = 0.005, delay = 0, rev = false, detune = 0 }) {
    const c = this.ctx;
    const now = c.currentTime + delay;
    const o = c.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, now);
    if (f1 !== null) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), now + t);
    o.detune.value = detune;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(vol, now + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, now + t);
    o.connect(g);
    g.connect(this.sfxGain);
    if (rev) g.connect(this.reverb);
    o.start(now);
    o.stop(now + t + 0.05);
  }

  noise({ t = 0.3, vol = 0.3, filter = 'lowpass', f0 = 2000, f1 = null, q = 1, attack = 0.005, delay = 0, rev = false }) {
    const c = this.ctx;
    const now = c.currentTime + delay;
    const s = c.createBufferSource();
    s.buffer = this.noiseBuf;
    const fl = c.createBiquadFilter();
    fl.type = filter;
    fl.frequency.setValueAtTime(f0, now);
    if (f1 !== null) fl.frequency.exponentialRampToValueAtTime(Math.max(20, f1), now + t);
    fl.Q.value = q;
    const g = c.createGain();
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(vol, now + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, now + t);
    s.connect(fl);
    fl.connect(g);
    g.connect(this.sfxGain);
    if (rev) g.connect(this.reverb);
    s.start(now, Math.random() * 0.5);
    s.stop(now + t + 0.05);
  }

  play(name, volMul = 1) {
    if (!this.ctx || this.muted) return;
    const nowMs = performance.now();
    const minGap = { arrow: 45, hit: 40, zap: 60, frost: 120, magic: 60, cannon: 70, coin: 50, step: 80 }[name] || 25;
    if (this.last[name] && nowMs - this.last[name] < minGap) return;
    this.last[name] = nowMs;
    const v = volMul;
    switch (name) {
      case 'click': this.tone({ type: 'triangle', f0: 880, f1: 1320, t: 0.08, vol: 0.15 * v }); break;
      case 'hover': this.tone({ type: 'sine', f0: 1200, t: 0.04, vol: 0.05 * v }); break;
      case 'arrow':
        this.noise({ t: 0.08, vol: 0.12 * v, filter: 'bandpass', f0: 3000, f1: 1200, q: 2 });
        this.tone({ type: 'triangle', f0: 700, f1: 300, t: 0.06, vol: 0.05 * v });
        break;
      case 'cannon':
        this.noise({ t: 0.35, vol: 0.35 * v, f0: 900, f1: 80 });
        this.tone({ type: 'sine', f0: 120, f1: 40, t: 0.3, vol: 0.4 * v });
        break;
      case 'magic':
        this.tone({ type: 'sine', f0: 600, f1: 1400, t: 0.18, vol: 0.12 * v, rev: true });
        this.tone({ type: 'triangle', f0: 900, f1: 1800, t: 0.14, vol: 0.06 * v, detune: 7 });
        break;
      case 'zap':
        this.noise({ t: 0.2, vol: 0.18 * v, filter: 'highpass', f0: 2500, q: 0.5 });
        this.tone({ type: 'sawtooth', f0: 220, f1: 1800, t: 0.12, vol: 0.08 * v });
        this.tone({ type: 'square', f0: 1600, f1: 200, t: 0.15, vol: 0.05 * v, delay: 0.03 });
        break;
      case 'frost':
        this.noise({ t: 0.4, vol: 0.12 * v, filter: 'highpass', f0: 4000, f1: 8000, q: 1, rev: true });
        this.tone({ type: 'sine', f0: 2400, f1: 1800, t: 0.3, vol: 0.06 * v, rev: true });
        break;
      case 'freeze':
        this.noise({ t: 0.6, vol: 0.25 * v, filter: 'bandpass', f0: 6000, f1: 2000, q: 3, rev: true });
        for (let i = 0; i < 4; i++) this.tone({ type: 'sine', f0: 2000 + i * 600, t: 0.25, vol: 0.05 * v, delay: i * 0.05, rev: true });
        break;
      case 'hit': this.noise({ t: 0.06, vol: 0.1 * v, f0: 1500, f1: 400 }); break;
      case 'explode':
        this.noise({ t: 0.7, vol: 0.5 * v, f0: 1400, f1: 60, rev: true });
        this.tone({ type: 'sine', f0: 90, f1: 30, t: 0.6, vol: 0.5 * v });
        break;
      case 'bigexplode':
        this.noise({ t: 1.6, vol: 0.7 * v, f0: 2000, f1: 40, rev: true });
        this.tone({ type: 'sine', f0: 70, f1: 20, t: 1.4, vol: 0.7 * v });
        this.tone({ type: 'sawtooth', f0: 110, f1: 30, t: 0.8, vol: 0.15 * v });
        break;
      case 'fire':
        this.noise({ t: 0.5, vol: 0.25 * v, filter: 'bandpass', f0: 600, f1: 1800, q: 0.8, attack: 0.05 });
        this.tone({ type: 'sawtooth', f0: 160, f1: 80, t: 0.4, vol: 0.06 * v });
        break;
      case 'meteor':
        this.noise({ t: 1.0, vol: 0.25 * v, filter: 'bandpass', f0: 300, f1: 2500, q: 1, attack: 0.6 });
        break;
      case 'thunder':
        this.noise({ t: 0.9, vol: 0.55 * v, f0: 5000, f1: 100, rev: true });
        this.tone({ type: 'square', f0: 80, f1: 30, t: 0.5, vol: 0.2 * v });
        break;
      case 'heal':
        [523, 659, 784, 1046].forEach((f, i) => this.tone({ type: 'sine', f0: f, t: 0.5, vol: 0.1 * v, delay: i * 0.07, rev: true }));
        break;
      case 'summon':
        this.tone({ type: 'sawtooth', f0: 110, f1: 440, t: 0.7, vol: 0.1 * v, rev: true });
        this.tone({ type: 'sine', f0: 220, f1: 880, t: 0.7, vol: 0.15 * v, rev: true });
        this.noise({ t: 0.8, vol: 0.15 * v, filter: 'bandpass', f0: 400, f1: 3000, q: 2, attack: 0.3, rev: true });
        break;
      case 'card':
        this.noise({ t: 0.12, vol: 0.1 * v, filter: 'bandpass', f0: 2000, f1: 5000, q: 1 });
        this.tone({ type: 'triangle', f0: 660, f1: 990, t: 0.12, vol: 0.06 * v });
        break;
      case 'cast':
        this.tone({ type: 'sine', f0: 400, f1: 1200, t: 0.3, vol: 0.12 * v, rev: true });
        this.tone({ type: 'triangle', f0: 800, f1: 2400, t: 0.25, vol: 0.06 * v, delay: 0.05, rev: true });
        break;
      case 'coin':
        this.tone({ type: 'square', f0: 988, t: 0.06, vol: 0.05 * v });
        this.tone({ type: 'square', f0: 1319, t: 0.15, vol: 0.05 * v, delay: 0.06 });
        break;
      case 'build':
        this.noise({ t: 0.25, vol: 0.2 * v, f0: 600, f1: 200 });
        this.tone({ type: 'triangle', f0: 330, f1: 660, t: 0.2, vol: 0.12 * v, delay: 0.08 });
        break;
      case 'upgrade':
        [440, 554, 659, 880].forEach((f, i) => this.tone({ type: 'triangle', f0: f, t: 0.25, vol: 0.1 * v, delay: i * 0.06, rev: true }));
        break;
      case 'sell': this.tone({ type: 'triangle', f0: 660, f1: 330, t: 0.2, vol: 0.1 * v }); break;
      case 'leak':
        this.tone({ type: 'sawtooth', f0: 300, f1: 100, t: 0.4, vol: 0.18 * v });
        this.noise({ t: 0.3, vol: 0.15 * v, f0: 800, f1: 100 });
        break;
      case 'wave':
        [262, 330, 392].forEach((f, i) => this.tone({ type: 'sawtooth', f0: f, t: 0.6, vol: 0.06 * v, delay: i * 0.12, rev: true }));
        this.tone({ type: 'sine', f0: 131, t: 1.0, vol: 0.2 * v, delay: 0.36 });
        break;
      case 'boss':
        this.tone({ type: 'sawtooth', f0: 55, f1: 45, t: 2.0, vol: 0.25 * v, attack: 0.3, rev: true });
        this.tone({ type: 'sawtooth', f0: 82, f1: 70, t: 2.0, vol: 0.18 * v, attack: 0.3, rev: true, detune: 10 });
        this.noise({ t: 2.0, vol: 0.15 * v, f0: 300, f1: 80, attack: 0.5 });
        break;
      case 'victory':
        [523, 659, 784, 1046, 784, 1046].forEach((f, i) => this.tone({ type: 'triangle', f0: f, t: 0.4, vol: 0.12 * v, delay: i * 0.13, rev: true }));
        break;
      case 'defeat':
        [392, 349, 311, 262].forEach((f, i) => this.tone({ type: 'sawtooth', f0: f, t: 0.6, vol: 0.08 * v, delay: i * 0.25, rev: true }));
        break;
      case 'herodie': this.tone({ type: 'sawtooth', f0: 400, f1: 80, t: 0.8, vol: 0.12 * v, rev: true }); break;
      case 'swing':
        this.noise({ t: 0.12, vol: 0.12 * v, filter: 'bandpass', f0: 1200, f1: 3000, q: 1.5 });
        break;
      case 'levelup':
        [523, 784, 1046, 1568].forEach((f, i) => this.tone({ type: 'sine', f0: f, t: 0.5, vol: 0.1 * v, delay: i * 0.08, rev: true }));
        break;
      case 'error': this.tone({ type: 'square', f0: 180, t: 0.15, vol: 0.08 * v }); break;
      case 'stomp':
        this.tone({ type: 'sine', f0: 60, f1: 25, t: 0.6, vol: 0.5 * v });
        this.noise({ t: 0.5, vol: 0.3 * v, f0: 400, f1: 60 });
        break;
      case 'void':
        this.tone({ type: 'sine', f0: 200, f1: 40, t: 1.5, vol: 0.25 * v, attack: 0.2, rev: true });
        this.tone({ type: 'sawtooth', f0: 100, f1: 30, t: 1.5, vol: 0.06 * v, attack: 0.2, detune: 15 });
        break;
      case 'beam':
        this.tone({ type: 'sawtooth', f0: 880, f1: 220, t: 1.2, vol: 0.08 * v, rev: true });
        this.noise({ t: 1.5, vol: 0.2 * v, filter: 'bandpass', f0: 1500, q: 0.5, attack: 0.1, rev: true });
        break;
      case 'roar':
        this.tone({ type: 'sawtooth', f0: 140, f1: 50, t: 1.2, vol: 0.25 * v, attack: 0.08, rev: true });
        this.tone({ type: 'square', f0: 95, f1: 40, t: 1.0, vol: 0.1 * v, attack: 0.1, detune: 20 });
        this.noise({ t: 1.1, vol: 0.3 * v, filter: 'bandpass', f0: 500, f1: 200, q: 1, attack: 0.1, rev: true });
        break;
      case 'blink':
        this.tone({ type: 'sine', f0: 1800, f1: 200, t: 0.35, vol: 0.12 * v, rev: true });
        this.tone({ type: 'sine', f0: 200, f1: 1600, t: 0.3, vol: 0.1 * v, delay: 0.2, rev: true });
        break;
      case 'shield':
        this.tone({ type: 'triangle', f0: 520, f1: 780, t: 0.4, vol: 0.1 * v, rev: true });
        this.tone({ type: 'sine', f0: 1040, t: 0.5, vol: 0.06 * v, delay: 0.05, rev: true });
        break;
      case 'whoosh':
        this.noise({ t: 0.35, vol: 0.12 * v, filter: 'bandpass', f0: 400, f1: 2400, q: 1.2, attack: 0.08 });
        break;
      case 'heartbeat':
        this.tone({ type: 'sine', f0: 70, f1: 45, t: 0.16, vol: 0.4 * v });
        this.tone({ type: 'sine', f0: 65, f1: 40, t: 0.18, vol: 0.3 * v, delay: 0.22 });
        break;
      case 'perfect':
        [784, 988, 1175, 1568].forEach((f, i) => this.tone({ type: 'triangle', f0: f, t: 0.35, vol: 0.09 * v, delay: i * 0.09, rev: true }));
        this.tone({ type: 'sine', f0: 2093, t: 0.8, vol: 0.05 * v, delay: 0.36, rev: true });
        break;
      case 'nova':
        this.tone({ type: 'sine', f0: 60, f1: 600, t: 2.0, vol: 0.18 * v, attack: 1.6, rev: true });
        this.noise({ t: 2.0, vol: 0.2 * v, filter: 'bandpass', f0: 200, f1: 4000, q: 1, attack: 1.8, rev: true });
        break;
      default: break;
    }
  }

  // ---- 背景音乐：简单的生成式和弦琶音 ----
  startMusic(mood = 'calm') {
    if (!this.ctx) return;
    this.stopMusic();
    if (!this.musicOn) return;
    const progressions = {
      calm: [[220, 261.6, 329.6], [174.6, 220, 261.6], [196, 246.9, 293.7], [164.8, 207.7, 246.9]],
      battle: [[146.8, 174.6, 220], [116.5, 146.8, 174.6], [130.8, 164.8, 196], [110, 138.6, 164.8]],
    };
    const prog = progressions[mood] || progressions.calm;
    const stepT = mood === 'battle' ? 0.22 : 0.32;
    this.musicStep = 0;
    const tick = () => {
      if (!this.ctx || this.muted) return;
      const chord = prog[Math.floor(this.musicStep / 16) % prog.length];
      const i = this.musicStep % 16;
      const c = this.ctx;
      const now = c.currentTime;
      const note = (f, t, vol, type = 'triangle') => {
        const o = c.createOscillator();
        o.type = type;
        o.frequency.value = f;
        const g = c.createGain();
        g.gain.setValueAtTime(0.0001, now);
        g.gain.exponentialRampToValueAtTime(vol, now + 0.02);
        g.gain.exponentialRampToValueAtTime(0.0001, now + t);
        o.connect(g);
        g.connect(this.musicGain);
        g.connect(this.reverb);
        o.start(now);
        o.stop(now + t + 0.05);
      };
      const arp = [0, 1, 2, 1, 2, 0, 1, 2];
      if (i % 2 === 0) note(chord[arp[(i / 2) % 8]] * 2, stepT * 2.5, 0.25);
      if (i === 0) {
        note(chord[0] / 2, stepT * 16, 0.35, 'sine');
        note(chord[1], stepT * 16, 0.12, 'sine');
      }
      if (mood === 'battle' && (i % 4 === 0)) {
        const s = c.createBufferSource();
        s.buffer = this.noiseBuf;
        const f = c.createBiquadFilter();
        f.type = 'lowpass';
        f.frequency.value = 180;
        const g = c.createGain();
        g.gain.setValueAtTime(0.9, now);
        g.gain.exponentialRampToValueAtTime(0.001, now + 0.18);
        s.connect(f); f.connect(g); g.connect(this.musicGain);
        s.start(now); s.stop(now + 0.2);
      }
      this.musicStep++;
    };
    this.musicTimer = setInterval(tick, stepT * 1000);
  }

  stopMusic() {
    if (this.musicTimer) clearInterval(this.musicTimer);
    this.musicTimer = null;
  }
}

export const audio = new AudioEngine();
