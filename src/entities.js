// ============ 游戏实体：敌人、防御塔、英雄/召唤物、投射物 ============
import * as THREE from 'three';
import { ENEMIES, TOWERS, HEROES } from './data.js';
import { makeEnemy, makeTower, makeHero, makeSummon, glowMat } from './models.js';
import { audio } from './audio.js';
import { rand } from './fx.js';

const _v = new THREE.Vector3();
const _v2 = new THREE.Vector3();

// ---------- 血条 ----------
const barBgMat = new THREE.SpriteMaterial({ color: 0x111111, depthTest: false, transparent: true, opacity: 0.75 });
export function makeHpBar(color, width = 1.2) {
  const g = new THREE.Group();
  const bg = new THREE.Sprite(barBgMat);
  bg.scale.set(width + 0.08, 0.2, 1);
  bg.renderOrder = 20;
  const fgMat = new THREE.SpriteMaterial({ color, depthTest: false });
  const fg = new THREE.Sprite(fgMat);
  fg.center.set(0, 0.5);
  fg.position.x = -width / 2;
  fg.scale.set(width, 0.13, 1);
  fg.renderOrder = 21;
  g.add(bg, fg);
  g.userData = { fg, width };
  return g;
}
function setBar(bar, ratio) {
  const { fg, width } = bar.userData;
  fg.scale.x = Math.max(0.001, width * ratio);
}

const def_regen = (e) => !!e.def.regen;

// ---------- 敌人 ----------
export class Enemy {
  constructor(game, type, pathIdx, scale, startDist = 0, lateral = null) {
    this.game = game;
    this.type = type;
    this.def = ENEMIES[type];
    this.path = game.world.paths[pathIdx];
    this.pathIdx = pathIdx;
    this.maxHp = Math.round(this.def.hp * (this.def.boss ? 1 + (scale - 1) * 0.55 : scale));
    this.hp = this.maxHp;
    this.dist = startDist;
    this.lateral = lateral !== null ? lateral : rand(-0.55, 0.55);
    this.flying = !!this.def.flying;
    this.boss = !!this.def.boss;
    this.alive = true;
    this.slowMul = 1; this.slowUntil = 0;
    this.frozenUntil = 0; this.stunUntil = 0;
    this.burnDps = 0; this.burnUntil = 0;
    this.blockedBy = null;
    this.atkCD = 1;
    this.specialCD = this.boss ? 4 : 2.5;
    this.phaseUntil = 0;
    this.flashT = 0;
    this.t = Math.random() * 10;
    this.mesh = makeEnemy(this.def);
    this.mesh.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.pos = this.mesh.position;
    this.height = this.flying ? 2.6 : 0;
    const bw = this.boss ? 2.6 : 1.1;
    this.bar = makeHpBar(this.boss ? 0xff4040 : 0xff6a4a, bw);
    this.bar.position.y = this.boss ? this.def.size * 3.2 : this.def.size * 2.4 + 0.4;
    this.barHolder = new THREE.Group();
    this.barHolder.add(this.bar);
    game.scene.add(this.mesh);
    game.scene.add(this.barHolder);
    this.updatePos(0);
    // 冻结外壳
    this.iceShell = null;
    this.shieldedUntil = 0;
    this.barrierUntil = 0;
    this.lastHit = -9;
    this.enraged = false;
    this.barrierMarks = this.def.blink ? [0.66, 0.33] : [];
    this.barrierMesh = null;
  }

  // 自爆地精：死亡或被阻挡时爆炸，伤害并眩晕附近友军
  explode() {
    if (this.exploded) return;
    this.exploded = true;
    const g = this.game;
    const p = this.pos.clone(); p.y = 0.3;
    g.fx.explosion(p, 0xff8a2a, 0.8);
    g.fx.shake(0.25);
    audio.play('explode', 0.7);
    for (const u of g.units) {
      if (u.alive && !u.flying && u.pos.distanceToSquared(p) < 2.6 * 2.6) { u.takeDamage(110); u.stunUntil = Math.max(u.stunUntil || 0, g.time + 1); }
    }
  }

  // 首领半血狂暴
  enrage() {
    this.enraged = true;
    const g = this.game;
    g.fx.ring(this.pos, 0xff3a2a, 6, 0.8);
    g.fx.burst(this.center, { count: 60, color: 0xff4a2a, color2: 0xffcc66, intensity: 3, speed: 7, life: 0.9, size: 0.9, up: 2 });
    g.fx.shake(0.7);
    g.fx.screenFlash('rgba(255,40,20,0.45)', 0.4);
    audio.play('roar');
    g.ui.banner(`${this.def.name} 狂暴了！`, '#ff5a3a', '移动与技能频率提升');
    for (const m of this.mesh.userData.flash) if (m.color) m.color.lerp(new THREE.Color(0xff3a2a), 0.35);
  }

