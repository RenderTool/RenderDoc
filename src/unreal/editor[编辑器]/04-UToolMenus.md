---
title: ED04.ToolMenus|在任意扩展点插入自定义按钮
order : 22
category:
  - u++
---

## 回顾

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
之前的章节我们对编辑器的一些图标有了初步的认识。同时将自己的类注册到了内容浏览器的右键中。
</chatmessage>

## UToolMenus

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`ToolMenus` 是编辑器中用于创建菜单和工具栏的工具类。

</chatmessage>

### **📌 常见扩展点**

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

`ToolMenus `可以在几乎所有的扩展点注册，包括主菜单、工具栏、右键菜单等。

</chatmessage>

![](..%2Fassets%2Ftoolmenus001.png)

| 扩展点           | `ToolMenus` ID                      | 说明                        |
|---------------|-------------------------------------|---------------------------|
| **主菜单**       | `"LevelEditor.MainMenu"`            | 顶部的 `文件`、`编辑`、`窗口` 这些主菜单栏 |
| **关卡编辑器工具栏**  | `"LevelEditor.LevelEditorToolBar"`  | 顶部的 `保存`、`播放` 按钮所在的工具栏    |
| **内容浏览器右键菜单** | `"ContentBrowser.AssetContextMenu"` | 右键点击资源时的菜单                |
| **关卡视图右键菜单**  | `"LevelEditor.ActorContextMenu"`    | 右键点击 `Actor` 时的菜单         |
| **资产编辑器工具栏**  | `"AssetEditor.DefaultToolBar"`      | 编辑 `蓝图`、`材质` 等时的工具栏       |

---
### Debug

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
偷偷问一句！这些绿色的字是怎么搞出来的！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >

>编辑器偏好设置-->开发者工具-->显示UI扩展点

</chatmessage>

![](..%2Fassets%2Ftoolmenus002.png)


## 实践

### 📂 **引入模块**

```csharp
PrivateDependencyModuleNames.AddRange
(
    new string[]
    {
        "ToolMenus",
    }
);
```

### 📃 **注册菜单**

```cpp
void FDataSystemEditorModule::StartupModule()
{
	//注册菜单
	UToolMenus::RegisterStartupCallback(FSimpleMulticastDelegate::FDelegate::CreateRaw(this, &FDataSystemEditorModule::RegisterMenus));
}

```
<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft >
不用Dada提示了吧，要写在自己插件的模块类中
</chatmessage>

---

### **Section 和 Entry**


| **概念**            | **作用**                      |
|-------------------|-----------------------------|
| **`Section`（区块）** | 用于组织菜单选项的 **分组**，类似于 `菜单分类` |
| **`Entry`（选项）**   | 具体的 **菜单项**，用户可以点击的按钮       |

---

## **📖 示例：在不同扩展点添加菜单**

### **1️⃣ 在工具栏添加按钮**
```cpp
UToolMenu* Menu = UToolMenus::Get()->ExtendMenu("LevelEditor.LevelEditorToolBar");
FToolMenuSection& Section = Menu->FindOrAddSection("CustomTools");
Section.AddEntry(FToolMenuEntry::InitToolBarButton(
    "MyToolbarButton",
    FUIAction(FExecuteAction::CreateLambda([] { UE_LOG(LogTemp, Warning, TEXT("点击了工具栏按钮")); })),
    LOCTEXT("MyToolbarButtonLabel", "工具栏按钮"),
    LOCTEXT("MyToolbarButtonTooltip", "点击这个按钮"),
    FSlateIcon(FAppStyle::GetAppStyleSetName(), "LevelEditor.Recompile")
));
```

---

### **2️⃣ 在内容浏览器右键菜单添加选项**
```cpp
UToolMenu* Menu = UToolMenus::Get()->ExtendMenu("ContentBrowser.AssetContextMenu");
FToolMenuSection& Section = Menu->FindOrAddSection("Common");
Section.AddMenuEntry("MyContentBrowserOption",
    LOCTEXT("MyContentBrowserLabel", "内容浏览器操作"),
    LOCTEXT("MyContentBrowserTooltip", "右键点击资产后可以看到"),
    FSlateIcon(),
    FUIAction(FExecuteAction::CreateLambda([] { UE_LOG(LogTemp, Warning, TEXT("点击了内容浏览器选项")); }))
);
```

---

### **3️⃣ 在关卡编辑器右键菜单（Actor 右键）添加选项**
```cpp
UToolMenu* Menu = UToolMenus::Get()->ExtendMenu("LevelEditor.ActorContextMenu");
FToolMenuSection& Section = Menu->FindOrAddSection("ActorOptions");
Section.AddMenuEntry("MyActorOption",
    LOCTEXT("MyActorLabel", "Actor 操作"),
    LOCTEXT("MyActorTooltip", "右键点击 Actor 后可以看到"),
    FSlateIcon(),
    FUIAction(FExecuteAction::CreateLambda([] { UE_LOG(LogTemp, Warning, TEXT("点击了 Actor 右键菜单选项")); }))
);
```

---

### **4️⃣ 创建自己的自定义菜单**
```cpp
UToolMenu* MyCustomMenu = UToolMenus::Get()->RegisterMenu("MyCustomMenu");
FToolMenuSection& Section = MyCustomMenu->AddSection("CustomSection");
Section.AddMenuEntry("MyCustomEntry",
    LOCTEXT("MyCustomLabel", "自定义选项"),
    LOCTEXT("MyCustomTooltip", "点击自定义选项"),
    FSlateIcon(),
    FUIAction(FExecuteAction::CreateLambda([] { UE_LOG(LogTemp, Warning, TEXT("点击了自定义菜单！")); }))
);
```

---
