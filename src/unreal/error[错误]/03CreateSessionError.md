---
title: Error3.会话创建失败问题
order : 3
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/kclr.png" :avatarWidth="40">
会话创建失败，无法创建房间,一开始我还以为创建成功加入失败，后来发现是没正确配置。
</chatmessage>

### 解决思路

```ini
[/Script/Engine.GameEngine]
+NetDriverDefinitions=(DefName="GameNetDriver",DriverClassName="OnlineSubsystemSteam.SteamNetDriver",DriverClassNameFallback="OnlineSubsystemUtils.IpNetDriver")

[OnlineSubsystem]
DefaultPlatformService=Steam

[OnlineSubsystemSteam]
bEnabled=true
SteamDevAppId=480
;这一行必须的
bInitServerOnClient=true

[/Script/OnlineSubsystemSteam.SteamNetDriver]
NetConnectionClassName=OnlineSubsystemSteam.SteamNetConnection
```