  startBarrier() {
    const g = this.game;
    this.barrierUntil = g.time + 3.5;
    audio.play('void', 0.8);
    g.ui.toast(`🛡 ${this.def.name} 展开虚空屏障（受到伤害 -90%）并召唤仆从！`);
    if (!this.barrierMesh) {
      this.barrierMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(this.def.size * 2.1, 1), new THREE.MeshBasicMaterial({ color: 0xb06aff, transparent: true, opacity: 0.28, wireframe: true, blending: THREE.AdditiveBlending, depthWrite: false }));
      g.scene.add(this.barrierMesh);
    }
    for (let i = 0; i < 5; i++) {
      const m = new Enemy(g, 'voidling', this.pathIdx, g.waveScale, Math.max(0, this.dist - 0.5 - i * 0.7), rand(-0.7, 0.7));
      g.enemies.push(m);
    }
    g.fx.burst(this.center, { count: 50, color: 0xb06aff, intensity: 3, speed: 6, life: 0.9, size: 0.8 });
  }

  get center() { return _v2.set(this.pos.x, this.pos.y + (this.boss ? 1.5 : 0.6) * this.def.size, this.pos.z); }
  centerClone() { return this.center.clone(); }

  isFrozen(t) { return t < this.frozenUntil || t < this.game.timeStopUntil; }
  isPhased(t) { return t < this.phaseUntil; }

  updatePos(dt) {
    this.path.at(this.dist, this.pos);
    const d = this.path.dirAt(this.dist, _v);
    this.pos.x += -d.z * this.lateral;
    this.pos.z += d.x * this.lateral;
    const bob = this.flying ? Math.sin(this.t * 3) * 0.25 : 0;
    this.pos.y = this.height + bob;
    const targetRot = Math.atan2(d.x, d.z);
    let dr = targetRot - this.mesh.rotation.y;
    while (dr > Math.PI) dr -= Math.PI * 2;
    while (dr < -Math.PI) dr += Math.PI * 2;
    this.mesh.rotation.y += dr * Math.min(1, dt * 8);
    this.barHolder.position.set(this.pos.x, this.pos.y, this.pos.z);
  }

  update(dt) {
    const g = this.game;
    const t = g.time;
    this.t += dt;
    const frozen = this.isFrozen(t);
    const stunned = t < this.stunUntil;
    // 灼烧
    if (t < this.burnUntil) {
      g.damageEnemy(this, this.burnDps * dt, 'magic', null, true);
      if (Math.random() < dt * 12) g.fx.trail(this.center, 0xff6a1a, 0.9, 0.5, 0.3, 2);
      if (!this.alive) return;
    }
    // 再生（灼烧或近期受击时停止）
    if (def_regen(this) && t >= this.burnUntil && t - this.lastHit > 1.5 && this.hp < this.maxHp) {
      this.hp = Math.min(this.maxHp, this.hp + this.maxHp * this.def.regen * dt);
      if (Math.random() < dt * 3) g.fx.trail(_v.set(this.pos.x + rand(-0.4, 0.4), this.pos.y + 1, this.pos.z + rand(-0.4, 0.4)), 0x66ff66, 0.6, 0.6, 0, 1.5);
    }
    // 首领阶段
    if (this.boss) {
      const r = this.hp / this.maxHp;
      if (!this.enraged && r <= 0.5) this.enrage();
      if (this.barrierMarks.length && r <= this.barrierMarks[0]) { this.barrierMarks.shift(); this.startBarrier(); }
      if (this.barrierMesh) {
        if (t < this.barrierUntil) {
          this.barrierMesh.position.set(this.pos.x, this.pos.y + this.def.size * 1.4, this.pos.z);
          this.barrierMesh.rotation.y += dt * 1.5; this.barrierMesh.rotation.x += dt * 0.7;
          this.barrierMesh.material.opacity = 0.22 + Math.sin(t * 10) * 0.08;
        } else { g.scene.remove(this.barrierMesh); this.barrierMesh.geometry.dispose(); this.barrierMesh.material.dispose(); this.barrierMesh = null; }
      }
    }
    let speedMul = (t < this.slowUntil ? this.slowMul : 1) * (this.enraged ? 1.3 : 1);
    if (this.zoneSlow) { speedMul = Math.min(speedMul, this.zoneSlow); this.zoneSlow = 0; }
    // 被阻挡
    if (this.blockedBy && (!this.blockedBy.alive || this.flying)) this.blockedBy = null;
    if (!frozen && !stunned) {
      if (this.blockedBy) {
        this.atkCD -= dt;
        if (this.def.bomb) {
          // 被阻挡：直接引爆
          this.blockedBy.takeDamage(60);
          this.hp = 0;
          g.killEnemy(this, null);
          return;
        }
        if (this.atkCD <= 0) {
          this.atkCD = this.boss ? (this.enraged ? 1.1 : 1.6) : 1.2;
          const dmg = this.def.atk || (12 + this.maxHp * 0.03);
          this.blockedBy.takeDamage(dmg);
          this.attackAnim = 0.3;
        }
      } else {
        this.dist += this.def.speed * Math.min(speedMul, this.enraged ? 1.3 : 1) * dt;
        if (this.dist >= this.path.length) { g.leak(this); return; }
      }
      this.special(dt, t);
    }
    // 动画
    this.animate(dt, frozen || stunned, speedMul);
    this.updatePos(dt);
    // 冰冻外壳
    if (frozen && !this.iceShell) {
      this.iceShell = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9 * this.def.size * (this.boss ? 1.8 : 1), 0), new THREE.MeshStandardMaterial({ color: 0xbfe8ff, transparent: true, opacity: 0.55, emissive: 0x4aa8ff, emissiveIntensity: 0.6, flatShading: true, roughness: 0.1 }));
      this.iceShell.scale.y = 1.3;
      g.scene.add(this.iceShell);
    } else if (!frozen && this.iceShell) {
      g.fx.burst(this.center, { count: 10, color: 0xbfe8ff, intensity: 1.5, speed: 4, life: 0.5, size: 0.5, gravity: 10 });
      g.scene.remove(this.iceShell);
      this.iceShell.geometry.dispose();
      this.iceShell.material.dispose();
      this.iceShell = null;
    }
    if (this.iceShell) this.iceShell.position.set(this.pos.x, this.pos.y + 0.6 * this.def.size * (this.boss ? 1.8 : 1), this.pos.z);
    // 受击闪白
    if (this.flashT > 0) {
      this.flashT -= dt;
      const k = Math.max(0, this.flashT / 0.12);
      for (const m of this.mesh.userData.flash) { m.emissive.setRGB(k * 1.5, k * 1.5, k * 1.5); }
      if (this.flashT <= 0) for (const m of this.mesh.userData.flash) {
        m.emissive.set(this.def.model === 'ghost' || this.def.model === 'slime' ? this.def.color : 0x000000);
        m.emissiveIntensity = this.def.model === 'ghost' ? 0.9 : this.def.model === 'slime' ? 0.25 : 1;
      }
    }
    if (stunned && Math.random() < dt * 8) g.fx.trail(_v.set(this.pos.x + Math.cos(this.t * 6) * 0.4, this.pos.y + 1.6 * this.def.size + 0.4, this.pos.z + Math.sin(this.t * 6) * 0.4), 0xffee66, 0.5, 0.3, 0, 2);
    setBar(this.bar, this.hp / this.maxHp);
    this.bar.visible = this.hp < this.maxHp || this.boss;
  }

  special(dt, t) {
    const g = this.game;
    const def = this.def;
    this.specialCD -= dt * (this.enraged ? 1.5 : 1);
    if (def.aura) {
      this.auraT = (this.auraT || 0) - dt;
      if (this.auraT <= 0) {
        this.auraT = 0.4;
        for (const e of g.enemies) if (e !== this && e.alive && e.pos.distanceToSquared(this.pos) < 3.5 * 3.5) e.shieldedUntil = t + 0.6;
      }
      if (this.specialCD <= 0) { this.specialCD = 2.2; g.fx.ring(this.pos, 0x7ad8ff, 3.5, 0.6); }
    }
    if (def.bomb && Math.random() < dt * 10) g.fx.trail(_v.set(this.pos.x, this.pos.y + 1.2, this.pos.z), 0xffaa22, 0.4, 0.3, 0.1, 3);
    if (def.blink && this.specialCD <= 0) {
      // 相位跃迁：沿路径向前闪烁
      this.specialCD = 9;
      const from = this.centerClone();
      g.fx.burst(from, { count: 40, color: 0x8a3aff, intensity: 3, speed: 5, life: 0.6, size: 0.8 });
      g.fx.ring(this.pos, 0xb06aff, 3, 0.5);
      this.dist = Math.min(this.path.length - 3, this.dist + 5);
      this.blockedBy = null;
      this.updatePos(0);
      const to = this.centerClone();
      g.fx.lightning(from, to, 0xc06aff, 0.25, 0.35, false);
      g.fx.burst(to, { count: 40, color: 0xc06aff, intensity: 3, speed: 5, life: 0.6, size: 0.8 });
      g.fx.light(to, 0xb06aff, 6, 10, 0.4);
      audio.play('blink');
    }
    if (def.phase) {
      const ph = this.isPhased(t);
      const m = this.mesh.userData.parts.ghostMat;
      if (m) m.opacity += ((ph ? 0.15 : 0.6) - m.opacity) * Math.min(1, dt * 8);
      if (this.specialCD <= 0) { this.specialCD = 5; this.phaseUntil = t + 1.3; g.fx.burst(this.center, { count: 14, color: 0x9fe8ff, intensity: 1.5, speed: 2, life: 0.6, size: 0.6 }); }
    }
    if (def.healer && this.specialCD <= 0) {
      this.specialCD = 2.5;
      let healed = false;
      for (const e of g.enemies) {
        if (e !== this && e.alive && e.hp < e.maxHp && e.pos.distanceToSquared(this.pos) < 16) {
          e.hp = Math.min(e.maxHp, e.hp + e.maxHp * 0.12);
          g.fx.burst(e.center, { count: 8, color: 0x66ff88, intensity: 2, speed: 1.5, life: 0.7, size: 0.5, up: 1.5 });
          healed = true;
        }
      }
      if (healed) g.fx.ring(this.pos, 0x44ff77, 4, 0.6);
    }
    if (def.summoner && this.specialCD <= 0) {
      this.specialCD = 8;
      g.fx.ring(this.pos, 0x9b4dff, 3, 0.7);
      g.fx.burst(this.center, { count: 40, color: 0x9b4dff, intensity: 2.5, speed: 5, life: 0.8, size: 0.9 });
      audio.play('void', 0.6);
      for (let i = 0; i < 4; i++) {
        const sk = new Enemy(g, 'skeleton', this.pathIdx, g.waveScale, Math.max(0, this.dist - 1 - i * 0.8), rand(-0.6, 0.6));
        g.enemies.push(sk);
      }
    }
    if (def.stomp && this.specialCD <= 0) {
      this.specialCD = 7;
      this.attackAnim = 0.5;
      g.fx.ring(this.pos, 0xd8a060, 5, 0.6);
      g.fx.burst(this.pos, { count: 50, color: 0x8a7a5a, smoke: true, speed: 6, flat: true, life: 1.0, size: 1.6, sizeEnd: 3, alpha: 0.6 });
      g.fx.shake(0.6);
      audio.play('stomp');
      for (const u of g.units) {
        if (u.alive && !u.flying && u.pos.distanceToSquared(this.pos) < 25) { u.takeDamage(80); u.stunUntil = t + 1.5; }
      }
    }
    if (def.breath && this.specialCD <= 0) {
      // 对最近友军单位喷火
      let best = null, bd = 64;
      for (const u of g.units) {
        if (!u.alive) continue;
        const d = u.pos.distanceToSquared(this.pos);
        if (d < bd) { bd = d; best = u; }
      }
      if (best) {
        this.specialCD = 5;
        const from = this.centerClone();
        const to = best.pos.clone();
        audio.play('fire');
        for (let i = 0; i < 60; i++) {
          const k = Math.random();
          const p = from.clone().lerp(to, k);
          g.fx.burst(p, { count: 1, color: 0xffaa33, color2: 0xff2200, intensity: 3, speed: 2, life: 0.6, size: 1.4 * (0.5 + k), sizeEnd: 2 });
        }
        g.fx.explosion(to, 0xff5a1a, 0.8, { noDecal: false });
        for (const u of g.units) if (u.alive && u.pos.distanceToSquared(to) < 9) u.takeDamage(120);
      } else this.specialCD = 1;
    }
  }

  animate(dt, still, speedMul) {
    const ud = this.mesh.userData;
    const p = ud.parts;
    const body = ud.body;
    const sp = still ? 0 : speedMul;
    const t = this.t;
    if (this.attackAnim > 0) this.attackAnim -= dt;
    switch (this.def.model) {
      case 'slime': {
        const k = Math.abs(Math.sin(t * 6 * sp + 0.0001));
        body.scale.set(1 + (1 - k) * 0.15, 0.85 + k * 0.3, 1 + (1 - k) * 0.15);
        body.position.y = k * 0.35 * sp;
        break;
      }
      case 'wolf':
        if (p.legs) p.legs.forEach((l, i) => (l.rotation.x = Math.sin(t * 14 * sp + (i % 2 ? Math.PI : 0) + (i > 1 ? 1 : 0)) * 0.6 * sp));
        body.position.y = Math.abs(Math.sin(t * 14 * sp)) * 0.12;
        break;
      case 'bat':
      case 'dragon':
        if (p.wings) p.wings.forEach((w, i) => (w.rotation.z = (i ? -1 : 1) * Math.sin(t * (this.def.model === 'bat' ? 18 : 5)) * 0.6));
        if (p.head && this.specialCD < 0.6) p.head.rotation.x = -0.4;
        else if (p.head) p.head.rotation.x = 0;
        break;
      case 'ghost':
        body.position.y = Math.sin(t * 2.5) * 0.15 + 0.2;
        break;
      case 'lich':
        body.position.y = Math.sin(t * 2) * 0.15 + 0.3;
        if (p.orbiters) p.orbiters.forEach((o, i) => o.position.set(Math.cos(t * 2 + i * 2.1) * 1.1, 1.6 + Math.sin(t * 3 + i) * 0.3, Math.sin(t * 2 + i * 2.1) * 1.1));
        if (Math.random() < dt * 10) this.game.fx.trail(_v.set(this.pos.x + rand(-0.5, 0.5), this.pos.y + 0.3, this.pos.z + rand(-0.5, 0.5)), 0x6c3bd0, 1.2, 0.8, 0, 1.5);
        break;
      case 'voidlord':
        body.position.y = Math.sin(t * 1.6) * 0.2 + 0.2;
        body.rotation.y = Math.sin(t * 0.7) * 0.3;
        if (p.orbiters) p.orbiters.forEach((o, i) => { const a = t * 1.8 + i * 1.2566; o.position.set(Math.cos(a) * 1.7, 2 + Math.sin(t * 3 + i) * 0.4, Math.sin(a) * 1.7); o.rotation.y = a; });
        if (Math.random() < dt * 8) this.game.fx.trail(_v.set(this.pos.x + rand(-0.8, 0.8), this.pos.y + 0.4, this.pos.z + rand(-0.8, 0.8)), 0x8a3aff, 1.3, 0.8, 0, 1.6);
        break;
      case 'golem':
        if (p.arms) p.arms.forEach((a, i) => (a.rotation.x = this.attackAnim > 0 ? -2.0 * (this.attackAnim / 0.5) : Math.sin(t * 3 * sp + i * Math.PI) * 0.4));
        body.rotation.z = Math.sin(t * 3 * sp) * 0.06;
        break;
      default:
        body.position.y = Math.abs(Math.sin(t * 8 * sp)) * 0.1;
        body.rotation.z = Math.sin(t * 8 * sp) * 0.08;
        if (p.weapon) p.weapon.rotation.x = this.attackAnim > 0 ? -1.2 : 0;
        if (p.orb) p.orb.rotation.y += dt * 3;
    }
  }

  destroy() {
    this.alive = false;
    this.game.scene.remove(this.mesh);
    this.game.scene.remove(this.barHolder);
    this.bar.userData.fg.material.dispose();
    for (const m of this.mesh.userData.flash) m.dispose();
    if (this.barrierMesh) { this.game.scene.remove(this.barrierMesh); this.barrierMesh.geometry.dispose(); this.barrierMesh.material.dispose(); this.barrierMesh = null; }
    if (this.iceShell) { this.game.scene.remove(this.iceShell); this.iceShell.geometry.dispose(); this.iceShell.material.dispose(); }
  }
}

