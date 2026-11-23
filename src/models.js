// ============ 程序化低多边形模型 ============
import * as THREE from 'three';

const matCache = new Map();
export function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!opts.unique && matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color,
    flatShading: opts.flat !== false,
    roughness: opts.rough !== undefined ? opts.rough : 0.75,
    metalness: opts.metal || 0,
    emissive: opts.emissive !== undefined ? opts.emissive : 0x000000,
    emissiveIntensity: opts.ei !== undefined ? opts.ei : 1,
    transparent: !!opts.transparent,
    opacity: opts.opacity !== undefined ? opts.opacity : 1,
    depthWrite: opts.transparent ? false : true,
  });
  if (!opts.unique) matCache.set(key, m);
  return m;
}
export function glowMat(color, intensity = 2) {
  return mat(color, { emissive: color, ei: intensity, rough: 0.4 });
}

function mesh(geo, material, x = 0, y = 0, z = 0, cast = true) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = true;
  return m;
}

const G = {
  box: (w, h, d) => new THREE.BoxGeometry(w, h, d),
  cyl: (rt, rb, h, s = 8) => new THREE.CylinderGeometry(rt, rb, h, s),
  cone: (r, h, s = 8) => new THREE.ConeGeometry(r, h, s),
  sph: (r, w = 8, h = 6) => new THREE.SphereGeometry(r, w, h),
  ico: (r, d = 0) => new THREE.IcosahedronGeometry(r, d),
  oct: (r, d = 0) => new THREE.OctahedronGeometry(r, d),
  dod: (r, d = 0) => new THREE.DodecahedronGeometry(r, d),
  tor: (r, t, rs = 6, ts = 12, arc = Math.PI * 2) => new THREE.TorusGeometry(r, t, rs, ts, arc),
};

function eyes(group, y, z, spread, r = 0.08, color = 0xffffff, glow = false) {
  const em = glow ? glowMat(color, 3) : mat(color);
  const pm = mat(0x111111);
  for (const s of [-1, 1]) {
    const e = mesh(G.sph(r, 6, 5), em, s * spread, y, z, false);
    group.add(e);
    if (!glow) {
      const p = mesh(G.sph(r * 0.55, 5, 4), pm, s * spread, y, z + r * 0.6, false);
      group.add(p);
    }
  }
}

