// ============ 视觉特效系统 ============
import * as THREE from 'three';
import { QUALITY } from './device.js';

const rand = (a, b) => a + Math.random() * (b - a);

// ---------- GPU 点粒子 ----------
class ParticleSystem {
  constructor(scene, max, additive) {
    this.max = max;
    this.count = 0;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.alpha = new Float32Array(max);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.s0 = new Float32Array(max);
    this.s1 = new Float32Array(max);
    this.c0 = new Float32Array(max * 3);
    this.c1 = new Float32Array(max * 3);
    this.a0 = new Float32Array(max);

    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    this.aAlpha = new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos);
    g.setAttribute('color', this.aCol);
    g.setAttribute('size', this.aSize);
    g.setAttribute('alpha', this.aAlpha);
    g.setDrawRange(0, 0);
    this.geo = g;
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 400 } },
      vertexShader: `
        attribute float size; attribute float alpha; attribute vec3 color;
        varying vec3 vCol; varying float vA;
        uniform float uScale;
        void main(){
          vCol = color; vA = alpha;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = size * uScale / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: additive ? `
        varying vec3 vCol; varying float vA;
        void main(){
          vec2 p = gl_PointCoord - 0.5;
          float d = length(p) * 2.0;
          float a = pow(max(0.0, 1.0 - d), 1.8);
          float core = pow(max(0.0, 1.0 - d * 2.2), 2.0);
          gl_FragColor = vec4(vCol * a * vA + vec3(core) * vA * 0.6, 1.0);
        }` : `
        varying vec3 vCol; varying float vA;
        void main(){
          vec2 p = gl_PointCoord - 0.5;
          float d = length(p) * 2.0;
          float a = smoothstep(1.0, 0.3, d) * vA;
          if (a < 0.01) discard;
          gl_FragColor = vec4(vCol, a);
        }`,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 10 : 9;
    scene.add(this.points);
  }

  emit(o) {
    if (this.count >= this.max) return;
    const i = this.count++;
    const i3 = i * 3;
    this.pos[i3] = o.x; this.pos[i3 + 1] = o.y; this.pos[i3 + 2] = o.z;
    this.vel[i3] = o.vx || 0; this.vel[i3 + 1] = o.vy || 0; this.vel[i3 + 2] = o.vz || 0;
    this.life[i] = 0;
    this.maxLife[i] = o.life || 1;
    this.grav[i] = o.gravity || 0;
    this.drag[i] = o.drag || 0;
    this.s0[i] = o.size || 1;
    this.s1[i] = o.sizeEnd !== undefined ? o.sizeEnd : 0;
    const c0 = o.color, c1 = o.color2 || o.color;
    this.c0[i3] = c0.r; this.c0[i3 + 1] = c0.g; this.c0[i3 + 2] = c0.b;
    this.c1[i3] = c1.r; this.c1[i3 + 1] = c1.g; this.c1[i3 + 2] = c1.b;
    this.a0[i] = o.alpha !== undefined ? o.alpha : 1;
    this.size[i] = this.s0[i];
    this.alpha[i] = this.a0[i];
    this.col[i3] = c0.r; this.col[i3 + 1] = c0.g; this.col[i3 + 2] = c0.b;
  }

  update(dt) {
    let i = 0;
    while (i < this.count) {
      this.life[i] += dt;
      if (this.life[i] >= this.maxLife[i]) {
        this.kill(i);
        continue;
      }
      const i3 = i * 3;
      const t = this.life[i] / this.maxLife[i];
      const dr = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i3] *= dr; this.vel[i3 + 1] *= dr; this.vel[i3 + 2] *= dr;
      this.vel[i3 + 1] -= this.grav[i] * dt;
      this.pos[i3] += this.vel[i3] * dt;
      this.pos[i3 + 1] += this.vel[i3 + 1] * dt;
      this.pos[i3 + 2] += this.vel[i3 + 2] * dt;
      if (this.pos[i3 + 1] < 0.02 && this.grav[i] > 0) { this.pos[i3 + 1] = 0.02; this.vel[i3 + 1] *= -0.3; this.vel[i3] *= 0.6; this.vel[i3 + 2] *= 0.6; }
      this.size[i] = this.s0[i] + (this.s1[i] - this.s0[i]) * t;
      this.alpha[i] = this.a0[i] * (t < 0.1 ? t / 0.1 : 1 - (t - 0.1) / 0.9);
      this.col[i3] = this.c0[i3] + (this.c1[i3] - this.c0[i3]) * t;
      this.col[i3 + 1] = this.c0[i3 + 1] + (this.c1[i3 + 1] - this.c0[i3 + 1]) * t;
      this.col[i3 + 2] = this.c0[i3 + 2] + (this.c1[i3 + 2] - this.c0[i3 + 2]) * t;
      i++;
    }
    this.geo.setDrawRange(0, this.count);
    this.aPos.needsUpdate = true;
    this.aCol.needsUpdate = true;
    this.aSize.needsUpdate = true;
    this.aAlpha.needsUpdate = true;
  }

  kill(i) {
    const j = --this.count;
    if (i === j) return;
    const i3 = i * 3, j3 = j * 3;
    for (let k = 0; k < 3; k++) {
      this.pos[i3 + k] = this.pos[j3 + k];
      this.vel[i3 + k] = this.vel[j3 + k];
      this.col[i3 + k] = this.col[j3 + k];
      this.c0[i3 + k] = this.c0[j3 + k];
      this.c1[i3 + k] = this.c1[j3 + k];
    }
    this.life[i] = this.life[j];
    this.maxLife[i] = this.maxLife[j];
    this.grav[i] = this.grav[j];
    this.drag[i] = this.drag[j];
    this.s0[i] = this.s0[j];
    this.s1[i] = this.s1[j];
    this.a0[i] = this.a0[j];
    this.size[i] = this.size[j];
    this.alpha[i] = this.alpha[j];
  }

  clear() { this.count = 0; this.geo.setDrawRange(0, 0); }
}

// ---------- 共享着色器材质 ----------
const sphereGeo = new THREE.SphereGeometry(1, 24, 16);
const ringGeo = new THREE.PlaneGeometry(1, 1);
ringGeo.rotateX(-Math.PI / 2);

function makeRingMaterial(color, kind = 0) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(color) },
      uP: { value: 0 },
      uA: { value: 1 },
      uKind: { value: kind },
      uTime: { value: 0 },
    },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);} `,
    fragmentShader: `
      varying vec2 vUv; uniform vec3 uColor; uniform float uP; uniform float uA; uniform float uKind; uniform float uTime;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
        return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
      void main(){
        vec2 c = vUv - 0.5;
        float r = length(c) * 2.0;
        float a = 0.0;
        if (uKind < 0.5) {
          // 冲击波环
          float w = 0.12 + 0.1 * (1.0 - uP);
          a = smoothstep(w, 0.0, abs(r - uP)) * (1.0 - uP);
          a += smoothstep(uP, 0.0, r) * 0.15 * (1.0 - uP);
        } else if (uKind < 1.5) {
          // 区域法阵 (持续效果)：外环 + 符文带 + 旋转刻度 + 流动噪声
          float ang = atan(c.y, c.x);
          float edge = smoothstep(1.0, 0.95, r) * smoothstep(0.88, 0.94, r);
          float edgePulse = 0.8 + 0.4 * sin(uTime * 4.0);
          float band = smoothstep(0.74, 0.76, r) * smoothstep(0.86, 0.84, r);
          float glyph = step(0.55, fract((ang + uTime * 0.6) * 3.8197)) * step(0.3, noise(vec2(floor((ang + uTime * 0.6) * 3.8197 * 2.0), 3.0)));
          float rune = band * (0.35 + 0.65 * glyph);
          float ticks = smoothstep(0.62, 0.64, r) * smoothstep(0.7, 0.68, r) * step(0.7, fract((ang - uTime * 0.9) * 7.639));
          float n = noise(vec2(ang * 3.0 + uTime * 0.4, r * 5.0 - uTime * 1.8));
          float n2 = noise(c * 6.0 + uTime * 0.7);
          float fill = smoothstep(1.0, 0.0, r) * 0.22 * (0.5 + 0.8 * n * n2);
          float core = smoothstep(0.2, 0.0, r) * 0.25;
          a = (edge * 1.3 * edgePulse + rune * 0.9 + ticks * 0.8 + fill + core) * step(r, 1.0);
        } else if (uKind > 3.5) {
          // 魔法印记：双环 + 六芒星 + 旋转符文
          float ang = atan(c.y, c.x) + uTime;
          float ring1 = smoothstep(0.035, 0.0, abs(r - 0.95));
          float ring2 = smoothstep(0.025, 0.0, abs(r - 0.78));
          float ring3 = smoothstep(0.02, 0.0, abs(r - 0.42));
          // 六芒星：两个旋转三角形的边
          float star = 0.0;
          for (int k = 0; k < 2; k++) {
            float off = float(k) * 3.14159 / 3.0 - uTime * 0.7;
            for (int j = 0; j < 3; j++) {
              float th = off + float(j) * 2.0944;
              vec2 nrm = vec2(cos(th), sin(th));
              star += smoothstep(0.02, 0.0, abs(dot(c * 2.0, nrm) - 0.39)) * step(r, 0.79);
            }
          }
          float runes = smoothstep(0.8, 0.82, r) * smoothstep(0.93, 0.91, r) * step(0.5, fract(ang * 2.546)) * (0.5 + 0.5 * sin(ang * 24.0));
          float glow = smoothstep(1.0, 0.0, r) * 0.15;
          a = (ring1 * 1.4 + ring2 + ring3 * 0.8 + min(star, 1.0) * 0.9 + runes * 0.8 + glow) * (0.85 + 0.15 * sin(uTime * 10.0));
        } else if (uKind < 2.5) {
          // 焦痕
          float n = noise(c * 8.0) * 0.5 + noise(c * 20.0) * 0.5;
          a = smoothstep(1.0, 0.2, r + n * 0.4) * 0.8;
        } else {
          // 黑洞
          float ang = atan(c.y, c.x);
          float sw = sin(ang * 3.0 + r * 14.0 - uTime * 8.0) * 0.5 + 0.5;
          a = smoothstep(1.0, 0.3, r) * sw * 0.9 + smoothstep(0.25, 0.15, r) * 2.0;
        }
        if (uKind > 1.5 && uKind < 2.5) gl_FragColor = vec4(uColor, a * uA);
        else if (uKind > 3.5) gl_FragColor = vec4(uColor * a * uA * 1.6 + vec3(a * a * 0.25 * uA), a * uA);
        else if (uKind > 2.5) gl_FragColor = vec4(mix(uColor * a, vec3(0.0), smoothstep(0.22,0.12,r)), a * uA);
        else gl_FragColor = vec4(uColor * a * uA, a * uA);
      }`,
    transparent: true,
    depthWrite: false,
    blending: kind === 2 ? THREE.NormalBlending : THREE.AdditiveBlending,
  });
}

