// ============ 法术：卡牌效果 & 英雄技能 ============
import * as THREE from 'three';
import { audio } from './audio.js';
import { rand } from './fx.js';
import { glowMat, mat } from './models.js';
import { Unit } from './entities.js';
import { CARDS, rankMul } from './data.js';

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------- 可复用的效果组件 ----------
function skyStrike(g, pos, { color, height = 18, speed = 30, size = 0.6, onHit, offset = 6, meshFn }) {
  const from = V(pos.x - offset * 0.6, height, pos.z - offset);
  g.spawnProjectile({
    from, targetPos: pos.clone(), speed, kind: meshFn ? 'mesh' : 'orb', mesh: meshFn ? meshFn() : undefined, color, size,
    onTrail: (p) => {
      g.fx.trail(p, color, size * 5, 0.5, size * 0.6, 2.5);
      g.fx.trail(p, 0xffffff, size * 2.5, 0.25, size * 0.3, 2);
    },
    onHit,
  });
}

function iceSpikes(g, pos, radius, count = 10, dur = 1.6) {
  const group = new THREE.Group();
  const m = mat(0xbfe8ff, { emissive: 0x4aa8ff, ei: 0.8, rough: 0.1, transparent: true, opacity: 0.85 });
  for (let i = 0; i < count; i++) {
    const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * radius;
    const s = new THREE.Mesh(new THREE.ConeGeometry(0.2 + Math.random() * 0.2, 1 + Math.random() * 1.2, 5), m);
    s.position.set(pos.x + Math.cos(a) * r, 0, pos.z + Math.sin(a) * r);
    s.rotation.set(rand(-0.4, 0.4), 0, rand(-0.4, 0.4));
    s.userData.h = s.geometry.parameters.height;
    group.add(s);
  }
  g.scene.add(group);
  let t = 0;
  g.fx.add({
    update: (dt) => {
      t += dt;
      const k = t < 0.15 ? t / 0.15 : t > dur - 0.4 ? Math.max(0, (dur - t) / 0.4) : 1;
      group.children.forEach((s) => { s.scale.set(1, k, 1); s.position.y = s.userData.h * 0.5 * k - 0.1; });
      return t < dur;
    },
    dispose: () => { g.scene.remove(group); group.children.forEach((s) => s.geometry.dispose()); },
  });
}

function freezeArea(g, pos, radius, dmg, dur, src) {
  for (const e of g.enemiesInRadius(pos, radius, true)) {
    g.damageEnemy(e, dmg, 'magic', src);
    g.freezeEnemy(e, e.boss ? dur * 0.4 : dur);
  }
}

function zone(g, pos, radius, dur, color, kind, onTick, opts = {}) {
  const circ = g.fx.circle(pos, color, radius, kind);
  g.zones.push({
    pos: pos.clone(), radius, dur, t: 0, circ,
    update(dt) {
      this.t += dt;
      onTick(dt, this);
      if (this.t >= this.dur) { circ.kill(); if (opts.onEnd) opts.onEnd(); return false; }
      return true;
    },
  });
}

function nearestTo(g, pos, r) {
  return g.nearestEnemy(pos, r, true);
}

function healArea(g, pos, radius, amount) {
  amount *= g.healMul;
  for (const u of g.units) {
    if (!u.alive || u.flying) continue;
    if (u.pos.distanceToSquared(pos) <= radius * radius) {
      u.heal(amount);
      g.fx.burst(u.pos.clone().setY(1), { count: 20, color: 0x6cff9a, intensity: 2.5, speed: 2, life: 1, size: 0.6, up: 2 });
      g.ui.floatText(u.pos.clone().setY(2.5), `+${Math.round(amount)}`, '#6cff9a');
    }
  }
}

