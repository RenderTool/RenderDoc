import{_ as i,r as o,o as l,c as d,d as n,w as e,a as t,b as a,e as p}from"./app-94ffcd11.js";const r="/RenderDoc/assets/ptr-add00eda.png",u="/RenderDoc/assets/insideptr-a1b42b7a.png",m={},k=t("h2",{id:"inside指针",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#inside指针","aria-hidden":"true"},"#"),a(" inside指针")],-1),v=p('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念</h2><p>语法：type* var_name;</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><strong>指针是个存储地址的变量：</strong></li></ol><p>指针是一种特殊类型的变量，它存储的是内存地址，这个地址指向存储器中的某个数据。</p><ol start="2"><li><p><strong>指针有两大能力：</strong></p><ul><li><strong>指针有修改指向（某个变量）的值的能力：</strong> 通过指针，你可以访问和修改所指向内存地址上的数据。例如，如果有一个指向整数的指针，你可以通过解引用操作符 <code>*</code> 来获取或修改该整数的值。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>num<span class="token punctuation">;</span>
<span class="token operator">*</span>ptr <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>  <span class="token comment">// 修改了ptr指向的地址上的值，即修改了num的值</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>指针是个变量有修改本身指向地址的能力：</strong> 你可以改变指针本身存储的地址，使其指向不同的内存位置。这是通过给指针赋予一个新的地址来实现的。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">int</span><span class="token operator">*</span> ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>num1<span class="token punctuation">;</span>  <span class="token comment">// ptr指向num1的地址</span>
ptr <span class="token operator">=</span> <span class="token operator">&amp;</span>num2<span class="token punctuation">;</span>       <span class="token comment">// 修改了ptr本身存储的地址，使其指向num2的地址</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="案例" tabindex="-1"><a class="header-anchor" href="#案例" aria-hidden="true">#</a> 案例</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">// 1.定义一个整数变量 a</span>
    <span class="token keyword">int</span><span class="token operator">*</span> p <span class="token operator">=</span> <span class="token operator">&amp;</span>a<span class="token punctuation">;</span>  <span class="token comment">// 2.定义一个指针变量 p，并将 a 的地址赋给它</span>

    cout<span class="token operator">&lt;&lt;</span>p<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">// 3.现在，p 是一个指针变量，存储了 a 的地址</span>
    
    cout<span class="token operator">&lt;&lt;</span><span class="token operator">*</span>p<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span><span class="token comment">// 4.*p 可以用来操作 a 的值，即解引用操作</span>
    
    <span class="token operator">*</span>p <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>  <span class="token comment">// 5.修改 a 的值为 20,注意看IDE展示的a值变化</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//6.结束</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运行后</p></blockquote><figure><img src="`+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h3>',11),g=p('<ol><li><p><strong>指针的声明和定义：</strong>（和之前文章<span style="color:#c0392b;">变量声明和定义</span>通）当你声明一个指针时，你正在告诉编译器：“我有一个指针，它将存储某个特定类型的地址。”在 <code>int* p;</code> 这个声明中，<code>p</code> 被定义为一个能够存储 <code>int</code> 类型地址的指针。</p></li><li><p><strong>取地址操作 (<code>&amp;a</code>)：</strong> 在 <code>p = &amp;a;</code> 中，<code>&amp;a</code> 表示取得变量 <code>a</code> 的地址。这是一个右值操作（后续<span style="color:#c0392b;">理解左右值</span>通），返回的是 <code>a</code> 的地址，而不是 <code>a</code> 的值。</p></li><li><p><strong>指针赋值 (<code>p = &amp;a;</code>)：</strong> 将 <code>&amp;a</code> 赋给 <code>p</code>，实际上是将 <code>a</code> 的地址存储在 <code>p</code> 中。这时，<code>p</code> 成为了指向 <code>a</code> 的指针。</p></li><li><p><strong>解引用操作符 (<code>*p</code>)：</strong> 当你使用 <code>*p</code> 时，你告诉编译器：“给我指针 <code>p</code> 所指向的地址上的值。”这是一个左值操作，返回的是 <code>a</code> 的值，而不是 <code>a</code> 的地址。</p></li><li><p><strong>赋值操作 (<code>*p = 10;</code>)：</strong> 现在，由于 <code>p</code> 存储了 <code>a</code> 的地址，<code>*p</code> 就相当于在操作 <code>a</code>。因此，<code>*p = 10;</code> 相当于 <code>10</code> 赋给了 <code>a</code>。</p></li></ol>',1);function b(h,_){const s=o("chatmessage"),c=o("gifwithbutton");return l(),d("div",null,[k,n(s,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[a(" 一直在说指针，可我怎么就怎么迷糊呢？能不能帮我理解理解？ ")]),_:1}),n(s,{avatar:"../../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 牢记这几个概念： ")]),_:1}),v,n(c,{src:"../../../../assets/unrealgif/ptr.gif"}),n(s,{avatar:"../../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:e(()=>[a(" 可以看到IDE可视化非常直观的将一个地址给到了指针p变量。 ")]),_:1}),g])}const y=i(m,[["render",b],["__file","1-insidePtr.html.vue"]]);export{y as default};