// ---------- 防御塔 ----------
export class Tower {
  constructor(game, type, gx, gz) {
    this.game = game;
    this.type = type;
    this.def = TOWERS[type];
    this.level = 0;
    this.gx = gx; this.gz = gz;
    this.pos = game.world.toWorld(gx, gz);
    this.cd = 0.5;
    this.dmgMul = 1;
    this.spent = this.def.levels[0].cost;
    this.kills = 0;
    this.t = Math.random() * 10;
    this.buildMesh();
    this.buildAnim = 0;
  }
  get stats() { return this.def.levels[this.level]; }
  get range() { return this.stats.range; }

  buildMesh() {
    if (this.mesh) this.game.scene.remove(this.mesh);
    this.mesh = makeTower(this.type, this.level);
    this.mesh.position.copy(this.pos);
    this.mesh.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.game.scene.add(this.mesh);
    this.buildAnim = 0;
  }

  upgrade(cost) {
    this.level++;
    this.spent += cost !== undefined ? cost : this.stats.cost;
    this.buildMesh();
  }

  muzzlePos() {
    const m = this.mesh.userData.parts.muzzle;
    this.mesh.updateMatrixWorld(true);
    return m ? m.getWorldPosition(new THREE.Vector3()) : this.pos.clone().setY(2.5);
  }

