const t=JSON.parse('{"key":"v-7aebf8d4","path":"/unreal/exp_%E7%BB%8F%E9%AA%8C_/GameMode.html","title":"U++GameMode绑定","lang":"zh-CN","frontmatter":{"title":"U++GameMode绑定","order":1,"category":["u++"],"description":"1. 新建GameMode类 类别 类名 用途 APawn class 游戏中的角色 代表游戏中的玩家、AI 或者其他角色。控制移动、动画、状态、碰撞等。 AHUD class Heads-Up Display (HUD) 用于在屏幕上显示游戏信息，如分数、生命值、小地图等。通常负责在画面上绘制 UI 元素。 APlayerController class 玩家控制器 处理玩家输入，控制与玩家的交互，例如移动、攻击、交互等。可以操控一个或多个角色。 AGameState class 游戏状态 负责跟踪整个游戏的全局状态，例如游戏时间、分数、胜利条件等。用于同步状态给所有客户端。 APlayerState class 玩家状态 保存与玩家相关的状态，如分数、生命值、角色类型等。通常由服务器和客户端各自维护一份。 ASpectatorPawn class 观察者角色 允许玩家以观察者身份观察游戏，通常用于回放、录像功能或者观察比赛。不与玩家角色相关联，可以自由观察游戏世界。","head":[["meta",{"property":"og:url","content":"https://rendertool.github.io/RenderDoc/RenderDoc/unreal/exp_%E7%BB%8F%E9%AA%8C_/GameMode.html"}],["meta",{"property":"og:site_name","content":"RenderDoc"}],["meta",{"property":"og:title","content":"U++GameMode绑定"}],["meta",{"property":"og:description","content":"1. 新建GameMode类 类别 类名 用途 APawn class 游戏中的角色 代表游戏中的玩家、AI 或者其他角色。控制移动、动画、状态、碰撞等。 AHUD class Heads-Up Display (HUD) 用于在屏幕上显示游戏信息，如分数、生命值、小地图等。通常负责在画面上绘制 UI 元素。 APlayerController class 玩家控制器 处理玩家输入，控制与玩家的交互，例如移动、攻击、交互等。可以操控一个或多个角色。 AGameState class 游戏状态 负责跟踪整个游戏的全局状态，例如游戏时间、分数、胜利条件等。用于同步状态给所有客户端。 APlayerState class 玩家状态 保存与玩家相关的状态，如分数、生命值、角色类型等。通常由服务器和客户端各自维护一份。 ASpectatorPawn class 观察者角色 允许玩家以观察者身份观察游戏，通常用于回放、录像功能或者观察比赛。不与玩家角色相关联，可以自由观察游戏世界。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-15T05:59:15.000Z"}],["meta",{"property":"article:author","content":"Mr.Si"}],["meta",{"property":"article:modified_time","content":"2023-11-15T05:59:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"U++GameMode绑定\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-15T05:59:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Si\\",\\"url\\":\\"https://rendertool.github.io/RenderDoc/\\"}]}"]]},"headers":[{"level":2,"title":"1. 新建GameMode类","slug":"_1-新建gamemode类","link":"#_1-新建gamemode类","children":[]},{"level":2,"title":"2. 写入对应的类","slug":"_2-写入对应的类","link":"#_2-写入对应的类","children":[]},{"level":2,"title":"3. 编译使用OR派生蓝图","slug":"_3-编译使用or派生蓝图","link":"#_3-编译使用or派生蓝图","children":[]}],"git":{"createdTime":1700027955000,"updatedTime":1700027955000,"contributors":[{"name":"admin","email":"750831855@qq.com","commits":1}]},"readingTime":{"minutes":1.46,"words":439},"filePathRelative":"unreal/exp[经验]/GameMode.md","localizedDate":"2023年11月15日","excerpt":"\\n<h2> 1. 新建GameMode类</h2>\\n<figure><figcaption></figcaption></figure>\\n<figure><figcaption></figcaption></figure>\\n<table>\\n<thead>\\n<tr>\\n<th>类别</th>\\n<th>类名</th>\\n<th>用途</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>APawn class</td>\\n<td>游戏中的角色</td>\\n<td>代表游戏中的玩家、AI 或者其他角色。控制移动、动画、状态、碰撞等。</td>\\n</tr>\\n<tr>\\n<td>AHUD class</td>\\n<td>Heads-Up Display (HUD)</td>\\n<td>用于在屏幕上显示游戏信息，如分数、生命值、小地图等。通常负责在画面上绘制 UI 元素。</td>\\n</tr>\\n<tr>\\n<td>APlayerController class</td>\\n<td>玩家控制器</td>\\n<td>处理玩家输入，控制与玩家的交互，例如移动、攻击、交互等。可以操控一个或多个角色。</td>\\n</tr>\\n<tr>\\n<td>AGameState class</td>\\n<td>游戏状态</td>\\n<td>负责跟踪整个游戏的全局状态，例如游戏时间、分数、胜利条件等。用于同步状态给所有客户端。</td>\\n</tr>\\n<tr>\\n<td>APlayerState class</td>\\n<td>玩家状态</td>\\n<td>保存与玩家相关的状态，如分数、生命值、角色类型等。通常由服务器和客户端各自维护一份。</td>\\n</tr>\\n<tr>\\n<td>ASpectatorPawn class</td>\\n<td>观察者角色</td>\\n<td>允许玩家以观察者身份观察游戏，通常用于回放、录像功能或者观察比赛。不与玩家角色相关联，可以自由观察游戏世界。</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{t as data};