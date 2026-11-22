// ============ 游戏内 HUD ============
import * as THREE from 'three';
import { TOWERS, TOWER_ORDER, HEROES, HERO_ORDER, CARDS, RARITY, MAX_HEROES, SCHOOLS, SCHOOL_ORDER, RELICS, ENEMIES, SKILL_MAX, skillReq, rankMul, rankCd, wavePreview, schoolCounts } from './data.js';
import { audio } from './audio.js';

export function cardHTML(id, extra = '') {
  const c = CARDS[id];
  const r = RARITY[c.rarity];
  return `<div class="card rarity-${c.rarity}" data-id="${id}" style="--cc:${c.color};--rc:${r.color}" ${extra}>
    <div class="card-cost">${c.cost}</div>
    <div class="card-art"><span>${c.icon}</span></div>
    <div class="card-name">${c.name}</div>
    <div class="card-desc">${c.desc}</div>
    <div class="card-rarity">${r.name}</div>
    ${c.school ? `<div class="card-school" style="--sc:${SCHOOLS[c.school].color}" title="${SCHOOLS[c.school].name}流派">${SCHOOLS[c.school].icon}</div>` : ''}
  </div>`;
}

const el = (tag, cls, html) => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
};

export class GameUI {
  constructor(game) {
    this.game = game;
    this.root = el('div', 'hud');
    document.getElementById('ui').appendChild(this.root);
    this.hoverSkill = -1;
    this.refreshT = 0;
    this.floats = [];
    this.build();
  }

