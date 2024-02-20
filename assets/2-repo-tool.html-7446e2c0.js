import{_ as o,r,o as c,c as t,a as n,b as e,d as a,e as i}from"./app-72ee74a0.js";const l={},d=n("h2",{id:"前言",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#前言","aria-hidden":"true"},"#"),e(" 前言")],-1),p={href:"https://www.chromium.org/chromium-os/quick-start-guide",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">\${SOURCE_REPO}</span>
repo init <span class="token parameter variable">-u</span> https://chromium.googlesource.com/chromiumos/manifest.git

<span class="token comment"># Optional: Make any changes to .repo/local_manifests/local_manifest.xml before syncing</span>
repo <span class="token function">sync</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),u={href:"https://source.android.google.cn/setup/develop/repo?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},h=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入用户目录</span>
<span class="token builtin class-name">cd</span> /usr/bin
<span class="token comment"># 从清华源下载 repo</span>
<span class="token function">sudo</span> <span class="token function">curl</span> https://mirrors.tuna.tsinghua.edu.cn/git/git-repo <span class="token parameter variable">-o</span> repo
<span class="token comment"># 赋予执行权限</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> +x repo

<span class="token comment"># 校验</span>
repo <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function v(b,_){const s=r("ExternalLinkIcon");return c(),t("div",null,[d,n("p",null,[e("有个小任务，拉取 "),n("a",p,[e("Chromium OS"),a(s)]),e(" 的代码：")]),m,n("p",null,[e("其使用到了 "),n("a",u,[e("repo"),a(s)]),e(" 工具。")]),h])}const f=o(l,[["render",v],["__file","2-repo-tool.html.vue"]]);export{f as default};