  findTarget() {
    const g = this.game;
    const r2 = this.range * this.range;
    let best = null, bd = -1;
    for (const e of g.enemies) {
      if (!e.alive || (e.flying && !this.def.air)) continue;
      const dx = e.pos.x - this.pos.x, dz = e.pos.z - this.pos.z;
      if (dx * dx + dz * dz > r2) continue;
      const score = e.dist + (e.boss ? 3 : 0);
      if (score > bd) { bd = score; best = e; }
    }
    return best;
  }

  update(dt) {
    const g = this.game;
    this.t += dt;
    const ud = this.mesh.userData;
    // 建造弹出动画
    if (this.buildAnim < 1) {
      this.buildAnim = Math.min(1, this.buildAnim + dt * 3);
      const k = this.buildAnim;
      const s = (1 + this.level * 0.08) * (k < 0.7 ? k / 0.7 * 1.15 : 1.15 - (k - 0.7) / 0.3 * 0.15);
      this.mesh.scale.setScalar(s);
    }
    const p = ud.parts;
    if (p.crystal) { p.crystal.rotation.y += dt * 1.5; p.crystal.position.y = Math.sin(this.t * 2) * 0.12; }
    if (p.orbiters) p.orbiters.forEach((o, i) => o.position.set(Math.cos(this.t * 2 + i * 2.1) * 0.9, 3.4 + Math.sin(this.t * 3 + i) * 0.2, Math.sin(this.t * 2 + i * 2.1) * 0.9));
    if (p.ring) p.ring.rotation.x = this.t * 2;
    if (p.water) p.water.material.emissiveIntensity = 1.3 + Math.sin(this.t * 3) * 0.3;
    if (this.def.support) {
      if (Math.random() < dt * 4) g.fx.trail(_v.set(this.pos.x + rand(-0.6, 0.6), 1, this.pos.z + rand(-0.6, 0.6)), 0x4ac8ff, 0.6, 1.2, 0, 2);
      return;
    }
    const oc = g.time < (this.overclockUntil || 0);
    const haste = g.towerHasteMul * (oc ? 2 : 1);
    if (oc && Math.random() < dt * 8) g.fx.trail(_v.set(this.pos.x + rand(-0.6, 0.6), 2 + rand(0, 1.5), this.pos.z + rand(-0.6, 0.6)), 0x5cf0ff, 0.6, 0.5, 0, 2.5);
    if (g.time < g.buffs.towerHaste && Math.random() < dt * 6) g.fx.trail(_v.set(this.pos.x + rand(-0.8, 0.8), 0.5, this.pos.z + rand(-0.8, 0.8)), 0xff5a3a, 0.7, 0.6, 0, 2);
    this.cd -= dt * haste;
    if (this.def.pulse) {
      if (this.cd <= 0) {
        const targets = g.enemiesInRadius(this.pos, this.range, true);
        if (targets.length) {
          this.cd = this.stats.rate;
          this.firePulse(targets);
        }
      }
      return;
    }
    const target = this.findTarget();
    if (target && !p.noRotate) {
      const a = Math.atan2(target.pos.x - this.pos.x, target.pos.z - this.pos.z);
      let dr = a - ud.head.rotation.y;
      while (dr > Math.PI) dr -= Math.PI * 2;
      while (dr < -Math.PI) dr += Math.PI * 2;
      ud.head.rotation.y += dr * Math.min(1, dt * 10);
    }
    if (p.barrel && p.barrel.position.z < 0) p.barrel.position.z = Math.min(0, p.barrel.position.z + dt * 2);
    if (target && this.cd <= 0) {
      this.cd = this.stats.rate;
      this.fire(target);
    }
  }

  fire(target) {
    const g = this.game;
    const dmg = this.stats.dmg * this.dmgMul * (this.type === 'arcane' && g.tiers.arcane >= 2 ? 1.2 : 1);
    const from = this.muzzlePos();
    switch (this.type) {
      case 'arrow': {
        audio.play('arrow', 0.8);
        g.spawnProjectile({
          from, target, speed: 26, kind: 'arrow', color: this.level >= 2 ? 0x66ff99 : 0xffe0a0,
          onHit: (pos, tgt) => { if (tgt && tgt.alive) g.damageEnemy(tgt, dmg, 'phys', this); g.fx.burst(pos, { count: 5, color: 0xffe0a0, intensity: 1.5, speed: 3, life: 0.25, size: 0.4 }); },
        });
        break;
      }
      case 'cannon': {
        audio.play('cannon', 0.7);
        const p = this.mesh.userData.parts;
        if (p.barrel) p.barrel.position.z = -0.25;
        g.fx.burst(from, { count: 12, color: 0x666666, smoke: true, speed: 2, life: 0.8, size: 1.2, sizeEnd: 2, alpha: 0.6 });
        g.fx.burst(from, { count: 10, color: 0xffaa44, intensity: 3, speed: 4, life: 0.2, size: 0.8 });
        const lead = target.def.speed * 0.6;
        const tp = target.path.at(Math.min(target.path.length, target.dist + (target.blockedBy ? 0 : lead)));
        const splash = this.stats.splash || this.def.splash;
        g.spawnProjectile({
          from, targetPos: tp, speed: 14, kind: 'shell', arc: 3, color: 0x222222,
          onHit: (pos) => {
            pos.y = 0;
            g.fx.explosion(pos, 0xff8a3a, 0.55 + this.level * 0.15, { noDecal: this.level < 2 });
            audio.play('explode', 0.5);
            g.fx.shake(0.12);
            for (const e of g.enemiesInRadius(pos, splash, false)) g.damageEnemy(e, dmg, 'phys', this);
          },
        });
        break;
      }
      case 'arcane': {
        audio.play('magic', 0.7);
        const color = [0xb065ff, 0xd070ff, 0xff70e0][this.level];
        g.fx.burst(from, { count: 10, color, intensity: 3, speed: 3, life: 0.3, size: 0.6 });
        g.spawnProjectile({
          from, target, speed: 16, kind: 'orb', color, size: 0.25 + this.level * 0.05,
          onHit: (pos, tgt) => {
            if (tgt && tgt.alive) g.damageEnemy(tgt, dmg, 'magic', this);
            g.fx.burst(pos, { count: 16, color, intensity: 3, speed: 5, life: 0.4, size: 0.6 });
            if (this.level >= 2) for (const e of g.enemiesInRadius(pos, 1.6, true)) if (e !== tgt) g.damageEnemy(e, dmg * 0.4, 'magic', this);
          },
        });
        break;
      }
      case 'tesla': {
        audio.play('zap', 0.7);
        const chain = this.stats.chain + g.teslaBonus;
        const hit = new Set();
        let cur = target, prev = from;
        for (let i = 0; i < chain && cur; i++) {
          hit.add(cur);
          const c = cur.centerClone();
          g.fx.lightning(prev, c, 0x9ab8ff, 0.12, 0.2, i === 0);
          g.damageEnemy(cur, dmg * Math.pow(0.85, i), 'magic', this);
          prev = c;
          let nxt = null, nd = 16;
          for (const e of g.enemies) {
            if (!e.alive || hit.has(e)) continue;
            const d = e.pos.distanceToSquared(cur.pos);
            if (d < nd) { nd = d; nxt = e; }
          }
          cur = nxt;
        }
        g.fx.light(from, 0x9ab8ff, 3, 6, 0.15);
        break;
      }
    }
  }

