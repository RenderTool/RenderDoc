import{_ as n,o as s,c as a,e}from"./app-e04d5734.js";const t={},p=e(`<h2 id="委托实践-delegate" tabindex="-1"><a class="header-anchor" href="#委托实践-delegate" aria-hidden="true">#</a> 委托实践|Delegate</h2><ol><li><p><strong>声明委托：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">DECLARE_DELEGATE</span><span class="token punctuation">(</span>FMyDelegate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者使用 <code>DECLARE_MULTICAST_DELEGATE</code> 来声明多播委托：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">DECLARE_MULTICAST_DELEGATE</span><span class="token punctuation">(</span>FMyMulticastDelegate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>还可以声明带有参数的委托：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">DECLARE_DELEGATE_OneParam</span><span class="token punctuation">(</span>FMyDelegateWithParam<span class="token punctuation">,</span> int32<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>定义委托实例：</strong></p><p>在类中定义委托的实例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UCLASS</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">MYPROJECT_API</span> AMyActor <span class="token operator">:</span> <span class="token keyword">public</span> AActor
<span class="token punctuation">{</span>
    <span class="token function">GENERATED_BODY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    FMyDelegate MyDelegate<span class="token punctuation">;</span>
    FMyMulticastDelegate MyMulticastDelegate<span class="token punctuation">;</span>
    FMyDelegateWithParam MyDelegateWithParam<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>绑定和解绑委托：</strong></p><p>在构造函数或其他地方绑定和解绑委托：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token class-name">AMyActor</span><span class="token double-colon punctuation">::</span><span class="token function">AMyActor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 绑定委托</span>
    MyDelegate<span class="token punctuation">.</span><span class="token function">BindUObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>AMyActor<span class="token double-colon punctuation">::</span>MyFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 绑定多播委托</span>
    MyMulticastDelegate<span class="token punctuation">.</span><span class="token function">AddUObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>AMyActor<span class="token double-colon punctuation">::</span>MyMulticastFunction<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 绑定带参数的委托</span>
    MyDelegateWithParam<span class="token punctuation">.</span><span class="token function">BindUObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>AMyActor<span class="token double-colon punctuation">::</span>MyFunctionWithParam<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 解绑委托</span>
    MyDelegate<span class="token punctuation">.</span><span class="token function">Unbind</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 解绑多播委托</span>
    MyMulticastDelegate<span class="token punctuation">.</span><span class="token function">RemoveAll</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>委托的回调函数：</strong></p><p>定义委托回调的成员函数：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">UFUNCTION</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">MyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 委托被触发时执行的代码</span>
<span class="token punctuation">}</span>

<span class="token function">UFUNCTION</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">MyMulticastFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 多播委托被触发时执行的代码</span>
<span class="token punctuation">}</span>

<span class="token function">UFUNCTION</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">void</span> <span class="token function">MyFunctionWithParam</span><span class="token punctuation">(</span>int32 Param<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 带参数的委托被触发时执行的代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>触发委托：</strong></p><p>在适当的地方触发委托：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">SomeFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">// 触发委托</span>
    MyDelegate<span class="token punctuation">.</span><span class="token function">ExecuteIfBound</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 触发多播委托</span>
    MyMulticastDelegate<span class="token punctuation">.</span><span class="token function">Broadcast</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 触发带参数的委托</span>
    MyDelegateWithParam<span class="token punctuation">.</span><span class="token function">ExecuteIfBound</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","7-DelegateUse.html.vue"]]);export{d as default};
