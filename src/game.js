// ============ 游戏主逻辑 ============
import * as THREE from 'three';
import { MAPS, TOWERS, HEROES, CARDS, ENEMIES, MAX_HEROES, buildWave, hpScale, TILE } from './data.js';
import { World } from './world.js';
import { FX, rand } from './fx.js';
import { Enemy, Tower, Unit, Projectile } from './entities.js';
import { castCard, castSkill, skillRange, skillRadius } from './spells.js';
import { audio } from './audio.js';
import { makeTower } from './models.js';
import { GameUI } from './ui.js';

const KEYS = ['Q', 'E', 'R'];

export class Game {
  constructor(app, mapIdx, deck) {
    this.app = app;
    this.camera = app.camera;
    this.map = MAPS[mapIdx];
    this.mapIdx = mapIdx;
    this.scene = new THREE.Scene();
    this.world = new World(this.scene, this.map);
    this.fx = new FX(this.scene, this.camera);
    this.fx.setScale(app.height, this.camera.fov);
    this.enemies = [];
    this.towers = [];
    this.units = [];
    this.projectiles = [];
    this.zones = [];
    this.timers = [];
    this.time = 0;
    this.gold = this.map.startGold;
    this.maxLives = 20;
    this.lives = 20;
    this.mana = 5;
    this.maxMana = 10;
    this.wave = 0;
    this.state = 'build'; // build | wave | reward | over
    this.speed = 1;
    this.paused = false;
    this.buffs = { towerHaste: 0, heroDmg: 0 };
    this.timeStopUntil = 0;
    this.waveScale = 1;
    this.spawnQueue = [];
    this.waveTime = 0;
    this.drawTimer = 0;
    this.stats = { kills: 0, cardsPlayed: 0, goldEarned: 0, leaks: 0 };
    // 卡组
    this.deck = deck.slice();
    this.drawPile = shuffle(this.deck.slice());
    this.discard = [];
    this.hand = [];
    this.maxHand = 7;
    // 交互状态
    this.selectedHero = null;
    this.selectedTower = null;
    this.buildType = null;
    this.pendingCard = -1;
    this.mouse = new THREE.Vector2();
    this.mouseWorld = new THREE.Vector3();
    this.mouseValid = false;
    this.keys = {};
    this.raycaster = new THREE.Raycaster();
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.camTarget = new THREE.Vector3(0, 0, 1);
    this.camZoom = 1;
    this.ambT = 0;
    this.buildHelpers();
    this.ui = new GameUI(this);
    this.drawCards(4, true);
    this.ui.renderAll();
    this.ui.banner(`${this.map.name}`, '#ffffff', '布置防御塔，召唤英雄，然后开始第一波！');
    audio.startMusic('calm');
  }