// ---------------- 敌人 ----------------
export function makeEnemy(def) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const s = def.size;
  const bodyMat = mat(def.color, { unique: true, rough: 0.5 });
  const flash = [bodyMat];
  const parts = {};
  switch (def.model) {
    case 'slime': {
      const g = G.ico(0.7, 1);
      g.scale(1, 0.75, 1);
      const m = new THREE.MeshStandardMaterial({ color: def.color, roughness: 0.2, flatShading: true, transparent: true, opacity: 0.88, emissive: def.color, emissiveIntensity: 0.25 });
      flash[0] = m;
      const b = mesh(g, m, 0, 0.5, 0);
      body.add(b);
      const core = mesh(G.ico(0.25, 0), glowMat(0xffffff, 0.6), 0, 0.45, 0, false);
      body.add(core);
      eyes(body, 0.65, 0.52, 0.22, 0.11);
      break;
    }
    case 'wolf': {
      body.add(mesh(G.box(0.6, 0.5, 1.1), bodyMat, 0, 0.7, 0));
      const head = new THREE.Group();
      head.position.set(0, 0.95, 0.6);
      head.add(mesh(G.box(0.45, 0.4, 0.45), bodyMat, 0, 0, 0));
      head.add(mesh(G.box(0.25, 0.2, 0.35), mat(0x5a5f6e), 0, -0.08, 0.3));
      for (const sx of [-1, 1]) head.add(mesh(G.cone(0.09, 0.25, 4), bodyMat, sx * 0.14, 0.28, -0.05));
      eyes(head, 0.06, 0.23, 0.12, 0.05, 0xffdd33, true);
      body.add(head);
      const tail = mesh(G.cone(0.1, 0.6, 5), bodyMat, 0, 0.85, -0.7);
      tail.rotation.x = -1.0;
      body.add(tail);
      parts.legs = [];
      for (const [x, z] of [[-0.2, 0.35], [0.2, 0.35], [-0.2, -0.35], [0.2, -0.35]]) {
        const l = mesh(G.box(0.14, 0.5, 0.14), mat(0x5a5f6e), x, 0.25, z);
        body.add(l);
        parts.legs.push(l);
      }
      break;
    }
    case 'knight': {
      body.add(mesh(G.cyl(0.35, 0.42, 0.8, 8), bodyMat, 0, 0.75, 0));
      body.add(mesh(G.sph(0.3, 8, 6), bodyMat, 0, 1.35, 0));
      body.add(mesh(G.box(0.4, 0.06, 0.1), mat(0x111111), 0, 1.38, 0.26));
      body.add(mesh(G.cone(0.06, 0.4, 4), mat(0xd04040), 0, 1.75, 0));
      const shield = mesh(G.box(0.5, 0.65, 0.08), mat(0x3050a0, { metal: 0.3 }), -0.45, 0.8, 0.15);
      shield.rotation.y = 0.4;
      body.add(shield);
      body.add(mesh(G.box(0.12, 0.12, 0.08), mat(0xffd257, { metal: 0.6 }), -0.47, 0.85, 0.22));
      const sword = mesh(G.box(0.08, 0.9, 0.05), mat(0xdfe6f0, { metal: 0.8, rough: 0.2 }), 0.45, 0.95, 0.2);
      body.add(sword);
      parts.weapon = sword;
      for (const x of [-0.15, 0.15]) body.add(mesh(G.box(0.16, 0.4, 0.16), mat(0x5a6070), x, 0.2, 0));
      break;
    }
    case 'bat': {
      body.add(mesh(G.sph(0.3, 7, 6), bodyMat, 0, 0, 0));
      for (const sx of [-1, 1]) body.add(mesh(G.cone(0.08, 0.25, 4), bodyMat, sx * 0.13, 0.3, 0));
      eyes(body, 0.05, 0.25, 0.1, 0.06, 0xff3344, true);
      parts.wings = [];
      for (const sx of [-1, 1]) {
        const wg = new THREE.Group();
        const shape = new THREE.Shape();
        shape.moveTo(0, 0); shape.lineTo(0.9, 0.25); shape.lineTo(0.75, -0.1); shape.lineTo(0.5, 0.0); shape.lineTo(0.3, -0.2); shape.lineTo(0, -0.1);
        const geo = new THREE.ShapeGeometry(shape);
        geo.rotateX(-Math.PI / 2);
        const wm = mesh(geo, mat(0x3a2260, { flat: true }), 0, 0, 0);
        wm.material.side = THREE.DoubleSide;
        wm.scale.x = sx;
        wg.add(wm);
        wg.position.x = sx * 0.2;
        body.add(wg);
        parts.wings.push(wg);
      }
      break;
    }
    case 'shaman': {
      body.add(mesh(G.cone(0.45, 0.9, 7), mat(0x7a4a2a), 0, 0.45, 0));
      body.add(mesh(G.sph(0.28, 8, 6), bodyMat, 0, 1.05, 0));
      for (const sx of [-1, 1]) {
        const ear = mesh(G.cone(0.08, 0.4, 4), bodyMat, sx * 0.3, 1.1, 0);
        ear.rotation.z = -sx * 1.2;
        body.add(ear);
      }
      eyes(body, 1.1, 0.22, 0.1, 0.05, 0xffee55, true);
      body.add(mesh(G.cyl(0.03, 0.03, 1.3, 5), mat(0x5a3a1a), 0.4, 0.75, 0.1));
      const orb = mesh(G.ico(0.13, 0), glowMat(0x66ff99, 3), 0.4, 1.45, 0.1, false);
      body.add(orb);
      parts.orb = orb;
      body.add(mesh(G.cone(0.32, 0.35, 6), mat(0xd0a060), 0, 1.35, 0));
      break;
    }
    case 'ghost': {
      const m = new THREE.MeshStandardMaterial({ color: def.color, transparent: true, opacity: 0.6, emissive: def.color, emissiveIntensity: 0.9, flatShading: true, depthWrite: false });
      flash[0] = m;
      const g = G.cone(0.5, 1.3, 7, 1);
      g.rotateX(Math.PI);
      body.add(mesh(g, m, 0, 0.9, 0, false));
      body.add(mesh(G.sph(0.42, 8, 6), m, 0, 1.45, 0, false));
      eyes(body, 1.5, 0.35, 0.14, 0.08, 0x1a3a8a, true);
      for (const sx of [-1, 1]) {
        const arm = mesh(G.cone(0.1, 0.6, 5), m, sx * 0.5, 1.2, 0.1, false);
        arm.rotation.z = sx * 2.2;
        body.add(arm);
      }
      parts.ghostMat = m;
      break;
    }
    case 'skeleton': {
      body.add(mesh(G.box(0.35, 0.5, 0.2), bodyMat, 0, 0.75, 0));
      body.add(mesh(G.sph(0.22, 7, 6), bodyMat, 0, 1.18, 0));
      eyes(body, 1.2, 0.17, 0.08, 0.05, 0xff4422, true);
      for (const x of [-0.1, 0.1]) body.add(mesh(G.box(0.08, 0.5, 0.08), bodyMat, x, 0.25, 0));
      const sw = mesh(G.box(0.06, 0.6, 0.04), mat(0x888888, { metal: 0.6 }), 0.3, 0.85, 0.15);
      body.add(sw);
      parts.weapon = sw;
      break;
    }
    case 'golem': {
      const rock = mat(def.color, { unique: true });
      flash[0] = rock;
      body.add(mesh(G.dod(0.8, 0), rock, 0, 1.4, 0));
      body.add(mesh(G.dod(0.45, 0), rock, 0, 2.3, 0.15));
      eyes(body, 2.35, 0.5, 0.17, 0.08, 0xff8a2a, true);
      const rune = glowMat(0xff7a1a, 2.5);
      body.add(mesh(G.oct(0.18), rune, 0, 1.5, 0.75, false));
      parts.arms = [];
      for (const sx of [-1, 1]) {
        const arm = new THREE.Group();
        arm.position.set(sx * 0.95, 1.8, 0);
        arm.add(mesh(G.dod(0.35), rock, 0, -0.2, 0));
        arm.add(mesh(G.dod(0.42), rock, 0, -0.85, 0.1));
        body.add(arm);
        parts.arms.push(arm);
      }
      for (const sx of [-1, 1]) body.add(mesh(G.dod(0.38), rock, sx * 0.4, 0.4, 0));
      break;
    }
    case 'lich': {
      const robe = mat(0x2a1a4a, { unique: true });
      flash[0] = robe;
      body.add(mesh(G.cone(0.75, 1.9, 8), robe, 0, 1.2, 0));
      body.add(mesh(G.sph(0.35, 8, 6), mat(0xd8d0c0), 0, 2.35, 0));
      eyes(body, 2.38, 0.28, 0.12, 0.07, 0xb070ff, true);
      for (let i = 0; i < 5; i++) {
        const sp = mesh(G.cone(0.06, 0.35, 4), mat(0xffd257, { metal: 0.7 }), Math.cos(i * 1.256) * 0.28, 2.7, Math.sin(i * 1.256) * 0.28);
        body.add(sp);
      }
      body.add(mesh(G.cyl(0.04, 0.04, 2.4, 5), mat(0x3a2a2a), 0.7, 1.3, 0.2));
      const orb = mesh(G.ico(0.22, 1), glowMat(0x9b4dff, 4), 0.7, 2.6, 0.2, false);
      body.add(orb);
      parts.orb = orb;
      parts.orbiters = [];
      for (let i = 0; i < 3; i++) {
        const o = mesh(G.oct(0.12), glowMat(0xc080ff, 3), 0, 1.6, 0, false);
        body.add(o);
        parts.orbiters.push(o);
      }
      break;
    }
    case 'troll': {
      body.add(mesh(G.sph(0.55, 8, 6).scale(1, 1.1, 0.9), bodyMat, 0, 1.0, 0));
      body.add(mesh(G.sph(0.32, 8, 6), bodyMat, 0, 1.75, 0.2));
      body.add(mesh(G.box(0.36, 0.14, 0.2), mat(0x3a5a2a), 0, 1.62, 0.42));
      for (const sx of [-1, 1]) body.add(mesh(G.cone(0.05, 0.18, 4), mat(0xf0f0d0), sx * 0.12, 1.66, 0.5));
      eyes(body, 1.82, 0.42, 0.12, 0.06, 0xffcc33, true);
      for (const x of [-0.25, 0.25]) body.add(mesh(G.cyl(0.14, 0.12, 0.6, 6), bodyMat, x, 0.3, 0));
      body.add(mesh(G.box(0.8, 0.25, 0.6), mat(0x6a4a2a), 0, 0.6, 0));
      const club = new THREE.Group();
      club.position.set(0.6, 1.2, 0.2);
      club.add(mesh(G.cyl(0.07, 0.1, 0.9, 5), mat(0x5a3a1a), 0, 0, 0));
      club.add(mesh(G.dod(0.22), mat(0x7a5a3a), 0, 0.5, 0));
      body.add(club);
      parts.weapon = club;
      break;
    }
    case 'bomber': {
      body.add(mesh(G.cyl(0.22, 0.3, 0.5, 7), bodyMat, 0, 0.55, 0));
      body.add(mesh(G.sph(0.25, 8, 6), mat(0x6ab04a), 0, 1.0, 0.05));
      for (const sx of [-1, 1]) { const ear = mesh(G.cone(0.07, 0.3, 4), mat(0x6ab04a), sx * 0.27, 1.05, 0); ear.rotation.z = -sx * 1.3; body.add(ear); }
      eyes(body, 1.04, 0.2, 0.09, 0.05, 0xff3322, true);
      const bomb = mesh(G.sph(0.32, 9, 7), mat(0x1a1a22, { metal: 0.4, rough: 0.3 }), 0, 0.8, -0.38);
      body.add(bomb);
      const fuse = mesh(G.sph(0.08, 6, 5), glowMat(0xffaa22, 5), 0, 1.15, -0.38, false);
      body.add(fuse);
      parts.orb = fuse;
      for (const x of [-0.1, 0.1]) body.add(mesh(G.box(0.1, 0.32, 0.1), mat(0x3a3a2a), x, 0.16, 0));
      break;
    }
    case 'shieldbearer': {
      body.add(mesh(G.cyl(0.38, 0.45, 0.85, 8), bodyMat, 0, 0.8, 0));
      body.add(mesh(G.sph(0.3, 8, 6), bodyMat, 0, 1.42, 0));
      eyes(body, 1.45, 0.26, 0.1, 0.05, 0x7ad8ff, true);
      const sh = mesh(G.cyl(0.55, 0.55, 0.1, 10), mat(0xd8c070, { metal: 0.6, rough: 0.3 }), 0, 0.9, 0.5);
      sh.rotation.x = Math.PI / 2;
      body.add(sh);
      body.add(mesh(G.oct(0.16), glowMat(0x7ad8ff, 3), 0, 0.9, 0.58, false));
      for (const x of [-0.16, 0.16]) body.add(mesh(G.box(0.16, 0.4, 0.16), mat(0x5a6070), x, 0.2, 0));
      parts.orb = body.children[body.children.length - 3];
      break;
    }
    case 'voidlord': {
      const shell = mat(0x1a1030, { unique: true, rough: 0.3, metal: 0.4 });
      flash[0] = shell;
      body.add(mesh(G.oct(0.9, 0).scale(1, 1.6, 1), shell, 0, 2.0, 0));
      body.add(mesh(G.ico(0.42, 1), glowMat(0xc04aff, 4), 0, 2.0, 0, false));
      eyes(body, 2.6, 0.55, 0.2, 0.08, 0xff4af0, true);
      for (const sx of [-1, 1]) {
        const hand = mesh(G.oct(0.3), shell, sx * 1.3, 1.8, 0.2);
        body.add(hand);
      }
      parts.orbiters = [];
      for (let i = 0; i < 5; i++) {
        const o = mesh(G.oct(0.22).scale(0.6, 1.6, 0.6), glowMat(0x8a3aff, 2.5), 0, 2, 0, false);
        body.add(o);
        parts.orbiters.push(o);
      }
      break;
    }
    case 'dragon': {
      const scale = mat(def.color, { unique: true, rough: 0.5 });
      flash[0] = scale;
      const belly = mat(0xf0b050);
      body.add(mesh(G.sph(0.8, 8, 6).scale(1, 0.8, 1.5), scale, 0, 0, 0));
      body.add(mesh(G.sph(0.6, 8, 6).scale(1, 0.6, 1.3), belly, 0, -0.25, 0.1));
      const neck = mesh(G.cyl(0.25, 0.4, 1.0, 6), scale, 0, 0.5, 1.1);
      neck.rotation.x = 0.8;
      body.add(neck);
      const head = new THREE.Group();
      head.position.set(0, 0.95, 1.6);
      head.add(mesh(G.box(0.5, 0.4, 0.7), scale, 0, 0, 0));
      head.add(mesh(G.box(0.4, 0.2, 0.5), scale, 0, -0.1, 0.45));
      for (const sx of [-1, 1]) {
        const horn = mesh(G.cone(0.07, 0.5, 4), mat(0x332222), sx * 0.18, 0.3, -0.25);
        horn.rotation.x = -0.8;
        head.add(horn);
      }
      eyes(head, 0.1, 0.3, 0.17, 0.06, 0xffee33, true);
      body.add(head);
      parts.head = head;
      const tail = mesh(G.cone(0.35, 1.8, 6), scale, 0, 0, -1.7);
      tail.rotation.x = -Math.PI / 2;
      body.add(tail);
      parts.wings = [];
      for (const sx of [-1, 1]) {
        const wg = new THREE.Group();
        const shape = new THREE.Shape();
        shape.moveTo(0, 0); shape.lineTo(2.4, 0.8); shape.lineTo(2.2, -0.3); shape.lineTo(1.5, -0.1); shape.lineTo(1.1, -0.7); shape.lineTo(0.6, -0.3); shape.lineTo(0, -0.8);
        const geo = new THREE.ShapeGeometry(shape);
        geo.rotateX(-Math.PI / 2);
        const wm = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x8a1a1a, side: THREE.DoubleSide, flatShading: true, emissive: 0x401010 }));
        wm.castShadow = true;
        wm.scale.x = sx;
        wg.add(wm);
        wg.position.set(sx * 0.4, 0.3, 0.2);
        body.add(wg);
        parts.wings.push(wg);
      }
      break;
    }
    case 'scarab': {
      // 圣甲虫：圆甲 + 金色纹路 + 六足
      const shell = mat(def.color, { unique: true, rough: 0.25, metal: 0.6 });
      flash[0] = shell;
      body.add(mesh(G.sph(0.55, 10, 7).scale(1, 0.55, 1.25), shell, 0, 0.42, 0));
      body.add(mesh(G.box(0.04, 0.06, 1.2), glowMat(0xffd257, 1.2), 0, 0.72, 0, false));
      body.add(mesh(G.sph(0.26, 8, 6).scale(1.2, 0.8, 1), mat(0x1a2a2a), 0, 0.38, 0.62));
      for (const sx of [-1, 1]) { const h = mesh(G.cone(0.05, 0.4, 4), mat(0x1a2a2a), sx * 0.12, 0.5, 0.85); h.rotation.x = 1.2; h.rotation.z = -sx * 0.4; body.add(h); }
      eyes(body, 0.45, 0.82, 0.1, 0.045, 0x7affe0, true);
      parts.legs = [];
      for (let i = 0; i < 6; i++) {
        const sx = i % 2 ? 1 : -1, z = (Math.floor(i / 2) - 1) * 0.35;
        const l = mesh(G.box(0.5, 0.06, 0.06), mat(0x1a2a2a), sx * 0.5, 0.22, z);
        l.rotation.z = sx * 0.5;
        body.add(l);
        parts.legs.push(l);
      }
      break;
    }
    case 'hexer': {
      // 诅咒祭司：长袍 + 悬浮邪眼
      body.add(mesh(G.cone(0.5, 1.3, 8), bodyMat, 0, 0.65, 0));
      body.add(mesh(G.sph(0.26, 8, 6), mat(0x5a3a5a), 0, 1.45, 0));
      body.add(mesh(G.cone(0.32, 0.55, 8), bodyMat, 0, 1.68, -0.04));
      eyes(body, 1.46, 0.22, 0.09, 0.045, 0xff5ae0, true);
      const staff = new THREE.Group();
      staff.position.set(0.45, 0.9, 0.15);
      staff.add(mesh(G.cyl(0.035, 0.04, 1.6, 5), mat(0x3a2a2a), 0, 0, 0));
      const orb = mesh(G.sph(0.17, 10, 8), glowMat(0xff4ad8, 3.5), 0, 0.9, 0, false);
      orb.add(mesh(G.sph(0.07, 6, 5), mat(0x111111), 0, 0, 0.12, false));
      staff.add(orb);
      body.add(staff);
      parts.orb = orb;
      parts.weapon = staff;
      break;
    }
    case 'mummy': {
      // 木乃伊：绷带层叠
      const wrap = bodyMat;
      body.add(mesh(G.cyl(0.32, 0.36, 0.85, 7), wrap, 0, 0.82, 0));
      for (let i = 0; i < 4; i++) { const b = mesh(G.cyl(0.37, 0.37, 0.07, 7), mat(0xb8a880), 0, 0.5 + i * 0.2, 0); b.rotation.z = (i % 2 ? 1 : -1) * 0.15; body.add(b); }
      body.add(mesh(G.sph(0.28, 8, 6), wrap, 0, 1.45, 0));
      body.add(mesh(G.box(0.5, 0.06, 0.3), mat(0xb8a880), 0, 1.5, 0.05));
      eyes(body, 1.47, 0.25, 0.1, 0.05, 0x7affa0, true);
      parts.arms = [];
      for (const sx of [-1, 1]) {
        const arm = new THREE.Group();
        arm.position.set(sx * 0.4, 1.12, 0);
        const a = mesh(G.cyl(0.09, 0.08, 0.7, 5), wrap, 0, 0, 0.32);
        a.rotation.x = Math.PI / 2;
        arm.add(a);
        body.add(arm);
        parts.arms.push(arm);
      }
      for (const x of [-0.15, 0.15]) body.add(mesh(G.box(0.18, 0.45, 0.18), wrap, x, 0.22, 0));
      break;
    }
    case 'pharaoh': {
      // 沙暴法老：金色头冠、权杖、漂浮的护符
      const gold = mat(0xe0b040, { unique: true, metal: 0.7, rough: 0.3 });
      flash[0] = gold;
      const cloth = mat(0xe8e0c8);
      const blue = mat(0x2a5ab0, { metal: 0.3, rough: 0.4 });
      body.add(mesh(G.cyl(0.55, 0.75, 1.2, 8), cloth, 0, 0.6, 0));
      body.add(mesh(G.cyl(0.6, 0.55, 0.8, 8), gold, 0, 1.55, 0));
      body.add(mesh(G.box(1.25, 0.18, 0.7), gold, 0, 1.95, 0));
      body.add(mesh(G.sph(0.38, 8, 6), mat(0x8a5a3a), 0, 2.35, 0));
      // 头巾 (nemes)
      const nem = mesh(G.cone(0.62, 0.9, 4), blue, 0, 2.45, -0.08);
      nem.rotation.y = Math.PI / 4;
      body.add(nem);
      for (let i = 0; i < 4; i++) body.add(mesh(G.box(0.08, 0.06, 0.02), gold, 0, 2.3 + i * 0.12, 0.44));
      eyes(body, 2.38, 0.32, 0.13, 0.06, 0x40e0ff, true);
      body.add(mesh(G.cone(0.08, 0.3, 5), gold, 0, 2.95, 0.15));
      const staff = new THREE.Group();
      staff.position.set(0.85, 1.4, 0.3);
      staff.add(mesh(G.cyl(0.05, 0.05, 2.2, 6), gold, 0, 0, 0));
      staff.add(mesh(G.tor(0.18, 0.05, 6, 10), gold, 0, 1.25, 0));
      staff.add(mesh(G.oct(0.14), glowMat(0x40e0ff, 3), 0, 1.25, 0, false));
      body.add(staff);
      parts.weapon = staff;
      parts.orbiters = [];
      for (let i = 0; i < 4; i++) {
        const o = mesh(G.box(0.22, 0.32, 0.06), glowMat(0xffc040, 2.2), 0, 2, 0, false);
        body.add(o);
        parts.orbiters.push(o);
      }
      break;
    }
    default:
      body.add(mesh(G.box(0.8, 0.8, 0.8), bodyMat, 0, 0.4, 0));
  }
  root.scale.setScalar(s * 1.2);
  root.userData = { body, flash, parts };
  return root;
}

