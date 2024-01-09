import{_ as e,r as t,o,c as p,d as i,w as c,a as n,b as s,e as l}from"./app-0178eb15.js";const u="/RenderDoc/assets/LazySingleton -a7688c46.svg",r="/RenderDoc/assets/EagerSingleton-34616b3f.svg",d="/RenderDoc/assets/Singleton Class Diagram-c3292761.svg",k={},v=n("h3",{id:"singleton-单例",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#singleton-单例","aria-hidden":"true"},"#"),s(" Singleton|单例")],-1),m=l(`<h3 id="懒汉式-lazy-initialization" tabindex="-1"><a class="header-anchor" href="#懒汉式-lazy-initialization" aria-hidden="true">#</a> 懒汉式（Lazy Initialization）</h3><ol><li><p><strong>懒汉式单例模式：</strong></p><ul><li><strong>实例创建时机：</strong> 懒汉式在第一次被调用时才创建实例，即在需要的时候才进行初始化。</li><li><strong>线程安全性：</strong> 如果不进行特殊处理，懒汉式可能在多线程环境下引发竞态条件，导致多个线程同时检测到实例为<code>nullptr</code>，然后都尝试创建实例。为了解决这个问题，可以使用双重检查锁定（Double-Checked Locking）或者其他线程安全的机制。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">LazySingleton</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">static</span> LazySingleton<span class="token operator">*</span> instance<span class="token punctuation">;</span>
    <span class="token function">LazySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 私有构造函数</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">static</span> LazySingleton<span class="token operator">*</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">LazySingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 在cpp文件中初始化静态成员变量</span>
LazySingleton<span class="token operator">*</span> LazySingleton<span class="token double-colon punctuation">::</span>instance <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><figure><img src="`+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="饿汉式-eager-initialization" tabindex="-1"><a class="header-anchor" href="#饿汉式-eager-initialization" aria-hidden="true">#</a> 饿汉式（Eager Initialization）</h3><ol start="2"><li><p><strong>饿汉式单例模式：</strong></p><ul><li><strong>实例创建时机：</strong> 饿汉式在类加载时就创建实例，即在程序启动时就进行初始化，无论是否被调用都会创建实例。</li><li><strong>线程安全性：</strong> 饿汉式天生是线程安全的，因为实例在类加载时就被创建，不存在多线程竞争的问题。</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">EagerSingleton</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">static</span> EagerSingleton<span class="token operator">*</span> instance<span class="token punctuation">;</span>
    <span class="token function">EagerSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 私有构造函数</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">static</span> EagerSingleton<span class="token operator">*</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 在cpp文件中初始化静态成员变量</span>
EagerSingleton<span class="token operator">*</span> EagerSingleton<span class="token double-colon punctuation">::</span>instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">EagerSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><figure><img src="`+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>选择懒汉式还是饿汉式取决于具体的需求和应用场景。 懒汉式可以节省资源，只有在需要时才创建实例，但需要注意线程安全性。 饿汉式在程序启动时就创建实例，确保了线程安全，但可能会增加启动时间和占用资源。</p><h3 id="双检锁单例" tabindex="-1"><a class="header-anchor" href="#双检锁单例" aria-hidden="true">#</a> 双检锁单例</h3><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token comment">// 私有构造函数，防止外部实例化</span>
    <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

    <span class="token comment">// 静态实例指针</span>
    <span class="token keyword">static</span> Singleton<span class="token operator">*</span> instance<span class="token punctuation">;</span>

    <span class="token comment">// 互斥锁，确保线程安全</span>
    <span class="token keyword">static</span> std<span class="token double-colon punctuation">::</span>mutex mutex<span class="token punctuation">;</span>

<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token comment">// 获取单例实例的静态方法</span>
    <span class="token keyword">static</span> Singleton<span class="token operator">*</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 使用双重检查锁定以减少锁的竞争</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            std<span class="token double-colon punctuation">::</span>lock_guard<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>mutex<span class="token operator">&gt;</span> <span class="token function">lock</span><span class="token punctuation">(</span>mutex<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>instance <span class="token operator">==</span> <span class="token keyword">nullptr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 初始化静态成员变量</span>
Singleton<span class="token operator">*</span> Singleton<span class="token double-colon punctuation">::</span>instance <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>
std<span class="token double-colon punctuation">::</span>mutex Singleton<span class="token double-colon punctuation">::</span>mutex<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',11);function g(b,y){const a=t("chatmessage");return o(),p("div",null,[v,i(a,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40},{default:c(()=>[s(" 一个类保证全局只有一个实例 ")]),_:1}),m])}const f=e(k,[["render",g],["__file","1-Sington.html.vue"]]);export{f as default};
