"use strict";(self.webpackChunkrenderdoc=self.webpackChunkrenderdoc||[]).push([[4079],{48172:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>N,data:()=>S});var t=a(20641);const e=a.p+"assets/img/getactorofclass.3d55511b.jpg",p=a.p+"assets/img/getallactorsofclass.06f632c5.png",o=a.p+"assets/img/constwithoutconst.fc122542.png",c=a.p+"assets/img/wss.e1dd42e5.png",l=a.p+"assets/img/xd.10216e87.png",i=a.p+"assets/img/yjsc.55c7ab8b.png",u=a.p+"assets/img/cppcastvsgetacotrofclass.558d014e.png",r=(0,t.Lk)("h2",{id:"getactorofclass",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#getactorofclass"},[(0,t.Lk)("span",null,"GetActorOfClass")])],-1),d=(0,t.Lk)("h3",{id:"节点介绍",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#节点介绍"},[(0,t.Lk)("span",null,"节点介绍")])],-1),k=(0,t.Lk)("figure",null,[(0,t.Lk)("img",{src:e,alt:"",tabindex:"0",loading:"lazy"}),(0,t.Lk)("figcaption")],-1),m=(0,t.Lk)("h3",{id:"节点案例",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#节点案例"},[(0,t.Lk)("span",null,"节点案例")])],-1),v=(0,t.Lk)("h3",{id:"c-剖析",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#c-剖析"},[(0,t.Lk)("span",null,"c++剖析")])],-1),b=(0,t.Lk)("span",{style:{color:"#c0392b"}},"getactorofclass",-1),g=(0,t.Fv)('<h4 id="gameplaystatics-h" tabindex="-1"><a class="header-anchor" href="#gameplaystatics-h"><span>GameplayStatics.h</span></a></h4><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">/**\n * 在世界中查找指定类的第一个Actor。\n * 这是一项耗时的操作，谨慎使用，例如不要在每一帧都使用。\n * @param ActorClass 要查找的Actor的类。必须指定，否则结果将为空。\n * @return 指定类的Actor。\n */</span>\n<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span><span class="token punctuation">,</span> meta<span class="token operator">=</span><span class="token punctuation">(</span>WorldContext<span class="token operator">=</span><span class="token string">&quot;WorldContextObject&quot;</span><span class="token punctuation">,</span> DeterminesOutputType<span class="token operator">=</span><span class="token string">&quot;ActorClass&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">AActor</span><span class="token operator">*</span> <span class="token function">GetActorOfClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> UObject<span class="token operator">*</span> WorldContextObject<span class="token punctuation">,</span> TSubclassOf<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> ActorClass<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),f=(0,t.Lk)("p",null,[(0,t.eW)("一个普通静态函数，返回类型是 "),(0,t.Lk)("code",null,"AActor*"),(0,t.eW)("，即指向 "),(0,t.Lk)("code",null,"AActor"),(0,t.eW)(" 类的指针。"),(0,t.Lk)("br"),(0,t.eW)(" 在C++中，"),(0,t.Lk)("code",null,"static"),(0,t.eW)(" 关键字用于指示该函数是属于类而不是类的实例，并且可以直接通过类名来调用，而不需要创建类的实例。")],-1),A=(0,t.Fv)('<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">int</span> myVariable<span class="token punctuation">;</span>\n\n    <span class="token keyword">void</span> <span class="token function">MyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 函数实现</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 创建一个MyClass类的实例</span>\nMyClass myObject<span class="token punctuation">;</span>\n\n<span class="token comment">//如果函数是static实现，则不需要创建实例就可以直接调用</span>\n\n<span class="token keyword">class</span> <span class="token class-name">MyClass</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">int</span> myVariable<span class="token punctuation">;</span>\n\n    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">MyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 静态函数实现</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 直接调用静态函数</span>\n<span class="token class-name">MyClass</span><span class="token double-colon punctuation">::</span><span class="token function">MyFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),h=(0,t.Lk)("p",null,[(0,t.eW)("这里static修饰的了函数,因此 "),(0,t.Lk)("code",null,"UGameplayStatics::GetActorOfClass"),(0,t.eW)(" 可以直接调用，而不需要创建 "),(0,t.Lk)("code",null,"UGameplayStatics"),(0,t.eW)(" 类的实例。")],-1),y=(0,t.Fv)('<h4 id="gameplaystatics-cpp" tabindex="-1"><a class="header-anchor" href="#gameplaystatics-cpp"><span>GameplayStatics.cpp</span></a></h4><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>AActor<span class="token operator">*</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetActorOfClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> UObject<span class="token operator">*</span> WorldContextObject<span class="token punctuation">,</span> TSubclassOf<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> ActorClass<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// 使用QUICK_SCOPE_CYCLE_COUNTER进行性能分析，标记函数调用的性能</span>\n    <span class="token function">QUICK_SCOPE_CYCLE_COUNTER</span><span class="token punctuation">(</span>UGameplayStatics_GetActorOfClass<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 如果未提供ActorClass，则不执行任何操作，直接返回nullptr</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>ActorClass<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// 通过WorldContextObject获取当前世界的指针，如果失败则记录错误并返回nullptr</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>UWorld<span class="token operator">*</span> World <span class="token operator">=</span> GEngine<span class="token operator">-&gt;</span><span class="token function">GetWorldFromContextObject</span><span class="token punctuation">(</span>WorldContextObject<span class="token punctuation">,</span> EGetWorldErrorMode<span class="token double-colon punctuation">::</span>LogAndReturnNull<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// 使用TActorIterator迭代World中的所有指定类型的Actor</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span>TActorIterator<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> <span class="token function">It</span><span class="token punctuation">(</span>World<span class="token punctuation">,</span> ActorClass<span class="token punctuation">)</span><span class="token punctuation">;</span> It<span class="token punctuation">;</span> <span class="token operator">++</span>It<span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                <span class="token comment">// 获取当前迭代到的Actor指针</span>\n                AActor<span class="token operator">*</span> Actor <span class="token operator">=</span> <span class="token operator">*</span>It<span class="token punctuation">;</span>\n                <span class="token comment">// 返回找到的第一个符合条件的Actor</span>\n                <span class="token keyword">return</span> Actor<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">// 如果未找到符合条件的Actor，返回nullptr</span>\n    <span class="token keyword">return</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),C=(0,t.Fv)('<h2 id="getallactorofclass" tabindex="-1"><a class="header-anchor" href="#getallactorofclass"><span>GetAllActorOfClass</span></a></h2><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="节点介绍-1" tabindex="-1"><a class="header-anchor" href="#节点介绍-1"><span>节点介绍</span></a></h3>',3),O=(0,t.Fv)('<h4 id="gameplaystatics-h-1" tabindex="-1"><a class="header-anchor" href="#gameplaystatics-h-1"><span>GameplayStatics.h</span></a></h4><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">/**\n * 在世界中查找指定类的所有角色。\n * 这是一个较慢的操作，请谨慎使用，例如不要在每一帧都使用。\n * @param ActorClass 要查找的Actor类。必须指定，否则结果数组将为空。\n * @param OutActors 输出包含指定类的Actor数组。\n */</span>\n<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span><span class="token punctuation">,</span> meta<span class="token operator">=</span><span class="token punctuation">(</span>WorldContext<span class="token operator">=</span><span class="token string">&quot;WorldContextObject&quot;</span><span class="token punctuation">,</span> DeterminesOutputType<span class="token operator">=</span><span class="token string">&quot;ActorClass&quot;</span><span class="token punctuation">,</span> DynamicOutputParam<span class="token operator">=</span><span class="token string">&quot;OutActors&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">GetAllActorsOfClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> UObject<span class="token operator">*</span> WorldContextObject<span class="token punctuation">,</span> TSubclassOf<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> ActorClass<span class="token punctuation">,</span> TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="gameplaystatics-cpp-1" tabindex="-1"><a class="header-anchor" href="#gameplaystatics-cpp-1"><span>GameplayStatics.cpp</span></a></h4><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token class-name">UGameplayStatics</span><span class="token double-colon punctuation">::</span><span class="token function">GetAllActorsOfClass</span><span class="token punctuation">(</span><span class="token keyword">const</span> UObject<span class="token operator">*</span> WorldContextObject<span class="token punctuation">,</span> TSubclassOf<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> ActorClass<span class="token punctuation">,</span> TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// 使用QUICK_SCOPE_CYCLE_COUNTER进行性能分析，标记函数调用的性能</span>\n    <span class="token function">QUICK_SCOPE_CYCLE_COUNTER</span><span class="token punctuation">(</span>UGameplayStatics_GetAllActorsOfClass<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// 清空输出数组</span>\n    OutActors<span class="token punctuation">.</span><span class="token function">Reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 如果未提供类，则不执行任何操作，而是返回空数组</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>ActorClass<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token comment">// 从上下文对象获取世界，如果失败则记录错误并返回空</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>UWorld<span class="token operator">*</span> World <span class="token operator">=</span> GEngine<span class="token operator">-&gt;</span><span class="token function">GetWorldFromContextObject</span><span class="token punctuation">(</span>WorldContextObject<span class="token punctuation">,</span> EGetWorldErrorMode<span class="token double-colon punctuation">::</span>LogAndReturnNull<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token punctuation">{</span>\n            <span class="token comment">// 遍历世界中指定类的所有Actor</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span>TActorIterator<span class="token operator">&lt;</span>AActor<span class="token operator">&gt;</span> <span class="token function">It</span><span class="token punctuation">(</span>World<span class="token punctuation">,</span> ActorClass<span class="token punctuation">)</span><span class="token punctuation">;</span> It<span class="token punctuation">;</span> <span class="token operator">++</span>It<span class="token punctuation">)</span>\n            <span class="token punctuation">{</span>\n                AActor<span class="token operator">*</span> Actor <span class="token operator">=</span> <span class="token operator">*</span>It<span class="token punctuation">;</span>\n                OutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h3>',5),W=(0,t.Lk)("br",null,null,-1),F=(0,t.Fv)("<p><code>DeterminesOutputType</code> 和 <code>DynamicOutputParam</code> 是 UFUNCTION 宏的元数据，用于在蓝图中更好地处理输出参数的类型。</p><ol><li><p><strong><code>DeterminesOutputType</code>：</strong></p><ul><li>当指定了 <code>DeterminesOutputType</code> 元数据时，它表示函数的输出参数类型是由函数的实现决定的，而不是由函数声明时指定的。这对于一些动态生成输出类型的函数非常有用。</li></ul></li><li><p><strong><code>DynamicOutputParam</code>：</strong></p><ul><li>当指定了 <code>DynamicOutputParam</code> 元数据时，它表示函数的输出参数是动态生成的，而不是静态指定的。在函数签名中，你可以看到这个参数被标记为 <code>&amp;OutActors</code>，这就是动态输出参数的示例。</li></ul></li></ol>",2),w=(0,t.Fv)('<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>   <span class="token comment">//没用const限定</span>\n\t<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span><span class="token punctuation">,</span>  meta<span class="token operator">=</span><span class="token punctuation">(</span> DynamicOutputParam<span class="token operator">=</span><span class="token string">&quot;OutActors&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">TestFun</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    \n<span class="token keyword">void</span> <span class="token class-name">UTEST</span><span class="token double-colon punctuation">::</span><span class="token function">TestFun</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n<span class="token comment">//测试使用，实际开发别用哦</span>\n\tAActor<span class="token operator">*</span> Actor2 <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>\n    OutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\tOutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">int</span> Num <span class="token operator">=</span> OutActors<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\tGEngine<span class="token operator">-&gt;</span><span class="token function">AddOnScreenDebugMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5.0f</span><span class="token punctuation">,</span> FColor<span class="token double-colon punctuation">::</span>White<span class="token punctuation">,</span> <span class="token class-name">FString</span><span class="token double-colon punctuation">::</span><span class="token function">FromInt</span><span class="token punctuation">(</span>Num<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token function">FVector2D</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\t\n\t<span class="token comment">//const限定</span>\n\t<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span> <span class="token punctuation">,</span>meta<span class="token operator">=</span><span class="token punctuation">(</span>DynamicOutputParam<span class="token operator">=</span><span class="token string">&quot;OutActors&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\t<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">TestFun2</span><span class="token punctuation">(</span><span class="token keyword">const</span> TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span><span class="token punctuation">;</span>  \n\t<span class="token keyword">void</span> <span class="token class-name">UTEST</span><span class="token double-colon punctuation">::</span><span class="token function">TestFun2</span><span class="token punctuation">(</span> <span class="token keyword">const</span> TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n\t<span class="token keyword">int</span> Num <span class="token operator">=</span> OutActors<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\tGEngine<span class="token operator">-&gt;</span><span class="token function">AddOnScreenDebugMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5.0f</span><span class="token punctuation">,</span> FColor<span class="token double-colon punctuation">::</span>White<span class="token punctuation">,</span> <span class="token class-name">FString</span><span class="token double-colon punctuation">::</span><span class="token function">FromInt</span><span class="token punctuation">(</span>Num<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token function">FVector2D</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),L=(0,t.Lk)("figure",null,[(0,t.Lk)("img",{src:c,alt:"",tabindex:"0",loading:"lazy"}),(0,t.Lk)("figcaption")],-1),T=(0,t.Lk)("figure",null,[(0,t.Lk)("img",{src:l,alt:"",tabindex:"0",loading:"lazy"}),(0,t.Lk)("figcaption")],-1),x=(0,t.Fv)('<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">//没有meta</span>\n<span class="token function">UFUNCTION</span><span class="token punctuation">(</span>BlueprintCallable<span class="token punctuation">,</span> Category<span class="token operator">=</span><span class="token string">&quot;Actor&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">TestFun3</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">void</span> <span class="token class-name">UTEST</span><span class="token double-colon punctuation">::</span><span class="token function">TestFun3</span><span class="token punctuation">(</span>TArray<span class="token operator">&lt;</span>AActor<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> OutActors<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n<span class="token comment">//测试使用，实际开发别用哦</span>\n\tAActor<span class="token operator">*</span> Actor2 <span class="token operator">=</span> <span class="token keyword">nullptr</span><span class="token punctuation">;</span>\n\tOutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\tOutActors<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>Actor2<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">int</span> Num <span class="token operator">=</span> OutActors<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\tGEngine<span class="token operator">-&gt;</span><span class="token function">AddOnScreenDebugMessage</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5.0f</span><span class="token punctuation">,</span> FColor<span class="token double-colon punctuation">::</span>White<span class="token punctuation">,</span> <span class="token class-name">FString</span><span class="token double-colon punctuation">::</span><span class="token function">FromInt</span><span class="token punctuation">(</span>Num<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token function">FVector2D</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',2),j=(0,t.Fv)('<p>结论：</p><ol><li>const 限定优先级更高。</li><li>DynamicOutputParam 确实帮我们动态生成了一个对象，但即使不加也会主动尝试生成。</li></ol><h2 id="其他问题" tabindex="-1"><a class="header-anchor" href="#其他问题"><span>其他问题</span></a></h2><h3 id="getactorofclassvscast" tabindex="-1"><a class="header-anchor" href="#getactorofclassvscast"><span><code>getactorofclass</code>vs<code>Cast</code></span></a></h3><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接"><span>参考链接</span></a></h2>',6),G={href:"https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433",target:"_blank",rel:"noopener noreferrer"},_={href:"https://forums.unrealengine.com/t/dynamicoutputtype-dynamicoutputparam/336920",target:"_blank",rel:"noopener noreferrer"},U={},N=(0,a(66262).A)(U,[["render",function(n,s){const a=(0,t.g2)("chatmessage"),e=(0,t.g2)("gifwithbutton"),p=(0,t.g2)("ExternalLinkIcon");return(0,t.uX)(),(0,t.CE)("div",null,[r,d,(0,t.bF)(a,{avatar:"../../assets/emoji/new1.png",avatarWidth:50,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" GetActorOfClass是一个UGameplayStatics类中的静态函数，在世界中找到指定类的第一个Actor ")])),_:1}),k,m,(0,t.bF)(e,{src:"../../assets/unrealgif/refencecom.gif"}),(0,t.bF)(a,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40},{default:(0,t.k6)((()=>[(0,t.eW)(" 为什么不放在一个关卡会报错。 ")])),_:1}),v,(0,t.bF)(a,{avatar:"../../assets/emoji/bqb (3).png",avatarWidth:40,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" Baba先带你康康 "),b,(0,t.eW)("节点源码实现原理吧. ")])),_:1}),g,(0,t.bF)(a,{avatar:"../../assets/emoji/new1.png",avatarWidth:40,alignLeft:""},{default:(0,t.k6)((()=>[f])),_:1}),(0,t.bF)(a,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:(0,t.k6)((()=>[(0,t.eW)(" Baba我不懂什么叫创建类的实例！ ")])),_:1}),(0,t.bF)(a,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" 给你举个例子吧！ ")])),_:1}),A,(0,t.bF)(a,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:(0,t.k6)((()=>[h])),_:1}),y,(0,t.bF)(a,{avatar:"../../assets/emoji/bqb (2).png",avatarWidth:40,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" 由此可见，getactorofclass的本质就是利用迭代器在世界中迭代查找指定类的第一个Actor。 关于迭代器，请参考我的Template[模板] ")])),_:1}),(0,t.bF)(a,{avatar:"../../assets/emoji/new1.png",avatarWidth:40},{default:(0,t.k6)((()=>[(0,t.eW)(" 搜嘎！难怪都要放入关卡中。 ")])),_:1}),C,(0,t.bF)(a,{avatar:"../../assets/emoji/new1.png",avatarWidth:50,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" GetAllActorOfClass顾名思义找到在世界中找到指定类的所有Actor ")])),_:1}),O,(0,t.bF)(a,{avatar:"../../assets/emoji/hh.png",avatarWidth:50},{default:(0,t.k6)((()=>[(0,t.eW)(" 为什么一开始就清空了数组,我也没见到节点有传入数组啊？"),W])),_:1}),(0,t.bF)(a,{avatar:"../../assets/emoji/new4.png",avatarWidth:50,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" 你注意UFUNCTION宏meta（元数据）的描述了吗？ ")])),_:1}),F,(0,t.bF)(a,{avatar:"../../assets/emoji/hh.png",avatarWidth:50},{default:(0,t.k6)((()=>[(0,t.eW)(" 那么这个节点会强制变成输出节点吗？比如我加了const修饰。 ")])),_:1}),(0,t.bF)(a,{avatar:"../../assets/emoji/new7.png",avatarWidth:50,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" 测试一下不就行了！ ")])),_:1}),w,(0,t.bF)(a,{avatar:"../../assets/emoji/new8.png",avatarWidth:50},{default:(0,t.k6)((()=>[(0,t.eW)(" 测试结果看来const修饰后会将数组变成输入节点。 ")])),_:1}),(0,t.bF)(a,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" 没错，而且我们测试代码中给2个空指针到这个指针数组中，测试结果也是打印2. ")])),_:1}),L,(0,t.bF)(a,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" const修饰后数组变成只读，需要我们自己传入数据。 ")])),_:1}),T,(0,t.bF)(a,{avatar:"../../assets/emoji/new8.png",avatarWidth:50},{default:(0,t.k6)((()=>[(0,t.eW)(" const强制变成只读这没毛病，但动态生成我还是抱有怀疑态度，如果我们去掉DynamicOutputParam呢？还会打印2吗？ ")])),_:1}),x,(0,t.bF)(a,{avatar:"../../assets/emoji/new3.png",avatarWidth:50,alignLeft:""},{default:(0,t.k6)((()=>[(0,t.eW)(" 居然还是可以！看来系统自动帮我们初始化了一个指针数组。 ")])),_:1}),j,(0,t.Lk)("p",null,[(0,t.Lk)("a",G,[(0,t.eW)("https://forums.unrealengine.com/t/get-actor-of-class-vs-cast-to-class/597433"),(0,t.bF)(p)])]),(0,t.Lk)("p",null,[(0,t.Lk)("a",_,[(0,t.eW)("DynamicOutputType & DynamicOutputParam"),(0,t.bF)(p)])])])}]]),S=JSON.parse('{"path":"/unreal/function_%E5%87%BD%E6%95%B0_/11-Getactorofclass.html","title":"F11.GetActorOfClass","lang":"zh-CN","frontmatter":{"title":"F11.GetActorOfClass","order":11,"category":["u++"],"description":"GetActorOfClass 节点介绍 节点案例","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/unreal/function_%E5%87%BD%E6%95%B0_/11-Getactorofclass.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"F11.GetActorOfClass"}],["meta",{"property":"og:description","content":"GetActorOfClass 节点介绍 节点案例"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-03T18:34:11.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-03T18:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"F11.GetActorOfClass\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-03T18:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":2,"title":"GetActorOfClass","slug":"getactorofclass","link":"#getactorofclass","children":[{"level":3,"title":"节点介绍","slug":"节点介绍","link":"#节点介绍","children":[]},{"level":3,"title":"节点案例","slug":"节点案例","link":"#节点案例","children":[]},{"level":3,"title":"c++剖析","slug":"c-剖析","link":"#c-剖析","children":[]}]},{"level":2,"title":"GetAllActorOfClass","slug":"getallactorofclass","link":"#getallactorofclass","children":[{"level":3,"title":"节点介绍","slug":"节点介绍-1","link":"#节点介绍-1","children":[]},{"level":3,"title":"问题","slug":"问题","link":"#问题","children":[]}]},{"level":2,"title":"其他问题","slug":"其他问题","link":"#其他问题","children":[{"level":3,"title":"getactorofclassvsCast","slug":"getactorofclassvscast","link":"#getactorofclassvscast","children":[]}]},{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]}],"git":{"createdTime":1704306851000,"updatedTime":1704306851000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":5.29,"words":1587},"filePathRelative":"unreal/function[函数]/11-Getactorofclass.md","localizedDate":"2024年1月3日","excerpt":"<h2>GetActorOfClass</h2>\\n<h3>节点介绍</h3>\\n\\n<figure><figcaption></figcaption></figure>\\n<h3>节点案例</h3>\\n","autoDesc":true}')}}]);