  build() {
    const g = this.game;
    this.root.innerHTML = `
      <div class="topbar">
        <div class="stat" title="圣坛生命"><span class="ico">❤️</span><b id="st-lives"></b></div>
        <div class="stat" title="金币"><span class="ico">💰</span><b id="st-gold"></b></div>
        <div class="stat" title="波次"><span class="ico">🌊</span><b id="st-wave"></b></div>
        <div class="stat map-name">${g.map.name}</div>
        <div class="relic-bar" id="relic-bar"></div>
        <div class="syn-bar" id="syn-bar"></div>
        <div class="spacer"></div>
        <button class="btn small" id="bt-speed" title="游戏速度">▶ x1</button>
        <button class="btn small" id="bt-sound" title="声音">🔊</button>
        <button class="btn small" id="bt-pause" title="暂停 (Esc)">⏸</button>
      </div>
      <div class="boss-bar hidden" id="boss-bar"><div class="boss-name" id="boss-name"></div><div class="boss-track"><div class="boss-fill" id="boss-fill"></div></div></div>
      <div class="build-panel" id="build-panel"><div class="panel-title">防御塔</div></div>
      <div class="tower-panel hidden" id="tower-panel"></div>
      <div class="hero-panel" id="hero-panel">
        <div class="panel-title">英雄 <small>(最多 ${MAX_HEROES} 名)</small></div>
        <div class="hero-list" id="hero-list"></div>
        <div class="skill-bar" id="skill-bar"></div>
      </div>
      <div class="hand-area">
        <div class="mana-wrap">
          <div class="mana-orb"><span id="mana-num">0</span></div>
          <div class="mana-track"><div class="mana-fill" id="mana-fill"></div><div class="mana-ticks" id="mana-ticks">${'<i></i>'.repeat(10)}</div></div>
        </div>
        <div class="combo-timer hidden" id="combo-timer"></div>
        <div class="hand" id="hand"></div>
        <div class="pile-info"><span title="抽牌堆">🂠 <b id="pile-draw"></b></span><span title="弃牌堆">🗑 <b id="pile-disc"></b></span></div>
      </div>
      <div class="wave-preview" id="wave-preview"></div>
      <button class="btn primary wave-btn" id="bt-wave">⚔ 开始第 1 波 <small>(空格)</small></button>
      <div class="help-tip">左键：选择/移动 · 点敌人：集火 · WASD：操控 · 按住 Q/E/R 瞄准松开施放 · Shift+Q/E/R：学习技能 · H：坚守 · 1-9：出牌</div>
      <div class="banner" id="banner"></div>
      <div class="toasts" id="toasts"></div>
      <div class="floats" id="floats"></div>
      <div class="overlay hidden" id="overlay"></div>
    `;
    const $ = (id) => this.root.querySelector('#' + id);
    this.$ = $;
    // 建造按钮
    const bp = $('build-panel');
    this.buildBtns = {};
    for (const type of TOWER_ORDER) {
      const d = TOWERS[type];
      const b = el('button', 'build-btn', `<span class="bi">${d.icon}</span><span class="bn">${d.name}</span><span class="bc">💰${g.towerCost(type, 0)}</span>`);
      b.title = d.desc;
      b.addEventListener('click', () => {
        audio.play('click');
        if (g.buildType === type) g.cancelModes();
        else g.setBuildType(type);
      });
      b.addEventListener('mouseenter', () => this.tooltip(b, `<b>${d.icon} ${d.name}</b><br>${d.desc}<br>${statLine(d, 0)}`));
      b.addEventListener('mouseleave', () => this.tooltip(null));
      bp.appendChild(b);
      this.buildBtns[type] = b;
    }
    // 英雄
    const hl = $('hero-list');
    this.heroBtns = {};
    for (const id of HERO_ORDER) {
      const d = HEROES[id];
      const b = el('button', 'hero-btn', `<div class="hp-face" style="--hc:#${d.color.toString(16).padStart(6, '0')}">${d.icon}</div>
        <div class="hero-info"><div class="hn">${d.name}</div><div class="hbar"><i></i></div><div class="hs"></div></div>`);
      b.addEventListener('click', () => g.summonOrSelectHero(id));
      b.addEventListener('mouseenter', () => this.tooltip(b, `<b>${d.icon} ${d.title} · ${d.name}</b><br>${d.desc}<br>生命 ${d.hp} · 攻击 ${d.atk} · 召唤 💰${d.cost}<hr><b>被动 ${d.passive.icon} ${d.passive.name}</b><br><small>${d.passive.desc}</small><br>${d.skills.map((s) => `<b>[${s.key}] ${s.icon} ${s.name}</b> (${s.cd}秒)<br><small>${s.desc}</small>`).join('<br>')}<hr><small>升级获得技能点：Shift+Q/E/R 学习。终极技能 3 级解锁。</small>`));
      b.addEventListener('mouseleave', () => this.tooltip(null));
      hl.appendChild(b);
      this.heroBtns[id] = b;
    }
    $('bt-wave').addEventListener('click', () => { audio.play('click'); g.startWave(); });
    $('bt-speed').addEventListener('click', () => {
      g.speed = g.speed === 1 ? 2 : g.speed === 2 ? 3 : 1;
      $('bt-speed').textContent = `▶ x${g.speed}`;
      audio.play('click');
    });
    $('bt-sound').addEventListener('click', () => {
      audio.setMuted(!audio.muted);
      $('bt-sound').textContent = audio.muted ? '🔇' : '🔊';
    });
    $('bt-pause').addEventListener('click', () => this.togglePause());
    this.renderRelics();
    this.renderSynergies();
    this.tip = el('div', 'tooltip hidden');
    this.root.appendChild(this.tip);
  }

  tooltip(anchor, html) {
    if (!anchor) { this.tip.classList.add('hidden'); return; }
    this.tip.innerHTML = html;
    this.tip.classList.remove('hidden');
    const r = anchor.getBoundingClientRect();
    const tr = this.tip.getBoundingClientRect();
    let x = r.left + r.width / 2 - tr.width / 2;
    let y = r.top - tr.height - 10;
    if (y < 10) y = r.bottom + 10;
    x = Math.max(8, Math.min(window.innerWidth - tr.width - 8, x));
    this.tip.style.left = x + 'px';
    this.tip.style.top = y + 'px';
  }

