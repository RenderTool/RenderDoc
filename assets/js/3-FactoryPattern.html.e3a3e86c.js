"use strict";(self.webpackChunkrenderdoc=self.webpackChunkrenderdoc||[]).push([[1152],{29839:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>i,data:()=>r});var t=a(20641);const e=a.p+"assets/img/Factory Method Pattern.d4fc7998.svg",p=a.p+"assets/img/Abstract Factory Pattern.24dfdbd5.svg",o=(0,t.Lk)("h3",{id:"factorypattern",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#factorypattern"},[(0,t.Lk)("span",null,"FactoryPattern")])],-1),c=(0,t.Fv)('<h3 id="工厂方法模式-factory-method-pattern" tabindex="-1"><a class="header-anchor" href="#工厂方法模式-factory-method-pattern"><span>工厂方法模式（Factory Method Pattern）：</span></a></h3><ol><li><p><strong>定义：</strong> 工厂方法模式定义了一个用于创建对象的接口，但由子类决定实例化的类是哪一个。它使一个类的实例化延迟到其子类。</p></li><li><p><strong>组成部分：</strong></p><ul><li><strong>抽象产品类（Abstract Product）：</strong> 声明了产品的接口。</li><li><strong>具体产品类（Concrete Product）：</strong> 实现了抽象产品接口的具体类。</li><li><strong>抽象工厂类（Creator）：</strong> 声明了一个创建产品对象的工厂方法，可以包含一些默认的实现。</li><li><strong>具体工厂类（Concrete Creator）：</strong> 实现了抽象工厂类，实际负责创建产品的具体工厂。</li></ul></li><li><p><strong>示例代码：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteProductA</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Product</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 具体产品 A 的操作</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Product</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 具体产品 B 的操作</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Creator</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">virtual</span> Product<span class="token operator">*</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteCreatorA</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Creator</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    Product<span class="token operator">*</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">ConcreteProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteCreatorB</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Creator</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    Product<span class="token operator">*</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">ConcreteProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="抽象工厂模式-abstract-factory-pattern" tabindex="-1"><a class="header-anchor" href="#抽象工厂模式-abstract-factory-pattern"><span>抽象工厂模式（Abstract Factory Pattern）：</span></a></h3><ol><li><p><strong>定义：</strong> 抽象工厂模式提供一个接口，用于创建相关或依赖对象的家族，而不需要指定它们的具体类。</p></li><li><p><strong>组成部分：</strong></p><ul><li><strong>抽象产品类（Abstract Product）：</strong> 声明了产品的接口。</li><li><strong>具体产品类（Concrete Product）：</strong> 实现了抽象产品接口的具体类。</li><li><strong>抽象工厂类（Abstract Factory）：</strong> 声明了一组创建相关产品的方法。</li><li><strong>具体工厂类（Concrete Factory）：</strong> 实现了抽象工厂类，负责创建一组相关的产品。</li></ul></li><li><p><strong>示例代码：</strong></p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">AbstractProductA</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteProductA1</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractProductA</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 具体产品 A1 的操作</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteProductA2</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractProductA</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 具体产品 A2 的操作</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">AbstractProductB</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteProductB1</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractProductB</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 具体产品 B1 的操作</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteProductB2</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractProductB</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token comment">// 具体产品 B2 的操作</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">virtual</span> AbstractProductA<span class="token operator">*</span> <span class="token function">createProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">virtual</span> AbstractProductB<span class="token operator">*</span> <span class="token function">createProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteFactory1</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractFactory</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    AbstractProductA<span class="token operator">*</span> <span class="token function">createProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">ConcreteProductA1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    AbstractProductB<span class="token operator">*</span> <span class="token function">createProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">ConcreteProductB1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">ConcreteFactory2</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">AbstractFactory</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    AbstractProductA<span class="token operator">*</span> <span class="token function">createProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">ConcreteProductA2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    AbstractProductB<span class="token operator">*</span> <span class="token function">createProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">ConcreteProductB2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="区别" tabindex="-1"><a class="header-anchor" href="#区别"><span>区别：</span></a></h3><ol><li><p><strong>工厂方法模式：</strong></p><ul><li>只定义一个创建产品的接口，由子类决定具体创建哪个产品。</li><li>一个工厂对应一个产品。</li><li>只有一个抽象工厂和一个具体工厂。</li></ul></li><li><p><strong>抽象工厂模式：</strong></p><ul><li>定义一组创建相关产品的接口，一个工厂可以创建一组相关的产品。</li><li>一个工厂对应一个产品家族。</li><li>存在多个抽象工厂和多个具体工厂，每个具体工厂负责创建一组相关的产品。</li></ul></li></ol><h3 id="依赖倒置" tabindex="-1"><a class="header-anchor" href="#依赖倒置"><span>依赖倒置</span></a></h3><p>依赖倒置原则（Dependency Inversion Principle，DIP）是面向对象设计中的一项重要原则，它由罗伯特·C·马丁（Robert C. Martin）提出。该原则的核心思想是：</p><ol><li>高层模块不应该依赖于低层模块，两者都应该依赖于抽象。</li><li>抽象不应该依赖于细节，细节应该依赖于抽象。</li></ol><p>这意味着在设计系统时，应该将高层次的模块定义抽象接口，并且低层次的模块通过实现这些接口来依赖于抽象。这种反转的依赖关系有助于实现系统的松耦合，提高系统的灵活性和可维护性。</p><p>与工厂模式的关联在于，工厂模式是一种符合依赖倒置原则的设计模式。在工厂模式中，客户端不直接依赖于具体的产品类，而是依赖于一个抽象的工厂接口，通过工厂接口来创建具体的产品实例。这样，客户端与具体产品的实现细节解耦，而是依赖于抽象的工厂接口。</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>\n\n<span class="token comment">// Abstract product interface</span>\n<span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">virtual</span> <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">virtual</span> <span class="token operator">~</span><span class="token function">Product</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Concrete product implementation</span>\n<span class="token keyword">class</span> <span class="token class-name">ConcreteProduct</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Product</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">void</span> <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        std<span class="token double-colon punctuation">::</span>cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;ConcreteProduct operation\\n&quot;</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Abstract factory interface</span>\n<span class="token keyword">class</span> <span class="token class-name">Factory</span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    <span class="token keyword">virtual</span> Product<span class="token operator">*</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">virtual</span> <span class="token operator">~</span><span class="token function">Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">default</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Concrete factory implementation</span>\n<span class="token keyword">class</span> <span class="token class-name">ConcreteFactory</span> <span class="token operator">:</span> <span class="token base-clause"><span class="token keyword">public</span> <span class="token class-name">Factory</span></span> <span class="token punctuation">{</span>\n<span class="token keyword">public</span><span class="token operator">:</span>\n    Product<span class="token operator">*</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span> <span class="token keyword">override</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">ConcreteProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Client code depends on abstract interfaces</span>\n    Factory<span class="token operator">*</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">ConcreteFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    Product<span class="token operator">*</span> product <span class="token operator">=</span> factory<span class="token operator">-&gt;</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    product<span class="token operator">-&gt;</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token comment">// Cleanup</span>\n    <span class="token keyword">delete</span> product<span class="token punctuation">;</span>\n    <span class="token keyword">delete</span> factory<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',14),l={},i=(0,a(66262).A)(l,[["render",function(n,s){const a=(0,t.g2)("chatmessage");return(0,t.uX)(),(0,t.CE)("div",null,[o,(0,t.bF)(a,{avatar:"../../../assets/emoji/blzt.png",avatarWidth:40},{default:(0,t.k6)((()=>[(0,t.eW)(" 工厂模式（Factory Pattern）是一种创建型设计模式，它提供了一个接口，用于创建对象的实例，但允许子类在改变实例化类的类型时，仍保持一致的创建接口。 工厂模式主要包括工厂方法模式和抽象工厂模式两种变体。 ")])),_:1}),c])}]]),r=JSON.parse('{"path":"/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/3-FactoryPattern.html","title":"DS3.FactoryPattern|工厂模式","lang":"zh-CN","frontmatter":{"title":"DS3.FactoryPattern|工厂模式","order":3,"category":["c++"],"description":"FactoryPattern 工厂方法模式（Factory Method Pattern）： 定义： 工厂方法模式定义了一个用于创建对象的接口，但由子类决定实例化的类是哪一个。它使一个类的实例化延迟到其子类。 组成部分： 抽象产品类（Abstract Product）： 声明了产品的接口。 具体产品类（Concrete Product）： 实现了抽象产...","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/language/cpp/designer_%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F_/3-FactoryPattern.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"DS3.FactoryPattern|工厂模式"}],["meta",{"property":"og:description","content":"FactoryPattern 工厂方法模式（Factory Method Pattern）： 定义： 工厂方法模式定义了一个用于创建对象的接口，但由子类决定实例化的类是哪一个。它使一个类的实例化延迟到其子类。 组成部分： 抽象产品类（Abstract Product）： 声明了产品的接口。 具体产品类（Concrete Product）： 实现了抽象产..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-02T22:07:13.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2024-01-02T22:07:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DS3.FactoryPattern|工厂模式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-02T22:07:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":3,"title":"FactoryPattern","slug":"factorypattern","link":"#factorypattern","children":[]},{"level":3,"title":"工厂方法模式（Factory Method Pattern）：","slug":"工厂方法模式-factory-method-pattern","link":"#工厂方法模式-factory-method-pattern","children":[]},{"level":3,"title":"抽象工厂模式（Abstract Factory Pattern）：","slug":"抽象工厂模式-abstract-factory-pattern","link":"#抽象工厂模式-abstract-factory-pattern","children":[]},{"level":3,"title":"区别：","slug":"区别","link":"#区别","children":[]},{"level":3,"title":"依赖倒置","slug":"依赖倒置","link":"#依赖倒置","children":[]}],"git":{"createdTime":1703391495000,"updatedTime":1704233233000,"contributors":[{"name":"sigaohe","email":"750831855@qq.com","commits":2}]},"readingTime":{"minutes":3.79,"words":1138},"filePathRelative":"language/cpp/designer[设计模式]/3-FactoryPattern.md","localizedDate":"2023年12月24日","excerpt":"<h3>FactoryPattern</h3>\\n\\n<h3>工厂方法模式（Factory Method Pattern）：</h3>\\n<ol>\\n<li>\\n<p><strong>定义：</strong> 工厂方法模式定义了一个用于创建对象的接口，但由子类决定实例化的类是哪一个。它使一个类的实例化延迟到其子类。</p>\\n</li>\\n<li>\\n<p><strong>组成部分：</strong></p>\\n<ul>\\n<li><strong>抽象产品类（Abstract Product）：</strong> 声明了产品的接口。</li>\\n<li><strong>具体产品类（Concrete Product）：</strong> 实现了抽象产品接口的具体类。</li>\\n<li><strong>抽象工厂类（Creator）：</strong> 声明了一个创建产品对象的工厂方法，可以包含一些默认的实现。</li>\\n<li><strong>具体工厂类（Concrete Creator）：</strong> 实现了抽象工厂类，实际负责创建产品的具体工厂。</li>\\n</ul>\\n</li>\\n<li>\\n<p><strong>示例代码：</strong></p>\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Product</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">virtual</span> <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">operate</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ConcreteProductA</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Product</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">operate</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">override</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 具体产品 A 的操作</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ConcreteProductB</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Product</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">void</span> <span class=\\"token function\\">operate</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">override</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token comment\\">// 具体产品 B 的操作</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">Creator</span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    <span class=\\"token keyword\\">virtual</span> Product<span class=\\"token operator\\">*</span> <span class=\\"token function\\">createProduct</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ConcreteCreatorA</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Creator</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    Product<span class=\\"token operator\\">*</span> <span class=\\"token function\\">createProduct</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">override</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token function\\">ConcreteProductA</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">ConcreteCreatorB</span> <span class=\\"token operator\\">:</span> <span class=\\"token base-clause\\"><span class=\\"token keyword\\">public</span> <span class=\\"token class-name\\">Creator</span></span> <span class=\\"token punctuation\\">{</span>\\n<span class=\\"token keyword\\">public</span><span class=\\"token operator\\">:</span>\\n    Product<span class=\\"token operator\\">*</span> <span class=\\"token function\\">createProduct</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span> <span class=\\"token keyword\\">override</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token keyword\\">new</span> <span class=\\"token function\\">ConcreteProductB</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token punctuation\\">}</span>\\n<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">;</span>\\n</code></pre></div></li>\\n</ol>","autoDesc":true}')}}]);