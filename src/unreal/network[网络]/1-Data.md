---
title: NT1.Data|数据结构从背包开始
order : 1
category:
  - unreal
---

## 第一印象

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
你打算怎么开始设计你的背包？现在你捡到了一个药水，他通过什么来影响你的血条UI、和血量？
</chatmessage>


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
我的第一直觉是：
</chatmessage>

1. 要有一个Actor类，用于承载药水
2. 一个角色类。。。。

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
打住！我们不应该从细节开始考虑问题，我们应该从整体框架开始，然后再考虑实现细节。
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
我的第一直觉，整体框架应该是这样的（就背包系统来说）
</chatmessage>

![](..%2Fassets%2FGASuse001.png)

1. 角色碰到球形触发器显示对应的UI
2. 可能存在同时触碰多个触发的情况，所以我设计了一个附近列表
3. 用户拖拽附近列表或者交互按键直接拾取最近的触碰对象。
4. 装备记录数据到背包组件中。

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
很好，这已经具备我们平时玩游戏的背包系统雏形了！现在我们稍微深入讨论一下！
</chatmessage>

## 数据结构
### 结构体

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
第一个问题，你觉得你用什么数据结构承载你的数据？
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
结构体数组够简单也够暴力！配合Json转结构体插件还能网络数据同步。
</chatmessage>

![](..%2Fassets%2FGASuse003.png)

### Datatable|表格

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
确实，结构体数组确实简单暴力！但数组类型还是过于简单了，我们可以继承Table类做成结构体表格
</chatmessage>

```cpp
USTRUCT(BlueprintType)
struct  FCharacterStruct : public FTableRowBase
{
	GENERATED_BODY()
public:
	
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="Name"))
	FString Name;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="Icon", MakeStructureDefaultValue="None"))
	TObjectPtr<UTexture2D> Icon;
	
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="SkeletalMesh", MakeStructureDefaultValue="None"))
	TObjectPtr<USkeletalMesh> SkeletalMesh;
	
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="SkeletalAnim", MakeStructureDefaultValue="None"))
	TObjectPtr<UAnimSequence> SkeletalAnim;

	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="SkeletalAnimSpeed", MakeStructureDefaultValue="1.000000"))
	float SkeletalAnimSpeed = 1.0;
	
	UPROPERTY(BlueprintReadWrite, EditAnywhere, meta=(DisplayName="id", MakeStructureDefaultValue="0"))
	int32 id  = 0;

};
```
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
妙啊，这样就可以进行表操作了！
</chatmessage>

![](..%2Fassets%2FGASuse004.png)


<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
可是，有个问题！UE好像不支持游戏运行时读写表格吧！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
蓝图确实无法实现，但我们可以用C++写啊！而且实际开发中一般是调用现成的API来获取对应数据。
</chatmessage>

### API

:::note

API（Application Programming Interface）是一组定义软件组件之间交互的规范。简而言之，API定义了不同软件之间如何通信、相互调用功能的方式。

:::

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
一般公司里会有前后端大佬负责编写服务端逻辑，同时会暴露一些地址给你，你通过HTTP请求可以获取到对应的数据。例如这样的：
</chatmessage>

![](..%2Fassets%2FGASuse005.png)

### Json

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
获取到数据一般是Json格式加密数据，我们需要通过特定手段解析成我们的游戏数据。这些数据有可能是临时的、也可能是持久的！
</chatmessage>


:::note
JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，它以易于阅读和编写的文本形式表示数据。
```json
{
  "key1": "value1",
  "key2": 123,
  "key3": true,
  "key4": ["item1", "item2"],
  "key5": {
    "nestedKey": "nestedValue"
  },
  "key6": null
}
```
:::

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
然而，游戏对战却不是使用这种方式，UE有几套优化过的网络框架。（后续章节会有介绍）
</chatmessage>

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
确实，如果按一个按键还要向服务器请求一个API，黄花菜都要凉了！
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
是的，不同的阶段地方使用不同的方式通信。
</chatmessage>

1. **TCP：**
    - **阶段：** TCP通常用于可靠的、有序的数据传输。在游戏中，TCP可以在游戏开始时用于建立连接和传输重要的游戏数据，例如玩家的位置、状态等。TCP适用于那些需要可靠性和顺序性的场景，如回合制游戏、棋类游戏等。

