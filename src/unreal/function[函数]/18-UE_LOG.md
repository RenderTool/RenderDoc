---
title: F18.UE_LOG|打印日志
order : 18
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
UE_LOG|打印日志
</chatmessage>

```
UE_LOG(LogCategory, Verbosity, TEXT("Message"));
```

- `LogCategory` 是一个宏，用于指定日志类别，例如`LogTemp`、`LogClass`等。
- `Verbosity` 是一个枚举值，用于指定日志的详细程度，常见的值包括：`Log`、`Warning`、`Error`等。
- `TEXT("Message")` 是要记录的消息内容，使用`TEXT()`宏将字符串转换为`FText`类型，确保支持国际化。

### 举例

```cpp
UE_LOG(LogTemp, Log, TEXT("This is a log message."));
UE_LOG(LogTemp, Warning, TEXT("This is a warning message."));
UE_LOG(LogTemp, Error, TEXT("This is an error message."));
```

### 不同数据类型打印

| 变量类型                     | 字符串转换方法                                                     |
|--------------------------|-------------------------------------------------------------|
| float                    | FString::SanitizeFloat(FloatVariable);                      |
| int                      | FString::FromInt(IntVariable);                              |
| bool                     | InBool ? TEXT("true") : TEXT("false");                      |
| either 'true' or 'false' | InBool ? TEXT("true") : TEXT("false");                      |
| FVector                  | VectorVariable.ToString();                                  |
| 'X= Y= Z='               | VectorVariable.ToString();                                  |
| FVector2D                | Vector2DVariable.ToString();                                |
| 'X= Y='                  | Vector2DVariable.ToString();                                |
| FRotator                 | RotatorVariable.ToString();                                 |
| 'P= Y= R='               | RotatorVariable.ToString();                                 |
| FLinearColor             | LinearColorVariable.ToString();                             |
| '(R=,G=,B=,A=)'          | LinearColorVariable.ToString();                             |
| UObject                  | (InObj != NULL) ? InObj->GetName() : FString(TEXT("None")); |