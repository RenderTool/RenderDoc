import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c,a as n,b as e,d as a,e as o}from"./app-7c7f9a75.js";const l={},d=n("h1",{id:"git-多仓库工具-repo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#git-多仓库工具-repo","aria-hidden":"true"},"#"),e(" Git-多仓库工具 Repo")],-1),p=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),m={href:"https://www.chromium.org/chromium-os/quick-start-guide",target:"_blank",rel:"noopener noreferrer"},u=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${SOURCE_REPO}</span>
repo init <span class="token parameter variable">-u</span> https://chromium.googlesource.com/chromiumos/manifest.git

<span class="token comment"># Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing</span>
repo <span class="token function">sync</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h={href:"https://source.android.google.cn/setup/develop/repo?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},v=o(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入用户目录</span>
<span class="token builtin class-name">cd</span> /usr/bin
<span class="token comment"># 从清华源下载 repo</span>
<span class="token function">sudo</span> <span class="token function">curl</span> https://mirrors.tuna.tsinghua.edu.cn/git/git-repo <span class="token parameter variable">-o</span> repo
<span class="token comment"># 赋予执行权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x repo

<span class="token comment"># 校验</span>
repo <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function b(_,f){const s=r("ExternalLinkIcon");return t(),c("div",null,[d,p,n("p",null,[e("有个小任务，拉取 "),n("a",m,[e("Chromium OS"),a(s)]),e(" 的代码：")]),u,n("p",null,[e("其使用到了 "),n("a",h,[e("repo"),a(s)]),e(" 工具。")]),v])}const x=i(l,[["render",b],["__file","repo-tool.html.vue"]]);export{x as default};