  renderAll() {
    this.renderHand(true);
    this.renderHeroes();
    this.updateBuildButtons();
    this.refresh(true);
  }

  renderHand(animateNew = false) {
    const g = this.game;
    const hand = this.$('hand');
    const prevCount = hand.children.length;
    hand.innerHTML = '';
    const n = g.hand.length;
    g.hand.forEach((id, i) => {
      const wrap = el('div', 'hand-slot');
      const off = i - (n - 1) / 2;
      wrap.style.setProperty('--rot', `${off * 4}deg`);
      wrap.style.setProperty('--ty', `${Math.abs(off) * Math.abs(off) * 3}px`);
      wrap.innerHTML = cardHTML(id) + `<div class="card-key">${i + 1}</div>`;
      const card = wrap.firstElementChild;
      if (g.mana < CARDS[id].cost) card.classList.add('unaffordable');
      if (g.pendingCard === i) wrap.classList.add('pending');
      if (animateNew && i >= prevCount) wrap.classList.add('drawn');
      wrap.addEventListener('click', (e) => {
        e.stopPropagation();
        if (g.pendingCard === i) { g.cancelModes(); return; }
        g.selectCard(i);
      });
      hand.appendChild(wrap);
    });
    this.$('pile-draw').textContent = g.drawPile.length;
    this.$('pile-disc').textContent = g.discard.length;
    this.lastManaInt = -1;
  }

  cardCastFx(card) {
    const f = el('div', 'cast-flash', `<span>${card.icon}</span><b>${card.name}</b>`);
    f.style.setProperty('--cc', card.color);
    this.root.appendChild(f);
    setTimeout(() => f.remove(), 1100);
    audio.play('cast', 0.6);
  }

  renderHeroes() {
    const g = this.game;
    for (const id of HERO_ORDER) {
      const b = this.heroBtns[id];
      const h = g.heroOnField(id);
      b.classList.toggle('summoned', !!h);
      b.classList.toggle('selected', !!h && g.selectedHero === h);
      b.classList.toggle('dead', !!h && !h.alive);
    }
    const sb = this.$('skill-bar');
    sb.innerHTML = '';
    const h = g.selectedHero;
    if (!h) { sb.innerHTML = '<div class="skill-hint">点击头像召唤英雄</div>'; return; }
    const d = HEROES[h.id];
    const pv = el('div', 'passive-ico', d.passive.icon);
    pv.addEventListener('mouseenter', () => this.tooltip(pv, `<b>被动：${d.passive.name}</b><br>${d.passive.desc}`));
    pv.addEventListener('mouseleave', () => this.tooltip(null));
    sb.appendChild(pv);
    d.skills.forEach((s, i) => {
      const rank = h.ranks[i];
      const canLearn = h.skillPts > 0 && rank < SKILL_MAX[i] && h.level >= skillReq(i, rank + 1);
      const pips = Array.from({ length: SKILL_MAX[i] }, (_, k) => `<i class="${k < rank ? 'on' : ''}"></i>`).join('');
      const b = el('button', `skill-btn ${rank === 0 ? 'locked' : ''}`, `<span class="si">${s.icon}</span><span class="sk">${s.key}</span><div class="cd"></div><span class="cdt"></span><div class="pips">${pips}</div>${canLearn ? '<div class="learn" title="学习 (Shift+' + s.key + ')">+</div>' : ''}`);
      b.addEventListener('click', (e) => {
        if (e.target.classList.contains('learn')) { g.learnSkill(h, i); return; }
        if (g.aimSkill === i) { g.cancelModes(); return; }
        this.aimFromButton = true;
        g.beginAim(i);
      });
      b.addEventListener('mouseenter', () => {
        this.hoverSkill = i;
        const cd = (s.cd * rankCd(Math.max(1, rank))).toFixed(1);
        const nextReq = rank < SKILL_MAX[i] ? skillReq(i, rank + 1) : 0;
        this.tooltip(b, `<b>[${s.key}] ${s.name}</b> · ${rank ? `${rank} 级` : '未学习'} · 冷却 ${cd} 秒<br>${s.desc}<br><small>当前威力 ×${rankMul(Math.max(1, rank)).toFixed(1)}；每级伤害/治疗 +30%、冷却 -8%</small><br><small>${rank < SKILL_MAX[i] ? `下一级需要英雄 Lv.${nextReq}（可用技能点 ${h.skillPts}）` : '已满级'}</small><br><small>按住 ${s.key} 瞄准、松开施放；或点击按钮后点击地面</small>`);
      });
      b.addEventListener('mouseleave', () => { this.hoverSkill = -1; this.tooltip(null); });
      sb.appendChild(b);
    });
    if (h.skillPts > 0) sb.appendChild(el('div', 'pts-badge', `${h.skillPts}`));
    this.skillEls = [...sb.querySelectorAll('.skill-btn')];
    this.lastPts = h.skillPts;
  }

