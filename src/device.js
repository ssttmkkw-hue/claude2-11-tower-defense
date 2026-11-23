// ============ 设备检测 / 画质档位 ============
const qs = new URLSearchParams(location.search);
const coarse = typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
export const IS_TOUCH = qs.has('touch') || coarse || (navigator.maxTouchPoints || 0) > 0;
const smallScreen = Math.min(screen.width, screen.height) < 820;
export const IS_MOBILE = qs.has('mobile') || (IS_TOUCH && smallScreen);

export const QUALITY = {
  pixelRatio: IS_MOBILE ? 1.5 : 2,
  minPixelRatio: IS_MOBILE ? 0.75 : 1,
  antialias: !IS_MOBILE,
  shadowMap: IS_MOBILE ? 1024 : 2048,
  bloomDiv: IS_MOBILE ? 4 : 2,
  particles: IS_MOBILE ? 0.5 : 1,
  glowMax: IS_MOBILE ? 4000 : 9000,
  smokeMax: IS_MOBILE ? 1000 : 2500,
  lights: IS_MOBILE ? 3 : 6,
  maxFloats: IS_MOBILE ? 18 : 40,
  ambient: IS_MOBILE ? 0.4 : 1,
};

const DEFAULTS = { ...QUALITY };
const QKEY = 'arcane-bastion-quality';
export function getQualityLevel() {
  try { return localStorage.getItem(QKEY) || 'auto'; } catch (e) { return 'auto'; }
}
// 画质档位：auto = 按设备默认；high = 全特效；low = 省电（无阴影/辉光，粒子更少）
export function setQualityLevel(level) {
  try { localStorage.setItem(QKEY, level); } catch (e) { /* ignore */ }
  Object.assign(QUALITY, DEFAULTS);
  QUALITY.level = level;
  QUALITY.shadows = true;
  QUALITY.bloom = true;
  if (level === 'high') Object.assign(QUALITY, { pixelRatio: 2, particles: 1, ambient: 1, maxFloats: 40 });
  if (level === 'low') Object.assign(QUALITY, { pixelRatio: 1, minPixelRatio: 0.6, particles: 0.35, ambient: 0.25, maxFloats: 12, shadows: false, bloom: false });
  return QUALITY;
}
setQualityLevel(getQualityLevel());

// 布局：compact = 小屏（手机），portrait = 竖屏
export function layoutInfo() {
  const w = window.innerWidth, h = window.innerHeight;
  const compact = Math.min(w, h) < 560 || w < 760;
  return { w, h, compact, portrait: h > w };
}

export function applyLayoutClasses() {
  const L = layoutInfo();
  const b = document.body.classList;
  b.toggle('touch', IS_TOUCH);
  b.toggle('compact', L.compact);
  b.toggle('portrait', L.portrait);
  b.toggle('landscape', !L.portrait);
  return L;
}

// 触觉反馈（支持的设备上）
export function haptic(ms = 12) {
  if (IS_TOUCH && navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) { /* ignore */ } }
}