// ---------------- 防御塔 ----------------
const trimColors = [0xb87333, 0xc0c8d8, 0xffd257];

export function makeTower(type, level) {
  const root = new THREE.Group();
  const head = new THREE.Group();
  const parts = {};
  const trim = mat(trimColors[level], { metal: 0.7, rough: 0.3 });
  const stone = mat(0x8a8f9a);
  const stoneDark = mat(0x6a6f7a);
  // 底座
  root.add(mesh(G.cyl(0.95, 1.05, 0.35, 6), stoneDark, 0, 0.17, 0));
  root.add(mesh(G.cyl(0.98, 0.98, 0.08, 6), trim, 0, 0.36, 0));
  const lvlScale = 1 + level * 0.08;
  switch (type) {
    case 'arrow': {
      const wood = mat(0x8a5a32);
      for (const [x, z] of [[-0.5, -0.5], [0.5, -0.5], [-0.5, 0.5], [0.5, 0.5]]) {
        const leg = mesh(G.box(0.16, 2.0 + level * 0.3, 0.16), wood, x * 0.9, 1.3 + level * 0.15, z * 0.9);
        root.add(leg);
      }
      const plat = mesh(G.box(1.4, 0.15, 1.4), mat(0x6a4a2a), 0, 2.3 + level * 0.3, 0);
      root.add(plat);
      head.position.y = 2.4 + level * 0.3;
      const roofC = [0x2a8a4a, 0x2a6aaa, 0xaa3a3a][level];
      const roof = mesh(G.cone(1.0, 0.8, 4), mat(roofC), 0, 1.35, 0);
      roof.rotation.y = Math.PI / 4;
      head.add(roof);
      for (const [x, z] of [[-0.55, -0.55], [0.55, -0.55], [-0.55, 0.55], [0.55, 0.55]]) head.add(mesh(G.box(0.08, 0.9, 0.08), wood, x, 0.5, z));
      // 弩
      const bow = new THREE.Group();
      bow.position.y = 0.4;
      bow.add(mesh(G.box(0.12, 0.12, 0.9), wood, 0, 0, 0));
      const arc = mesh(G.tor(0.45, 0.04, 4, 10, Math.PI), trim, 0, 0, 0.3);
      arc.rotation.x = Math.PI / 2;
      arc.rotation.z = Math.PI;
      bow.add(arc);
      head.add(bow);
      parts.muzzle = new THREE.Object3D();
      parts.muzzle.position.set(0, 0.4, 0.6);
      head.add(parts.muzzle);
      if (level >= 2) head.add(mesh(G.oct(0.15), glowMat(0x66ff99, 3), 0, 1.9, 0, false));
      break;
    }
    case 'cannon': {
      root.add(mesh(G.cyl(0.8, 0.95, 1.1, 8), stone, 0, 0.9, 0));
      root.add(mesh(G.cyl(0.85, 0.85, 0.15, 8), trim, 0, 1.45, 0));
      for (let i = 0; i < 8; i++) {
        const a = (i / 8) * Math.PI * 2;
        root.add(mesh(G.box(0.25, 0.25, 0.2), stone, Math.cos(a) * 0.75, 1.6, Math.sin(a) * 0.75));
      }
      head.position.y = 1.7;
      head.add(mesh(G.sph(0.45, 8, 6), mat(0x3a3a44, { metal: 0.6, rough: 0.4 }), 0, 0.2, 0));
      const barrel = new THREE.Group();
      barrel.position.set(0, 0.3, 0);
      const bl = mesh(G.cyl(0.2 + level * 0.04, 0.28 + level * 0.04, 1.2 + level * 0.15, 10), mat(0x2a2a30, { metal: 0.7, rough: 0.3 }), 0, 0, 0.55);
      bl.rotation.x = Math.PI / 2 - 0.15;
      barrel.add(bl);
      barrel.add(mesh(G.tor(0.3 + level * 0.04, 0.05, 4, 10), trim, 0, 0.08, 1.05));
      head.add(barrel);
      if (level >= 1) {
        const b2 = bl.clone();
        b2.position.x = 0.32; bl.position.x = -0.32;
        barrel.add(b2);
      }
      parts.barrel = barrel;
      parts.muzzle = new THREE.Object3D();
      parts.muzzle.position.set(0, 0.45, 1.3);
      head.add(parts.muzzle);
      break;
    }
    case 'arcane': {
      root.add(mesh(G.cyl(0.45, 0.75, 2.2, 6), mat(0x5a4a8a), 0, 1.45, 0));
      root.add(mesh(G.cyl(0.55, 0.55, 0.15, 6), trim, 0, 2.6, 0));
      for (let i = 0; i < 3; i++) {
        const a = (i / 3) * Math.PI * 2;
        const sp = mesh(G.cone(0.12, 0.8, 4), mat(0x3a2a6a), Math.cos(a) * 0.5, 2.9, Math.sin(a) * 0.5);
        sp.rotation.z = Math.cos(a) * -0.3;
        sp.rotation.x = Math.sin(a) * 0.3;
        root.add(sp);
      }
      head.position.y = 3.4;
      const crystalColor = [0xb065ff, 0xd070ff, 0xff70e0][level];
      const cr = mesh(G.oct(0.4 + level * 0.06, 0), glowMat(crystalColor, 2.5), 0, 0, 0, false);
      cr.scale.y = 1.6;
      head.add(cr);
      parts.crystal = cr;
      parts.orbiters = [];
      for (let i = 0; i < 1 + level; i++) {
        const o = mesh(G.oct(0.1), glowMat(crystalColor, 3), 0, 0, 0, false);
        root.add(o);
        parts.orbiters.push(o);
      }
      parts.muzzle = new THREE.Object3D();
      head.add(parts.muzzle);
      parts.noRotate = true;
      break;
    }
    case 'frost': {
      const ice = mat(0xbfe8ff, { rough: 0.2, emissive: 0x3a8ab0, ei: 0.4 });
      const ob = mesh(G.cyl(0.25, 0.6, 2.4, 4), mat(0x5a7a9a), 0, 1.5, 0);
      ob.rotation.y = Math.PI / 4;
      root.add(ob);
      head.position.y = 3.2;
      const cr = mesh(G.oct(0.45 + level * 0.07, 0), glowMat(0x7fd8ff, 2.2), 0, 0, 0, false);
      cr.scale.y = 1.8;
      head.add(cr);
      parts.crystal = cr;
      for (let i = 0; i < 4 + level * 2; i++) {
        const a = (i / (4 + level * 2)) * Math.PI * 2;
        const sh = mesh(G.cone(0.12, 0.7, 4), ice, Math.cos(a) * 0.75, 0.6, Math.sin(a) * 0.75);
        sh.rotation.z = -Math.cos(a) * 0.4;
        sh.rotation.x = Math.sin(a) * 0.4;
        root.add(sh);
      }
      parts.muzzle = new THREE.Object3D();
      head.add(parts.muzzle);
      parts.noRotate = true;
      break;
    }
    case 'tesla': {
      const metal = mat(0x6a7080, { metal: 0.8, rough: 0.3 });
      root.add(mesh(G.cyl(0.3, 0.55, 2.2, 8), metal, 0, 1.45, 0));
      for (let i = 0; i < 3 + level; i++) root.add(mesh(G.tor(0.42 - i * 0.05, 0.06, 4, 12), trim, 0, 0.9 + i * 0.45, 0).rotateX(Math.PI / 2));
      head.position.y = 2.95;
      const orb = mesh(G.ico(0.38 + level * 0.05, 1), glowMat(0x9ab8ff, 2.8), 0, 0, 0, false);
      head.add(orb);
      parts.crystal = orb;
      head.add(mesh(G.tor(0.55, 0.04, 4, 16), glowMat(0x6a8aff, 2), 0, 0, 0, false));
      parts.ring = head.children[head.children.length - 1];
      parts.muzzle = new THREE.Object3D();
      head.add(parts.muzzle);
      parts.noRotate = true;
      break;
    }
    case 'well': {
      root.add(mesh(G.cyl(0.85, 0.9, 0.6, 10), stone, 0, 0.6, 0));
      const water = mesh(G.cyl(0.7, 0.7, 0.05, 16), glowMat(0x3aa8ff, 1.5), 0, 0.92, 0, false);
      root.add(water);
      parts.water = water;
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
        root.add(mesh(G.cyl(0.08, 0.1, 1.6 + level * 0.3, 6), trim, Math.cos(a) * 0.7, 1.4 + level * 0.15, Math.sin(a) * 0.7));
      }
      head.position.y = 2.2 + level * 0.3;
      const orb = mesh(G.ico(0.3 + level * 0.06, 1), glowMat(0x4ac8ff, 3), 0, 0, 0, false);
      head.add(orb);
      parts.crystal = orb;
      parts.muzzle = new THREE.Object3D();
      head.add(parts.muzzle);
      parts.noRotate = true;
      break;
    }
  }
  root.add(head);
  root.scale.setScalar(lvlScale);
  // 等级星标
  for (let i = 0; i <= level; i++) {
    const st = mesh(G.oct(0.09), glowMat(0xffd257, 2), (i - level / 2) * 0.28, 0.45, 1.0, false);
    root.add(st);
  }
  root.userData = { head, parts };
  return root;
}

