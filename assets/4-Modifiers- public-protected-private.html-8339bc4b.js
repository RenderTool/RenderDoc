import{_ as c,r as i,o,c as l,d as a,w as e,a as t,b as s,e as p}from"./app-cfb3cdd8.js";const d="/RenderDoc/assets/publicchat-d264fb40.png",r="/RenderDoc/assets/puprpv-e5f48be6.png",u={},v=t("h2",{id:"类-class-中",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#类-class-中","aria-hidden":"true"},"#"),s(" 类(class)中")],-1),k=t("h3",{id:"访问控制",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#访问控制","aria-hidden":"true"},"#"),s(" 访问控制")],-1),m=p('<figure><img src="'+d+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Private自己可见|Protected自己和好友可见|Public所有人可见</strong></p></blockquote><ol><li><strong>Public（公共）:</strong><ul><li>成员声明为 <code>public</code> 的，可以在类的内部和外部访问。</li><li>对于类的用户来说，<code>public</code> 成员是可见的，可以直接访问。</li></ul></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> publicVar<span class="token punctuation">;</span>  <span class="token comment">// 公共变量</span>
    <span class="token keyword">void</span> <span class="token function">publicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 公共方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>Protected（受保护的）:</strong><ul><li>成员声明为 <code>protected</code> 的，可以在类的内部访问，也可以在派生类中访问，但不能在类的外部访问。</li><li><code>protected</code> 成员对类的用户是不可见的，只有类的派生类能够访问。</li></ul></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyBaseClass</span> <span class="token punctuation">{</span>
<span class="token keyword">protected</span><span class="token operator">:</span>
    <span class="token keyword">int</span> protectedVar<span class="token punctuation">;</span>  <span class="token comment">// 受保护的变量</span>
    <span class="token keyword">void</span> <span class="token function">protectedMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 受保护的方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MyDerivedClass</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">MyBaseClass</span></span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">void</span> <span class="token function">accessProtected</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        protectedVar <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">// 在派生类中可以访问受保护的变量</span>
        <span class="token function">protectedMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 在派生类中可以调用受保护的方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>Private（私有的）:</strong><ul><li>成员声明为 <code>private</code> 的，只能在类的内部访问，对于类的用户和派生类都是不可见的。</li><li><code>private</code> 成员对类的用户和派生类都是不可见的。</li></ul></li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> privateVar<span class="token punctuation">;</span>  <span class="token comment">// 私有变量</span>
    <span class="token keyword">void</span> <span class="token function">privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 私有方法</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="控制继承" tabindex="-1"><a class="header-anchor" href="#控制继承" aria-hidden="true">#</a> 控制继承</h3>`,9),b=p('<figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol><li><p><strong>Public继承：</strong> 如果派生类使用 <code>public</code> 关键字继承基类，那么基类中的 <code>public</code> 和 <code>protected</code> 成员在派生类中的访问权限不变，而 <code>private</code> 成员在派生类中仍然是不可访问的。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> publicMember<span class="token punctuation">;</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> privateMember<span class="token punctuation">;</span>
<span class="token keyword">protected</span><span class="token operator">:</span>
    <span class="token keyword">int</span> protectedMember<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Base</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// publicMember 在Derived中是public</span>
    <span class="token comment">// privateMember 在Derived中仍然是不可访问的</span>
    <span class="token comment">// protectedMember 在Derived中是protected</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Protected继承：</strong> 如果派生类使用 <code>protected</code> 关键字继承基类，那么基类中的 <code>public</code> 和 <code>protected</code> 成员在派生类中的访问权限都变成了 <code>protected</code>，而 <code>private</code> 成员仍然是不可访问的。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> publicMember<span class="token punctuation">;</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> privateMember<span class="token punctuation">;</span>
<span class="token keyword">protected</span><span class="token operator">:</span>
    <span class="token keyword">int</span> protectedMember<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">protected</span> <span class="token class-name">Base</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// publicMember 在Derived中是protected</span>
    <span class="token comment">// privateMember 在Derived中仍然是不可访问的</span>
    <span class="token comment">// protectedMember 在Derived中是protected</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>Private继承：</strong> 如果派生类使用 <code>private</code> 关键字继承基类，那么基类中的 <code>public</code> 和 <code>protected</code> 成员在派生类中的访问权限都变成了 <code>private</code>，而 <code>private</code> 成员仍然是不可访问的。</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span><span class="token operator">:</span>
    <span class="token keyword">int</span> publicMember<span class="token punctuation">;</span>
<span class="token keyword">private</span><span class="token operator">:</span>
    <span class="token keyword">int</span> privateMember<span class="token punctuation">;</span>
<span class="token keyword">protected</span><span class="token operator">:</span>
    <span class="token keyword">int</span> protectedMember<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">private</span> <span class="token class-name">Base</span></span> <span class="token punctuation">{</span>
    <span class="token comment">// publicMember 在Derived中是private</span>
    <span class="token comment">// privateMember 在Derived中仍然是不可访问的</span>
    <span class="token comment">// protectedMember 在Derived中是private</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>总结成表格：</p><table><thead><tr><th>访问</th><th>同一个类</th><th>派生类</th><th>外部的类</th></tr></thead><tbody><tr><td>Public</td><td>Yes</td><td>Yes</td><td>Yes</td></tr><tr><td>Protected</td><td>Yes</td><td>Yes</td><td>No</td></tr><tr><td>Private</td><td>Yes</td><td>No</td><td>No</td></tr></tbody></table>`,4),g=t("h2",{id:"结构体-struct-中",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#结构体-struct-中","aria-hidden":"true"},"#"),s(" 结构体(struct)中")],-1);function h(y,w){const n=i("chatmessage");return o(),l("div",null,[a(n,{avatar:"../../../assets/emoji/dsyj.png",avatarWidth:40},{default:e(()=>[s(" 在面向对象编程中，`public`、`protected` 和 `private` 是访问控制修饰符，用于控制类的成员（属性和方法）对外的可见性。 ")]),_:1}),v,k,a(n,{avatar:"../../../assets/emoji/ybk.png",avatarWidth:40},{default:e(()=>[s(" class默认是private,对自己可见。 ")]),_:1}),m,a(n,{avatar:"../../../assets/emoji/bqb01.png",avatarWidth:40},{default:e(()=>[s(" `private` 派生的类中能访问到吗？ ")]),_:1}),a(n,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:e(()=>[s(" 使用 private 继承时，基类的 private 成员确实被继承了，但在派生类中的访问权限发生了改变。 不同的继承方法，继承后的成员属性也会变化： ")]),_:1}),b,a(n,{avatar:"../../../assets/emoji/bqb (4).png",avatarWidth:40},{default:e(()=>[s(" 那么`private` 修饰的类成员变量和函数一定只能通过自己访问是吧。 ")]),_:1}),a(n,{avatar:"../../../assets/emoji/bqb (1).png",avatarWidth:40,alignLeft:""},{default:e(()=>[s(" 并不一定，这个问题可以在下一章中得到答案。 ")]),_:1}),g,a(n,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40},{default:e(()=>[s(" struct默认都是Public ")]),_:1})])}const f=c(u,[["render",h],["__file","4-Modifiers- public-protected-private.html.vue"]]);export{f as default};
