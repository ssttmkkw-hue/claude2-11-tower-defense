// ============ 游戏数据定义 ============

export const TILE = 2;

// ---------- 地图 ----------
// 路径点使用网格坐标 (gx, gz)，相邻路径点必须水平或垂直对齐。
export const MAPS = [
  {
    id: 'valley',
    name: '翠语山谷',
    desc: '静谧的山谷中，一条蜿蜒小径通往水晶圣坛。适合新手指挥官。',
    theme: 'grass',
    w: 22, h: 14,
    difficulty: 1,
    waves: 15,
    paths: [
      [[0, 2], [5, 2], [5, 10], [11, 10], [11, 3], [16, 3], [16, 11], [21, 11]],
    ],
    startGold: 320,
  },
  {
    id: 'lava',
    name: '熔火裂谷',
    desc: '两条熔岩裂隙同时涌出敌军，在中央汇合。小心分兵防守！',
    theme: 'lava',
    w: 22, h: 14,
    difficulty: 1.25,
    waves: 15,
    paths: [
      [[0, 3], [7, 3], [7, 7], [14, 7], [14, 2], [19, 2], [19, 10], [21, 10]],
      [[0, 11], [7, 11], [7, 7], [14, 7], [14, 2], [19, 2], [19, 10], [21, 10]],
    ],
    startGold: 380,
  },
  {
    id: 'frost',
    name: '霜寒冰原',
    desc: '螺旋形冰原长路，敌人更加坚韧，冰霜之下潜伏着远古巨龙。',
    theme: 'snow',
    w: 22, h: 14,
    difficulty: 1.5,
    waves: 18,
    paths: [
      [[0, 7], [4, 7], [4, 1], [18, 1], [18, 12], [8, 12], [8, 5], [14, 5], [14, 8], [11, 8]],
    ],
    startGold: 400,
  },
];

// ---------- 敌人 ----------
// armor: 物理减伤比例; mres: 魔法减伤比例
export const ENEMIES = {
  slime: { icon: '🟢', name: '果冻史莱姆', hp: 70, speed: 2.2, armor: 0, mres: 0, gold: 5, dmg: 1, size: 0.6, color: 0x6ee05a, model: 'slime' },
  minislime: { icon: '🟢', name: '小史莱姆', hp: 30, speed: 2.8, armor: 0, mres: 0, gold: 2, dmg: 1, size: 0.38, color: 0x9be86a, model: 'slime' },
  wolf: { icon: '🐺', name: '疾风狼', hp: 55, speed: 4.3, armor: 0, mres: 0, gold: 6, dmg: 1, size: 0.6, color: 0x8a8f9e, model: 'wolf' },
  knight: { icon: '🛡️', name: '铁甲骑士', hp: 190, speed: 1.6, armor: 0.5, mres: 0, gold: 12, dmg: 2, size: 0.7, color: 0x9aa4b8, model: 'knight', atk: 22 },
  bat: { icon: '🦇', name: '暗影蝙蝠', hp: 55, speed: 3.3, armor: 0, mres: 0, gold: 7, dmg: 1, size: 0.55, color: 0x7a4fb0, model: 'bat', flying: true },
  shaman: { icon: '🧙', name: '哥布林萨满', hp: 120, speed: 2.0, armor: 0, mres: 0.3, gold: 14, dmg: 1, size: 0.6, color: 0x55b07a, model: 'shaman', healer: true },
  splitter: { icon: '🟣', name: '分裂母体', hp: 170, speed: 1.9, armor: 0, mres: 0, gold: 8, dmg: 2, size: 0.85, color: 0xd06ad8, model: 'slime', splits: 'minislime' },
  ghost: { icon: '👻', name: '游荡幽魂', hp: 100, speed: 2.6, armor: 0.65, mres: 0, gold: 11, dmg: 1, size: 0.6, color: 0x9fe8ff, model: 'ghost', phase: true },
  skeleton: { icon: '💀', name: '骷髅兵', hp: 55, speed: 2.4, armor: 0.2, mres: 0, gold: 3, dmg: 1, size: 0.55, color: 0xe8e2cf, model: 'skeleton' },
  // 首领
  golem: { icon: '🗿', name: '岩石巨像', hp: 2600, speed: 1.0, armor: 0.4, mres: 0.1, gold: 150, dmg: 8, size: 1.6, color: 0x9b8a72, model: 'golem', boss: true, stomp: true, atk: 60 },
  lich: { icon: '☠️', name: '暗影巫妖', hp: 3200, speed: 1.2, armor: 0.1, mres: 0.4, gold: 180, dmg: 10, size: 1.4, color: 0x6c3bd0, model: 'lich', boss: true, summoner: true, atk: 40 },
  dragon: { icon: '🐉', name: '炽炎古龙', hp: 4800, speed: 1.3, armor: 0.3, mres: 0.3, gold: 250, dmg: 10, size: 1.8, color: 0xd8442c, model: 'dragon', boss: true, flying: true, breath: true },
};

