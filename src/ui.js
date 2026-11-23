// ============ 游戏内 HUD ============
import * as THREE from 'three';
import { TOWERS, TOWER_ORDER, HEROES, HERO_ORDER, CARDS, RARITY, MAX_HEROES, SCHOOLS, SCHOOL_ORDER, RELICS, ENEMIES, SKILL_MAX, skillReq, rankMul, rankCd, wavePreview, schoolCounts } from './data.js';
import { audio } from './audio.js';
import { skillRange } from './spells.js';
import { IS_TOUCH, QUALITY, haptic } from './device.js';
const Q_NAMES = { auto: '自动', high: '高', low: '省电' };

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
    this.lpFired = false;
    this.build();
    // 长按 / 拖拽之后吞掉随之而来的 click
    this.root.addEventListener('click', (e) => { if (this.lpFired) { this.lpFired = false; e.stopPropagation(); e.preventDefault(); } }, true);
    this._docDown = (e) => { this.lpFired = false; if (e.pointerType !== 'mouse') { if (!e.target.closest || !e.target.closest('.tooltip')) this.tooltip(null); } };
    document.addEventListener('pointerdown', this._docDown, true);
  }

  // 悬停提示：鼠标悬停显示，触屏长按显示
  bindTip(elm, htmlFn, opts = {}) {
    elm.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') { this.tooltip(elm, htmlFn()); if (opts.enter) opts.enter(); } });
    elm.addEventListener('pointerleave', (e) => { if (e.pointerType === 'mouse') { this.tooltip(null); if (opts.leave) opts.leave(); } });
    if (!IS_TOUCH) return;
    let timer = null, sx = 0, sy = 0;
    elm.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse') return;
      this.lpFired = false;
      sx = e.clientX; sy = e.clientY;
      clearTimeout(timer);
      timer = setTimeout(() => {
        this.tooltip(elm, htmlFn());
        this.lpFired = true;
        clearTimeout(this.tipHideT);
        this.tipHideT = setTimeout(() => this.tooltip(null), 4000);
        haptic(8);
      }, 430);
    });
    elm.addEventListener('pointermove', (e) => { if (Math.hypot(e.clientX - sx, e.clientY - sy) > 10) clearTimeout(timer); });
    for (const ev of ['pointerup', 'pointercancel', 'pointerleave']) elm.addEventListener(ev, () => clearTimeout(timer));
  }

  // 从 UI 元素拖出到战场：onStart() 返回 false 取消；松手时交由 game 处理
  bindDragOut(elm, { onStart, icon, color, threshold = 22 }) {
    elm.addEventListener('pointerdown', (e) => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      const id = e.pointerId, sx = e.clientX, sy = e.clientY;
      let drag = null;
      const g = this.game;
      const move = (ev) => {
        if (ev.pointerId !== id) return;
        if (!drag) {
          if (Math.hypot(ev.clientX - sx, ev.clientY - sy) < threshold) return;
          if (onStart() === false) { cleanup(); return; }
          drag = el('div', 'drag-ghost', `<span>${icon}</span>`);
          drag.style.setProperty('--cc', color);
          this.root.appendChild(drag);
          this.lpFired = true;
          this.tooltip(null);
          haptic(10);
        }
        drag.style.transform = `translate(${ev.clientX}px, ${ev.clientY}px)`;
        const over = document.elementFromPoint(ev.clientX, ev.clientY);
        drag.classList.toggle('over-ui', over !== g.app.renderer.domElement);
        g.dragAimTo(ev.clientX, ev.clientY);
      };
      const up = (ev) => {
        if (ev.pointerId !== id) return;
        cleanup();
        if (drag) {
          drag.remove();
          if (ev.type === 'pointercancel') g.cancelModes();
          else g.dragAimRelease(ev.clientX, ev.clientY);
        }
      };
      const cleanup = () => {
        window.removeEventListener('pointermove', move);
        window.removeEventListener('pointerup', up);
        window.removeEventListener('pointercancel', up);
      };
      window.addEventListener('pointermove', move);
      window.addEventListener('pointerup', up);
      window.addEventListener('pointercancel', up);
    });
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
      <div class="mode-bar hidden" id="mode-bar"></div>
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
          <div class="pile-info"><span title="抽牌堆">🂠 <b id="pile-draw"></b></span><span title="弃牌堆">🗑 <b id="pile-disc"></b></span></div>
        </div>
        <div class="combo-timer hidden" id="combo-timer"></div>
        <div class="hand" id="hand"></div>
      </div>
      <div class="wave-preview" id="wave-preview"></div>
      <button class="btn primary wave-btn" id="bt-wave">⚔ 开始第 1 波 <small class="kbd">(空格)</small></button>
      <div class="help-tip ${IS_TOUCH ? 'hidden' : ''}">左键：选择/移动 · 点敌人：集火 · WASD：操控 · 按住 Q/E/R 瞄准松开施放 · Shift+Q/E/R：学习技能 · H：坚守 · 1-9：出牌</div>
      <div class="danger-vignette" id="danger"></div>
      <div class="banner" id="banner"></div>
      <div class="toasts" id="toasts"></div>
      <div class="floats" id="floats"></div>
      <div class="overlay scroll-y hidden" id="overlay"></div>
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
      this.bindTip(b, () => `<b>${d.icon} ${d.name}</b> · 💰${g.towerCost(type, 0)}<br>${d.desc}<br>${statLine(d, 0)}`);
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
      this.bindTip(b, () => `<b>${d.icon} ${d.title} · ${d.name}</b><br>${d.desc}<br>生命 ${d.hp} · 攻击 ${d.atk} · 召唤 💰${d.cost}<hr><b>被动 ${d.passive.icon} ${d.passive.name}</b><br><small>${d.passive.desc}</small><br>${d.skills.map((s) => `<b>[${s.key}] ${s.icon} ${s.name}</b> (${s.cd}秒)<br><small>${s.desc}</small>`).join('<br>')}<hr><small>${IS_TOUCH ? '升级获得技能点：点击技能上的「+」学习' : '升级获得技能点：Shift+Q/E/R 学习'}。终极技能 3 级解锁。</small>`);
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
      const c = CARDS[id];
      wrap.addEventListener('click', (e) => {
        e.stopPropagation();
        if (g.pendingCard === i) { g.cancelModes(); return; }
        haptic(8);
        g.selectCard(i);
      });
      this.bindTip(wrap, () => `<b>${c.icon} ${c.name}</b> · 法力 ${c.cost} · <span style="color:${RARITY[c.rarity].color}">${RARITY[c.rarity].name}</span>${c.school ? ` · ${SCHOOLS[c.school].icon}${SCHOOLS[c.school].name}` : ''}<br>${c.desc}<br><small>${c.target === 'none' ? '立即生效' : c.target === 'tower' ? '选择一座防御塔' : '点击或拖到地面释放'}</small>`);
      // 拖出手牌直接施放
      this.bindDragOut(wrap, {
        icon: c.icon, color: c.color,
        onStart: () => {
          if (g.state === 'over' || g.state === 'reward' || g.paused) return false;
          if (g.mana < c.cost) { audio.play('error'); this.toast('法力不足！'); return false; }
          if (c.target === 'none') { g.cancelModes(); g.dragNoneCard = i; return true; }
          if (g.pendingCard !== i) g.selectCard(i);
          return g.pendingCard === i;
        },
      });
      hand.appendChild(wrap);
    });
    this.$('pile-draw').textContent = g.drawPile.length;
    this.$('pile-disc').textContent = g.discard.length;
    this.lastManaInt = -1;
    this.fitHand();
  }

  // 根据可用宽度动态调整手牌重叠，保证任意手牌数都不溢出屏幕
  fitHand() {
    const hand = this.$('hand');
    const n = hand.children.length;
    if (!n) return;
    const compact = document.body.classList.contains('compact');
    const avail = hand.parentElement.clientWidth - (compact ? 44 : 50); // 预留扇形旋转的外扩
    const cw = hand.children[0].firstElementChild.offsetWidth;
    const base = compact ? -2 : -10;
    let m = base;
    if (n * (cw + 2 * base) > avail) m = Math.max(-cw * 0.36, (avail / n - cw) / 2);
    hand.style.setProperty('--hm', `${m.toFixed(1)}px`);
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
    this.bindTip(pv, () => `<b>被动：${d.passive.name}</b><br>${d.passive.desc}`);
    if (IS_TOUCH) pv.addEventListener('click', () => { this.tooltip(pv, `<b>被动：${d.passive.name}</b><br>${d.passive.desc}`); clearTimeout(this.tipHideT); this.tipHideT = setTimeout(() => this.tooltip(null), 3000); });
    sb.appendChild(pv);
    d.skills.forEach((s, i) => {
      const rank = h.ranks[i];
      const canLearn = h.skillPts > 0 && rank < SKILL_MAX[i] && h.level >= skillReq(i, rank + 1);
      const pips = Array.from({ length: SKILL_MAX[i] }, (_, k) => `<i class="${k < rank ? 'on' : ''}"></i>`).join('');
      const b = el('button', `skill-btn ${rank === 0 ? 'locked' : ''}`, `<span class="si">${s.icon}</span><span class="sk">${s.key}</span><div class="cd"></div><span class="cdt"></span><div class="pips">${pips}</div>${canLearn ? '<div class="learn" title="学习 (Shift+' + s.key + ')">+</div>' : ''}`);
      const self = skillRange(h.id, i) === 0;
      b.addEventListener('click', (e) => {
        if (e.target.classList.contains('learn')) { g.learnSkill(h, i); return; }
        if (g.aimSkill === i) { g.cancelModes(); return; }
        // 触屏：自身范围技能点击即施放
        if (IS_TOUCH && self) { if (g.canCast(h, i)) { haptic(12); g.castHeroSkill(i, h.pos.clone()); } return; }
        this.aimFromButton = true;
        g.beginAim(i);
      });
      this.bindTip(b, () => {
        const cd = (s.cd * rankCd(Math.max(1, rank))).toFixed(1);
        const nextReq = rank < SKILL_MAX[i] ? skillReq(i, rank + 1) : 0;
        return `<b>[${s.key}] ${s.name}</b> · ${rank ? `${rank} 级` : '未学习'} · 冷却 ${cd} 秒<br>${s.desc}<br><small>当前威力 ×${rankMul(Math.max(1, rank)).toFixed(1)}；每级伤害/治疗 +30%、冷却 -8%</small><br><small>${rank < SKILL_MAX[i] ? `下一级需要英雄 Lv.${nextReq}（可用技能点 ${h.skillPts}）` : '已满级'}</small><br><small>${IS_TOUCH ? (self ? '点击立即施放' : '点击后点地面，或直接拖到目标处松手施放') : `按住 ${s.key} 瞄准、松开施放；或点击按钮后点击地面`}</small>`;
      }, { enter: () => { this.hoverSkill = i; }, leave: () => { this.hoverSkill = -1; } });
      if (!self) {
        this.bindDragOut(b, {
          icon: s.icon, color: '#' + d.color.toString(16).padStart(6, '0'),
          onStart: () => {
            if (g.paused || g.state === 'over' || g.state === 'reward') return false;
            if (!g.canCast(h, i, true)) return false;
            this.aimFromButton = true;
            g.beginAim(i);
            this.aimFromButton = true;
            return g.aimSkill === i;
          },
        });
      }
      sb.appendChild(b);
    });
    const hold = el('button', `hold-btn ${h.holdPos ? 'on' : ''}`, `🛡<small>${h.holdPos ? '坚守' : '追击'}</small>`);
    hold.addEventListener('click', () => g.toggleHold());
    this.bindTip(hold, () => `<b>${h.holdPos ? '坚守原地' : '自由追击'}</b><br>切换英雄是否离开站位追击敌人${IS_TOUCH ? '' : '（H）'}`);
    sb.appendChild(hold);
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
      this.bindTip(d, () => `<b>${r.icon} ${r.name}</b><br>${r.desc}`);
      if (IS_TOUCH) d.addEventListener('click', () => this.tapTip(d, `<b>${r.icon} ${r.name}</b><br>${r.desc}`));
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
      const html = () => `<b>${S.icon} ${S.name}流派</b>（卡组中 ${counts[k]} 张）<br>${S.tiers.map((t, i) => `<span style="opacity:${i < tier ? 1 : 0.45}">${i < tier ? '✔' : '○'} [${t.n}] ${t.desc}</span>`).join('<br>')}<br><small>连续打出同流派卡牌触发连携，伤害逐层 +15%</small>`;
      this.bindTip(d, html);
      if (IS_TOUCH) d.addEventListener('click', () => this.tapTip(d, html()));
      bar.appendChild(d);
    }
  }

  tapTip(anchor, html) {
    this.tooltip(anchor, html);
    clearTimeout(this.tipHideT);
    this.tipHideT = setTimeout(() => this.tooltip(null), 3500);
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
      const tags = [e.flying ? '飞行' : '', e.armor >= 0.4 ? '重甲' : '', e.mres >= 0.3 ? '魔抗' : '', e.phase ? '相位' : '', e.healer ? '治疗' : '', e.splits ? '分裂' : '', e.regen ? '再生' : '', e.bomb ? '自爆' : '', e.aura ? '护盾光环' : '', e.blink ? '闪烁' : '', e.boss ? '首领' : ''].filter(Boolean).join(' ');
      return `<span class="wp-e ${e.boss ? 'boss' : ''}" data-t="${t}" title="${e.name}${tags ? '（' + tags + '）' : ''}">${e.icon}<b>×${c}</b></span>`;
    }).join('');
    if (!box.dataset.bound) {
      box.dataset.bound = '1';
      const tipHtml = () => {
        const p2 = wavePreview(g.map, g.wave + 1);
        return `<b>第 ${g.wave + 1} 波</b><br>` + Object.entries(p2).map(([t, c]) => {
          const e = ENEMIES[t];
          const tags = [e.flying ? '飞行' : '', e.armor >= 0.4 ? '重甲' : '', e.mres >= 0.3 ? '魔抗' : '', e.phase ? '相位(免疫物理)' : '', e.healer ? '治疗友军' : '', e.splits ? '死亡分裂' : '', e.regen ? '再生(灼烧可抑制)' : '', e.bomb ? '自爆眩晕英雄' : '', e.aura ? '周围敌人减伤30%' : '', e.blink ? '向前闪烁/虚空屏障' : ''].filter(Boolean).join('、');
          return `${e.icon} ${e.name} ×${c}${tags ? ` <small>${tags}</small>` : ''}`;
        }).join('<br>');
      };
      this.bindTip(box, tipHtml);
      if (IS_TOUCH) box.addEventListener('click', () => this.tapTip(box, tipHtml()));
    }
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
        ${next ? `<button class="btn primary" id="tp-up">⬆ 升级 💰${next.cost} <small class="kbd">(U)</small></button>` : ''}
        <button class="btn danger" id="tp-sell">出售 +${Math.floor(t.spent * 0.7)} <small class="kbd">(X)</small></button>
        <button class="btn tp-close" id="tp-close" title="关闭">✖</button>
      </div>`;
    const up = p.querySelector('#tp-up');
    if (up) {
      up.classList.toggle('disabled', g.gold < next.cost);
      up.addEventListener('click', () => g.upgradeTower(t));
    }
    p.querySelector('#tp-sell').addEventListener('click', () => g.sellTower(t));
    p.querySelector('#tp-close').addEventListener('click', () => { audio.play('click'); g.selectedTower = null; this.hideTowerPanel(); });
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
    // 数值变化时的弹跳反馈
    const bump = (id, v, key) => {
      const prev = this[key];
      this[key] = v;
      if (prev === undefined || prev === v) return;
      const chip = this.$(id).parentElement;
      chip.classList.remove('bump-up', 'bump-down');
      void chip.offsetWidth;
      chip.classList.add(v > prev ? 'bump-up' : 'bump-down');
    };
    bump('st-lives', g.lives, '_lv');
    bump('st-gold', g.gold, '_gd');
    set('st-lives', g.aegis > 0 ? `${g.lives} 🔆${g.aegis}` : g.lives);
    set('st-gold', g.gold);
    set('st-wave', `${g.wave} / ${g.map.waves}`);
    const wb = this.$('bt-wave');
    const show = g.state === 'build';
    wb.classList.toggle('hidden', !show);
    if (show) { const h = `⚔ 开始第 ${g.wave + 1} 波 <small class="kbd">(空格)</small>`; if (this.lastWaveHtml !== h) { this.lastWaveHtml = h; wb.innerHTML = h; } }
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
        hs.textContent = g.app.layout && g.app.layout.compact ? (h.alive ? `Lv${h.level}${h.skillPts ? '✦' : ''}` : `${Math.ceil(h.respawn)}s`) : h.alive ? `Lv.${h.level}${h.skillPts ? ` · ✦${h.skillPts}` : ''}${h.focus ? ' · 🎯' : ''}${h.holdPos ? ' · 🛡坚守' : ''}` : `复活 ${Math.ceil(h.respawn)}s`;
      } else {
        bar.style.width = '0%';
        const cmp = g.app.layout && g.app.layout.compact;
        hs.textContent = g.heroCount() >= MAX_HEROES ? (cmp ? '已满' : '队伍已满') : cmp ? `💰${HEROES[id].cost}` : `召唤 💰${HEROES[id].cost}`;
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
    this.updateModeBar();
    // 低生命心跳警告
    const danger = g.lives <= 5 && g.lives > 0 && g.state === 'wave' && !g.paused;
    if (danger !== this.dangerOn) { this.dangerOn = danger; this.$('danger').classList.toggle('on', danger); }
    if (danger) {
      this.beatT = (this.beatT || 0) - dt;
      if (this.beatT <= 0) { this.beatT = 1.1; audio.play('heartbeat', 0.8); }
    }
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

  updateModeBar() {
    const g = this.game;
    let key = '', html = '';
    if (g.pendingCard >= 0 && g.hand[g.pendingCard]) {
      const c = CARDS[g.hand[g.pendingCard]];
      key = 'c' + g.pendingCard + c.name;
      html = `<span class="mb-ico" style="--cc:${c.color}">${c.icon}</span><span class="mb-txt"><b>${c.name}</b><small>${c.target === 'tower' ? '点击一座防御塔' : IS_TOUCH ? '点击 / 拖动到目标处松手释放' : '点击地面释放 · 右键取消'}</small></span>`;
    } else if (g.aimSkill >= 0 && g.selectedHero) {
      const s = HEROES[g.selectedHero.id].skills[g.aimSkill];
      key = 's' + g.aimSkill + g.selectedHero.id;
      html = `<span class="mb-ico">${s.icon}</span><span class="mb-txt"><b>${s.name}</b><small>${IS_TOUCH ? '点击 / 拖动到目标处松手施放' : '点击地面施放 · 右键取消'}</small></span>`;
    } else if (g.buildType) {
      const d = TOWERS[g.buildType];
      key = 'b' + g.buildType;
      html = `<span class="mb-ico">${d.icon}</span><span class="mb-txt"><b>建造${d.name} · 💰${g.towerCost(g.buildType, 0)}</b><small>${IS_TOUCH ? '点击空地建造（可拖动预览位置）' : '点击空地建造 · Shift 连续建造 · 右键取消'}</small></span>`;
    }
    if (key === this.modeKey) return;
    this.modeKey = key;
    const mb = this.$('mode-bar');
    mb.classList.toggle('hidden', !key);
    if (!key) return;
    mb.innerHTML = html + '<button class="btn small mb-cancel">✖ 取消</button>';
    mb.querySelector('.mb-cancel').addEventListener('click', (e) => { e.stopPropagation(); audio.play('click'); g.cancelModes(); });
  }

  floatText(pos, text, color = '#fff', big = false) {
    if (this.floats.length > QUALITY.maxFloats) { const f = this.floats.shift(); f.el.remove(); }
    const e = el('div', 'float-text' + (big ? ' big' : ''), String(text));
    e.style.color = color;
    this.$('floats').appendChild(e);
    this.floats.push({ el: e, pos: pos.clone(), t: 0, big });
  }

  toast(msg, dur = 2200) {
    const box = this.$('toasts');
    const t = el('div', 'toast', msg);
    box.appendChild(t);
    while (box.children.length > 4) box.firstChild.remove();
    setTimeout(() => t.classList.add('out'), dur);
    setTimeout(() => t.remove(), dur + 500);
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
      <div class="thin-list scroll-y hidden" id="rw-thin-list"></div>
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
          <button class="btn" id="pa-quality">画质：${Q_NAMES[QUALITY.level] || '自动'}</button>
          <button class="btn" id="pa-restart">重新开始</button>
          <button class="btn" id="pa-menu">返回主菜单</button>
        </div></div>`;
      o.querySelector('#pa-resume').addEventListener('click', () => this.togglePause());
      o.querySelector('#pa-quality').addEventListener('click', (e) => {
        const order = ['auto', 'high', 'low'];
        const next = order[(order.indexOf(QUALITY.level) + 1) % order.length];
        g.app.applyQuality(next);
        e.currentTarget.textContent = `画质：${Q_NAMES[next]}`;
        audio.play('click');
      });
      o.querySelector('#pa-restart').addEventListener('click', () => g.app.startGame(g.mapIdx));
      o.querySelector('#pa-menu').addEventListener('click', () => g.app.showTitle());
    } else {
      o.classList.add('hidden');
      o.innerHTML = '';
    }
  }

  dispose() { this.root.remove(); document.removeEventListener('pointerdown', this._docDown, true); }
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
