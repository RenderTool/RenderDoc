---
title: TP2.智能指针TODO
order: 2
category:
  - u++
tag:
  - Specifiers
---

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
C++的指针就已经谈虎色变了，UE中的智能指针会不会更难？
</ChatMessage>

1. **TSharedPtr：** 代表共享所有权的智能指针。多个 `TSharedPtr` 实例可以共享相同的对象，当最后一个引用超出范围时，对象会被销毁。

   ```cpp
   TSharedPtr<MyClass> SharedObject = MakeShared<MyClass>();
   ```

2. **TWeakPtr：** 代表弱引用智能指针，通常与 `TSharedPtr` 一起使用，用于避免循环引用。

   ```cpp
   TSharedPtr<MyClass> SharedObject = MakeShared<MyClass>();
   TWeakPtr<MyClass> WeakObject = SharedObject;
   ```

3. **TUniquePtr：** 代表独占所有权的智能指针。每个 `TUniquePtr` 实例拥有对对象的唯一所有权，用于确保资源的独占性。

   ```cpp
   TUniquePtr<MyClass> UniqueObject = MakeUnique<MyClass>();
   ```

4. **UPROPERTY 和 UPROPERTY_POINTER：** 在UE4的中，`UPROPERTY` 用于声明成员变量，并可以与 `TWeakObjectPtr` 一起使用，以创建弱引用指针。

   ```cpp
   UPROPERTY()
   TWeakObjectPtr<AActor> WeakActor;
   ```

5. **FObjectPtr：** 代表一个智能指针，可以包含 `UObject` 类型的对象。用于管理UE的对象生命周期。

   ```cpp
   FObjectPtr<UClass> MyObject = NewObject<UClass>();
   ```



