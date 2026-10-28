# Yumesumi Mods · 梦澄模组

Yumesumi 开发的 Minecraft 模组作品站，视觉与主站 [梦澄中心](https://yumesumi.cyou) 保持一致。

- 线上地址：<https://mods.yumesumi.cyou>
- 主站：<https://yumesumi.cyou>

当前收录：

| 模组 | 状态 | 版本 | 入口 |
| --- | --- | --- | --- |
| Yumesumi Economy 梦澄经济 | 已发布 | 1.1.1 | [Modrinth](https://modrinth.com/mod/yumesumi_economy) · [CurseForge](https://www.curseforge.com/minecraft/mc-mods/yumesumi-economy) |
| Yumesumi Finance 梦澄金融 | 开发中 | 1.2.9 | [GitHub](https://github.com/Yumesumi/Yumesumi-Finance) |

## 技术栈

Astro 静态输出，无前端框架。设计变量来自主站的 `src/styles/tokens.css`，
字体使用同一套 MiSans 子集（`public/fonts`），因此两个站点的排版完全一致。

## 目录

```text
src/
├─ components/ui/     导航、页脚、环境层、封面、详情页首屏
├─ data/              site.ts（站点信息）、mods.ts（模组清单）
├─ layouts/           BaseLayout、ModPageLayout
├─ lib/url.ts         站内链接的 base 拼接
├─ pages/             index / economy / finance / 404
└─ styles/            tokens、global、mod-page
public/
├─ brand/logo.svg     与主站同一个 Logo
├─ fonts/             MiSans 子集与 fonts.css
└─ mods/              模组图标、贴图与合成表截图
tools/deploy-pages.mjs 发布脚本
```

## 本地开发

```bash
npm install
npm run dev      # http://localhost:4321/Yumesumi-Mods/
npm run build    # 输出到 dist/
npm run check    # 类型检查
```

站点使用自定义域名，`base` 为 `/`。站内链接统一使用 `src/lib/url.ts` 的
`withBase()`，不要手写绝对路径——换部署路径时只需改 `astro.config.mjs`。

## 新增模组

1. 在 `src/data/mods.ts` 的 `MODS` 里追加一条记录（状态、版本、链接、亮点）。
2. 在 `src/pages/<key>/index.astro` 建详情页，`ModPageLayout` 会自动渲染首屏。
3. 封面在 `ModCover.astro`：新增 `specimen` 类型并放入对应的像素素材。

首页的模组卡片、导航、页脚都会自动跟随清单变化。

## 部署

```bash
npm run deploy
```

脚本会构建、把 `dist/` 写入 `gh-pages` 分支并推送，GitHub Pages 随后重新发布。
首次在新仓库使用时，需要先把 Pages 的来源改成分支模式：

```bash
gh api -X PUT repos/Yumesumi/Yumesumi-Mods/pages \
  -f 'build_type=legacy' \
  -f 'source[branch]=gh-pages' \
  -f 'source[path]=/'
```

## 内容来源

- Economy 的硬币、掉落率、兑换与配置说明来自 Modrinth 项目页（2026-06-26 更新）。
- Finance 的功能与设计原则来自模组仓库 README（版本 1.2.9）。
- 站内不写无法核实的数字，下载量取 Modrinth 公开数据。