  firePulse(targets) {
    const g = this.game;
    audio.play('frost', 0.6);
    const s = this.stats;
    g.fx.ring(this.pos, 0x7fd8ff, s.range, 0.6);
    g.fx.burst(this.pos.clone().setY(1), { count: 30, color: 0xbfe8ff, intensity: 2, speed: s.range * 1.6, flat: true, life: 0.5, size: 0.6, drag: 3 });
    for (const e of targets) {
      g.damageEnemy(e, s.dmg * this.dmgMul, 'magic', this);
      const slow = Math.min(0.85, s.slow + (g.has('frostcore') ? 0.1 : 0));
      if (!e.boss || Math.random() < 0.5) g.slowEnemy(e, 1 - slow, 1.6);
    }
  }

  destroy() { this.game.scene.remove(this.mesh); }
}

// ---------- 英雄 & 召唤物 ----------
const SUMMON_DEFS = {
  golem: { name: '石像守卫', hp: 900, atk: 40, rate: 1.2, range: 1.8, speed: 2.5, melee: true, block: 3, dtype: 'phys' },
  wolf: { name: '灵狼', hp: 220, atk: 26, rate: 0.7, range: 1.4, speed: 6, melee: true, block: 1, dtype: 'magic' },
  phoenix: { name: '凤凰', hp: 9999, atk: 55, rate: 0.6, range: 7, speed: 5, melee: false, block: 0, dtype: 'magic', flying: true },
  treant: { name: '古树守卫', hp: 1300, atk: 34, rate: 1.4, range: 2.0, speed: 1.8, melee: true, block: 4, dtype: 'phys', root: true },
};

export class Unit {
  constructor(game, kind, id, pos, lifetime = 0) {
    this.game = game;
    this.kind = kind;
    this.id = id;
    this.def = kind === 'hero' ? HEROES[id] : SUMMON_DEFS[id];
    this.level = 1;
    this.xp = 0;
    this.summonMul = kind === 'summon' ? game.summonMul : 1;
    this.maxHp = Math.round(this.def.hp * (this.def.flying ? 1 : this.summonMul));
    this.hp = this.maxHp;
    this.alive = true;
    this.ranks = [1, 1, 0];
    this.skillPts = 0;
    this.focus = null;
    this.holdPos = false;
    this.avatarUntil = 0;
    this.sancUntil = 0;
    this.critNext = false;
    this.flying = !!this.def.flying;
    this.atkCD = 0;
    this.moveTarget = null;
    this.anchor = pos.clone();
    this.target = null;
    this.stunUntil = 0;
    this.drUntil = 0;
    this.hasteUntil = 0;
    this.lifetime = lifetime * (kind === 'summon' ? game.summonDur : 1);
    this.respawn = 0;
    this.lastHurt = -10;
    this.cds = [0, 0, 0];
    this.t = Math.random() * 10;
    this.attackAnim = 0;
    this.mesh = kind === 'hero' ? makeHero(id) : makeSummon(id);
    this.mesh.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    this.mesh.position.copy(pos);
    this.pos = this.mesh.position;
    game.scene.add(this.mesh);
    // 选中光圈
    if (kind === 'hero') {
      const rg = new THREE.RingGeometry(0.75, 0.95, 32);
      rg.rotateX(-Math.PI / 2);
      this.selRing = new THREE.Mesh(rg, new THREE.MeshBasicMaterial({ color: new THREE.Color(this.def.color).multiplyScalar(2), transparent: true, opacity: 0.9, depthWrite: false }));
      this.selRing.position.y = 0.05;
      this.mesh.add(this.selRing);
      this.selRing.visible = false;
      this.bar = makeHpBar(0x5aff7a, 1.3);
      this.bar.position.y = 3.0;
    } else {
      this.bar = makeHpBar(0x5ac8ff, 1.0);
      this.bar.position.y = this.id === 'golem' || this.id === 'treant' ? 3.4 : 1.8;
    }
    this.mesh.add(this.bar);
    if (this.flying) { this.pos.y = 3.2; this.bar.visible = false; }
    this.orbitA = 0;
  }

  get dmgMul() {
    const g = this.game;
    let m = 1 + (this.level - 1) * 0.1;
    if (this.kind === 'hero') {
      if (g.time < g.buffs.heroDmg) m *= 1.6;
      if (g.has('herocrest')) m *= 1.2;
      if (g.tiers.holy >= 2) m *= 1.15;
      if (g.time < this.avatarUntil) m *= 2;
    } else m *= this.summonMul;
    if (g.time < this.sancUntil) m *= 1.3;
    return m;
  }

  get blockCap() {
    let b = this.def.block;
    if (this.kind === 'hero' && this.game.has('bulwark')) b++;
    if (this.game.time < this.avatarUntil) b += 2;
    return b;
  }

  takeDamage(d) {
    if (!this.alive || this.flying) return;
    const g = this.game;
    if (g.time < this.drUntil) d *= 0.5;
    if (g.time < this.avatarUntil) d *= 0.4;
    if (g.has('bulwark')) d *= 0.8;
    // 圣光骑士光环
    for (const u of g.units) {
      if (u.kind === 'hero' && u.id === 'paladin' && u.alive && u.pos.distanceToSquared(this.pos) < 16) { d *= 0.85; break; }
    }
    this.hp -= d;
    this.lastHurt = this.game.time;
    if (this.hp <= 0) this.die();
  }

  heal(a) {
    if (!this.alive) return;
    this.hp = Math.min(this.maxHp, this.hp + a);
  }