  renderRelics() {
    const g = this.game;
    const bar = this.$('relic-bar');
    if (!bar) return;
    bar.innerHTML = '';
    for (const id of g.relics) {
      const r = RELICS[id];
      const d = el('div', 'relic', r.icon);
      d.addEventListener('mouseenter', () => this.tooltip(d, `<b>${r.icon} ${r.name}</b><br>${r.desc}`));
      d.addEventListener('mouseleave', () => this.tooltip(null));
      bar.appendChild(d);
    }
  }

  renderSynergies() {
    const g = this.game;
    const bar = this.$('syn-bar');
    if (!bar) return;
    bar.innerHTML = '';
    const counts = schoolCounts(g.deck);
    for (const k of SCHOOL_ORDER) {
      if (!counts[k]) continue;
      const S = SCHOOLS[k];
      const tier = g.tiers[k];
      const d = el('div', `syn tier${tier}`, `${S.icon}<b>${counts[k]}</b>`);
      d.style.setProperty('--sc', S.color);
      d.addEventListener('mouseenter', () => this.tooltip(d, `<b>${S.icon} ${S.name}流派</b>（卡组中 ${counts[k]} 张）<br>${S.tiers.map((t, i) => `<span style="opacity:${i < tier ? 1 : 0.45}">${i < tier ? '✔' : '○'} [${t.n}] ${t.desc}</span>`).join('<br>')}<br><small>连续打出同流派卡牌触发连携，伤害逐层 +15%</small>`));
      d.addEventListener('mouseleave', () => this.tooltip(null));
      bar.appendChild(d);
    }
  }

  comboFx(n, school) {
    const f = el('div', 'combo-pop', `${school.icon} 连携 ×${n}<small>伤害 +${(n - 1) * 15}%</small>`);
    f.style.setProperty('--sc', school.color);
    this.root.appendChild(f);
    setTimeout(() => f.remove(), 1300);
    audio.play('magic', 0.5 + n * 0.1);
  }

  renderWavePreview() {
    const g = this.game;
    const box = this.$('wave-preview');
    if (g.state !== 'build' || g.wave >= g.map.waves) { box.classList.add('hidden'); return; }
    const pv = wavePreview(g.map, g.wave + 1);
    box.classList.remove('hidden');
    box.innerHTML = `<div class="wp-title">下一波</div>` + Object.entries(pv).map(([t, c]) => {
      const e = ENEMIES[t];
      const tags = [e.flying ? '飞行' : '', e.armor >= 0.4 ? '重甲' : '', e.mres >= 0.3 ? '魔抗' : '', e.phase ? '相位' : '', e.healer ? '治疗' : '', e.splits ? '分裂' : ''].filter(Boolean).join(' ');
      return `<span class="wp-e ${e.boss ? 'boss' : ''}" title="${e.name}${tags ? '（' + tags + '）' : ''}">${e.icon}<b>×${c}</b></span>`;
    }).join('');
  }

