# 素材与致谢 (Assets & Credits)

本项目**不使用任何外部美术、音频或字体素材文件**。

| 类别 | 来源 |
| --- | --- |
| 3D 模型（敌人、防御塔、英雄、召唤物、地形、装饰） | 全部由代码程序化生成（`src/models.js`、`src/world.js`），使用 three.js 基础几何体 |
| 特效（粒子、冲击波、光柱、闪电、法阵、焦痕） | 自定义 GLSL 着色器与粒子系统（`src/fx.js`） |
| 天空、水面、熔岩、冰面 | 自定义 GLSL 着色器（`src/world.js`） |
| 音效与背景音乐 | Web Audio API 实时合成（`src/audio.js`） |
| 卡牌 / 图标 | 系统 Emoji 字符 + CSS 渐变 |
| 字体 | 使用用户系统自带字体 |

## 第三方库

- [three.js](https://threejs.org/) — MIT License（含 `examples/jsm` 中的 EffectComposer / UnrealBloomPass / OutputPass 后处理）
- [Vite](https://vitejs.dev/) — MIT License（构建工具）

如未来加入 CC0 素材，将在此处逐项列出来源与许可。
