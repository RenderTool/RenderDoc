import{_ as s,r as a,o as t,c as e,d as p,w as o,e as c,b as l}from"./app-8ad7eb1f.js";const i={},u=c(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">// 函数对象类</span>
<span class="token keyword">class</span> <span class="token class-name">MultiplyBy</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MultiplyBy</span><span class="token punctuation">(</span><span class="token keyword">int</span> factor<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">factor</span><span class="token punctuation">(</span>factor<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 重载 () 运算符</span>
    <span class="token keyword">int</span> <span class="token keyword">operator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> factor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> factor<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    MultiplyBy <span class="token function">multiplyBy2</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用函数对象</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">multiplyBy2</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 相当于调用 multiplyBy2.operator()(5);</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Result: &quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function r(d,k){const n=a("chatmessage");return t(),e("div",null,[p(n,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:o(()=>[l(" 函数对象（Function Object），也称为仿函数（Functor），是C++中的一种特殊对象，它可以像函数一样被调用。 函数对象实际上是一个类的实例，该类重载了函数调用运算符 `operator()`。通过重载 `operator()`， 对象可以被当做函数来使用，提供了一种比普通函数更灵活的方式来实现函数行为。 ")]),_:1}),u])}const m=s(i,[["render",r],["__file","10-Functor.html.vue"]]);export{m as default};
