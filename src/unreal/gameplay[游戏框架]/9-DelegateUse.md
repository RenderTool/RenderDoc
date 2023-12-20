---
title: GP9.Delegate|委托实践
order : 9
category:
  - u++
---
## 委托实践|Delegate

1. **声明委托：**

   ```cpp
   DECLARE_DELEGATE(FMyDelegate);
   ```

   或者使用 `DECLARE_MULTICAST_DELEGATE` 来声明多播委托：

   ```cpp
   DECLARE_MULTICAST_DELEGATE(FMyMulticastDelegate);
   ```

   还可以声明带有参数的委托：

   ```cpp
   DECLARE_DELEGATE_OneParam(FMyDelegateWithParam, int32);
   ```

2. **定义委托实例：**

   在类中定义委托的实例：

   ```cpp
   UCLASS()
   class MYPROJECT_API AMyActor : public AActor
   {
       GENERATED_BODY()

   public:
       FMyDelegate MyDelegate;
       FMyMulticastDelegate MyMulticastDelegate;
       FMyDelegateWithParam MyDelegateWithParam;
   };
   ```

3. **绑定和解绑委托：**

   在构造函数或其他地方绑定和解绑委托：

   ```cpp
   AMyActor::AMyActor()
   {
       // 绑定委托
       MyDelegate.BindUObject(this, &AMyActor::MyFunction);
       
       // 绑定多播委托
       MyMulticastDelegate.AddUObject(this, &AMyActor::MyMulticastFunction);

       // 绑定带参数的委托
       MyDelegateWithParam.BindUObject(this, &AMyActor::MyFunctionWithParam);

       // 解绑委托
       MyDelegate.Unbind();

       // 解绑多播委托
       MyMulticastDelegate.RemoveAll(this);
   }
   ```

4. **委托的回调函数：**

   定义委托回调的成员函数：

   ```cpp
   UFUNCTION()
   void MyFunction()
   {
       // 委托被触发时执行的代码
   }

   UFUNCTION()
   void MyMulticastFunction()
   {
       // 多播委托被触发时执行的代码
   }

   UFUNCTION()
   void MyFunctionWithParam(int32 Param)
   {
       // 带参数的委托被触发时执行的代码
   }
   ```

5. **触发委托：**

   在适当的地方触发委托：

   ```cpp
   void SomeFunction()
   {
       // 触发委托
       MyDelegate.ExecuteIfBound();

       // 触发多播委托
       MyMulticastDelegate.Broadcast();

       // 触发带参数的委托
       MyDelegateWithParam.ExecuteIfBound(42);
   }
   ```
