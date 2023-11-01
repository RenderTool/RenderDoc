import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "C++",
      icon: "laptop-code",
      prefix: "CPP/",
      link: "CPP/",
      children: "structure",
    },
  ],
  "/Unreal/": [
    {
      text: "UnReal",
      prefix:"",
      link: "",
      children: "structure",
    }
  ],
});
