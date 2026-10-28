// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Yumesumi Mods · Astro 配置
 *
 * 部署目标：GitHub Pages 项目站点 https://yumesumi.github.io/Yumesumi-Mods/
 *   - 项目站点挂在子路径下，base 必须是 '/Yumesumi-Mods'
 *   - 站内链接与 public 资源都要经过 src/lib/url.ts 的 withBase 拼接
 *   - 主站 yumesumi.cyou 是独立仓库，通过绝对地址跳转，不在本站路由内
 */
export default defineConfig({
  site: 'https://yumesumi.github.io',
  base: '/Yumesumi-Mods',

  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },

  devToolbar: {
    enabled: false,
  },
});
