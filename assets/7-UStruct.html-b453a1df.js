import{_ as t}from"./classadd-1a0a77d4.js";import{_ as i,r as c,o as p,c as o,d as n,w as a,e as l,b as e}from"./app-8a846373.js";const r="/RenderDoc/assets/gftip-961516a5.png",d={},u=l('<ol><li>Rider添加一个类</li></ol><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>添加如下函数</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;CoreMinimal.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyStruct.generated.h&quot;</span></span>

<span class="token function">USTRUCT</span><span class="token punctuation">(</span>BlueprintType<span class="token punctuation">)</span>
<span class="token keyword">struct</span>  <span class="token class-name">FMyStruct</span> 
<span class="token punctuation">{</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>当然也可以继承FTableRowBase使其可以变成datatable</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">pragma</span> <span class="token expression">once</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;CoreMinimal.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span><span class="token string">&quot;Engine/Datatable.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;MyStruct.generated.h&quot;</span></span>

<span class="token function">USTRUCT</span><span class="token punctuation">(</span>BlueprintType<span class="token punctuation">)</span>
<span class="token keyword">struct</span>  <span class="token class-name">FMyStruct</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">FTableRowBase</span></span>
<span class="token punctuation">{</span>
	<span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">public</span><span class="token operator">:</span>
	
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7);function v(k,m){const s=c("chatmessage");return p(),o("div",null,[n(s,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[e(" UEC++中怎么写Struct ")]),_:1}),n(s,{avatar:"../../assets/emoji/new9.png",avatarWidth:40,alignLeft:""},{default:a(()=>[e(" 安排! ")]),_:1}),u])}const h=i(d,[["render",v],["__file","7-UStruct.html.vue"]]);export{h as default};