// ---------- 防御塔 ----------
export const TOWERS = {
  arrow: {
    name: '精灵箭塔', icon: '🏹', desc: '高速射击单体目标，可攻击空中单位。',
    air: true, dtype: 'phys',
    levels: [
      { cost: 70, dmg: 15, rate: 0.6, range: 7 },
      { cost: 80, dmg: 26, rate: 0.5, range: 7.5 },
      { cost: 150, dmg: 44, rate: 0.38, range: 8.5 },
    ],
  },
  cannon: {
    name: '矮人炮台', icon: '💣', desc: '发射炮弹造成范围伤害，无法攻击空中单位。',
    air: false, dtype: 'phys', splash: 2.2,
    levels: [
      { cost: 110, dmg: 42, rate: 1.7, range: 6.5 },
      { cost: 120, dmg: 70, rate: 1.55, range: 7 },
      { cost: 210, dmg: 120, rate: 1.4, range: 7.5, splash: 2.8 },
    ],
  },
  arcane: {
    name: '奥术法师塔', icon: '🔮', desc: '发射奥术光弹，造成无视护甲的魔法伤害。',
    air: true, dtype: 'magic',
    levels: [
      { cost: 120, dmg: 34, rate: 1.0, range: 7 },
      { cost: 130, dmg: 58, rate: 0.9, range: 7.5 },
      { cost: 230, dmg: 100, rate: 0.8, range: 8.5 },
    ],
  },
  frost: {
    name: '寒霜方尖碑', icon: '❄️', desc: '周期释放寒气脉冲，减速范围内所有敌人。',
    air: true, dtype: 'magic', pulse: true,
    levels: [
      { cost: 90, dmg: 6, rate: 1.5, range: 4.5, slow: 0.4 },
      { cost: 100, dmg: 12, rate: 1.4, range: 5, slow: 0.5 },
      { cost: 170, dmg: 22, rate: 1.2, range: 5.8, slow: 0.6 },
    ],
  },
  tesla: {
    name: '雷霆尖塔', icon: '⚡', desc: '释放连锁闪电，在多个敌人间跳跃。',
    air: true, dtype: 'magic', chain: 3,
    levels: [
      { cost: 150, dmg: 36, rate: 1.4, range: 6, chain: 3 },
      { cost: 150, dmg: 55, rate: 1.3, range: 6.5, chain: 4 },
      { cost: 250, dmg: 85, rate: 1.15, range: 7, chain: 6 },
    ],
  },
  well: {
    name: '法力之泉', icon: '💧', desc: '不攻击，持续为你恢复法力值。',
    air: false, dtype: 'none', support: true,
    levels: [
      { cost: 100, mana: 0.22, range: 0 },
      { cost: 120, mana: 0.36, range: 0 },
      { cost: 180, mana: 0.55, range: 0 },
    ],
  },
};
export const TOWER_ORDER = ['arrow', 'cannon', 'arcane', 'frost', 'tesla', 'well'];

