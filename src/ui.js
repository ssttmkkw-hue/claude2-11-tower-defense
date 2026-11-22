// ============ 游戏内 HUD ============
import * as THREE from 'three';
import { TOWERS, TOWER_ORDER, HEROES, HERO_ORDER, CARDS, RARITY, MAX_HEROES } from './data.js';
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
          <div class="mana-track"><div class="mana-fill" id="mana-fill"></div><div class="mana-ticks">${'<i></i>'.repeat(10)}</div></div>
        </div>
        <div class="hand" id="hand"></div>
        <div class="pile-info"><span title="抽牌堆">🂠 <b id="pile-draw"></b></span><span title="弃牌堆">🗑 <b id="pile-disc"></b></span></div>
      </div>
      <button class="btn primary wave-btn" id="bt-wave">⚔ 开始第 1 波 <small>(空格)</small></button>
      <div class="help-tip">左键：选择/移动英雄 · 右键：移动/取消 · WASD：操控英雄 · Q/E/R：技能 · 1-7：出牌 · Tab：切换英雄 · 方向键/滚轮：镜头</div>
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
      const b = el('button', 'build-btn', `<span class="bi">${d.icon}</span><span class="bn">${d.name}</span><span class="bc">💰${d.levels[0].cost}</span>`);
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
      b.addEventListener('mouseenter', () => this.tooltip(b, `<b>${d.icon} ${d.title} · ${d.name}</b><br>${d.desc}<br>生命 ${d.hp} · 攻击 ${d.atk} · 召唤 💰${d.cost}<hr>${d.skills.map((s) => `<b>[${s.key}] ${s.icon} ${s.name}</b> (${s.cd}秒)<br><small>${s.desc}</small>`).join('<br>')}`));
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
    d.skills.forEach((s, i) => {
      const b = el('button', 'skill-btn', `<span class="si">${s.icon}</span><span class="sk">${s.key}</span><div class="cd"></div><span class="cdt"></span>`);
      b.addEventListener('click', () => g.castHeroSkill(i));
      b.addEventListener('mouseenter', () => { this.hoverSkill = i; this.tooltip(b, `<b>[${s.key}] ${s.name}</b> · 冷却 ${s.cd} 秒<br>${s.desc}<br><small>技能朝鼠标位置释放</small>`); });
      b.addEventListener('mouseleave', () => { this.hoverSkill = -1; this.tooltip(null); });
      sb.appendChild(b);
    });
    this.skillEls = [...sb.querySelectorAll('.skill-btn')];
  }

  updateBuildButtons() {
    const g = this.game;
    for (const [type, b] of Object.entries(this.buildBtns)) {
      b.classList.toggle('active', g.buildType === type);
      b.classList.toggle('disabled', g.gold < TOWERS[type].levels[0].cost);
    }
  }

  showTowerPanel(t) {
    const g = this.game;
    const p = this.$('tower-panel');
    p.classList.remove('hidden');
    const d = t.def;
    const next = t.level < 2 ? d.levels[t.level + 1] : null;
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
    this.updateBuildButtons();
    // 英雄状态
    for (const id of HERO_ORDER) {
      const b = this.heroBtns[id];
      const h = g.heroOnField(id);
      const bar = b.querySelector('.hbar i');
      const hs = b.querySelector('.hs');
      if (h) {
        bar.style.width = `${(h.hp / h.maxHp) * 100}%`;
        hs.textContent = h.alive ? `Lv.${h.level}` : `复活 ${Math.ceil(h.respawn)}s`;
      } else {
        bar.style.width = '0%';
        hs.textContent = g.heroCount() >= MAX_HEROES ? '队伍已满' : `召唤 💰${HEROES[id].cost}`;
        b.classList.toggle('disabled', g.gold < HEROES[id].cost || g.heroCount() >= MAX_HEROES);
      }
      if (h && h.alive === b.classList.contains('dead')) this.renderHeroes();
    }
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
      this.$('mana-num').textContent = mi;
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
        b.classList.toggle('ready', cd <= 0 && h.alive);
      });
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
      <button class="btn" id="rw-skip">跳过（+35 金币）</button>
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
