// ============ 入口：渲染器、界面流程、存档 ============
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import './style.css';
import { MAPS, CARDS, RARITY, DEFAULT_DECK, DECK_MIN, DECK_MAX, starterCollection, maxCopies, HEROES, HERO_ORDER, TOWERS, TOWER_ORDER } from './data.js';
import { World } from './world.js';
import { FX, rand } from './fx.js';
import { Game } from './game.js';
import { audio } from './audio.js';
import { cardHTML } from './ui.js';
import { makeHero } from './models.js';

const SAVE_KEY = 'arcane-bastion-save-v1';

class App {
  constructor() {
    this.container = document.getElementById('app');
    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.container.appendChild(this.renderer.domElement);
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.5, 600);
    this.camera.position.set(0, 30, 22);
    this.camera.lookAt(0, 0, 0);
    this.scene = null;
    this.composer = new EffectComposer(this.renderer);
    this.renderPass = new RenderPass(new THREE.Scene(), this.camera);
    this.bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.7, 0.55, 0.9);
    this.composer.addPass(this.renderPass);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.ui = document.getElementById('ui');
    this.CARDS = CARDS;
    this.load();
    this.resize();
    window.addEventListener('resize', () => this.resize());
    this.bindInput();
    this.timer = new THREE.Timer();
    this.timer.connect(document);
    this.game = null;
    this.title = null;
    this.showTitle();
    this.renderer.setAnimationLoop(() => this.frame());
  }

  // ---------- 存档 ----------
  load() {
    let s = null;
    try { s = JSON.parse(localStorage.getItem(SAVE_KEY)); } catch (e) { s = null; }
    const base = starterCollection();
    this.save = {
      collection: { ...base, ...(s && s.collection) },
      deck: (s && Array.isArray(s.deck) && s.deck.length >= DECK_MIN) ? s.deck.filter((id) => CARDS[id]) : DEFAULT_DECK.slice(),
      cleared: (s && s.cleared) || {},
    };
    for (const id of Object.keys(CARDS)) this.save.collection[id] = Math.max(base[id], this.save.collection[id] || 0);
    if (this.save.deck.length < DECK_MIN) this.save.deck = DEFAULT_DECK.slice();
  }
  persist() {
    try { localStorage.setItem(SAVE_KEY, JSON.stringify(this.save)); } catch (e) { /* ignore */ }
  }
  unlockCard(id) {
    this.save.collection[id] = Math.min(maxCopies(id), (this.save.collection[id] || 0) + 1);
    this.persist();
  }
  markCleared(id) { this.save.cleared[id] = true; this.persist(); }

  resize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.width = w; this.height = h;
    this.renderer.setSize(w, h);
    this.composer.setSize(w, h);
    this.bloom.resolution.set(w / 2, h / 2);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    const fx = this.game ? this.game.fx : this.title && this.title.fx;
    if (fx) fx.setScale(h, this.camera.fov);
  }

  bindInput() {
    const c = this.renderer.domElement;
    c.addEventListener('contextmenu', (e) => e.preventDefault());
    c.addEventListener('pointermove', (e) => this.game && this.game.onPointerMove(e));
    c.addEventListener('pointerdown', (e) => { audio.init(); this.game && this.game.onPointerDown(e); });
    c.addEventListener('wheel', (e) => { e.preventDefault(); this.game && this.game.onWheel(e); }, { passive: false });
    window.addEventListener('keydown', (e) => {
      audio.init();
      if (this.game) this.game.onKeyDown(e);
      else if (e.key === 'Escape') this.showTitle();
    });
    window.addEventListener('keyup', (e) => this.game && this.game.onKeyUp(e));
    window.addEventListener('blur', () => { if (this.game) this.game.keys = {}; });
    document.addEventListener('pointerdown', () => audio.init(), { once: true });
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest && e.target.closest('.btn') && audio.ctx) audio.play('hover', 0.6);
    });
  }

  frame() {
    this.timer.update();
    const dt = Math.min(0.1, this.timer.getDelta());
    if (this.game) this.game.update(dt);
    else if (this.title) this.updateTitle(dt);
    const scene = this.game ? this.game.scene : this.title ? this.title.scene : null;
    if (scene) {
      this.renderPass.scene = scene;
      this.composer.render();
    }
  }

  clearScreens() {
    if (this.game) { this.game.dispose(); this.game = null; }
    this.ui.innerHTML = '';
  }

  // ---------- 标题场景（背景） ----------
  ensureTitleScene() {
    if (this.title) return;
    const scene = new THREE.Scene();
    const world = new World(scene, MAPS[0]);
    const fx = new FX(scene, this.camera);
    fx.setScale(this.height, this.camera.fov);
    const heroes = [];
    HERO_ORDER.forEach((id, i) => {
      const h = makeHero(id);
      h.position.set(-3 + i * 2, 0, 2);
      h.traverse((o) => { if (o.isMesh) o.castShadow = true; });
      scene.add(h);
      heroes.push(h);
    });
    this.title = { scene, world, fx, t: 0, heroes, castT: 0 };
  }
  disposeTitle() {
    if (!this.title) return;
    this.title.fx.clear();
    this.title.world.dispose();
    this.title = null;
  }

  updateTitle(dt) {
    const T = this.title;
    T.t += dt;
    const a = T.t * 0.06;
    this.camera.position.set(Math.sin(a) * 30, 16 + Math.sin(T.t * 0.2) * 2, Math.cos(a) * 30);
    this.camera.lookAt(0, 1, 0);
    T.world.update(dt);
    T.heroes.forEach((h, i) => { h.rotation.y = a + Math.PI + Math.sin(T.t + i) * 0.3; h.userData.body.position.y = Math.abs(Math.sin(T.t * 2 + i)) * 0.15; });
    // 随机魔法烟花
    T.castT -= dt;
    if (T.castT <= 0) {
      T.castT = 1.2 + Math.random();
      const p = new THREE.Vector3(rand(-14, 14), 0, rand(-10, 10));
      const k = Math.floor(Math.random() * 4);
      const cols = [0xff6a1a, 0x7fd8ff, 0xb065ff, 0x6cff9a];
      if (k === 0) T.fx.explosion(p, cols[0], 1, { noDecal: true });
      else if (k === 1) { T.fx.ring(p, cols[1], 4, 0.8); T.fx.burst(p.clone().setY(0.5), { count: 60, color: 0xe0f8ff, color2: 0x5ab8ff, intensity: 2, speed: 8, flat: true, life: 0.7, size: 0.7 }); }
      else if (k === 2) { T.fx.lightning(new THREE.Vector3(p.x, 18, p.z), p.clone().setY(0.2), 0xa8b8ff, 0.3, 0.35); T.fx.light(p, 0xa8b8ff, 6, 10, 0.3); }
      else { T.fx.pillar(p, cols[3], 1.5, 18, 1.2); T.fx.burst(p.clone().setY(0.5), { count: 40, color: cols[3], intensity: 2.5, speed: 2, life: 1.4, size: 0.6, up: 3 }); }
    }
    if (Math.random() < dt * 20) T.fx.glow.emit({ x: rand(-25, 25), y: rand(0.3, 3), z: rand(-18, 18), vx: rand(-0.4, 0.4), vy: rand(0, 0.3), vz: rand(-0.4, 0.4), life: 4, size: 0.35, sizeEnd: 0.2, color: T.fx.col(0xd8ff7a, 2), drag: 0 });
    T.fx.update(dt);
  }

  // ---------- 标题界面 ----------
  showTitle() {
    this.clearScreens();
    this.ensureTitleScene();
    audio.startMusic('calm');
    const d = document.createElement('div');
    d.className = 'screen title-screen';
    d.innerHTML = `
      <div class="title-wrap">
        <div class="logo">
          <div class="logo-sub">ARCANE BASTION</div>
          <h1>奥术壁垒</h1>
          <div class="logo-tag">英雄 · 卡牌 · 塔防</div>
        </div>
        <div class="menu">
          <button class="btn primary big" id="m-start">⚔ 开始征程</button>
          <button class="btn big" id="m-deck">🃏 卡组构筑</button>
          <button class="btn big" id="m-help">📜 游戏说明</button>
        </div>
        <div class="title-foot">程序生成的低多边形美术 · Web Audio 合成音效 · three.js</div>
      </div>`;
    this.ui.appendChild(d);
    d.querySelector('#m-start').onclick = () => { audio.init(); audio.play('click'); this.showMapSelect(); };
    d.querySelector('#m-deck').onclick = () => { audio.init(); audio.play('click'); this.showDeckBuilder(); };
    d.querySelector('#m-help').onclick = () => { audio.init(); audio.play('click'); this.showHelp(); };
  }

  showMapSelect() {
    this.clearScreens();
    this.ensureTitleScene();
    const d = document.createElement('div');
    d.className = 'screen panel-screen';
    const themeIcon = { grass: '🌿', lava: '🌋', snow: '❄️' };
    d.innerHTML = `
      <div class="panel-box wide">
        <h2>选择战场</h2>
        <div class="map-list">
          ${MAPS.map((m, i) => `
            <div class="map-card theme-${m.theme}" data-i="${i}">
              <div class="map-icon">${themeIcon[m.theme]}</div>
              <h3>${m.name} ${this.save.cleared[m.id] ? '<span class="cleared">✔ 已通关</span>' : ''}</h3>
              <p>${m.desc}</p>
              <div class="map-meta"><span>波次 ${m.waves}</span><span>难度 ${'★'.repeat(i + 1)}</span><span>路线 ${m.paths.length}</span><span>初始 💰${m.startGold}</span></div>
            </div>`).join('')}
        </div>
        <div class="deck-summary">当前卡组：<b>${this.save.deck.length}</b> 张 <button class="btn small" id="ms-deck">编辑卡组</button></div>
        <div class="row-btns"><button class="btn" id="ms-back">← 返回</button></div>
      </div>`;
    this.ui.appendChild(d);
    d.querySelectorAll('.map-card').forEach((c) => c.addEventListener('click', () => { audio.play('click'); this.startGame(Number(c.dataset.i)); }));
    d.querySelector('#ms-back').onclick = () => { audio.play('click'); this.showTitle(); };
    d.querySelector('#ms-deck').onclick = () => { audio.play('click'); this.showDeckBuilder(); };
  }

  showHelp() {
    this.clearScreens();
    this.ensureTitleScene();
    const d = document.createElement('div');
    d.className = 'screen panel-screen';
    d.innerHTML = `
      <div class="panel-box help">
        <h2>游戏说明</h2>
        <div class="help-cols">
          <div>
            <h3>🏰 目标</h3>
            <p>敌人会沿道路冲向水晶圣坛。圣坛生命归零即失败，撑过所有波次即胜利。</p>
            <h3>🗼 防御塔</h3>
            <p>点击右侧按钮选择防御塔，再点击空地建造（按住 Shift 连续建造）。点击已建造的塔可以升级(U)或出售(X)。</p>
            <ul>${TOWER_ORDER.map((t) => `<li>${TOWERS[t].icon} <b>${TOWERS[t].name}</b>：${TOWERS[t].desc}</li>`).join('')}</ul>
          </div>
          <div>
            <h3>🦸 英雄</h3>
            <p>点击左下角英雄头像花费金币召唤（最多 3 名）。选中英雄后：</p>
            <ul>
              <li>左键/右键点击地面：移动到目标点</li>
              <li><b>WASD</b>：直接操控英雄移动</li>
              <li><b>Q / E / R</b>：朝鼠标位置释放技能</li>
              <li><b>Tab</b>：切换英雄 · <b>F</b>：镜头聚焦</li>
            </ul>
            <p>近战英雄能阻挡敌人；英雄击杀敌人获得经验升级，阵亡后会自动复活。</p>
            <ul>${HERO_ORDER.map((h) => `<li>${HEROES[h].icon} <b>${HEROES[h].name}</b>：${HEROES[h].desc}</li>`).join('')}</ul>
          </div>
          <div>
            <h3>🃏 魔法卡牌</h3>
            <p>出征前在「卡组构筑」中组建 ${DECK_MIN}-${DECK_MAX} 张的卡组。每波开始抽 2 张，战斗中每 9 秒再抽 1 张。</p>
            <p>法力随时间恢复（法力之泉可加速）。点击卡牌或按数字键 <b>1-7</b> 选择，再点击地面释放；右键取消。</p>
            <p>每波结束后可从 3 张卡中选择 1 张加入卡组，并永久解锁到收藏中——史诗卡只能这样获得！</p>
            <h3>⌨ 其它</h3>
            <p><b>空格</b>开始下一波 · <b>Esc</b> 暂停 · 方向键平移镜头 · 滚轮缩放</p>
          </div>
        </div>
        <div class="row-btns"><button class="btn" id="h-back">← 返回</button></div>
      </div>`;
    this.ui.appendChild(d);
    d.querySelector('#h-back').onclick = () => { audio.play('click'); this.showTitle(); };
  }

  // ---------- 卡组构筑 ----------
  showDeckBuilder() {
    this.clearScreens();
    this.ensureTitleScene();
    const deck = this.save.deck.slice();
    const d = document.createElement('div');
    d.className = 'screen panel-screen';
    d.innerHTML = `
      <div class="panel-box deck-builder">
        <div class="db-left">
          <div class="db-head">
            <h2>卡牌收藏</h2>
            <div class="db-filters">
              <button class="btn small active" data-f="all">全部</button>
              <button class="btn small" data-f="common">普通</button>
              <button class="btn small" data-f="rare">稀有</button>
              <button class="btn small" data-f="epic">史诗</button>
            </div>
          </div>
          <div class="collection" id="db-col"></div>
        </div>
        <div class="db-right">
          <h2>我的卡组 <span id="db-count"></span></h2>
          <div class="curve" id="db-curve"></div>
          <div class="deck-list" id="db-list"></div>
          <div class="db-btns">
            <button class="btn small" id="db-default">推荐卡组</button>
            <button class="btn small" id="db-clear">清空</button>
          </div>
          <div class="db-btns">
            <button class="btn primary" id="db-save">保存并返回</button>
          </div>
          <div class="db-msg" id="db-msg"></div>
        </div>
      </div>`;
    this.ui.appendChild(d);
    let filter = 'all';
    const count = (id) => deck.filter((x) => x === id).length;
    const render = () => {
      const col = d.querySelector('#db-col');
      const ids = Object.keys(CARDS).filter((id) => filter === 'all' || CARDS[id].rarity === filter)
        .sort((a, b) => CARDS[a].cost - CARDS[b].cost);
      col.innerHTML = ids.map((id) => {
        const own = this.save.collection[id] || 0;
        const used = count(id);
        const locked = own === 0;
        return `<div class="col-slot ${locked ? 'locked' : ''} ${used >= own && !locked ? 'maxed' : ''}">${cardHTML(id)}<div class="own">${locked ? '🔒 未解锁' : `${used} / ${own}`}</div></div>`;
      }).join('');
      col.querySelectorAll('.col-slot').forEach((s) => {
        const id = s.querySelector('.card').dataset.id;
        s.addEventListener('click', () => {
          const own = this.save.collection[id] || 0;
          if (own === 0) { audio.play('error'); msg('该卡牌尚未解锁：在战斗奖励中获得它！'); return; }
          if (count(id) >= own) { audio.play('error'); msg(`「${CARDS[id].name}」已全部加入卡组`); return; }
          if (deck.length >= DECK_MAX) { audio.play('error'); msg(`卡组最多 ${DECK_MAX} 张`); return; }
          deck.push(id);
          audio.play('card');
          render();
        });
      });
      // 卡组列表
      const list = d.querySelector('#db-list');
      const uniq = [...new Set(deck)].sort((a, b) => CARDS[a].cost - CARDS[b].cost);
      list.innerHTML = uniq.map((id) => {
        const c = CARDS[id];
        return `<div class="deck-row rarity-${c.rarity}" data-id="${id}" style="--cc:${c.color};--rc:${RARITY[c.rarity].color}">
          <span class="dr-cost">${c.cost}</span><span class="dr-icon">${c.icon}</span><span class="dr-name">${c.name}</span><span class="dr-n">×${count(id)}</span></div>`;
      }).join('') || '<div class="empty">点击左侧卡牌加入卡组</div>';
      list.querySelectorAll('.deck-row').forEach((r) => r.addEventListener('click', () => {
        const i = deck.lastIndexOf(r.dataset.id);
        if (i >= 0) deck.splice(i, 1);
        audio.play('click');
        render();
      }));
      const cnt = d.querySelector('#db-count');
      cnt.textContent = `${deck.length} / ${DECK_MAX}`;
      cnt.className = deck.length < DECK_MIN ? 'bad' : 'good';
      // 费用曲线
      const curve = [0, 0, 0, 0, 0, 0, 0, 0];
      deck.forEach((id) => curve[Math.min(7, CARDS[id].cost)]++);
      const mx = Math.max(1, ...curve);
      d.querySelector('#db-curve').innerHTML = curve.map((n, i) => `<div class="cbar"><i style="height:${(n / mx) * 100}%"></i><span>${i === 7 ? '7+' : i}</span></div>`).join('');
    };
    const msg = (m) => {
      const e = d.querySelector('#db-msg');
      e.textContent = m;
      clearTimeout(this.msgT);
      this.msgT = setTimeout(() => (e.textContent = ''), 2500);
    };
    d.querySelectorAll('.db-filters .btn').forEach((b) => b.addEventListener('click', () => {
      d.querySelectorAll('.db-filters .btn').forEach((x) => x.classList.remove('active'));
      b.classList.add('active');
      filter = b.dataset.f;
      audio.play('click');
      render();
    }));
    d.querySelector('#db-default').onclick = () => {
      deck.length = 0;
      const tmp = {};
      for (const id of DEFAULT_DECK) {
        tmp[id] = (tmp[id] || 0) + 1;
        if (tmp[id] <= (this.save.collection[id] || 0)) deck.push(id);
      }
      audio.play('click');
      render();
    };
    d.querySelector('#db-clear').onclick = () => { deck.length = 0; audio.play('click'); render(); };
    d.querySelector('#db-save').onclick = () => {
      if (deck.length < DECK_MIN) { audio.play('error'); msg(`卡组至少需要 ${DECK_MIN} 张卡牌`); return; }
      this.save.deck = deck.slice();
      this.persist();
      audio.play('upgrade');
      this.showTitle();
    };
    render();
  }

  // ---------- 开始游戏 ----------
  startGame(mapIdx) {
    this.clearScreens();
    this.disposeTitle();
    audio.init();
    this.camera.position.set(0, 30, 23);
    this.camera.lookAt(0, 0, 1);
    this.game = new Game(this, mapIdx, this.save.deck);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  try {
    window.__app = new App();
  } catch (e) {
    console.error(e);
    document.getElementById('ui').innerHTML = `<div class="screen panel-screen"><div class="panel-box"><h2>无法启动游戏</h2><p>你的浏览器可能不支持 WebGL。</p><pre>${String(e)}</pre></div></div>`;
  }
});