// ---------- 英雄 ----------
export const HEROES = {
  paladin: {
    name: '铁卫·雷恩', title: '圣光骑士', icon: '🛡️', color: 0xffd257,
    hp: 650, atk: 30, rate: 1.0, range: 1.7, speed: 4.6, melee: true, block: 3, cost: 120, dtype: 'phys',
    desc: '坚不可摧的前排，能同时阻挡三名敌人。',
    passive: { name: '神圣光环', icon: '🌟', desc: '附近 4 范围内的英雄与召唤物受到的伤害 -15%。' },
    skills: [
      { key: 'Q', name: '圣光斩', icon: '⚔️', cd: 6, desc: '挥出圣光，对周围敌人造成 130 点伤害。' },
      { key: 'E', name: '神圣壁垒', icon: '✨', cd: 14, desc: '为附近友军恢复 220 生命，并减伤 50% 持续 4 秒。' },
      { key: 'R', name: '审判之锤', icon: '🔨', cd: 24, desc: '召唤巨锤砸向目标区域，造成 320 伤害并眩晕 2 秒。' },
    ],
  },
  pyro: {
    name: '焰灵·赛拉', title: '炎之术士', icon: '🔥', color: 0xff6a2a,
    hp: 320, atk: 24, rate: 1.0, range: 6, speed: 4.2, melee: false, block: 1, cost: 140, dtype: 'magic',
    desc: '操纵烈焰的远程法师，擅长范围爆发。',
    passive: { name: '余烬', icon: '🔥', desc: '普攻附带灼烧；对灼烧中的敌人伤害 +20%。' },
    skills: [
      { key: 'Q', name: '炎爆术', icon: '☄️', cd: 5, desc: '发射火球，爆炸造成 160 范围伤害并灼烧。' },
      { key: 'E', name: '烈焰之环', icon: '🔥', cd: 13, desc: '在目标处燃起火环，5 秒内每秒造成 45 伤害。' },
      { key: 'R', name: '陨石天降', icon: '🌋', cd: 30, desc: '召唤 7 颗陨石轰击目标区域。' },
    ],
  },
  ranger: {
    name: '风行者·琳', title: '林地游侠', icon: '🏹', color: 0x52e08a,
    hp: 360, atk: 18, rate: 0.55, range: 7.5, speed: 5.6, melee: false, block: 1, cost: 130, dtype: 'phys',
    desc: '迅捷的神射手，机动性极强。',
    passive: { name: '鹰眼', icon: '🦅', desc: '普攻与多重射击有 20% 几率暴击，造成 250% 伤害。' },
    skills: [
      { key: 'Q', name: '多重射击', icon: '🎯', cd: 6, desc: '向附近最多 7 名敌人各射出一支 75 伤害的箭。' },
      { key: 'E', name: '疾风步', icon: '💨', cd: 8, desc: '向目标方向冲刺，并提升 100% 攻速 4 秒。' },
      { key: 'R', name: '箭雨', icon: '🌧️', cd: 22, desc: '目标区域降下箭雨 4 秒，持续伤害并减速。' },
    ],
  },
  frost: {
    name: '霜语·诺娃', title: '冰霜女巫', icon: '❄️', color: 0x7fd8ff,
    hp: 330, atk: 17, rate: 0.9, range: 6, speed: 4.2, melee: false, block: 1, cost: 140, dtype: 'magic', slowAtk: true,
    desc: '以寒冰控制战场，攻击附带减速。',
    passive: { name: '碎冰', icon: '❄️', desc: '对被冻结的敌人造成的伤害 +40%。' },
    skills: [
      { key: 'Q', name: '冰晶爆裂', icon: '🧊', cd: 6, desc: '目标区域冰晶爆裂，造成 100 伤害并冻结 1.5 秒。' },
      { key: 'E', name: '冰霜领域', icon: '🌀', cd: 14, desc: '生成冰霜领域 6 秒，减速 60% 并持续伤害。' },
      { key: 'R', name: '绝对零度', icon: '💠', cd: 34, desc: '冻结自身周围 8 范围内所有敌人 3 秒，造成 220 伤害。' },
    ],
  },
};
export const HERO_ORDER = ['paladin', 'pyro', 'ranger', 'frost'];
export const MAX_HEROES = 3;