// ---------------- 英雄 / 召唤物 ----------------
function humanoid({ skin = 0xf0c8a0, torso, legs, cape, hair }) {
  const g = new THREE.Group();
  const parts = {};
  parts.legs = [];
  for (const x of [-0.14, 0.14]) {
    const leg = new THREE.Group();
    leg.position.set(x, 0.55, 0);
    leg.add(mesh(G.box(0.18, 0.55, 0.2), mat(legs), 0, -0.27, 0));
    g.add(leg);
    parts.legs.push(leg);
  }
  const t = mesh(G.box(0.5, 0.6, 0.32), mat(torso), 0, 0.85, 0);
  g.add(t);
  const head = mesh(G.box(0.36, 0.36, 0.34), mat(skin), 0, 1.35, 0);
  g.add(head);
  parts.head = head;
  if (hair) g.add(mesh(G.box(0.4, 0.14, 0.38), mat(hair), 0, 1.53, -0.02));
  eyes(g, 1.38, 0.17, 0.08, 0.04, 0x222222, true);
  parts.arms = [];
  for (const sx of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(sx * 0.33, 1.1, 0);
    arm.add(mesh(G.box(0.15, 0.5, 0.17), mat(torso), 0, -0.22, 0));
    g.add(arm);
    parts.arms.push(arm);
  }
  if (cape) {
    const c = mesh(G.box(0.48, 0.8, 0.05), mat(cape), 0, 0.8, -0.2);
    c.rotation.x = 0.12;
    g.add(c);
  }
  return { g, parts };
}

