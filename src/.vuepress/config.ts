import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from "vuepress";
// import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  bundler: webpackBundler({
    postcss: {},
    vue: {},
  }),
  
  base: "/RenderDoc/",
  lang: "zh-CN",
  title: "RenderDoc",
  description: "斯高和的文档",
  // plugins: [
  //   searchProPlugin({
  //     indexContent: true,
  //     autoSuggestions:true,
  //     queryHistoryCount:5,
  //    
  //    
  //   },
  //   ),
  // ],
  theme,
  // Enable it with pwa
  shouldPrefetch: false,

});