// ---------- 魔法卡牌 ----------
// target: 'point' 地面目标 | 'tower' 防御塔目标 | 'none' 立即生效
// rarity: common / rare / epic
export const CARDS = {
  fireball: { school: 'fire', name: '火球术', icon: '🔥', cost: 3, rarity: 'common', target: 'point', radius: 2.5, color: '#ff6a2a', desc: '投掷火球，造成 180 点范围伤害并灼烧。' },
  frostnova: { school: 'frost', name: '冰霜新星', icon: '❄️', cost: 3, rarity: 'common', target: 'point', radius: 3.5, color: '#7fd8ff', desc: '冻结范围内敌人 2.5 秒，造成 60 伤害。' },
  chain: { school: 'storm', name: '连锁闪电', icon: '⚡', cost: 3, rarity: 'common', target: 'point', radius: 2, color: '#a8b8ff', desc: '闪电在 8 名敌人间跳跃，每次 110 伤害。' },
  meteor: { school: 'fire', name: '陨石术', icon: '☄️', cost: 6, rarity: 'rare', target: 'point', radius: 4, color: '#ff8a3a', desc: '召唤巨型陨石，延迟后造成 700 点毁灭性伤害。' },
  heal: { school: 'holy', name: '治愈之光', icon: '💚', cost: 2, rarity: 'common', target: 'point', radius: 5, color: '#6cff9a', desc: '恢复范围内英雄与召唤物 300 生命。' },
  golem: { school: 'nature', name: '召唤石像守卫', icon: '🗿', cost: 5, rarity: 'rare', target: 'point', radius: 1.5, color: '#c8b898', desc: '召唤石像守卫 30 秒，阻挡并攻击敌人。' },
  wolves: { school: 'nature', name: '狼群召唤', icon: '🐺', cost: 4, rarity: 'common', target: 'point', radius: 2, color: '#b8c8e8', desc: '召唤 3 只灵狼 22 秒，追击敌人。' },
  blizzard: { school: 'frost', name: '暴风雪', icon: '🌨️', cost: 5, rarity: 'rare', target: 'point', radius: 4.5, color: '#bfe8ff', desc: '6 秒暴风雪，减速 50% 并每秒造成 50 伤害。' },
  poison: { school: 'nature', name: '剧毒之云', icon: '☠️', cost: 3, rarity: 'common', target: 'point', radius: 3.2, color: '#9cff4a', desc: '剧毒云雾持续 8 秒，每秒造成 40 伤害。' },
  thunder: { school: 'storm', name: '雷霆一击', icon: '🌩️', cost: 2, rarity: 'common', target: 'point', radius: 1.2, color: '#fff27a', desc: '对单个目标造成 320 伤害并眩晕 1 秒。' },
  blackhole: { school: 'arcane', name: '虚空黑洞', icon: '🌑', cost: 6, rarity: 'epic', target: 'point', radius: 5, color: '#b65cff', desc: '生成黑洞 4 秒，吸引敌人并造成持续伤害。' },
  timestop: { school: 'arcane', name: '时间停滞', icon: '⏳', cost: 7, rarity: 'epic', target: 'none', color: '#ffe9a8', desc: '冻结全场所有敌人 3.5 秒。' },
  goldrush: { name: '点金术', icon: '💰', cost: 1, rarity: 'common', target: 'none', color: '#ffd257', desc: '立即获得 70 金币。' },
  wisdom: { school: 'arcane', name: '奥术智慧', icon: '📘', cost: 0, rarity: 'common', target: 'none', color: '#7ab0ff', desc: '获得 2 点法力并抽 1 张牌。' },
  drums: { name: '狂暴战鼓', icon: '🥁', cost: 3, rarity: 'rare', target: 'none', color: '#ff7a5a', desc: '所有防御塔攻速 +60%，持续 10 秒。' },
  blessing: { school: 'holy', name: '神圣祝福', icon: '👼', cost: 3, rarity: 'rare', target: 'none', color: '#fff2a8', desc: '所有英雄伤害 +60%，回复 150 生命，持续 10 秒。' },
  repair: { school: 'holy', name: '圣坛修复', icon: '🏛️', cost: 4, rarity: 'rare', target: 'none', color: '#a8fff0', desc: '恢复 4 点圣坛生命。' },
  quake: { school: 'nature', name: '大地震颤', icon: '🌋', cost: 5, rarity: 'rare', target: 'none', color: '#d8a060', desc: '对全场地面敌人造成 120 伤害并减速 3 秒。' },
  firewall: { school: 'fire', name: '烈焰风暴', icon: '🌪️', cost: 4, rarity: 'common', target: 'point', radius: 3, color: '#ff9a3a', desc: '召唤火焰旋风 6 秒，每秒造成 70 伤害。' },
  icelance: { school: 'frost', name: '寒冰之枪', icon: '🗡️', cost: 2, rarity: 'common', target: 'point', radius: 1.8, color: '#9fe8ff', desc: '冰枪贯穿目标区域，造成 200 伤害并冻结 2 秒。' },
  foresight: { school: 'arcane', name: '先知预言', icon: '🔭', cost: 1, rarity: 'common', target: 'none', color: '#c8a8ff', desc: '抽 2 张牌。' },
  orbital: { school: 'arcane', name: '星辰射线', icon: '🌠', cost: 5, rarity: 'epic', target: 'point', radius: 2.2, color: '#ffffff', desc: '天降星辰光柱 3 秒，每秒造成 260 伤害。' },
  revive: { school: 'holy', name: '英灵归来', icon: '🕊️', cost: 3, rarity: 'rare', target: 'none', color: '#fff8d0', desc: '复活所有阵亡英雄，并重置全部技能冷却。' },
  phoenix: { school: 'fire', name: '凤凰召唤', icon: '🦅', cost: 6, rarity: 'epic', target: 'point', radius: 2, color: '#ffb03a', desc: '召唤凤凰 18 秒，盘旋并向敌人喷射火焰。' },
  empower: { school: 'arcane', name: '奥术灌注', icon: '💎', cost: 3, rarity: 'rare', target: 'tower', color: '#5cf0ff', desc: '永久提升目标防御塔 35% 伤害。' },
  arcanemissile: { school: 'arcane', name: '奥术飞弹', icon: '✴️', cost: 2, rarity: 'common', target: 'point', radius: 4, color: '#e07aff', desc: '向区域内敌人发射 6 枚追踪飞弹，每枚 70 伤害。' },
  // —— 新卡牌 ——
  inferno: { school: 'fire', name: '炼狱新星', icon: '🌋', cost: 4, rarity: 'rare', target: 'point', radius: 4.5, color: '#ff4a1a', desc: '三圈火焰由内向外依次爆发，每圈 130 伤害并灼烧。' },
  glacier: { school: 'frost', name: '冰川壁垒', icon: '🏔️', cost: 4, rarity: 'rare', target: 'point', radius: 2.2, color: '#a8e8ff', desc: '升起冰墙 5 秒，阻挡途经的地面敌人，结束时碎裂造成 220 伤害。' },
  tempest: { school: 'storm', name: '雷暴之云', icon: '⛈️', cost: 5, rarity: 'rare', target: 'point', radius: 4, color: '#9ab8ff', desc: '雷云盘踞 6 秒，每 0.4 秒劈下闪电造成 120 伤害。' },
  static: { school: 'storm', name: '静电力场', icon: '🔋', cost: 2, rarity: 'common', target: 'point', radius: 3, color: '#c8d8ff', desc: '电场持续 5 秒，减速 35%，每秒 45 伤害；离开时眩晕 0.6 秒。' },
  echo: { school: 'arcane', name: '奥术回响', icon: '🔁', cost: 1, rarity: 'rare', target: 'none', color: '#d0a0ff', desc: '将你上一张打出的卡牌（非回响）复制一张加入手牌。' },
  thorns: { school: 'nature', name: '荆棘之地', icon: '🌿', cost: 3, rarity: 'common', target: 'point', radius: 3.2, color: '#7adf5a', desc: '荆棘蔓延 7 秒，减速 40%，每秒 45 伤害（无视相位）。' },
  treant: { school: 'nature', name: '古树守卫', icon: '🌳', cost: 5, rarity: 'rare', target: 'point', radius: 1.5, color: '#8ad870', desc: '召唤古树 28 秒：阻挡 4 名敌人，攻击缠绕目标并治疗附近友军。' },
  smite: { school: 'holy', name: '圣光审判', icon: '🌞', cost: 3, rarity: 'common', target: 'point', radius: 2.2, color: '#fff0a0', desc: '圣光自天而降，造成 240 伤害；对首领与幽魂伤害翻倍。' },
  sanctuary: { school: 'holy', name: '圣域', icon: '⛪', cost: 4, rarity: 'rare', target: 'point', radius: 4, color: '#ffe8a8', desc: '神圣领域 8 秒：区域内友军每秒恢复 60 生命、伤害 +30%；敌人受到伤害 +20%。' },
  // —— 传说 ——
  armageddon: { school: 'fire', name: '天启', icon: '🔥', cost: 8, rarity: 'legendary', target: 'none', color: '#ff7a1a', desc: '14 颗陨石轰炸全场敌人，每颗 400 伤害并灼烧。' },
  apotheosis: { school: 'holy', name: '神威降临', icon: '👑', cost: 6, rarity: 'legendary', target: 'none', color: '#ffe066', desc: '选中英雄化身神祇 12 秒：体型变大、伤害 +100%、受伤 -60%，并立即重置技能。' },
  maelstrom: { school: 'storm', name: '万雷天牢', icon: '🌀', cost: 7, rarity: 'legendary', target: 'point', radius: 6, color: '#a0c0ff', desc: '雷霆牢笼 5 秒：困住范围内敌人，连续劈下闪电，每秒 300 伤害。' },
};

