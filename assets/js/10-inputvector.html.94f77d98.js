"use strict";(self.webpackChunkrenderdoc=self.webpackChunkrenderdoc||[]).push([[3991],{37570:(n,t,e)=>{e.r(t),e.d(t,{comp:()=>c,data:()=>r});var a=e(20641);const s=(0,a.Fv)('<h3 id="getlastmovementinputvector" tabindex="-1"><a class="header-anchor" href="#getlastmovementinputvector"><span>GetLastMovementInputVector</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">/**\n * 返回上一次由 ConsumeMovementInputVector() 处理的世界空间中的输入向量，这通常由 Pawn 或 PawnMovementComponent 完成。\n * 任何需要了解上次影响移动的输入的用户都应该使用此函数。\n * 例如，动画更新会使用这个函数，因为默认情况下，帧中更新的顺序是：\n * PlayerController（设备输入）-&gt; MovementComponent -&gt; Pawn -&gt; Mesh（动画）\n *\n * @return 上一次由 ConsumeMovementInputVector() 处理的世界空间中的输入向量。\n * @see AddMovementInput(), GetPendingMovementInputVector(), ConsumeMovementInputVector()\n */</span>\n<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Pawn|Input&quot;</span><span class="token punctuation">,</span> meta<span class="token operator">=</span><span class="token punctuation">(</span>Keywords<span class="token operator">=</span><span class="token string">&quot;GetMovementInput GetInput&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nENGINE_API FVector <span class="token function">GetLastMovementInputVector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getlastinputvector" tabindex="-1"><a class="header-anchor" href="#getlastinputvector"><span>GetLastInputVector</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">/**\n * 返回上一次由 ConsumeInputVector() 处理的世界空间中的输入向量，这通常由 Pawn 或 PawnMovementComponent 完成。\n * 任何需要了解上次影响移动的输入的用户都应该使用此函数。\n * @return 上一次由 ConsumeInputVector() 处理的世界空间中的输入向量。\n * @see AddInputVector(), ConsumeInputVector(), GetPendingInputVector()\n */</span>\n<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Pawn|Components|PawnMovement&quot;</span><span class="token punctuation">,</span> meta<span class="token operator">=</span><span class="token punctuation">(</span>Keywords<span class="token operator">=</span><span class="token string">&quot;GetInput&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nENGINE_API FVector <span class="token function">GetLastInputVector</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="主要区别" tabindex="-1"><a class="header-anchor" href="#主要区别"><span>主要区别</span></a></h3><ul><li><strong>特化 vs. 通用：</strong> <code>GetLastMovementInputVector()</code> 是更专门化的运动输入查询，而 <code>GetLastInputVector()</code> 是一个更加通用的输入查询，允许用于处理其他类型的 <code>Pawn</code> 输入。</li></ul><ol><li><p><strong><code>GetLastMovementInputVector()</code></strong></p><ul><li><strong>用途：</strong> 这个函数返回的是上一次通过 <code>ConsumeMovementInputVector()</code> 处理的输入向量，通常是由 <code>Pawn</code> 或 <code>PawnMovementComponent</code> 处理的。主要用于运动组件的场景。</li><li><strong>使用场景：</strong> 当你需要了解上次影响 <code>Pawn</code> 移动的输入时会使用它。例如，动画系统可能需要知道上一次的移动输入，以便确定当前的运动状态。</li></ul></li><li><p><strong><code>GetLastInputVector()</code></strong></p><ul><li><strong>用途：</strong> 这个函数返回的是上一次通过 <code>ConsumeInputVector()</code> 处理的输入向量，主要用于处理更通用的输入，而不仅限于移动。</li><li><strong>使用场景：</strong> 用于需要了解上一次通用输入的情况。虽然也可能用于运动相关的逻辑，但它更通用一些，可以适用于其他 <code>Pawn</code> 组件。</li></ul></li></ol>',7),o=(0,a.Lk)("p",null,[(0,a.eW)("只关心 "),(0,a.Lk)("code",null,"Pawn"),(0,a.eW)(" 的移动输入，通常会使用 "),(0,a.Lk)("code",null,"GetLastMovementInputVector()"),(0,a.eW)("；而如果需要处理或获取更广泛的输入，则可以使用 "),(0,a.Lk)("code",null,"GetLastInputVector()"),(0,a.eW)("。")],-1),p={},c=(0,e(66262).A)(p,[["render",function(n,t){const e=(0,a.g2)("chatmessage");return(0,a.uX)(),(0,a.CE)("div",null,[(0,a.bF)(e,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:(0,a.k6)((()=>[(0,a.eW)(" Baba! GetLastInputVector 和GetLastMovementInputVector有毛不同？ ")])),_:1}),(0,a.bF)(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:(0,a.k6)((()=>[(0,a.eW)(" 打开源码康康不就行了 ")])),_:1}),s,(0,a.bF)(e,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:(0,a.k6)((()=>[o])),_:1})])}]]),r=JSON.parse('{"path":"/unreal/exp_%E7%BB%8F%E9%AA%8C_/10-inputvector.html","title":"EXP10.用户输入向量区别","lang":"zh-CN","frontmatter":{"title":"EXP10.用户输入向量区别","order":10,"category":["u++"],"description":"GetLastMovementInputVector GetLastInputVector 主要区别 特化 vs. 通用： GetLastMovementInputVector() 是更专门化的运动输入查询，而 GetLastInputVector() 是一个更加通用的输入查询，允许用于处理其他类型的 Pawn 输入。 GetLastMovementI...","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/unreal/exp_%E7%BB%8F%E9%AA%8C_/10-inputvector.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"EXP10.用户输入向量区别"}],["meta",{"property":"og:description","content":"GetLastMovementInputVector GetLastInputVector 主要区别 特化 vs. 通用： GetLastMovementInputVector() 是更专门化的运动输入查询，而 GetLastInputVector() 是一个更加通用的输入查询，允许用于处理其他类型的 Pawn 输入。 GetLastMovementI..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-25T23:34:33.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-10-25T23:34:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"EXP10.用户输入向量区别\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-25T23:34:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"GetLastMovementInputVector","slug":"getlastmovementinputvector","link":"#getlastmovementinputvector","children":[]},{"level":3,"title":"GetLastInputVector","slug":"getlastinputvector","link":"#getlastinputvector","children":[]},{"level":3,"title":"主要区别","slug":"主要区别","link":"#主要区别","children":[]}],"git":{"createdTime":1729899273000,"updatedTime":1729899273000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":1.89,"words":568},"filePathRelative":"unreal/exp[经验]/10-inputvector.md","localizedDate":"2024年10月25日","excerpt":"\\n\\n<h3>GetLastMovementInputVector</h3>\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token comment\\">/**\\n * 返回上一次由 ConsumeMovementInputVector() 处理的世界空间中的输入向量，这通常由 Pawn 或 PawnMovementComponent 完成。\\n * 任何需要了解上次影响移动的输入的用户都应该使用此函数。\\n * 例如，动画更新会使用这个函数，因为默认情况下，帧中更新的顺序是：\\n * PlayerController（设备输入）-&gt; MovementComponent -&gt; Pawn -&gt; Mesh（动画）\\n *\\n * @return 上一次由 ConsumeMovementInputVector() 处理的世界空间中的输入向量。\\n * @see AddMovementInput(), GetPendingMovementInputVector(), ConsumeMovementInputVector()\\n */</span>\\n<span class=\\"token function\\">UFUNCTION</span><span class=\\"token punctuation\\">(</span>BlueprintCallable<span class=\\"token punctuation\\">,</span> Category<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"Pawn|Input\\"</span><span class=\\"token punctuation\\">,</span> meta<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">(</span>Keywords<span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"GetMovementInput GetInput\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\nENGINE_API FVector <span class=\\"token function\\">GetLastMovementInputVector</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">const</span><span class=\\"token punctuation\\">;</span>\\n\\n</code></pre></div>","autoDesc":true}')}}]);