  updateBuildButtons() {
    const g = this.game;
    for (const [type, b] of Object.entries(this.buildBtns)) {
      b.classList.toggle('active', g.buildType === type);
      b.classList.toggle('disabled', g.gold < g.towerCost(type, 0));
    }
  }

  showTowerPanel(t) {
    const g = this.game;
    const p = this.$('tower-panel');
    p.classList.remove('hidden');
    const d = t.def;
    const next = t.level < 2 ? { ...d.levels[t.level + 1], cost: g.towerCost(t.type, t.level + 1) } : null;
    p.innerHTML = `
      <div class="tp-title">${d.icon} ${d.name} <span class="lv">Lv.${t.level + 1}</span></div>
      <div class="tp-stats">${statLine(d, t.level, t.dmgMul)}${t.kills ? `<br>击杀：${t.kills}` : ''}</div>
      ${next ? `<div class="tp-next">升级后：${statLine(d, t.level + 1, t.dmgMul)}</div>` : '<div class="tp-next">已达最高等级</div>'}
      <div class="tp-btns">
        ${next ? `<button class="btn primary" id="tp-up">⬆ 升级 💰${next.cost} <small>(U)</small></button>` : ''}
        <button class="btn danger" id="tp-sell">出售 +${Math.floor(t.spent * 0.7)} <small>(X)</small></button>
      </div>`;
    const up = p.querySelector('#tp-up');
    if (up) {
      up.classList.toggle('disabled', g.gold < next.cost);
      up.addEventListener('click', () => g.upgradeTower(t));
    }
    p.querySelector('#tp-sell').addEventListener('click', () => g.sellTower(t));
    this.panelTower = t;
    this.panelGold = g.gold;
  }
  hideTowerPanel() { this.$('tower-panel').classList.add('hidden'); this.panelTower = null; }

  bossBar(e) {
    this.boss = e;
    this.$('boss-bar').classList.remove('hidden');
    this.$('boss-name').textContent = `👑 ${e.def.name}`;
  }

  refresh(force = false) {
    const g = this.game;
    const set = (id, v) => { const e = this.$(id); if (e.textContent !== String(v)) e.textContent = v; };
    set('st-lives', g.lives);
    set('st-gold', g.gold);
    set('st-wave', `${g.wave} / ${g.map.waves}`);
    const wb = this.$('bt-wave');
    const show = g.state === 'build';
    wb.classList.toggle('hidden', !show);
    if (show) wb.innerHTML = `⚔ 开始第 ${g.wave + 1} 波 <small>(空格)</small>`;
    if (force || this.lastPreviewWave !== g.wave + ':' + g.state) { this.lastPreviewWave = g.wave + ':' + g.state; this.renderWavePreview(); }
    this.updateBuildButtons();
    // 英雄状态
    for (const id of HERO_ORDER) {
      const b = this.heroBtns[id];
      const h = g.heroOnField(id);
      const bar = b.querySelector('.hbar i');
      const hs = b.querySelector('.hs');
      if (h) {
        bar.style.width = `${(h.hp / h.maxHp) * 100}%`;
        hs.textContent = h.alive ? `Lv.${h.level}${h.skillPts ? ` · ✦${h.skillPts}` : ''}${h.focus ? ' · 🎯' : ''}${h.holdPos ? ' · 🛡坚守' : ''}` : `复活 ${Math.ceil(h.respawn)}s`;
      } else {
        bar.style.width = '0%';
        hs.textContent = g.heroCount() >= MAX_HEROES ? '队伍已满' : `召唤 💰${HEROES[id].cost}`;
        b.classList.toggle('disabled', g.gold < HEROES[id].cost || g.heroCount() >= MAX_HEROES);
      }
      if (h && h.alive === b.classList.contains('dead')) this.renderHeroes();
    }
    if (g.selectedHero && g.selectedHero.skillPts !== this.lastPts) this.renderHeroes();
    if (this.panelTower && this.panelGold !== g.gold) this.showTowerPanel(this.panelTower);
  }