export const RARITY = {
  common: { name: '普通', color: '#c8d0e0' },
  rare: { name: '稀有', color: '#5cb8ff' },
  epic: { name: '史诗', color: '#d070ff' },
  legendary: { name: '传说', color: '#ffa53a' },
};

export const DECK_MIN = 10;
export const DECK_MAX = 20;

export const DEFAULT_DECK = [
  'fireball', 'fireball', 'frostnova', 'chain', 'chain', 'heal', 'wolves', 'poison',
  'thunder', 'thunder', 'goldrush', 'wisdom', 'firewall', 'icelance', 'meteor', 'drums',
];

// 初始收藏：普通卡 2 张，稀有卡 1 张，史诗/传说卡需要通过奖励解锁
export function starterCollection() {
  const c = {};
  for (const [id, card] of Object.entries(CARDS)) {
    c[id] = card.rarity === 'common' ? 2 : card.rarity === 'rare' ? 1 : 0;
  }
  return c;
}

export function maxCopies(id) {
  const r = CARDS[id].rarity;
  return r === 'epic' || r === 'legendary' ? 1 : 2;
}

// ---------- 流派与羁绊 ----------
// 卡组中同流派卡牌（含复制）达到阈值时激活全局加成
export const SCHOOLS = {
  fire: { name: '烈焰', icon: '🔥', color: '#ff7a3a', tiers: [
    { n: 3, desc: '所有灼烧伤害 +50%' },
    { n: 6, desc: '烈焰卡牌伤害 +30%，英雄炎系技能同样受益' },
  ] },
  frost: { name: '寒霜', icon: '❄️', color: '#7fd8ff', tiers: [
    { n: 3, desc: '冻结与减速持续时间 +30%' },
    { n: 6, desc: '碎冰：被冻结的敌人受到所有伤害 +25%' },
  ] },
  storm: { name: '风暴', icon: '⚡', color: '#a8b8ff', tiers: [
    { n: 3, desc: '闪电额外弹跳 +2，雷霆尖塔弹跳 +1' },
    { n: 6, desc: '风暴卡牌伤害 +30%，眩晕时间 +0.5 秒' },
  ] },
  arcane: { name: '奥术', icon: '🔮', color: '#d07aff', tiers: [
    { n: 3, desc: '法力上限 +2' },
    { n: 6, desc: '法力恢复速度 +30%，奥术法师塔伤害 +20%' },
  ] },
  nature: { name: '自然', icon: '🌿', color: '#7adf5a', tiers: [
    { n: 3, desc: '召唤物生命与攻击 +40%' },
    { n: 6, desc: '召唤物持续时间 +50%，持续伤害区域伤害 +40%' },
  ] },
  holy: { name: '圣光', icon: '✨', color: '#ffe8a0', tiers: [
    { n: 3, desc: '所有治疗效果 +50%' },
    { n: 6, desc: '英雄伤害 +15%，阵亡复活时间减半' },
  ] },
};
export const SCHOOL_ORDER = ['fire', 'frost', 'storm', 'arcane', 'nature', 'holy'];