  die() {
    const g = this.game;
    this.alive = false;
    this.hp = 0;
    g.fx.burst(this.pos.clone().setY(1), { count: 40, color: this.kind === 'hero' ? this.def.color : 0x7ad8ff, intensity: 2.5, speed: 5, life: 0.8, size: 0.8, up: 2 });
    g.fx.ring(this.pos, 0xffffff, 2.5, 0.5);
    for (const e of g.enemies) if (e.blockedBy === this) e.blockedBy = null;
    if (this.kind === 'hero') {
      audio.play('herodie');
      this.respawn = (12 + this.level) * (g.has('grail') ? 0.5 : 1) * (g.tiers.holy >= 2 ? 0.5 : 1);
      this.mesh.visible = false;
      this.focus = null;
      g.ui.toast(`${this.def.name} 倒下了！${Math.ceil(this.respawn)} 秒后复活`);
    } else {
      this.mesh.visible = false;
      this.removed = true;
    }
  }

  revive() {
    const g = this.game;
    this.alive = true;
    this.hp = this.maxHp;
    this.respawn = 0;
    const path = g.world.paths[0];
    path.at(path.length - 4, this.pos);
    this.pos.y = 0;
    this.anchor.copy(this.pos);
    this.moveTarget = null;
    this.mesh.visible = true;
    if (g.has('grail')) this.cds = [0, 0, 0];
    g.fx.pillar(this.pos, this.def.color, 1, 20, 0.9);
    g.fx.sigil(this.pos, this.def.color, 2, 1.2);
    g.fx.burst(this.pos.clone().setY(1), { count: 40, color: this.def.color, intensity: 3, speed: 4, life: 0.8, size: 0.8, up: 2 });
    audio.play('summon', 0.7);
  }

  gainXp(x) {
    if (this.kind !== 'hero' || !this.alive || this.level >= 10) return;
    this.xp += x * (this.game.has('herocrest') ? 1.5 : 1);
    let need = 60 + this.level * 50;
    while (this.xp >= need && this.level < 10) {
      this.xp -= need;
      this.level++;
      this.skillPts++;
      // 等级 3 时若终极技能未学习则自动学习
      if (this.level === 3 && this.ranks[2] === 0) { this.ranks[2] = 1; this.skillPts--; this.game.ui.toast(`${this.def.name} 领悟了终极技能「${this.def.skills[2].name}」！`); }
      const ratio = this.hp / this.maxHp;
      this.maxHp = Math.round(this.def.hp * (1 + (this.level - 1) * 0.12));
      this.hp = Math.min(this.maxHp, this.maxHp * ratio + this.maxHp * 0.3);
      const g = this.game;
      g.fx.pillar(this.pos, 0xffd257, 0.9, 12, 1.0);
      g.fx.burst(this.pos.clone().setY(1), { count: 30, color: 0xffd257, intensity: 3, speed: 3, life: 1, size: 0.7, up: 3 });
      g.ui.floatText(this.pos.clone().setY(3), `升级！Lv.${this.level}`, '#ffd257', true);
      g.fx.sigil(this.pos, 0xffd257, 2.2, 1.2, { spin: 3 });
      audio.play('levelup');
      g.ui.renderHeroes();
      need = 60 + this.level * 50;
    }
  }

  blockingCount() {
    let n = 0;
    for (const e of this.game.enemies) if (e.alive && e.blockedBy === this) n++;
    return n;
  }

  releaseBlocks() { for (const e of this.game.enemies) if (e.blockedBy === this) e.blockedBy = null; }

  moveToward(target, dt, speed) {
    const dx = target.x - this.pos.x, dz = target.z - this.pos.z;
    const d = Math.hypot(dx, dz);
    if (d < 0.05) return true;
    const step = Math.min(d, speed * dt);
    this.pos.x += (dx / d) * step;
    this.pos.z += (dz / d) * step;
    this.face(dx, dz, dt);
    this.walking = true;
    return d - step < 0.05;
  }

  face(dx, dz, dt) {
    const a = Math.atan2(dx, dz);
    let dr = a - this.mesh.rotation.y;
    while (dr > Math.PI) dr -= Math.PI * 2;
    while (dr < -Math.PI) dr += Math.PI * 2;
    this.mesh.rotation.y += dr * Math.min(1, dt * 12);
  }

  clampToMap() {
    const w = this.game.world;
    const hw = (w.W * 2) / 2 - 0.5, hh = (w.H * 2) / 2 - 0.5;
    this.pos.x = Math.max(-hw, Math.min(hw, this.pos.x));
    this.pos.z = Math.max(-hh, Math.min(hh, this.pos.z));
  }

  update(dt) {
    const g = this.game;
    const t = g.time;
    this.t += dt;
    this.walking = false;
    for (let i = 0; i < 3; i++) this.cds[i] = Math.max(0, this.cds[i] - dt);
    if (!this.alive) {
      if (this.kind === 'hero') {
        this.respawn -= dt;
        if (this.respawn <= 0) this.revive();
      }
      return;
    }
    if (this.lifetime > 0) {
      this.lifetime -= dt;
      if (this.lifetime <= 0) { this.die(); return; }
    }
    if (this.flying) { this.updateFlying(dt); return; }
    // 回血
    if (t - this.lastHurt > 3 && this.hp < this.maxHp) this.heal(this.maxHp * 0.03 * dt);
    if (t < this.stunUntil) { this.animate(dt); return; }
    const speed = this.def.speed * (t < this.hasteUntil ? 1.3 : 1) * (t < this.avatarUntil ? 1.2 : 1);
    if (this.focus && (!this.focus.alive || this.manual || this.moveTarget)) this.focus = null;
    // 神威降临：体型与光效
    const big = t < this.avatarUntil ? 1.45 : 1;
    const sc = this.mesh.scale.x + (big - this.mesh.scale.x) * Math.min(1, dt * 5);
    this.mesh.scale.setScalar(sc);
    if (big > 1 && Math.random() < dt * 20) g.fx.trail(_v.set(this.pos.x + rand(-0.6, 0.6), rand(0.2, 2.6), this.pos.z + rand(-0.6, 0.6)), 0xffe066, 0.7, 0.8, 0, 2.5);

    // 手动控制 (WASD)
    if (this.manual && (this.manual.x || this.manual.z)) {
      this.releaseBlocks();
      this.moveTarget = null;
      const len = Math.hypot(this.manual.x, this.manual.z);
      this.pos.x += (this.manual.x / len) * speed * dt;
      this.pos.z += (this.manual.z / len) * speed * dt;
      this.clampToMap();
      this.face(this.manual.x, this.manual.z, dt);
      this.anchor.copy(this.pos);
      this.walking = true;
      this.tryAttack(dt, false);
    } else if (this.moveTarget) {
      this.releaseBlocks();
      if (this.moveToward(this.moveTarget, dt, speed)) {
        this.anchor.copy(this.moveTarget);
        this.moveTarget = null;
      }
      if (!this.def.melee) this.tryAttack(dt, false);
    } else if (this.focus) {
      this.focusCombat(dt, speed);
    } else {
      this.combat(dt, speed);
    }
    this.animate(dt);
    if (this.selRing) {
      this.selRing.visible = g.selectedHero === this;
      this.selRing.rotation.y += dt;
    }
    setBar(this.bar, this.hp / this.maxHp);
  }

