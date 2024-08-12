---
title: EXP6 C盘缓存过大问题
order : 6
category:
  - u++
---


<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
每次UE用着用着C盘就被吞没了！
</chatmessage>


### 1.修改Config

Program Files\Epic Games\UE_5.0\Engine\Config\BaseEngine.ini"


### 2. 替换内容

```Path="%ENGINEVERSIONAGNOSTICUSERDIR%DerivedDataCache"```

替换为  

```Path="%GAMEDIR%DerivedDataCache"```
