"use strict";(self.webpackChunkrenderdoc=self.webpackChunkrenderdoc||[]).push([[1785],{15563:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>i});var t=a(20641);const e=a.p+"assets/img/SimpleFactory.ca0eba45.svg",p=(0,t.Lk)("h3",{id:"simplefactory简单工厂",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#simplefactory简单工厂"},[(0,t.Lk)("span",null,"SimpleFactory简单工厂")])],-1),o=(0,t.Fv)('<figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="simple-factory-模式的核心组件" tabindex="-1"><a class="header-anchor" href="#simple-factory-模式的核心组件"><span>Simple Factory 模式的核心组件：</span></a></h3><ol><li><p><strong>定义接口或抽象类：</strong> 创建一个表示产品的接口或抽象类，其中包含产品的通用方法（例如，<code>operate</code>）。</p></li><li><p><strong>创建具体产品类：</strong> 实现产品接口或继承抽象类，定义具体的产品类，每个类负责实现产品接口中的方法。</p></li><li><p><strong>定义工厂类：</strong> 创建一个工厂类，其中包含一个用于创建产品对象的方法。这个方法可能是静态的，用于根据客户端的需求创建具体产品对象。</p></li><li><p><strong>客户端使用工厂类：</strong> 客户端代码通过调用工厂类的方法来获取产品对象，而不是直接实例化具体产品类。这有助于降低客户端与具体产品类之间的耦合度。</p></li></ol><h3 id="实践" tabindex="-1"><a class="header-anchor" href="#实践"><span>实践</span></a></h3><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdexcept&gt;</span></span>\n<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;memory&gt;</span></span>\n\n<span class="token comment">// 产品接口</span>\n<span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">virtual</span> <span class="token operator">~</span><span class="token function">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 具体产品类 A</span>\n<span class="token keyword">class</span> <span class="token class-name">ConcreteProductA</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Product</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;具体产品 A 的操作&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 具体产品类 B</span>\n<span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Product</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;具体产品 B 的操作&quot;</span> <span class="token operator">&lt;&lt;</span> std<span class="token double-colon punctuation">::</span>endl<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 简单工厂类</span>\n<span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">static</span> std<span class="token double-colon punctuation">::</span>unique_ptr<span class="token operator">&lt;</span>Product<span class="token operator">&gt;</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token keyword">const</span> std<span class="token double-colon punctuation">::</span>string<span class="token operator">&amp;</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">make_unique</span><span class="token generic class-name"><span class="token operator">&lt;</span>ConcreteProductA<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">return</span> std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">make_unique</span><span class="token generic class-name"><span class="token operator">&lt;</span>ConcreteProductB<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token keyword">throw</span> std<span class="token double-colon punctuation">::</span><span class="token function">invalid_argument</span><span class="token punctuation">(</span><span class="token string">&quot;Unsupported product type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 客户端</span>\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// 客户端通过简单工厂创建具体产品对象，无需手动释放指针</span>\n    <span class="token keyword">auto</span> productA <span class="token operator">=</span> <span class="token class-name">SimpleFactory</span><span class="token double-colon punctuation">::</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    productA<span class="token operator">-&gt;</span><span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">auto</span> productB <span class="token operator">=</span> <span class="token class-name">SimpleFactory</span><span class="token double-colon punctuation">::</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    productB<span class="token operator">-&gt;</span><span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// 离开作用域时，智能指针会自动释放内存</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>这种方式利用了多态性，客户端只需要知道产品的抽象接口，而不需要了解具体产品的实现细节。 这使得系统更加灵活，可以轻松地添加新的产品类，而不需要修改客户端代码。这符合面向对象设计的开闭原则。 这种模式有助于将对象的创建过程封装起来，使客户端代码与具体对象的创建过程解耦。</p></blockquote>',6),c={},l=(0,a(66262).A)(c,[["render",function(n,s){const a=(0,t.g2)("chatmessage");return(0,t.uX)(),(0,t.CE)("div",null,[p,(0,t.bF)(a,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40},{default:(0,t.k6)((()=>[(0,t.eW)(" 简单工厂（Simple Factory）是一种创建型设计模式，其目的是通过一个单独的工厂类来创建对象，而不直接在客户端代码中实例化对象。 这种模式有助于将对象的创建过程封装起来，使客户端代码与具体对象的创建过程解耦。 ")])),_:1}),o])}]]),i=JSON.parse('{"path":"/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/2-SimpleFactory.html","title":"DS2.SimpleFactory|简单工厂","lang":"zh-CN","frontmatter":{"title":"DS2.SimpleFactory|简单工厂","order":2,"category":["c++"],"description":"SimpleFactory简单工厂 Simple Factory 模式的核心组件： 定义接口或抽象类： 创建一个表示产品的接口或抽象类，其中包含产品的通用方法（例如，operate）。 创建具体产品类： 实现产品接口或继承抽象类，定义具体的产品类，每个类负责实现产品接口中的方法。 定义工厂类： 创建一个工厂类，其中包含一个用于创建产品对象的方法。这个方...","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/2-SimpleFactory.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"DS2.SimpleFactory|简单工厂"}],["meta",{"property":"og:description","content":"SimpleFactory简单工厂 Simple Factory 模式的核心组件： 定义接口或抽象类： 创建一个表示产品的接口或抽象类，其中包含产品的通用方法（例如，operate）。 创建具体产品类： 实现产品接口或继承抽象类，定义具体的产品类，每个类负责实现产品接口中的方法。 定义工厂类： 创建一个工厂类，其中包含一个用于创建产品对象的方法。这个方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DS2.SimpleFactory|简单工厂\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"SimpleFactory简单工厂","slug":"simplefactory简单工厂","link":"#simplefactory简单工厂","children":[]},{"level":3,"title":"Simple Factory 模式的核心组件：","slug":"simple-factory-模式的核心组件","link":"#simple-factory-模式的核心组件","children":[]},{"level":3,"title":"实践","slug":"实践","link":"#实践","children":[]}],"git":{"createdTime":1703391495000,"updatedTime":1704233233000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":2}]},"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"language/cpp/designer[设计模式]/2-SimpleFactory.md","localizedDate":"2023年12月24日","excerpt":"<h3>SimpleFactory简单工厂</h3>\\n\\n<figure><figcaption></figcaption></figure>\\n<h3>Simple Factory 模式的核心组件：</h3>\\n<ol>\\n<li>\\n<p><strong>定义接口或抽象类：</strong> 创建一个表示产品的接口或抽象类，其中包含产品的通用方法（例如，<code>operate</code>）。</p>\\n</li>\\n<li>\\n<p><strong>创建具体产品类：</strong> 实现产品接口或继承抽象类，定义具体的产品类，每个类负责实现产品接口中的方法。</p>\\n</li>\\n<li>\\n<p><strong>定义工厂类：</strong> 创建一个工厂类，其中包含一个用于创建产品对象的方法。这个方法可能是静态的，用于根据客户端的需求创建具体产品对象。</p>\\n</li>\\n<li>\\n<p><strong>客户端使用工厂类：</strong> 客户端代码通过调用工厂类的方法来获取产品对象，而不是直接实例化具体产品类。这有助于降低客户端与具体产品类之间的耦合度。</p>\\n</li>\\n</ol>","autoDesc":true}')}}]);