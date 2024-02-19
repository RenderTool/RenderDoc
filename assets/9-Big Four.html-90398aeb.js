import{_ as s,r as a,o as t,c as p,d as o,w as e,e as c,b as l}from"./app-3ab4fc78.js";const i={},u=c(`<ol><li><p><strong>默认构造函数 (Default Constructor):</strong> 如果你没有为类定义任何构造函数，编译器将生成一个无参的默认构造函数。它用于创建对象时的初始化，例如 <code>MyClass obj;</code>。</p></li><li><p><strong>析构函数 (Destructor):</strong> 如果你没有显式定义析构函数，编译器将生成一个默认的析构函数。它用于在对象生命周期结束时进行清理工作，例如释放动态分配的资源。析构函数的名称是类名前加上波浪号 <code>~</code>，如 <code>~MyClass()</code>。</p></li><li><p><strong>拷贝构造函数 (Copy Constructor):</strong> 如果你没有定义自己的拷贝构造函数，编译器将生成一个默认的拷贝构造函数。它用于通过复制另一个对象来初始化一个新对象，例如 <code>MyClass obj1; MyClass obj2 = obj1;</code>。</p></li><li><p><strong>拷贝赋值运算符 (Copy Assignment Operator):</strong> 如果你没有定义自己的拷贝赋值运算符，编译器将生成一个默认的拷贝赋值运算符。它用于将一个对象的值复制给另一个对象，例如 <code>MyClass obj1, obj2; obj2 = obj1;</code>。</p></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;cstring&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">char</span><span class="token operator">*</span> name<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 默认构造函数</span>
    <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Default Constructor&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 析构函数</span>
    <span class="token operator">~</span><span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Destructor&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 拷贝构造函数</span>
    <span class="token function">Person</span><span class="token punctuation">(</span><span class="token keyword">const</span> Person<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Copy Constructor&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token comment">// 执行深拷贝</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>name <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token function">strlen</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token function">strcpy</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> other<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            name <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 拷贝赋值运算符</span>
    Person<span class="token operator">&amp;</span> <span class="token keyword">operator</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">const</span> Person<span class="token operator">&amp;</span> other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Copy Assignment Operator&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">!=</span> <span class="token operator">&amp;</span>other<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 执行深拷贝</span>
            <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> name<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>other<span class="token punctuation">.</span>name <span class="token operator">!=</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token function">strlen</span><span class="token punctuation">(</span>other<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token function">strcpy</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> other<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                name <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">*</span><span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 其他成员函数和操作</span>

    <span class="token comment">// 输出姓名</span>
    <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Name: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span>name <span class="token operator">?</span> name <span class="token operator">:</span> <span class="token string">&quot;N/A&quot;</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 设置姓名</span>
    <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">char</span><span class="token operator">*</span> newName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">delete</span><span class="token punctuation">[</span><span class="token punctuation">]</span> name<span class="token punctuation">;</span>
        name <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token function">strlen</span><span class="token punctuation">(</span>newName<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token function">strcpy</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> newName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用默认构造函数</span>
    Person person1<span class="token punctuation">;</span>
    person1<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用拷贝构造函数</span>
    Person person2 <span class="token operator">=</span> person1<span class="token punctuation">;</span>

    <span class="token comment">// 使用拷贝赋值运算符</span>
    Person person3<span class="token punctuation">;</span>
    person3 <span class="token operator">=</span> person1<span class="token punctuation">;</span>

    <span class="token comment">// 输出对象信息</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person 1: &quot;</span><span class="token punctuation">;</span>
    person1<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person 2: &quot;</span><span class="token punctuation">;</span>
    person2<span class="token punctuation">.</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Person 3: &quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function r(k,d){const n=a("chatmessage");return t(),p("div",null,[o(n,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[l(' 当你定义一个类时，如果没有显式提供一些特殊成员函数（特别是构造函数、析构函数、拷贝构造函数和拷贝赋值运算符）， 编译器会为该类生成一些默认的特殊成员函数。这些函数通常被称为 "Big Four"， ')]),_:1}),u])}const m=s(i,[["render",r],["__file","9-Big Four.html.vue"]]);export{m as default};
