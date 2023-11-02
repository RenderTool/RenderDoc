---
home: true
icon: home
title: 主页
heroImage: /logo.svg
#bgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg
#bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg
bgImageStyle:
  background-attachment: fixed
heroText: RenderDoc
tagline:  斯高和的笔记
actions:
  - text: 开始修炼
    link: /#🤷%E2%80%8D♂%EF%B8%8F-写在前面
    type: primary
features:
  - title: 技术聚焦
    details: 以 UE4/5 C++ 为主线，专注于解决与 UE4/5 相关的技术问题。
  - title: 踩坑记录
    details: 包括多种技能的踩坑经验，涵盖 C++、Lua、Python、Js 等...
  - title: 丰富表达
    details: 图文代码结合，直观地展示解决方案，同时享受问题解决的过程。



---
## 🤷‍♂️ 写在前面

欢迎你的到来，本站基于 [VuePress](https://theme-hope.vuejs.press/zh/) 的中文技术文档站点！虽然被称为技术站，却更像是我的个人开发日志。
希望这里的内容能对你有所帮助！
### 🤞关于本站
我主要记录与建模、渲染技术、光线追踪、[UE4/UE5](https://docs.unrealengine.com/5.0/zh-CN/)、各类编程语言、以及各类工具使用等综合技术应用相关的内容。

主要形式：图文- 视频- 代码(蓝图模块基于 **[BlueprintUE](https://blueprintue.com/)** 可用Ctrl+C复制)

<iframe src="https://blueprintue.com/render/j0oxoqx7/" width="100%" height="500" scrolling="no" allowfullscreen></iframe>

::: info
* 当前BlueprintUE部分是外链，无法保证其长期有效性。因此，每个蓝图都会提供一个备用的图像版本。
:::


::: code-tabs#shell

@tab:active  cpp

``` cpp
void AYourGameCharacter::BeginPlay()
{
    // Super 表示调用父类的方法或属性，这里调用开始事件
    Super::BeginPlay();
    // 控制台中打野hello
    UE_LOG(LogTemp, Warning, TEXT("hello"));
}
```

@tab lua

```lua

-- 定义一个新的 Lua 类，继承自 Unreal Engine 的 AYourGameCharacter
YourGameCharacter = AYourGameCharacter:new()

-- 重写 BeginPlay 方法
function YourGameCharacter:BeginPlay()
    -- 调用父类的 BeginPlay 方法
    self:SuperBeginPlay()
    
    -- 控制台中打印 hello
    UE_LOG("LogTemp", "Warning", "hello")
end

```
:::


[//]: # (<div class="image-preview">)

[//]: # (  <img src="https://theme-hope.vuejs.press/assets/image/1.jpg" />)

[//]: # (</div>)

[//]: # ()
[//]: # (<style>)

[//]: # (  .image-preview {)

[//]: # (    display: flex;)

[//]: # (    justify-content: space-evenly;)

[//]: # (    align-items: center;)

[//]: # (    flex-wrap: wrap;)

[//]: # (  })

[//]: # ()
[//]: # (  .image-preview > img {)

[//]: # (     box-sizing: border-box;)

[//]: # (     width: 33.3% !important;)

[//]: # (     padding: 9px;)

[//]: # (     border-radius: 16px;)

[//]: # (  })

[//]: # ()
[//]: # (  @media &#40;max-width: 719px&#41;{)

[//]: # (    .image-preview > img {)

[//]: # (      width: 50% !important;)

[//]: # (    })

[//]: # (  })

[//]: # ()
[//]: # (  @media &#40;max-width: 419px&#41;{)

[//]: # (    .image-preview > img {)

[//]: # (      width: 100% !important;)

[//]: # (    })

[//]: # (  })

[//]: # (</style>)

 ::: tip
* 为了TA的视力健康，默认采用深色主题。
 :::


## :email: 联系

- **Email**: <a href="mailto:750831855@qq.com">750831855@qq.com</a>
- **声明**：请注意，本站仅供个人学习参考之用，部分流程和术语可能需要读者自行辨别和确认。