export function schoolCounts(deck) {
  const c = {};
  for (const k of SCHOOL_ORDER) c[k] = 0;
  for (const id of deck) { const s = CARDS[id] && CARDS[id].school; if (s) c[s]++; }
  return c;
}
// 返回 { fire: 0|1|2, ... } 表示激活的阶数
export function schoolTiers(deck) {
  const c = schoolCounts(deck);
  const out = {};
  for (const k of SCHOOL_ORDER) out[k] = SCHOOLS[k].tiers.filter((t) => c[k] >= t.n).length;
  return out;
}

// ---------- 遗物（单局有效） ----------
export const RELICS = {
  manacrystal: { name: '法力水晶', icon: '🔷', desc: '法力上限 +2，立即获得 3 点法力。' },
  greedring: { name: '贪婪指环', icon: '💍', desc: '击杀获得的金币 +25%。' },
  emberheart: { name: '余烬之心', icon: '🧡', desc: '所有灼烧伤害翻倍。' },
  frostcore: { name: '永冻核心', icon: '🧊', desc: '冻结持续时间 +0.8 秒；寒霜方尖碑减速效果 +10%。' },
  stormtotem: { name: '风暴图腾', icon: '🌩️', desc: '雷霆尖塔弹跳 +2；所有闪电卡牌额外弹跳 3 次。' },
  warbanner: { name: '战争旌旗', icon: '🚩', desc: '所有防御塔攻击速度 +15%。' },
  herocrest: { name: '英雄徽记', icon: '🎖️', desc: '英雄伤害 +20%，获得经验 +50%。' },
  prophecy: { name: '预言之书', icon: '📖', desc: '手牌上限 +1；战斗中每 7 秒抽一张牌（原为 9 秒）。' },
  grail: { name: '复苏圣杯', icon: '🏆', desc: '英雄复活时间减半，复活时重置技能冷却。' },
  alchemy: { name: '炼金坩埚', icon: '⚗️', desc: '每波结束额外获得 30 金币与 2 点法力。' },
  soulreaper: { name: '灵魂镰刀', icon: '🌙', desc: '每击杀 15 名敌人，获得 1 点法力。' },
  stoneheart: { name: '磐石之心', icon: '🪨', desc: '圣坛生命 +6。' },
  echostone: { name: '回响之石', icon: '🔔', desc: '打出卡牌时有 20% 几率返还其法力消耗。' },
  spellblade: { name: '咒刃', icon: '🗡️', desc: '每打出一张卡牌，所有英雄技能冷却 -1.5 秒。' },
  blueprint: { name: '大师蓝图', icon: '📐', desc: '防御塔建造与升级费用 -15%。' },
  lens: { name: '奥术透镜', icon: '🔍', desc: '所有卡牌伤害 +20%。' },
  focus: { name: '专注法珠', icon: '📿', desc: '连携上限提升至 5 层，且连携窗口延长至 12 秒。' },
  bulwark: { name: '守护壁垒', icon: '🛡️', desc: '英雄与召唤物受到伤害 -20%；近战英雄额外阻挡 1 名敌人。' },
};
export const RELIC_IDS = Object.keys(RELICS);

