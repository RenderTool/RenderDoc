import{_ as o,r as i,o as c,c as d,d as t,w as s,a as e,b as a,e as l}from"./app-89c110f4.js";const p="/RenderDoc/assets/errortip-f00f374c.png",h="/RenderDoc/assets/retarget-448e0d6e.jpg",_="/RenderDoc/assets/nativeParent-d02c6b07.jpg",g="/RenderDoc/assets/targeterror-1bc57514.jpg",u={},f=e("figure",null,[e("img",{src:p,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),m=e("h2",{id:"问题复现",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#问题复现","aria-hidden":"true"},"#"),a(" 问题复现")],-1),b=l('<figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路" aria-hidden="true">#</a> 解决思路</h2><h3 id="_1-defaultengine-game-ini添加对应类的重定向" tabindex="-1"><a class="header-anchor" href="#_1-defaultengine-game-ini添加对应类的重定向" aria-hidden="true">#</a> 1. DefaultEngine/Game.ini添加对应类的重定向</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">CoreRedirects</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">+ClassRedirects</span><span class="token punctuation">=</span><span class="token value attr-value">(OldName=&quot;/Script/Lyra.GameUIPolicy(旧项目名.类)&quot;,NewName=&quot;/Script/NEW.GameUIPolicy(新项目名.类)&quot;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-直接打开资源文件手动修改-不推荐" tabindex="-1"><a class="header-anchor" href="#_2-直接打开资源文件手动修改-不推荐" aria-hidden="true">#</a> 2. <s>直接打开资源文件手动修改</s> [不推荐]</h3><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',6),v=e("figure",null,[e("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),x=e("h2",{id:"参考链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),a(" 参考链接")],-1),k={href:"https://blog.csdn.net/tianxiaojie_blog/article/details/129405380",target:"_blank",rel:"noopener noreferrer"};function C(j,y){const n=i("ChatMessage"),r=i("ExternalLinkIcon");return c(),d("div",null,[t(n,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:s(()=>[a(" 项目迁移后发现有一些原本C++派生蓝图找不到父类。 ")]),_:1}),f,m,t(n,{avatar:"../../assets/emoji/kclr.png",avatarWidth:40},{default:s(()=>[a(" 迁移过来的项目C++派生的蓝图依然是之前项目的。 ")]),_:1}),b,t(n,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:s(()=>[a(" 确认5.2会出问题 ")]),_:1}),v,x,e("p",null,[e("a",k,[a("csdn-tianxiaojie_blog"),t(r)])])])}const R=o(u,[["render",C],["__file","ClassRedirects.html.vue"]]);export{R as default};