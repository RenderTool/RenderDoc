---
title: c++7.i++|++i区别
order : 7
category:
  - c++
---

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
我不理解！++i和i++，有什么区别嘛？
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
要分情况，有时候没区别有时候有区别。
</chatmessage>

### 直接使用时

<gifwithbutton src="../../../assets/unrealgif/i++.gif"/>

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
根据上方演示来看都是+1没有区别。
</chatmessage>


### 参与运算时
<chatmessage avatar="../../../assets/emoji/ybk.png" :avatarWidth="40" alignLeft>
参与运算时，区别就出现了！
</chatmessage>

```cpp

#include <iostream>
using namespace std;

int main() {
    
    int i = 0;
    
    int result2 =i++;
    cout<<result2<<endl;
    
    i = 0;//为了测试重置为0.
    
    int result3=++i;
    cout<<result3<<endl;
    
    return 0;
}

```
>运行结果

![](..%2Fassets%2Fzhifin.png)

<gifwithbutton src="../../../assets/unrealgif/i++&++i.gif"/>

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40" >
我不理解！结果不一样了！
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb02.png" :avatarWidth="40" alignLeft>
这么看可能不形象，我给你重新举个例子。
</chatmessage>

```cpp
#include <iostream>
using namespace std;
// 前置递增函数
int preIncrement(int& x) {
    return ++x;
}

// 后置递增函数
int postIncrement(int& x) {
    return x++;
}

int main() {
    
    int i = 5;
    
    // 使用前置递增函数
    int result1 = preIncrement(i);
    cout<<result1<<endl;
    
    i = 5;//便于测试我们重写赋值
    
    // 使用后置递增函数
    int result2 = postIncrement(i);
    cout<<result2<<endl;
    
    return 0;
}

```

<gifwithbutton src="../../../assets/unrealgif/++i.gif"/>

1. **前置递增函数 `preIncrement`：**

   ```cpp
   int preIncrement(int& x) {
       return ++x;
   }
   ```

   这个函数先对 `x` 进行前置递增操作，然后返回递增后的值。因此，如果传入 `5`，函数会先将 `x` 递增为 `6`，然后返回 `6`。

2. **后置递增函数 `postIncrement`：**

   ```cpp
   int postIncrement(int& x) {
       return x++;
   }
   ```

   这个函数先返回 `x` 的原始值，然后再对 `x` 进行后置递增操作。如果传入 `5`，函数会返回 `5`，然后将 `x` 递增为 `6`。

<chatmessage avatar="../../../assets/emoji/hh.png" :avatarWidth="40">
我大概理解了i本身无论怎么样都在自增，但
++i先自增后返回。
i++先返回后自增。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/blzt.png" :avatarWidth="40" alignLeft>
是的，其实字面上也是这个意思。<br>
++i,++在前先自增然后返回i。<br>
i++,++在后先返回i在自增加。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/hx.png" :avatarWidth="40">
这么说，如果我想让i++在函数中正常运行，还需要一个临时变量转存后才能返回，要不然始终少一步。
</chatmessage>

<chatmessage avatar="../../../assets/emoji/bqb (6).png" :avatarWidth="40" alignLeft>
是的，这也是大量数据时++i性能更高的原因，直接+1后返回i,不需要临时变量来复制传递。
</chatmessage>
