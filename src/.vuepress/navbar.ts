import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/preface/",
  "/unreal/",
  {
    text: "开发语言",
    icon: "signs-post",
    prefix: "/language/",
    children: ["markdown/","lua/","cpp/"],
  },
  {
    text: '开发工具',
    icon: "screwdriver-wrench",
    prefix: "/tools/",
    children:["git/","github/","vscode/","vuepress/","rider/"],
  },
  {
    text: '3D工具',
    icon: "cube",
    prefix: "/3Dtools/",
    children:["vray/","3dsmax"],
  },
  "/algorithm/",  
  "/timeline/",
    
  // {
  //   text: '开发工具',
  //   icon: "screwdriver-wrench",
  //   prefix: "/tools/",
  //   children: [
  //     {text: 'Git', link: 'git/'},
  //     {text: 'Github', link: 'github/'},
  //     {text: 'VSCode', link: 'vscode/'},
  //   ]
  // },
]);
