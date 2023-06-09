---
title: 'openGauss训练营学习心得'

date: '2022-05-19'

category: 'blog'
tags: ['openGauss']

archives: '2022-05'

author: 'labixiaoxin'

summary: 'openGauss'

img: '/zh/blogs/xingchen/title/title.jpg'

times: '16:30'
---

感谢 openGauss 社区、Gauss 松鼠会、云和恩墨联合主办的 “8 小时玩转 openGauss 训练营”，让我对 openGauss 有了一些初步的了解。
以下是我学习的一下心得：

## openGauss 关键特性：

#### 1.高性能

两路鲲鹏性能 150 万 tpmC；
面向多核架构的并发控制技术；
NUMA-Aware 数据结构；
SQL-Bypass 智能选路执行技术；
面向实时高性能场景的内存引擎；
Inplace-Update 引擎

#### 2.高可用 & 高安全

业务无忧，故障切换时间 RTO<10s；
基于 Paxos 协议的高可用精细安全管理：细粒度访问控制、多维度审计；
全方位数据保护：存储&传输&导出加密、动态脱敏、全密态计算、防篡改；

#### 3.高智能

AI 自治运维：参数推荐、慢 SQL 诊断、索引推荐、趋势预测及异常检测等；
WDR 报告：多维性能自监控视图，实时掌控系统性能表现；
库内 AI 引擎：通过简易 SQL 接口提供库内机器学习算法的训练和推理；

#### 4.全开放

采用木兰宽松许可证协议，允许对代码自由修改，使用、引用；
数据库内核能力完全开放；
开放运维监控、开发和迁移工具；
开放伙伴认证、培训体系及高校课程

## openGauss MOT 优势

#### 1：性能高、CPU 利用率高、延迟低

高度优化的全内存免锁存储引擎
基于全内存优化实现的免锁索引
高度优化的并发访问控制
针对 NUMA 优化的内存管理，预缓存对象池
针对 NUMA 高度优化的组提交

#### 2：生态好、兼容好，功能完整

有效利用 openGauss 现有的查询引擎，兼容 PG 生态
兼容 PG 原生 FDW 和索引，SQL 标准兼容度高，功能完整
除 PG 原生 FDW 之外，还支持存储过程、用户定义函数等功能

## 防篡改账本机制

#### 1.核心思想：

数据完整性(Integrity)保护：对防篡改账本表进行数据增、删、改操作，系统会在系统中记录行级数据变化追溯信息，操作的追溯信息，并通过密码学算法生成校验信息。通过对校验信息的保护、比对、验证，起到对重要数据的完整性保护，识别、阻止未授权更改。

#### 2.核心价值：

易用：使用 SCHEMA 级别隔离，创建 SCHEMA 时指定账本属性，在该 SCHEMA 中创建的用户表自动成为账本；
无感：账本表支持增、删、改、查，与普通表语法一致；
可追溯：对账本表的数据修改，均会以 hash 变迁的形式在历史表中记录数据的变迁记录，以 SQL 的形式在全局表中记录数据操作；
融合：账本表可以和其他表关联进行事务或查询；
高并发：账本表中数据行与行之间无关联，可以支持并发更改；

通过这次学习，发现 openGauss 很强大，之前接触的少，误以为国产数据库都不怎么样，但是这次培训会完全改变了我对国产数据库的认知。祝愿 openGauss 越来越强大！
