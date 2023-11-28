---
title: Macro4.Delegate|委托
order : 4
category:
  - u++
---
## 委托|Delegate

<ChatMessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
委托字面上来说就是委托别人帮忙介绍认识，双方并没有直接接触。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new9.png" :avatarWidth="40" >
这么说，委托有点像《猫和老鼠——送信使者》,Jerry写信给他的女朋友，让他的侄子帮忙送。Jerry和他女朋友并没有直接接触，而是通过委托侄子传递。
</ChatMessage>

![](..%2Fassets%2Ftomandjerry.jpg)

<ChatMessage avatar="../../assets/emoji/new3.png" :avatarWidth="55"  alignLeft>
确实，这个比喻很形象。
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new7.png" :avatarWidth="40" alignLeft>
关于UE委托的要点如下：
</ChatMessage>

1. **泛型但类型安全的方式：**
   - 委托是一种泛型但类型安全的机制，允许在运行时动态绑定到对象的成员函数。这意味着你可以在不知道对象类型的情况下，安全地调用其成员函数。

2. **动态绑定到任意对象的成员函数：**
   - 委托允许你动态地绑定到任意对象的成员函数。这种灵活性使得在运行时能够决定要调用的函数，而不需要在编译时就确定。

3. **安全地复制委托对象：**
   - 复制委托对象是安全的。这意味着你可以创建一个委托的副本，而不会影响原始委托的状态。每个委托对象都独立于其他委托对象。

4. **值传递委托需要在堆上分配内存：**
   - 值传递委托，即通过值传递委托对象，需要在堆上分配内存。这样的操作相对较慢，因此通常不推荐。最好通过引用传递委托，以避免额外的内存分配。

5. **尽量通过引用传递委托：**
   - 为了避免性能开销，推荐通过引用传递委托，而不是通过值传递。这样可以避免在堆上分配内存，提高代码执行效率。

<ChatMessage avatar="../../assets/emoji/new0.png" :avatarWidth="40" alignLeft>
康康EpicBaba在UE引擎中对委托的注释吧。
</ChatMessage>

>**以下注释来自Engine\Source\Runtime\Core\Public\Delegates\Delegate.h**

```cpp

C++ DELEGATES
-----------------------------------------------------------------------------------------------
 
This system allows you to call member functions on C++ objects in a generic, yet type-safe way.
该系统允许以一种通用但类型安全的方式调用C++对象上的成员函数。

Using delegates, you can dynamically bind to a member function of an arbitrary object,
使用委托，您可以动态绑定到任意对象的成员函数，

then call functions on the object, even if the caller doesn't know the object's type.
然后调用对象上的函数，即使调用方不知道对象的类型。
-----------------------------------------------------------------------------------------------
 
The system predefines various combinations of generic function signatures with which you can
declare a delegate type from, filling in the type names for return value and parameters with
该系统预定义了各种通用函数签名的组合，您可以从中声明委托类型，填充返回值和参数的类型名称

whichever types you need.
根据您需要填充。
-----------------------------------------------------------------------------------------------

Both single-cast and multi-cast delegates are supported, as well as "dynamic" delegates which
can be serialized to disk and accessed from blueprints.  Additionally, delegates may define 
支持单播和多播委托，以及可序列化到磁盘并从蓝图中访问的“动态”委托。此外，委托可以定义

"payload" data which will be stored and passed directly to bound functions.
“payload”数据，该数据将被存储并直接传递给绑定的函数。 

```

