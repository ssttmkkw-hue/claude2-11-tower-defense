// ============ 地图 / 场景构建 ============
import * as THREE from 'three';
import { TILE } from './data.js';
import { QUALITY } from './device.js';
import { makeTree, makeRock, makeCrystal, makeFlower, makeBase, makePortal, mat } from './models.js';

export const THEMES = {
  grass: {
    sky: [0x6ab8ff, 0xd8f0ff], fog: 0xb8dcf0, ground: 0x5aa84a, ground2: 0x4e9a40, path: 0xc8a46a, pathEdge: 0x9a7a4a,
    hill: 0x4a8a3a, hillTop: 0x7ab85a, liquid: 'water', sun: 0xfff2d8, sunI: 2.6, hemi: [0xbfe0ff, 0x4a6a3a], amb: 'firefly', crystal: 0x6af0ff,
  },
  lava: {
    sky: [0x2a0a10, 0x8a3a1a], fog: 0x4a1a14, ground: 0x5a4646, ground2: 0x4e3e40, path: 0x7a5a44, pathEdge: 0x3a2a22,
    hill: 0x2a2024, hillTop: 0x4a3434, liquid: 'lava', sun: 0xffb080, sunI: 2.4, hemi: [0xff9a6a, 0x2a1010], amb: 'ember', crystal: 0xff5a2a,
  },
  swamp: {
    sky: [0x2a3a3a, 0x8aa08a], fog: 0x5a6a5a, ground: 0x4a5a3a, ground2: 0x42523a, path: 0x6a5a40, pathEdge: 0x3a3226,
    hill: 0x34402e, hillTop: 0x4e5e3a, liquid: 'bog', sun: 0xe8f0c8, sunI: 1.9, hemi: [0xb0c8a0, 0x2a3424], amb: 'spore', crystal: 0x6affc0,
  },
  desert: {
    sky: [0xd89a5a, 0xfff0d0], fog: 0xf0d8b0, ground: 0xd8b878, ground2: 0xcdac6c, path: 0xa8865a, pathEdge: 0x7a5a38,
    hill: 0xc09858, hillTop: 0xe8c890, liquid: 'oasis', sun: 0xfff0d0, sunI: 2.9, hemi: [0xffe8c0, 0x8a6a40], amb: 'sand', crystal: 0x40e0d0,
  },
  snow: {
    sky: [0x8ab0d8, 0xe8f0ff], fog: 0xd0e0f0, ground: 0xc4d2e2, ground2: 0xb6c6d8, path: 0x8aa0ba, pathEdge: 0x6a8098,
    hill: 0xa8b8cc, hillTop: 0xdce8f4, liquid: 'ice', sun: 0xf0f4ff, sunI: 1.9, hemi: [0xd8e8ff, 0x6a7a9a], amb: 'snow', crystal: 0x9ae0ff,
  },
};