2. **UDP：**
    - **阶段：** UDP更适合需要快速传输而可以容忍少量数据丢失的情况。在游戏中，UDP通常用于实时性要求高的场景，如多人在线游戏、射击游戏等。UDP的无连接性和低延迟特性使其适合用于及时更新玩家位置、动作等信息。

3. **HTTP：**
    - **阶段：** HTTP通常用于在游戏启动时进行初始资源加载，例如下载游戏客户端、获取游戏配置文件等。在游戏进行过程中，HTTP可能用于在游戏内显示网页内容、获取更新或补丁等。HTTP是一种无状态协议，适合用于不需要实时通信的场景。

4. **WebSocket：**
    - **阶段：** WebSocket通常在游戏中用于实现实时双向通信。它建立在单个TCP连接上，可以在客户端和服务器之间双向传输数据，适用于需要实时互动和更新的游戏，如聊天、实时多人游戏状态同步等。

通俗点：

1. **保存行为：** 当需要将游戏进度、用户设置或其他重要数据保存到服务器时，可以使用HTTP通信。例如，保存玩家的游戏进度、解锁的成就、收集的物品等。

2. **购买行为：** 在进行虚拟商品购买、充值游戏币等交易时，通常需要与服务器进行安全的交互，以确保交易的可靠性和防止欺诈。这通常会使用HTTPS来保护数据传输的安全性。

3. **抽奖行为：** 如果游戏中有抽奖、奖品领取等功能，这些行为可能需要与服务器进行通信，以确保公平性、防止作弊等。

4. **用户认证和授权：** 登录、注册、用户身份验证等操作通常涉及到HTTP通信。使用HTTP可以向服务器发送用户凭证以进行身份验证，并获取授权信息。

5. **获取更新或补丁：** 游戏启动时，可能需要检查服务器上是否有新的游戏版本、更新或补丁。这也可以通过HTTP通信来实现。

### 数据库

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
然而这些数据并非空穴来风，需要一个远程物理机器保存，比如百度网盘能够保存你的文件数据，这里我们有专门的数据库和存储空间保存用户的个人信息。
</chatmessage>

## 进一步构思 

>Table+子系统+资产实现配表驱动

### 构思图

![](..%2Fassets%2Fzbxt1.svg)

### 核心思路

1. **使用子系统UInventorySubsystem**
   - 引入专门的物品子系统，例如 `UInventorySubsystem`，用于处理物品的管理和交互。

2. **暴露切换网络接口 (ENUM)**
   - 使用枚举类型（ENUM）定义网络切换的接口，确保系统在本地测试和网络测试时有不同的行为。
   - 示例：`InventorySubsystem->SetNetworkMode(NetworkMode);`

3. **本地部分使用流程**
   - 在适当时机注册 `InventoryHUDLayout`，可参考Lyra的UIExtension。
   - 示例：`InventorySubsystem->RegisteInventoryHUDLayout(InventoryHUDLayout);`

4. **在适当的位置注册总物品表 TotalItemTable 到物品子系统**
   - 示例：`InventorySubsystem->RegisterTotalTable(TotalItemTable);`
   - 例如：
      - 行名1（武器.近身.匕首）, UDataTable* SubTable
      - 行名2（武器.近身.长剑）, UDataTable* SubTable
      - 行名3（道具.血包）, UDataTable* SubTable

5. **准备Spawn的物体Actor中配置GameTag和Index**
   - 示例：`ItemActor->ConfigureItem(GameTag, Index);`

6. **Actor中Over事件调用子系统查表**
   - 获取子表格的引用，例如：`UDataTable* SubTable = InventorySubsystem->GetSubTableFromTotalTable(GameTag);`
   - 通过GameTag直接定位到总表格的对应行，获取子表格的引用。

7. **子系统根据Fragments实例化内容**
   - 根据Fragments数组中的 `UInventoryItemFragment` 子类实例，配置对应的内容。
   - 例如：基础 `TextureFrag`（Icon）、`AS`（属性）、`MeshComponent`（网格体）、`AddWidget`（比如根据 `HUD.Slot`、`UIClass` 配置要显示的 UI）等

8. **子系统暴露交互键注册函数**
   - 子系统应当暴露接口，用于注册交互键，可能涉及 UI 的绑定以及信息更新。
   - 示例：子系统接口`RegisterInteractionKey`。

