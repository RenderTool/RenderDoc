---
title: c++1.continue|break
order: 1
category:
  - c++

---
<chatmessage avatar="../../../assets/emoji/dsyj.png" :avatarWidth="40">
`continue` 和 `break` 是两个在 C++ 中用于控制循环流程的关键字，有什么区别？
</chatmessage>

## 实践

### 1. **`break` 关键字：**

   ![整个蓝图块的过程为for循环](..%2Fassets%2Fbreak.jpg)

- **作用：** 当 `break` 关键字出现在循环体内时，它会立即终止当前循环，跳出循环体，不再执行循环内尚未执行完的语句。
- **用法：** 通常用于在满足某个条件时提前结束循环，无论循环条件是否达到结束条件。

   ```cpp
   for (int i = 0; i < 10; ++i) {
     if (i == 5) {
         break; // 当 i 等于 5 时，终止循环
     }
     std::cout << i << " ";
   }
   ```
   上述代码中，当 `i` 等于 5 时，`break` 将立即终止循环。

### 2. **`continue` 关键字：**

 ![整个蓝图块的过程为for循环](..%2Fassets%2Fcontinue.png)

- **作用：** 当 `continue` 关键字出现在循环体内时，它会跳过当前迭代中剩余的代码，直接进入下一次循环迭代。
- **用法：** 通常用于在满足某个条件时跳过当前迭代，继续进行下一次迭代。

   ```cpp
   for (int i = 0; i < 10; ++i) {
     if (i == 5) {
         continue; // 当 i 等于 5 时，跳过当前迭代，进入下一次迭代
     }
     std::cout << i << " ";
   }
   ```

   上述代码中，当 `i` 等于 5 时，`continue` 将跳过 `i == 5` 这一次的输出，直接进行下一次循环迭代。

## 总结

`break` 用于终止整个循环，而 `continue` 用于终止当前迭代并进入下一次迭代。