"use strict";(self.webpackChunkrenderdoc=self.webpackChunkrenderdoc||[]).push([[7917],{667:(n,a,s)=>{s.r(a),s.d(a,{comp:()=>o,data:()=>c});var e=s(20641);const t=(0,e.Fv)('<h3 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">template</span> <span class="token operator">&lt;</span><span class="token keyword">typename</span> <span class="token class-name">KeyType</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token class-name">ValueType</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token class-name">KeyFuncs</span> <span class="token operator">=</span> DefaultKeyFuncs<span class="token operator">&lt;</span>KeyType<span class="token operator">&gt;</span><span class="token punctuation">,</span> <span class="token keyword">typename</span> <span class="token class-name">Allocator</span> <span class="token operator">=</span> FDefaultAllocator<span class="token operator">&gt;</span>\n<span class="token keyword">class</span> <span class="token class-name">TMap</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>KeyType</code>: 键的数据类型。</li><li><code>ValueType</code>: 值的数据类型。</li><li><code>KeyFuncs</code>: 用于处理键的函数对象，默认为 <code>DefaultKeyFuncs</code>，提供默认的键比较和哈希函数。</li><li><code>Allocator</code>: 内存分配器，默认为 <code>FDefaultAllocator</code>，负责分配和释放内存。</li></ul><h3 id="成员函数和操作" tabindex="-1"><a class="header-anchor" href="#成员函数和操作"><span>成员函数和操作</span></a></h3><p><code>TMap</code> 提供了一系列成员函数和操作，用于插入、访问、删除和搜索键值对。一些常见的操作包括：</p><ul><li><code>Add</code>: 向映射中添加键值对。</li><li><code>Remove</code>: 从映射中删除指定键的键值对。</li><li><code>Find</code>: 查找映射中是否包含指定键。</li><li><code>Num</code>: 获取映射中键值对的数量。</li><li><code>Empty</code>: 检查映射是否为空。</li><li><code>Empty</code>: 清空映射，删除所有键值对。</li><li><code>Key</code>, <code>Value</code>: 通过迭代器访问键或值。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// 创建一个TMap实例</span>\nTMap<span class="token operator">&lt;</span>int32<span class="token punctuation">,</span> FString<span class="token operator">&gt;</span> MyMap<span class="token punctuation">;</span>\n\n<span class="token comment">// 添加键值对</span>\nMyMap<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;One&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nMyMap<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;Two&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nMyMap<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token function">TEXT</span><span class="token punctuation">(</span><span class="token string">&quot;Three&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 获取键值对的数量</span>\nint32 NumKeyValuePairs <span class="token operator">=</span> MyMap<span class="token punctuation">.</span><span class="token function">Num</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 检查是否包含指定键</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span>MyMap<span class="token punctuation">.</span><span class="token function">Contains</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    <span class="token comment">// 根据键获取值</span>\n    FString Value <span class="token operator">=</span> MyMap<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 通过迭代器遍历键值对</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> TPair<span class="token operator">&lt;</span>int32<span class="token punctuation">,</span> FString<span class="token operator">&gt;</span><span class="token operator">&amp;</span> Pair <span class="token operator">:</span> MyMap<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        int32 Key <span class="token operator">=</span> Pair<span class="token punctuation">.</span>Key<span class="token punctuation">;</span>\n        FString Value <span class="token operator">=</span> Pair<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>\n\n        <span class="token comment">// 处理键值对...</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在C++中，范围（range-based）for循环的特性是在遍历时自动解包容器中的元素，而不需要显式使用迭代器。</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code>\n<span class="token keyword">const</span> TMap<span class="token operator">&lt;</span>TSubclassOf<span class="token operator">&lt;</span>UUserWidget<span class="token operator">&gt;</span><span class="token punctuation">,</span> FGameplayTag<span class="token operator">&gt;</span><span class="token operator">&amp;</span> WidgetMap\n\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token keyword">auto</span><span class="token operator">&amp;</span> WidgetEntry <span class="token operator">:</span> WidgetMap<span class="token punctuation">)</span><span class="token comment">//这里推导出来的是TTuple</span>\n\t<span class="token punctuation">{</span>\n\t\tTSubclassOf<span class="token operator">&lt;</span>UUserWidget<span class="token operator">&gt;</span> WidgetClass <span class="token operator">=</span> WidgetEntry<span class="token punctuation">.</span>Key<span class="token punctuation">;</span>\n\t\tFGameplayTag ContextTag <span class="token operator">=</span> WidgetEntry<span class="token punctuation">.</span>Value<span class="token punctuation">;</span>\n\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>WidgetClass<span class="token punctuation">)</span>\n\t\t<span class="token punctuation">{</span>\n\t\t\tExtensionSubsystem<span class="token operator">-&gt;</span><span class="token function">RegisterExtensionAsWidgetForContext</span><span class="token punctuation">(</span>ContextTag<span class="token punctuation">,</span> LocalPlayer<span class="token punctuation">,</span> WidgetClass<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>迭代器访问</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">auto</span> It <span class="token operator">=</span> WidgetMap<span class="token punctuation">.</span><span class="token function">CreateIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> It<span class="token punctuation">;</span> <span class="token operator">++</span>It<span class="token punctuation">)</span>\n<span class="token punctuation">{</span>\n    TSubclassOf<span class="token operator">&lt;</span>UUserWidget<span class="token operator">&gt;</span> WidgetClass <span class="token operator">=</span> It<span class="token punctuation">.</span><span class="token function">Key</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    FGameplayTag ContextTag <span class="token operator">=</span> It<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>WidgetClass<span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        ExtensionSubsystem<span class="token operator">-&gt;</span><span class="token function">RegisterExtensionAsWidgetForContext</span><span class="token punctuation">(</span>ContextTag<span class="token punctuation">,</span> LocalPlayer<span class="token punctuation">,</span> WidgetClass<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ul><li><code>TMap</code> 的键和值可以是任何可以比较和哈希的类型，但通常建议使用基本数据类型或支持比较和哈希的自定义类型。</li><li><code>TMap</code>，不需要手动释放内存，它会在合适的时机自动完成。</li><li>在性能要求较高的情况下，可以根据具体需求选择合适的 <code>KeyFuncs</code> 和 <code>Allocator</code>。</li><li>考虑映射的生命周期和内存管理，以避免内存泄漏或非法访问。</li></ul>',14),p={},o=(0,s(66262).A)(p,[["render",function(n,a){const s=(0,e.g2)("chatmessage");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.bF)(s,{avatar:"../../assets/emoji/hx.png",avatarWidth:40},{default:(0,e.k6)((()=>[(0,e.eW)(" TMap是UE提供的高性能的关联容器，用于存储键值对的模板容器，其中键和值可以是任何类型。类似于C++标准库中的 std::map 或 std::unordered_map。 ")])),_:1}),t])}]]),c=JSON.parse('{"path":"/unreal/function_%E5%87%BD%E6%95%B0_/8-TMap.html","title":"F8.TMap|映射表","lang":"zh-CN","frontmatter":{"title":"F8.TMap|映射表","order":8,"category":["u++"],"description":"定义 KeyType: 键的数据类型。 ValueType: 值的数据类型。 KeyFuncs: 用于处理键的函数对象，默认为 DefaultKeyFuncs，提供默认的键比较和哈希函数。 Allocator: 内存分配器，默认为 FDefaultAllocator，负责分配和释放内存。 成员函数和操作 TMap 提供了一系列成员函数和操作，用于插入、...","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/unreal/function_%E5%87%BD%E6%95%B0_/8-TMap.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"F8.TMap|映射表"}],["meta",{"property":"og:description","content":"定义 KeyType: 键的数据类型。 ValueType: 值的数据类型。 KeyFuncs: 用于处理键的函数对象，默认为 DefaultKeyFuncs，提供默认的键比较和哈希函数。 Allocator: 内存分配器，默认为 FDefaultAllocator，负责分配和释放内存。 成员函数和操作 TMap 提供了一系列成员函数和操作，用于插入、..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-03T18:34:11.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-03T18:34:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"F8.TMap|映射表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-03T18:34:11.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":3,"title":"成员函数和操作","slug":"成员函数和操作","link":"#成员函数和操作","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}],"git":{"createdTime":1704306851000,"updatedTime":1704306851000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":2.01,"words":602},"filePathRelative":"unreal/function[函数]/8-TMap.md","localizedDate":"2024年1月3日","excerpt":"\\n<h3>定义</h3>\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">template</span> <span class=\\"token operator\\">&lt;</span><span class=\\"token keyword\\">typename</span> <span class=\\"token class-name\\">KeyType</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">typename</span> <span class=\\"token class-name\\">ValueType</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">typename</span> <span class=\\"token class-name\\">KeyFuncs</span> <span class=\\"token operator\\">=</span> DefaultKeyFuncs<span class=\\"token operator\\">&lt;</span>KeyType<span class=\\"token operator\\">&gt;</span><span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">typename</span> <span class=\\"token class-name\\">Allocator</span> <span class=\\"token operator\\">=</span> FDefaultAllocator<span class=\\"token operator\\">&gt;</span>\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">TMap</span>\\n<span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token comment\\">// ...</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div>","autoDesc":true}')}}]);