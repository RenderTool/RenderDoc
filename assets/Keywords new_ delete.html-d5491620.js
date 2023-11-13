import{_ as c,r as o,o as l,c as p,d as e,w as t,a as n,b as s,e as i}from"./app-2462d664.js";const d={},r=n("h2",{id:"隐藏式new和delete",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#隐藏式new和delete","aria-hidden":"true"},"#"),s(" 隐藏式new和delete")],-1),u=n("p",null,"早在一开始接触C++变量的时候就已经知道变量定义是在内存中开辟空间。 这里的内存中其实就是我们之前提过的4大区中的栈（stack）。而stack是系统自动管理的，所以不需要new和delete。",-1),v=i(`<ol><li><p><strong>基本数据类型：</strong> 对于基本数据类型（例如 <code>int</code>, <code>float</code>, <code>char</code>），它们的定义通常不涉及显式的 <code>new</code> 操作符。这些变量通常是在栈上分配的，而不是在堆上。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>  <span class="token comment">// 在栈上分配内存，不需要显式的 new</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>自定义类型（类对象）：</strong> 对于自定义类型，如果该类型的对象通过 <code>new</code> 关键字进行动态分配，则需要显式使用 <code>new</code>。例如：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 构造函数</span>
    <span class="token punctuation">}</span>

    <span class="token operator">~</span><span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 析构函数</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 显式使用 new 进行动态分配</span>
    MyClass<span class="token operator">*</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> MyClass<span class="token punctuation">;</span>

    <span class="token comment">// ...</span>

    <span class="token comment">// 显式使用 delete 进行释放</span>
    <span class="token keyword">delete</span> obj<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1);function m(k,b){const a=o("ChatMessage");return l(),p("div",null,[e(a,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40},{default:t(()=>[s(" `new`和`delete`是两个C++关键字用于动态分配和释放内存。 ")]),_:1}),r,u,e(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40},{default:t(()=>[s(" 什么你还不清楚内存四区?巧了我也不会！你可以康康我之前的文章。 ")]),_:1}),v])}const w=c(d,[["render",m],["__file","Keywords new_ delete.html.vue"]]);export{w as default};
