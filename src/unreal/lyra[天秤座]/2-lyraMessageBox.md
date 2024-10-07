---
title: LY2.Lyra-UIMessaging
order : 2
category:
  - unreal
---

## 项目说明：
`ExorcistUIMessaging` 是一个用于在游戏中展示全局消息框（MessageBox）的子系统，支持错误、确认等提示信息。
它基于 MVC 设计模式实现，通过异步蓝图节点来展示消息，能够简化用户与系统之间的交互。


### 功能：

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
该子系统用于显示全局消息框，例如确认消息、错误提示等。
</chatmessage>


![](..%2Fassets%2FUIMessaging001.png)

### 主要模块：
1. **UAsyncAction_ShowConfirmation**：  

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
 一个蓝图节点，负责通过异步操作将消息展示到屏幕上。
</chatmessage>

   ```cpp
   UFUNCTION(BlueprintCallable, BlueprintCosmetic, meta = (BlueprintInternalUseOnly = "true", WorldContext = "InWorldContextObject"))
   static UAsyncAction_ShowConfirmation* ShowConfirmationYesNo(
       UObject* InWorldContextObject, FText Title, FText Message
   );
   ```

2. **UCommonGameDialogDescriptor**（Model层 - 实体类）：  

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
由上可知，任务交给了蓝图异步处理器，并且将数据组装，一般我们回单独负责一个纯数据类，也称实体类用于创建包含消息的描述符实例，
他只负责数据处理的逻辑，不负责消息的展示。
</chatmessage>

   ```cpp
   static UCommonGameDialogDescriptor* CreateConfirmationOk(const FText& Header, const FText& Body);

   UCommonGameDialogDescriptor* UCommonGameDialogDescriptor::CreateConfirmationOk(const FText& Header, const FText& Body)
   {
       UCommonGameDialogDescriptor* Descriptor = NewObject<UCommonGameDialogDescriptor>();
       Descriptor->Header = Header;
       Descriptor->Body = Body;

       FConfirmationDialogAction ConfirmAction;
       ConfirmAction.Result = ECommonMessagingResult::Confirmed;
       ConfirmAction.OptionalDisplayText = LOCTEXT("Ok", "Ok");

       Descriptor->ButtonActions.Add(ConfirmAction);

       return Descriptor;
   }
   ```
   `CreateConfirmationOk` 函数用于构建一个消息描述符，包含标题、内容以及“确认”按钮。

3. **UExorcistConfirmationScreen**(View层)：  
   继承自 `UCommonGameDialog` 和 `UCommonActivatableWidget`，负责显示对话框内容。

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
数据实体类有了,接下来是展示的视图类，很简单本质是一个UserWidget，只不过预留了组装接口。
</chatmessage>

![](..%2Fassets%2FUIMessaging002.png)

```cpp
   virtual void SetupDialog(UCommonGameDialogDescriptor* Descriptor, 
   FCommonMessagingResultDelegate ResultCallback);
   ```
   `SetupDialog` 方法用于将对话框的数据进行设置，并绑定用户交互的回调函数。

4. **UExorcistUIMessaging 子系统（Controller层）**：  

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
MVC中的M和V都有了，接着就是咱们控制组装的问题了，Lyra中写了专门的子系统来负责生成对应的消息框，最终实例化到屏幕上。
</chatmessage>

   ```cpp
   virtual void ShowConfirmation(UCommonGameDialogDescriptor* DialogDescriptor, 
   FCommonMessagingResultDelegate ResultCallback = FCommonMessagingResultDelegate()) override;

   void UExorcistUIMessaging::ShowConfirmation(UCommonGameDialogDescriptor* DialogDescriptor, FCommonMessagingResultDelegate ResultCallback)
   {
       if (UCommonLocalPlayer* LocalPlayer = GetLocalPlayer<UCommonLocalPlayer>())
       {
           if (UPrimaryGameLayout* RootLayout = LocalPlayer->GetRootUILayout())
           {
               RootLayout->PushWidgetToLayerStack<UCommonGameDialog>(TAG_UI_LAYER_MODAL, ConfirmationDialogClassPtr, [DialogDescriptor, ResultCallback](UCommonGameDialog& Dialog) {
                   Dialog.SetupDialog(DialogDescriptor, ResultCallback);
               });
               GEngine->AddOnScreenDebugMessage(0, 10.0f, FColor::Red, TEXT("ShowConfirmation"));
           }
       }
   }
   ```
   `ShowConfirmation` 函数负责将 `DialogDescriptor` 实例推送到 UI 栈中，展示对话框。


<chatmessage avatar="../../assets/emoji/bqb (4).png" :avatarWidth="40">
有个问题！为什么不用子系统直接来做这个事情?
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (3).png" :avatarWidth="40" alignLeft>
子系统确实可以直接来做这个事情，我们不应该局限在他的框架中。
</chatmessage>