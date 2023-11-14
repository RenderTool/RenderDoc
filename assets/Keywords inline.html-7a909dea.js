import{_ as s,r as a,o as e,c as t,d as o,w as p,e as c,b as i}from"./app-3dc94e8d.js";const l={},r=c(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><blockquote><p>使用 inline 关键字，编译器会尝试在调用处直接展开函数的代码，而不是生成函数调用的指令。<br> 这可以减少函数调用的开销，特别适用于简单的、频繁调用的小函数。</p></blockquote><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">// 定义内联函数</span>
<span class="token keyword">inline</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token comment">// 调用内联函数</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Result: &quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function d(u,k){const n=a("ChatMessage");return e(),t("div",null,[o(n,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40},{default:p(()=>[i(" 内联函数（inline functions）是在C++中用于提高程序性能的一种手段。 ")]),_:1}),r])}const m=s(l,[["render",d],["__file","Keywords inline.html.vue"]]);export{m as default};
