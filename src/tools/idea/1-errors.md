---
title: 网络导致的包体安装失败
order : 1
---

## 包体镜像问题

### 1. 找到路径

>C:\Users\admin\.m2\wrapper\dists\apache-maven-3.9.7-bin\3k9n615lchs6mp84v355m633uo\apache-maven-3.9.7\conf

![](assets%2Fluj.png)

### 2.修改镜像源

```xaml
<?xml version="1.0" encoding="UTF-8"?>

<!--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

<settings xmlns="http://maven.apache.org/SETTINGS/1.2.0"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd">

    <pluginGroups>

    </pluginGroups>

    <proxies>

    </proxies>

    <servers>

    </servers>

    <mirrors>

        <mirror>
            <id>alimaven</id>
            <mirrorOf>central</mirrorOf>
            <name>aliyun maven</name>
            <url>https://maven.aliyun.com/nexus/content/repositories/central/</url>
        </mirror>

        <!-- 中央仓库1 -->
        <mirror>
            <id>repo1</id>
            <mirrorOf>central</mirrorOf>
            <name>Human Readable Name for this Mirror.</name>
            <url>http://repo1.maven.org/maven2/</url>
        </mirror>

        <!-- 中央仓库2 -->
        <mirror>
            <id>repo2</id>
            <mirrorOf>central</mirrorOf>
            <name>Human Readable Name for this Mirror.</name>
            <url>http://repo2.maven.org/maven2/</url>
        </mirror>
        <mirror>
            <id>maven-default-http-blocker</id>
            <mirrorOf>external:http:*</mirrorOf>
            <name>Pseudo repository to mirror external repositories initially using HTTP.</name>
            <url>http://0.0.0.0/</url>
            <blocked>true</blocked>
        </mirror>

    </mirrors>

    <profiles>
        <profile>
            <repositories>
                <repository>
                    <id>spring</id>
                    <url>https://maven.aliyun.com/repository/spring</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </repository>
                <repository>
                    <id>central</id>
                    <url>http://host:port/content/groups/public</url>
                </repository>
            </repositories>
            <pluginRepositories>
                <pluginRepository>
                    <id>central</id>
                    <url>http://host:port/content/groups/public</url>
                </pluginRepository>
            </pluginRepositories>
        </profile>
    </profiles>

</settings>
```