  update(dt) {
    const g = this.game;
    // 法力条（每帧）
    const m = g.mana;
    this.$('mana-fill').style.width = `${(m / g.maxMana) * 100}%`;
    const mi = Math.floor(m);
    if (mi !== this.lastManaInt) {
      this.lastManaInt = mi;
      this.$('mana-num').textContent = g.maxMana > 10 ? `${mi}` : mi;
      if (this.lastMaxMana !== g.maxMana) { this.lastMaxMana = g.maxMana; this.$('mana-ticks').innerHTML = '<i></i>'.repeat(g.maxMana); }
      const cards = this.$('hand').querySelectorAll('.card');
      cards.forEach((c, i) => c.classList.toggle('unaffordable', g.mana < CARDS[g.hand[i]].cost));
    }
    // 技能冷却
    if (this.skillEls && g.selectedHero) {
      const h = g.selectedHero;
      const d = HEROES[h.id];
      this.skillEls.forEach((b, i) => {
        const cd = h.cds[i];
        const k = cd / d.skills[i].cd;
        b.querySelector('.cd').style.height = `${k * 100}%`;
        b.querySelector('.cdt').textContent = cd > 0 ? Math.ceil(cd) : '';
        b.classList.toggle('ready', cd <= 0 && h.alive && h.ranks[i] > 0);
        b.classList.toggle('aiming', g.aimSkill === i);
      });
    }
    if (g.aimSkill < 0) this.aimFromButton = false;
    // 连携计时
    const cb = this.$('combo-timer');
    if (cb) {
      const c = g.combo;
      const active = c.n >= 1 && g.time < c.until;
      cb.classList.toggle('hidden', !active);
      if (active) {
        const S = SCHOOLS[c.school];
        cb.style.setProperty('--sc', S.color);
        cb.innerHTML = `${S.icon} 连携 ${c.n}/${g.comboMax}<i style="width:${((c.until - g.time) / g.comboWindow) * 100}%"></i>`;
      }
    }
    // 首领血条
    if (this.boss) {
      if (!this.boss.alive) { this.boss = null; this.$('boss-bar').classList.add('hidden'); }
      else this.$('boss-fill').style.width = `${(this.boss.hp / this.boss.maxHp) * 100}%`;
      if (!this.boss) { const nb = g.enemies.find((e) => e.boss && e.alive); if (nb) this.bossBar(nb); }
    }
    // 浮动文字
    const cam = g.camera;
    const v = new THREE.Vector3();
    for (let i = this.floats.length - 1; i >= 0; i--) {
      const f = this.floats[i];
      f.t += dt;
      f.pos.y += dt * 1.5;
      v.copy(f.pos).project(cam);
      f.el.style.transform = `translate(${(v.x * 0.5 + 0.5) * window.innerWidth}px, ${(-v.y * 0.5 + 0.5) * window.innerHeight}px) translate(-50%,-50%) scale(${f.big ? 1.3 : 1})`;
      f.el.style.opacity = String(Math.max(0, 1 - Math.max(0, f.t - 0.6) / 0.5));
      if (f.t > 1.1) { f.el.remove(); this.floats.splice(i, 1); }
    }
    this.refreshT += dt;
    if (this.refreshT > 0.1) { this.refreshT = 0; this.refresh(); }
  }

  floatText(pos, text, color = '#fff', big = false) {
    if (this.floats.length > 40) { const f = this.floats.shift(); f.el.remove(); }
    const e = el('div', 'float-text' + (big ? ' big' : ''), String(text));
    e.style.color = color;
    this.$('floats').appendChild(e);
    this.floats.push({ el: e, pos: pos.clone(), t: 0, big });
  }