// ---------- 卡牌效果 ----------
export function castCard(g, id, pos, tower) {
  const fx = g.fx;
  const src = { card: id, mul: g.cardPower(id) };
  const def = CARDS[id];
  // 地面目标卡牌：施法印记
  if (pos && def.target === 'point') fx.sigil(pos, new THREE.Color(def.color).getHex(), (def.radius || 1.5) * 1.1, 0.9, { spin: 3, light: false });
  switch (id) {
    case 'fireball': {
      audio.play('fire');
      skyStrike(g, pos, {
        color: 0xff6a1a, size: 0.5, speed: 34,
        onHit: (p) => {
          p.y = 0;
          fx.explosion(p, 0xff6a1a, 1.2);
          fx.shake(0.35);
          audio.play('explode');
          for (const e of g.enemiesInRadius(p, 2.5, true)) { g.damageEnemy(e, 180, 'magic', src); g.burnEnemy(e, 25, 3); }
        },
      });
      break;
    }
    case 'frostnova': {
      audio.play('freeze');
      fx.ring(pos, 0xbfe8ff, 3.5, 0.6);
      fx.ring(pos, 0x5ab8ff, 4.5, 0.9);
      fx.burst(pos.clone().setY(0.5), { count: 80, color: 0xe0f8ff, color2: 0x5ab8ff, intensity: 2, speed: 10, flat: true, life: 0.7, size: 0.8, drag: 3 });
      fx.burst(pos.clone().setY(0.5), { count: 30, color: 0xffffff, intensity: 2, speed: 4, life: 1.2, size: 0.4, up: 3, gravity: 3 });
      fx.light(pos, 0x7fd8ff, 6, 10, 0.5);
      fx.screenFlash('rgba(150,220,255,0.6)', 0.35);
      iceSpikes(g, pos, 3.5, 14, 2.5);
      freezeArea(g, pos, 3.5, 60, 2.5, src);
      break;
    }
    case 'chain': {
      audio.play('thunder', 0.8);
      let cur = nearestTo(g, pos, 3.5);
      const top = V(pos.x, 16, pos.z);
      if (!cur) { fx.lightning(top, pos.clone(), 0xa8b8ff, 0.3, 0.3); fx.light(pos, 0xa8b8ff, 6, 8, 0.3); break; }
      const hit = new Set();
      let prev = top;
      let i = 0;
      const step = () => {
        if (!cur || i >= 8 + g.chainBonus) return;
        hit.add(cur);
        const c = cur.centerClone();
        fx.lightning(prev, c, 0xa8b8ff, i === 0 ? 0.3 : 0.18, 0.3);
        fx.light(c, 0x8aa8ff, 4, 7, 0.2);
        g.damageEnemy(cur, 110, 'magic', src);
        g.stunEnemy(cur, 0.3);
        audio.play('zap');
        prev = c;
        let nxt = null, nd = 36;
        for (const e of g.enemies) {
          if (!e.alive || hit.has(e)) continue;
          const d = e.pos.distanceToSquared(cur.pos);
          if (d < nd) { nd = d; nxt = e; }
        }
        cur = nxt; i++;
        g.later(0.08, step);
      };
      step();
      break;
    }
    case 'meteor': {
      audio.play('meteor');
      const warn = fx.circle(pos, 0xff4a1a, 4, 1);
      const rock = () => {
        const m = new THREE.Mesh(new THREE.DodecahedronGeometry(1.3, 0), mat(0x3a2020, { emissive: 0xff4a1a, ei: 1.2 }));
        return m;
      };
      skyStrike(g, pos, {
        color: 0xff6a1a, size: 1.0, speed: 22, height: 30, offset: 14, meshFn: rock,
        onHit: (p) => {
          warn.kill();
          p.y = 0;
          fx.explosion(p, 0xff5a1a, 3);
          fx.explosion(p, 0xffd257, 1.5, { noDecal: true });
          fx.ring(p, 0xffaa55, 8, 0.8);
          fx.burst(p, { count: 40, color: 0x3a2020, color2: 0x1a1010, smoke: false, intensity: 1, speed: 14, life: 1.4, size: 0.8, gravity: 18, up: 6 });
          fx.pillar(p, 0xff7a2a, 2.5, 14, 0.5, 0.05);
          fx.shake(1.3);
          fx.screenFlash('rgba(255,180,90,0.8)', 0.6);
          audio.play('bigexplode');
          for (const e of g.enemiesInRadius(p, 4, true)) { g.damageEnemy(e, 700, 'magic', src); g.burnEnemy(e, 30, 4); g.stunEnemy(e, 0.8); }
        },
      });
      break;
    }
    case 'heal': {
      audio.play('heal');
      fx.pillar(pos, 0x6cff9a, 2.2, 16, 1.2);
      fx.ring(pos, 0x6cff9a, 5, 0.9);
      fx.burst(pos, { count: 60, color: 0x6cff9a, color2: 0xffffff, intensity: 2.5, speed: 2, life: 1.5, size: 0.6, up: 3, radius: 3, drag: 1 });
      healArea(g, pos, 5, 300);
      break;
    }
    case 'golem': {
      summonFx(g, pos, 0x4ae0ff);
      const u = new Unit(g, 'summon', 'golem', pos.clone().setY(0), 30);
      g.units.push(u);
      fx.shake(0.5);
      break;
    }
    case 'wolves': {
      summonFx(g, pos, 0x6ab8ff);
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        g.units.push(new Unit(g, 'summon', 'wolf', V(pos.x + Math.cos(a), 0, pos.z + Math.sin(a)), 22));
      }
      break;
    }
    case 'blizzard': {
      audio.play('freeze');
      zone(g, pos, 4.5, 6, 0x9fd8ff, 1, (dt, z) => {
        for (let k = 0; k < 6; k++) {
          const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 4.5;
          fx.glow.emit({ x: pos.x + Math.cos(a) * r, y: 6 + Math.random() * 2, z: pos.z + Math.sin(a) * r, vx: 3, vy: -9, vz: 1, life: 0.8, size: 0.45, sizeEnd: 0.3, color: fx.col(0xe8f8ff, 1.5), drag: 0 });
        }
        if (Math.random() < dt * 3) fx.burst(pos.clone().setY(0.3), { count: 6, color: 0xffffff, smoke: true, speed: 3, flat: true, life: 1.2, size: 2, sizeEnd: 3, alpha: 0.25, radius: 3 });
        for (const e of g.enemiesInRadius(pos, 4.5, true)) { e.zoneSlow = 0.5; g.damageEnemy(e, 50 * dt, 'magic', src, true); }
      });
      break;
    }
    case 'poison': {
      audio.play('void', 0.6);
      zone(g, pos, 3.2, 8, 0x7aff3a, 1, (dt) => {
        if (Math.random() < dt * 14) fx.burst(pos.clone().setY(0.3), { count: 1, color: 0x4a8a1a, smoke: true, speed: 0.6, life: 2, size: 2.5, sizeEnd: 4, alpha: 0.35, radius: 2.5, up: 0.5 });
        if (Math.random() < dt * 20) fx.burst(pos.clone().setY(0.1), { count: 1, color: 0x9cff4a, intensity: 2, speed: 0.5, life: 1.2, size: 0.5, sizeEnd: 0.8, radius: 2.8, up: 1.2 });
        for (const e of g.enemiesInRadius(pos, 3.2, true)) g.damageEnemy(e, 40 * dt, 'magic', src, true);
      });
      break;
    }
    case 'thunder': {
      const tgt = nearestTo(g, pos, 2.5);
      const p = tgt ? tgt.centerClone() : pos.clone();
      audio.play('thunder');
      fx.lightning(V(p.x + 1, 22, p.z - 2), p, 0xfff27a, 0.45, 0.4);
      fx.lightning(V(p.x - 1, 22, p.z - 1), p, 0xffffff, 0.25, 0.3, false);
      fx.ring(p.clone().setY(0), 0xfff27a, 2.5, 0.4);
      fx.light(p, 0xfff27a, 10, 12, 0.4);
      fx.screenFlash('rgba(255,250,200,0.9)', 0.4);
      fx.shake(0.4);
      fx.scorch(p.clone().setY(0), 1.2);
      if (tgt) { g.damageEnemy(tgt, 320, 'magic', src); g.stunEnemy(tgt, 1); }
      break;
    }
    case 'blackhole': {
      audio.play('void');
      const core = new THREE.Mesh(new THREE.SphereGeometry(0.7, 16, 12), new THREE.MeshBasicMaterial({ color: 0x000000 }));
      core.position.set(pos.x, 1.2, pos.z);
      g.scene.add(core);
      const halo = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.08, 6, 32), glowMat(0xb65cff, 4));
      halo.position.copy(core.position);
      g.scene.add(halo);
      zone(g, pos, 5, 4, 0x9a3aff, 3, (dt, z) => {
        const k = Math.min(1, z.t * 3) * (z.t > 3.6 ? (4 - z.t) / 0.4 : 1);
        core.scale.setScalar(k);
        halo.scale.setScalar(k * (1 + Math.sin(z.t * 20) * 0.05));
        halo.rotation.x = z.t * 2; halo.rotation.y = z.t * 3;
        for (let i = 0; i < 6; i++) {
          const a = Math.random() * Math.PI * 2, r = 4 + Math.random() * 1.5;
          const sx = pos.x + Math.cos(a) * r, sz = pos.z + Math.sin(a) * r;
          fx.glow.emit({ x: sx, y: 0.3 + Math.random() * 2, z: sz, vx: (pos.x - sx) * 1.6 - Math.sin(a) * 4, vy: 0.4, vz: (pos.z - sz) * 1.6 + Math.cos(a) * 4, life: 0.6, size: 0.6, sizeEnd: 0.1, color: fx.col(Math.random() < 0.5 ? 0xb65cff : 0x5a8aff, 2.5), drag: 0 });
        }
        for (const e of g.enemiesInRadius(pos, 5, true)) {
          e.zoneSlow = 0.05;
          e.lateral *= 1 - dt * 2;
          // 向黑洞中心牵引（沿路径方向）
          const ahead = e.path.at(e.dist + 0.5);
          const dNow = e.pos.distanceToSquared(pos), dAhead = ahead.distanceToSquared(pos);
          if (dAhead < dNow) e.dist += dt * 2.5; else e.dist = Math.max(0, e.dist - dt * 2.5);
          g.damageEnemy(e, 90 * dt, 'magic', src, true);
        }
      }, { onEnd: () => {
        g.scene.remove(core); g.scene.remove(halo); core.geometry.dispose(); halo.geometry.dispose();
        fx.explosion(pos.clone().setY(1), 0xb65cff, 1.5, { noDecal: true });
        fx.shake(0.5);
        audio.play('explode');
        for (const e of g.enemiesInRadius(pos, 5, true)) g.damageEnemy(e, 150, 'magic', src);
      } });
      break;
    }
    case 'timestop': {
      audio.play('freeze');
      audio.play('void', 0.5);
      g.timeStopUntil = g.time + 3.5;
      fx.screenFlash('rgba(255,233,168,0.9)', 0.6);
      const c = g.world.basePos.clone().set(0, 0, 0);
      fx.ring(c, 0xffe9a8, 30, 1.2);
      fx.ring(c, 0xffffff, 20, 0.8);
      for (const e of g.enemies) fx.burst(e.centerClone(), { count: 12, color: 0xffe9a8, intensity: 2.5, speed: 2, life: 1, size: 0.6 });
      g.ui.banner('⏳ 时间停滞', '#ffe9a8');
      break;
    }
    case 'goldrush': {
      audio.play('coin');
      g.later(0.15, () => audio.play('coin'));
      g.later(0.3, () => audio.play('coin'));
      g.addGold(70);
      const c = g.world.basePos.clone();
      fx.burst(c.clone().setY(3), { count: 60, color: 0xffd257, intensity: 2.5, speed: 7, life: 1.5, size: 0.6, gravity: 12, up: 6 });
      g.ui.floatText(c.setY(4), '+70 💰', '#ffd257', true);
      break;
    }
    case 'wisdom': {
      audio.play('cast');
      g.mana = Math.min(g.maxMana, g.mana + 2);
      g.drawCards(1);
      break;
    }
    case 'drums': {
      audio.play('boss', 0.4);
      g.buffs.towerHaste = g.time + 10;
      for (const t of g.towers) { fx.ring(t.pos, 0xff5a3a, 2.5, 0.6); fx.burst(t.pos.clone().setY(2), { count: 15, color: 0xff7a5a, intensity: 2.5, speed: 3, life: 0.6, size: 0.6, up: 2 }); }
      g.ui.banner('🥁 狂暴战鼓！', '#ff7a5a');
      break;
    }
    case 'blessing': {
      audio.play('heal');
      g.buffs.heroDmg = g.time + 10;
      for (const u of g.units) if (u.kind === 'hero' && u.alive) { u.heal(150 * g.healMul); fx.pillar(u.pos, 0xfff2a8, 1, 14, 1.0); fx.burst(u.pos.clone().setY(1), { count: 25, color: 0xfff2a8, intensity: 3, speed: 3, life: 1, size: 0.6, up: 2 }); }
      g.ui.banner('👼 神圣祝福', '#fff2a8');
      break;
    }
    case 'repair': {
      audio.play('heal');
      g.lives = Math.min(g.maxLives + 10, g.lives + 4);
      const b = g.world.basePos;
      fx.pillar(b, 0xa8fff0, 2.5, 20, 1.3);
      fx.ring(b, 0xa8fff0, 5, 0.8);
      fx.burst(b.clone().setY(2), { count: 50, color: 0xa8fff0, intensity: 2.5, speed: 4, life: 1.2, size: 0.7, up: 3 });
      g.ui.floatText(b.clone().setY(5), '+4 ❤', '#a8fff0', true);
      break;
    }
    case 'quake': {
      audio.play('bigexplode', 0.7);
      audio.play('stomp');
      fx.shake(1.5);
      for (const e of g.enemies.slice()) {
        if (!e.alive || e.flying) continue;
        fx.burst(e.pos, { count: 10, color: 0x8a7a5a, smoke: true, speed: 3, flat: true, life: 1, size: 1.4, sizeEnd: 2.5, alpha: 0.6 });
        fx.burst(e.pos, { count: 6, color: 0x5a4a3a, speed: 6, life: 0.9, size: 0.4, gravity: 18, up: 5, intensity: 0.8 });
        g.slowEnemy(e, 0.5, 3);
        g.damageEnemy(e, 120, 'phys', src);
      }
      fx.ring(V(0, 0, 0), 0xd8a060, 25, 1.0);
      break;
    }
    case 'firewall': {
      audio.play('fire');
      zone(g, pos, 3, 6, 0xff7a1a, 1, (dt, z) => {
        for (let i = 0; i < 5; i++) {
          const h = Math.random() * 5;
          const a = z.t * 6 + h * 1.2 + Math.random() * 0.5 + i * 1.256;
          const r = 0.5 + h * 0.35;
          fx.glow.emit({ x: pos.x + Math.cos(a) * r, y: h, z: pos.z + Math.sin(a) * r, vx: -Math.sin(a) * 4, vy: 2.5, vz: Math.cos(a) * 4, life: 0.5, size: 1.2 - h * 0.1, sizeEnd: 0.2, color: fx.col(Math.random() < 0.3 ? 0xffd257 : 0xff5a1a, 2.5), color2: fx.col(0x661100, 1), drag: 1 });
        }
        if (Math.random() < dt * 4) audio.play('fire', 0.3);
        for (const e of g.enemiesInRadius(pos, 3, true)) g.damageEnemy(e, 70 * dt, 'magic', src, true);
      });
      fx.light(pos, 0xff6a1a, 6, 10, 6);
      break;
    }
    case 'icelance': {
      audio.play('freeze');
      const lance = () => {
        const m = new THREE.Mesh(new THREE.ConeGeometry(0.35, 4, 6), mat(0xe0f8ff, { emissive: 0x5ab8ff, ei: 1.5 }));
        m.geometry.rotateX(Math.PI / 2);
        return m;
      };
      skyStrike(g, pos, {
        color: 0x9fe8ff, size: 0.4, speed: 45, meshFn: lance, offset: 4,
        onHit: (p) => {
          p.y = 0;
          fx.ring(p, 0x9fe8ff, 2.5, 0.5);
          fx.burst(p.clone().setY(0.5), { count: 50, color: 0xe0f8ff, color2: 0x5ab8ff, intensity: 2, speed: 8, life: 0.6, size: 0.6, up: 2 });
          fx.light(p, 0x7fd8ff, 6, 8, 0.4);
          fx.shake(0.3);
          iceSpikes(g, p, 1.8, 8, 2.2);
          freezeArea(g, p, 1.8, 200, 2, src);
        },
      });
      break;
    }
    case 'foresight': {
      audio.play('cast');
      g.drawCards(2);
      break;
    }
    case 'orbital': {
      audio.play('beam');
      fx.pillar(pos, 0xffffff, 2.2, 40, 3.2, 0.15);
      fx.pillar(pos, 0x8ab8ff, 3.0, 40, 3.2, 0.3);
      fx.screenFlash('rgba(255,255,255,0.7)', 0.4);
      zone(g, pos, 2.2, 3.2, 0xbfd8ff, 1, (dt) => {
        fx.burst(pos.clone().setY(0.2), { count: 4, color: 0xffffff, color2: 0x8ab8ff, intensity: 3, speed: 7, flat: true, life: 0.4, size: 0.5 });
        if (Math.random() < dt * 10) fx.shake(0.05);
        for (const e of g.enemiesInRadius(pos, 2.2, true)) g.damageEnemy(e, 260 * dt, 'magic', src, true);
      }, { onEnd: () => fx.scorch(pos, 2.5) });
      fx.light(pos, 0xbfd8ff, 10, 14, 3.2);
      break;
    }
    case 'revive': {
      audio.play('summon');
      for (const u of g.units) {
        if (u.kind !== 'hero') continue;
        if (!u.alive) u.revive();
        u.cds = [0, 0, 0];
        fx.pillar(u.pos, 0xfff8d0, 1, 16, 1);
      }
      g.ui.banner('🕊️ 英灵归来', '#fff8d0');
      break;
    }
    case 'phoenix': {
      summonFx(g, pos, 0xff8a2a);
      fx.explosion(pos.clone().setY(1), 0xffaa33, 1, { noDecal: true });
      audio.play('fire');
      const u = new Unit(g, 'summon', 'phoenix', pos.clone(), 18);
      g.units.push(u);
      break;
    }
    case 'empower': {
      if (!tower) return false;
      audio.play('upgrade');
      tower.dmgMul *= 1.35;
      fx.pillar(tower.pos, 0x5cf0ff, 1.2, 14, 1.0);
      fx.burst(tower.pos.clone().setY(2), { count: 40, color: 0x5cf0ff, intensity: 3, speed: 4, life: 1, size: 0.6, up: 2 });
      g.ui.floatText(tower.pos.clone().setY(4), '伤害 +35%', '#5cf0ff', true);
      break;
    }
    case 'arcanemissile': {
      audio.play('magic');
      const targets = g.enemiesInRadius(pos, 4, true);
      for (let i = 0; i < 6; i++) {
        g.later(i * 0.09, () => {
          const alive = targets.filter((e) => e.alive);
          const tgt = alive.length ? alive[i % alive.length] : null;
          const from = V(pos.x + rand(-3, 3), 9 + rand(0, 3), pos.z + rand(-6, -3));
          audio.play('magic', 0.5);
          g.spawnProjectile({
            from, target: tgt, targetPos: tgt ? undefined : pos.clone().add(V(rand(-2, 2), 0, rand(-2, 2))), speed: 18, kind: 'orb', color: 0xe07aff, size: 0.22,
            onHit: (p, e) => {
              fx.burst(p, { count: 14, color: 0xe07aff, intensity: 3, speed: 5, life: 0.4, size: 0.6 });
              fx.light(p, 0xe07aff, 2, 5, 0.15);
              if (e && e.alive) g.damageEnemy(e, 70, 'magic', src);
            },
          });
        });
      }
      break;
    }
    case 'entangle': {
      audio.play('swing');
      audio.play('stomp', 0.4);
      fx.ring(pos, 0x6adf4a, 2.8, 0.6);
      fx.burst(pos.clone().setY(0.3), { count: 50, color: 0x6adf4a, color2: 0x2a6a1a, intensity: 2, speed: 5, flat: true, life: 0.8, size: 0.6, radius: 1.5 });
      for (let i = 0; i < 14; i++) {
        const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 2.8;
        fx.burst(V(pos.x + Math.cos(a) * r, 0.1, pos.z + Math.sin(a) * r), { count: 4, color: 0x8aff5a, intensity: 2, speed: 1, life: 0.9, size: 0.5, up: 3, drag: 1 });
      }
      for (const e of g.enemiesInRadius(pos, 2.8, false)) {
        g.damageEnemy(e, 80, 'magic', src);
        g.stunEnemy(e, 2.5);
        g.slowEnemy(e, 0.5, 3.5);
      }
      break;
    }
    case 'bounty': {
      audio.play('coin');
      g.later(0.12, () => audio.play('coin'));
      g.buffs.bounty = g.time + 15;
      g.ui.banner('📜 赏金令', '#ffc040', '15 秒内击杀金币翻倍');
      fx.burst(g.world.basePos.clone().setY(3), { count: 40, color: 0xffc040, intensity: 2.5, speed: 5, life: 1.2, size: 0.5, up: 4, gravity: 8 });
      break;
    }
    case 'overclock': {
      if (!tower || tower.def.support) { if (tower) g.ui.toast('法力之泉无法超载'); return false; }
      audio.play('zap');
      audio.play('upgrade', 0.6);
      tower.overclockUntil = g.time + 15;
      fx.ring(tower.pos, 0x5cf0ff, 2.5, 0.5);
      fx.lightning(V(tower.pos.x, 14, tower.pos.z), tower.pos.clone().setY(3), 0x5cf0ff, 0.25, 0.3, false);
      fx.burst(tower.pos.clone().setY(2.5), { count: 40, color: 0x5cf0ff, intensity: 3, speed: 5, life: 0.7, size: 0.5 });
      g.ui.floatText(tower.pos.clone().setY(4), '攻速 +100%', '#5cf0ff', true);
      break;
    }
    case 'judgment': {
      audio.play('heal');
      audio.play('thunder', 0.6);
      fx.screenFlash('rgba(255,240,180,0.7)', 0.5);
      fx.shake(0.5);
      const list = g.enemies.filter((e) => e.alive);
      list.forEach((e, i) => {
        if (i < 24) fx.pillar(e.pos, 0xfff0a0, e.boss ? 1.6 : 0.6, 16, 0.7);
        e.shieldedUntil = 0;
        e.barrierUntil = 0;
        g.damageEnemy(e, 150 + e.maxHp * (e.boss ? 0.04 : 0.1) / (src.mul || 1), 'magic', src);
      });
      g.ui.banner('⚖️ 末日审判', '#fff0a0');
      break;
    }
    case 'supernova': {
      audio.play('nova');
      const star = new THREE.Mesh(new THREE.SphereGeometry(1, 20, 14), glowMat(0xffc0ff, 6));
      star.position.set(pos.x, 2, pos.z);
      g.scene.add(star);
      fx.sigil(pos, 0xff9aff, 5.5, 2.2, { spin: 6 });
      zone(g, pos, 5.5, 2, 0xff7aff, 3, (dt, z) => {
        const k = 1.6 - z.t * 0.7;
        star.scale.setScalar(Math.max(0.15, k) * (1 + Math.sin(z.t * 30) * 0.08));
        for (let i = 0; i < 5; i++) {
          const a = Math.random() * Math.PI * 2, r = 5 + Math.random();
          const sx = pos.x + Math.cos(a) * r, sz = pos.z + Math.sin(a) * r;
          fx.glow.emit({ x: sx, y: 0.5 + Math.random() * 3, z: sz, vx: (pos.x - sx) * 2.2, vy: 0.6, vz: (pos.z - sz) * 2.2, life: 0.45, size: 0.6, sizeEnd: 0.1, color: fx.col(Math.random() < 0.5 ? 0xff9aff : 0xffe0a0, 3), drag: 0 });
        }
        for (const e of g.enemiesInRadius(pos, 5.5, true)) {
          e.zoneSlow = 0.15;
          const ahead = e.path.at(e.dist + 0.5);
          if (ahead.distanceToSquared(pos) < e.pos.distanceToSquared(pos)) e.dist += dt * 2; else e.dist = Math.max(0, e.dist - dt * 2);
          e.lateral *= 1 - dt * 2;
        }
      }, { onEnd: () => {
        g.scene.remove(star); star.geometry.dispose();
        const c = pos.clone().setY(1.5);
        fx.explosion(c, 0xff9aff, 2.6);
        fx.explosion(c, 0xffffff, 1.4, { noDecal: true });
        fx.ring(pos, 0xffffff, 7, 0.6);
        fx.ring(pos, 0xff9aff, 9, 1.0);
        fx.pillar(pos, 0xffc0ff, 3, 30, 1.0);
        fx.light(pos, 0xff9aff, 12, 20, 0.8);
        fx.shake(1.2);
        fx.screenFlash('rgba(255,200,255,0.85)', 0.5);
        audio.play('bigexplode');
        for (const e of g.enemiesInRadius(pos, 5.5, true)) { g.damageEnemy(e, 1100, 'magic', src); g.stunEnemy(e, 1.5); }
      } });
      break;
    }
    case 'inferno': {
      audio.play('fire');
      fx.light(pos, 0xff4a1a, 8, 12, 1.2);
      for (let k = 0; k < 3; k++) {
        g.later(k * 0.28, () => {
          const r = 1.5 + k * 1.5;
          audio.play('explode', 0.7);
          fx.ring(pos, 0xff6a1a, r + 0.6, 0.45);
          const n = 6 + k * 5;
          for (let i = 0; i < n; i++) {
            const a = (i / n) * Math.PI * 2 + k;
            const q = V(pos.x + Math.cos(a) * r, 0.3, pos.z + Math.sin(a) * r);
            fx.burst(q, { count: 8, color: 0xffd257, color2: 0xff3a0a, intensity: 3, speed: 3, life: 0.6, size: 1.2, sizeEnd: 0.2, up: 4 });
          }
          fx.shake(0.25);
          const inner = k === 0 ? 0 : 1.5 + (k - 1) * 1.5 - 0.3;
          for (const e of g.enemiesInRadius(pos, r + 0.8, true)) {
            if (e.pos.distanceTo(pos) < inner) continue;
            g.damageEnemy(e, 130, 'magic', src); g.burnEnemy(e, 25, 3);
          }
        });
      }
      g.later(0.9, () => fx.scorch(pos, 4));
      break;
    }
    case 'glacier': {
      audio.play('freeze');
      fx.screenFlash('rgba(170,230,255,0.5)', 0.3);
      iceSpikes(g, pos, 2.2, 22, 5);
      fx.ring(pos, 0xbfe8ff, 3, 0.5);
      const wall = { alive: true, takeDamage() {}, pos };
      zone(g, pos, 2.2, 5, 0xa8e8ff, 1, (dt) => {
        if (Math.random() < dt * 10) fx.burst(pos.clone().setY(0.5), { count: 2, color: 0xffffff, color2: 0x7fd8ff, intensity: 1.5, speed: 1, life: 1, size: 0.4, radius: 2, up: 0.8 });
        for (const e of g.enemiesInRadius(pos, 2.2, false)) if (!e.blockedBy && !e.boss) e.blockedBy = wall;
      }, { onEnd: () => {
        wall.alive = false;
        audio.play('freeze');
        fx.burst(pos.clone().setY(1), { count: 90, color: 0xe0f8ff, color2: 0x5ab8ff, intensity: 2.5, speed: 9, life: 0.8, size: 0.6, gravity: 10, up: 3 });
        fx.ring(pos, 0x9fe8ff, 3.5, 0.5);
        fx.shake(0.4);
        freezeArea(g, pos, 3, 220, 1, src);
      } });
      break;
    }
    case 'tempest': {
      audio.play('thunder', 0.6);
      const cloud = V(pos.x, 9, pos.z);
      let tick = 0;
      zone(g, pos, 4, 6, 0x9ab8ff, 1, (dt) => {
        for (let i = 0; i < 3; i++) fx.burst(V(cloud.x + rand(-4, 4), cloud.y + rand(-0.6, 0.6), cloud.z + rand(-4, 4)), { count: 1, color: 0x3a4060, smoke: true, speed: 0.4, life: 1.2, size: 3.5, sizeEnd: 4.5, alpha: 0.35 });
        if (Math.random() < dt * 6) fx.burst(V(cloud.x + rand(-3, 3), cloud.y, cloud.z + rand(-3, 3)), { count: 2, color: 0xa8c8ff, intensity: 3, speed: 2, life: 0.2, size: 1.2 });
        tick += dt;
        if (tick >= 0.4) {
          tick = 0;
          const pool = g.enemiesInRadius(pos, 4, true);
          const e = pool.length ? pool[Math.floor(Math.random() * pool.length)] : null;
          const hp = e ? e.centerClone() : V(pos.x + rand(-3, 3), 0, pos.z + rand(-3, 3));
          fx.lightning(V(hp.x + rand(-1, 1), cloud.y, hp.z + rand(-1, 1)), hp, 0xb8c8ff, 0.2, 0.25);
          fx.light(hp, 0x9ab8ff, 4, 7, 0.15);
          audio.play('zap', 0.6);
          if (e) { g.damageEnemy(e, 120, 'magic', src); g.stunEnemy(e, 0.2); }
        }
      });
      break;
    }
    case 'static': {
      audio.play('zap');
      const inside = new Set();
      zone(g, pos, 3, 5, 0xc8d8ff, 1, (dt) => {
        if (Math.random() < dt * 8) {
          const a1 = Math.random() * Math.PI * 2, a2 = a1 + rand(0.5, 2);
          fx.lightning(V(pos.x + Math.cos(a1) * 2.8, 0.3, pos.z + Math.sin(a1) * 2.8), V(pos.x + Math.cos(a2) * 2.8, 0.3, pos.z + Math.sin(a2) * 2.8), 0xc8d8ff, 0.06, 0.15, false);
        }
        const now = new Set(g.enemiesInRadius(pos, 3, true));
        for (const e of now) { e.zoneSlow = Math.min(e.zoneSlow || 1, 0.65); g.damageEnemy(e, 45 * dt, 'magic', src, true); }
        for (const e of inside) if (!now.has(e) && e.alive) { g.stunEnemy(e, 0.6); fx.burst(e.centerClone(), { count: 8, color: 0xc8d8ff, intensity: 3, speed: 3, life: 0.3, size: 0.4 }); }
        inside.clear(); now.forEach((e) => inside.add(e));
      });
      break;
    }
    case 'echo': {
      const last = g.lastCard;
      if (!last || g.hand.length >= g.maxHand) { g.ui.toast(!last ? '还没有可以回响的卡牌' : '手牌已满'); return false; }
      audio.play('magic');
      g.hand.push(last);
      g.ui.toast(`🔁 回响：「${CARDS[last].name}」加入手牌`);
      fx.sigil(g.world.basePos, 0xd0a0ff, 3, 1);
      break;
    }
    case 'thorns': {
      audio.play('void', 0.4);
      const vines = new THREE.Group();
      const vm = mat(0x4a8a2a, { emissive: 0x2a6a1a, ei: 0.6 });
      for (let i = 0; i < 16; i++) {
        const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 3;
        const sp = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.9 + Math.random() * 0.6, 4), vm);
        sp.position.set(pos.x + Math.cos(a) * r, 0, pos.z + Math.sin(a) * r);
        sp.rotation.set(rand(-0.6, 0.6), 0, rand(-0.6, 0.6));
        vines.add(sp);
      }
      g.scene.add(vines);
      zone(g, pos, 3.2, 7, 0x7adf5a, 1, (dt, z) => {
        const k = Math.min(1, z.t * 4) * (z.t > 6.6 ? (7 - z.t) / 0.4 : 1);
        vines.children.forEach((v) => { v.scale.y = Math.max(0.01, k); v.position.y = 0.4 * k; });
        if (Math.random() < dt * 8) fx.burst(pos.clone().setY(0.2), { count: 1, color: 0x9aff6a, intensity: 2, speed: 0.5, life: 1, size: 0.4, radius: 3, up: 1 });
        for (const e of g.enemiesInRadius(pos, 3.2, false)) {
          e.zoneSlow = Math.min(e.zoneSlow || 1, 0.6);
          // 荆棘伤害为“真实伤害”，无视相位与护甲
          g.damageEnemy(e, 45 * dt, 'true', src, true);
        }
      }, { onEnd: () => { g.scene.remove(vines); vines.children.forEach((v) => v.geometry.dispose()); } });
      break;
    }
    case 'treant': {
      summonFx(g, pos, 0x8ad870);
      fx.burst(pos.clone().setY(0.2), { count: 40, color: 0x6a4a2a, smoke: true, speed: 3, flat: true, life: 1, size: 1.4, sizeEnd: 2.5, alpha: 0.5 });
      g.units.push(new Unit(g, 'summon', 'treant', pos.clone().setY(0), 28));
      fx.shake(0.4);
      break;
    }
    case 'smite': {
      audio.play('heal');
      audio.play('thunder', 0.5);
      fx.pillar(pos, 0xfff0a0, 2.2, 30, 0.7, 0.04);
      fx.pillar(pos, 0xffffff, 0.8, 30, 0.6, 0.04);
      fx.flashSphere(pos, 0xffe080, 2.5, 0.4);
      fx.ring(pos, 0xfff0a0, 3.5, 0.5);
      fx.burst(pos.clone().setY(0.5), { count: 60, color: 0xffffff, color2: 0xffd257, intensity: 3, speed: 8, flat: true, life: 0.6, size: 0.6 });
      fx.screenFlash('rgba(255,245,200,0.6)', 0.3);
      fx.shake(0.4);
      for (const e of g.enemiesInRadius(pos, 2.2, true)) g.damageEnemy(e, (e.boss || e.def.phase) ? 480 : 240, 'true', src);
      break;
    }
    case 'sanctuary': {
      audio.play('heal');
      fx.pillar(pos, 0xffe8a8, 3.8, 4, 8, 0.4);
      zone(g, pos, 4, 8, 0xffe8a8, 1, (dt) => {
        if (Math.random() < dt * 12) fx.burst(pos.clone().setY(0.1), { count: 1, color: 0xfff2c8, intensity: 2, speed: 0.3, life: 1.6, size: 0.5, radius: 3.5, up: 1.5 });
        for (const u of g.units) {
          if (!u.alive || u.flying || u.pos.distanceToSquared(pos) > 16) continue;
          u.heal(60 * g.healMul * dt);
          u.sancUntil = g.time + 0.3;
        }
        for (const e of g.enemiesInRadius(pos, 4, true)) e.sanctified = g.time + 0.3;
      });
      break;
    }
    case 'armageddon': {
      audio.play('meteor');
      fx.screenFlash('rgba(255,120,40,0.6)', 0.6);
      g.ui.banner('🔥 天启降临', '#ff7a1a');
      for (let i = 0; i < 14; i++) {
        g.later(0.2 + i * 0.16, () => {
          const alive = g.enemies.filter((e) => e.alive);
          const e = alive.length ? alive[Math.floor(Math.random() * alive.length)] : null;
          const tp = e ? V(e.pos.x, 0, e.pos.z) : V(rand(-18, 18), 0, rand(-12, 12));
          const rock = () => new THREE.Mesh(new THREE.DodecahedronGeometry(0.8, 0), mat(0x3a2020, { emissive: 0xff4a1a, ei: 1.5 }));
          skyStrike(g, tp, {
            color: 0xff6a1a, size: 0.7, speed: 34, height: 26, offset: 12, meshFn: rock,
            onHit: (q) => {
              q.y = 0;
              fx.explosion(q, 0xff5a1a, 1.4);
              fx.shake(0.5);
              audio.play('explode', 0.6);
              for (const en of g.enemiesInRadius(q, 2.4, true)) { g.damageEnemy(en, 400, 'magic', src); g.burnEnemy(en, 30, 4); }
            },
          });
        });
      }
      break;
    }
    case 'apotheosis': {
      const h = g.selectedHero && g.selectedHero.alive ? g.selectedHero : g.units.find((u) => u.kind === 'hero' && u.alive);
      if (!h) { g.ui.toast('需要一名存活的英雄'); return false; }
      audio.play('levelup');
      audio.play('summon');
      h.avatarUntil = g.time + 12;
      h.cds = [0, 0, 0];
      h.heal(h.maxHp);
      fx.pillar(h.pos, 0xffe066, 2, 40, 1.5, 0.1);
      fx.sigil(h.pos, 0xffe066, 4, 2, { spin: 4 });
      fx.burst(h.pos.clone().setY(1), { count: 120, color: 0xffffff, color2: 0xffd257, intensity: 3, speed: 9, life: 1.2, size: 0.8, up: 3 });
      fx.screenFlash('rgba(255,240,170,0.8)', 0.5);
      fx.shake(0.6);
      g.ui.banner(`👑 ${h.def.name} 神威降临`, '#ffe066');
      break;
    }
    case 'maelstrom': {
      audio.play('thunder');
      audio.play('void', 0.5);
      fx.screenFlash('rgba(170,190,255,0.7)', 0.4);
      const cage = new THREE.Group();
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2;
        const bar = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 7, 4), glowMat(0xa0c0ff, 3));
        bar.position.set(pos.x + Math.cos(a) * 6, 3.5, pos.z + Math.sin(a) * 6);
        cage.add(bar);
      }
      g.scene.add(cage);
      let tick = 0;
      zone(g, pos, 6, 5, 0xa0c0ff, 1, (dt, z) => {
        cage.rotation.y = 0;
        const k = Math.min(1, z.t * 3) * (z.t > 4.6 ? (5 - z.t) / 0.4 : 1);
        cage.children.forEach((b) => { b.scale.y = Math.max(0.01, k); });
        fx.vortex(pos, 0xa0c0ff, 6, 4, { swirl: 8, inward: 0.6, h: 5, life: 0.7, size: 0.4 });
        tick += dt;
        if (tick > 0.15) {
          tick = 0;
          const a1 = Math.random() * Math.PI * 2;
          fx.lightning(V(pos.x + Math.cos(a1) * 6, rand(1, 6), pos.z + Math.sin(a1) * 6), V(pos.x + rand(-3, 3), rand(0.3, 2), pos.z + rand(-3, 3)), 0xa0c0ff, 0.12, 0.2, false);
          audio.play('zap', 0.3);
        }
        for (const e of g.enemiesInRadius(pos, 6, true)) {
          e.zoneSlow = 0.02;
          g.damageEnemy(e, 300 * dt, 'magic', src, true);
          if (Math.random() < dt * 2) fx.lightning(V(e.pos.x, 12, e.pos.z), e.centerClone(), 0xc8d8ff, 0.15, 0.2, false);
        }
      }, { onEnd: () => {
        g.scene.remove(cage); cage.children.forEach((b) => b.geometry.dispose());
        fx.flashSphere(pos, 0xa0c0ff, 6, 0.5);
        fx.ring(pos, 0xc8d8ff, 8, 0.6);
        fx.shake(0.7);
        audio.play('bigexplode', 0.6);
      } });
      break;
    }
    default: return false;
  }
  return true;
}