// ---------- 英雄技能等级 ----------
// Q/E 最高 4 级；R 最高 3 级，需英雄等级 3/6/9 才能学习
export const SKILL_MAX = [4, 4, 3];
export function skillReq(idx, nextRank) {
  if (idx === 2) return [0, 3, 6, 9][nextRank];
  return [0, 1, 2, 4, 6][nextRank];
}
export function rankMul(rank) { return 1 + 0.3 * (rank - 1); }
export function rankCd(rank) { return 1 - 0.08 * (rank - 1); }

// ---------- 波次生成 ----------
// 手工设计的波次模板：[类型, 数量基数, 间隔, 延迟, 路线]
// 数量会随难度与地图略微增长；最终波与首领波单独处理。
const WAVE_TEMPLATES = [
  /* 1 */ [['slime', 10, 0.9], ['wolf', 4, 0.8, 8, 1]],
  /* 2 */ [['slime', 10, 0.7], ['wolf', 6, 0.6, 6, 1]],
  /* 3 */ [['wolf', 9, 0.55], ['bat', 6, 0.8, 5, 1], ['slime', 8, 0.6, 9]],
  /* 4 */ [['slime', 10, 0.6], ['knight', 3, 1.8, 4, 1], ['wolf', 5, 0.5, 9]],
  /* 5 */ null, // 首领
  /* 6 */ [['knight', 4, 1.5], ['shaman', 1, 1, 4], ['splitter', 4, 1.6, 8, 1], ['bat', 6, 0.6, 12]],
  /* 7 */ [['ghost', 7, 0.8], ['bat', 9, 0.5, 4, 1], ['wolf', 10, 0.4, 9], ['knight', 3, 1.5, 12, 1]],
  /* 8 */ [['splitter', 5, 1.3], ['wolf', 10, 0.4, 3, 1], ['shaman', 2, 3, 6], ['knight', 4, 1.4, 10, 1]],
  /* 9 */ [['knight', 6, 1.2], ['shaman', 2, 3, 3], ['ghost', 6, 0.8, 7, 1], ['bat', 8, 0.5, 12]],
  /* 10 */ null,
  /* 11 */ [['bat', 12, 0.45], ['ghost', 8, 0.7, 4, 1], ['splitter', 5, 1.2, 9]],
  /* 12 */ [['knight', 8, 1.0], ['shaman', 3, 2.5, 4], ['splitter', 6, 1.1, 6, 1], ['wolf', 10, 0.35, 12, 1]],
  /* 13 */ [['wolf', 16, 0.3], ['ghost', 9, 0.7, 5, 1], ['knight', 6, 1.1, 9], ['bat', 10, 0.4, 14, 1]],
  /* 14 */ [['splitter', 6, 0.9], ['knight', 7, 0.9, 4, 1], ['shaman', 3, 2, 6], ['ghost', 8, 0.6, 10, 1], ['bat', 8, 0.4, 14]],
  /* 15 */ null,
  /* 16 */ [['knight', 9, 0.8], ['ghost', 9, 0.55, 5, 1], ['shaman', 3, 2.2, 8], ['bat', 10, 0.35, 12, 1]],
  /* 17 */ [['splitter', 7, 0.8], ['wolf', 14, 0.25, 4, 1], ['knight', 7, 0.8, 9], ['ghost', 8, 0.5, 13, 1], ['shaman', 3, 2, 10, 1]],
];