```cpp
DELEGATE FEATURES
-----------------------------------------------------------------------------------------------
 
Currently we support delegate signatures using any combination of the following:
目前，我们支持使用以下任意组合的委托签名：
    - Functions returning a value
    - 返回值为函数
    
    - Up to four "payload" variables
    - 最多四个“payload”变量
    
    - Multiple function parameters depending on macro/template declaration
    - 根据宏/模板声明的多个函数参数
    
    - Functions declared as 'const'
    - 以 'const' 声明的函数

----------------------------------------------------------------------------------------------- 
Multi-cast delegates are also supported, using the 'DECLARE_MULTICAST_DELEGATE...' macros.
还支持多播委托，使用 'DECLARE_MULTICAST_DELEGATE...' 宏。

Multi-cast delegates allow you to attach multiple function delegates, then execute them all at
once by calling a single "Broadcast()" function.  
多播委托允许您附加多个函数委托，然后通过调用单个 "Broadcast()" 函数一次性执行它们。

Multi-cast delegate signatures are not allowed to use a return value.
多播委托的签名不允许使用返回值。 

-----------------------------------------------------------------------------------------------   
Unlike other types, dynamic delegates are integrated into the UObject reflection system and can be
bound to blueprint-implemented functions or serialized to disk. 
与其他类型不同，动态委托被集成到UObject反射系统中，并可以绑定到蓝图实现的函数或序列化到磁盘。
----------------------------------------------------------------------------------------------- 

You can also bind native functions,but the native functions need to be declared with UFUNCTION markup. 
您还可以绑定本机函数，但本机函数需要用UFUNCTION标记声明。

You do not need to use UFUNCTION for functions bound to other types of delegates.
您无需对绑定到其他类型委托的函数使用 UFUNCTION。 

-----------------------------------------------------------------------------------------------    
You can assign "payload data" to your delegates!  These are arbitrary variables that will be passed
directly to any bound function when it is invoked. 
您可以为委托分配“负载数据”！这些是在调用时直接传递给任何绑定的函数的任意变量。

This is really useful as it allows you to store .parameters within the delegate itself at bind-time. 
All delegate types (except for "dynamic") supports payload variables automatically!
这非常有用，因为它允许您在绑定时在委托本身中存储参数。所有委托类型（除了“动态”）都自动支持负载变量！

-----------------------------------------------------------------------------------------------    
When binding to a delegate, you can pass payload data along.  This example passes two custom variables,
a bool and an int32 to a delegate. 
在绑定到委托时，您可以传递负载数据。此示例将两个自定义变量（bool和int32）传递给委托。

Then when the delegate is invoked, these parameters will be passed
然后，当调用委托时，这些参数将传递到您的绑定函数。

to your bound function.  The extra variable arguments must always be accepted after the delegate
type parameter arguments.
额外的变量参数必须始终在委托类型参数参数之后接受。 
  
  
    MyDelegate.BindStatic(&MyFunction, true, 20);

Remember to look at the signature table at the bottom of this documentation comment for the macro names 
to use for each function signature type, and the binding table to see options and concerns for binding.

请记住查看文档注释底部的签名表，了解每种函数签名类型使用的宏名称，并查看绑定表以了解绑定的选项和注意事项。
   
```

**本段梗概**

1. **支持的委托签名：**
    - 支持使用各种组合的委托签名，包括：
        - 返回值为函数
        - 最多四个 "payload" 变量
        - 根据宏/模板声明的多个函数参数
        - 以 'const' 声明的函数

2. **多播委托：**
    - 支持多播委托，使用 'DECLARE_MULTICAST_DELEGATE...' 宏。
    - 多播委托允许附加多个函数委托，然后通过调用 "Broadcast()" 函数一次性执行它们。
    - 多播委托的签名不允许使用返回值。

3. **动态委托：**
    - 与其他类型不同，动态委托集成到 UObject 反射系统中，可以绑定到蓝图实现的函数或序列化到磁盘。

4. **本机函数绑定：**
    - 可以绑定本机函数，但需要使用 UFUNCTION 标记声明本机函数。
    - 对于绑定到其他类型委托的函数，无需使用 UFUNCTION。

5. **负载数据：**
    - 可以为委托分配 "payload 数据"，这些是在调用时直接传递给任何绑定函数的任意变量。
    - 允许在绑定时在委托本身中存储参数，除了 "动态" 委托，所有委托类型都自动支持负载变量。

6. **绑定时传递负载数据：**
    - 在绑定到委托时，可以传递负载数据。示例中传递了两个自定义变量（bool 和 int32）给委托。
    - 在调用委托时，这些参数将传递到绑定的函数，额外的变量参数必须始终在委托类型参数参数之后接受。

7. **参考签名表和绑定表：**
    - 查看文档注释底部的签名表，以了解每种函数签名类型使用的宏名称。
    - 查看绑定表，了解绑定的选项和注意事项。

<ChatMessage avatar="../../assets/emoji/new8.png" :avatarWidth="55">
payload变量是什么意思？
</ChatMessage>