  toast(msg) {
    const box = this.$('toasts');
    const t = el('div', 'toast', msg);
    box.appendChild(t);
    while (box.children.length > 4) box.firstChild.remove();
    setTimeout(() => t.classList.add('out'), 2200);
    setTimeout(() => t.remove(), 2700);
  }

  banner(text, color = '#fff', sub = '') {
    const b = this.$('banner');
    b.innerHTML = `<div class="bt" style="color:${color}">${text}</div>${sub ? `<div class="bs">${sub}</div>` : ''}`;
    b.classList.remove('show');
    void b.offsetWidth;
    b.classList.add('show');
  }

  showReward(ids, cb) {
    const o = this.$('overlay');
    o.classList.remove('hidden');
    o.innerHTML = `<div class="reward-box">
      <h2>✨ 第 ${this.game.wave} 波胜利！选择一张卡牌加入卡组</h2>
      <div class="reward-cards">${ids.map((id) => cardHTML(id)).join('')}</div>
      <div class="rw-btns"><button class="btn" id="rw-thin">✂ 改为精简卡组（移除一张）</button><button class="btn" id="rw-skip">跳过（+35 金币）</button></div>
      <div class="thin-list hidden" id="rw-thin-list"></div>
    </div>`;
    o.querySelectorAll('.card').forEach((c, i) => {
      c.style.animationDelay = `${i * 0.12}s`;
      c.addEventListener('mouseenter', () => audio.play('hover'));
      c.addEventListener('click', () => {
        audio.play('card');
        audio.play('upgrade', 0.6);
        c.classList.add('picked');
        setTimeout(() => { o.classList.add('hidden'); o.innerHTML = ''; cb(c.dataset.id); this.renderHand(); }, 450);
      }, { once: true });
    });
    o.querySelector('#rw-skip').addEventListener('click', () => { audio.play('click'); o.classList.add('hidden'); o.innerHTML = ''; cb(null); this.renderHand(); });
    o.querySelector('#rw-thin').addEventListener('click', () => {
      audio.play('click');
      const g = this.game;
      const list = o.querySelector('#rw-thin-list');
      if (g.deck.length <= 8) { this.toast('卡组至少保留 8 张'); return; }
      list.classList.toggle('hidden');
      const uniq = [...new Set(g.deck)].sort((a, b) => CARDS[a].cost - CARDS[b].cost);
      list.innerHTML = '<div class="wp-title">点击要移除的卡牌（本局有效）</div>' + uniq.map((id) => {
        const c = CARDS[id];
        return `<div class="deck-row" data-id="${id}" style="--cc:${c.color};--rc:${RARITY[c.rarity].color}"><span class="dr-cost">${c.cost}</span><span class="dr-icon">${c.icon}</span><span class="dr-name">${c.name}</span><span class="dr-n">×${g.deck.filter((x) => x === id).length}</span></div>`;
      }).join('');
      list.querySelectorAll('.deck-row').forEach((r) => r.addEventListener('click', () => {
        audio.play('sell');
        o.classList.add('hidden'); o.innerHTML = '';
        cb(null, r.dataset.id);
        this.renderHand();
      }, { once: true }));
    });
  }