export function buildWave(map, n) {
  // n 从 1 开始
  const groups = [];
  const P = map.paths.length;
  const last = map.waves;
  // 多路线地图每组敌人略少，但总量更多
  const cnt = (c) => Math.max(1, Math.round(c * (P > 1 ? 0.85 : 1) * (0.9 + 0.1 * map.difficulty) * (1.2 + Math.min(n, 10) * 0.02)));
  const add = (type, count, interval, delay = 0, path = 0) => groups.push({ type, count: cnt(count), interval, delay, path: path % P });

  if (n === last) {
    // 最终波：古龙 + 大军
    add('knight', 6, 1.2, 0, 0);
    add('ghost', 6, 0.9, 3, 1);
    add('dragon', 1, 1, 8, 0);
    add('bat', 9, 0.5, 12, 1);
    add('shaman', 2, 3, 8, 0);
    add('splitter', 4, 1.2, 18, 1);
    if (map.id === 'frost') add('lich', 1, 1, 22, 0);
    return groups;
  }
  if (n % 5 === 0) {
    const tier = n / 5;
    const boss = tier === 2 ? 'lich' : 'golem';
    add('slime', 6 + n, 0.6, 0, 0);
    add(boss, 1, 1, 4, 0);
    if (P > 1) add('wolf', 6 + tier * 2, 0.5, 2, 1);
    if (tier >= 2) add('knight', 3 + tier, 1.4, 8, 1);
    if (tier >= 3) add('ghost', 8, 0.6, 10, 0);
    return groups;
  }
  let tpl = WAVE_TEMPLATES[n - 1];
  if (!tpl) {
    // 超出模板：使用最后两个模板混合并加量
    const a = WAVE_TEMPLATES[15], b = WAVE_TEMPLATES[16];
    tpl = (n % 2 ? a : b).map(([t, c, i, d, p]) => [t, c * (1 + (n - 17) * 0.15), i, d, p]);
  }
  for (const [type, c, interval, delay = 0, path = 0] of tpl) add(type, c, interval, delay, path);
  return groups;
}

// 普通敌人生命缩放（首领在 Enemy 内使用平缓版本）
export function hpScale(map, n) {
  return (1 + 0.2 * (n - 1) + 0.028 * (n - 1) * (n - 1)) * map.difficulty;
}

// 波次预览：{ type: count } （包含首领）
export function wavePreview(map, n) {
  const out = {};
  for (const g of buildWave(map, n)) out[g.type] = (out[g.type] || 0) + g.count;
  return out;
}
