---
title: 陕西省财政厅
category: showcase
industry: 其他
company: 陕西省财政厅
summary: 为预算管理一体化核心业务系统打造企业级分布式数据库平台
officialPath: http://pub.cnwest.com/data/html/headwords/26.html
detail: true
id: Others
---

## 客户挑战

陕西省财政厅包含了预算相关的8大核心业务模块，还包括了46个业务应用系统以及相应的安全与运维服务体系。传统IT架构为集中式数据库、存储及大中型服务器设备，每年需要巨大的IT费用去维护和升级，而传统集中式的架构并不方便高效水平扩展，也无法支撑新信息时代的业务发展；业务割裂，数据标准不一，也是数字化进程中的拦路虎。

## 解决方案

财政云的目标是建设全省统一数据中心，按省、市、县(区)各本级逻辑分区，部署服务于本级的横向业务系统实例；因此华为云数据库团队给出的方案是，部署一套基于华为云Stack的GaussDB(for openGauss)分布式数据库平台，建立省、市、县(区)各本级财政、财务数据库，逻辑隔离。数据库支持分堆部署，地市可根据实际情况，申请一套数据库平台，承载市及所属县(区)各本级数据库，逻辑隔离。由分布式数据库承载一体化平台的生产库，当增加新的业务系统纳管至一体化平台时，可以更加灵活的进行扩容，一套库管理全省数据，做到真正意义的数据集中化管理。

<div class="case-img"><img src="./o1.png"/></div>

## 客户收益

• 基于GaussDB(for openGauss)高吞吐、强一致性事务能力，轻松应用流量高峰，支撑全省3万家单位资金支付电子化，“银行扎堆、线下排队”现象消失。
• 总账追溯可查看原始电子凭证，追溯期由原来的3月扩大到全年。
• 支付数据直接记账，比手动记账时间缩短80%。

## 合作伙伴

<div class=logo>
    <img src="./huaweiyun.png"/>
    <img src="./gaussdb.png"/>
</div>
