// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Yumesumi Mods · Astro 配置
 *
 * 部署目标：GitHub Pages + 自定义域名 https://mods.yumesumi.cyou
 *   - 自定义域名挂在仓库根路径，base 必须为 '/'；用 /Yumesumi-Mods/ 会导致资源 404
 *   - public/CNAME 必须保留在发布分支根目录，否则自定义域名会失效
 *   - 站内链接仍经 src/lib/url.ts 的 withBase 拼接，换部署路径时无需改业务代码
 *   - 主站 yumesumi.cyou 是独立仓库，通过绝对地址跳转，不在本站路由内
 */
export default defineConfig({
  site: 'https://mods.yumesumi.cyou',
  base: '/',

  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },

  devToolbar: {
    enabled: false,
  },
});
