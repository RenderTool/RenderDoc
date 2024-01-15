---
title: SD2.PBR材质系统
order: 1
category:
  - unreal
---
:::note
本章不讨论PBR材质系统的实现细节，而是一些基础的知识普及，具体到实时渲染那个专栏会深入研究。
:::

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
什么是PBR？
</chatmessage>

### PBR
<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
“基于物理的渲染(Physically Based Rendering)” – 简称 PBR
</chatmessage>

>对计算机图形学感兴趣的朋友可以去阅读[《PBRT》](https://www.pbrt.org/)这本书

![](..%2Fassets%2FPBRT.png)

### 传统材质

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
为什么要用到PBR呢？
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
这里不得不提到游戏中的传统三件套了diffuse（漫反射）、specular（镜面反射）和normal（法线）
</chatmessage>

![](..%2Fassets%2FPBRT001.png)

1. **Diffuse（漫反射）**：
    - **定义**：漫反射是表面对光的散射，即光线在物体表面被吸收然后均匀地散射到各个方向。
    - **特点**：漫反射表面通常不会产生明显的高光，而是呈现出均匀的亮度。

2. **Specular（镜面反射）**：
    - **定义**：镜面反射是光线直接从表面反射，形成明亮的高光。
    - **特点**：通常用于模拟物体表面的光泽和反光。

3. **Normal（法线）**：
    - **定义**：法线是在表面上的垂直方向，用于描述表面的方向。
    - **特点**：法线在渲染中用于计算光照和阴影，影响表面的视觉外观。

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
在早期的游戏中，由于计算机硬件的限制，包括处理能力和图形性能，游戏开发者无法使用复杂的光线追踪和全局光照等技术来实现真实的物理效果。
因此，游戏开发者必须依赖于艺术家的创造力和设计技巧来表现光照、高光和阴影等效果。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
难怪我解包有些游戏贴图上还会带着光影和高光信息。
</chatmessage>

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
是的，可能是你已经先入为主的接触了PBR材质，所以对这个比较陌生。下面我们以木板为例康康有哪些PBR材质通道
</chatmessage>

### PBR贴图

![](..%2Fassets%2FPBRT002.png)

![](..%2Fassets%2Fanar.jpg)

1. **Albedo Map（反照率贴图）/Base Color Map（基础颜色贴图）：**
    - 描述物体表面的颜色，即光线直接照射表面后的颜色。在PBR中，Albedo Map通常表示物体表面对入射光的反射程度。

![](..%2Fassets%2Fbasecolor.gif)

2. **Normal Map（法线贴图）：**
    - 用于模拟表面的微小细节和凹凸不平。法线贴图通过改变每个像素的法线方向，使得光照计算考虑到这些微小细节。

![](..%2Fassets%2Fnormal_maps.gif)

3. **Metallic Map（金属度贴图）：**
    - 描述物体表面的金属或非金属属性。黑色通常表示非金属，白色表示金属。

![](..%2Fassets%2Fmetallic.gif)

4. **Roughness Map（粗糙度贴图）/Glossiness Map（光泽度贴图）：**
    - 描述物体表面的粗糙度。在Metal/Roughness工作流中，Roughness Map通常表示表面的粗糙度；而在Specular/Glossiness工作流中，Glossiness Map表示光泽度。

![](..%2Fassets%2Froughness.gif)


5. **Height/Displacement Map（高度/位移贴图）：**
    - 描述表面的高度信息，用于模拟凹凸不平的表面细节。在一些情况下，这种信息也可以通过法线贴图来表示。

![](..%2Fassets%2Fheightscale.gif)

6. **Emissive Map（自发光贴图）：**
    - 描述物体表面的自发光部分，即在没有外部光照的情况下自己发光的区域。

![](..%2Fassets%2Fglow.gif)

7. **Ambient Occlusion Map（环境光遮蔽贴图）：**
   - 描述物体表面各部分受到环境光照的遮蔽程度。黑色表示较强的遮蔽，白色表示无遮蔽。

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
很显然，我们的木板上并没有安装灯具和金属，所以金属和发光贴图都是黑色。
</chatmessage>


### PBR材质的两个流程

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
我看到很多渲染引擎例如Vray（早期版本）好像没有PBR贴图
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
确实，VrayNEXT(4.0)以后加入了金属工作流，才使得他的工作流更加解决游戏那一套。但他使用的是PBR流程中的离线流程那一套！
</chatmessage>

![](..%2Fassets%2Fvray.jpeg)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
听你的意思是游戏的pbr和离线渲染的pbr不一样？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
是的，一般来说，游戏是要保证实时性，对各种计算公式都有自己的简化，比如UE大大简化了PBR，满足1ms/60fps的要求。
</chatmessage>

![](..%2Fassets%2Fanar002.jpg)

1. **Metal/Roughness Workflow**：
    - **Metallic（金属度）：** 使用这个工作流的材质系统中，通常通过一个Metallic Map来定义物体表面的金属度。黑色表示非金属，白色表示金属。
    - **Roughness（粗糙度）：** 使用Roughness Map来描述表面的粗糙度，白色表示光滑，黑色表示粗糙。

   这种工作流较为直观，因为它使用了两个相对简单的参数来描述材质的重要特性。

2. **Specular/Glossiness Workflow**：
    - **Specular（镜面反射）：** 这个工作流使用Specular Map来定义物体表面的镜面反射。Specular Map中的颜色通道通常表示表面的反射颜色。
    - **Glossiness（光泽度）：** 使用Glossiness Map来描述表面的光泽度，白色表示光滑，黑色表示光泽度较低。

   这种工作流与Metal/Roughness不同，但在一些离线渲染引擎和工具中仍然被使用。

[参考链接](https://isux.tencent.com/articles/THE-PBR-GUIDE-2.html)


### 通道合并

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
说到简化，好像有些软件打包的PBR材质好像没有Metallic、Roughness、Ambient Occlusion，取而代之的是一张叫做ARM的贴图。
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
是的，为了节省内存，我们会将Metallic、Roughness、Ambient Occlusion三个通道贴图各自存放到贴图的R、G、B三个通道中。
</chatmessage>

![](..%2Fassets%2Fanar003.jpg)

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
我有问题！为什么这三个贴图可以合并？法线、颜色贴图不能？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
首先一个常识问题，颜色贴图你猜他为什么叫颜色贴图？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
Metallic、Roughness、Ambient Occlusion都是纯色贴图，你可以用PS点开看他们三个通道的颜色值是一致的。
</chatmessage>

![](..%2Fassets%2Fanar004.png)

### 颜色空间

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
可是我导入UE中为什么看不到应该有的光泽？我明明给了0.25的光泽度？
</chatmessage>

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>
应该是你贴图颜色空间没有正确设置
</chatmessage>

| 贴图类型                                | 颜色空间         |
|-------------------------------------|--------------|
| Albedo Map / Base Color Map         | gamma_srgb   |
| Normal Map                          | gamma_linear |
| Metallic Map                        | gamma_linear |
| Roughness Map / Glossiness Map      | gamma_linear |
| Ambient Occlusion Map               | gamma_linear |
| Height/Displacement Map             | gamma_linear |
| Emissive Map                        | gamma_linear |
| ARM（Ambient, Roughness, Metallic）   | gamma_linear |
| Height/Displacement.EXR/HDR 等32位的贴图 | lin_srgb     |

>修改前

![](..%2Fassets%2Fanar005.png)

>修改后

![](..%2Fassets%2Fanar006.png)

