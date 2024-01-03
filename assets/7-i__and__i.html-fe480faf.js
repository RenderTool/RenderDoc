import{_ as c,r as i,o as l,c as r,d as s,w as e,a as t,b as n,e as o}from"./app-7cf6e255.js";const d="/RenderDoc/assets/zhifin-2206afa7.png",u={},k=t("h3",{id:"直接使用时",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#直接使用时","aria-hidden":"true"},"#"),n(" 直接使用时")],-1),v=t("h3",{id:"参与运算时",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#参与运算时","aria-hidden":"true"},"#"),n(" 参与运算时")],-1),m=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> result2 <span class="token operator">=</span>i<span class="token operator">++</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>result2<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    
    i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//为了测试重置为0.</span>
    
    <span class="token keyword">int</span> result3<span class="token operator">=</span><span class="token operator">++</span>i<span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>result3<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运行结果</p></blockquote><figure><img src="`+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',3),b=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token comment">// 前置递增函数</span>
<span class="token keyword">int</span> <span class="token function">preIncrement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">&amp;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">++</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 后置递增函数</span>
<span class="token keyword">int</span> <span class="token function">postIncrement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">&amp;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    
    <span class="token comment">// 使用前置递增函数</span>
    <span class="token keyword">int</span> result1 <span class="token operator">=</span> <span class="token function">preIncrement</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>result1<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    
    i <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span><span class="token comment">//便于测试我们重写赋值</span>
    
    <span class="token comment">// 使用后置递增函数</span>
    <span class="token keyword">int</span> result2 <span class="token operator">=</span> <span class="token function">postIncrement</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout<span class="token operator">&lt;&lt;</span>result2<span class="token operator">&lt;&lt;</span>endl<span class="token punctuation">;</span>
    
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),g=o(`<ol><li><p><strong>前置递增函数 <code>preIncrement</code>：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">preIncrement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">&amp;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">++</span>x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个函数先对 <code>x</code> 进行前置递增操作，然后返回递增后的值。因此，如果传入 <code>5</code>，函数会先将 <code>x</code> 递增为 <code>6</code>，然后返回 <code>6</code>。</p></li><li><p><strong>后置递增函数 <code>postIncrement</code>：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">postIncrement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">&amp;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个函数先返回 <code>x</code> 的原始值，然后再对 <code>x</code> 进行后置递增操作。如果传入 <code>5</code>，函数会返回 <code>5</code>，然后将 <code>x</code> 递增为 <code>6</code>。</p></li></ol>`,1),_=t("br",null,null,-1),h=t("br",null,null,-1);function f(w,y){const a=i("chatmessage"),p=i("gifwithbutton");return l(),r("div",null,[s(a,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[n(" 我不理解！++i和i++，有什么区别嘛？ ")]),_:1}),s(a,{avatar:"../../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 要分情况，有时候没区别有时候有区别。 ")]),_:1}),k,s(p,{src:"../../../assets/unrealgif/i++.gif"}),s(a,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 根据上方演示来看都是+1没有区别。 ")]),_:1}),v,s(a,{avatar:"../../../assets/emoji/ybk.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 参与运算时，区别就出现了！ ")]),_:1}),m,s(p,{src:"../../../assets/unrealgif/i++&++i.gif"}),s(a,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[n(" 我不理解！结果不一样了！ ")]),_:1}),s(a,{avatar:"../../../assets/emoji/bqb02.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 这么看可能不形象，我给你重新举个例子。 ")]),_:1}),b,s(p,{src:"../../../assets/unrealgif/++i.gif"}),g,s(a,{avatar:"../../../assets/emoji/hh.png",avatarWidth:40},{default:e(()=>[n(" 我大概理解了i本身无论怎么样都在自增，但 ++i先自增后返回。 i++先返回后自增。 ")]),_:1}),s(a,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 是的，其实字面上也是这个意思。"),_,n(" ++i,++在前先自增然后返回i。"),h,n(" i++,++在后先返回i在自增加。 ")]),_:1}),s(a,{avatar:"../../../assets/emoji/hx.png",avatarWidth:40},{default:e(()=>[n(" 这么说，如果我想让i++在函数中正常运行，还需要一个临时变量转存后才能返回，要不然始终少一步。 ")]),_:1}),s(a,{avatar:"../../../assets/emoji/bqb (6).png",avatarWidth:40,alignLeft:""},{default:e(()=>[n(" 是的，这也是大量数据时++i性能更高的原因，直接+1后返回i,不需要临时变量来复制传递。 ")]),_:1})])}const j=c(u,[["render",f],["__file","7-i__and__i.html.vue"]]);export{j as default};
