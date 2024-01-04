import{_ as o,r as n,o as r,c as p,d as a,w as i,a as s,b as e,e as c}from"./app-a6a93789.js";const m="/RenderDoc/assets/ide-c4402682.png",u="/RenderDoc/assets/idegitignore-e1d2c415.png",v={},h=c(`<h2 id="忽略规则" tabindex="-1"><a class="header-anchor" href="#忽略规则" aria-hidden="true">#</a> 忽略规则</h2><blockquote><p>首先你需要在项目根目录下新建一个 <code>.gitignore</code> 文件</p></blockquote><ul><li>空格不匹配任何文件，可以作为分隔符号</li><li>以 <code>#</code> 开始的为注释</li><li><code>\\</code> 表示转义符</li><li><code>!</code> 开始的表示否定，也就是开启跟踪</li><li><code>/</code> 开始的表示项目根目录</li><li><code>/</code> 结尾的表示某个文件夹，但是不匹配该文件</li><li><code>**</code> 表示多级，其位置可在开始，中间，结束</li><li><code>?</code> 表示单个字符</li><li><code>[]</code> 表示单个字符列表</li></ul><h2 id="忽略示例" tabindex="-1"><a class="header-anchor" href="#忽略示例" aria-hidden="true">#</a> 忽略示例</h2><h3 id="_1-文件" tabindex="-1"><a class="header-anchor" href="#_1-文件" aria-hidden="true">#</a> 1. 文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 忽略 所有 a.txt 文件</span>
a.txt
<span class="token comment"># 仅忽略根目录下的 a.txt 文件</span>
/a.txt
<span class="token comment"># 忽略 config 目录下的 secret.json</span>
config/secret.json
<span class="token comment"># 忽略 所有的 .env 结尾的文件</span>
*.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-目录" tabindex="-1"><a class="header-anchor" href="#_2-目录" aria-hidden="true">#</a> 2. 目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 忽略 node_modules 目录</span>
node_modules/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-取反" tabindex="-1"><a class="header-anchor" href="#_3-取反" aria-hidden="true">#</a> 3. 取反</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 跟踪 public 目录下的 .env 文件</span>
<span class="token operator">!</span>public/.env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-组合" tabindex="-1"><a class="header-anchor" href="#_4-组合" aria-hidden="true">#</a> 4. 组合</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 忽略 docs 下的所有 .md 文件</span>
docs/*.md <span class="token comment"># 这是错误的，因为不能忽略 \`docs/git/\` 目录下的文件</span>
docs/**/*.md <span class="token comment"># 正确结果</span>

<span class="token comment"># 忽略以 .a 、.b 或 .c 结尾的文件</span>
*.<span class="token punctuation">[</span>abc<span class="token punctuation">]</span> <span class="token comment"># 正确</span>
*.<span class="token punctuation">[</span>a-c<span class="token punctuation">]</span> <span class="token comment"># 也正确</span>

<span class="token comment"># 忽略 docs 下的除 secret 命名的所有文件</span>
docs/
<span class="token operator">!</span>docs/secret.*

<span class="token comment">## 忽略 src 下的所有 index.js 文件</span>
src/**/index.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="规则不生效" tabindex="-1"><a class="header-anchor" href="#规则不生效" aria-hidden="true">#</a> 规则不生效</h2><p><code>.gitignore</code> 指定的是未跟踪文件，已经跟踪的（tracked）不受影响。</p><p>解决方法就是清除本地缓存再提交：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span>

<span class="token comment"># 示例 -- 取消某个文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">--cached</span> a.txt
<span class="token comment"># 示例 -- 取消某个文件夹</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> a/
<span class="token comment"># 示例 -- 取消所有文件</span>
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>`,17),b=c('<blockquote><p>以rider为例,通过界面可以设置哪些文件进行管理排除，简直不要太方便。</p></blockquote><figure><img src="'+m+'" alt="ide.png" tabindex="0" loading="lazy"><figcaption>ide.png</figcaption></figure><blockquote><p>并非凭空排除，依然使用<code>.gitignore</code></p></blockquote><figure><img src="'+u+'" alt="idegitignore.png" tabindex="0" loading="lazy"><figcaption>idegitignore.png</figcaption></figure><h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>',5),g={href:"https://www.jetbrains.com/zh-cn/rider/",target:"_blank",rel:"noopener noreferrer"};function k(_,f){const d=n("chatmessage"),t=n("RouterLink"),l=n("ExternalLinkIcon");return r(),p("div",null,[h,a(d,{avatar:"../../assets/emoji/blzt.png",avatarWidth:40},{default:i(()=>[e(" 人生苦短，用IDE吧。 ")]),_:1}),b,s("p",null,[e("如果你阅读本文有点吃力，或者对其中的git操作不太清楚，我强烈建议你看看我写的git基本操作篇。🤦‍♂️ "),a(t,{to:"/tools/git/"},{default:i(()=>[e("1.git基本操作")]),_:1})]),s("p",null,[s("a",g,[e("2.Rider"),a(l)])])])}const j=o(v,[["render",k],["__file","1-gitignore.html.vue"]]);export{j as default};
