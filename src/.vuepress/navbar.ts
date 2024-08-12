import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/preface/",
  "/unreal/",
  {
    text: "开发语言",
    icon: "signs-post",
    prefix: "/language/",
    children: ["markdown/","lua/","cpp/","java/"],
  },
  {
    text: '开发工具',
    icon: "screwdriver-wrench",
    prefix: "/tools/",
    children:["git/","github/","vscode/","vuepress/","rider/","visualstudio/","idea/"],
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