  showRelicChoice(ids, title, cb, skipLabel = null) {
    const o = this.$('overlay');
    o.classList.remove('hidden');
    o.innerHTML = `<div class="reward-box">
      <h2>${title}</h2>
      <p class="rw-sub">遗物在本局持续生效</p>
      <div class="reward-cards relics">${ids.map((id) => {
        const r = RELICS[id];
        return `<div class="relic-card" data-id="${id}"><div class="rc-icon">${r.icon}</div><div class="rc-name">${r.name}</div><div class="rc-desc">${r.desc}</div></div>`;
      }).join('')}</div>
      ${skipLabel ? `<button class="btn" id="rl-skip">${skipLabel}</button>` : ''}
    </div>`;
    o.querySelectorAll('.relic-card').forEach((c, i) => {
      c.style.animationDelay = `${i * 0.12}s`;
      c.addEventListener('mouseenter', () => audio.play('hover'));
      c.addEventListener('click', () => {
        c.classList.add('picked');
        setTimeout(() => { o.classList.add('hidden'); o.innerHTML = ''; cb(c.dataset.id); }, 400);
      }, { once: true });
    });
    const sk = o.querySelector('#rl-skip');
    if (sk) sk.addEventListener('click', () => { audio.play('click'); o.classList.add('hidden'); o.innerHTML = ''; cb(null); });
  }

  showEnd(win) {
    const g = this.game;
    const o = this.$('overlay');
    o.classList.remove('hidden');
    const s = g.stats;
    o.innerHTML = `<div class="end-box ${win ? 'win' : 'lose'}">
      <h1>${win ? '🏆 胜利！' : '💀 圣坛陷落'}</h1>
      <p>${win ? `你成功守护了「${g.map.name}」！` : `你坚持到了第 ${g.wave} 波。`}</p>
      <div class="end-stats">
        <div><b>${s.kills}</b><span>击杀</span></div>
        <div><b>${s.cardsPlayed}</b><span>使用卡牌</span></div>
        <div><b>${s.maxCombo}</b><span>最高连携</span></div>
        <div><b>${g.relics.map((r) => RELICS[r].icon).join('') || '—'}</b><span>遗物</span></div>
        <div><b>${s.goldEarned}</b><span>获得金币</span></div>
        <div><b>${g.towers.length}</b><span>防御塔</span></div>
      </div>
      <div class="end-btns">
        <button class="btn primary" id="end-retry">再来一次</button>
        <button class="btn" id="end-menu">返回主菜单</button>
      </div>
    </div>`;
    o.querySelector('#end-retry').addEventListener('click', () => { audio.play('click'); g.app.startGame(g.mapIdx); });
    o.querySelector('#end-menu').addEventListener('click', () => { audio.play('click'); g.app.showTitle(); });
  }

  togglePause() {
    const g = this.game;
    if (g.state === 'over' || g.state === 'reward') return;
    g.paused = !g.paused;
    audio.play('click');
    const o = this.$('overlay');
    if (g.paused) {
      o.classList.remove('hidden');
      o.innerHTML = `<div class="end-box">
        <h1>⏸ 已暂停</h1>
        <div class="end-btns col">
          <button class="btn primary" id="pa-resume">继续游戏</button>
          <button class="btn" id="pa-restart">重新开始</button>
          <button class="btn" id="pa-menu">返回主菜单</button>
        </div></div>`;
      o.querySelector('#pa-resume').addEventListener('click', () => this.togglePause());
      o.querySelector('#pa-restart').addEventListener('click', () => g.app.startGame(g.mapIdx));
      o.querySelector('#pa-menu').addEventListener('click', () => g.app.showTitle());
    } else {
      o.classList.add('hidden');
      o.innerHTML = '';
    }
  }

  dispose() { this.root.remove(); }
}

function statLine(d, lv, mul = 1) {
  const s = d.levels[lv];
  if (d.support) return `法力恢复 +${s.mana}/秒`;
  const parts = [`伤害 ${Math.round(s.dmg * mul)}`, `间隔 ${s.rate}s`, `射程 ${s.range}`];
  if (d.pulse) parts.push(`减速 ${Math.round(s.slow * 100)}%`);
  if (s.chain) parts.push(`弹跳 ${s.chain}`);
  if (d.splash) parts.push(`溅射 ${s.splash || d.splash}`);
  parts.push(d.air ? '可对空' : '仅对地');
  parts.push(d.dtype === 'magic' ? '魔法' : '物理');
  return parts.join(' · ');
}
