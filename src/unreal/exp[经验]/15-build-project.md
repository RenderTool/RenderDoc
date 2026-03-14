---
title: EXP15-编译项目
order : 15
category:
  - u++
---

# UE5 项目编译方法指南

## 1. 环境准备

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
在编译 UE5 项目之前，确保你已经安装了以下软件：
</chatmessage>


- **Unreal Engine 5.5**：确保引擎已正确安装
- **Visual Studio 2022**：推荐使用最新版本
- **Windows SDK**：确保安装了与 Visual Studio 兼容的 Windows SDK 版本

## 2. 找到 UnrealBuildTool

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
UnrealBuildTool 是 UE5 用于编译项目的核心工具，通常位于引擎安装目录中：
</chatmessage>

```
[UE5 安装目录]\Engine\Binaries\DotNET\UnrealBuildTool\UnrealBuildTool.exe
```

例如：
```
D:\UE_5.5\Engine\Binaries\DotNET\UnrealBuildTool\UnrealBuildTool.exe
```

## 3. 执行编译命令

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
在项目根目录下，使用以下命令编译项目：
</chatmessage>

```powershell
# 基本编译命令
[UnrealBuildTool 路径] [项目名称]Editor Win64 Development -Project=[项目.uproject 路径] -WaitMutex -FromMsBuild
```

例如：
```powershell
D:\UE_5.5\Engine\Binaries\DotNET\UnrealBuildTool\UnrealBuildTool.exe SelectionVM_3Editor Win64 Development -Project=d:\UE5PJ\AITest\SelectionVM_3.uproject -WaitMutex -FromMsBuild
```

## 4. 编译过程分析

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
编译过程会经历以下步骤：
</chatmessage>



1. **解析头文件**：运行 UnrealHeaderTool 生成反射代码
2. **构建项目**：编译所有源代码文件
3. **链接**：生成最终的 DLL 文件

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
编译成功后，会在项目的 Binaries 目录中生成相应的 DLL 文件，例如：
</chatmessage>

- `UnrealEditor-[项目名称].dll`
- `UnrealEditor-[插件名称].dll`

## 5. 编译结果验证

<chatmessage avatar="../../assets/emoji/dsyj.png" :avatarWidth="40">
编译成功后，可以通过以下方式验证：
</chatmessage>

1. **检查 Binaries 目录**：确认生成了相应的 DLL 文件
2. **启动 UE5 编辑器**：尝试打开项目，确认插件已正确加载
3. **运行项目**：确保项目能够正常运行

## 6. 示例编译输出

>成功编译的输出示例：

```
Log file: C:\Users\Administrator\AppData\Local\UnrealBuildTool\Log.txt
Invalidating makefile for SelectionVM_3Editor (ChainFlow.uplugin has been added)
Plugin 'ChainFlow' depends on plugin 'StructUtils' which was deprecated in 5.5 and will soon be removed. Please update your dependencies.
Parsing headers for SelectionVM_3Editor
  Running Internal UnrealHeaderTool D:\UE5PJ\AITest\SelectionVM_3.uproject D:\UE5PJ\AITest\Intermediate\Build\Win64\SelectionVM_3Editor\Development\SelectionVM_3Editor.uhtmanifest -WarningsAsErrors -installed
Total of 151 written
Reflection code generated for SelectionVM_3Editor in 0.8269557 seconds
Building SelectionVM_3Editor...
Using Visual Studio 2022 14.38.33145 toolchain (D:\Vs2022\VC\Tools\MSVC\14.38.33130) and Windows 10.0.22621.0 SDK (C:\Program Files (x86)\Windows Kits\10).
...
Total execution time: 37.04 seconds
```
