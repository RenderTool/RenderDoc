import{_ as u}from"./classadd-1a0a77d4.js";import{_ as r,r as l,o as d,c as m,d as c,w as a,e as o,b as s,a as n}from"./app-a94ef497.js";const k={},v=o('<h3 id="常规" tabindex="-1"><a class="header-anchor" href="#常规" aria-hidden="true">#</a> 常规</h3><ol><li>Rider添加一个类</li></ol><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>添加代码</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UENUM</span><span class="token punctuation">(</span>Meta <span class="token operator">=</span> <span class="token punctuation">(</span>Bitflags<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">enum</span> <span class="token keyword">class</span> <span class="token class-name">EColorBits</span>
<span class="token punctuation">{</span>
    ECB_Red<span class="token punctuation">,</span>
    ECB_Green<span class="token punctuation">,</span>
    ECB_Blue
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明前置" tabindex="-1"><a class="header-anchor" href="#声明前置" aria-hidden="true">#</a> 声明前置</h3>`,6),b=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"enum"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"EColorBits"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token base-clause"},[n("span",{class:"token class-name"},"uint8")]),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),h=n("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[n("pre",{class:"language-cpp"},[n("code",null,[n("span",{class:"token keyword"},"enum"),s(),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"EColorBits"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token base-clause"},[n("span",{class:"token class-name"},"uint8")]),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    ECB_Red`),n("span",{class:"token punctuation"},","),s(`
    ECB_Green`),n("span",{class:"token punctuation"},","),s(`
    ECB_Blue
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=o(`<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>C++ 中的枚举类型并不是严格类型安全的，而且它们的大小是由编译器决定的，因此无法直接用作成员变量的类型。 在UE中需要用对应的模板函数声明，有点像TObjcetPtr的味道</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">//带命名空间</span>
<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditAnywhere<span class="token punctuation">,</span> BlueprintReadWrite<span class="token punctuation">,</span>Category <span class="token operator">=</span> <span class="token string">&quot;ViewLock&quot;</span><span class="token punctuation">)</span>
TEnumAsByte<span class="token operator">&lt;</span> EDrawDebugTrace<span class="token double-colon punctuation">::</span>Type<span class="token operator">&gt;</span> DebugType<span class="token punctuation">;</span>

<span class="token comment">//不带UPROPERTY的普通枚举</span>
 EColorBits ColorType<span class="token punctuation">;</span>
 
<span class="token comment">//带UPROPERTY，不带命名空间</span>
<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditAnywhere<span class="token punctuation">,</span> BlueprintReadWrite<span class="token punctuation">,</span>Category <span class="token operator">=</span> <span class="token string">&quot;ViewLock&quot;</span><span class="token punctuation">)</span>
TEnumAsByte<span class="token operator">&lt;</span>EViewLockType<span class="token operator">&gt;</span> ViewLockType<span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function _(E,f){const i=l("chatmessage"),p=l("CodeTabs");return d(),m("div",null,[c(i,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[s(" UEC++中怎么写Enum ")]),_:1}),c(i,{avatar:"../../assets/emoji/new9.png",avatarWidth:40,alignLeft:""},{default:a(()=>[s(" 安排! ")]),_:1}),v,c(p,{id:"26",data:[{id:".h"},{id:".cpp"}],"tab-id":"language"},{title0:a(({value:e,isActive:t})=>[s(".h")]),title1:a(({value:e,isActive:t})=>[s(".cpp")]),tab0:a(({value:e,isActive:t})=>[b]),tab1:a(({value:e,isActive:t})=>[h]),_:1},8,["data"]),g])}const y=r(k,[["render",_],["__file","6-UEnum.html.vue"]]);export{y as default};