export function makeHero(id) {
  let h;
  switch (id) {
    case 'paladin': {
      h = humanoid({ torso: 0xc8ccd8, legs: 0x707888, cape: 0x2a50c0, hair: 0xa06a2a });
      const helm = mesh(G.box(0.42, 0.2, 0.4), mat(0xffd257, { metal: 0.8, rough: 0.3 }), 0, 1.55, 0);
      h.g.add(helm);
      const shield = mesh(G.box(0.08, 0.6, 0.45), mat(0x2a50c0), -0.08, -0.25, 0.15);
      shield.add(mesh(G.box(0.1, 0.12, 0.12), mat(0xffd257, { metal: 0.8 }), 0, 0, 0));
      h.parts.arms[0].add(shield);
      const sword = new THREE.Group();
      sword.add(mesh(G.box(0.08, 0.9, 0.04), mat(0xeef2ff, { metal: 0.9, rough: 0.2 }), 0, -0.85, 0.2));
      sword.add(mesh(G.box(0.3, 0.06, 0.08), mat(0xffd257, { metal: 0.8 }), 0, -0.4, 0.2));
      sword.add(mesh(G.oct(0.06), glowMat(0xfff0a0, 2), 0, -1.3, 0.2, false));
      h.parts.arms[1].add(sword);
      h.g.add(mesh(G.box(0.62, 0.15, 0.36), mat(0xffd257, { metal: 0.7 }), 0, 1.15, 0));
      break;
    }
    case 'pyro': {
      h = humanoid({ torso: 0xb02a2a, legs: 0x5a1a1a, cape: 0x6a1010, hair: 0xff5a2a });
      h.g.add(mesh(G.cone(0.42, 0.6, 7), mat(0xb02a2a), 0, 0.35, 0));
      const hat = mesh(G.cone(0.32, 0.7, 7), mat(0x5a1a1a), 0, 1.9, -0.05);
      hat.rotation.x = -0.2;
      h.g.add(hat);
      h.g.add(mesh(G.cyl(0.42, 0.42, 0.05, 10), mat(0x5a1a1a), 0, 1.58, 0));
      const staff = new THREE.Group();
      staff.add(mesh(G.cyl(0.035, 0.035, 1.5, 5), mat(0x4a2a1a), 0, -0.3, 0.15));
      const orb = mesh(G.ico(0.14, 1), glowMat(0xff7a2a, 4), 0, 0.5, 0.15, false);
      staff.add(orb);
      h.parts.orb = orb;
      h.parts.arms[1].add(staff);
      break;
    }
    case 'ranger': {
      h = humanoid({ torso: 0x2a7a3a, legs: 0x4a3a2a, cape: 0x1a5a2a, hair: 0xe8d070 });
      const hood = mesh(G.cone(0.3, 0.45, 6), mat(0x1a5a2a), 0, 1.65, -0.05);
      h.g.add(hood);
      const bow = new THREE.Group();
      const arc = mesh(G.tor(0.5, 0.035, 4, 12, Math.PI), mat(0x8a5a2a), 0, -0.3, 0.1);
      arc.rotation.y = Math.PI / 2;
      arc.rotation.z = Math.PI / 2;
      bow.add(arc);
      h.parts.arms[0].add(bow);
      h.g.add(mesh(G.cyl(0.08, 0.08, 0.6, 6), mat(0x6a4a2a), 0.15, 1.0, -0.25).rotateZ(0.3));
      break;
    }
    case 'frost': {
      h = humanoid({ torso: 0x3a7ab8, legs: 0x2a4a7a, cape: 0xbfe8ff, hair: 0xf0f8ff });
      h.g.add(mesh(G.cone(0.45, 0.7, 7), mat(0x3a7ab8), 0, 0.35, 0));
      for (let i = 0; i < 5; i++) {
        const c = mesh(G.cone(0.04, 0.22, 4), glowMat(0x9fe8ff, 2), (i - 2) * 0.09, 1.66, 0.05, false);
        h.g.add(c);
      }
      const staff = new THREE.Group();
      staff.add(mesh(G.cyl(0.035, 0.035, 1.5, 5), mat(0xd8e8f8), 0, -0.3, 0.15));
      const orb = mesh(G.oct(0.16), glowMat(0x7fd8ff, 4), 0, 0.55, 0.15, false);
      orb.scale.y = 1.6;
      staff.add(orb);
      h.parts.orb = orb;
      h.parts.arms[1].add(staff);
      break;
    }
  }
  const root = new THREE.Group();
  h.g.scale.setScalar(1.4);
  root.add(h.g);
  root.userData = { body: h.g, parts: h.parts };
  return root;
}

