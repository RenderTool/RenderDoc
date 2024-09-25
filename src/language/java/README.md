---
title: java
icon: j
dir:
  order: 1
category:
  - java
tag:
  - 介绍
  - java
---
## java


## 环境变量配置

### 一、jdk下载安装

1. jdk22下载链接:https://www.oracle.com/cn/java/technologies/downloads/#jdk22-windows

![](assets%2Fjdk001.png)

2. 双击安装

![](assets%2Fjdk002.png)

3. 路径不能有中文

![](assets%2Fjdk003.png)


### 二、jdk环境变量配置

1. 找到刚刚的安装目录，复制路径

![](assets%2Fjdk004.png)

2. 打开环境变量

![](assets%2Fjdk005.png)

3. 在用户变量中点击“新建”

![](assets%2Fjdk006.png)

4. 变量名字为`JAVA_HOME`，变量值就是刚才复制的java所在的目录，建完点击确定

![](assets%2Fjdk007.png)

5. 双击用户目录的“Path”，然后点击“新建”，输入%JAVA_HOME%\bin

![](assets%2Fjdk008.png)

<chatmessage avatar="../../assets/emoji/blzt.png" :avatarWidth="40">
记得一路点确定！
</chatmessage>

6. 打开cmd，输入java -version，验证java环境是否配置成功

![](assets%2Fjdk009.png)

### 三、项目部署

1. 在jar包目录打开cmd，输入java -version，验证java环境是否配置成功

![](assets%2Fjdk010.png)

2. 然后输入`java -jar` 包名.jar

![](assets%2Fjdk011.png)

3. 进程服务

```bat
@echo off
REM 应用程序的 JAR 文件路径
set JAR_FILE=D:\UE5PJ2\GameServer\ExorcistServer\target\server-0.0.1-SNAPSHOT.jar

REM 日志文件路径
set LOG_FILE=application.log

REM 检查 JAR 文件是否存在
if not exist "%JAR_FILE%" (
    echo Error: %JAR_FILE% not found!
    exit /b 1
)

REM 启动应用程序
echo Starting application...
start /b java -jar "%JAR_FILE%" > "%LOG_FILE%" 2>&1

REM 获取应用程序的进程ID
for /f "tokens=2 delims==" %%a in ('wmic process where "caption='java.exe'" get ProcessId /value') do set PID=%%a

echo Application started with PID: %PID%

REM 输出日志路径
echo Logs are being written to: %LOG_FILE%

```

4. 命令行启动

```bat
@echo off

REM 获取当前 .bat 文件所在的目录路径
set CURRENT_DIR=%~dp0

REM 拼接 JAR 文件的路径
set JAR_FILE=%CURRENT_DIR%server-0.0.1-SNAPSHOT.jar

REM 检查 JAR 文件是否存在
if not exist "%JAR_FILE%" (
    echo Error: %JAR_FILE% not found!
    exit /b 1
)

REM 启动应用程序，并保持命令窗口打开
start cmd /k "cd /d %CURRENT_DIR% && java -jar %JAR_FILE%"

exit
```
