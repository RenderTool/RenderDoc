import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";
export default defineUserConfig({

  base: "/RenderDoc/",
  lang: "zh-CN",
  title: "RenderDoc",
  description: "斯高和的文档",
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    }),
  ],
  
  theme,
  // Enable it with pwa
  shouldPrefetch: false,

  
});
