import{_ as l,r as o,o as i,c as u,d as a,w as p,a as s,b as n,e}from"./app-a94ef497.js";const r="/RenderDoc/assets/struct-5c7d4b39.png",d="/RenderDoc/assets/cprimer-3882bedc.png",k="/RenderDoc/assets/classptr-86f60cbe.png",v={},m=s("blockquote",null,[s("p",null,"语法：struct 结构体名称 { 成员列表 };")],-1),b=s("figure",null,[s("img",{src:r,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),g=s("h2",{id:"结构体指针",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#结构体指针","aria-hidden":"true"},"#"),n(" 结构体指针")],-1),y=s("span",{style:{color:"#c0392b"}},"指针",-1),h=e('<blockquote><p>语法： struct 结构体名称 * 指针变量名 = &amp; 结构体对象;</p></blockquote><figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="结构体指针定义方法" tabindex="-1"><a class="header-anchor" href="#结构体指针定义方法" aria-hidden="true">#</a> 结构体指针定义方法</h3><hr><h4 id="_1-struct-结构体名称-指针变量名-结构体对象" tabindex="-1"><a class="header-anchor" href="#_1-struct-结构体名称-指针变量名-结构体对象" aria-hidden="true">#</a> <strong>1. struct 结构体名称 * 指针变量名 = &amp; 结构体对象;</strong></h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>string name<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;汪汪汪&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">//new 堆上执行</span>
    <span class="token keyword">struct</span> <span class="token class-name">Dog</span> <span class="token operator">*</span>pDog <span class="token operator">=</span> <span class="token keyword">new</span> Dog<span class="token punctuation">;</span>
    pDog<span class="token operator">-&gt;</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">//栈上执行，程序控制生命周期</span>
    Dog dog2<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Dog</span><span class="token operator">*</span> pDog2 <span class="token operator">=</span> <span class="token operator">&amp;</span>dog2<span class="token punctuation">;</span><span class="token comment">//</span>
    pDog2<span class="token operator">-&gt;</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">delete</span> pDog<span class="token punctuation">;</span><span class="token comment">//释放内存</span>
    pDog <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span><span class="token comment">//指针置空</span>
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li><p>堆上分配内存：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token class-name">Dog</span> <span class="token operator">*</span>pDog <span class="token operator">=</span> <span class="token keyword">new</span> Dog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这行代码在堆上动态分配了一个 <code>Dog</code> 对象，并将其地址赋给了 <code>pDog</code> 指针。在这种情况下，需要记得使用 <code>delete</code> 来释放这块内存。</p></li><li><p>栈上分配内存：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>Dog dog2<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">Dog</span><span class="token operator">*</span> pDog2 <span class="token operator">=</span> <span class="token operator">&amp;</span>dog2<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>创建了一个 <code>Dog</code> 对象 <code>dog2</code>，并用 <code>&amp;dog2</code> 将其地址赋给了 <code>pDog2</code> 指针。在这种情况下，对象的生命周期受限于其所在的作用域，不需要手动释放内存。</p></li><li><p>释放内存：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">delete</span> pDog<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,7),w=s("br",null,null,-1),f=e(`<hr><h4 id="_2-在定义结构体时直接定义成指针" tabindex="-1"><a class="header-anchor" href="#_2-在定义结构体时直接定义成指针" aria-hidden="true">#</a> <strong>2. 在定义结构体时直接定义成指针</strong></h4><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Dog</span>
<span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>string name<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;汪汪汪&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token operator">*</span> pDog<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    pDog<span class="token operator">-&gt;</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结构体数组" tabindex="-1"><a class="header-anchor" href="#结构体数组" aria-hidden="true">#</a> 结构体数组</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;vector&gt;</span>  <span class="token comment">// 使用 std::vector 代替数组</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Dog</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> age<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>string name<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    
    <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;汪汪汪&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用 std::vector 代替数组</span>
    std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>Dog<span class="token operator">&gt;</span> dogs <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&quot;大黄&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;大白&quot;</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// 修改第二只狗的年龄</span>
    dogs<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用 new 创建堆上的对象，而不是栈上的数组</span>
    Dog<span class="token operator">*</span> pDog <span class="token operator">=</span> <span class="token keyword">new</span> Dog<span class="token punctuation">;</span>
    pDog<span class="token operator">-&gt;</span>age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    pDog<span class="token operator">-&gt;</span>name <span class="token operator">=</span> <span class="token string">&quot;大黄&quot;</span><span class="token punctuation">;</span>
    pDog<span class="token operator">-&gt;</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 使用 std::vector 管理动态分配的对象</span>
    std<span class="token double-colon punctuation">::</span>vector<span class="token operator">&lt;</span>Dog<span class="token operator">*</span><span class="token operator">&gt;</span> dogPointers<span class="token punctuation">;</span>
    dogPointers<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token keyword">new</span> Dog<span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token string">&quot;小黑&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dogPointers<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span><span class="token keyword">new</span> Dog<span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;小白&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 遍历 vector，并释放动态分配的对象</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>Dog<span class="token operator">*</span> p <span class="token operator">:</span> dogPointers<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        p<span class="token operator">-&gt;</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">delete</span> p<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    dogPointers<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结构体嵌套" tabindex="-1"><a class="header-anchor" href="#结构体嵌套" aria-hidden="true">#</a> 结构体嵌套</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">struct</span> <span class="token class-name">Cat</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>string name<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">catbark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
    <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;m~m~m&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">Dog</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>string name<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> age<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">dogbark</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
    <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;w~w~w&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">struct</span> <span class="token class-name">Cat</span> myCat<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">printstruct</span><span class="token punctuation">(</span><span class="token keyword">const</span> Dog<span class="token operator">*</span> d<span class="token punctuation">,</span> <span class="token keyword">const</span> Cat<span class="token operator">*</span> c<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;我的小狗名叫:&quot;</span> <span class="token operator">&lt;&lt;</span> d<span class="token operator">-&gt;</span>name <span class="token operator">&lt;&lt;</span><span class="token string">&quot;今年&quot;</span><span class="token operator">&lt;&lt;</span>d<span class="token operator">-&gt;</span>age<span class="token operator">&lt;&lt;</span><span class="token string">&quot;岁,快跟大家打招呼!&quot;</span><span class="token operator">&lt;&lt;</span>std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> d<span class="token operator">-&gt;</span>name <span class="token operator">&lt;&lt;</span><span class="token string">&quot;：&quot;</span><span class="token punctuation">;</span>
    d<span class="token operator">-&gt;</span><span class="token function">dogbark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;小狗&quot;</span> <span class="token operator">&lt;&lt;</span> d<span class="token operator">-&gt;</span>name <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;的朋友叫：&quot;</span> <span class="token operator">&lt;&lt;</span> c<span class="token operator">-&gt;</span>name <span class="token operator">&lt;&lt;</span><span class="token string">&quot;今年&quot;</span><span class="token operator">&lt;&lt;</span>c<span class="token operator">-&gt;</span>age<span class="token operator">&lt;&lt;</span><span class="token string">&quot;岁,快跟大家打招呼!&quot;</span><span class="token operator">&lt;&lt;</span>std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> c<span class="token operator">-&gt;</span>name <span class="token operator">&lt;&lt;</span><span class="token string">&quot;：&quot;</span><span class="token punctuation">;</span>
    c<span class="token operator">-&gt;</span><span class="token function">catbark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Dog myDog<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Dog</span><span class="token operator">*</span> PDog <span class="token operator">=</span> <span class="token operator">&amp;</span>myDog<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">Cat</span><span class="token operator">*</span> PCat <span class="token operator">=</span> <span class="token operator">&amp;</span>PDog<span class="token operator">-&gt;</span>myCat<span class="token punctuation">;</span>
    
    PDog<span class="token operator">-&gt;</span>name <span class="token operator">=</span> <span class="token string">&quot;小白&quot;</span><span class="token punctuation">;</span>
    PDog<span class="token operator">-&gt;</span>age <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    
    PCat<span class="token operator">-&gt;</span>name <span class="token operator">=</span> <span class="token string">&quot;小咪&quot;</span><span class="token punctuation">;</span>
    PCat<span class="token operator">-&gt;</span>age <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token function">printstruct</span><span class="token punctuation">(</span>PDog<span class="token punctuation">,</span> PCat<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类指针" tabindex="-1"><a class="header-anchor" href="#类指针" aria-hidden="true">#</a> 类指针</h2>`,8),_=e('<figure><img src="'+k+`" alt="类默认私有" tabindex="0" loading="lazy"><figcaption>类默认私有</figcaption></figure><blockquote><p>语法 ：class 类名称 * 指针变量名 = new 类对象;</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token comment">// 类定义</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> x<span class="token punctuation">;</span>

    <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">x</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value: &quot;</span> <span class="token operator">&lt;&lt;</span> x <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 结构体定义</span>
<span class="token keyword">struct</span> <span class="token class-name">MyStruct</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> y<span class="token punctuation">;</span>

    <span class="token function">MyStruct</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">y</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Value: &quot;</span> <span class="token operator">&lt;&lt;</span> y <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 类指针</span>
    MyClass<span class="token operator">*</span> ptrClass <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">MyClass</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptrClass<span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> ptrClass<span class="token punctuation">;</span>

    <span class="token comment">// 结构体指针</span>
    MyStruct<span class="token operator">*</span> ptrStruct <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">MyStruct</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ptrStruct<span class="token operator">-&gt;</span><span class="token function">display</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">delete</span> ptrStruct<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="声明前置" tabindex="-1"><a class="header-anchor" href="#声明前置" aria-hidden="true">#</a> 声明前置</h3>`,4),q=e(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token operator">*</span>Pdog<span class="token punctuation">;</span><span class="token comment">//声明前置</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span>
<span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> age<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    std<span class="token double-colon punctuation">::</span>string name<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;汪汪汪&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    Pdog<span class="token operator">-&gt;</span><span class="token function">bark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function D(x,C){const t=o("chatmessage"),c=o("gifwithbutton");return i(),u("div",null,[a(t,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:p(()=>[n(" 说完了数组指针和指针数组随便讲讲结构体指针和类指针吧 ")]),_:1}),a(t,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 在讲结构体指针前先来复习一下结构体咱们定义吧 ")]),_:1}),m,b,g,a(t,{avatar:"../../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 顾名思义，是一个结构体类型的"),y,n("指向某个结构体。 ")]),_:1}),h,a(c,{src:"../../../../assets/unrealgif/structptr.gif"}),a(t,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:p(()=>[n(" 如果不delete会怎么样？ ")]),_:1}),a(t,{avatar:"../../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 如果动态分配内存后，没有正确释放该内存，意味着这部分内存无法再被程序访问。"),w,n(" 但系统仍然认为这部分内存被程序占用，从而造成内存资源的浪费。也就是我们常常说的内存泄漏。 ")]),_:1}),f,a(t,{avatar:"../../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 类指针和结构体指针在概念上非常相似，因为类（class）和结构体（struct）在 C++ 中都是用户自定义的数据类型。 只不过需要注意的是类默认是私有的,需要用pulic关键字修饰 ")]),_:1}),_,a(t,{avatar:"../../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:p(()=>[n(" 当然结构体/类指针声明前置都是可以的 ")]),_:1}),q])}const S=l(v,[["render",D],["__file","4-Ptr-Struct.html.vue"]]);export{S as default};
