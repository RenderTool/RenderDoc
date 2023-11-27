---
title: Macro2.编辑器宏的注意事项
order: 2
category:
  - u++
tag:
  - Specifiers
---
## 导读

| 特征                     | 描述                                 |
|------------------------|------------------------------------|
| `WITH_EDITORONLY_DATA` | 用于标记在头文件中的成员变量，仅在编辑器中可见，游戏运行时被忽略。  |
| `WITH_EDITOR`          | 用于标记在 CPP 文件中的代码块，该代码块在构建编辑器时应被编译。 |
| `GIsEditor`            | 全局布尔变量，用于判断当前是否在虚幻编辑器中运行。          |

<hr>

<ChatMessage avatar="../../../assets/emoji/bqb (4).png" :avatarWidth="40">
Baba我的编辑器宏写上编译成功但打包失败了！
</ChatMessage>

<ChatMessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
让我康康！看来你还不知道这些区别！
</ChatMessage>

<hr>

### `WITH_EDITOR` 和 `GIsEditor` 的区别

###  `WITH_EDITOR`

`WITH_EDITOR` 是一个宏，用于在代码中标记在构建编辑器时应该被编译的部分。以下是示例代码：

```cpp
#if WITH_EDITOR 
// 仅在构建编辑器时编译的代码
#endif  
```
<ChatMessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>

这意味着在构建编辑器时，`WITH_EDITOR` 中的代码会被编译，而在独立构建中将被移除。它通常用于区分编辑器构建和游戏构建的代码。

</ChatMessage>

###  `GIsEditor`

`GIsEditor` 是一个全局的布尔变量，用于判断当前是否在虚幻编辑器中运行。以下是示例代码：

```cpp
if (GIsEditor) 
{
  // 仅在编辑器中运行时执行的代码
}
```
<ChatMessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40" alignLeft>

`GIsEditor` 用于检查是否在虚幻编辑器中运行，即使在 Play In Editor (PIE) 模式下也为 `true`。这对于需要在编辑器中执行特定代码的情况非常有用。

</ChatMessage>

### 区别和示例

- `WITH_EDITOR` 是一个宏，而 `GIsEditor` 是一个全局的布尔变量。
- 使用 `WITH_EDITOR` 的代码在构建编辑器时会被编译，而 `GIsEditor` 是在运行时判断是否在编辑器中运行。

```cpp
#if WITH_EDITOR 
int32 TestInt = 0;     
if(GIsEditor)     
{         
  TestInt = 1;             
}     
else     
{         
  TestInt = 2;     
}
#endif 
```

>在这个示例中，如果在编辑器中运行，则 `TestVar` 被设置为1；否则，它被设置为2。这种区别允许开发者根据构建环境和运行时上下文来控制代码的行为。

| 特征   | `WITH_EDITOR`       | `GIsEditor`             |
|------|---------------------|-------------------------|
| 类型   | 宏                   | 全局布尔变量                  |
| 用途   | 标记仅在构建编辑器时编译的代码     | 判断是否在虚幻编辑器中运行           |
| 作用范围 | 代码中，通常在头文件或CPP文件中使用 | 通常在代码中使用，用于运行时判断编辑器运行状态 |


## `WITH_EDITORONLY_DATA` 和 `WITH_EDITOR` 的区别

### `WITH_EDITORONLY_DATA`

<ChatMessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>

`WITH_EDITORONLY_DATA` 是一个宏，用于在头文件中标记成员变量，这些变量仅在编辑器环境中可见，并且在游戏运行时被忽略。这对于在编辑器中使用特定数据或属性非常有用。

</ChatMessage>


示例代码：

```cpp
class MyClass
{
public:
    UPROPERTY(EditAnywhere, Category = "MyCategory")
    int32 EditableVariable;

#if WITH_EDITORONLY_DATA
    UPROPERTY(EditAnywhere, Category = "MyCategory")
    float EditorOnlyVariable;
#endif
};
```

>在这个示例中，`EditorOnlyVariable` 只会在编辑器中显示，并且在游戏运行时将被忽略。

### `WITH_EDITOR`

<ChatMessage avatar="../../../assets/emoji/bqb02.png" :avatarWidth="40" alignLeft>

`WITH_EDITOR` 仍然是一个宏，但一般用于在 CPP 文件中标记与编辑器相关的代码块，例如某些特定于编辑器的逻辑，而不是用于标记成员变量。

</ChatMessage>

示例代码：

```cpp
#if WITH_EDITOR
void MyClass::EditorOnlyFunction()
{
    // 编辑器中调用的函数
}
#endif
```

>在这个示例中，`EditorOnlyFunction` 只会在构建编辑器时被编译，而在独立构建时会被移除。

### 区别和示例

- 使用 `WITH_EDITORONLY_DATA` 的成员变量将仅在编辑器中可见，而在游戏运行时将被忽略。
- `WITH_EDITOR` 通常用于包含编辑器特定的功能或逻辑的 CPP 代码块。

```cpp
class MyClass
{
public:
    UPROPERTY(EditAnywhere, Category = "MyCategory")
    int32 EditableVariable;

#if WITH_EDITORONLY_DATA
    UPROPERTY(EditAnywhere, Category = "MyCategory")
    float EditorOnlyVariable;
#endif

#if WITH_EDITOR
    void EditorOnlyFunction();
#endif
};
```
>在这个示例中，`EditorOnlyVariable` 在编辑器中可见，而 `EditorOnlyFunction` 仅在编辑器构建时可用。这样可以更精确地控制编辑器和游戏运行时的代码行为。

| 特征   | `WITH_EDITORONLY_DATA`                           | `WITH_EDITOR`                                    |
|------|--------------------------------------------------|--------------------------------------------------|
| 类型   | 宏                                                | 宏                                                |
| 用途   | 标记仅在编辑器中可见的成员变量                                  | 标记在构建编辑器时应该被编译的代码块                               |
| 作用范围 | 通常在头文件中使用，标记成员变量                                 | 通常在 CPP 文件中使用，标记编辑器特定的功能或逻辑                      |

### 参考链接

1. [Having trouble with #if WITH_EDITOR](https://forums.unrealengine.com/t/having-trouble-with-if-with_editor/138926)
2. [编辑器相关宏说明](https://zhuanlan.zhihu.com/p/76590936)
3. [20210105 UE4 With_Editor vs With_EditorDataOnly](https://exkulo.github.io/2021/01/05/20210105-UE4-With-Editor-vs-With-EditorDataOnly/)