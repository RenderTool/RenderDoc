<p align="center">
  <img src="src/.vuepress/public/logo.png" width="180" height="180" alt="RenderDoc logo">
</p>

<h1 align="center">RenderDoc</h1>

<p align="center">
  个人技术开发日志 —— 建模 / 渲染 / UE4-UE5 / 编程语言 / 工具链
</p>

<p align="center">
  <a href="http://renderdoc.space/"><img src="https://img.shields.io/badge/Site-renderdoc.space-2563eb?style=flat-square" alt="Site"></a>
  <a href="https://vuepress.vuejs.org/"><img src="https://img.shields.io/badge/VuePress-2.0.0--rc-41B883?style=flat-square&logo=vuedotjs" alt="VuePress"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript" alt="TypeScript"></a>
  <a href="https://theme-hope.vuejs.press/zh/"><img src="https://img.shields.io/badge/theme--hope-2.0.0--rc-42b983?style=flat-square" alt="theme-hope"></a>
  <img src="https://img.shields.io/badge/license-MIT-f97316?style=flat-square" alt="License">
</p>

<p align="center">
  <a href="#-站点内容">站点内容</a> •
  <a href="#-界面截图">界面截图</a> •
  <a href="#-快速开始">快速开始</a> •
  <a href="#-项目结构">项目结构</a> •
  <a href="#-技术栈">技术栈</a> •
  <a href="#-部署">部署</a> •
  <a href="#-常见问题">常见问题</a>
</p>

<br>

RenderDoc 是基于 [VuePress](https://vuepress.vuejs.org/) 与 [theme-hope](https://theme-hope.vuejs.press/zh/) 构建的个人技术文档站点。虽然被称为技术站，却更像是我的个人开发日志，主要记录建模、渲染技术、光线追踪、UE4/UE5、各类编程语言以及工具使用等综合技术内容。

---

## 站点内容

- **UE5 开发** — 引擎核心、网络、UI、着色器、插件与踩坑记录
- **编程语言** — C++、Java、Lua 等语言学习笔记
- **开发工具** — Git、GitHub、编辑器等工具使用心得
- **算法** — 算法学习与实现
- **AIGC** — AI 生成内容实验

---

## 界面截图

### 站点首页

<p align="center">
  <img src="src/.vuepress/public/001.png" width="60%" alt="站点首页截图 1">
</p>
<p align="center">
  <img src="src/.vuepress/public/002.png" width="60%" alt="站点首页截图 2">
</p>
<p align="center">
  <img src="src/.vuepress/public/003.png" width="60%" alt="站点首页截图 3">
</p>

### 暗色主题

<p align="center">
  <img src="src/.vuepress/public/004.png" width="60%" alt="暗色主题截图">
</p>

---

## 快速开始

```bash
# 安装依赖
npm install

# 启动本地开发服务（默认 http://localhost:8080）
npm run docs:dev

# 构建静态站点（输出到 src/.vuepress/dist）
npm run docs:build
```

---

## 项目结构

```
RenderDoc/
├── src/                          # 文档源码
│   ├── .vuepress/                # VuePress 配置
│   │   ├── components/           # 自定义组件
│   │   ├── public/               # 静态资源
│   │   ├── styles/               # 全局样式
│   │   ├── config.ts             # 站点配置
│   │   ├── theme.ts              # 主题配置
│   │   ├── navbar.ts             # 导航栏配置
│   │   └── sidebar.ts            # 侧边栏配置
│   ├── preface/                  # 序言
│   ├── unreal/                   # UE4/UE5 开发
│   ├── language/                 # 编程语言（C++/Java/Lua/Markdown）
│   ├── tools/                    # 开发工具（Git/GitHub/IDE 等）
│   ├── algorithm/                # 算法
│   └── aigc/                     # AI 生成内容
├── .github/workflows/            # GitHub Actions 自动部署
└── package.json
```

---

## 技术栈

| 分类 | 技术 |
|------|------|
| 框架 | VuePress 2 + theme-hope |
| 语言 | TypeScript 5 / Vue 3 |
| 构建 | Webpack（可选 Vite） |
| 样式 | Sass |
| 功能 | 全文搜索 / Giscus 评论 / PWA |

---

## 部署

推送 `master` 分支后，由 GitHub Actions 自动构建文档并部署到 GitHub Pages（`gh-pages` 分支）。访问地址：<http://renderdoc.space/>

---

## 贡献

1. Fork 本仓库
2. 新建功能分支（`git checkout -b docs/new-article`）
3. 在对应板块下新增 Markdown 文章
4. 提交并推送（`git commit` / `git push`）
5. 发起 Pull Request

---

## 常见问题

**本地开发提示依赖缺失？**

运行 `npm install` 安装依赖后再启动。

**如何新增一篇文章？**

在对应板块目录下创建 Markdown 文件即可，侧边栏使用 `structure` 自动生成目录。

**如何加密某个页面？**

在 `src/.vuepress/theme.ts` 的 `encrypt.config` 中配置对应路径的访问密码。

---

## 许可协议

本项目使用 MIT 协议。
