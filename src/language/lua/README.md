---
title: lua
icon: l
dir:
  order: 1
category:
  - 教程知识
  - lua
tag:
  - 介绍
  - lua
---

![](assets%2FLua-Logo.svg.png =200x200)

## 须知

>本站只是简单介绍一下lua基础，具体入门还是看大佬教程吧，重点还是关注我自己的项目问题。

## lua

Lua 是一种轻量小巧的脚本语言，用标准C语言编写并以源代码形式开放，
其设计目的是为了嵌入应用程序中，比如我们的主角[unreal engine]("https://www.unrealengine.com/zh-CN/download")

<ChatMessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
跟BABA一起念 Lua/'lua/（噜啊）
</ChatMessage>

<!-- more -->

## 脚本式编程

我们可以将 Lua 程序代码保存到一个以 lua 结尾的文件，并执行。
<br>如：`test.lua`，该模式称为脚本式编程。

```lua
print("Hello World！")
```

<ChatMessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
这里的print是内建函数，有点类似cpp中的std标注库中的函数。
</ChatMessage>

## lua注释

1. 单行注释用：

```lua
--单行注释
```
2. 多行注释：

```lua
--[[
多行注释
多行注释
--]]
```

## lua保留关键字
| 关键词   | 描述               |     | 关键词   | 描述               |
|----------|---------------------|-----|----------|---------------------|
| and      | 逻辑与             |     | break    | 退出循环           |
| do       | 开始一个块         |     | else     | 备用条件           |
| elseif   | 备用条件           |     | end      | 结束块             |
| false    | 布尔假值           |     | for      | 循环遍历范围       |
| function | 定义函数           |     | if       | 条件语句           |
| in       | 在范围内           |     | local    | 定义本地变量       |
| nil      | 表示不存在         |     | not      | 逻辑非             |
| or       | 逻辑或             |     | repeat   | 循环直到           |
| return   | 从函数返回         |     | then     | 条件为真时的块     |
| true     | 布尔真值           |     | until    | 循环结束条件       |
| while    | While 循环         |     | goto     | 跳转到标签         |

<ChatMessage avatar="../../assets/emoji/hx.png" :avatarWidth="40">
记不住，根本记不住。
</ChatMessage>

## lua变量

| 类型         | 示例          | 描述                                      |
|------------|--------------|------------------------------------------|
| 全局变量   | 默认情况下总是全局变量 | 可以在任何地方被访问和修改。想删除一个全局变量，只需要将变量赋值为nil。 |
| 局部变量   | local b = 5  | 仅在声明它的作用域内可见和访问。           |

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
BABA多一句，这里不是null是nil
</ChatMessage>

## lua常量
在Lua中，没有明确的语法用于定义常量，如在其他编程语言中使用 const 或 final 关键字。  
然而，通常通过约定俗成的方式来模拟常量的概念。  
在Lua中，使用全大写字母表示的变量名通常被视为常量，表示这些变量的值不应该被修改。

```lua
-- 定义常量
MAX_VALUE = 100
PI = 3.14

-- 使用常量
local radius = 5
local area = PI * radius * radius

-- 尝试修改常量（虽然不会报错，但是不是推荐的做法）
MAX_VALUE = 200

```

## lua数据类型

| 数据类型             | 描述                               |
|------------------|------------------------------------|
| nil              | 只有值nil属于该类，表示一个无效值（在条件表达式中相当于false）。 |
| boolean          | 包含两个值：false和true。            |
| number           | 表示双精度类型的实浮点数。            |
| string           | 由一对双引号或单引号来表示。         |
| function         | 由 C 或 Lua 编写的函数。             |
| userdata         | 表示任意存储在变量中的C数据结构。    |
| thread           | 表示执行的独立线路，用于执行协同程序。 |
| table            | 在 Lua 里，table 的创建是通过"构造表达式"来完成，<br/>最简单构造表达式是{}，用来创建一个空表。也写成表格。 |

## lua循环语句

### for

::: code-tabs#shell
@tab:active  lua
```lua
--Lua 编程语言中数值 for 循环语法格式:
--其中exp3对标 步长默认是1，默认可以不写
for var=exp1,exp2,exp3 do  
    <执行体>  
end  
```
@tab cpp

```cpp
for(int a = 0 ;a<10;a++){
//对应到lua这里的int a = 0 就是exp1,a<10就是exp2 ,a++就是exp3
}
```
:::

### while

::: code-tabs#shell

@tab:active  lua

```lua
i = 1
while (i < 10) do
    print(i)
    i = i + 1
end
```
@tab cpp

```cpp
while (i < 10) {
    std::cout<<i<<std::endl;
    i = i + 1
}
```
:::

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
可以理解成{}代码块用do end来表示。
</ChatMessage>

### repeat...until

::: code-tabs#shell

@tab:active  lua

```lua
i = 1
repeat
    print(i)
    i = i + 1
until (i > 10)
```
@tab cpp

```cpp
i = 1
do{
    std::cout<<i<<std::endl;
     i = i + 1
}while (i > 10);
```
:::

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
for 和 while 循环的条件语句在当前循环执行开始时判断<br>而 repeat...until 循环的条件语句在当前循环结束后判断。
</ChatMessage>

## lua条件语句
### if

::: code-tabs#shell

@tab:active  lua