<ChatMessage avatar="../../assets/emoji/new7.png" :avatarWidth="40" alignLeft>
在编程中，"payload" 通常指的是一种携带或包含有效数据的部分。在这里指委托（delegate）中可以携带的附加数据。例如：
</ChatMessage>

```cpp
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnPropertyValueChanged, FName, PropertyName);
```
>这里，FOnPropertyValueChanged 是一个委托类型，它包含一个参数 PropertyName，
这个参数可以被视为 "payload 变量"，在触发委托时传递给相关的函数。

```cpp
DELEGATES EXAMPLE
-----------------------------------------------------------------------------------------------
 
Suppose you have a class with a method that you'd like to be able to call from anywhere:
假设您有一个希望能够从任何地方调用的类方法：
 
    class FLogWriter
    {
        void WriteToLog(FString);
    };

To call the WriteToLog function, we'll need to create a delegate type for that function's signature.
为了调用 WriteToLog 函数，我们需要为该函数的签名创建一个委托类型。

To do this, you will first declare the delegate using one of the macros below.  For example, here
is a simple delegate type:
为此，您将首先使用下面的宏声明委托。例如，这里有一个简单的委托类型：
      
DECLARE_DELEGATE_OneParam(FStringDelegate, FString);
 
This creates a delegate type called 'FStringDelegate' that takes a single parameter of type 'FString'.
这将创建一个名为 'FStringDelegate' 的委托类型，该类型接受一个 'FString' 类型的单个参数。
 
Here's an example of how you'd use this 'FStringDelegate' in a class:
以下是在类中使用 'FStringDelegate' 的示例：
 
    class FMyClass
    {
        FStringDelegate WriteToLogDelegate;
    };
 
This allows your class to hold a pointer to a method in an arbitrary class.  The only thing the
class really knows about this delegate is its function signature.
这使得您的类可以保存指向任意类中的方法的指针。类实际上只知道这个委托的函数签名。
 
Now, to assign the delegate, simply create an instance of your delegate class, passing along the
class that owns the method as a template parameter.
现在，要分配委托，只需创建委托类的实例，将拥有该方法的类传递为模板参数。

You'll also pass the instance of your object
and the actual function address of the method.  So, here we'll create an instance of our 'FLogWriter'
您还将传递对象实例和方法的实际函数地址。因此，在这里我们将创建 'FLogWriter' 类的实例，

class, then create a delegate for the 'WriteToLog' method of that object instance:
然后为该对象实例的 'WriteToLog' 方法创建一个委托：
       
FSharedRef<FLogWriter> LogWriter(new FLogWriter());
 
WriteToLogDelegate.BindSP(LogWriter, &FLogWriter::WriteToLog);
 

You've just dynamically bound a delegate to a method of a class!  Pretty simple, right?
您刚刚动态绑定了一个委托到一个类的方法！相当简单，对吧？
 
Note that the 'SP' part of 'BindSP' stands for 'shared pointer', because we're binding to an
object that's owned by a shared pointer. 
请注意，'BindSP' 中的 'SP' 代表 'shared pointer'，因为我们正在绑定到由共享指针拥有的对象。

There are versions for different object types,
such as BindRaw() and BindUObject().  You can bind to global function pointers with BindStatic().
有不同对象类型的版本，如 BindRaw() 和 BindUObject()。您可以使用 BindStatic() 绑定到全局函数指针。
      
      
Now, your 'WriteToLog' method can be called by FMyClass without it even knowing anything about
the 'FLogWriter' class!  To call your delegate, just use the 'Execute()' method:
现在，FMyClass 可以调用 'WriteToLog' 方法，甚至不知道 'FLogWriter' 类的存在！要调用委托，只需使用 'Execute()' 方法：       

WriteToLogDelegate.Execute(TEXT("Delegates are spiffy!"));
 
If you call Execute() before binding a function to the delegate, an assertion will be triggered.  In
many cases, you'll instead want to do this:
如果在将函数绑定到委托之前调用 Execute()，将触发断言。在许多情况下，您可能希望执行以下操作： 
   
WriteToLogDelegate.ExecuteIfBound(TEXT("Only executes if a function was bound!"));


That's pretty much all there is to it!!  You can read below for a bit more information.
就是这样！您可以在下面阅读更多信息。
```