export function makeSummon(kind) {
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const parts = {};
  if (kind === 'golem') {
    const rock = mat(0x8a9aa8);
    body.add(mesh(G.dod(0.7), rock, 0, 1.2, 0));
    body.add(mesh(G.dod(0.38), rock, 0, 2.0, 0.1));
    body.add(mesh(G.oct(0.2), glowMat(0x4ae0ff, 3), 0, 1.3, 0.65, false));
    eyes(body, 2.05, 0.4, 0.14, 0.07, 0x4ae0ff, true);
    parts.arms = [];
    for (const sx of [-1, 1]) {
      const arm = new THREE.Group();
      arm.position.set(sx * 0.85, 1.6, 0);
      arm.add(mesh(G.dod(0.4), rock, 0, -0.6, 0.1));
      body.add(arm);
      parts.arms.push(arm);
    }
    for (const sx of [-1, 1]) body.add(mesh(G.dod(0.32), rock, sx * 0.35, 0.35, 0));
  } else if (kind === 'wolf') {
    const m = new THREE.MeshStandardMaterial({ color: 0x9ad8ff, emissive: 0x3a8aff, emissiveIntensity: 1.2, transparent: true, opacity: 0.8, flatShading: true });
    body.add(mesh(G.box(0.55, 0.45, 1.0), m, 0, 0.65, 0, false));
    const head = mesh(G.box(0.4, 0.38, 0.5), m, 0, 0.9, 0.6, false);
    body.add(head);
    for (const sx of [-1, 1]) body.add(mesh(G.cone(0.08, 0.22, 4), m, sx * 0.12, 1.18, 0.55, false));
    eyes(body, 0.95, 0.86, 0.1, 0.05, 0xffffff, true);
    parts.legs = [];
    for (const [x, z] of [[-0.18, 0.3], [0.18, 0.3], [-0.18, -0.3], [0.18, -0.3]]) {
      const l = mesh(G.box(0.12, 0.45, 0.12), m, x, 0.22, z, false);
      body.add(l);
      parts.legs.push(l);
    }
  } else if (kind === 'treant') {
    const bark = mat(0x6a4a2a);
    const leaf = mat(0x4aa83a, { emissive: 0x2a8a1a, ei: 0.4 });
    body.add(mesh(G.cyl(0.45, 0.6, 1.8, 7), bark, 0, 1.0, 0));
    body.add(mesh(G.dod(0.95), leaf, 0, 2.4, 0));
    body.add(mesh(G.dod(0.6), leaf, 0.55, 2.0, 0.2));
    body.add(mesh(G.dod(0.55), leaf, -0.5, 2.1, -0.1));
    eyes(body, 1.45, 0.42, 0.16, 0.07, 0x9aff6a, true);
    parts.arms = [];
    for (const sx of [-1, 1]) {
      const arm = new THREE.Group();
      arm.position.set(sx * 0.55, 1.5, 0);
      const br = mesh(G.cyl(0.1, 0.16, 1.1, 5), bark, sx * 0.25, -0.4, 0.1);
      br.rotation.z = sx * 0.5;
      arm.add(br);
      body.add(arm);
      parts.arms.push(arm);
    }
    parts.legs = [];
    for (const sx of [-1, 1]) {
      const l = mesh(G.cyl(0.14, 0.22, 0.5, 5), bark, sx * 0.28, 0.2, 0);
      body.add(l);
      parts.legs.push(l);
    }
  } else if (kind === 'phoenix') {
    body.add(mesh(G.sph(0.4, 8, 6).scale(1, 0.9, 1.5), glowMat(0xff8a2a, 2.5), 0, 0, 0, false));
    body.add(mesh(G.cone(0.15, 0.4, 5).rotateX(Math.PI / 2), glowMat(0xffd257, 3), 0, 0.1, 0.75, false));
    parts.wings = [];
    for (const sx of [-1, 1]) {
      const wg = new THREE.Group();
      const shape = new THREE.Shape();
      shape.moveTo(0, 0.3); shape.lineTo(1.8, 0.5); shape.lineTo(1.4, -0.1); shape.lineTo(0.9, -0.2); shape.lineTo(0, -0.4);
      const geo = new THREE.ShapeGeometry(shape);
      geo.rotateX(-Math.PI / 2);
      const wm = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: new THREE.Color(0xff6a1a).multiplyScalar(2.5), side: THREE.DoubleSide, transparent: true, opacity: 0.9 }));
      wm.scale.x = sx;
      wg.add(wm);
      wg.position.x = sx * 0.3;
      body.add(wg);
      parts.wings.push(wg);
    }
    const tail = mesh(G.cone(0.25, 1.2, 5).rotateX(-Math.PI / 2), glowMat(0xff4a1a, 2.5), 0, 0, -0.9, false);
    body.add(tail);
  }
  root.userData = { body, parts };
  return root;
}

