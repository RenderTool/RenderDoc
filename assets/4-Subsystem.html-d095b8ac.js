import{_ as u,r as p,o as r,c as d,d as e,w as a,a as s,e as o,b as n}from"./app-719fbc9a.js";const m="/RenderDoc/assets/subs-33b0dae7.png",k="/RenderDoc/assets/subsst-3a9b106e.png",v="/RenderDoc/assets/OUTER-480058bc.png",b="/RenderDoc/assets/uobjcet-0da0868f.png",y="/RenderDoc/assets/rtuobject-56165e13.png",g="/RenderDoc/assets/forceinline-848bc04d.png",h={},S=s("figure",null,[s("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),G=o(`<div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token comment">/** Subsystems are auto instanced classes that share the lifetime of certain engine constructs
 * 
 *	Currently supported Subsystem lifetimes are:
 *		Engine		 -&gt; inherit UEngineSubsystem
 *		Editor		 -&gt; inherit UEditorSubsystem
 *		GameInstance -&gt; inherit UGameInstanceSubsystem
 *		World		 -&gt; inherit UWorldSubsystem
 *		LocalPlayer	 -&gt; inherit ULocalPlayerSubsystem
 *
 *
 *	Normal Example:
 *		class UMySystem : public UGameInstanceSubsystem
 *	Which can be accessed by:
 *		UGameInstance* GameInstance = ...;
 *		UMySystem* MySystem = GameInstance-&gt;GetSubsystem&lt;UMySystem&gt;();
 *
 *	or the following if you need protection from a null GameInstance
 *		UGameInstance* GameInstance = ...;
 *		UMyGameSubsystem* MySubsystem = UGameInstance::GetSubsystem&lt;MyGameSubsystem&gt;(GameInstance);
 *
 *
 *	You can get also define interfaces that can have multiple implementations.
 *	Interface Example :
 *      MySystemInterface
 *    With 2 concrete derivative classes:
 *      MyA : public MySystemInterface
 *      MyB : public MySystemInterface
 *
 *	Which can be accessed by:
 *		UGameInstance* GameInstance = ...;
 *		const TArray&lt;UMyGameSubsystem*&gt;&amp; MySubsystems = GameInstance-&gt;GetSubsystemArray&lt;MyGameSubsystem&gt;();
 *
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档翻译" tabindex="-1"><a class="header-anchor" href="#文档翻译" aria-hidden="true">#</a> 文档翻译</h3><p>子系统是自动实例化的类，与特定引擎构造的生命周期共享</p><p>当前支持的子系统生命周期有：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 引擎		-&gt; 继承 UEngineSubsystem
<span class="token list punctuation">-</span> 编辑器		-&gt; 继承 UEditorSubsystem
<span class="token list punctuation">-</span> 游戏实例	-&gt; 继承 UGameInstanceSubsystem
<span class="token list punctuation">-</span> 世界		-&gt; 继承 UWorldSubsystem
<span class="token list punctuation">-</span> 本地玩家	-&gt; 继承 ULocalPlayerSubsystem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常规示例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">UMySystem</span> <span class="token operator">:</span> <span class="token keyword">public</span> UGameInstanceSubsystem
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可通过以下方式访问：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>UGameInstance<span class="token operator">*</span> GameInstance <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
UMySystem<span class="token operator">*</span> MySystem <span class="token operator">=</span> GameInstance<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>UMySystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>或者，如果需要防止空 GameInstance 的情况，可以使用以下方式：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>UGameInstance<span class="token operator">*</span> GameInstance <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
UMyGameSubsystem<span class="token operator">*</span> MySubsystem <span class="token operator">=</span> UGameInstance<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">GetSubsystem</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyGameSubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>GameInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>您还可以定义具有多个实现的接口。 接口示例：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>MySystemInterface
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具有两个具体的派生类：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>MyA <span class="token operator">:</span> <span class="token keyword">public</span> MySystemInterface
MyB <span class="token operator">:</span> <span class="token keyword">public</span> MySystemInterface
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>可通过以下方式访问：</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>UGameInstance<span class="token operator">*</span> GameInstance <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> TArray<span class="token operator">&lt;</span>UMyGameSubsystem<span class="token operator">*</span><span class="token operator">&gt;</span><span class="token operator">&amp;</span> MySubsystems <span class="token operator">=</span> GameInstance<span class="token operator">-&gt;</span><span class="token generic-function"><span class="token function">GetSubsystemArray</span><span class="token generic class-name"><span class="token operator">&lt;</span>MyGameSubsystem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实践" tabindex="-1"><a class="header-anchor" href="#实践" aria-hidden="true">#</a> 实践</h3>`,18),_=s("figure",null,[s("img",{src:k,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),U=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"pragma"),n(),s("span",{class:"token expression"},"once")]),n(`

`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"CoreMinimal.h"')]),n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"Subsystems/GameInstanceSubsystem.h"')]),n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"ExorcistGameInstanceSubsystem.generated.h"')]),n(`

`),s("span",{class:"token function"},"UCLASS"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"EXORCIST_API"),n(" UExorcistGameInstanceSubsystem "),s("span",{class:"token operator"},":"),n(),s("span",{class:"token keyword"},"public"),n(` UGameInstanceSubsystem
`),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token function"},"GENERATED_BODY"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
	
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"ExorcistGameInstanceSubsystem.h"')]),n(`

`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),I=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token comment"},"// Copyright Epic Games, Inc. All Rights Reserved."),n(`

`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"pragma"),n(),s("span",{class:"token expression"},"once")]),n(`

`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"Subsystems/Subsystem.h"')]),n(`

`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"GameInstanceSubsystem.generated.h"')]),n(`

`),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"UGameInstance"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token comment"},`/**
 * UGameInstanceSubsystem
 * Base class for auto instanced and initialized systems that share the lifetime of the game instance
 */`),n(`
`),s("span",{class:"token function"},"UCLASS"),s("span",{class:"token punctuation"},"("),n("Abstract"),s("span",{class:"token punctuation"},","),n(" Within "),s("span",{class:"token operator"},"="),n(" GameInstance"),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"ENGINE_API"),n(" UGameInstanceSubsystem "),s("span",{class:"token operator"},":"),n(),s("span",{class:"token keyword"},"public"),n(` USubsystem
`),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token function"},"GENERATED_BODY"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`

`),s("span",{class:"token keyword"},"public"),s("span",{class:"token operator"},":"),n(`
	`),s("span",{class:"token function"},"UGameInstanceSubsystem"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`

	UGameInstance`),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token function"},"GetGameInstance"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token keyword"},"const"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),E=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token comment"},"// Copyright Epic Games, Inc. All Rights Reserved."),n(`

`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"Subsystems/GameInstanceSubsystem.h"')]),n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"Engine/GameInstance.h"')]),n(`

`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token expression"},[s("span",{class:"token function"},"UE_INLINE_GENERATED_CPP_BY_NAME"),s("span",{class:"token punctuation"},"("),n("GameInstanceSubsystem"),s("span",{class:"token punctuation"},")")])]),n(`

`),s("span",{class:"token class-name"},"UGameInstanceSubsystem"),s("span",{class:"token double-colon punctuation"},"::"),s("span",{class:"token function"},"UGameInstanceSubsystem"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
	`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"USubsystem"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

UGameInstance`),s("span",{class:"token operator"},"*"),n(),s("span",{class:"token class-name"},"UGameInstanceSubsystem"),s("span",{class:"token double-colon punctuation"},"::"),s("span",{class:"token function"},"GetGameInstance"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token keyword"},"const"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token keyword"},"return"),n(),s("span",{class:"token generic-function"},[s("span",{class:"token function"},"Cast"),s("span",{class:"token generic class-name"},[s("span",{class:"token operator"},"<"),n("UGameInstance"),s("span",{class:"token operator"},">")])]),s("span",{class:"token punctuation"},"("),s("span",{class:"token function"},"GetOuter"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),w=s("ol",null,[s("li",null,[s("code",null,"UGameInstanceSubsystem"),n(" 类是一个抽象基类，继承自 "),s("code",null,"USubsystem"),n("。这是一个用于定义游戏实例子系统的基础类。")])],-1),j=s("p",null,[n("这里除了几个构造函数也没看到虚函数啊，应该是写在基类中 "),s("code",null,"USubsystem")],-1),x=o('<ol start="2"><li><p>构造函数 <code>UGameInstanceSubsystem::UGameInstanceSubsystem()</code> 初始化了子系统对象，调用基类 <code>USubsystem</code> 的构造函数。</p></li><li><p><code>UGameInstance* UGameInstanceSubsystem::GetGameInstance() const</code> 方法返回与该子系统关联的游戏实例指针。它使用 <code>GetOuter()</code> 函数获取该子系统的外部对象，并将其转换为 <code>UGameInstance</code> 类型。</p></li></ol>',1),A=s("p",null,[n("这里貌似是一个常量指针函数GetGameInstance，可我不理解"),s("code",null,"return Cast<UGameInstance>(GetOuter());"),n("做了啥？")],-1),M=s("figure",null,[s("img",{src:v,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),C=s("p",null,[n("还是老夫来介绍一下吧。咱不能总用抽象的思维去思考问题，关注本质也是很重要的思维。 "),s("code",null,"GetOuter()"),n(" 是 UObjectBase 类中的一个内联返回"),s("code",null,"UObject"),n("指针的函数，用于获取当前对象的外部对象，即包含当前对象的对象。")],-1),O=s("figure",null,[s("img",{src:b,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),N=s("figure",null,[s("img",{src:y,alt:"返回的就是",tabindex:"0",loading:"lazy"}),s("figcaption",null,[n("返回的就是"),s("code",null,"UObject")])],-1),W=s("p",null,[n("FORCEINLINE是一个宏，也就是"),s("code",null,"__forceinline"),n(" 用于强制将函数进行内联展开。")],-1),D=s("figure",null,[s("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1),L=s("p",null,[n("之前我们已经介绍过UE中几乎所有类都继承自 "),s("code",null,"UObject"),n("，"),s("code",null,"UGameInstanceSubsystem"),n(" 类作为子系统也不例外。")],-1),R=o(`<div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>             UObject————————————————————————————
               |                                |
           USubsystem                           |
               |                                |
 UGameInstanceSubsystem——Cast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>UGameInstance</span><span class="token punctuation">&gt;</span></span>(GetOuter())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>UObject</code> 是 Unreal Engine 中所有对象的基类。</li><li><code>USubsystem</code> 是一个子系统抽象类，继承自 <code>UObject</code>。</li><li><code>UGameInstanceSubsystem</code> 也是是一个子系统抽象类，继承自 <code>USubsystem</code>。</li></ul>`,2),F=s("p",null,[n("先放一放细节，我们之前提到还没看到接口 "),s("code",null,"USubsystem类")],-1),B=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token comment"},"// USubsystem 类是 UObject 的子类，用于定义子系统的基本结构。"),n(`
`),s("span",{class:"token function"},"UCLASS"),s("span",{class:"token punctuation"},"("),n("Abstract"),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"ENGINE_API"),n(" USubsystem "),s("span",{class:"token operator"},":"),n(),s("span",{class:"token keyword"},"public"),n(` UObject
`),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token function"},"GENERATED_BODY"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`

`),s("span",{class:"token keyword"},"public"),s("span",{class:"token operator"},":"),n(`
	`),s("span",{class:"token function"},"USubsystem"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`

	`),s("span",{class:"token comment"},`/** 重写此函数以控制是否应创建子系统。
	 * 例如，您可以仅在服务器上创建系统。
	 * 需要注意的是，如果使用此功能，每次获取子系统时都很重要进行空指针检查。
	 *
	 * 注意：在创建实例之前，此函数在 CDO 上调用！
	 *
	 */`),n(`
	`),s("span",{class:"token keyword"},"virtual"),n(),s("span",{class:"token keyword"},"bool"),n(),s("span",{class:"token function"},"ShouldCreateSubsystem"),s("span",{class:"token punctuation"},"("),n("UObject"),s("span",{class:"token operator"},"*"),n(" Outer"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token keyword"},"const"),n(),s("span",{class:"token punctuation"},"{"),n(),s("span",{class:"token keyword"},"return"),n(),s("span",{class:"token boolean"},"true"),s("span",{class:"token punctuation"},";"),n(),s("span",{class:"token punctuation"},"}"),n(`

	`),s("span",{class:"token comment"},"/** 为系统的实例初始化而实现此函数 */"),n(`
	`),s("span",{class:"token keyword"},"virtual"),n(),s("span",{class:"token keyword"},"void"),n(),s("span",{class:"token function"},"Initialize"),s("span",{class:"token punctuation"},"("),n("FSubsystemCollectionBase"),s("span",{class:"token operator"},"&"),n(" Collection"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}"),n(`

	`),s("span",{class:"token comment"},"/** 为系统的实例去初始化而实现此函数 */"),n(`
	`),s("span",{class:"token keyword"},"virtual"),n(),s("span",{class:"token keyword"},"void"),n(),s("span",{class:"token function"},"Deinitialize"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token punctuation"},"{"),s("span",{class:"token punctuation"},"}"),n(`

	`),s("span",{class:"token comment"},"/** 重写以检查全局网络上下文 */"),n(`
	`),s("span",{class:"token keyword"},"virtual"),n(" int32 "),s("span",{class:"token function"},"GetFunctionCallspace"),s("span",{class:"token punctuation"},"("),n("UFunction"),s("span",{class:"token operator"},"*"),n(" Function"),s("span",{class:"token punctuation"},","),n(" FFrame"),s("span",{class:"token operator"},"*"),n(" Stack"),s("span",{class:"token punctuation"},")"),n(),s("span",{class:"token keyword"},"override"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"private"),s("span",{class:"token operator"},":"),n(`
	`),s("span",{class:"token keyword"},"friend"),n(),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"FSubsystemCollectionBase"),s("span",{class:"token punctuation"},";"),n(`
	FSubsystemCollectionBase`),s("span",{class:"token operator"},"*"),n(" InternalOwningSubsystem"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token comment"},`/** DynamicSubsystem 在模块加载和卸载时自动填充/清除现有集合的动态子系统
 *
 * 只有 UEngineSubsystems 和 UEditorSubsystems 允许动态加载。
 * 
 * 如果您的子系统实例未被创建，可能是因为它们所在的模块未被显式加载，
 * 确保有一个 LoadModule("ModuleName") 来加载该模块。
 */`),n(`
`),s("span",{class:"token function"},"UCLASS"),s("span",{class:"token punctuation"},"("),n("Abstract"),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token keyword"},"class"),n(),s("span",{class:"token class-name"},"ENGINE_API"),n(" UDynamicSubsystem "),s("span",{class:"token operator"},":"),n(),s("span",{class:"token keyword"},"public"),n(` USubsystem
`),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token function"},"GENERATED_BODY"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`

`),s("span",{class:"token keyword"},"public"),s("span",{class:"token operator"},":"),n(`
	`),s("span",{class:"token function"},"UDynamicSubsystem"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),T=s("div",{class:"language-cpp line-numbers-mode","data-ext":"cpp"},[s("pre",{class:"language-cpp"},[s("code",null,[s("span",{class:"token comment"},"// Copyright Epic Games, Inc. All Rights Reserved."),n(`

`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"Subsystems/Subsystem.h"')]),n(`
`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token string"},'"Engine/Engine.h"')]),n(`

`),s("span",{class:"token macro property"},[s("span",{class:"token directive-hash"},"#"),s("span",{class:"token directive keyword"},"include"),n(),s("span",{class:"token expression"},[s("span",{class:"token function"},"UE_INLINE_GENERATED_CPP_BY_NAME"),s("span",{class:"token punctuation"},"("),n("Subsystem"),s("span",{class:"token punctuation"},")")])]),n(`

`),s("span",{class:"token class-name"},"USubsystem"),s("span",{class:"token double-colon punctuation"},"::"),s("span",{class:"token function"},"USubsystem"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`

`),s("span",{class:"token punctuation"},"}"),n(`

int32 `),s("span",{class:"token class-name"},"USubsystem"),s("span",{class:"token double-colon punctuation"},"::"),s("span",{class:"token function"},"GetFunctionCallspace"),s("span",{class:"token punctuation"},"("),n("UFunction"),s("span",{class:"token operator"},"*"),n(" Function"),s("span",{class:"token punctuation"},","),n(" FFrame"),s("span",{class:"token operator"},"*"),n(" Stack"),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
	`),s("span",{class:"token keyword"},"return"),n(" GEngine"),s("span",{class:"token operator"},"->"),s("span",{class:"token function"},"GetGlobalFunctionCallspace"),s("span",{class:"token punctuation"},"("),n("Function"),s("span",{class:"token punctuation"},","),n(),s("span",{class:"token keyword"},"this"),s("span",{class:"token punctuation"},","),n(" Stack"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`

`),s("span",{class:"token class-name"},"UDynamicSubsystem"),s("span",{class:"token double-colon punctuation"},"::"),s("span",{class:"token function"},"UDynamicSubsystem"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
	`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token function"},"USubsystem"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},")"),n(`
`),s("span",{class:"token punctuation"},"{"),n(`

`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),P=s("p",null,"TODO",-1);function z(Y,V){const t=p("ChatMessage"),i=p("CodeTabs");return r(),d("div",null,[e(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[n(" 什么是子系统？ ")]),_:1}),e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 虚幻引擎中的子系统是生命周期受控的自动实例化类。 这些类提供了易用的扩展点，程序员可直接获得蓝图和Python公开，同时避免繁复的引擎类修改或覆盖。 ")]),_:1}),S,e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 按照惯例，先看官方源码注释 ")]),_:1}),G,e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 按照官方文档做一遍。 ")]),_:1}),_,e(i,{id:"48",data:[{id:"ExorcistGameInstanceSubsystem.h"},{id:"ExorcistGameInstanceSubsystem.cpp"}],"tab-id":"language"},{title0:a(({value:c,isActive:l})=>[n("ExorcistGameInstanceSubsystem.h")]),title1:a(({value:c,isActive:l})=>[n("ExorcistGameInstanceSubsystem.cpp")]),tab0:a(({value:c,isActive:l})=>[U]),tab1:a(({value:c,isActive:l})=>[f]),_:1},8,["data"]),e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 看来并没有什么特殊的，知识继承了UGameInstanceSubsystem，那么我们康康UGameInstanceSubsystem里面写了什么。 ")]),_:1}),e(i,{id:"57",data:[{id:"GameInstanceSubsystem.h"},{id:"GameInstanceSubsystem.cpp"}],"tab-id":"language"},{title0:a(({value:c,isActive:l})=>[n("GameInstanceSubsystem.h")]),title1:a(({value:c,isActive:l})=>[n("GameInstanceSubsystem.cpp")]),tab0:a(({value:c,isActive:l})=>[I]),tab1:a(({value:c,isActive:l})=>[E]),_:1},8,["data"]),e(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[n(" 好像也没什么特别的，大概就是这些内容 ")]),_:1}),w,e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 既然是抽象基类，来康康他的接口。 ")]),_:1}),e(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[j]),_:1}),e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 那就继续看这个UGameInstanceSubsystem写了哪些东西 ")]),_:1}),x,e(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[A]),_:1}),e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" Cast是一个模板函数，很显然这里将GetOuter()返回值强转成UGameInstance类指针 ")]),_:1}),e(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[n(" GetOuter()到底是什么啊？ ")]),_:1}),M,e(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[n(" 看不懂！ ")]),_:1}),e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[C]),_:1}),O,N,e(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[n(" 这里的FORCEINLINE是什么？ ")]),_:1}),e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[W]),_:1}),D,e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[L]),_:1}),e(t,{avatar:"../../assets/emoji/hh.png",avatarWidth:40},{default:a(()=>[n(" 也就是说通过GetOuter()将`UObject`指针强制转成`UGameInstance`类指针。然后绑定关联UGameInstance到UGameInstanceSubsystem是吗。 ")]),_:1}),R,e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[n(" 是的，这样我们可以直接通过UGameInstanceSubsystem访问UGameInstance。 ")]),_:1}),e(t,{avatar:"../../assets/emoji/dsyj.png",avatarWidth:40,alignLeft:""},{default:a(()=>[F]),_:1}),e(i,{id:"153",data:[{id:"USubsystem.h"},{id:"USubsystem.cpp"}],"tab-id":"language"},{title0:a(({value:c,isActive:l})=>[n("USubsystem.h")]),title1:a(({value:c,isActive:l})=>[n("USubsystem.cpp")]),tab0:a(({value:c,isActive:l})=>[B]),tab1:a(({value:c,isActive:l})=>[T]),_:1},8,["data"]),P])}const q=u(h,[["render",z],["__file","4-Subsystem.html.vue"]]);export{q as default};