**本段梗概**

**1. 被调函数**

```cpp
class FLogWriter
{
    void WriteToLog(FString);
};
```

2. **定义委托类型**

>语法 委托类型(委托类型名称，参数列表)

```cpp
  //'FStringDelegate' 的委托类型，该类型接受一个 'FString' 类型的单个参数。
  DECLARE_DELEGATE_OneParam(FStringDelegate, FString);
```

- **`DECLARE_DELEGATE_OneParam`：** 宏的名称，用于声明带有一个参数的委托。
- **`DelegateType`：** 您要声明的委托的类型名称。
- **`ParameterType`：** 委托的参数类型。在这个例子中，是一个参数的类型，表示委托被调用时将传递的数据类型。

3. **类中声明委托实例**

```cpp
class FMyClass
{
    FStringDelegate WriteToLogDelegate;
};
```

4. **创建委托实例并绑定方法：**
   - 创建了一个 `FLogWriter` 类的实例 `LogWriter`，然后使用 `BindSP` 方法将 `WriteToLogDelegate` 委托绑定到 `FLogWriter::WriteToLog` 方法。

   ```cpp
   FSharedRef<FLogWriter> LogWriter(new FLogWriter());
   WriteToLogDelegate.BindSP(LogWriter, &FLogWriter::WriteToLog);
   ```

   这一步实现了动态绑定，使得 `WriteToLogDelegate` 委托现在可以调用 `FLogWriter::WriteToLog` 方法。

5. **调用委托：**
   - 使用 `Execute` 方法调用委托，传递一个 `FString` 参数。

   ```cpp
   WriteToLogDelegate.Execute(TEXT("Delegates are spiffy!"));
   ```

   - 如果在绑定函数之前调用 `Execute`，将触发断言。通常，应该使用 `ExecuteIfBound` 方法，该方法仅在函数已绑定时才执行。

   ```cpp
   WriteToLogDelegate.ExecuteIfBound(TEXT("Only executes if a function was bound!"));
   ```

```cpp
MORE INFORMATION
-----------------------------------------------------------------------------------------------
 
The delegate system understands certain types of objects, and additional features are enabled when
using these objects.  
委托系统了解某些类型的对象，并在使用这些对象时启用附加功能。

If you bind a delegate to a member of a UObject or shared pointer class, the
delegate system can keep a weak reference to the object, so that if the object gets destroyed out
如果将委托绑定到UObject或共享指针类的成员，委托系统可以保持对对象的弱引用，

from underneath the delegate, you'll be able to handle these cases by calling IsBound() or
ExecuteIfBound() functions.  Note the special binding syntax for the various types of supported objects.
这样，如果对象在委托下方被销毁，您将能够通过调用IsBound()或ExecuteIfBound()函数来处理这些情况。请注意支持的对象类型的各种类型的特殊绑定语法。 
   
It's perfectly safe to copy delegate objects.  Delegates can be passed around by value but this is
generally not recommended since they do have to allocate memory on the heap. 
复制委托对象是完全安全的。可以通过值传递委托，但通常不建议这样做，因为它们必须在堆上分配内存。

Pass them by reference when possible!
尽可能通过引用传递它们！ 

Delegate signature declarations can exist at global scope, within a namespace or even within a class
declaration (but not function bodies.)
委托签名声明可以存在于全局范围、命名空间内，甚至可以存在于类声明内（但不能存在于函数体内）。
```

