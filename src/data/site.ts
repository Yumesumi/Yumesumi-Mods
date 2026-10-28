/**
 * 站点级元数据。
 *
 * 所有对外可见的名称、描述与外部地址都以此为唯一来源。
 */

export const SITE = {
  name: 'Yumesumi Mods',
  nameZh: '梦澄模组',
  /** 首屏与导航使用的英文标识 */
  wordmark: 'YUMESUMI MODS',
  tagline: '为 Minecraft 打造轻量、克制、耐玩的功能模组',
  description:
    '梦澄模组（Yumesumi Mods）收录 Yumesumi 开发的 Minecraft 模组：Yumesumi Economy 与 Yumesumi Finance，均面向 NeoForge 1.21.1。',
  locale: 'zh-CN',
  lang: 'zh-CN',
  /** 本站地址（GitHub Pages 项目站点） */
  url: 'https://yumesumi.github.io/Yumesumi-Mods',
  /** 主站：梦澄中心 */
  hubUrl: 'https://yumesumi.cyou',
  hubName: '梦澄中心',
  hubNameEn: 'Yumesumi Center',
  author: 'Yumesumi',
  email: 'YumesumiArikki@outlook.com',
  github: 'https://github.com/Yumesumi/Yumesumi-Mods',
  ogImage: '/brand/logo.svg',
} as const;
