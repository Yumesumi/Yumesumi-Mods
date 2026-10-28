/**
 * 模组清单。
 *
 * 约定：只记录能核实的事实——版本号、下载量、兼容版本均来自 Modrinth API
 * 或模组仓库本身，不写虚高的数字。新增模组时在此追加一条并补上详情页。
 */

export type ModStatus = 'released' | 'development';

export interface ModLink {
  /** 链接文字，如 Modrinth */
  label: string;
  href: string;
  /** 链接类型决定图标 */
  kind: 'modrinth' | 'curseforge' | 'github';
}

export interface Mod {
  /** 路由 key，同时用于详情页路径 /<key>/ */
  key: string;
  name: string;
  nameZh: string;
  /** 封面占位图形的类型 */
  specimen: 'economy' | 'finance';
  status: ModStatus;
  statusLabel: string;
  version: string;
  /** 首页卡片上的一句话简介 */
  summary: string;
  /** 详情页首屏导语 */
  intro: string;
  /** 首页卡片上的三条亮点 */
  highlights: string[];
  /** 每张卡片/详情页的色彩重心，取值为 CSS 自定义属性名 */
  accentVar: string;
  meta: {
    mc: string;
    loader: string;
    java: string;
  };
  /** 仅在已发布模组上出现 */
  downloads?: number;
  published?: string;
  updated?: string;
  links: ModLink[];
}

export const MODS: Mod[] = [
  {
    key: 'economy',
    name: 'Yumesumi Economy',
    nameZh: '梦澄经济',
    specimen: 'economy',
    status: 'released',
    statusLabel: '已发布',
    version: '1.1.1',
    summary:
      '为 Minecraft 1.21.1 加入铜、银、金、钻石四种可堆叠硬币，击杀怪物掉落，支持合成与手持快速兑换。',
    intro:
      '面向 Minecraft 1.21.1 的轻量级 NeoForge 经济模组。它添加四种可堆叠硬币、可配置的怪物掉落、合成表配方，以及手持即可完成的快速兑换。',
    highlights: ['四档硬币与 8:1 兑换链', '掉落率与数量全部可配置', '合成表与手持兑换双通道'],
    accentVar: '--ys-lavender',
    meta: { mc: '1.21.1', loader: 'NeoForge 21.1.200+', java: '21' },
    downloads: 138,
    published: '2026-03-16',
    updated: '2026-06-26',
    links: [
      {
        label: 'Modrinth',
        href: 'https://modrinth.com/mod/yumesumi_economy',
        kind: 'modrinth',
      },
      {
        label: 'CurseForge',
        href: 'https://www.curseforge.com/minecraft/mc-mods/yumesumi-economy',
        kind: 'curseforge',
      },
    ],
  },
  {
    key: 'finance',
    name: 'Yumesumi Finance',
    nameZh: '梦澄金融',
    specimen: 'finance',
    status: 'development',
    statusLabel: '开发中',
    version: '1.2.9',
    summary: '完整的游戏内金融系统：梦澄元与实体现金、ATM、银行卡、企业账户、POS 收款与交易明细。',
    intro:
      '基于 NeoForge 1.21.1 的金融系统模组。它为游戏加入梦澄元、实体现金、ATM、银行卡、银行账户、交易明细与玩家转账，并为利息、理财、股票与多币种预留了扩展空间。',
    highlights: [
      '梦澄元与 15 种实体现金面额',
      'ATM、POS、银行卡与企业账户',
      '最近 1000 条交易明细可查',
    ],
    accentVar: '--ys-purple-bright',
    meta: { mc: '1.21.1', loader: 'NeoForge 21.1.200+', java: '21' },
    links: [
      {
        label: 'GitHub',
        href: 'https://github.com/Yumesumi/Yumesumi-Finance',
        kind: 'github',
      },
    ],
  },
];

/** 首页卡片顺序：已发布优先，其余按清单顺序 */
export const SORTED_MODS = [...MODS].sort((a, b) => {
  if (a.status === b.status) return 0;
  return a.status === 'released' ? -1 : 1;
});
