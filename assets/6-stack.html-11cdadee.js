import{_ as t,r as e,o as p,c,d as o,w as i,a as n,b as s,e as l}from"./app-464a7fe6.js";const u="/RenderDoc/assets/stack-f175b19c.png",d="/RenderDoc/assets/tarray-5d538a3f.png",r={},k=n("h3",{id:"stack",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#stack","aria-hidden":"true"},"#"),s(" stack")],-1),v=l('<blockquote><p><code>std::stack</code> 是 C++ 标准模板库中的容器适配器（container adapter），它基于某个底层容器（默认是 <code>std::deque</code>， 但也可以是 <code>std::vector</code> 或 <code>std::list</code>）提供了栈（stack）的功能。</p></blockquote><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义：</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stack&gt;</span></span>

std<span class="token double-colon punctuation">::</span>stack<span class="token operator">&lt;</span>T<span class="token punctuation">,</span> Container<span class="token operator">&gt;</span> myStack<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>T</code> 是栈中元素的类型。</li><li><code>Container</code> 是底层容器的类型，默认为 <code>std::deque&lt;T&gt;</code>。</li></ul><h3 id="主要操作" tabindex="-1"><a class="header-anchor" href="#主要操作" aria-hidden="true">#</a> 主要操作：</h3><ol><li><p><strong>push()：</strong> 将元素推入栈顶。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>pop()：</strong> 弹出栈顶的元素。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>myStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>top()：</strong> 返回栈顶的元素（不会删除该元素）。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>T topElement <span class="token operator">=</span> myStack<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>empty()：</strong> 检查栈是否为空。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>myStack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 栈为空</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>size()：</strong> 返回栈中元素的个数。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>size_t stackSize <span class="token operator">=</span> myStack<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念：</h3><p><code>std::stack</code> 具有以下特性：</p><ol><li><p><strong>后进先出（LIFO）：</strong> 栈是一种后进先出的数据结构，最后入栈的元素将最先被弹出。</p></li><li><p><strong>封装底层容器：</strong> <code>std::stack</code> 将底层容器（默认是 <code>std::deque</code>）的功能进行封装，提供栈的操作接口。</p></li><li><p><strong>常用操作：</strong> <code>std::stack</code> 提供了常见的栈操作，包括推入元素（<code>push</code>）、弹出元素（<code>pop</code>）、获取栈顶元素（<code>top</code>）、检查栈是否为空（<code>empty</code>）以及获取栈中元素的个数（<code>size</code>）。</p></li><li><p><strong>底层容器可替换：</strong> 使用模板参数，可以在创建 <code>std::stack</code> 时指定不同的底层容器，例如 <code>std::vector</code> 或 <code>std::list</code>。</p></li><li><p><strong>不提供迭代器：</strong> 栈不提供对其元素的迭代器访问，因为只允许在栈顶进行插入和删除操作。</p></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stack&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    std<span class="token double-colon punctuation">::</span>stack<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">&gt;</span> myStack<span class="token punctuation">;</span>

    myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Top element: &quot;</span> <span class="token operator">&lt;&lt;</span> myStack<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>myStack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> myStack<span class="token punctuation">.</span><span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span> <span class="token comment">// 输出栈顶元素</span>
        myStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 弹出栈顶元素</span>
    <span class="token punctuation">}</span>

    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="in-ue" tabindex="-1"><a class="header-anchor" href="#in-ue" aria-hidden="true">#</a> In UE</h3><blockquote><p>在Unreal Engine 中，本身并没有提供一个名为<code>std::stack</code>的标准C++库的stack容器， 但可以使用TArray或者TQueue等UE提供的数据结构来实现类似栈的操作。</p></blockquote><figure><img src="`+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">// 使用TArray模拟栈</span>
<span class="token function">UPROPERTY</span><span class="token punctuation">(</span>EditAnywhere<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;分组|子标签&quot;</span><span class="token punctuation">)</span>
TArray<span class="token operator">&lt;</span>int32<span class="token operator">&gt;</span> MyStack<span class="token punctuation">;</span>
    
<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;MyArray&quot;</span><span class="token punctuation">)</span>  
<span class="token keyword">void</span> <span class="token function">Push</span><span class="token punctuation">(</span>int32 Value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
<span class="token keyword">void</span> <span class="token class-name">AMyTest</span><span class="token double-colon punctuation">::</span><span class="token function">Push</span><span class="token punctuation">(</span>int32 Value<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token operator">-&gt;</span>MyStack<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
	<span class="token keyword">this</span><span class="token operator">-&gt;</span>MyStack<span class="token punctuation">.</span><span class="token function">Pop</span><span class="token punctuation">(</span>Value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span>
<span class="token punctuation">{</span>
   <span class="token keyword">this</span><span class="token operator">-&gt;</span>MyStack<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function m(b,g){const a=e("chatmessage");return p(),c("div",null,[k,o(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:i(()=>[s(" 栈是一种后进先出（Last In, First Out，LIFO）的数据结构，只允许在栈顶进行插入和删除操作。 ")]),_:1}),v])}const y=t(r,[["render",m],["__file","6-stack.html.vue"]]);export{y as default};