---
title: c10.GameLoad&Save
order : 1000
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
游戏保存读取的几种方法
</chatmessage>


### JSON

**1. 安装官方插件**

![](..%2Fassets%2Fjson.png)

**2. Build.cs**

```cpp
PrivateDependencyModuleNames.AddRange(new string[] { "JsonUtilities" ,"Json", "JsonBlueprintUtilities" });
```
![](..%2Fassets%2Fjson2.png)

**3. 关键节点**


![](..%2Fassets%2Fjson3.png)

**4. 注意事项**

- FJsonObjectWrapper JsonObject，json格式转换成的json结构体对象
- SaveJsontoFile路径如果不存在则不会创建对应的json

**5. 保存|序列化**

![](..%2Fassets%2Fjson4.png)


### GameSetting

**1. 继承UGameUserSettings类**

**2. 声明定义要保存的变量**

```cpp
protected:
//音量
UPROPERTY(config)
float MasterVolume;
```

>这里的config会自动保存到我们的游戏设置config文件中，开发阶段\Saved\Config\WindowsEditor\GameUserSettings.ini

**3. setter&getter**

```cpp
  UFUNCTION(BlueprintCallable,Category = "Exorcist|GameSettings",meta = (ToolTip ="Exorcist SetMasterVolume Function"))
    void SetMasterVolume(float NewVolume);

    UFUNCTION(BlueprintCallable,Category = "Exorcist|GameSettings",meta = (ToolTip ="Exorcist GetMasterVolume Function"))
    float GetMasterVolume() const;

```
4. 参数初始化（重置）函数->重载default函数

```cpp
virtual void SetToDefaults() override;  
    void UExorcistGameUserSettings::SetToDefaults()
    {
        Super::SetToDefaults();
        MasterVolume = 1.0f;      
    }
```
<chatmessage avatar="../../assets/emoji/hx.png" :avatarWidth="40" >
我很想吐槽这个中文翻译，搞得我很难受，正确应该是初始化，这里应该翻译成设置默认，而不是设为。
</chatmessage>

![](..%2Fassets%2Fjson7.png)

5. 蓝图中使用

 ![](..%2Fassets%2Fjson8.png)
