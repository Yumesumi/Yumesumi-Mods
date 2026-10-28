/**
 * 站内链接工具。
 *
 * GitHub Pages 项目站点挂在 /Yumesumi-Mods/ 子路径下，
 * 所有站内 href 必须经 withBase 拼接，否则会指向域名根目录。
 */

const BASE = import.meta.env.BASE_URL;

/** 把 '/economy/' 这样的站内路径补上部署基址 */
export const withBase = (href: string) => `${BASE}${href.replace(/^\//, '')}`;
