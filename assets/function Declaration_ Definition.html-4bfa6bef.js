import{_ as p,r as c,o as i,c as o,d as a,w as e,e as l,a as n,b as t}from"./app-89c110f4.js";const d="/RenderDoc/assets/todefefine-63a5c2d6.png",r={},u=l(`<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><blockquote><p>在C++中，函数声明是为了告诉编译器函数的存在、名称和参数列表，而函数定义则提供了函数的具体实现。</p></blockquote><p><strong>函数声明（Function Declaration）:</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 函数声明，告诉编译器这个函数存在，但并没有提供具体实现</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>add</code> 函数被声明，但没有提供具体的实现。这样的声明通常放在头文件中，以便在其他文件中使用该函数。</p><p><strong>函数定义（Function Definition）:</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 函数定义，提供了函数的具体实现</span>
<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h2><h3 id="头文件和源文件分离" tabindex="-1"><a class="header-anchor" href="#头文件和源文件分离" aria-hidden="true">#</a> 头文件和源文件分离</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 头文件中的函数声明</span>
<span class="token comment">// myfunctions.h</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">MYFUNCTIONS_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MYFUNCTIONS_H</span></span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span>  <span class="token comment">// MYFUNCTIONS_H</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 源文件中的函数定义</span>
<span class="token comment">// myfunctions.cpp</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;myfunctions.h&quot;</span></span>

<span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并" tabindex="-1"><a class="header-anchor" href="#合并" aria-hidden="true">#</a> 合并</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 主程序文件中的使用函数</span>
<span class="token comment">// main.cpp</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;myfunctions.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用声明的函数</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 输出结果</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Result: &quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>带有{ }的就是定义，不带的就是声明。</p>`,15),k=n("figure",null,[n("img",{src:d,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1);function v(m,b){const s=c("ChatMessage");return i(),o("div",null,[a(s,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40},{default:e(()=>[t(" 函数声明和定义 ")]),_:1}),u,a(s,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[t(" 这也是IDE中为什么点击函数声明时会弹窗前往定义。 ")]),_:1}),k])}const g=p(r,[["render",v],["__file","function Declaration_ Definition.html.vue"]]);export{g as default};