  // ---------- 辅助对象 ----------
  buildHelpers() {
    const rg = new THREE.RingGeometry(0.97, 1, 64);
    rg.rotateX(-Math.PI / 2);
    this.rangeRing = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: 0x88ddff, transparent: true, opacity: 0.8, depthWrite: false }));
    const fg = new THREE.CircleGeometry(1, 64);
    fg.rotateX(-Math.PI / 2);
    this.rangeFill = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ color: 0x88ddff, transparent: true, opacity: 0.08, depthWrite: false }));
    this.rangeRing.add(this.rangeFill);
    this.rangeRing.position.y = 0.06;
    this.rangeRing.visible = false;
    this.scene.add(this.rangeRing);
    // 法术瞄准圈
    const tg = new THREE.RingGeometry(0.9, 1, 64);
    tg.rotateX(-Math.PI / 2);
    this.targetRing = new THREE.Mesh(tg, new THREE.MeshBasicMaterial({ color: 0xffaa55, transparent: true, opacity: 0.9, depthWrite: false, blending: THREE.AdditiveBlending }));
    const tf = new THREE.Mesh(fg, new THREE.MeshBasicMaterial({ color: 0xffaa55, transparent: true, opacity: 0.15, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.targetRing.add(tf);
    this.targetFill = tf;
    this.targetRing.position.y = 0.08;
    this.targetRing.visible = false;
    this.scene.add(this.targetRing);
    // 移动指示
    const mg = new THREE.RingGeometry(0.3, 0.45, 24);
    mg.rotateX(-Math.PI / 2);
    this.moveMarker = new THREE.Mesh(mg, new THREE.MeshBasicMaterial({ color: 0x66ff88, transparent: true, depthWrite: false }));
    this.moveMarker.visible = false;
    this.scene.add(this.moveMarker);
    this.ghost = null;
    this.ghostMat = new THREE.MeshBasicMaterial({ color: 0x88ffaa, transparent: true, opacity: 0.4, depthWrite: false });
  }

  // ---------- 敌人工具 ----------
  enemiesInRadius(pos, r, air) {
    const out = [];
    const r2 = r * r;
    for (const e of this.enemies) {
      if (!e.alive || (e.flying && !air)) continue;
      const dx = e.pos.x - pos.x, dz = e.pos.z - pos.z;
      if (dx * dx + dz * dz <= r2 + (e.boss ? 2 : 0)) out.push(e);
    }
    return out;
  }
  nearestEnemy(pos, r, air) {
    let best = null, bd = r * r;
    for (const e of this.enemies) {
      if (!e.alive || (e.flying && !air)) continue;
      const dx = e.pos.x - pos.x, dz = e.pos.z - pos.z;
      const d = dx * dx + dz * dz;
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }

  damageEnemy(e, amount, dtype, src, silent = false) {
    if (!e.alive) return;
    if (e.isPhased(this.time) && dtype === 'phys') { if (!silent) this.fx.burst(e.center, { count: 3, color: 0x9fe8ff, intensity: 1, speed: 2, life: 0.2, size: 0.3 }); return; }
    let a = amount;
    if (dtype === 'phys') a *= 1 - e.def.armor;
    else if (dtype === 'magic') a *= 1 - e.def.mres;
    e.hp -= a;
    if (!silent) {
      e.flashT = 0.12;
      if (a >= 90) this.ui.floatText(e.centerClone().setY(e.pos.y + 2), Math.round(a), src === 'card' ? '#ffcc66' : '#ffffff', a >= 300);
    }
    if (src && src.gainXp) src.gainXp(a * 0.05);
    if (e.hp <= 0) this.killEnemy(e, src);
  }

  killEnemy(e, src) {
    if (!e.alive) return;
    const c = e.centerClone();
    e.destroy();
    this.stats.kills++;
    const gold = Math.round(e.def.gold * (1 + 0.04 * (this.wave - 1)));
    this.addGold(gold, true);
    if (src && src.kills !== undefined) src.kills++;
    const col = e.def.color;
    if (e.boss) {
      this.fx.explosion(c, col, 2.5);
      this.fx.explosion(c, 0xffffff, 1.2, { noDecal: true });
      this.fx.pillar(c, col, 3, 30, 1.2);
      this.fx.shake(1.2);
      this.fx.screenFlash('rgba(255,255,255,0.8)', 0.5);
      audio.play('bigexplode');
      this.ui.banner(`击败首领：${e.def.name}！`, '#ffd257');
      for (const u of this.units) u.gainXp(150);
    } else {
      this.fx.burst(c, { count: 18, color: col, intensity: 1.6, speed: 5, life: 0.6, size: 0.6, gravity: 8, up: 2 });
      this.fx.burst(c, { count: 6, color: 0x888888, smoke: true, speed: 1.5, life: 0.8, size: 1, sizeEnd: 1.8, alpha: 0.4 });
      this.fx.burst(c, { count: 4, color: 0xffd257, intensity: 2.5, speed: 2, life: 0.7, size: 0.35, up: 3 });
      audio.play('hit', 0.6);
      if (Math.random() < 0.3) audio.play('coin', 0.4);
    }
    // 英雄共享经验
    for (const u of this.units) if (u.kind === 'hero' && u.alive && u.pos.distanceToSquared(e.pos) < 100) u.gainXp(e.def.gold * 1.5);
    if (e.def.splits) {
      for (let i = 0; i < 3; i++) {
        const m = new Enemy(this, e.def.splits, e.pathIdx, this.waveScale, Math.max(0, e.dist - i * 0.5), rand(-0.7, 0.7));
        this.enemies.push(m);
      }
    }
  }

  slowEnemy(e, mul, dur) {
    if (this.time > e.slowUntil || mul < e.slowMul) e.slowMul = mul;
    e.slowUntil = Math.max(e.slowUntil, this.time + dur);
  }
  freezeEnemy(e, dur) { e.frozenUntil = Math.max(e.frozenUntil, this.time + dur); }
  stunEnemy(e, dur) { e.stunUntil = Math.max(e.stunUntil, this.time + (e.boss ? dur * 0.4 : dur)); }
  burnEnemy(e, dps, dur) { e.burnDps = Math.max(e.burnDps * (this.time < e.burnUntil ? 1 : 0), dps); e.burnUntil = this.time + dur; }

  spawnProjectile(o) { this.projectiles.push(new Projectile(this, o)); }
  later(t, fn) { this.timers.push({ t, fn }); }

  addGold(n, fromKill = false) {
    this.gold += n;
    this.stats.goldEarned += n;
  }

  leak(e) {
    const dmg = e.def.dmg;
    e.destroy();
    this.lives -= dmg;
    this.stats.leaks += dmg;
    audio.play('leak');
    this.fx.shake(0.4);
    this.fx.screenFlash('rgba(255,40,40,0.6)', 0.35);
    const b = this.world.basePos;
    this.fx.burst(b.clone().setY(2.5), { count: 30, color: 0xff3a3a, intensity: 2.5, speed: 5, life: 0.6, size: 0.7 });
    this.ui.floatText(b.clone().setY(4), `-${dmg} ❤`, '#ff5a5a', true);
    if (this.lives <= 0) { this.lives = 0; this.gameOver(false); }
  }

  // ---------- 卡牌 ----------
  drawCards(n, silent = false) {
    for (let i = 0; i < n; i++) {
      if (!this.drawPile.length) {
        if (!this.discard.length) break;
        this.drawPile = shuffle(this.discard);
        this.discard = [];
        if (!silent) this.ui.toast('弃牌堆已重新洗入抽牌堆');
      }
      const c = this.drawPile.pop();
      if (this.hand.length >= this.maxHand) {
        this.discard.push(c);
        this.ui.toast(`手牌已满，「${CARDS[c].name}」被弃置`);
        continue;
      }
      this.hand.push(c);
      if (!silent) audio.play('card');
    }
    this.ui.renderHand(true);
  }

  selectCard(i) {
    if (this.state === 'over' || this.state === 'reward') return;
    if (i < 0 || i >= this.hand.length) return;
    const id = this.hand[i];
    const card = CARDS[id];
    if (this.mana < card.cost) { audio.play('error'); this.ui.toast('法力不足！'); return; }
    this.cancelModes();
    if (card.target === 'none') {
      this.playCard(i, null, null);
      return;
    }
    this.pendingCard = i;
    audio.play('click');
    this.ui.renderHand();
  }

  playCard(i, pos, tower) {
    const id = this.hand[i];
    const card = CARDS[id];
    if (this.mana < card.cost) return false;
    const ok = castCard(this, id, pos, tower);
    if (ok === false) { audio.play('error'); return false; }
    this.mana -= card.cost;
    this.hand.splice(i, 1);
    this.discard.push(id);
    this.stats.cardsPlayed++;
    this.pendingCard = -1;
    this.targetRing.visible = false;
    this.ui.cardCastFx(card);
    this.ui.renderHand();
    return true;
  }

  // ---------- 英雄 ----------
  heroOnField(id) { return this.units.find((u) => u.kind === 'hero' && u.id === id); }
  heroCount() { return this.units.filter((u) => u.kind === 'hero').length; }

  summonOrSelectHero(id) {
    const h = this.heroOnField(id);
    if (h) {
      if (this.selectedHero === h) this.camTarget.set(h.pos.x, 0, h.pos.z);
      this.selectedHero = h;
      audio.play('click');
      this.ui.renderHeroes();
      return;
    }
    const def = HEROES[id];
    if (this.heroCount() >= MAX_HEROES) { audio.play('error'); this.ui.toast(`最多同时召唤 ${MAX_HEROES} 名英雄`); return; }
    if (this.gold < def.cost) { audio.play('error'); this.ui.toast('金币不足！'); return; }
    this.gold -= def.cost;
    const b = this.world.basePos;
    const ang = this.heroCount() * 2.1;
    const p = new THREE.Vector3(b.x + Math.cos(ang) * 2.2, 0, b.z + Math.sin(ang) * 2.2);
    const u = new Unit(this, 'hero', id, p);
    this.clampUnit(u);
    this.units.push(u);
    this.selectedHero = u;
    this.fx.pillar(u.pos, def.color, 1.6, 30, 1.2, 0.1);
    this.fx.ring(u.pos, def.color, 4, 0.8);
    this.fx.burst(u.pos.clone().setY(0.5), { count: 80, color: def.color, color2: 0xffffff, intensity: 3, speed: 7, life: 1, size: 0.8, up: 3 });
    this.fx.light(u.pos, def.color, 8, 10, 0.8);
    this.fx.shake(0.3);
    audio.play('summon');
    this.ui.toast(`${def.title} ${def.name} 响应了召唤！`);
    this.ui.renderHeroes();
  }

  clampUnit(u) { u.clampToMap(); u.anchor.copy(u.pos); }

  castHeroSkill(idx) {
    const h = this.selectedHero;
    if (!h || !h.alive || this.state === 'over') return;
    if (h.cds[idx] > 0) { audio.play('error'); return; }
    if (this.time < h.stunUntil) { audio.play('error'); this.ui.toast('英雄被眩晕了！'); return; }
    castSkill(this, h, idx, this.mouseValid ? this.mouseWorld.clone() : h.pos.clone());
    h.cds[idx] = HEROES[h.id].skills[idx].cd;
    this.ui.renderHeroes();
  }

  // ---------- 建造 ----------
  setBuildType(type) {
    this.cancelModes();
    this.buildType = type;
    this.selectedTower = null;
    this.ui.hideTowerPanel();
    if (this.ghost) this.scene.remove(this.ghost);
    this.ghost = makeTower(type, 0);
    this.ghost.traverse((o) => { if (o.isMesh) { o.material = this.ghostMat; o.castShadow = false; } });
    this.ghost.visible = false;
    this.scene.add(this.ghost);
    this.ui.updateBuildButtons();
  }

  tryBuild(gx, gz) {
    const def = TOWERS[this.buildType];
    if (!this.world.canBuild(gx, gz)) { audio.play('error'); return; }
    if (this.gold < def.levels[0].cost) { audio.play('error'); this.ui.toast('金币不足！'); return; }
    // 不允许站着英雄的格子？允许
    this.gold -= def.levels[0].cost;
    const t = new Tower(this, this.buildType, gx, gz);
    this.world.cells[gz][gx].tower = t;
    this.towers.push(t);
    audio.play('build');
    this.fx.burst(t.pos.clone().setY(0.3), { count: 25, color: 0xb8a888, smoke: true, speed: 3, flat: true, life: 0.8, size: 1.2, sizeEnd: 2, alpha: 0.6 });
    this.fx.burst(t.pos.clone().setY(1), { count: 20, color: 0xffe8a0, intensity: 2, speed: 4, life: 0.6, size: 0.5, up: 2 });
    if (!this.keys.Shift || this.gold < def.levels[0].cost) this.cancelModes();
  }

  upgradeTower(t) {
    if (t.level >= 2) return;
    const cost = t.def.levels[t.level + 1].cost;
    if (this.gold < cost) { audio.play('error'); this.ui.toast('金币不足！'); return; }
    this.gold -= cost;
    t.upgrade();
    audio.play('upgrade');
    this.fx.pillar(t.pos, 0xffd257, 1.2, 12, 0.8);
    this.fx.burst(t.pos.clone().setY(1.5), { count: 40, color: 0xffd257, intensity: 3, speed: 5, life: 0.8, size: 0.6, up: 2 });
    this.fx.ring(t.pos, 0xffd257, 2.5, 0.5);
    this.ui.showTowerPanel(t);
  }

  sellTower(t) {
    const refund = Math.floor(t.spent * 0.7);
    this.gold += refund;
    this.world.cells[t.gz][t.gx].tower = null;
    t.destroy();
    this.towers.splice(this.towers.indexOf(t), 1);
    audio.play('sell');
    this.fx.burst(t.pos.clone().setY(1), { count: 30, color: 0xffd257, intensity: 2, speed: 4, life: 0.8, size: 0.5, up: 3 });
    this.ui.floatText(t.pos.clone().setY(2), `+${refund} 💰`, '#ffd257');
    this.selectedTower = null;
    this.ui.hideTowerPanel();
  }

  cancelModes() {
    this.buildType = null;
    this.pendingCard = -1;
    if (this.ghost) { this.scene.remove(this.ghost); this.ghost = null; }
    this.targetRing.visible = false;
    this.ui && this.ui.updateBuildButtons();
    this.ui && this.ui.renderHand();
  }

  // ---------- 波次 ----------
  startWave() {
    if (this.state !== 'build') return;
    this.wave++;
    this.state = 'wave';
    this.waveScale = hpScale(this.map, this.wave);
    const groups = buildWave(this.map, this.wave);
    this.spawnQueue = [];
    let hasBoss = false;
    for (const g of groups) {
      for (let i = 0; i < g.count; i++) this.spawnQueue.push({ t: g.delay + i * g.interval, type: g.type, path: g.path });
      if (ENEMIES[g.type].boss) hasBoss = true;
    }
    this.spawnQueue.sort((a, b) => a.t - b.t);
    this.waveTime = 0;
    this.drawTimer = 0;
    this.drawCards(2);
    audio.play(hasBoss ? 'boss' : 'wave');
    audio.startMusic('battle');
    if (hasBoss) this.ui.banner(`第 ${this.wave} 波 · 首领来袭！`, '#ff5a5a', '强大的敌人正在接近……');
    else this.ui.banner(`第 ${this.wave} 波`, '#ffffff', `共 ${this.spawnQueue.length} 名敌人`);
    this.ui.refresh(true);
  }

  endWave() {
    const bonus = 30 + this.wave * 4;
    this.addGold(bonus);
    audio.play('coin');
    audio.startMusic('calm');
    if (this.wave >= this.map.waves) { this.gameOver(true); return; }
    this.ui.toast(`第 ${this.wave} 波完成！获得 ${bonus} 金币`);
    this.state = 'reward';
    this.cancelModes();
    this.ui.showReward(this.rollRewards(), (id) => {
      if (id) {
        this.deck.push(id);
        this.discard.push(id);
        this.app.unlockCard(id);
        this.ui.toast(`「${CARDS[id].name}」加入了卡组！`);
      } else {
        this.addGold(35);
        this.ui.toast('跳过奖励，获得 35 金币');
      }
      this.state = 'build';
      this.ui.refresh(true);
    });
  }

  rollRewards() {
    const ids = Object.keys(CARDS);
    const out = [];
    const epicW = 6 + this.wave * 0.8;
    while (out.length < 3) {
      const r = Math.random() * 100;
      const rar = r < epicW ? 'epic' : r < epicW + 30 ? 'rare' : 'common';
      const pool = ids.filter((id) => CARDS[id].rarity === rar && !out.includes(id));
      if (!pool.length) continue;
      out.push(pool[Math.floor(Math.random() * pool.length)]);
    }
    return out;
  }

  gameOver(win) {
    if (this.state === 'over') return;
    this.state = 'over';
    this.cancelModes();
    audio.stopMusic();
    audio.play(win ? 'victory' : 'defeat');
    if (win) {
      this.app.markCleared(this.map.id);
      for (let i = 0; i < 6; i++) this.later(i * 0.3, () => this.fx.explosion(new THREE.Vector3(rand(-15, 15), 3 + rand(0, 4), rand(-10, 10)), [0xffd257, 0x5ae0ff, 0xff70e0][i % 3], 1, { noDecal: true }));
    }
    this.later(win ? 1.8 : 1.0, () => this.ui.showEnd(win));
  }

  // ---------- 输入 ----------
  updateMouse(clientX, clientY) {
    const r = this.app.renderer.domElement.getBoundingClientRect();
    this.mouse.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    this.raycaster.setFromCamera(this.mouse, this.camera);
    this.mouseValid = !!this.raycaster.ray.intersectPlane(this.groundPlane, this.mouseWorld);
  }

  onPointerMove(e) { this.updateMouse(e.clientX, e.clientY); }

  pickHero() {
    let best = null, bd = 1.8 * 1.8;
    for (const u of this.units) {
      if (u.kind !== 'hero' || !u.alive) continue;
      const d = u.pos.distanceToSquared(this.mouseWorld);
      if (d < bd) { bd = d; best = u; }
    }
    return best;
  }

  onPointerDown(e) {
    if (this.state === 'over' || this.paused) return;
    this.updateMouse(e.clientX, e.clientY);
    if (!this.mouseValid) return;
    const [gx, gz] = this.world.toGrid(this.mouseWorld.x, this.mouseWorld.z);
    if (e.button === 2) {
      if (this.buildType || this.pendingCard >= 0) { this.cancelModes(); return; }
      this.orderMove();
      return;
    }
    if (e.button !== 0) return;
    if (this.pendingCard >= 0) {
      const card = CARDS[this.hand[this.pendingCard]];
      if (card.target === 'tower') {
        const t = this.world.inGrid(gx, gz) && this.world.cells[gz][gx].tower;
        if (!t) { audio.play('error'); this.ui.toast('请选择一座防御塔'); return; }
        this.playCard(this.pendingCard, null, t);
      } else this.playCard(this.pendingCard, this.mouseWorld.clone(), null);
      return;
    }
    if (this.buildType) { this.tryBuild(gx, gz); return; }
    const h = this.pickHero();
    if (h) { this.selectedHero = h; audio.play('click'); this.ui.renderHeroes(); return; }
    const t = this.world.inGrid(gx, gz) && this.world.cells[gz][gx].tower;
    if (t) {
      this.selectedTower = t;
      audio.play('click');
      this.ui.showTowerPanel(t);
      return;
    }
    if (this.selectedTower) { this.selectedTower = null; this.ui.hideTowerPanel(); }
    this.orderMove();
  }

  orderMove() {
    const h = this.selectedHero;
    if (!h || !h.alive) return;
    const p = this.mouseWorld.clone();
    const w = this.world;
    const hw = w.W - 0.5, hh = w.H - 0.5;
    p.x = Math.max(-hw, Math.min(hw, p.x));
    p.z = Math.max(-hh, Math.min(hh, p.z));
    p.y = 0;
    h.moveTarget = p;
    this.moveMarker.position.set(p.x, 0.07, p.z);
    this.moveMarker.visible = true;
    this.moveMarker.userData.t = 0;
    this.fx.burst(p, { count: 10, color: 0x66ff88, intensity: 2, speed: 2, flat: true, life: 0.4, size: 0.4 });
  }

  onWheel(e) {
    this.camZoom = Math.max(0.55, Math.min(1.6, this.camZoom * (e.deltaY > 0 ? 1.1 : 0.9)));
  }

  onKeyDown(e) {
    const k = e.key.length === 1 ? e.key.toUpperCase() : e.key;
    this.keys[k] = true;
    if (e.key === 'Shift') this.keys.Shift = true;
    if (this.state === 'over') return;
    if (k === 'Escape') {
      if (this.buildType || this.pendingCard >= 0) this.cancelModes();
      else if (this.selectedTower) { this.selectedTower = null; this.ui.hideTowerPanel(); }
      else this.ui.togglePause();
      return;
    }
    if (this.paused || this.state === 'reward') return;
    if (k === ' ') { e.preventDefault(); this.startWave(); return; }
    if (k >= '1' && k <= '7') { this.selectCard(Number(k) - 1); return; }
    const si = KEYS.indexOf(k);
    if (si >= 0) { this.castHeroSkill(si); return; }
    if (k === 'Tab') {
      e.preventDefault();
      const heroes = this.units.filter((u) => u.kind === 'hero');
      if (heroes.length) {
        const i = heroes.indexOf(this.selectedHero);
        this.selectedHero = heroes[(i + 1) % heroes.length];
        this.ui.renderHeroes();
      }
      return;
    }
    if (k === 'F') { if (this.selectedHero) this.camTarget.set(this.selectedHero.pos.x, 0, this.selectedHero.pos.z); return; }
    if (k === 'U' && this.selectedTower) this.upgradeTower(this.selectedTower);
    if (k === 'X' && this.selectedTower) this.sellTower(this.selectedTower);
  }
  onKeyUp(e) {
    const k = e.key.length === 1 ? e.key.toUpperCase() : e.key;
    this.keys[k] = false;
    if (e.key === 'Shift') this.keys.Shift = false;
  }

  // ---------- 主循环 ----------
  update(dtReal) {
    const dt = this.paused ? 0 : Math.min(0.05, dtReal) * this.speed;
    this.updateCamera(dtReal);
    if (dt > 0) this.step(dt);
    this.updateHover();
    this.fx.update(this.paused ? 0 : Math.min(0.05, dtReal) * this.speed);
    this.world.update(dt);
    this.ui.update(dtReal);
  }

  step(dt) {
    this.time += dt;
    // 定时器
    for (let i = this.timers.length - 1; i >= 0; i--) {
      const tm = this.timers[i];
      tm.t -= dt;
      if (tm.t <= 0) { this.timers.splice(i, 1); tm.fn(); }
    }
    // 法力
    let regen = 0.45;
    for (const t of this.towers) if (t.def.support) regen += t.stats.mana;
    this.mana = Math.min(this.maxMana, this.mana + regen * dt);
    // 生成敌人
    if (this.state === 'wave') {
      this.waveTime += dt;
      while (this.spawnQueue.length && this.spawnQueue[0].t <= this.waveTime) {
        const s = this.spawnQueue.shift();
        const e = new Enemy(this, s.type, s.path, this.waveScale);
        this.enemies.push(e);
        const portal = this.world.portals[s.path];
        this.fx.burst(portal.position.clone().setY(1.3), { count: 15, color: this.map.theme === 'lava' ? 0xff4a2a : 0xa04aff, intensity: 2.5, speed: 3, life: 0.5, size: 0.6 });
        if (e.boss) { this.fx.shake(0.8); this.ui.bossBar(e); }
      }
      this.drawTimer += dt;
      if (this.drawTimer >= 9) { this.drawTimer = 0; this.drawCards(1); }
    }
    // WASD 控制
    const h = this.selectedHero;
    for (const u of this.units) u.manual = null;
    if (h && h.alive && this.state !== 'reward') {
      const mx = (this.keys.D ? 1 : 0) - (this.keys.A ? 1 : 0);
      const mz = (this.keys.S ? 1 : 0) - (this.keys.W ? 1 : 0);
      if (mx || mz) h.manual = { x: mx, z: mz };
    }
    for (const e of this.enemies) if (e.alive) e.update(dt);
    this.enemies = this.enemies.filter((e) => e.alive);
    for (const t of this.towers) t.update(dt);
    for (const u of this.units) u.update(dt);
    for (let i = this.units.length - 1; i >= 0; i--) {
      if (this.units[i].removed) {
        if (this.selectedHero === this.units[i]) this.selectedHero = null;
        this.units[i].destroy();
        this.units.splice(i, 1);
      }
    }
    for (const p of this.projectiles) p.update(dt);
    this.projectiles = this.projectiles.filter((p) => p.alive);
    this.zones = this.zones.filter((z) => z.update(dt));
    // 移动标记
    if (this.moveMarker.visible) {
      this.moveMarker.userData.t += dt;
      const k = this.moveMarker.userData.t;
      this.moveMarker.scale.setScalar(1 + k * 2);
      this.moveMarker.material.opacity = Math.max(0, 1 - k * 1.5);
      if (k > 0.7) this.moveMarker.visible = false;
    }
    // 环境粒子
    this.ambient(dt);
    // 波次结束
    if (this.state === 'wave' && !this.spawnQueue.length && !this.enemies.length) this.endWave();
  }

  ambient(dt) {
    this.ambT += dt;
    const kind = this.world.theme.amb;
    const fx = this.fx;
    const n = Math.random() < dt * 20 ? 1 : 0;
    for (let i = 0; i < n; i++) {
      const x = rand(-28, 28), z = rand(-20, 20);
      if (kind === 'firefly') fx.glow.emit({ x, y: rand(0.3, 2.5), z, vx: rand(-0.4, 0.4), vy: rand(-0.1, 0.3), vz: rand(-0.4, 0.4), life: 4, size: 0.35, sizeEnd: 0.2, color: fx.col(0xd8ff7a, 2), drag: 0 });
      else if (kind === 'ember') fx.glow.emit({ x, y: 0, z, vx: rand(-0.3, 0.3), vy: rand(1, 2.5), vz: rand(-0.3, 0.3), life: 3, size: 0.3, sizeEnd: 0.05, color: fx.col(0xff7a2a, 3), color2: fx.col(0xff2a00, 1), drag: 0 });
      else {
        for (let k = 0; k < 3; k++) fx.glow.emit({ x: rand(-28, 28), y: rand(8, 14), z: rand(-22, 18), vx: rand(0.3, 1), vy: -1.6, vz: rand(-0.2, 0.2), life: 7, size: 0.3, sizeEnd: 0.3, color: fx.col(0xffffff, 0.9), drag: 0 });
      }
    }
  }

  updateCamera(dt) {
    const pan = 18 * dt * this.camZoom;
    if (this.keys.ArrowLeft) this.camTarget.x -= pan;
    if (this.keys.ArrowRight) this.camTarget.x += pan;
    if (this.keys.ArrowUp) this.camTarget.z -= pan;
    if (this.keys.ArrowDown) this.camTarget.z += pan;
    this.camTarget.x = Math.max(-18, Math.min(18, this.camTarget.x));
    this.camTarget.z = Math.max(-12, Math.min(14, this.camTarget.z));
    const z = this.camZoom;
    const desired = new THREE.Vector3(this.camTarget.x, 30 * z, this.camTarget.z + 22 * z);
    this.camera.position.lerp(desired, Math.min(1, dt * 8));
    this.camera.position.add(this.fx.shakeOffset);
    this.camera.lookAt(this.camera.position.x, 0, this.camera.position.z - 22 * z + this.fx.shakeOffset.z * 0);
  }

  updateHover() {
    const w = this.world;
    // 范围指示
    let showRange = null;
    if (this.selectedTower && !this.selectedTower.def.support) showRange = [this.selectedTower.pos, this.selectedTower.range, 0x88ddff];
    w.hover.visible = false;
    if (this.ghost) this.ghost.visible = false;
    if (this.buildType && this.mouseValid) {
      const [gx, gz] = w.toGrid(this.mouseWorld.x, this.mouseWorld.z);
      if (w.inGrid(gx, gz)) {
        const p = w.toWorld(gx, gz);
        const ok = w.canBuild(gx, gz) && this.gold >= TOWERS[this.buildType].levels[0].cost;
        w.hover.visible = true;
        w.hover.position.set(p.x, 0.03, p.z);
        w.hover.material.color.set(ok ? 0x66ff88 : 0xff5555);
        this.ghost.visible = true;
        this.ghost.position.copy(p);
        this.ghostMat.color.set(ok ? 0x88ffaa : 0xff7777);
        const r = TOWERS[this.buildType].levels[0].range;
        if (r) showRange = [p, r, ok ? 0x88ffaa : 0xff7777];
      }
    }
    if (showRange) {
      this.rangeRing.visible = true;
      this.rangeRing.position.set(showRange[0].x, 0.06, showRange[0].z);
      this.rangeRing.scale.setScalar(showRange[1]);
      this.rangeRing.material.color.set(showRange[2]);
      this.rangeFill.material.color.set(showRange[2]);
    } else this.rangeRing.visible = false;
    // 法术瞄准
    if (this.pendingCard >= 0 && this.mouseValid) {
      const card = CARDS[this.hand[this.pendingCard]];
      if (card.target === 'tower') {
        const [gx, gz] = w.toGrid(this.mouseWorld.x, this.mouseWorld.z);
        const t = w.inGrid(gx, gz) && w.cells[gz][gx].tower;
        this.targetRing.visible = !!t;
        if (t) { this.targetRing.position.set(t.pos.x, 0.08, t.pos.z); this.targetRing.scale.setScalar(1.3); }
      } else {
        this.targetRing.visible = true;
        this.targetRing.position.set(this.mouseWorld.x, 0.08, this.mouseWorld.z);
        this.targetRing.scale.setScalar(card.radius || 1.5);
      }
      this.targetRing.material.color.set(card.color);
      this.targetFill.material.color.set(card.color);
      this.targetRing.rotation.y += 0.02;
    } else if (this.ui.hoverSkill >= 0 && this.selectedHero && this.selectedHero.alive) {
      // 悬停技能时预览
      const h = this.selectedHero, i = this.ui.hoverSkill;
      const rr = skillRange(h.id, i);
      const p = rr === 0 ? h.pos : this.mouseWorld;
      this.targetRing.visible = true;
      this.targetRing.position.set(p.x, 0.08, p.z);
      this.targetRing.scale.setScalar(skillRadius(h.id, i));
      this.targetRing.material.color.set(HEROES[h.id].color);
      this.targetFill.material.color.set(HEROES[h.id].color);
    } else this.targetRing.visible = false;
  }

  dispose() {
    audio.stopMusic();
    this.fx.clear();
    for (const e of this.enemies) e.destroy();
    this.world.dispose();
    this.ui.dispose();
  }
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export { TILE };
