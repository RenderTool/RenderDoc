import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "RenderDoc",
  description: "斯高和的文档",

  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
