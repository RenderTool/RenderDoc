"use strict";(self.webpackChunkrenderdoc=self.webpackChunkrenderdoc||[]).push([[5600],{20260:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>u,data:()=>d});var t=a(20641);const e=a.p+"assets/img/redblack.36877ae4.png",p=(0,t.Lk)("h3",{id:"set-multiset",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#set-multiset"},[(0,t.Lk)("span",null,"Set/Multiset")])],-1),c=(0,t.Fv)('<p>这两者的主要区别在于 <code>std::set</code> 中不允许重复的元素，而 <code>std::multiset</code> 允许重复的元素。</p><h3 id="std-set-定义和概念" tabindex="-1"><a class="header-anchor" href="#std-set-定义和概念"><span><code>std::set</code> 定义和概念：</span></a></h3><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义：</span></a></h4><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;set&gt;</span></span>\n\nstd<span class="token double-colon punctuation">::</span>set<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> mySet<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>T</code> 是集合中元素的类型。</li></ul><h4 id="主要操作" tabindex="-1"><a class="header-anchor" href="#主要操作"><span>主要操作：</span></a></h4><ol><li><p><strong>insert()：</strong> 插入元素到集合中。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>mySet<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>erase()：</strong> 移除集合中的元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>mySet<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>find()：</strong> 查找元素在集合中的位置。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">auto</span> it <span class="token operator">=</span> mySet<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>it <span class="token operator">!=</span> mySet<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 元素找到</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>size()：</strong> 返回集合中元素的个数。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>size_t setSize <span class="token operator">=</span> mySet<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>empty()：</strong> 检查集合是否为空。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>mySet<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 集合为空</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>begin() 和 end()：</strong> 返回指向集合开头和结尾的迭代器，可用于遍历集合。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">auto</span> it <span class="token operator">=</span> mySet<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span>it <span class="token operator">!=</span> mySet<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 处理 *it</span>\n    <span class="token operator">++</span>it<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="std-multiset-定义和概念" tabindex="-1"><a class="header-anchor" href="#std-multiset-定义和概念"><span><code>std::multiset</code> 定义和概念：</span></a></h3><h4 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1"><span>定义：</span></a></h4><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;set&gt;</span></span>\n\nstd<span class="token double-colon punctuation">::</span>multiset<span class="token operator">&lt;</span>T<span class="token operator">&gt;</span> myMultiset<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>T</code> 是多重集合中元素的类型。</li></ul><h4 id="主要操作-1" tabindex="-1"><a class="header-anchor" href="#主要操作-1"><span>主要操作：</span></a></h4><p><code>std::multiset</code> 提供的操作与 <code>std::set</code> 类似，但不同之处在于 <code>std::multiset</code> 允许元素的重复插入，且 <code>erase()</code> 可以一次性删除所有特定值的元素。</p><ol><li><p><strong>insert()：</strong> 插入元素到多重集合中。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>myMultiset<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>erase()：</strong> 移除多重集合中的元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>myMultiset<span class="token punctuation">.</span><span class="token function">erase</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>equal_range()：</strong> 返回指定值的元素范围。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">auto</span> range <span class="token operator">=</span> myMultiset<span class="token punctuation">.</span><span class="token function">equal_range</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// range.first 是范围的起始迭代器</span>\n<span class="token comment">// range.second 是范围的结束迭代器</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>count()：</strong> 返回指定值在多重集合中出现的次数。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>size_t count <span class="token operator">=</span> myMultiset<span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>size()：</strong> 返回多重集合中元素的个数。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>size_t multisetSize <span class="token operator">=</span> myMultiset<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>empty()：</strong> 检查多重集合是否为空。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>myMultiset<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 多重集合为空</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>begin() 和 end()：</strong> 返回指向多重集合开头和结尾的迭代器，可用于遍历多重集合。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">auto</span> it <span class="token operator">=</span> myMultiset<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span> <span class="token punctuation">(</span>it <span class="token operator">!=</span> myMultiset<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 处理 *it</span>\n    <span class="token operator">++</span>it<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="二叉树-红黑树" tabindex="-1"><a class="header-anchor" href="#二叉树-红黑树"><span>二叉树|红黑树</span></a></h3><blockquote><p>本章不做介绍，具体收录在数据结构算法中</p></blockquote><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="自动排序" tabindex="-1"><a class="header-anchor" href="#自动排序"><span>自动排序</span></a></h3>',18),i=(0,t.Fv)('<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;set&gt;</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;string&gt;</span></span>\n\n<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n   set<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> myset<span class="token punctuation">;</span>\n   myset<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;你&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   myset<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;好&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   myset<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token string">&quot;ya&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token keyword">for</span><span class="token punctuation">(</span>set<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token double-colon punctuation">::</span>iterator it <span class="token operator">=</span> myset<span class="token punctuation">.</span><span class="token function">begin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it <span class="token operator">!=</span> myset<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> it<span class="token operator">++</span><span class="token punctuation">)</span>\n      <span class="token punctuation">{</span>\n      std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>it<span class="token punctuation">;</span>\n      <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),o=(0,t.Lk)("br",null,null,-1),l={},u=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,t.g2)("chatmessage");return(0,t.uX)(),(0,t.CE)("div",null,[p,(0,t.bF)(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" Set/Multiset关联式容器，底层是二叉树（红黑树），会自动排序。 ")])),_:1}),c,(0,t.bF)(a,{avatar:"../../../assets/emoji/new1.png",avatarWidth:40},{default:(0,t.k6)((()=>[(0,t.eW)(" 我有个问题！你说会自动排序，那么我加入字符串阁下如何也应对? ")])),_:1}),i,(0,t.bF)(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" 对于英文字符串，比较运算符默认按照字典序进行排序（即按照 ASCII 码顺序）。"),o,(0,t.eW)(" 对于中文及其他字符串，C++ 的比较运算符会根据字符串的字节顺序来进行比较。 ")])),_:1})])}]]),d=JSON.parse('{"path":"/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/9-Set.html","title":"c++9.Set/Multiset容器","lang":"zh-CN","frontmatter":{"title":"c++9.Set/Multiset容器","order":9,"category":["c++"],"description":"Set/Multiset 这两者的主要区别在于 std::set 中不允许重复的元素，而 std::multiset 允许重复的元素。 std::set 定义和概念： 定义： T 是集合中元素的类型。 主要操作： insert()： 插入元素到集合中。 erase()： 移除集合中的元素。 find()： 查找元素在集合中的位置。 size()： 返回...","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/language/cpp/stl_%E6%A0%87%E5%87%86%E6%A8%A1%E6%9D%BF_/9-Set.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"c++9.Set/Multiset容器"}],["meta",{"property":"og:description","content":"Set/Multiset 这两者的主要区别在于 std::set 中不允许重复的元素，而 std::multiset 允许重复的元素。 std::set 定义和概念： 定义： T 是集合中元素的类型。 主要操作： insert()： 插入元素到集合中。 erase()： 移除集合中的元素。 find()： 查找元素在集合中的位置。 size()： 返回..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"c++9.Set/Multiset容器\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"Set/Multiset","slug":"set-multiset","link":"#set-multiset","children":[]},{"level":3,"title":"std::set 定义和概念：","slug":"std-set-定义和概念","link":"#std-set-定义和概念","children":[]},{"level":3,"title":"std::multiset 定义和概念：","slug":"std-multiset-定义和概念","link":"#std-multiset-定义和概念","children":[]},{"level":3,"title":"二叉树|红黑树","slug":"二叉树-红黑树","link":"#二叉树-红黑树","children":[]},{"level":3,"title":"自动排序","slug":"自动排序","link":"#自动排序","children":[]}],"git":{"createdTime":1703335047000,"updatedTime":1704233233000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":2}]},"readingTime":{"minutes":2.17,"words":650},"filePathRelative":"language/cpp/stl[标准模板]/9-Set.md","localizedDate":"2023年12月23日","excerpt":"<h3>Set/Multiset</h3>\\n\\n<p>这两者的主要区别在于 <code>std::set</code> 中不允许重复的元素，而 <code>std::multiset</code> 允许重复的元素。</p>\\n<h3><code>std::set</code> 定义和概念：</h3>\\n<h4>定义：</h4>\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token macro property\\"><span class=\\"token directive-hash\\">#</span><span class=\\"token directive keyword\\">include</span> <span class=\\"token string\\">&lt;set&gt;</span></span>\\n\\nstd<span class=\\"token double-colon punctuation\\">::</span>set<span class=\\"token operator\\">&lt;</span>T<span class=\\"token operator\\">&gt;</span> mySet<span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}')}}]);