---
title: EXP8.SpaceAdditive
order : 08
category:
  - u++
---

<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
Baba!我想让我的角色跑起来时身体有明显的运动倾斜。
</chatmessage>

![](..%2Fassets%2FHighresScreenshot00000.png)

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
安排！
</chatmessage>

## 准备

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
准备3个Pose，左中右。
</chatmessage>


![](..%2Fassets%2Fpose001.png)


### 1D混合空间

<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
将上面的3个Pose放入。
</chatmessage>


![](..%2Fassets%2Fpose002.png)


<chatmessage avatar="../../assets/emoji/hh.png" :avatarWidth="40">
妙啊！通过-1到1的值映射左中右3个Pose的动作幅度。
</chatmessage>

### 应用网格体空间叠加型姿势（Apply Mesh Space Additive）


![](..%2Fassets%2Fpose003.png)


<chatmessage avatar="../../assets/emoji/bqb (2).png" :avatarWidth="40" alignLeft>
在不破坏原有动作的前提下，Space Additive能通过条件自动叠加混合出我们需要的姿势。
</chatmessage>


![](..%2Fassets%2Fpose005.png)

![Get Lean Amount](..%2Fassets%2Fpose004.png)


![Calculate Relative Acceleration Amount](..%2Fassets%2Fpose006.jpg)

### 其他混合技术

# 动画混合技术对比表

| ​**技术类型**​           | ​**子技术**​                | ​**核心原理**​                                                                 | ​**适用场景**​                     | ​**典型工具/代码示例**​                                                                 |
|------------------------|-------------------------|------------------------------------------------------------------------------|----------------------------------|-----------------------------------------------------------------------------------|
| ​**时间轴混合**​          | 线性混合 (Linear Blending) | 对两个动画片段的关键帧进行线性插值。                                       | 简单状态切换（如站立即走）         | ```cpp<br>// Unreal Engine权重线性插值<br>float BlendWeight = FMath::Lerp(StartWeight, EndWeight, Alpha);``` |
|                        | 平滑混合 (Smooth Blending) | 引入加速度参数模拟物理惯性，权重按指数衰减。                                 | 角色移动过渡（奔跑→滑步→静止）       | ```cpp<br>// 指数衰减权重计算<br>BlendWeight = Initial * FMath::Exp(-DecayRate * DeltaTime);```          |
| ​**空间变换混合**​        | 方向形变 (Orientation Warping) | 根据目标方向调整骨骼旋转（如横滑时的足部偏移）。                               | 运动匹配中的横向滑步补偿           | ```cpp<br>// UE4方向形变节点配置<br>SetWarpTargetDirection(LocomotionDirection);```                       |
|                        | 位置混合 (Position Blending) | 叠加多个动画的位置数据，修正地面碰撞后的滑动。                                 | 物理交互（被击飞后的落地缓冲）       | ```csharp<br>// Unity位置混合逻辑<br>transform.position = Vector3.Lerp(currentPos, targetPos, BlendFactor);``` |
| ​**物理驱动混合**​        | 惯性混合 (Inertia Blending) | 通过质量、速度和加速度动态调整动画权重，模拟真实惯性。                         | 高速移动后的减速（急停、转弯）       | ```cpp<br>// 物理惯性混合公式<br>v(t) = v0 * e^(-λt) + (F/m)(1 - e^(-λt));```                           |
|                        | 动量混合 (Momentum Blending) | 保留运动动量信息，延长状态切换的平滑时间。                                     | 物理驱动动画（角色被推飞轨迹延续）   | ```python<br>// PyBullet动量混合示例<br>apply_linear_impulse(body_id, momentum_x, momentum_y, momentum_z);``` |
| ​**层级混合**​            | 基础层+叠加层 (Base + Additive) | 通过权重控制基础动画与额外动画的叠加强度（如武器摆动叠加在身体动画上）。     | 武器/表情等局部效果添加             | ```unreal<br>// UE4叠加层权重设置<br>SetAdditiveLayerWeight("ArmWeapons", 0.5f);```                          |
|                        | 遮罩混合 (Masked Blending)   | 通过骨骼遮罩限制叠加层的作用范围（如仅腿部添加滑行动画）。                       | 局部动画调整（如滑行腿部特效）       | ```unreal<br>// 设置骨骼遮罩<br>SetBoneMask(BoneMask, EAnimCurveTypes::Additive);```                        |
| ​**动画状态机混合**​      | 交叉淡入淡出 (Crossfade Blending) | 在两个动画间渐变权重，避免突兀切换。                                             | 复杂动作过渡（走→跑→跳）            | ```unreal<br>// UE4状态机过渡设置<br>AddTransition(FromState, ToState, TransitionTime);```                |
|                        | 死区混合 (Dead Blending)    | 插入“死区”时间，忽略短时间内的突变输入，防止高频切换抖动。                     | 快速动作序列（战斗技能连招）         | ```csharp<br>// Unity死区混合检测<br>if (InputVelocity.SquaredLength() < Threshold) { DeadZoneTime += DeltaTime;}``` |
| ​**AI与数据驱动混合**​    | 动捕后期处理 (Motion Capture Post-Processing) | 使用工具（如Mixamo）自动平滑过渡帧。                                            | 修复原始动捕数据的突兀动作           | ```mixamo<br>// Mixamo平滑工具参数设置<br>Smoothness: 0.8; Transition Time: 0.3s;```                      |
|                        | 神经混合 (Neural Blending)   | 训练AI模型预测最佳过渡动画（如Meta的AnimateDiffusion）。                          | 复杂交互场景（未知动作类型生成）     | ```python<br}// 神经网络训练伪代码<br>model.train(transition_data, epochs=100);```                           |
| ​**变形混合**​            | 混合形状 (Blend Shapes)     | 通过顶点形状权重叠加实现面部表情或体型变化。                                     | 角色个性化（不同角色的体型差异）     | ```unreal<br}// UE4BlendShapes权重调整<br>SkeletalMeshComponent->SetBlendShapeWeight(ShapeIndex, Value);``` |
|                        | 骨骼变形 (Skeletal Deformation) | 在骨骼动画基础上叠加形变效果（如衣服随动作摆动）。                               | 衣物/软体物理模拟                  | ```glsl<br>// GLSL顶点着色器变形逻辑<br>varying vec3 deformedPos = originalPos + (boneTransform * deformationVector);``` |

---
