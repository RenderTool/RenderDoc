---
title: NT-3.1网络复制|实践
order: 31
category:
  - unreal
---
## 实践
<chatmessage avatar=" ../../assets/emoji/hx.png" :avatarWidth="40">
本篇为网络复制实践
</chatmessage>


## 前置头文件

```cpp
 #include "Net/UnrealNetwork.h"
```

## 函数复制（RPC）

### 函数复制（RPC）的NetMulticast(组播多播)：

```cpp
// 在 .h 文件中声明 MulticastFunction 函数
UFUNCTION(NetMulticast, Reliable)
void MulticastFunction();

// 在 .cpp 文件中定义 MulticastFunction 函数
void AMyActor::MulticastFunction_Implementation() {
    // 在这里添加多播函数的实现
    // 这里的代码会在所有客户端上执行
}

// 在某个函数中调用 NetMulticast
void AMyActor::SomeFunction() {
    // 在服务端调用 NetMulticast，它将在所有客户端上执行
    if (HasAuthority()) {
        MulticastFunction();
    }
}
```

### 函数复制（RPC）的Server（客户端上调用、但需要在服务器上执行）：

```cpp
// 在 .h 文件中声明 ServerFunction 函数
UFUNCTION(Server, Reliable, WithValidation)
void ServerFunction();

// 在 .cpp 文件中定义 ServerFunction 函数
void AMyActor::ServerFunction_Implementation() {
    // 在这里添加服务端函数的实现
    // 这里的代码只会在服务端上执行
}

bool AMyActor::ServerFunction_Validate() {
    // 在这里添加验证逻辑
    return true;
}

// 在某个函数中调用 Server
void AMyActor::SomeFunction() {
    // 在客户端调用 Server，它将在服务端上执行
    if (!HasAuthority()) {
        ServerFunction();
    }
}
```

### 函数复制（RPC）的Client（服务器上调用、但需要在客户端上执行）：

```cpp
// 在 .h 文件中声明 ClientFunction 函数
UFUNCTION(Client, Reliable)
void ClientFunction();

// 在 .cpp 文件中定义 ClientFunction 函数
void AMyActor::ClientFunction_Implementation() {
    // 在这里添加客户端函数的实现
    // 这里的代码只会在客户端上执行
}

// 在某个函数中调用 Client
void AMyActor::SomeFunction() {
    // 在服务端调用 Client，它将在对应的客户端上执行
    if (HasAuthority()) {
        ClientFunction();
    }
}
```

### 可靠性|Reliable
>默认情况RPC不可靠，所以需要一个Reliable，但别滥用。

```cpp
UFUNCTION( Client, Reliable )
void ClientRPCFunction();
```

### 验证|WithValidation

>默认情况RPC不验证

```cpp
bool SomeRPCFunction_Validate( int32 AddHealth )
{
    if ( AddHealth > MAX_ADD_HEALTH )
    {
        return false;                       // This will disconnect the caller
    }
return true;                              // This will allow the RPC to be called
}

void SomeRPCFunction_Implementation( int32 AddHealth )
{
    Health += AddHealth;
}
```

## 变量复制（RPC）

### Replicated

```cpp
// 在 .h 文件中声明 MyVariable 变量
UPROPERTY(Replicated)
float MyVariable;

// 在 .cpp 文件中设置变量同步
void AMyActor::GetLifetimeReplicatedProps(TArray< FLifetimeProperty > & OutLifetimeProps) const {
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);
    DOREPLIFETIME(AMyActor, MyVariable);
}

// 在某个函数中调用 NetMulticast 修改变量值
void AMyActor::SomeFunction() {
    // 在服务端调用 NetMulticast，它将在所有客户端上执行
    if (HasAuthority()) {
        MyVariable = 42.0f;
        MulticastVariable(MyVariable);
    }
}
```
### RepNotify|OnRep

 ```cpp
 // 在 .h 文件中声明 MyVariable 变量
UPROPERTY(ReplicatedUsing = OnRep_MyVariable)
float MyVariable;

// 在 .cpp 文件中设置变量同步，并声明 OnRep_MyVariable 函数
void AMyActor::GetLifetimeReplicatedProps(TArray< FLifetimeProperty > & OutLifetimeProps) const {
    Super::GetLifetimeReplicatedProps(OutLifetimeProps);
    DOREPLIFETIME_CONDITION_NOTIFY(AMyActor, MyVariable, COND_SkipOwner, REPNOTIFY_Always);
}

// OnRep_MyVariable 函数将在 MyVariable 发生变化时被调用
void AMyActor::OnRep_MyVariable() {
    // 在这里添加在变量改变时执行的逻辑
    UE_LOG(LogTemp, Warning, TEXT("MyVariable changed to: %f"), MyVariable);
}

// 在某个函数中修改 MyVariable 的值
void AMyActor::SomeFunction() {
    if (HasAuthority()) {
        MyVariable = 42.0f;
    }
}
```    

### `DOREPLIFETIME`变量的复制规则

### DOREPLIFETIME:

```cpp
DOREPLIFETIME(ClassName, VariableName);
```

这个宏用于声明一个类的变量需要在网络上进行复制。它会自动生成必要的复制代码。

### DOREPLIFETIME_CONDITION:

```cpp
DOREPLIFETIME_CONDITION(ClassName, VariableName, ReplicationCondition);
```

这个宏也用于声明一个类的变量需要在网络上进行复制，但允许添加一个额外的条件。`ReplicationCondition` 是一个用于判断是否进行复制的布尔表达式。只有在这个表达式为真时，复制才会发生。

示例：

```cpp
DOREPLIFETIME_CONDITION(AMyActor, MyVariable, COND_SkipOwner);
```

| 条件标签                      | 描述                                               |
|---------------------------|--------------------------------------------------|
| `COND_InitialOnly`        | 仅在初始数据组尝试发送                                      |
| `COND_OwnerOnly`          | 仅发送至 actor 的所有者                                  |
| `COND_SkipOwner`          | 发送至除所有者之外的每个连接                                   |
| `COND_SimulatedOnly`      | 仅发送至模拟 actor                                     |
| `COND_AutonomousOnly`     | 仅发送给自治 actor                                     |
| `COND_SimulatedOrPhysics` | 发送至模拟或 `bRepPhysics` actor                       |
| `COND_InitialOrOwner`     | 发送初始数据包，或者发送至 actor 所有者                          |
| `COND_Custom`             | 没有特定条件，但需要通过 `SetCustomIsActiveOverride` 开启/关闭能力 |

## 参考
[官方文档](https://docs.unrealengine.com/5.2/zh-CN/multiplayer-programming-quick-start-for-unreal-engine/)