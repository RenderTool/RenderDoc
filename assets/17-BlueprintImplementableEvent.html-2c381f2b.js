import{_ as t,r as p,o,c,d as s,w as a,e as l,b as e}from"./app-6eaee12a.js";const i={},u=l(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UCLASS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">YOURPROJECT_API</span> UYourClass <span class="token operator">:</span> <span class="token keyword">public</span> UObject
<span class="token punctuation">{</span>
    <span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 使用 UFUNCTION(BlueprintImplementableEvent) 声明蓝图实现的函数</span>
    <span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintImplementableEvent<span class="token punctuation">,</span> Category <span class="token operator">=</span> <span class="token string">&quot;YourCategory&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">void</span> <span class="token function">YourBlueprintFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 在你的类的cpp文件中可以提供一个默认实现</span>
<span class="token keyword">void</span> <span class="token class-name">UYourClass</span><span class="token double-colon punctuation">::</span><span class="token function">YourBlueprintFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">UE_LOG</span><span class="token punctuation">(</span>LogTemp<span class="token punctuation">,</span> Warning<span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;Default implementation in C++&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,k){const n=p("chatmessage");return o(),c("div",null,[s(n,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:a(()=>[e(" Baba!C++中的函数怎么声明让蓝图做具体实现? ")]),_:1}),s(n,{avatar:"../../assets/emoji/hx.png",avatarWidth:40,alignLeft:""},{default:a(()=>[e(" BlueprintImplementableEvent ")]),_:1}),u])}const m=t(i,[["render",r],["__file","17-BlueprintImplementableEvent.html.vue"]]);export{m as default};