function summonFx(g, pos, color) {
  audio.play('summon');
  g.fx.pillar(pos, color, 1.5, 18, 1.0);
  g.fx.ring(pos, color, 3, 0.7);
  g.fx.circle(pos, color, 2.2, 1).kill();
  g.fx.burst(pos.clone().setY(0.5), { count: 50, color, intensity: 3, speed: 5, life: 0.9, size: 0.7, up: 3 });
}

// ---------- 英雄技能 ----------
export function skillRange(heroId, idx) {
  const self = { paladin: [true, true, false], pyro: [false, false, false], ranger: [true, false, false], frost: [false, false, true] }[heroId][idx];
  return self ? 0 : 11;
}
export function skillRadius(heroId, idx) {
  return { paladin: [3, 5, 3.5], pyro: [2.5, 3.5, 4.5], ranger: [9, 0.8, 4], frost: [2.5, 3.5, 8] }[heroId][idx];
}

export function castSkill(g, hero, idx, target) {
  const fx = g.fx;
  const p = hero.pos.clone();
  let m = hero.dmgMul * rankMul(hero.ranks[idx]);
  if (hero.id === 'pyro' && g.tiers.fire >= 2) m *= 1.3;
  // 限制施法距离
  let pos = target.clone();
  const range = skillRange(hero.id, idx);
  if (range > 0) {
    const d = pos.distanceTo(p);
    if (d > range) pos = p.clone().add(pos.sub(p).multiplyScalar(range / d));
  }
  pos.y = 0;
  hero.face(pos.x - p.x, pos.z - p.z, 1);
  hero.attackAnim = 0.35;
  switch (hero.id + idx) {
    case 'paladin0': {
      audio.play('swing');
      audio.play('heal', 0.5);
      fx.ring(p, 0xffd257, 3.2, 0.4);
      fx.burst(p.clone().setY(1), { count: 50, color: 0xfff2a8, color2: 0xffd257, intensity: 3, speed: 10, flat: true, life: 0.4, size: 0.8, drag: 5 });
      fx.light(p, 0xffd257, 5, 8, 0.3);
      for (const e of g.enemiesInRadius(p, 3, false)) g.damageEnemy(e, 130 * m, 'phys', hero);
      break;
    }
    case 'paladin1': {
      audio.play('heal');
      fx.pillar(p, 0xffd257, 1.3, 16, 1.0);
      fx.ring(p, 0xffd257, 5, 0.7);
      for (const u of g.units) {
        if (!u.alive || u.flying || u.pos.distanceToSquared(p) > 25) continue;
        u.heal(220 * rankMul(hero.ranks[1]) * g.healMul);
        u.drUntil = g.time + 4;
        fx.burst(u.pos.clone().setY(1), { count: 20, color: 0xfff2a8, intensity: 3, speed: 2, life: 1, size: 0.6, up: 2 });
      }
      break;
    }
    case 'paladin2': {
      audio.play('cast');
      const hammer = () => {
        const gr = new THREE.Group();
        const head = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.0, 1.0), glowMat(0xffd257, 1.6));
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 2.6, 6), mat(0xfff2d8, { emissive: 0xffd257, ei: 0.5 }));
        handle.rotation.x = Math.PI / 2;
        handle.position.z = -1.4;
        gr.add(head, handle);
        return gr;
      };
      const warn = fx.circle(pos, 0xffd257, 3.5, 1);
      skyStrike(g, pos, {
        color: 0xffd257, size: 0.7, speed: 32, height: 20, offset: 3, meshFn: hammer,
        onHit: (hp) => {
          warn.kill();
          hp.y = 0;
          fx.ring(hp, 0xffd257, 5, 0.6);
          fx.ring(hp, 0xffffff, 3.5, 0.35);
          fx.pillar(hp, 0xffd257, 2, 14, 0.5, 0.03);
          fx.burst(hp.clone().setY(0.5), { count: 70, color: 0xfff2a8, color2: 0xffa020, intensity: 3, speed: 12, life: 0.6, size: 0.8, up: 2 });
          fx.burst(hp, { count: 25, color: 0x8a7a5a, smoke: true, speed: 4, flat: true, life: 1.2, size: 1.8, sizeEnd: 3, alpha: 0.5 });
          fx.light(hp, 0xffd257, 10, 12, 0.5);
          fx.scorch(hp, 2.5);
          fx.shake(1.0);
          fx.screenFlash('rgba(255,230,150,0.8)', 0.45);
          audio.play('bigexplode', 0.8);
          for (const e of g.enemiesInRadius(hp, 3.5, true)) { g.damageEnemy(e, 320 * m, 'magic', hero); g.stunEnemy(e, 2); }
        },
      });
      break;
    }
    case 'pyro0': {
      audio.play('fire');
      g.spawnProjectile({
        from: p.clone().setY(1.6), targetPos: pos.clone().setY(0.5), speed: 22, kind: 'orb', color: 0xff6a1a, size: 0.45,
        onHit: (hp) => {
          hp.y = 0;
          fx.explosion(hp, 0xff6a1a, 1.1);
          fx.shake(0.35);
          audio.play('explode');
          for (const e of g.enemiesInRadius(hp, 2.5, true)) { g.damageEnemy(e, 160 * m, 'magic', hero); g.burnEnemy(e, 25, 3); }
        },
      });
      break;
    }
    case 'pyro1': {
      audio.play('fire');
      fx.ring(pos, 0xff6a1a, 3.5, 0.5);
      zone(g, pos, 3.5, 5, 0xff5a1a, 1, (dt, z) => {
        for (let i = 0; i < 8; i++) {
          const a = Math.random() * Math.PI * 2;
          fx.glow.emit({ x: pos.x + Math.cos(a) * 3.3, y: 0.1, z: pos.z + Math.sin(a) * 3.3, vx: 0, vy: 2 + Math.random() * 3, vz: 0, life: 0.6, size: 1.0, sizeEnd: 0.1, color: fx.col(Math.random() < 0.3 ? 0xffd257 : 0xff5a1a, 2.5), color2: fx.col(0x661100), drag: 1 });
        }
        for (const e of g.enemiesInRadius(pos, 3.5, true)) g.damageEnemy(e, 45 * m * dt, 'magic', hero, true);
      });
      fx.light(pos, 0xff6a1a, 5, 9, 5);
      break;
    }
    case 'pyro2': {
      audio.play('meteor');
      for (let i = 0; i < 7; i++) {
        g.later(i * 0.25, () => {
          const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 3.5;
          const mp = V(pos.x + Math.cos(a) * r, 0, pos.z + Math.sin(a) * r);
          const tgt = nearestTo(g, mp, 2);
          const hitP = tgt && !tgt.flying ? tgt.pos.clone().setY(0) : mp;
          const rock = () => new THREE.Mesh(new THREE.DodecahedronGeometry(0.6, 0), mat(0x3a2020, { emissive: 0xff4a1a, ei: 1.5 }));
          skyStrike(g, hitP, {
            color: 0xff6a1a, size: 0.6, speed: 28, height: 22, offset: 10, meshFn: rock,
            onHit: (q) => {
              q.y = 0;
              fx.explosion(q, 0xff5a1a, 1.2);
              fx.shake(0.5);
              audio.play('explode', 0.7);
              for (const e of g.enemiesInRadius(q, 2, true)) { g.damageEnemy(e, 120 * m, 'magic', hero); g.burnEnemy(e, 20, 3); }
            },
          });
        });
      }
      break;
    }
    case 'ranger0': {
      audio.play('arrow');
      const targets = g.enemiesInRadius(p, 9, true).sort((a, b) => a.pos.distanceToSquared(p) - b.pos.distanceToSquared(p)).slice(0, 7);
      fx.burst(p.clone().setY(1.6), { count: 20, color: 0x7affaa, intensity: 3, speed: 5, life: 0.4, size: 0.5 });
      targets.forEach((e, i) => {
        g.later(i * 0.04, () => {
          audio.play('arrow', 0.6);
          g.spawnProjectile({ from: p.clone().setY(1.6), target: e, speed: 34, kind: 'arrow', color: 0x7affaa, onHit: (hp, tg) => { if (tg && tg.alive) { hero.critNext = Math.random() < 0.2; g.damageEnemy(tg, 75 * m, 'phys', hero); hero.critNext = false; } fx.burst(hp, { count: 10, color: 0x7affaa, intensity: 3, speed: 4, life: 0.3, size: 0.5 }); } });
        });
      });
      break;
    }
    case 'ranger1': {
      audio.play('swing');
      const dest = pos.clone();
      const dir = dest.clone().sub(p);
      if (dir.length() > 7) dest.copy(p).add(dir.setLength(7));
      hero.releaseBlocks();
      for (let i = 0; i <= 12; i++) {
        const q = p.clone().lerp(dest, i / 12).setY(1);
        fx.burst(q, { count: 4, color: 0xbfffd8, intensity: 2, speed: 1, life: 0.6, size: 0.8 });
      }
      hero.pos.copy(dest);
      hero.clampToMap();
      hero.anchor.copy(hero.pos);
      hero.moveTarget = null;
      hero.hasteUntil = g.time + 4;
      fx.ring(hero.pos, 0x7affaa, 2, 0.4);
      break;
    }
    case 'ranger2': {
      audio.play('arrow');
      zone(g, pos, 4, 4, 0x7affaa, 1, (dt, z) => {
        for (let i = 0; i < 3; i++) {
          const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 4;
          fx.glow.emit({ x: pos.x + Math.cos(a) * r - 1, y: 8, z: pos.z + Math.sin(a) * r - 1.5, vx: 3, vy: -26, vz: 4.5, life: 0.3, size: 0.35, sizeEnd: 0.35, color: fx.col(0xbfffd8, 2), drag: 0 });
        }
        if (Math.random() < dt * 25) {
          const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 4;
          fx.burst(V(pos.x + Math.cos(a) * r, 0.1, pos.z + Math.sin(a) * r), { count: 3, color: 0x7affaa, intensity: 2, speed: 2, life: 0.25, size: 0.4 });
        }
        if (Math.random() < dt * 12) audio.play('arrow', 0.3);
        for (const e of g.enemiesInRadius(pos, 4, true)) { e.zoneSlow = 0.7; g.damageEnemy(e, 100 * m * dt, 'phys', hero, true); }
      });
      break;
    }
    case 'frost0': {
      audio.play('freeze');
      fx.ring(pos, 0x9fe8ff, 2.8, 0.5);
      fx.burst(pos.clone().setY(0.5), { count: 50, color: 0xe0f8ff, color2: 0x5ab8ff, intensity: 2.5, speed: 7, life: 0.6, size: 0.6, up: 1 });
      fx.light(pos, 0x7fd8ff, 5, 8, 0.4);
      iceSpikes(g, pos, 2.5, 9, 1.8);
      freezeArea(g, pos, 2.5, 100 * m, 1.5, hero);
      break;
    }
    case 'frost1': {
      audio.play('frost');
      zone(g, pos, 3.5, 6, 0x7fd8ff, 1, (dt) => {
        if (Math.random() < dt * 30) {
          const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * 3.5;
          fx.glow.emit({ x: pos.x + Math.cos(a) * r, y: 0.1, z: pos.z + Math.sin(a) * r, vx: 0, vy: 1.2, vz: 0, life: 1.2, size: 0.4, sizeEnd: 0.1, color: fx.col(0xbfe8ff, 2), drag: 0 });
        }
        for (const e of g.enemiesInRadius(pos, 3.5, true)) { e.zoneSlow = 0.4; g.damageEnemy(e, 25 * m * dt, 'magic', hero, true); }
      });
      break;
    }
    case 'frost2': {
      audio.play('freeze');
      audio.play('void', 0.4);
      fx.ring(p, 0xe0f8ff, 8, 0.8);
      fx.ring(p, 0x5ab8ff, 9, 1.1);
      fx.pillar(p, 0x9fe8ff, 1.5, 20, 1.0);
      fx.burst(p.clone().setY(0.5), { count: 150, color: 0xffffff, color2: 0x5ab8ff, intensity: 2.5, speed: 16, flat: true, life: 0.8, size: 0.9, drag: 3 });
      fx.screenFlash('rgba(180,230,255,0.9)', 0.55);
      fx.shake(0.6);
      iceSpikes(g, p, 8, 30, 3.2);
      freezeArea(g, p, 8, 220 * m, 3, hero);
      break;
    }
  }
}