// ---------------- 场景装饰 ----------------
export function makeTree(theme, rng) {
  const g = new THREE.Group();
  if (theme === 'lava') {
    const trunk = mat(0x2a2020);
    const t = mesh(G.cyl(0.08, 0.18, 1.6, 5), trunk, 0, 0.8, 0);
    t.rotation.z = (rng() - 0.5) * 0.3;
    g.add(t);
    for (let i = 0; i < 3; i++) {
      const b = mesh(G.cyl(0.03, 0.07, 0.8, 4), trunk, 0, 1.0 + i * 0.25, 0);
      b.rotation.z = (i % 2 ? 1 : -1) * (0.7 + rng() * 0.4);
      b.position.x = (i % 2 ? -1 : 1) * 0.2;
      g.add(b);
    }
    return g;
  }
  if (theme === 'swamp') {
    // 枯藤柳 + 发光蘑菇
    const trunk = mat(0x3a3328);
    g.add(mesh(G.cyl(0.1, 0.24, 1.6, 6), trunk, 0, 0.8, 0));
    const leaf = mat([0x3a5a3a, 0x4a6a3a, 0x2a4a3a][Math.floor(rng() * 3)]);
    const crown = mesh(G.sph(0.9, 7, 5).scale(1, 0.55, 1), leaf, 0, 1.75, 0);
    g.add(crown);
    for (let i = 0; i < 5; i++) {
      const a = i * 1.256 + rng();
      const v = mesh(G.cyl(0.03, 0.05, 1.0, 4), leaf, Math.cos(a) * 0.7, 1.2, Math.sin(a) * 0.7);
      g.add(v);
    }
    if (rng() < 0.6) {
      const mc = [0x6affc0, 0xc06aff, 0x6ac0ff][Math.floor(rng() * 3)];
      for (let i = 0; i < 3; i++) {
        const a = rng() * 6.28, r = 0.4 + rng() * 0.4;
        g.add(mesh(G.cyl(0.03, 0.04, 0.22, 5), mat(0xd8d0c0), Math.cos(a) * r, 0.11, Math.sin(a) * r, false));
        g.add(mesh(new THREE.SphereGeometry(0.11, 7, 4, 0, Math.PI * 2, 0, Math.PI / 2), glowMat(mc, 1.8), Math.cos(a) * r, 0.2, Math.sin(a) * r, false));
      }
    }
    g.scale.setScalar(0.85 + rng() * 0.5);
    return g;
  }
  if (theme === 'desert') {
    if (rng() < 0.6) {
      // 仙人掌
      const cm = mat([0x4a8a4a, 0x5a9a4a, 0x3a7a4a][Math.floor(rng() * 3)]);
      const h = 1.4 + rng() * 1.2;
      g.add(mesh(G.cyl(0.22, 0.26, h, 7), cm, 0, h / 2, 0));
      g.add(mesh(G.sph(0.22, 7, 4, 0, Math.PI * 2, 0, Math.PI / 2), cm, 0, h, 0));
      for (const sx of [-1, 1]) {
        if (rng() < 0.3) continue;
        const ay = h * (0.35 + rng() * 0.3), ah = 0.5 + rng() * 0.5;
        g.add(mesh(G.cyl(0.13, 0.13, 0.45, 6).rotateZ(Math.PI / 2), cm, sx * 0.4, ay, 0));
        g.add(mesh(G.cyl(0.13, 0.13, ah, 6), cm, sx * 0.6, ay + ah / 2, 0));
      }
      if (rng() < 0.4) g.add(mesh(G.sph(0.08, 6, 4), mat(0xff6a9a), 0, h + 0.15, 0, false));
    } else {
      // 棕榈
      const trunk = mat(0x8a6a40);
      const tilt = (rng() - 0.5) * 0.5;
      for (let i = 0; i < 5; i++) {
        const seg = mesh(G.cyl(0.13 - i * 0.012, 0.16 - i * 0.012, 0.55, 6), trunk, Math.sin(tilt) * i * 0.5, 0.28 + i * 0.52, 0);
        seg.rotation.z = -tilt;
        g.add(seg);
      }
      const top = new THREE.Group();
      top.position.set(Math.sin(tilt) * 2.5, 2.7, 0);
      const leaf = mat(0x4a9a3a);
      for (let i = 0; i < 7; i++) {
        const l = mesh(G.box(1.5, 0.05, 0.32), leaf, 0, 0, 0);
        l.geometry.translate(0.75, 0, 0);
        l.rotation.y = (i / 7) * Math.PI * 2;
        l.rotation.z = -0.45;
        top.add(l);
      }
      top.add(mesh(G.sph(0.16, 6, 5), mat(0x6a4a2a), 0, -0.1, 0));
      g.add(top);
    }
    g.scale.setScalar(0.8 + rng() * 0.45);
    return g;
  }
  const snow = theme === 'snow';
  g.add(mesh(G.cyl(0.12, 0.18, 0.7, 5), mat(0x6a4a2a), 0, 0.35, 0));
  const leaf = snow ? mat(0x2a6a5a) : mat([0x3a9a4a, 0x4aaa3a, 0x2a8a5a][Math.floor(rng() * 3)]);
  const tiers = 3;
  for (let i = 0; i < tiers; i++) {
    const r = 0.9 - i * 0.22, h = 0.9;
    g.add(mesh(G.cone(r, h, 6), leaf, 0, 0.9 + i * 0.5, 0));
    if (snow) g.add(mesh(G.cone(r * 0.6, h * 0.45, 6), mat(0xf4f8ff), 0, 1.15 + i * 0.5, 0));
  }
  const s = 0.8 + rng() * 0.6;
  g.scale.setScalar(s);
  return g;
}