// 简易确定性随机
export function mulberry(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function vnoise(x, y) {
  const s = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return s - Math.floor(s);
}
function smoothNoise(x, y) {
  const ix = Math.floor(x), iy = Math.floor(y);
  const fx = x - ix, fy = y - iy;
  const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
  const a = vnoise(ix, iy), b = vnoise(ix + 1, iy), c = vnoise(ix, iy + 1), d = vnoise(ix + 1, iy + 1);
  return a + (b - a) * ux + (c - a) * uy + (a - b - c + d) * ux * uy;
}

export class World {
  constructor(scene, map) {
    this.scene = scene;
    this.map = map;
    this.theme = THEMES[map.theme];
    this.group = new THREE.Group();
    scene.add(this.group);
    this.W = map.w; this.H = map.h;
    this.animated = [];
    this.time = 0;
    this.build();
  }

  toWorld(gx, gz) {
    return new THREE.Vector3((gx - this.W / 2 + 0.5) * TILE, 0, (gz - this.H / 2 + 0.5) * TILE);
  }
  toGrid(x, z) {
    return [Math.floor(x / TILE + this.W / 2), Math.floor(z / TILE + this.H / 2)];
  }
  inGrid(gx, gz) { return gx >= 0 && gz >= 0 && gx < this.W && gz < this.H; }

  build() {
    const { map, theme } = this;
    const rng = mulberry(map.id.length * 977 + map.w * 13);
    // ---- 网格状态 ----
    this.cells = [];
    for (let z = 0; z < this.H; z++) {
      this.cells.push([]);
      for (let x = 0; x < this.W; x++) this.cells[z].push({ path: false, tower: null, deco: false });
    }
    // ---- 路径 ----
    this.portalColor = { lava: 0xff4a2a, swamp: 0x4aff9a, desert: 0xffa030 }[map.theme] || 0xa04aff;
    this.paths = [];
    for (const wp of map.paths) {
      const pts = [];
      for (let i = 0; i < wp.length; i++) {
        const [gx, gz] = wp[i];
        if (i > 0) {
          const [px, pz] = wp[i - 1];
          const dx = Math.sign(gx - px), dz = Math.sign(gz - pz);
          let cx = px, cz = pz;
          while (cx !== gx || cz !== gz) {
            if (this.inGrid(cx, cz)) this.cells[cz][cx].path = true;
            cx += dx; cz += dz;
          }
        }
        if (this.inGrid(gx, gz)) this.cells[gz][gx].path = true;
        pts.push(this.toWorld(gx, gz));
      }
      // 起点向外延伸
      const p0 = pts[0], p1 = pts[1];
      const dir = new THREE.Vector3().subVectors(p0, p1).normalize();
      pts.unshift(p0.clone().addScaledVector(dir, TILE * 2.5));
      const curve = this.makePolyline(pts);
      this.paths.push(curve);
    }
    const lastWp = map.paths[0][map.paths[0].length - 1];
    this.basePos = this.toWorld(lastWp[0], lastWp[1]);

    this.buildSky();
    this.buildLights();
    this.buildTerrain(rng);
    this.buildDecor(rng);

    // 基地
    this.base = makeBase();
    this.base.position.copy(this.basePos);
    this.group.add(this.base);
    // 传送门
    this.portals = [];
    for (const p of this.paths) {
      const portal = makePortal(this.portalColor);
      const a = p.points[0], b = p.points[1];
      portal.position.copy(a).lerp(b, 0.25);
      portal.lookAt(b.x, 0, b.z);
      this.group.add(portal);
      this.portals.push(portal);
    }
  }

  makePolyline(pts) {
    const lens = [0];
    let total = 0;
    for (let i = 1; i < pts.length; i++) {
      total += pts[i].distanceTo(pts[i - 1]);
      lens.push(total);
    }
    return {
      points: pts, lens, length: total,
      at(d, out = new THREE.Vector3()) {
        d = Math.max(0, Math.min(total, d));
        let i = 1;
        while (i < lens.length - 1 && lens[i] < d) i++;
        const seg = lens[i] - lens[i - 1];
        const t = seg > 0 ? (d - lens[i - 1]) / seg : 0;
        return out.lerpVectors(pts[i - 1], pts[i], t);
      },
      dirAt(d, out = new THREE.Vector3()) {
        d = Math.max(0, Math.min(total - 0.01, d));
        let i = 1;
        while (i < lens.length - 1 && lens[i] < d) i++;
        return out.subVectors(pts[i], pts[i - 1]).normalize();
      },
    };
  }

  buildSky() {
    const { theme } = this;
    const geo = new THREE.SphereGeometry(400, 32, 16);
    const m = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color(theme.sky[0]) }, bot: { value: new THREE.Color(theme.sky[1]) } },
      vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ',
      fragmentShader: 'varying vec3 vP; uniform vec3 top; uniform vec3 bot; void main(){ float h = normalize(vP).y; gl_FragColor = vec4(mix(bot, top, smoothstep(-0.1, 0.6, h)), 1.0);} ',
    });
    this.sky = new THREE.Mesh(geo, m);
    this.group.add(this.sky);
    this.scene.fog = new THREE.Fog(theme.fog, 60, 160);
  }

  buildLights() {
    const { theme } = this;
    const hemi = new THREE.HemisphereLight(theme.hemi[0], theme.hemi[1], 1.1);
    this.group.add(hemi);
    const sun = new THREE.DirectionalLight(theme.sun, theme.sunI);
    sun.position.set(-18, 32, 14);
    sun.castShadow = true;
    sun.shadow.mapSize.set(QUALITY.shadowMap, QUALITY.shadowMap);
    const sc = sun.shadow.camera;
    sc.left = -30; sc.right = 30; sc.top = 24; sc.bottom = -24; sc.near = 1; sc.far = 90;
    sun.shadow.bias = -0.0005;
    sun.shadow.normalBias = 0.03;
    this.group.add(sun);
    this.group.add(sun.target);
    this.sun = sun;
  }

  buildTerrain(rng) {
    const { theme } = this;
    const hw = (this.W * TILE) / 2, hh = (this.H * TILE) / 2;
    // ---- 外围地形 ----
    const size = 220, seg = 110;
    const g = new THREE.PlaneGeometry(size, size, seg, seg);
    g.rotateX(-Math.PI / 2);
    const pos = g.attributes.position;
    const colors = [];
    const cHill = new THREE.Color(theme.hill), cTop = new THREE.Color(theme.hillTop);
    const tmp = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), z = pos.getZ(i);
      const dx = Math.max(0, Math.abs(x) - hw - 1.5), dz = Math.max(0, Math.abs(z) - hh - 1.5);
      const d = Math.sqrt(dx * dx + dz * dz);
      let y = -0.6;
      if (d > 0) {
        const n = smoothNoise(x * 0.12, z * 0.12) * 0.6 + smoothNoise(x * 0.3, z * 0.3) * 0.4;
        y = -0.6 + Math.min(1, d / 6) * (n * 6 + d * 0.25) - (d < 4 ? (1 - d / 4) * 0.8 * (theme.liquid ? 1 : 0) : 0);
        if (d < 5) y = -0.6 - Math.sin((d / 5) * Math.PI) * 1.2 + (d / 5) * n * 2;
      }
      pos.setY(i, y);
      tmp.copy(cHill).lerp(cTop, Math.max(0, Math.min(1, (y - 0) / 6)));
      tmp.offsetHSL(0, 0, (vnoise(x, z) - 0.5) * 0.05);
      colors.push(tmp.r, tmp.g, tmp.b);
    }
    g.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    g.computeVertexNormals();
    const terrain = new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }));
    terrain.receiveShadow = true;
    this.group.add(terrain);

    // ---- 液体（护城河） ----
    this.buildLiquid(hw, hh);

    // ---- 地块 ----
    const tileGeo = new THREE.BoxGeometry(TILE * 0.96, 0.5, TILE * 0.96);
    tileGeo.translate(0, -0.25, 0);
    const pathGeo = new THREE.BoxGeometry(TILE, 0.5, TILE);
    pathGeo.translate(0, -0.3, 0);
    let nG = 0, nP = 0;
    for (let z = 0; z < this.H; z++) for (let x = 0; x < this.W; x++) this.cells[z][x].path ? nP++ : nG++;
    const gm = new THREE.InstancedMesh(tileGeo, new THREE.MeshStandardMaterial({ flatShading: true, roughness: 0.9 }), nG);
    const pm = new THREE.InstancedMesh(pathGeo, new THREE.MeshStandardMaterial({ flatShading: true, roughness: 1 }), nP + 8);
    gm.receiveShadow = true; pm.receiveShadow = true;
    const M = new THREE.Matrix4();
    const c = new THREE.Color();
    let ig = 0, ip = 0;
    for (let z = 0; z < this.H; z++) {
      for (let x = 0; x < this.W; x++) {
        const p = this.toWorld(x, z);
        if (this.cells[z][x].path) {
          M.makeTranslation(p.x, 0, p.z);
          pm.setMatrixAt(ip, M);
          c.set(theme.path).offsetHSL(0, 0, (rng() - 0.5) * 0.04);
          pm.setColorAt(ip++, c);
        } else {
          M.makeTranslation(p.x, (rng() - 0.5) * 0.04, p.z);
          gm.setMatrixAt(ig, M);
          c.set((x + z) % 2 ? theme.ground : theme.ground2).offsetHSL(0, 0, (rng() - 0.5) * 0.04);
          gm.setColorAt(ig++, c);
        }
      }
    }
    // 起点外的路径延伸
    for (const path of this.paths) {
      const a = path.points[0], b = path.points[1];
      for (let k = 0; k < 3; k++) {
        const p = new THREE.Vector3().lerpVectors(b, a, (k + 1) / 3);
        M.makeTranslation(p.x, 0, p.z);
        if (ip < nP + 8) {
          pm.setMatrixAt(ip, M);
          pm.setColorAt(ip++, c.set(theme.path));
        }
      }
    }
    pm.count = ip;
    this.group.add(gm, pm);

    // 路径边缘石子
    const stoneGeo = new THREE.DodecahedronGeometry(0.16, 0);
    const edgeMat = mat(theme.pathEdge);
    const stones = [];
    for (let z = 0; z < this.H; z++) for (let x = 0; x < this.W; x++) {
      if (!this.cells[z][x].path) continue;
      const p = this.toWorld(x, z);
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const nx = x + dx, nz = z + dz;
        if (this.inGrid(nx, nz) && !this.cells[nz][nx].path) {
          for (let k = 0; k < 3; k++) {
            const off = (k - 1) * 0.6 + (rng() - 0.5) * 0.2;
            stones.push([p.x + dx * 0.95 + (dz !== 0 ? off : 0), p.z + dz * 0.95 + (dx !== 0 ? off : 0)]);
          }
        }
      }
    }
    const sm = new THREE.InstancedMesh(stoneGeo, edgeMat, stones.length);
    stones.forEach(([sx, sz], i) => {
      M.compose(new THREE.Vector3(sx, -0.05, sz), new THREE.Quaternion().setFromEuler(new THREE.Euler(rng() * 3, rng() * 3, 0)), new THREE.Vector3(1, 0.6, 1));
      sm.setMatrixAt(i, M);
    });
    sm.castShadow = true;
    this.group.add(sm);

    // 鼠标悬停高亮格
    const hg = new THREE.PlaneGeometry(TILE * 0.95, TILE * 0.95);
    hg.rotateX(-Math.PI / 2);
    this.hover = new THREE.Mesh(hg, new THREE.MeshBasicMaterial({ color: 0x66ff88, transparent: true, opacity: 0.35, depthWrite: false }));
    this.hover.position.y = 0.03;
    this.hover.visible = false;
    this.group.add(this.hover);
  }

  buildLiquid(hw, hh) {
    const kind = this.theme.liquid;
    const geo = new THREE.PlaneGeometry(220, 220, 1, 1);
    geo.rotateX(-Math.PI / 2);
    const colors = {
      water: [0x1a6aa8, 0x6ad0ff],
      lava: [0xff3a0a, 0xffc040],
      ice: [0x8ab8d8, 0xe0f4ff],
      bog: [0x1a3a2a, 0x5a9a6a],
      oasis: [0x0a7a8a, 0x7af0e0],
    }[kind];
    const m = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, c1: { value: new THREE.Color(colors[0]) }, c2: { value: new THREE.Color(colors[1]) }, uKind: { value: kind === 'lava' ? 1 : kind === 'ice' ? 2 : 0 }, fogColor: { value: new THREE.Color(this.theme.fog) } },
      vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
      fragmentShader: `
        varying vec3 vW; uniform float uTime; uniform vec3 c1; uniform vec3 c2; uniform float uKind; uniform vec3 fogColor;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float v=0.0, a=0.5; for(int i=0;i<4;i++){ v+=a*noise(p); p*=2.03; a*=0.5;} return v; }
        void main(){
          vec2 p = vW.xz * 0.15;
          vec3 col;
          if (uKind > 0.5 && uKind < 1.5) {
            float n = fbm(p * 1.5 + vec2(uTime * 0.05, uTime * 0.03));
            float n2 = fbm(p * 3.0 - vec2(uTime * 0.08, 0.0) + n);
            float cracks = smoothstep(0.45, 0.55, n2);
            col = mix(c1 * 1.2, c2 * 2.5, cracks) * (0.7 + 0.6 * n);
            col = mix(vec3(0.15,0.03,0.02), col, smoothstep(0.3, 0.6, n2 + 0.1));
          } else if (uKind > 1.5) {
            float n = fbm(p * 2.0);
            col = mix(c1, c2, n);
            col += pow(noise(p * 20.0), 20.0) * 2.0;
          } else {
            float n = fbm(p * 2.0 + vec2(uTime * 0.04, uTime * 0.02));
            float n2 = fbm(p * 4.0 - vec2(uTime * 0.05, -uTime * 0.03));
            col = mix(c1, c2, n * 0.6);
            col += smoothstep(0.62, 0.7, n2) * 0.6;
          }
          float d = length(vW.xz);
          float f = smoothstep(70.0, 150.0, d);
          gl_FragColor = vec4(mix(col, fogColor, f), 1.0);
        }`,
    });
    const liq = new THREE.Mesh(geo, m);
    liq.position.y = kind === 'ice' ? -0.9 : -1.1;
    this.group.add(liq);
    this.liquid = m;
    if (kind === 'lava') {
      const l = new THREE.PointLight(0xff5a1a, 30, 40, 1.5);
      l.position.set(0, -0.5, hh + 4);
      this.group.add(l);
      const l2 = l.clone();
      l2.position.set(0, -0.5, -hh - 4);
      this.group.add(l2);
    }
  }

  buildDecor(rng) {
    const { theme, map } = this;
    const hw = (this.W * TILE) / 2, hh = (this.H * TILE) / 2;
    const place = (obj, x, z, y = 0) => {
      obj.position.set(x, y, z);
      obj.rotation.y = rng() * Math.PI * 2;
      obj.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
      this.group.add(obj);
    };
    // 外围装饰
    for (let i = 0; i < 140; i++) {
      const a = rng() * Math.PI * 2;
      const r = 6 + rng() * 26;
      let x = Math.cos(a) * (hw + r), z = Math.sin(a) * (hh + r);
      const dx = Math.max(0, Math.abs(x) - hw - 1.5), dz = Math.max(0, Math.abs(z) - hh - 1.5);
      const d = Math.sqrt(dx * dx + dz * dz);
      if (d < 5.5) continue;
      const n = smoothNoise(x * 0.12, z * 0.12) * 0.6 + smoothNoise(x * 0.3, z * 0.3) * 0.4;
      const y = -0.6 + Math.min(1, d / 6) * (n * 6 + d * 0.25);
      const k = rng();
      if (k < 0.6) place(makeTree(theme === THEMES.lava ? 'lava' : map.theme, rng), x, z, y - 0.1);
      else if (k < 0.85) place(makeRock(map.theme, rng), x, z, y);
      else place(makeCrystal(theme.crystal, rng), x, z, y);
    }
    // 场内少量装饰（不可建造格）
    let placed = 0;
    for (let tries = 0; tries < 200 && placed < 10; tries++) {
      const gx = Math.floor(rng() * this.W), gz = Math.floor(rng() * this.H);
      const c = this.cells[gz][gx];
      if (c.path || c.deco) continue;
      // 不靠近路径的格子才放
      let near = false;
      for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
        if (this.inGrid(gx + dx, gz + dz) && this.cells[gz + dz][gx + dx].path) near = true;
      }
      if (near && rng() < 0.7) continue;
      c.deco = true;
      const p = this.toWorld(gx, gz);
      const k = rng();
      if (k < 0.5) place(makeTree(map.theme, rng), p.x, p.z);
      else if (k < 0.8) place(makeRock(map.theme, rng), p.x, p.z);
      else place(makeCrystal(theme.crystal, rng), p.x, p.z);
      placed++;
    }
    // 花草
    if (map.theme === 'grass') {
      for (let i = 0; i < 80; i++) {
        const gx = Math.floor(rng() * this.W), gz = Math.floor(rng() * this.H);
        if (this.cells[gz][gx].path) continue;
        const p = this.toWorld(gx, gz);
        const f = makeFlower(rng);
        f.position.set(p.x + (rng() - 0.5) * 1.6, 0, p.z + (rng() - 0.5) * 1.6);
        this.group.add(f);
      }
    }
  }

  // 圣盾护佑：圣坛外的金色护罩（n = 剩余次数）
  setAegis(n) {
    if (!this.aegisMesh) {
      const m = new THREE.MeshBasicMaterial({ color: 0xffe680, transparent: true, opacity: 0.22, wireframe: true, blending: THREE.AdditiveBlending, depthWrite: false });
      this.aegisMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(3.2, 2), m);
      this.aegisMesh.position.copy(this.basePos).setY(1.2);
      this.aegisMesh.scale.y = 0.85;
      this.group.add(this.aegisMesh);
    }
    this.aegisN = n;
    this.aegisMesh.visible = n > 0;
  }

  canBuild(gx, gz) {
    if (!this.inGrid(gx, gz)) return false;
    const c = this.cells[gz][gx];
    return !c.path && !c.tower && !c.deco;
  }

  update(dt) {
    this.time += dt;
    if (this.liquid) this.liquid.uniforms.uTime.value = this.time;
    if (this.base) {
      const cr = this.base.userData.crystal;
      cr.rotation.y += dt * 0.8;
      cr.position.y = 2.6 + Math.sin(this.time * 2) * 0.15;
    }
    for (const p of this.portals) {
      p.userData.inner.material.opacity = 0.55 + Math.sin(this.time * 4) * 0.2;
    }
    if (this.aegisMesh && this.aegisMesh.visible) {
      this.aegisMesh.rotation.y += dt * 0.4;
      this.aegisMesh.material.opacity = 0.12 + this.aegisN * 0.05 + Math.sin(this.time * 3) * 0.04;
    }
  }

  dispose() {
    this.scene.remove(this.group);
    this.group.traverse((o) => {
      if (o.geometry) o.geometry.dispose();
    });
    this.scene.fog = null;
  }
}