// ---------- 主 FX 管理器 ----------
export class FX {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.glow = new ParticleSystem(scene, QUALITY.glowMax, true);
    this.smoke = new ParticleSystem(scene, QUALITY.smokeMax, false);
    this.items = []; // {update(dt) -> bool alive, dispose()}
    this.shakeAmt = 0;
    this.shakeOffset = new THREE.Vector3();
    this.time = 0;
    // 光源池
    this.lights = [];
    for (let i = 0; i < QUALITY.lights; i++) {
      const l = new THREE.PointLight(0xffffff, 0, 10, 2);
      l.userData.life = 0;
      scene.add(l);
      this.lights.push(l);
    }
    this.flashEl = document.getElementById('screen-flash');
    this.tmpC = new THREE.Color();
    this.tmpC2 = new THREE.Color();
  }

  setScale(h, fov) {
    const s = h / (2 * Math.tan((fov * Math.PI) / 360));
    this.glow.mat.uniforms.uScale.value = s * 0.35;
    this.smoke.mat.uniforms.uScale.value = s * 0.35;
  }

  col(c, mul = 1) {
    const out = new THREE.Color(c);
    out.r *= mul; out.g *= mul; out.b *= mul;
    return out;
  }

  // 通用粒子爆发
  burst(p, o) {
    const n0 = o.count || 20;
    const n = QUALITY.particles >= 1 ? n0 : Math.max(1, Math.round(n0 * QUALITY.particles + Math.random() - 0.5));
    const sys = o.smoke ? this.smoke : this.glow;
    const c0 = o.color instanceof THREE.Color ? o.color : this.col(o.color, o.intensity || 1);
    const c1 = o.color2 !== undefined ? (o.color2 instanceof THREE.Color ? o.color2 : this.col(o.color2, o.intensity2 || 1)) : c0;
    for (let i = 0; i < n; i++) {
      const sp = o.speed !== undefined ? o.speed : 5;
      let vx, vy, vz;
      if (o.dir) {
        vx = o.dir.x * sp + rand(-1, 1) * (o.spread || 1);
        vy = o.dir.y * sp + rand(-1, 1) * (o.spread || 1);
        vz = o.dir.z * sp + rand(-1, 1) * (o.spread || 1);
      } else {
        const th = Math.random() * Math.PI * 2;
        const ph = o.flat ? rand(-0.15, 0.15) : Math.acos(rand(-1, 1));
        const s = sp * rand(0.3, 1);
        vx = Math.sin(ph) * Math.cos(th) * s;
        vz = Math.sin(ph) * Math.sin(th) * s;
        vy = o.flat ? rand(0, 0.5) : Math.cos(ph) * s;
        if (o.flat) { vx = Math.cos(th) * s; vz = Math.sin(th) * s; }
        if (o.up) vy = Math.abs(vy) + o.up;
      }
      const r = o.radius || 0;
      const ox = r ? rand(-r, r) : 0, oz = r ? rand(-r, r) : 0;
      sys.emit({
        x: p.x + ox, y: p.y + (o.ry ? rand(0, o.ry) : 0), z: p.z + oz,
        vx, vy, vz,
        life: rand(o.life ? o.life * 0.6 : 0.4, o.life || 0.8),
        gravity: o.gravity || 0,
        drag: o.drag !== undefined ? o.drag : 2,
        size: rand(0.7, 1.2) * (o.size || 1),
        sizeEnd: o.sizeEnd !== undefined ? o.sizeEnd * rand(0.7, 1.2) : 0,
        color: c0,
        color2: c1,
        alpha: o.alpha !== undefined ? o.alpha : 1,
      });
    }
  }

  // 单粒子（用于拖尾）
  trail(p, color, size = 0.8, life = 0.4, jitter = 0.05, intensity = 1.5) {
    if (QUALITY.particles < 1 && Math.random() > QUALITY.particles + 0.2) return;
    this.tmpC.set(color).multiplyScalar(intensity);
    this.glow.emit({
      x: p.x + rand(-jitter, jitter), y: p.y + rand(-jitter, jitter), z: p.z + rand(-jitter, jitter),
      vx: rand(-0.3, 0.3), vy: rand(0, 0.6), vz: rand(-0.3, 0.3),
      life, size, sizeEnd: 0, color: this.tmpC.clone(), drag: 1,
    });
  }

  explosion(p, color = 0xff7a2a, scale = 1, opts = {}) {
    const s = scale;
    this.burst(p, { count: Math.floor(40 * s), color: 0xffffff, color2: color, intensity: 3, intensity2: 2, speed: 9 * Math.sqrt(s), life: 0.5, size: 1.6 * s, sizeEnd: 0.2, drag: 4 });
    this.burst(p, { count: Math.floor(30 * s), color, color2: 0x331100, intensity: 2.5, speed: 5 * Math.sqrt(s), life: 0.9, size: 2.2 * s, sizeEnd: 0.5, drag: 3, up: 1 });
    this.burst(p, { count: Math.floor(25 * s), color: 0x222222, color2: 0x555555, smoke: true, speed: 2.5 * Math.sqrt(s), life: 1.6, size: 2.5 * s, sizeEnd: 4 * s, drag: 2, up: 1.5, alpha: 0.55 });
    this.burst(p, { count: Math.floor(16 * s), color: 0xffd080, intensity: 3, speed: 12, life: 1.0, size: 0.35, sizeEnd: 0.1, gravity: 14, drag: 0.5, up: 4 });
    this.flashSphere(p, color, 1.6 * s, 0.35 + 0.1 * s);
    this.ring(p, color, 4 * s, 0.45);
    this.ring(p, 0xffffff, 2.2 * s, 0.25);
    this.light(p, color, 6 * s, 8 * s, 0.35);
    if (!opts.noDecal) this.scorch(p, 2.2 * s);
  }

  ring(p, color, radius, dur = 0.5, kind = 0) {
    const mat = makeRingMaterial(color, kind);
    const m = new THREE.Mesh(ringGeo, mat);
    m.position.set(p.x, (p.y || 0) + 0.08, p.z);
    m.scale.setScalar(radius * 2);
    m.renderOrder = 8;
    this.scene.add(m);
    let t = 0;
    this.items.push({
      update: (dt) => {
        t += dt;
        mat.uniforms.uP.value = Math.min(1, t / dur);
        return t < dur;
      },
      dispose: () => { this.scene.remove(m); mat.dispose(); },
    });
  }

  // 持续法阵（返回控制对象）
  circle(p, color, radius, kind = 1) {
    const mat = makeRingMaterial(color, kind);
    const m = new THREE.Mesh(ringGeo, mat);
    m.position.set(p.x, 0.1, p.z);
    m.scale.setScalar(radius * 2);
    m.renderOrder = 7;
    this.scene.add(m);
    const ctl = {
      mesh: m, mat, alpha: 0, target: 1, dead: false,
      kill() { this.target = 0; },
    };
    this.items.push({
      update: (dt) => {
        mat.uniforms.uTime.value += dt;
        ctl.alpha += (ctl.target - ctl.alpha) * Math.min(1, dt * 6);
        mat.uniforms.uA.value = ctl.alpha;
        if (kind === 3) m.rotation.y += dt * 2;
        return !(ctl.target === 0 && ctl.alpha < 0.02);
      },
      dispose: () => { this.scene.remove(m); mat.dispose(); },
    });
    return ctl;
  }

  scorch(p, radius) {
    const mat = makeRingMaterial(0x110804, 2);
    const m = new THREE.Mesh(ringGeo, mat);
    m.position.set(p.x, 0.05 + Math.random() * 0.01, p.z);
    m.rotation.y = Math.random() * 6;
    m.scale.setScalar(radius * 2);
    m.renderOrder = 1;
    this.scene.add(m);
    let t = 0;
    this.items.push({
      update: (dt) => {
        t += dt;
        mat.uniforms.uA.value = t < 6 ? 1 : Math.max(0, 1 - (t - 6) / 3);
        return t < 9;
      },
      dispose: () => { this.scene.remove(m); mat.dispose(); },
    });
  }

  // 魔法印记：展开 -> 旋转 -> 消散
  sigil(p, color, radius = 2, dur = 1, opts = {}) {
    const mat = makeRingMaterial(color, 4);
    const m = new THREE.Mesh(ringGeo, mat);
    m.position.set(p.x, (opts.y || 0) + 0.11, p.z);
    m.renderOrder = 8;
    this.scene.add(m);
    const spin = opts.spin || 2;
    let t = 0;
    this.items.push({
      update: (dt) => {
        t += dt;
        const k = t / dur;
        const open = Math.min(1, t / 0.18);
        const ease = 1 - Math.pow(1 - open, 3);
        m.scale.setScalar(radius * 2 * (0.4 + 0.6 * ease) * (1 + k * 0.08));
        mat.uniforms.uTime.value = t * spin * 0.5;
        mat.uniforms.uA.value = (k > 0.7 ? Math.max(0, (1 - k) / 0.3) : 1) * ease;
        return t < dur;
      },
      dispose: () => { this.scene.remove(m); mat.dispose(); },
    });
    if (opts.light !== false) this.light(p, color, 2.5, radius * 3, Math.min(0.5, dur));
  }

  // 体积火球核心：扩张的菲涅尔球体
  flashSphere(p, color, radius = 1.5, dur = 0.4) {
    const mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: this.col(color, 2.5) }, uA: { value: 1 } },
      vertexShader: `varying vec3 vN; varying vec3 vV; void main(){ vec4 wp = modelMatrix*vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix*viewMatrix*wp; }`,
      fragmentShader: `varying vec3 vN; varying vec3 vV; uniform vec3 uColor; uniform float uA;
        void main(){ float f = abs(dot(vN, vV)); float rim = pow(1.0 - f, 2.0); float core = pow(f, 3.0);
          vec3 c = uColor * (rim * 1.2 + 0.3) + vec3(1.0, 0.95, 0.85) * core * 1.5;
          gl_FragColor = vec4(c * uA, uA); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    const m = new THREE.Mesh(sphereGeo, mat);
    m.position.set(p.x, (p.y || 0) + radius * 0.3, p.z);
    m.renderOrder = 11;
    this.scene.add(m);
    let t = 0;
    this.items.push({
      update: (dt) => {
        t += dt;
        const k = Math.min(1, t / dur);
        m.scale.setScalar(radius * (0.3 + 0.7 * (1 - Math.pow(1 - k, 3))));
        mat.uniforms.uA.value = Math.pow(1 - k, 1.5);
        return t < dur;
      },
      dispose: () => { this.scene.remove(m); mat.dispose(); },
    });
  }

  // 漩涡粒子：向中心螺旋汇聚
  vortex(p, color, radius = 3, count = 6, opts = {}) {
    const c = this.col(color, opts.intensity || 2.5);
    const c2 = opts.color2 !== undefined ? this.col(opts.color2, 1.5) : c;
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2, r = radius * rand(0.7, 1.1);
      const sx = p.x + Math.cos(a) * r, sz = p.z + Math.sin(a) * r;
      const swirl = opts.swirl !== undefined ? opts.swirl : 4;
      const inward = opts.inward !== undefined ? opts.inward : 1.6;
      this.glow.emit({ x: sx, y: (p.y || 0) + rand(0.1, opts.h || 1.5), z: sz,
        vx: (p.x - sx) * inward - Math.sin(a) * swirl, vy: opts.vy || 0.5, vz: (p.z - sz) * inward + Math.cos(a) * swirl,
        life: opts.life || 0.6, size: opts.size || 0.5, sizeEnd: 0.05, color: c, color2: c2, drag: 0 });
    }
  }

  light(p, color, intensity = 5, dist = 8, dur = 0.3) {
    let l = this.lights.find((x) => x.userData.life <= 0);
    if (!l) l = this.lights.reduce((a, b) => (a.userData.life < b.userData.life ? a : b));
    l.color.set(color);
    l.position.set(p.x, (p.y || 0) + 1.5, p.z);
    l.distance = dist;
    l.userData.life = dur;
    l.userData.max = dur;
    l.userData.int = intensity * 4;
    l.intensity = l.userData.int;
  }

  // 闪电（锯齿状发光条带）
  lightning(a, b, color = 0xaabbff, width = 0.18, dur = 0.25, branches = true) {
    const segs = Math.max(4, Math.floor(a.distanceTo(b) * 1.5));
    const geo = new THREE.BufferGeometry();
    const verts = new Float32Array((segs + 1) * 2 * 3);
    geo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
    const idx = [];
    for (let i = 0; i < segs; i++) {
      const k = i * 2;
      idx.push(k, k + 1, k + 2, k + 1, k + 3, k + 2);
    }
    geo.setIndex(idx);
    const mat = new THREE.MeshBasicMaterial({ color: this.col(color, 4), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.frustumCulled = false;
    mesh.renderOrder = 11;
    this.scene.add(mesh);
    // 外层辉光：同一路径、更宽、更淡
    const hgeo = new THREE.BufferGeometry();
    const hverts = new Float32Array(verts.length);
    hgeo.setAttribute('position', new THREE.BufferAttribute(hverts, 3));
    hgeo.setIndex(idx);
    const hmat = new THREE.MeshBasicMaterial({ color: this.col(color, 1.2), transparent: true, opacity: 0.35, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
    const halo = new THREE.Mesh(hgeo, hmat);
    halo.frustumCulled = false;
    halo.renderOrder = 10;
    this.scene.add(halo);
    const dir = new THREE.Vector3().subVectors(b, a);
    const len = dir.length();
    dir.normalize();
    const side = new THREE.Vector3(-dir.z, 0, dir.x);
    if (side.lengthSq() < 0.01) side.set(1, 0, 0);
    side.normalize();
    const up = new THREE.Vector3().crossVectors(dir, side).normalize();
    const build = () => {
      for (let i = 0; i <= segs; i++) {
        const t = i / segs;
        const amp = Math.sin(t * Math.PI) * Math.min(1.2, len * 0.12);
        const off1 = (i === 0 || i === segs) ? 0 : rand(-amp, amp);
        const off2 = (i === 0 || i === segs) ? 0 : rand(-amp, amp);
        const px = a.x + dir.x * len * t + side.x * off1 + up.x * off2;
        const py = a.y + dir.y * len * t + side.y * off1 + up.y * off2;
        const pz = a.z + dir.z * len * t + side.z * off1 + up.z * off2;
        const w = width * (0.6 + Math.random() * 0.6);
        verts[i * 6] = px - side.x * w; verts[i * 6 + 1] = py + w * 0.5; verts[i * 6 + 2] = pz - side.z * w;
        verts[i * 6 + 3] = px + side.x * w; verts[i * 6 + 4] = py - w * 0.5; verts[i * 6 + 5] = pz + side.z * w;
        const hw = width * 4;
        hverts[i * 6] = px - side.x * hw; hverts[i * 6 + 1] = py + hw * 0.5; hverts[i * 6 + 2] = pz - side.z * hw;
        hverts[i * 6 + 3] = px + side.x * hw; hverts[i * 6 + 4] = py - hw * 0.5; hverts[i * 6 + 5] = pz + side.z * hw;
      }
      geo.attributes.position.needsUpdate = true;
      hgeo.attributes.position.needsUpdate = true;
    };
    build();
    let t = 0, tick = 0;
    this.items.push({
      update: (dt) => {
        t += dt; tick += dt;
        if (tick > 0.04) { tick = 0; build(); }
        mat.opacity = 1 - t / dur;
        hmat.opacity = 0.35 * (1 - t / dur);
        return t < dur;
      },
      dispose: () => { this.scene.remove(mesh); this.scene.remove(halo); geo.dispose(); mat.dispose(); hgeo.dispose(); hmat.dispose(); },
    });
    if (branches && len > 2) {
      for (let k = 0; k < 2; k++) {
        const t0 = rand(0.2, 0.8);
        const s = new THREE.Vector3().lerpVectors(a, b, t0);
        const e = s.clone().add(new THREE.Vector3(rand(-1.5, 1.5), rand(-0.5, 0.8), rand(-1.5, 1.5)));
        this.lightning(s, e, color, width * 0.5, dur * 0.7, false);
      }
    }
    this.burst(b, { count: 12, color, intensity: 3, speed: 6, life: 0.3, size: 0.5 });
  }

  // 光柱
  pillar(p, color, radius = 1, height = 30, dur = 1, grow = 0.1) {
    const geo = new THREE.CylinderGeometry(radius, radius, height, 24, 1, true);
    geo.translate(0, height / 2, 0);
    const mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: this.col(color, 3) }, uA: { value: 0 }, uTime: { value: 0 } },
      vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv=uv; vec4 wp = modelMatrix*vec4(position,1.0); vN = normalize(mat3(modelMatrix)*normal); vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix*viewMatrix*wp; }`,
      fragmentShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vV; uniform vec3 uColor; uniform float uA; uniform float uTime;
        void main(){ float f = abs(dot(vN, vV)); float core = pow(f, 2.0);
          float stripes = 0.7 + 0.3 * sin(vUv.y * 40.0 - uTime * 20.0 + vUv.x * 6.28 * 3.0);
          float fade = smoothstep(1.0, 0.6, vUv.y) * smoothstep(0.0, 0.03, vUv.y);
          float a = core * stripes * fade * uA;
          gl_FragColor = vec4(uColor * a + vec3(1.0) * pow(f, 6.0) * a, a); }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(p.x, 0, p.z);
    m.renderOrder = 12;
    this.scene.add(m);
    let t = 0;
    this.items.push({
      update: (dt) => {
        t += dt;
        mat.uniforms.uTime.value = t;
        const k = t < grow ? t / grow : t > dur - 0.25 ? Math.max(0, (dur - t) / 0.25) : 1;
        mat.uniforms.uA.value = k;
        m.scale.set(0.3 + 0.7 * k, 1, 0.3 + 0.7 * k);
        return t < dur;
      },
      dispose: () => { this.scene.remove(m); geo.dispose(); mat.dispose(); },
    });
  }

  // 通用定时器项
  add(item) { this.items.push(item); }

  shake(a) { this.shakeAmt = Math.min(1.6, this.shakeAmt + a); }

  screenFlash(color = '#ffffff', strength = 0.5) {
    if (!this.flashEl) this.flashEl = document.getElementById('screen-flash');
    if (!this.flashEl) return;
    const el = this.flashEl;
    el.style.transition = 'none';
    el.style.background = `radial-gradient(circle, ${color} 0%, transparent 85%)`;
    el.style.opacity = String(strength);
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.45s ease-out';
      el.style.opacity = '0';
    });
  }

  update(dt) {
    this.time += dt;
    this.glow.update(dt);
    this.smoke.update(dt);
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      if (!it.update(dt)) {
        it.dispose && it.dispose();
        this.items.splice(i, 1);
      }
    }
    for (const l of this.lights) {
      if (l.userData.life > 0) {
        l.userData.life -= dt;
        l.intensity = Math.max(0, l.userData.int * (l.userData.life / l.userData.max));
      } else l.intensity = 0;
    }
    // 屏幕震动
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 2.2);
    const s = this.shakeAmt * this.shakeAmt * 0.6;
    this.shakeOffset.set(rand(-s, s), rand(-s, s) * 0.6, rand(-s, s));
  }

  clear() {
    for (const it of this.items) it.dispose && it.dispose();
    this.items = [];
    this.glow.clear();
    this.smoke.clear();
    for (const l of this.lights) { l.userData.life = 0; l.intensity = 0; }
    this.shakeAmt = 0;
  }
}

export { rand };
