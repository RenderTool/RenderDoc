import{_ as i,r as c,o as l,c as o,d as e,w as t,a as s,b as n,e as p}from"./app-3dcb82b3.js";const u={},d=s("h3",{id:"内联函数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#内联函数","aria-hidden":"true"},"#"),n(" 内联函数")],-1),r=s("br",null,null,-1),k=p(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">// 定义内联函数</span>
<span class="token keyword">inline</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token comment">// 调用内联函数</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Result: &quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内联命名空间" tabindex="-1"><a class="header-anchor" href="#内联命名空间" aria-hidden="true">#</a> 内联命名空间</h3>`,2),v=s("ol",null,[s("li",null,[n("编译器会将使用 "),s("code",null,"inline"),n(" 关键字修饰命名空间内的函数、类导出到所在的"),s("span",{style:{color:"#c0392b"}},"上一层"),n("父空间中。"),s("br")]),s("li",null,[n("镶嵌几个"),s("code",null,"inline"),n("就移动几层。")])],-1),m=p(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">namespace</span> ParentNamespace
<span class="token punctuation">{</span>
	 <span class="token keyword">namespace</span> ChildNamespace
    <span class="token punctuation">{</span>
		<span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace2
   		<span class="token punctuation">{</span>
			<span class="token keyword">class</span> <span class="token class-name">TestClass</span>
			<span class="token punctuation">{</span>
			<span class="token keyword">public</span><span class="token operator">:</span>
				<span class="token keyword">void</span> <span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">{</span>
					std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;world&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>	
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 正确传统作用域解析</span>
    ParentNamespace<span class="token double-colon punctuation">::</span>ChildNamespace<span class="token double-colon punctuation">::</span>ChildNamespace2<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 正确 inline将ChildNamespace2内函数 移到 ChildNamespace</span>
	ParentNamespace<span class="token double-colon punctuation">::</span>ChildNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 错误 inline 只移动一层，即儿子变爸爸，不变爷爷。</span>
	ParentNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),b=p(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">namespace</span> ParentNamespace
<span class="token punctuation">{</span>
	 <span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace
    <span class="token punctuation">{</span>
		<span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace2
   		<span class="token punctuation">{</span>
			<span class="token keyword">class</span> <span class="token class-name">TestClass</span>
			<span class="token punctuation">{</span>
			<span class="token keyword">public</span><span class="token operator">:</span>
				<span class="token keyword">void</span> <span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
				<span class="token punctuation">{</span>
					std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;world&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>	
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 正确传统作用域解析</span>
    ParentNamespace<span class="token double-colon punctuation">::</span>ChildNamespace<span class="token double-colon punctuation">::</span>ChildNamespace2<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 正确 inline将ChildNamespace2内函数 移到 ChildNamespace</span>
	ParentNamespace<span class="token double-colon punctuation">::</span>ChildNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 正确 两层inline，函数被提了两次。</span>
	ParentNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),h=p(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">namespace</span> ParentNamespace
<span class="token punctuation">{</span>
    <span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace
    <span class="token punctuation">{</span>
        <span class="token keyword">class</span> <span class="token class-name">TestClass</span>
        <span class="token punctuation">{</span>
        <span class="token keyword">public</span><span class="token operator">:</span>
            <span class="token keyword">void</span> <span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>

        <span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace2
        <span class="token punctuation">{</span>
            <span class="token keyword">class</span> <span class="token class-name">TestClass</span> <span class="token comment">// 使用不同的类名</span>
            <span class="token punctuation">{</span>
            <span class="token keyword">public</span><span class="token operator">:</span>
                <span class="token keyword">void</span> <span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;world&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>

    ParentNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//错误inline后出现同名class导致二义性</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(w,g){const a=c("chatmessage");return l(),o("div",null,[e(a,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:t(()=>[n(" 内联函数（inline functions）是在C++中用于提高程序性能的一种手段。 ")]),_:1}),d,e(a,{avatar:"../../../assets/emoji/bqb (6).png",avatarWidth:40},{default:t(()=>[n(" 使用 inline 关键字，编译器会尝试在调用处直接展开函数的代码，而不是生成函数调用的指令。"),r,n(" 这可以减少函数调用的开销，特别适用于简单的、频繁调用的小函数。 ")]),_:1}),k,e(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:t(()=>[v]),_:1}),e(a,{avatar:"../../../assets/emoji/bqb (6).png",avatarWidth:40},{default:t(()=>[n(" inline将ChildNamespace2内函数 移到 ChildNamespace ")]),_:1}),m,e(a,{avatar:"../../../assets/emoji/bqb (6).png",avatarWidth:40},{default:t(()=>[n(" 镶嵌几个inline就移动几层，注意看第五行的变化 ")]),_:1}),b,e(a,{avatar:"../../../assets/emoji/hh.png",avatarWidth:40},{default:t(()=>[n(" 但需要注意避免滥，像下面这种情况，外层存在同名类就会导致编译器报错（二义性）。 ")]),_:1}),h])}const f=i(u,[["render",y],["__file","2-Keywords inline.html.vue"]]);export{f as default};