  // 集火指定敌人：追击直至进入射程
  focusCombat(dt, speed) {
    const e = this.focus;
    const reach = this.def.melee ? this.def.range + e.def.size * 0.5 : this.def.range * 0.92;
    const d = Math.hypot(e.pos.x - this.pos.x, e.pos.z - this.pos.z);
    if (d > reach) {
      this.releaseBlocks();
      this.moveToward(e.pos, dt, speed);
      this.clampToMap();
      this.anchor.copy(this.pos);
      if (!this.def.melee) this.tryAttack(dt, false, e);
      return;
    }
    this.anchor.copy(this.pos);
    if (this.def.melee) {
      if (!e.flying && !e.blockedBy && this.blockingCount() < this.blockCap) e.blockedBy = this;
      this.face(e.pos.x - this.pos.x, e.pos.z - this.pos.z, dt);
      this.atkCD -= dt;
      if (this.atkCD <= 0 && !e.flying) this.meleeHit(e);
      else if (e.flying) this.focus = null;
    } else this.tryAttack(dt, true, e);
  }

  meleeHit(tgt) {
    const g = this.game;
    this.atkCD = this.def.rate;
    this.attackAnim = 0.3;
    audio.play('swing', 0.6);
    g.damageEnemy(tgt, this.def.atk * this.dmgMul, this.def.dtype, this);
    const hp = tgt.centerClone();
    const col = this.kind === 'hero' ? this.def.color : this.id === 'treant' ? 0x8ad870 : 0x9ad8ff;
    g.fx.burst(hp, { count: 10, color: col, intensity: 2.5, speed: 4, life: 0.3, size: 0.5 });
    g.fx.burst(hp, { count: 4, color: 0xffffff, intensity: 2, speed: 7, life: 0.15, size: 0.3 });
    if (this.def.root && tgt.alive) {
      g.slowEnemy(tgt, 0.3, 1.2);
      // 古树：治疗附近友军
      for (const u of g.units) if (u.alive && !u.flying && u.pos.distanceToSquared(this.pos) < 16) u.heal(18 * g.healMul);
      g.fx.burst(this.pos.clone().setY(1), { count: 6, color: 0x8aff7a, intensity: 2, speed: 1.5, life: 0.8, size: 0.4, up: 1.5, radius: 1.5 });
    }
  }

  combat(dt, speed) {
    const g = this.game;
    if (this.def.melee) {
      // 阻挡逻辑
      const cap = this.blockCap;
      let blocking = this.blockingCount();
      if (blocking < cap) {
        for (const e of g.enemies) {
          if (!e.alive || e.flying || e.blockedBy) continue;
          if (e.pos.distanceToSquared(this.pos) < (1.4 + e.def.size * 0.6) ** 2) {
            e.blockedBy = this;
            if (++blocking >= cap) break;
          }
        }
      }
      // 选择目标
      let tgt = null;
      for (const e of g.enemies) if (e.alive && e.blockedBy === this) { tgt = e; break; }
      if (!tgt) {
        // 守卫半径内寻找敌人
        const guard = this.holdPos ? this.def.range + 0.6 : this.id === 'wolf' ? 7 : this.id === 'golem' || this.id === 'treant' ? 2.5 : 4;
        let bd = guard * guard;
        for (const e of g.enemies) {
          if (!e.alive || e.flying) continue;
          const d = e.pos.distanceToSquared(this.anchor);
          if (d < bd) { bd = d; tgt = e; }
        }
        if (tgt) {
          const d = tgt.pos.distanceTo(this.pos);
          if (d > this.def.range) this.moveToward(tgt.pos, dt, speed);
        } else if (this.pos.distanceToSquared(this.anchor) > 0.05) {
          this.moveToward(this.anchor, dt, speed);
        }
      }
      if (tgt) {
        const d = tgt.pos.distanceTo(this.pos);
        this.face(tgt.pos.x - this.pos.x, tgt.pos.z - this.pos.z, dt);
        this.atkCD -= dt;
        if (d <= this.def.range + tgt.def.size * 0.5 + 0.3 && this.atkCD <= 0) this.meleeHit(tgt);
      } else this.atkCD = Math.max(0, this.atkCD - dt);
    } else {
      if (this.pos.distanceToSquared(this.anchor) > 0.05) this.moveToward(this.anchor, dt, speed);
      this.tryAttack(dt, true);
    }
  }

  tryAttack(dt, canFace, forced = null) {
    const g = this.game;
    const haste = (g.time < this.hasteUntil ? 2 : 1) * (g.time < this.avatarUntil ? 1.3 : 1);
    this.atkCD -= dt * haste;
    let tgt = null;
    if (forced && forced.alive && forced.pos.distanceToSquared(this.pos) <= this.def.range * this.def.range) tgt = forced;
    else tgt = g.nearestEnemy(this.pos, this.def.range, true);
    if (!tgt) return;
    if (canFace) this.face(tgt.pos.x - this.pos.x, tgt.pos.z - this.pos.z, dt);
    if (this.atkCD > 0) return;
    this.atkCD = this.def.rate;
    this.attackAnim = 0.25;
    const from = this.pos.clone().setY(1.6);
    const dmg = this.def.atk * this.dmgMul;
    if (this.id === 'ranger') {
      audio.play('arrow', 0.7);
      const crit = Math.random() < 0.2;
      g.spawnProjectile({ from, target: tgt, speed: crit ? 40 : 30, kind: 'arrow', color: crit ? 0xffffff : 0x7affaa, onHit: (p, e) => {
        if (e && e.alive) { this.critNext = crit; g.damageEnemy(e, dmg, 'phys', this); this.critNext = false; }
        if (crit) { g.fx.burst(p, { count: 14, color: 0x7affaa, color2: 0xffffff, intensity: 3, speed: 6, life: 0.3, size: 0.5 }); g.fx.ring(p.clone().setY(0), 0x7affaa, 1.2, 0.25); }
      } });
    } else if (this.id === 'pyro') {
      audio.play('magic', 0.5);
      g.spawnProjectile({ from, target: tgt, speed: 16, kind: 'orb', color: 0xff6a1a, size: 0.22, onHit: (p, e) => { if (e && e.alive) { g.damageEnemy(e, dmg, 'magic', this); g.burnEnemy(e, 10, 2); } g.fx.burst(p, { count: 10, color: 0xff6a1a, intensity: 3, speed: 4, life: 0.3, size: 0.5 }); } });
    } else if (this.id === 'frost') {
      audio.play('magic', 0.5);
      g.spawnProjectile({ from, target: tgt, speed: 16, kind: 'orb', color: 0x7fd8ff, size: 0.2, onHit: (p, e) => { if (e && e.alive) { g.damageEnemy(e, dmg, 'magic', this); g.slowEnemy(e, 0.7, 1.5); } g.fx.burst(p, { count: 10, color: 0xbfe8ff, intensity: 2, speed: 4, life: 0.3, size: 0.5 }); } });
    } else if (this.id === 'phoenix') {
      audio.play('fire', 0.4);
      g.spawnProjectile({ from: this.pos.clone(), target: tgt, speed: 18, kind: 'orb', color: 0xff8a2a, size: 0.3, onHit: (p, e) => { g.fx.explosion(p, 0xff7a1a, 0.4, { noDecal: true }); for (const en of g.enemiesInRadius(p, 1.8, true)) { g.damageEnemy(en, dmg, 'magic', this); g.burnEnemy(en, 15, 2); } } });
    }
  }

