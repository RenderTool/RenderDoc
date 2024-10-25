---
title: EXP10.用户输入向量区别
order : 10
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Baba! GetLastInputVector 和GetLastMovementInputVector有毛不同？
</chatmessage>

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
打开源码康康不就行了
</chatmessage>

### GetLastMovementInputVector

```cpp
/**
 * 返回上一次由 ConsumeMovementInputVector() 处理的世界空间中的输入向量，这通常由 Pawn 或 PawnMovementComponent 完成。
 * 任何需要了解上次影响移动的输入的用户都应该使用此函数。
 * 例如，动画更新会使用这个函数，因为默认情况下，帧中更新的顺序是：
 * PlayerController（设备输入）-> MovementComponent -> Pawn -> Mesh（动画）
 *
 * @return 上一次由 ConsumeMovementInputVector() 处理的世界空间中的输入向量。
 * @see AddMovementInput(), GetPendingMovementInputVector(), ConsumeMovementInputVector()
 */
UFUNCTION(BlueprintCallable, Category="Pawn|Input", meta=(Keywords="GetMovementInput GetInput"))
ENGINE_API FVector GetLastMovementInputVector() const;

```
### GetLastInputVector

```cpp
/**
 * 返回上一次由 ConsumeInputVector() 处理的世界空间中的输入向量，这通常由 Pawn 或 PawnMovementComponent 完成。
 * 任何需要了解上次影响移动的输入的用户都应该使用此函数。
 * @return 上一次由 ConsumeInputVector() 处理的世界空间中的输入向量。
 * @see AddInputVector(), ConsumeInputVector(), GetPendingInputVector()
 */
UFUNCTION(BlueprintCallable, Category="Pawn|Components|PawnMovement", meta=(Keywords="GetInput"))
ENGINE_API FVector GetLastInputVector() const;

```

### 主要区别

- **特化 vs. 通用：** `GetLastMovementInputVector()` 是更专门化的运动输入查询，而 `GetLastInputVector()` 是一个更加通用的输入查询，允许用于处理其他类型的 `Pawn` 输入。

1. **`GetLastMovementInputVector()`**
    - **用途：** 这个函数返回的是上一次通过 `ConsumeMovementInputVector()` 处理的输入向量，通常是由 `Pawn` 或 `PawnMovementComponent` 处理的。主要用于运动组件的场景。
    - **使用场景：** 当你需要了解上次影响 `Pawn` 移动的输入时会使用它。例如，动画系统可能需要知道上一次的移动输入，以便确定当前的运动状态。

2. **`GetLastInputVector()`**
    - **用途：** 这个函数返回的是上一次通过 `ConsumeInputVector()` 处理的输入向量，主要用于处理更通用的输入，而不仅限于移动。
    - **使用场景：** 用于需要了解上一次通用输入的情况。虽然也可能用于运动相关的逻辑，但它更通用一些，可以适用于其他 `Pawn` 组件。


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>

 只关心 `Pawn` 的移动输入，通常会使用 `GetLastMovementInputVector()`；而如果需要处理或获取更广泛的输入，则可以使用 `GetLastInputVector()`。

</chatmessage>
