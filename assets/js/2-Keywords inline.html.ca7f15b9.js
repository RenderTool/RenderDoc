"use strict";(self.webpackChunkrenderdoc=self.webpackChunkrenderdoc||[]).push([[4780],{38145:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>r,data:()=>k});var e=a(20641);const t=(0,e.Lk)("h3",{id:"内联函数",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#内联函数"},[(0,e.Lk)("span",null,"内联函数")])],-1),p=(0,e.Lk)("br",null,null,-1),c=(0,e.Fv)('<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\n\n<span class="token comment">// 定义内联函数</span>\n<span class="token keyword">inline</span> <span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> \n<span class="token punctuation">{</span>\n    <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 调用内联函数</span>\n    <span class="token keyword">int</span> result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Result: &quot;</span> <span class="token operator">&lt;&lt;</span> result <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="内联命名空间" tabindex="-1"><a class="header-anchor" href="#内联命名空间"><span>内联命名空间</span></a></h3>',2),l=(0,e.Lk)("ol",null,[(0,e.Lk)("li",null,[(0,e.eW)("编译器会将使用 "),(0,e.Lk)("code",null,"inline"),(0,e.eW)(" 关键字修饰命名空间内的函数、类导出到所在的"),(0,e.Lk)("span",{style:{color:"#c0392b"}},"上一层"),(0,e.eW)("父空间中。"),(0,e.Lk)("br")]),(0,e.Lk)("li",null,[(0,e.eW)("镶嵌几个"),(0,e.Lk)("code",null,"inline"),(0,e.eW)("就移动几层。")])],-1),o=(0,e.Fv)('<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\n\n<span class="token keyword">namespace</span> ParentNamespace\n<span class="token punctuation">{</span>\n\t <span class="token keyword">namespace</span> ChildNamespace\n    <span class="token punctuation">{</span>\n\t\t<span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace2\n   \t\t<span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">class</span> <span class="token class-name">TestClass</span>\n\t\t\t<span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">public</span><span class="token operator">:</span>\n\t\t\t\t<span class="token keyword">void</span> <span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\tstd<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;world&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\t\n<span class="token punctuation">}</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// 正确传统作用域解析</span>\n    ParentNamespace<span class="token double-colon punctuation">::</span>ChildNamespace<span class="token double-colon punctuation">::</span>ChildNamespace2<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 正确 inline将ChildNamespace2内函数 移到 ChildNamespace</span>\n\tParentNamespace<span class="token double-colon punctuation">::</span>ChildNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 错误 inline 只移动一层，即儿子变爸爸，不变爷爷。</span>\n\tParentNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),i=(0,e.Fv)('<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\n\n<span class="token keyword">namespace</span> ParentNamespace\n<span class="token punctuation">{</span>\n\t <span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace\n    <span class="token punctuation">{</span>\n\t\t<span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace2\n   \t\t<span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">class</span> <span class="token class-name">TestClass</span>\n\t\t\t<span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">public</span><span class="token operator">:</span>\n\t\t\t\t<span class="token keyword">void</span> <span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\tstd<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;world&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n\t\t\t\t<span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\t\n<span class="token punctuation">}</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// 正确传统作用域解析</span>\n    ParentNamespace<span class="token double-colon punctuation">::</span>ChildNamespace<span class="token double-colon punctuation">::</span>ChildNamespace2<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 正确 inline将ChildNamespace2内函数 移到 ChildNamespace</span>\n\tParentNamespace<span class="token double-colon punctuation">::</span>ChildNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 正确 两层inline，函数被提了两次。</span>\n\tParentNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),u=(0,e.Fv)('<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\n\n<span class="token keyword">namespace</span> ParentNamespace\n<span class="token punctuation">{</span>\n    <span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace\n    <span class="token punctuation">{</span>\n        <span class="token keyword">class</span> <span class="token class-name">TestClass</span>\n        <span class="token punctuation">{</span>\n        <span class="token keyword">public</span><span class="token operator">:</span>\n            <span class="token keyword">void</span> <span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;hello&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n        <span class="token keyword">inline</span> <span class="token keyword">namespace</span> ChildNamespace2\n        <span class="token punctuation">{</span>\n            <span class="token keyword">class</span> <span class="token class-name">TestClass</span> <span class="token comment">// 使用不同的类名</span>\n            <span class="token punctuation">{</span>\n            <span class="token keyword">public</span><span class="token operator">:</span>\n                <span class="token keyword">void</span> <span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n                <span class="token punctuation">{</span>\n                    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;world&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\n    ParentNamespace<span class="token double-colon punctuation">::</span>TestClass<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">.</span><span class="token function">TestFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//错误inline后出现同名class导致二义性</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),d={},r=(0,a(66262).A)(d,[["render",function(n,s){const a=(0,e.g2)("chatmessage");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.bF)(a,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:(0,e.k6)((()=>[(0,e.eW)(" 内联函数（inline functions）是在C++中用于提高程序性能的一种手段。 ")])),_:1}),t,(0,e.bF)(a,{avatar:"../../../assets/emoji/bqb (6).png",avatarWidth:40},{default:(0,e.k6)((()=>[(0,e.eW)(" 使用 inline 关键字，编译器会尝试在调用处直接展开函数的代码，而不是生成函数调用的指令。"),p,(0,e.eW)(" 这可以减少函数调用的开销，特别适用于简单的、频繁调用的小函数。 ")])),_:1}),c,(0,e.bF)(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:(0,e.k6)((()=>[l])),_:1}),(0,e.bF)(a,{avatar:"../../../assets/emoji/bqb (6).png",avatarWidth:40},{default:(0,e.k6)((()=>[(0,e.eW)(" inline将ChildNamespace2内函数 移到 ChildNamespace ")])),_:1}),o,(0,e.bF)(a,{avatar:"../../../assets/emoji/bqb (6).png",avatarWidth:40},{default:(0,e.k6)((()=>[(0,e.eW)(" 镶嵌几个inline就移动几层，注意看第五行的变化 ")])),_:1}),i,(0,e.bF)(a,{avatar:"../../../assets/emoji/hh.png",avatarWidth:40},{default:(0,e.k6)((()=>[(0,e.eW)(" 但需要注意避免滥，像下面这种情况，外层存在同名类就会导致编译器报错（二义性）。 ")])),_:1}),u])}]]),k=JSON.parse('{"path":"/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/2-Keywords%20inline.html","title":"c++2.inline[内联]","lang":"zh-CN","frontmatter":{"title":"c++2.inline[内联]","order":2,"category":["c++"],"description":"内联函数 内联命名空间","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/language/cpp/keywords_%E5%85%B3%E9%94%AE%E5%AD%97_/2-Keywords%20inline.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"c++2.inline[内联]"}],["meta",{"property":"og:description","content":"内联函数 内联命名空间"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++2.inline[内联]\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"内联函数","slug":"内联函数","link":"#内联函数","children":[]},{"level":3,"title":"内联命名空间","slug":"内联命名空间","link":"#内联命名空间","children":[]}],"git":{"createdTime":1700738130000,"updatedTime":1704233233000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":1},{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":528},"filePathRelative":"language/cpp/keywords[关键字]/2-Keywords inline.md","localizedDate":"2023年11月23日","excerpt":"\\n<h3>内联函数</h3>\\n\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;iostream&gt;</span></span>\\n\\n<span class=\\"token comment\\">// 定义内联函数</span>\\n<span class=\\"token keyword\\">inline</span> <span class=\\"token keyword\\">int</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">int</span> a<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">int</span> b<span class=\\"token punctuation\\">)</span> \\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">return</span> a <span class=\\"token operator\\">+</span> b<span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n<span class=\\"token keyword\\">int</span> <span class=\\"token function\\">main</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> \\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token keyword\\">int</span> x <span class=\\"token operator\\">=</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token keyword\\">int</span> y <span class=\\"token operator\\">=</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token comment\\">// 调用内联函数</span>\\n    <span class=\\"token keyword\\">int</span> result <span class=\\"token operator\\">=</span> <span class=\\"token function\\">add</span><span class=\\"token punctuation\\">(</span>x<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n    std<span class=\\"token double-colon punctuation\\">::</span>cout <span class=\\"token operator\\">&lt;&lt;</span> <span class=\\"token string\\">\\"Result: \\"</span> <span class=\\"token operator\\">&lt;&lt;</span> result <span class=\\"token operator\\">&lt;&lt;</span> std<span class=\\"token double-colon punctuation\\">::</span>endl<span class=\\"token punctuation\\">;</span>\\n\\n    <span class=\\"token keyword\\">return</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n\\n</code></pre></div>","autoDesc":true}')}}]);