```lua
--[ 0 为 true ]
if(0)
then
    do
    print("0 为 true")
    end
    --这里的do end可以省略。
end
```
@tab cpp

```cpp
if (true) {
    std::cout<<"0 为 true"<<std::endl;
}
```
:::

<ChatMessage avatar="../../assets/emoji/ybk.png" :avatarWidth="40">
可以理解成{}代码块用then end来表示。
</ChatMessage>

## lua函数

::: code-tabs#shell

@tab:active  lua

```lua
optional_function_scope function function_name( argument1, argument2..., argumentn)
    function_body
    return result_params_comma_separated
end
```
@tab js

```js
function function_name(argument1, argument2..., argumentn)
{
    function_body
    return result_params_comma_separated
}
```
:::

* optional_function_scope: 该参数是可选的指定函数是全局函数还是局部函数，未设置该参数默认为全局函数，如果你需要设置函数为局部函数需要使用关键字 local。
* function_name: 指定函数名称。
* argument1, argument2, argument3..., argumentn: 函数参数，多个参数以逗号隔开，函数也可以不带参数。
* function_body: 函数体，函数中需要执行的代码语句块。
* result_params_comma_separated: 函数返回值，Lua语言函数可以返回多个值，每个值以
<span style="color: red;"> 逗号隔开。
</span>

```lua
-- 定义一个返回多个值的函数
function getMultipleValues()
    return 10, "hello", true
end

-- 调用函数并接收返回值
local num, greeting, flag = getMultipleValues()

-- 打印返回值
print(num)       -- 输出 10
print(greeting)  -- 输出 hello
print(flag)      -- 输出 true
```

<ChatMessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
1.这里的函数定义特性更像JS中的function name (){} ,因为变量类型是自动的。<br>
2.不同于C++的auto,<span style="color: red;"> auto
</span>是一种推导机制，一旦赋值特定类型，就不能再改变。
</ChatMessage>

### 可变参数
>Lua 函数可以接受可变数目的参数，和 C 语言类似<br>在函数参数列表中使用三点 ... 表示例如：

```lua
function add(...)  
local s = 0  
  for i, v in ipairs{...} do   --> {...} 表示一个由所有变长参数构成的数组  
    s = s + v  
  end  
  return s  
end  
print(add(3,4,5,6,7))  --->25
```
## lua运算符

| 类别           | Lua              | C++          |
| -------------- | ---------------- | ------------ |
| 字符串连接     | ..               | + 或 append() |
| 逻辑与         | and              | &&           |
| 逻辑或         | or               | \|           |
| 逻辑非         | not              | !            |
| 自增           | 无               | ++           |
| 自减           | 无               | --           |
| 三元条件       | condition and a or b | condition ? a : b |
| 条件表达式     | condition and a or b | condition ? a : b |
| 按位与         | 无               | &            |
| 按位或         | 无               | \|           |
| 按位取反       | 无               | ~            |
| 左移           | 无               | <<           |
| 右移           | 无               | >>           |
| 取余           | %                | %            |

<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
记不住，根本记不住。咱们只需记一个特殊的就行了。
</ChatMessage>

>特殊的LUA中有个一元运算符#，表示取字符串长度.

``` lua
local str = "Hello, Lua!"
local len = #str
print(len) -- 输出：12
```
## lua字符串
### 1. 单引号

```lua
local str1 = 'This is a string.'
```

### 2. 双引号
```lua
local str = "Hello, "
str = str .. "World!"  -- 创建一个新的字符串并将其赋值给str
print(str)  -- 输出 "Hello, World!"
```

>单双引号它们的功能是相似的，可以根据个人偏好来选择使用哪种引号。<br>
主要区别在于在字符串内部的引号是否需要转义。


<hr>

<ChatMessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
你在说啥？单引号和双引号区别:
</ChatMessage>

1. **转义字符：**
    - 在双引号字符串中，可以直接使用单引号，而不需要转义。反之亦然。
    - 例如，在双引号字符串中，可以写 `"It's a string"` 而不需要转义单引号。

2. **字符串内嵌：**
    - 可以在单引号字符串中直接使用双引号，反之亦然。
    - 例如，在单引号字符串中，可以写 `'This is a "string" inside'`。

示例：

```lua
local singleQuoted = 'This is a single-quoted string'
local doubleQuoted = "This is a double-quoted string"
local mixedQuotes = 'You can use "double quotes" inside single quotes'
```
<hr>

### 3. [[ 与 ]] 间的一串字符。

```lua
local multilineString = [[
This is a multiline string1.
This is a multiline string2.
This is a multiline string3.
]]

print(multilineString)
```


## lua数组

* 在 Lua 中，数组不是一种特定的数据类型，而是一种用来存储一组值的数据结构。
* 实际上，Lua 中并没有专门的数组类型，而是使用一种被称为 "table" 的数据结构来实现数组的功能。
* 要计算数组的长度（即数组中元素的个数），可以使用 # 操作符

``` lua
-- 创建一个数组
local myArray = {10, 20, 30, 40, 50}

-- 访问数组元素
print(myArray[1])  -- 输出 10
print(myArray[3])  -- 输出 30

-- 计算数组长度
local length = #myArray
print(length) -- 输出 5
```
## TODO
未完待续。。。

## 参考链接
- [wiki](https://zh.wikipedia.org/wiki/Lua)
- [菜鸟教程]("https://www.runoob.com/lua/lua-functions.html")