```cpp
FUNCTION SIGNATURES
-----------------------------------------------------------------------------------------------
 
Use this table to find the declaration macro to use to declare your delegate.
使用此表查找用于声明委托的宏。
The full list is defined in DelegateCombinations.h
完整列表在DelegateCombinations.h中定义。
 
   Function signature                                   |   Declaration macro
   ------------------------------------------------------------------------------------------------------------------------------------------------------------
   void Function()                                      |   DECLARE_DELEGATE( DelegateName )
   void Function( <Param1> )                            |   DECLARE_DELEGATE_OneParam( DelegateName, Param1Type )
   void Function( <Param1>, <Param2> )                  |   DECLARE_DELEGATE_TwoParams( DelegateName, Param1Type, Param2Type )
   void Function( <Param1>, <Param2>, ... )             |   DECLARE_DELEGATE_<Num>Params( DelegateName, Param1Type, Param2Type, ... )
   <RetVal> Function()                                  |   DECLARE_DELEGATE_RetVal( RetValType, DelegateName )
   <RetVal> Function( <Param1> )                        |   DECLARE_DELEGATE_RetVal_OneParam( RetValType, DelegateName, Param1Type )
   <RetVal> Function( <Param1>, <Param2> )              |   DECLARE_DELEGATE_RetVal_TwoParams( RetValType, DelegateName, Param1Type, Param2Type )
   <RetVal> Function( <Param1>, <Param2>, ... )         |   DECLARE_DELEGATE_RetVal_<Num>Params( RetValType, DelegateName, Param1Type, Param2Type, ... )
   ------------------------------------------------------------------------------------------------------------------------------------------------------------
 
   Remember, there are three different delegate types you can define (any of the above signatures will work):
 
                        Single-cast delegates:  DECLARE_DELEGATE...()
                         Multi-cast delegates:  DECLARE_MULTICAST_DELEGATE...()
    Dynamic (UObject, serializable) delegates:  DECLARE_DYNAMIC_DELEGATE...()

```
### 委托类型

有三种不同的委托类型可供定义：

- 单播委托：`DECLARE_DELEGATE...()`
- 多播委托：`DECLARE_MULTICAST_DELEGATE...()`
- 动态（UObject，可序列化）委托：`DECLARE_DYNAMIC_DELEGATE...()`

### 委托宏声明

| Function Signature                           | Declaration Macro                                                                            |
|----------------------------------------------|----------------------------------------------------------------------------------------------|
| `void Function()`                            | `DECLARE_DELEGATE(DelegateName)`                                                             |
| `void Function(<Param1>)`                    | `DECLARE_DELEGATE_OneParam(DelegateName, Param1Type)`                                        |
| `void Function(<Param1>, <Param2>)`          | `DECLARE_DELEGATE_TwoParams(DelegateName, Param1Type, Param2Type)`                           |
| `void Function(<Param1>, <Param2>, ...)`     | `DECLARE_DELEGATE_<Num>Params(DelegateName, Param1Type, Param2Type, ...)`                    |
| `<RetVal> Function()`                        | `DECLARE_DELEGATE_RetVal(RetValType, DelegateName)`                                          |
| `<RetVal> Function(<Param1>)`                | `DECLARE_DELEGATE_RetVal_OneParam(RetValType, DelegateName, Param1Type)`                     |
| `<RetVal> Function(<Param1>, <Param2>)`      | `DECLARE_DELEGATE_RetVal_TwoParams(RetValType, DelegateName, Param1Type, Param2Type)`        |
| `<RetVal> Function(<Param1>, <Param2>, ...)` | `DECLARE_DELEGATE_RetVal_<Num>Params(RetValType, DelegateName, Param1Type, Param2Type, ...)` |