export function makeRock(theme, rng) {
  const c = theme === 'lava' ? 0x3a3034 : theme === 'snow' ? 0x9aa8b8 : theme === 'swamp' ? 0x4a5048 : theme === 'desert' ? 0xc89a60 : 0x8a8a80;
  const g = new THREE.Group();
  if (theme === 'desert' && rng() < 0.4) {
    // 断裂石柱 / 方尖碑遗迹
    const sm = mat(0xd8b080);
    if (rng() < 0.5) {
      const h = 0.8 + rng() * 1.6;
      g.add(mesh(G.box(0.8, 0.25, 0.8), sm, 0, 0.12, 0));
      g.add(mesh(G.cyl(0.3, 0.32, h, 8), sm, 0, 0.25 + h / 2, 0));
      for (let i = 0; i < 2; i++) { const d = mesh(G.cyl(0.3, 0.3, 0.4, 8), sm, 0.6 + i * 0.4, 0.3, (rng() - 0.5)); d.rotation.z = Math.PI / 2; g.add(d); }
    } else {
      const h = 2 + rng() * 1.5;
      g.add(mesh(G.cyl(0.18, 0.4, h, 4), sm, 0, h / 2, 0));
      g.add(mesh(G.cone(0.2, 0.4, 4), glowMat(0xffc040, 0.8), 0, h + 0.2, 0));
    }
    return g;
  }
  const r = mesh(G.dod(0.4 + rng() * 0.4), mat(c), 0, 0.2, 0);
  r.scale.y = 0.6 + rng() * 0.5;
  r.rotation.y = rng() * 6;
  g.add(r);
  if (theme === 'snow') {
    const cap = mesh(G.dod(0.3), mat(0xf4f8ff), 0, 0.45, 0);
    cap.scale.y = 0.4;
    g.add(cap);
  }
  return g;
}

export function makeCrystal(color, rng) {
  const g = new THREE.Group();
  const n = 2 + Math.floor(rng() * 3);
  for (let i = 0; i < n; i++) {
    const c = mesh(G.oct(0.2 + rng() * 0.2), glowMat(color, 1.6), (rng() - 0.5) * 0.5, 0.3, (rng() - 0.5) * 0.5, false);
    c.scale.y = 2 + rng();
    c.rotation.z = (rng() - 0.5) * 0.6;
    g.add(c);
  }
  return g;
}

export function makeFlower(rng) {
  const g = new THREE.Group();
  const cols = [0xff6a9a, 0xffd257, 0xffffff, 0xb07aff];
  g.add(mesh(G.cyl(0.02, 0.02, 0.3, 3), mat(0x3a8a3a), 0, 0.15, 0, false));
  g.add(mesh(G.ico(0.09, 0), mat(cols[Math.floor(rng() * cols.length)], { emissive: 0x222222 }), 0, 0.32, 0, false));
  return g;
}

export function makeBase() {
  const g = new THREE.Group();
  const stone = mat(0xd8d0c0);
  g.add(mesh(G.cyl(1.6, 1.9, 0.5, 8), stone, 0, 0.25, 0));
  g.add(mesh(G.cyl(1.3, 1.5, 0.4, 8), mat(0xb8b0a0), 0, 0.7, 0));
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + Math.PI / 4;
    const p = mesh(G.cyl(0.15, 0.2, 2.2, 6), stone, Math.cos(a) * 1.3, 1.6, Math.sin(a) * 1.3);
    g.add(p);
    g.add(mesh(G.oct(0.2), glowMat(0x7af0ff, 2.5), Math.cos(a) * 1.3, 2.85, Math.sin(a) * 1.3, false));
  }
  const crystal = mesh(G.oct(0.8, 0), glowMat(0x5ae0ff, 2.2), 0, 2.6, 0, false);
  crystal.scale.y = 1.7;
  g.add(crystal);
  g.userData.crystal = crystal;
  return g;
}

export function makePortal(color) {
  const g = new THREE.Group();
  const ring = mesh(G.tor(1.1, 0.15, 6, 20), mat(0x3a3040), 0, 1.3, 0);
  g.add(ring);
  const inner = new THREE.Mesh(new THREE.CircleGeometry(1.0, 24), new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(1.6), transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false }));
  inner.position.y = 1.3;
  g.add(inner);
  g.userData.inner = inner;
  return g;
}
