import{_ as n,r as s,o as e,c as p,d as o,w as t,e as c,b as l}from"./app-94ffcd11.js";const r={},i=c(`<h2 id="左值和右值" tabindex="-1"><a class="header-anchor" href="#左值和右值" aria-hidden="true">#</a> 左值和右值</h2><h3 id="直觉判断" tabindex="-1"><a class="header-anchor" href="#直觉判断" aria-hidden="true">#</a> 直觉判断</h3><p>C++98已经出现，字面理解表达式等号左边的值为左值，右边的右值。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//a是左值，1是右值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是，如果按表达式等号左右标准的方式来判断会出现一些意外：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//按照之前的判断标准a是左值，1是右值</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span><span class="token comment">//按照之前的判断标准b是左值，a是右值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>行1<code>a</code>是左值，在行2<code>a</code>又变成了右值。</p><h3 id="标准判断" tabindex="-1"><a class="header-anchor" href="#标准判断" aria-hidden="true">#</a> 标准判断</h3><p>与表达式的值分类和赋值有关。</p><ol><li><p><strong>左值 (Lvalue):</strong></p><ul><li><strong>定义：</strong> 左值是一个具有标识符的表达式，它表示一个对象或内存位置。左值可以出现在赋值语句的左边或右边。</li><li><strong>例子：</strong> 变量、数组元素、结构体成员等都是左值。</li><li><strong>性质：</strong> 左值具有持久性，它们在内存中有明确定义的位置。你可以取得左值的地址，对其进行引用，并且可以修改其值。</li></ul></li><li><p><strong>右值 (Rvalue):</strong></p><ul><li><strong>定义：</strong> 右值是一个不具有标识符的表达式，它通常是临时的、即时计算的值。右值出现在赋值语句的右边。</li><li><strong>例子：</strong> 字面常量、临时对象、表达式的计算结果等都是右值。</li><li><strong>性质：</strong> 右值通常是短暂的，它们在计算后可能就会失去意义。你不能对右值取地址，也不能修改其值。</li></ul></li></ol><p>在C++11及以后的标准中，有一个引入的重要概念叫做<strong>右值引用</strong>（Rvalue Reference）， 通过 <code>&amp;&amp;</code> 表示。右值引用允许我们对右值进行引用，并通过移动语义实现高效的资源管理，例如在移动构造函数和移动赋值运算符中。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>  <span class="token comment">// x 是左值</span>
    <span class="token keyword">int</span><span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>x<span class="token punctuation">;</span>  <span class="token comment">// &amp;x 是右值，但 ptr 是左值</span>

    <span class="token keyword">int</span><span class="token operator">&amp;</span> lvalueRef <span class="token operator">=</span> x<span class="token punctuation">;</span>  <span class="token comment">// 左值引用</span>
    <span class="token keyword">int</span><span class="token operator">&amp;&amp;</span> rvalueRef <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>  <span class="token comment">// 右值引用</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，<code>x</code> 是左值，<code>&amp;x</code> 是右值。 左值引用 <code>lvalueRef</code> 绑定到左值 <code>x</code>，而右值引用 <code>rvalueRef</code> 绑定到右值 <code>42</code>。 右值引用通常用于移动语义，提高效率。</p>`,13);function d(u,m){const a=s("chatmessage");return e(),p("div",null,[o(a,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40},{default:t(()=>[l(" 如何理解C++ 中的左值（Lvalue）和右值（Rvalue）？ ")]),_:1}),i])}const v=n(r,[["render",d],["__file","2-Lvalues and Rvalues.html.vue"]]);export{v as default};