```cpp
BINDING AND SAFETY
-----------------------------------------------------------------------------------------------
 
Once a delegate has been declared, it can be bound to functions stored in different places.
一旦声明了委托，它就可以绑定到存储在不同位置的函数上。

Because delegates are often called long after they are bound, extra attention must be paid to
avoid crashes. This list is for single-cast, 
由于委托通常在绑定后很长时间才被调用，因此必须格外注意避免崩溃。此列表适用于单播委托，

for multi-cast delegates, replace Bind in the table below with Add. Also for multi-cast delegates, 
Add will return a handle that can then be used to later remove the binding. 
对于多播委托，请在下面的表中将Bind替换为Add。此外，对于多播委托，Add将返回一个句柄，稍后可以用来

All multi-cast delegates have an ::FDelegate subtype defining an equivalent
single-cast version, 
删除绑定。所有多播委托都有一个::FDelegate子类型，定义了一个等效的单播版本，

that can be Created one place and then added later.
可以在一个地方创建，然后稍后添加。 
   
   Bind function                                       |   Usage
   ------------------------------------------------------------------------------------------------------------------------------------------------------------
   BindStatic(&GlobalFunctionName)                     |   Call a static function, can either be globally scoped or a class

 static
   BindUObject(UObject, &UClass::Function)             |   Call a UObject class member function via a TWeakObjectPtr, will not be called if object is invalid
   BindSP(SharedPtr, &FClass::Function)                |   Call a native class member function via a TWeakPtr, will not be called if shared pointer is invalid
   BindThreadSafeSP(SharedPtr, &FClass::Function)      |   Call a native class member function via a TWeakPtr, will not be called if shared pointer is invalid
   BindRaw(RawPtr, &FClass::Function)                  |   Call a native class member function with no safety checks. You MUST call Unbind or Remove when object dies to avoid crashes!
   BindLambda(Lambda)                                  |   Call a lambda function with no safety checks. You MUST make sure all captures will be safe at a later point to avoid crashes!
   BindWeakLambda(UObject, Lambda)                     |   Call a lambda function only if UObject is still valid. Captured 'this' will always be valid but any other captures may not be
   BindUFunction(UObject, FName("FunctionName"))       |   Usable for both native and dynamic delegates, will call a UFUNCTION with specified name
   BindDynamic(UObject, &UClass::FunctionName)         |   Convenience wrapper only available for dynamic delegates, FunctionName must be declared as a UFUNCTION
   ------------------------------------------------------------------------------------------------------------------------------------------------------------

```
### 委托绑定函数

![](..%2Fassets%2Fbindde.png)

| 绑定函数                                             | 用法                                                         |
|--------------------------------------------------|------------------------------------------------------------|
| `BindStatic(&GlobalFunctionName)`                | 调用静态函数，可以是全局范围或类的静态函数                                      |
| `BindUObject(UObject, &UClass::Function)`        | 通过 TWeakObjectPtr 调用 UObject 类成员函数，如果对象无效，则不会被调用           |
| `BindSP(SharedPtr, &FClass::Function)`           | 通过 TWeakPtr 调用本机类成员函数，如果共享指针无效，则不会被调用                      |
| `BindThreadSafeSP(SharedPtr, &FClass::Function)` | 通过 TWeakPtr 调用本机类成员函数，如果共享指针无效，则不会被调用                      |
| `BindRaw(RawPtr, &FClass::Function)`             | 无安全检查地调用本机类成员函数。当对象死亡时，必须调用 Unbind 或 Remove 以避免崩溃！         |
| `BindLambda(Lambda)`                             | 无安全检查地调用 Lambda 函数。必须确保所有捕获在以后的某个时刻都是安全的，以避免崩溃！            |
| `BindWeakLambda(UObject, Lambda)`                | 仅当 UObject 仍然有效时才调用 Lambda 函数。捕获的 'this' 将始终有效，但其他任何捕获可能无效 |
| `BindUFunction(UObject, FName("FunctionName"))`  | 用于本机和动态委托，将调用具有指定名称的 UFUNCTION                             |
| `BindDynamic(UObject, &UClass::FunctionName)`    | 仅用于动态委托的便捷包装器，FunctionName 必须声明为 UFUNCTION                 |


### 动态单播

1. **创建委托**：创建一个委托类型的声明

```cpp
DECLARE_DYNAMIC_DELEGATE_OneParam(FOnAudioOutputDevicesObtained, const TArray<FAudioOutputDeviceInfo>&, AvailableDevices);
```
2. **定义委托函数**：
```cpp    
/**
* Gets information about all audio output devices available in the system
* @param OnObtainDevicesEvent - the event to fire when the audio endpoint devices have been retrieved
*/
UFUNCTION(BlueprintCallable, Category = "Audio", meta = (WorldContext = "WorldContextObject"))
static void GetAvailableAudioOutputDevices(const UObject* WorldContextObject, const FOnAudioOutputDevicesObtained& OnObtainDevicesEvent);
```
3. **触发委托**：

```cpp
//获取音频输出设备委托
UPROPERTY()
FOnAudioOutputDevicesObtained OnObtainDevicesEvent;

//使用BindUFunction绑定函数签名
OnObtainDevicesEvent.BindUFunction(this, FName("OnObtainDevices"));

//音频输出设备对应回调函数
UFUNCTION(BlueprintCallable)
void OnObtainDevices(TArray<FAudioOutputDeviceInfo> FAudioOutputDeviceInfo);
```