  updateFlying(dt) {
    // 凤凰：围绕锚点盘旋并攻击
    this.orbitA += dt * 1.2;
    const r = 3;
    const tx = this.anchor.x + Math.cos(this.orbitA) * r;
    const tz = this.anchor.z + Math.sin(this.orbitA) * r;
    const dx = tx - this.pos.x, dz = tz - this.pos.z;
    this.pos.x = tx; this.pos.z = tz;
    this.pos.y = 3.2 + Math.sin(this.t * 2) * 0.3;
    this.face(dx, dz, dt);
    const p = this.mesh.userData.parts;
    if (p.wings) p.wings.forEach((w, i) => (w.rotation.z = (i ? -1 : 1) * Math.sin(this.t * 8) * 0.5));
    this.game.fx.trail(this.pos, 0xff7a1a, 1.4, 0.6, 0.2, 2.5);
    if (Math.random() < 0.5) this.game.fx.trail(this.pos, 0xffd257, 0.8, 0.9, 0.5, 2);
    // 锚点跟随最近敌人
    const near = this.game.nearestEnemy(this.anchor, 9, true);
    if (near) this.anchor.lerp(near.pos, Math.min(1, dt * 0.8));
    this.tryAttack(dt, false);
  }

  animate(dt) {
    const p = this.mesh.userData.parts;
    const walk = this.walking ? 1 : 0;
    const t = this.t;
    if (this.attackAnim > 0) this.attackAnim -= dt;
    if (p.legs && p.legs.length === 2) {
      p.legs[0].rotation.x = Math.sin(t * 12) * 0.7 * walk;
      p.legs[1].rotation.x = -Math.sin(t * 12) * 0.7 * walk;
    } else if (p.legs) p.legs.forEach((l, i) => (l.rotation.x = Math.sin(t * 16 + (i % 2) * Math.PI) * 0.6 * walk));
    if (p.arms && p.arms.length === 2) {
      if (this.kind === 'hero') {
        p.arms[0].rotation.x = -Math.sin(t * 12) * 0.5 * walk;
        p.arms[1].rotation.x = this.attackAnim > 0 ? -2.2 * (this.attackAnim / 0.3) : Math.sin(t * 12) * 0.5 * walk;
      } else {
        p.arms.forEach((a, i) => (a.rotation.x = this.attackAnim > 0 ? -1.8 : Math.sin(t * 4 + i * Math.PI) * 0.3 * walk));
      }
    }
    const body = this.mesh.userData.body;
    body.position.y = this.walking ? Math.abs(Math.sin(t * 12)) * 0.08 : Math.sin(t * 2) * 0.02;
    if (p.orb && Math.random() < dt * 10) {
      const wp = p.orb.getWorldPosition(_v);
      this.game.fx.trail(wp, this.id === 'pyro' ? 0xff6a1a : 0x7fd8ff, 0.5, 0.5, 0.05, 2);
    }
    if (this.id === 'treant' && Math.random() < dt * 4) this.game.fx.trail(_v.copy(this.pos).add(_v2.set(rand(-0.8, 0.8), rand(1.5, 3), rand(-0.8, 0.8))), 0x8aff7a, 0.5, 1.2, 0.1, 1.8);
    if (this.id === 'wolf' && Math.random() < dt * 8) this.game.fx.trail(_v.copy(this.pos).setY(0.7), 0x6ab8ff, 0.7, 0.5, 0.3, 1.5);
  }

  destroy() { this.game.scene.remove(this.mesh); }
}

// ---------- 投射物 ----------
const projGeos = {
  arrow: (() => { const g = new THREE.CylinderGeometry(0.03, 0.03, 0.8, 4); g.rotateX(Math.PI / 2); return g; })(),
  orb: new THREE.IcosahedronGeometry(1, 1),
  shell: new THREE.IcosahedronGeometry(0.22, 1),
};
const shellMat = new THREE.MeshStandardMaterial({ color: 0x222228, metalness: 0.6, roughness: 0.4 });

export class Projectile {
  constructor(game, o) {
    this.game = game;
    this.o = o;
    this.pos = o.from.clone();
    this.start = o.from.clone();
    this.target = o.target || null;
    this.targetPos = o.targetPos ? o.targetPos.clone() : (o.target ? o.target.centerClone() : this.pos.clone());
    this.speed = o.speed || 15;
    this.alive = true;
    this.t = 0;
    let m;
    if (o.kind === 'arrow') m = new THREE.Mesh(projGeos.arrow, glowMat(o.color || 0xffe0a0, 2));
    else if (o.kind === 'shell') m = new THREE.Mesh(projGeos.shell, shellMat);
    else if (o.kind === 'mesh') m = o.mesh;
    else { m = new THREE.Mesh(projGeos.orb, glowMat(o.color || 0xffffff, 4)); m.scale.setScalar(o.size || 0.25); }
    this.mesh = m;
    m.position.copy(this.pos);
    game.scene.add(m);
    if (o.arc) {
      this.flatDist = Math.hypot(this.targetPos.x - this.start.x, this.targetPos.z - this.start.z);
      this.travel = 0;
    }
  }

  update(dt) {
    const g = this.game;
    const o = this.o;
    this.t += dt;
    if (this.target && this.target.alive) this.targetPos.copy(this.target.center);
    if (o.arc) {
      this.travel += this.speed * dt;
      const k = Math.min(1, this.travel / Math.max(0.01, this.flatDist));
      this.pos.lerpVectors(this.start, this.targetPos, k);
      this.pos.y = this.start.y * (1 - k) + this.targetPos.y * k + Math.sin(k * Math.PI) * o.arc;
      if (Math.random() < 0.6) g.fx.burst(this.pos, { count: 1, color: 0x777777, smoke: true, speed: 0.3, life: 0.6, size: 0.6, sizeEnd: 1.2, alpha: 0.4 });
      this.mesh.position.copy(this.pos);
      if (k >= 1) this.hit();
      return;
    }
    const dir = _v.subVectors(this.targetPos, this.pos);
    const d = dir.length();
    const step = this.speed * dt;
    if (d <= step || d < 0.2) { this.pos.copy(this.targetPos); this.hit(); return; }
    dir.multiplyScalar(1 / d);
    this.pos.addScaledVector(dir, step);
    this.mesh.position.copy(this.pos);
    if (o.kind === 'arrow' || o.kind === 'mesh') this.mesh.lookAt(_v2.copy(this.pos).add(dir));
    // 拖尾
    if (o.kind === 'arrow') g.fx.trail(this.pos, o.color || 0xffe0a0, 0.35, 0.18, 0.02, 1.2);
    else if (o.kind === 'orb') {
      g.fx.trail(this.pos, o.color, (o.size || 0.25) * 4, 0.35, 0.05, 2.5);
      if (Math.random() < 0.5) g.fx.trail(this.pos, 0xffffff, (o.size || 0.25) * 2, 0.2, 0.1, 1.5);
    }
    if (o.onTrail) o.onTrail(this.pos, dt);
    if (this.t > 8) this.hit();
  }

  hit() {
    if (!this.alive) return;
    this.alive = false;
    this.game.scene.remove(this.mesh);
    if (this.o.kind === 'mesh') this.mesh.traverse((m) => { if (m.isMesh && m.geometry) m.geometry.dispose(); });
    if (this.o.onHit) this.o.onHit(this.pos.clone(), this.target);
  }
}
