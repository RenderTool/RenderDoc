import{_ as a,r as s,o as e,c as t,d as i,w as l,e as c,b as o}from"./app-0178eb15.js";const p={},r=c(`<h3 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路" aria-hidden="true">#</a> 解决思路</h3><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">/Script/Engine.GameEngine</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">+NetDriverDefinitions</span><span class="token punctuation">=</span><span class="token value attr-value">(DefName=&quot;GameNetDriver&quot;,DriverClassName=&quot;OnlineSubsystemSteam.SteamNetDriver&quot;,DriverClassNameFallback=&quot;OnlineSubsystemUtils.IpNetDriver&quot;)</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">OnlineSubsystem</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">DefaultPlatformService</span><span class="token punctuation">=</span><span class="token value attr-value">Steam</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">OnlineSubsystemSteam</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">bEnabled</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>
<span class="token key attr-name">SteamDevAppId</span><span class="token punctuation">=</span><span class="token value attr-value">480</span>
<span class="token comment">;这一行必须的</span>
<span class="token key attr-name">bInitServerOnClient</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">/Script/OnlineSubsystemSteam.SteamNetDriver</span><span class="token punctuation">]</span></span>
<span class="token key attr-name">NetConnectionClassName</span><span class="token punctuation">=</span><span class="token value attr-value">OnlineSubsystemSteam.SteamNetConnection</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function u(m,v){const n=s("chatmessage");return e(),t("div",null,[i(n,{avatar:"../../assets/emoji/kclr.png",avatarWidth:40},{default:l(()=>[o(" 会话创建失败，无法创建房间,一开始我还以为创建成功加入失败，后来发现是没正确配置。 ")]),_:1}),r])}const k=a(p,[["render",u],["__file","CreateSessionError.html.vue"]]);export{k as default};
