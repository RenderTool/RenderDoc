import{_ as t,r as o,o as l,c as p,d as s,w as a,e as c,b as e}from"./app-a799a61c.js";const i={},r=c(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>

<span class="token keyword">enum</span> <span class="token class-name">Color</span> <span class="token punctuation">{</span>
    RED<span class="token punctuation">,</span>
    GREEN<span class="token punctuation">,</span>
    BLUE
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Color myColor <span class="token operator">=</span> GREEN<span class="token punctuation">;</span>

    <span class="token comment">// 使用指向枚举变量的指针</span>
    Color<span class="token operator">*</span> pColor <span class="token operator">=</span> <span class="token operator">&amp;</span>myColor<span class="token punctuation">;</span>

    <span class="token comment">// 输出枚举值</span>
    std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Current color: &quot;</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">*</span>pColor <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>pColor</code> 是一个指向 <code>Color</code> 枚举变量的指针，它可以存储枚举值的地址。需要注意的是，输出指针的值（<code>*pColor</code>）会得到底层整数值（例如，0、1、2），而不是枚举名称。</p>`,2);function d(u,v){const n=o("chatmessage");return l(),p("div",null,[s(n,{avatar:"../../../../assets/emoji/hx.png",avatarWidth:40},{default:a(()=>[e(" 有没有枚举指针? ")]),_:1}),s(n,{avatar:"../../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[e(" 枚举（Enum）本身并没有指针，因为枚举是一种由命名整数值组成的类型，而不是一种可寻址的数据类型。枚举常用于表示一组有限的离散值。 ")]),_:1}),s(n,{avatar:"../../../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[e(" 然而，你可以使用指向枚举变量的指针。这样的指针可以用来存储和访问枚举值的地址，但需要注意的是，枚举类型的底层类型是整数，因此使用指针主要是为了方便处理或传递枚举值的地址。 ")]),_:1}),r,s(n,{avatar:"../../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:a(()=>[e(" 实际编程中，很多情况下直接使用枚举变量而不是指针更为常见。 ")]),_:1})])}const k=t(i,[["render",d],["__file","5-Ptr-Enum.html.vue"]]);export{k as default};
