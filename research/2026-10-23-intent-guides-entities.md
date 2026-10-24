# AION 2 攻略、进度、副本与角色视觉意图研究

日期：2026-10-23
数据输入：Similarweb Keyword Generator 导出（Worldwide、Web Total、最近 28 天：2026-09-22 至 2026-10-19）与 2026-10-23 当前 Web 搜索抽样
范围：`progression_items_economy.csv`、`dungeons_bosses.csv`、`characters_cosmetics_pets.csv`、`factions_world_lore.csv`、`generic_guides_reviews.csv`，以及 `other_verify.csv` 中较高体量的任务、物品、地点、标题词。

## 结论先行

这批需求不能继续用“每个关键词写一篇纯文字 Guide”的方式覆盖。搜索结果已经分成五种明显不同的产品形态：

1. **图文 Guide**：旧装备、精华提取、Combat Power、宠物 / Genus Insight，以及单个副本的路线与机制。
2. **数据库实体页**：任务、称号、物品、NPC。用户要的是“是什么、在哪里、怎么获得、前后置、奖励”，不是 600 字散文。
3. **视觉图库**：角色预设、皮肤、时装。没有真实预览、筛选和可用预设文件，页面就不成立。
4. **Hub**：Guides、Dungeons、Pets、Cosmetics 等主题入口；负责分组、筛选和发现，不应伪装成泛泛长文。
5. **enrich_existing**：`gameplay`、`how to block`、`how to leave dungeon` 等意图更适合进入首页、Beginner Guide 或 Dungeon Hub，避免制造孤立薄页。

地图、采集点、隐藏 Cube、Sealed Dungeon 的 SERP 还显示出第六种形态：**交互地图 / 数据工具**。它不能用“放一张地图截图 + 一段话”冒充。

优先级上，近期最值得落地的是：

- **P0**：`/guides/twitch-drops`、`/guides/elyos-vs-asmodian`、`/guides/old-gear`，并增强现有 `/guides/beginner-guide` 与 `/guides` Hub。
- **P1**：`/guides/essence-extraction`、`/guides/combat-power`、`/guides/soul-binding`、`/guides/pets-genus-insight`、`/character-creation`，以及首批真正有路线图和 Boss 图解的副本页。
- **P2 / 数据门槛后再做**：角色预设图库、时装目录、交互地图、任务 / 称号 / 物品数据库。它们潜力大，但没有合法真实素材或结构化数据时上线只会批量制造薄页。

## 数据口径与不能做的推断

- 导出来源是 Similarweb Keyword Generator 的 **全球（Worldwide）** 数据，不等于英语市场、美国市场或本站实际受众的可获得流量。
- `volume_28d` 只能作为筛选优先级的信号；同义词、错拼、单复数、词序倒置，以及同一词出现在 `phrase_match` / `questions` / `related` 的情况很多，**不可把变体体量或各行体量相加**。
- 下文家族体量只展示该家族中最高的一个代表词，明确不是家族总量。例如 faction 的多个 34k 左右变体不能累加。
- `related` 中有明显污染，包括 `aion 2.0`、同名/近名实体和宽泛非游戏意图。`other_verify` 更应视为“待验证候选池”，不能直接自动生成页面。
- SERP 部分是 2026-10-23 的当前 Web 搜索抽样，不是登录态、地区化 Google 的可复现精确排名。它用来识别页面形态与内容门槛，而不是承诺 Top 3 排名。
- 游戏版本、活动日期、奖励、数值和地图点位都可能变化；页面需要“Global client / build、最后核验日期、来源”三项更新标记。

## 变体合并与主意图

| 合并后的主题 | 代表词最高 `volume_28d`（不可相加） | 应归并的变体 | 主意图 | 推荐形态 |
|---|---:|---|---|---|
| Twitch Drops | 108,800 | drops、rewards、claim、link account | 当前奖励、时间、绑定和补领 | 图文 Guide，强时效 |
| Character Creation / Presets | 93,570 | character creation、presets、customization、Style Shop | 看效果、导入 / 导出、复刻外观 | 图文 Guide + 视觉图库 |
| Gameplay / What is AION 2 | 90,580 | gameplay、what is、review(s) | 看实机、判断值不值得玩 | enrich_existing；无实玩证据不做 Review |
| Max level / progression | 57,830 | max level、level cap、leveling | 快速答案 + 升级路径 | 现有 Beginner Guide 增强或 Progression Hub |
| Factions | 46,940 | Elyos or Asmodian(s)、faction differences、races | 开角前做不可逆选择 | 图文对比 Guide |
| Essence Extraction | 31,010 | extraction guide、success rate、Splendent Ruby | 解锁、升级、成功率、材料地点 | 图文 Guide + 位置数据 |
| Old gear | 30,200 | what to do、extract、transfer、keep、sell | 做处置决策 | 图文决策 Guide |
| Kinah / economy | 28,730 | kinah / kina、farm、earn、spend | 获取和使用货币 | Economy Hub；避免许诺固定收益 |
| Pet Transform / Genus Insight | 27,010 | pets、transform、best pet、genus、insight、Unbound by Genus | 养成、选择、称号解锁 | 系统 Guide + 实体页 |
| Splendent Ruby | 25,790 | splendid / splendent、ruby location、错拼 `locati0n` | 找采集物 / 任务物品 | 地点实体或地图，不拆错拼页 |
| Empyrean Trace | 23,440 | traces、how to use / get | 物品用途、来源、消费建议 | 结构化物品页，必要时 Guide 区块 |
| Dimensional Invasion | 20,700 | dimensional invasion、entry、timer | 进入、准备、通关 | 副本图文 Guide |
| Guides | 20,930 | guide(s)、beginner guide | 找到下一篇合适内容 | Hub，不是单篇泛文 |
| Draupnir | 8,510 | draupnir、hard mode、boss | 路线、Boss、奖励 | 副本实体 + 图文 Walkthrough |
| Sealed Dungeon Map | 7,150 | sealed dungeon map / route | 找入口、路线与房间 | 交互地图 / 工具 |
| 任务 / 称号实体 | 单词最高约 15,640 | Nemon、The One Who Hears the Voice、Golden Glow、Unbound by Genus | 找具体目标、前置、位置、奖励 | 数据库实体页 |

说明：`ruby locati0n`、`orichalcum locati0n`、`training dummy locati0n` 等高体量错拼在完整导出中已被路由到地点集群；它们与本报告主题存在产品依赖，但绝不能另建错拼 URL。`Golden Glow` 与 `Unbound by Genus` 在完整导出中也已被路由到实体查找集群。这里用它们解释 `other_verify` 中同一意图应如何归一，而不是把跨集群体量相加。

### `other_verify` 高体量实体词的人工归类

`other_verify` 的价值是暴露自动分类遗漏，不是直接给建页队列。以下体量仍然逐行独立、不可相加：

| 原始词 | `volume_28d` | Web 验证后的实体 / 意图 | 路由决策 |
|---|---:|---|---|
| `aion 2 nemon` | 14,260 | `Finding Nemon` 任务 | future `/quests/finding-nemon`；数据库实体，P2 |
| `aion 2 genus insight` | 13,190 | 宠物养成系统 | `/guides/pets-genus-insight`；图文 Guide，P1 |
| `leather crop fit aion 2` | 12,610 | 限时 Twitch Drop 时装 | 当前进入 `/guides/twitch-drops`；未来 `/cosmetics/leather-crop-fit`，不要另写模糊“搭配文” |
| `aion 2 feathers` | 11,860 | Empyrean Traces 的玩家俗称 / 地图收集物 | 规范到 Empyrean Trace + `/map`；不能与 trace 体量相加 |
| `aion 2 silentium` | 10,890 | 有获取与消耗路径的资源 | `/guides/silentium` 或 `/items/silentium`，取决于是否有完整来源 / 用途数据，P1/P2 |
| `aion 2 the one who hears the voice` | 9,990 | 具体任务 | future `/quests/the-one-who-hears-the-voice`；数据库实体，P2 |
| `aion 2 gartua` | 9,990 | `Immortal Gartua` 世界 Boss / 地点 | future `/bosses/immortal-gartua`；Boss 实体 + 地图，P2 |
| `aion 2 soul binding` | 9,290 | 装备强化系统 | `/guides/soul-binding`；图文系统 Guide，P1 |
| `aion 2 kisk` | 8,770 | 名称可能承接旧 AION 与 AION 2 不同实体 | 继续 verify-first；核对 Global 客户端 ID 后再决定实体或系统 Guide |
| `dream crossroad aion 2` | 8,630 | 疑似任务 / 目标短语，但当前结果不足以稳定确认 | 继续 verify-first；禁止按词面自动建 Guide |
| `aion 2 training dummy` | 8,110 | 训练地点 / 功能点 | 先 enrich Beginner / Combat；有完整双阵营点位才建地点页 |
| `aion 2 belt` | 6,910 | 装备槽 / 装备列表 | future `/items/belts` Hub，不建一篇泛 Belt 文章 |
| `aion 2 golden glow` | 3,540 | `Golden Glow` 称号 | future `/titles/golden-glow`；字段不足则合并并 `noindex` |

直接验证示例：[Leather Crop Fit 皮肤实体](https://aion2atlas.com/skins/leather-crop-fit)、[Leather Crop Fit 活动取得方式](https://www.vhpg.com/aion-2-leather-crop-fit-guide/)、[Empyrean Trace / Feather 地图](https://www.aion2status.com/en/empyrean-traces/)、[Feather 交互地图](https://raidrelay.com/aion-2-feather-locations)、[Silentium 来源与用途](https://allthings.how/aion-2-how-to-get-and-use-silentium/)、[Immortal Gartua 地点实体](https://allthings.how/aion-2/map/immortal-gartua/)、[Soul Binding 图文机制](https://aion2simple.wiki/articles/soul-binding-bind-sync-and-reset/)、[Soul Binding 数据化 Guide](https://aion2.gg/guides/soulbind-and-substats-explained)、[Belts 列表](https://lum.gg/aion-2/items/belts)。

## 当前 SERP 抽样：20 组代表词

### 1. `aion 2 twitch drops`

- 抽样结果：[NCSoft 官方活动页](https://aion2.plaync.com/en-us/twitchdrops/index)、[PLAYNC 支持 FAQ](https://help.plaync.com/faq/aion2global?faqNo=7241)、[TwitchDrops.app](https://twitchdrops.app/game/aion-2)、[Aion2.gg](https://aion2.gg/twitch-drops)。
- 判断：用户首先需要官方当前状态，其次是账号绑定、观看进度、领取和不到账排错。
- 类型：**图文 Guide**；目标 `/guides/twitch-drops`，P0。
- 最低内容：官方活动时间与奖励表、3–5 张真实绑定 / Inventory / Claim 截图、地区和账号前提、不到账排错、官方来源链接、最后核验时间。活动结束后保留历史状态，不能继续写成“正在进行”。

### 2. `aion 2 essence extraction guide`

- 抽样结果：[VGC Guide](https://www.videogameschronicle.com/guide/aion-2-essence-extraction-guide-upgrading-essence-extraction-and-success-rates/)、[Aion2Builds.com](https://aion2builds.com/guides/essence-extraction/)、[Ruby 视频示例](https://www.youtube.com/watch?v=UipX4Ni_dfg)。
- 判断：不是单一“去哪采集”；它混合了解锁、熟练度、成功率、材料和阵营地图。
- 类型：**图文 Guide**；目标 `/guides/essence-extraction`，P1（Global 客户端取证完成后可升 P0）。
- 最低内容：5–8 张客户端截图、Elyos / Asmodian 位置图、熟练度 / 成功率 / 材料表、Splendent Ruby 步骤、30–90 秒视频时间戳、版本标记。只有 AI 图或通用风景图无价值。

### 3. `aion 2 what to do with old gear`

- 抽样结果：[Lum](https://lum.gg/aion-2/guides/what-to-do-with-old-gear)、[Aion 2 Atlas](https://aion2atlas.app/guides/old-gear/)、[Method Indie](https://methodindie.gg/games/aion-2/guides/aion-2-what-to-do-with-old-gear)、[Aion2Game](https://aion2game.com/guide/aion-2-old-gear)、[All Things How](https://allthings.how/aion-2-old-gear-what-to-extract-transfer-or-keep/)。
- 判断：SERP 已有多个 exact-title 页面，竞争门槛是“能马上做决定”，不是字数。
- 类型：**图文 Guide**；目标 `/guides/old-gear`，P0。
- 最低内容：Extract / Transfer / Keep / Sell 决策表，至少 4 张物品 Tooltip、转移和提取操作截图，稀有度 / 强化状态例外，常见错误。不要把四个动作拆成四篇薄页。

### 4. `aion 2 splendent ruby` / `ruby location`

- 抽样结果：[Reddit 求位置帖](https://www.reddit.com/r/Aion2/comments/1p2d3t9/anyone_knows_where_i_can_find_the_splendent_ruby/)、[任务步骤讨论](https://www.reddit.com/r/Selphie1999Gaming/comments/1wzyabw/aion_2_splendent_ruby_how_to_complete_the_essence/)、[交互地图讨论](https://www.reddit.com/r/Aion2/comments/1wufyee/upgrading_my_gathering_to_professional/)。
- 判断：地点 / 任务物品意图强于通用 Guide。
- 类型：先 **enrich_existing** 到 Essence Extraction；有可靠坐标数据后建立 `/gathering/splendent-ruby` 实体页，P1/P2。
- 最低内容：阵营切换、区域小地图、世界地图 Pin、节点外观、刷新 / 前置说明。不能为 `splendid`、`splendent`、`locati0n` 分页。

### 5. `aion 2 empyrean trace`

- 抽样结果：[YouTube 用途讲解](https://www.youtube.com/watch?v=8sNzfmyx7KA)、[Reddit 使用说明](https://www.reddit.com/r/Selphie1999Gaming/comments/1wz3uim/aion_2_empyrean_traces_how_to_use_empyrean/)、[Reddit 玩家问答](https://www.reddit.com/r/Aion2/comments/1p2ijxq/empyrean_traces/)。
- 判断：快速实体查找：来源、用途、在哪花、是否该留。
- 类型：**数据库实体**；未来 `/items/empyrean-trace`，P2；数据库未就绪前进入 Economy / Progression Hub 的结构化区块。
- 最低内容：真实图标 / Tooltip、来源表、用途表、NPC / UI 截图、绑定 / 赛季 / 版本状态。纯 500 字文章会比现有视频和问答更慢。

### 6. `aion 2 dimensional invasion`

- 抽样结果：[Lum Dimensional Invasion Guide](https://lum.gg/aion-2/guides/dimensional-invasion-guide)、[YouTube 通关 / 奖励讲解](https://www.youtube.com/watch?v=eckekuVWtXc)、[Reddit 日常 / 每周清单讨论](https://www.reddit.com/r/Aion2/comments/1xcqous/aion_2_daily_weekly_checklist_what_you_can/)、[Reddit 活动图标问答](https://www.reddit.com/r/Aion2/comments/1x72asl/whhat_is_this_icon_first_time_seeing_it/)。抽样中视频和快速问答占比高，与 Similarweb 的 leading site 信号一致。
- 判断：进入条件、开放时间、钥匙 / 门票、阶段机制和 Boss 是一个完整流程。
- 类型：**图文 Guide / 副本实体**；目标 `/dungeons/dimensional-invasion`，P1。
- 最低内容：路线 / 阶段图、入口截图、3 个以上机制图解、准备与奖励表、视频时间戳、版本和难度标记。

### 7. `aion 2 draupnir guide`

- 抽样结果：[Aion2.vi.ki](https://aion2.vi.ki/draupnir-guide)、[GamersTogether](https://gamerstogether.cz/en/aion-2/draupnir-dungeon-guide/)、[GamesTN](https://gamestn.com/games/aion2/dungeons/draupnir/)、[YouTube 路线示例](https://www.youtube.com/watch?v=NzqiQ_2SUE8)、[YouTube Boss 示例](https://www.youtube.com/watch?v=0Myi6F306Ic)。
- 判断：exact-title 竞争密集，单纯复述 Hard Mode 规则无法满足。
- 类型：**图文 Guide / 副本实体**；目标 `/dungeons/draupnir`，P1。现有 `/guides/expedition-hard-mode` 只做跨副本规则并链接到它，避免重复争词。
- 最低内容：自制路线图、每个 Boss 的 Telegraphed attack 截图、Normal / Hard 差异、队伍角色表、掉落与检查点。

### 8. `aion 2 fire temple`

- 抽样结果：[Daeva Guides](https://daevaguides.com/en/guides/fire-temple/)、[Aion2T](https://aion2t.com/guides/fire-temple)、[MMO Codex](https://mmo-codex.com/articles/aion-2-fire-temple-guide/)、[Aion2Maps](https://aion2maps.com/guides/fire-temple/)、[Aion2Codex](https://aion2codex.com/dungeons/fire-temple)。
- 判断：SERP 同时出现 Guide、Map 与 Dungeon 数据页，说明用户既要路线也要实体信息。
- 类型：**图文 Guide / 副本实体**；目标 `/dungeons/fire-temple`，P1。
- 最低内容：入口和路线图、Boss 机制逐图、Normal / Hard 表、掉落表、单人 / 队伍差异。缺少实机图时不要上线。

### 9. `aion 2 sealed dungeon map`

- 抽样结果：[Aion 2 Atlas 地图](https://aion2atlas.app/map/sealed-dungeon/)、[3D 地图讨论](https://www.reddit.com/r/Aion2/comments/1wtsfhn/3d_interactive_voxel_maps_for_aion_2_generated/)、[交互路线版本讨论](https://www.reddit.com/r/Aion2/comments/1wyhsol/my_3d_aion_2_interactive_map_release_v2_now_has/)。
- 判断：用户明确要 map / route，不是长文。
- 类型：**地图工具**；未来 `/map/sealed-dungeons`，P2（仅在可用坐标和交互功能完成后）。
- 最低内容：可缩放图层、入口 / 房间 / Boss / Chest Pin、阵营 / 难度筛选、完成状态与分享链接。静态截图文章应放弃。

### 10. `aion 2 character presets` / `character creation`

- 抽样结果：[Aion2Presets Discover](https://aion2presets.com/discover)、[Aion 2 Wiki 预设图库指南](https://www.aion2-wiki.com/guides/presets-gallery-guide)、[Aion2 Guide Wiki 角色创建](https://aion2-guide.wiki/guides/character-creation)、[Reddit 导入 / 导出指南](https://www.reddit.com/r/Aion2/comments/1wuf6ve/guide_download_upload_your_favorite_customizations/)、[Lum 自定义指南](https://lum.gg/aion-2/guides/character-customization-guide)。
- 判断：一半是“怎么操作”，一半是“看并下载可复用外观”；两者不能用同一篇纯文本满足。
- 类型：`/character-creation` 为 **图文 Guide**（P1）；`/character-presets` 为 **视觉图库**（P2）。
- 最低内容：创建器实机截图、导入 / 导出步骤、正脸 / 侧脸 / 全身预览。图库至少应有 10 个获得明确授权的预设、筛选、预设文件、作者与版本。不要抓取官方 Style Shop 或社区作者素材再托管。

### 11. `aion 2 skins` / `outfits` / `style shop`

- 抽样结果：[免费时装视频](https://www.youtube.com/watch?v=iF5o13Bbu1g)、[Premium Skins 视频](https://www.youtube.com/watch?v=gXMk1i0j-Pw)、[社区 3D Wardrobe 讨论](https://www.reddit.com/r/Aion2/comments/1wtiljq/i_built_a_aion_2_dressing_room_companion_website/)、[玩家配色需求](https://www.reddit.com/r/Aion2/comments/1x1aau2/any_sites_for_fashion_like_dyes_and_skin_combos/)、[官方 Style Shop](https://aion2.plaync.com/en-us/styleshop)。
- 判断：这是明显的浏览、比较和搭配意图。
- 类型：**视觉图库 / Catalog Hub**；未来 `/cosmetics` 与 `/cosmetics/skins`，P2。
- 最低内容：真实前后 / 男女 / 染色预览、来源和价格 / 活动状态、筛选与收藏、游戏 Build。版权不清晰时宁可只深链官方来源；Wallpaper 词不应驱动抓图站。

### 12. `aion 2 pet transform`

- 抽样结果：[PowerUpGaming](https://powerupgaming.co.uk/2026/10/03/aion-2-pet-transform-guide-best-pets-how-to-get-them/)、[iTechGuides](https://www.itechguides.com/how-to-choose-the-best-pet-transform-for-your-class-and-playstyle-in-aion-2/)、[GamerBlurb](https://gamerblurb.com/guides/aion-2-best-pet-guide)、[Daeva Guides](https://daevaguides.com/en/guides/pets-genus-insight/index.html)。
- 判断：用户不只问“哪只最好”，还要理解职业 / 玩法适配与升级系统。
- 类型：**Hub + 图文系统 Guide**；`/pets` 作为 Hub，核心链接 `/guides/pets-genus-insight`，P1。
- 最低内容：宠物真实图标、Transform UI、职业 / 场景选择矩阵、获取方式和升级成本。避免没有条件定义的“Best Pet”榜单。

### 13. `aion 2 genus insight`

- 抽样结果：[HackBatista](https://hackbatista.com/aion2-guides/genus-insight/)、[Aion2Data Pets Guide](https://aion2data.com/guides/pets)、[Aion2PetGuide](https://aion2petguide.com/guides/genus-insight)、[Lum](https://lum.gg/aion-2/guides/genus-insight-guide)、[YouTube](https://www.youtube.com/watch?v=gOpZDVCO1SM)。
- 判断：竞争页已覆盖 Board、分析、锁定和成本；薄页没有胜算。
- 类型：**图文 Guide**；目标 `/guides/pets-genus-insight`，P1。
- 最低内容：Board / Analyze / Lock UI 截图、等级 / 灵魂 / 成本表、优先顺序、失败 / 重置说明，以及 `Unbound by Genus` 解锁区块。数值必须核对当前 Global Build。

### 14. `aion 2 elyos or asmodian`

- 抽样结果：[Aion2Help](https://aion2help.com/en/beginners/factions/)、[GamerBlurb](https://gamerblurb.com/guides/aion-2-faction-differences-asmodians-vs-elyos)、[Aion2Data](https://aion2data.com/factions)、[VGC](https://www.videogameschronicle.com/guide/aion-2-factions-best-faction-to-choose-elyos-or-asmodians/)、[MetaBot](https://metabot.gg/en/aion-2/guides/elyos-vs-asmodian)。
- 判断：这是开角前高风险选择，用户需要清晰差异，而不是 Lore 堆砌。
- 类型：**图文对比 Guide**；目标 `/guides/elyos-vs-asmodian`，P0。Beginner Guide 只保留摘要并链接。
- 最低内容：两阵营 6–10 张对应实机图、主城 / 地图 / Wings / 剧情开局并排表、服务器和好友限制、可更改项与不可更改项、适合哪类玩家的条件式结论。

### 15. `aion 2 how to block`

- 抽样结果：[All Things How](https://allthings.how/aion-2-how-to-block-and-parry/)、[Lum Stagger / Block / Parry](https://lum.gg/aion-2/guides/stagger-block-and-parry)、[Aion2Data Block 实体](https://aion2data.com/stats/block)、[GamerBlurb](https://gamerblurb.com/guides/aion-2-how-to-block)、[Perfect Parry 视频](https://www.youtube.com/watch?v=S0Wuxg8IvR0)。
- 判断：短答案、机制解释和操作演示意图；SERP 的关键答案不是一个通用“Block 按键”，而是自动判定的 Block 属性与部分职业的主动技能。独立 1,000 字页面容易过度包装或写错控制方式。
- 类型：**enrich_existing**；加入 `/guides/beginner-guide#combat-controls`，P0。
- 最低内容：首屏明确“没有通用 Block 键”、Block 与 Parry 区别、属性判定和职业主动技能表、一次成功和失败的实机帧或短视频、职业 / 武器例外。可同时吸收 `how to leave dungeon` 等快速操作问答到可搜索 FAQ。

### 16. `aion 2 combat power`

- 抽样结果：[Daeva Guides](https://daevaguides.com/en/guides/combat-power/)、[DVING](https://dving.net/guides/aion-2-combat-power-guide)、[Aion2 Wiki](https://www.aion2-wiki.wiki/guide/aion-2-how-to-increase-combat-power)、[Reddit 提升 CP 讨论](https://www.reddit.com/r/Aion2/comments/1vgdgh9/how_to_increase_combat_power_cp_quickly_part_1/)。
- 判断：完整系统 / 优先级意图，可形成稳定 Guide，但易被未经验证的公式污染。
- 类型：**图文 Guide**；目标 `/guides/combat-power`，P1。
- 最低内容：CP UI 截图、来源与投入回报表、阶段优先级、CP 与 Item Level 的区别、常见浪费；没有客户端验证就不写精确公式。

### 17. `aion 2 hidden cube locations`

- 抽样结果：[Aion2Hub Maps](https://aion2hub.com/maps)、[COGM Map](https://cogm.app/aion2/map)、[InteractiveMap.app](https://interactivemap.app/aion2/guides/index.html?cat=morheim-203)、[Aion2.gg Map](https://aion2.gg/map)、[Aion2Pets Cube Guide](https://aion2pets.wiki/aion-2-cube/)。
- 判断：地图、筛选、完成状态意图明确。
- 类型：**地图工具**；未来 `/map/hidden-cubes`，P2；在工具完成前不建静态 SEO 页。
- 最低内容：真实坐标、地图 Pin、完成勾选、阵营 / 区域过滤、路线或近景截图、数据纠错机制。

### 18. `aion 2 orichalcum location`

- 抽样结果：[Aion2Data Orichalcum](https://aion2data.com/gathering/orichalcum)、[All Things How 地图页](https://allthings.how/aion-2/map/orichalcum/)、[Aion2Dex](https://aion2dex.com/gathering/orichalcum/)、[Aion 2 Atlas Verteron 地图](https://aion2atlas.app/map/verteron/orichalcum-ore/)、[AION 2 Wiki 采集实体](https://aion2wiki.date/gathering/1080101)。结果普遍是采集实体 + 多地图 Spawn 数据，不是传统文章。
- 判断：结构化采集位置意图。
- 类型：**数据库实体 / 地图**；未来 `/gathering/orichalcum`，P2。
- 最低内容：阵营 / 区域地图、Spawn Pin、矿点模型、熟练度、产物和用途、客户端 Build。没有点位数据时不应发布“地点 Guide”。

### 19. `aion 2 training dummy location`

- 抽样结果：[KeenGamer](https://www.keengamer.com/articles/guides/aion-2-all-training-dummy-locations/)、[All Things How](https://allthings.how/aion-2-training-dummy-locations-for-elyos-and-asmodian-players/)、[Destructoid](https://www.destructoid.com/all-training-dummy-locations-in-aion-2/)、[GeekChamp](https://geekchamp.com/where-to-find-training-dummies-in-aion-2/)、[SportsRant / Indiatimes](https://sportsrant.indiatimes.com/gaming/aion-2-training-dummy-locations-where-to-find-elyos-and-asmodian-training-scarecrows/articleshow/134689538.html)。
- 判断：窄地点意图，极易成为只有两个坐标的薄页。
- 类型：优先 **enrich_existing** 到 Combat / Beginner Guide；只有覆盖两阵营多个位置时才建 `/locations/training-dummies`，P2。
- 最低内容：阵营分组、世界图 + 小地图 + 近景三件套、到达路线、Dummy 可测功能。否则不建页。

### 20. 任务 / 称号查找：`Nemon`、`The One Who Hears the Voice`、`Unbound by Genus`、`Golden Glow`

- 抽样结果：[Finding Nemon 任务页](https://aion2.gg/database/quests/finding-nemon-2102010)、[The One Who Hears the Voice Walkthrough](https://gamingpromax.com/aion-2-the-one-who-hears-the-voice/)、[Unbound by Genus 解锁 Guide](https://www.aion2-wiki.wiki/guide/aion-2-unbound-by-genus)、[Golden Glow 实体页](https://metabot.gg/en/aion-2/items/title-golden-glow)、[Unbound by Genus 玩家对比](https://www.reddit.com/r/Aion2/comments/1x4a1wh/dps_title_question/)。
- 判断：这些词外观看起来像未知短语，SERP 验证后分别是任务、称号或系统成就。它们证明 `other_verify` 不能批量写成 Guide。
- 类型：**数据库实体**。未来 `/quests/finding-nemon`、`/quests/the-one-who-hears-the-voice`、`/titles/unbound-by-genus`、`/titles/golden-glow`，P2；在实体架构完成前，`Unbound by Genus` 先进入 Genus Insight Guide。
- 最低内容：实体类型、图标、精确获得方式、前置 / 后续任务、NPC、地图、奖励 / 属性、版本、来源。单个称号只有一句获得方式时必须 `noindex` 或合并到 Titles Hub。

## 可直接实施的页面集群

### P0：先把“能做厚”的强意图做完整

| 页面 / 动作 | 页面类型 | 合并覆盖 | 必需真实媒体与结构 | 薄内容防线 |
|---|---|---|---|---|
| `/guides/twitch-drops` | 图文 Guide | drops、claim、link、rewards、not received | 官方 Reward 图、绑定流程截图、日期 / 奖励表、排错、官方链接 | 无当前活动时明确标注 ended；不能复制公告 |
| `/guides/elyos-vs-asmodian` | 图文对比 | factions、races、Elyos or Asmodian(s)、differences | 6–10 张成对实机图、地图、限制 / 外观 / 开局表 | 没有双阵营核验就不写确定性结论 |
| `/guides/old-gear` | 决策 Guide | extract、transfer、keep、sell、old gear | 决策矩阵、4+ 操作 / Tooltip 图、例外表 | 不拆分动作词；不能只写常识 |
| 增强 `/guides/beginner-guide` | enrich_existing | gameplay、what is、how to block、max level 快答 | 真实 Gameplay 视频 / 截图、战斗控制、升级里程碑、下一步链接 | 不新增独立 “How to block” 薄页 |
| 重构 `/guides` | Hub | guide(s)、beginner、systems、dungeons、events | 按目标分组、卡片少而有信息、筛选 / 搜索、Updated 状态 | Hub 不用 20 张相同样式卡片替代信息架构 |

### P1：有取证、有素材再发布

| 页面 / 动作 | 页面类型 | 必须先有 | 视觉 / 表格契约 |
|---|---|---|---|
| `/guides/essence-extraction` | 图文系统 Guide | 双阵营 Global 客户端核验 | 5–8 图、地图 Pin、熟练度 / 成功率 / 材料表、视频时间戳 |
| `/guides/combat-power` | 图文系统 Guide | 当前 Build 的 UI 与机制验证 | CP 页面图、来源 / ROI 表、阶段优先级、公式证据 |
| `/guides/soul-binding` | 图文系统 Guide | Bind / Sync / Reset / Soul Fuse 当前 Global 流程 | 5+ UI 连续截图、操作 / 材料 / 成本表、装备槽属性选择矩阵 |
| `/guides/pets-genus-insight` | 图文系统 Guide | Board / Lock / Analyze 实机流程 | UI 连续截图、成本 / Level 表、Pet 图标、称号解锁区块 |
| `/character-creation` | 图文 How-to | Global 导入 / 导出步骤 | 创建器截图、参数 / 文件说明、正侧全身对比 |
| `/dungeons` | Hub | 至少 3 篇可用副本页 | 模式、人数、入口、难度、奖励与 Updated 筛选 |
| `/dungeons/dimensional-invasion` | 副本实体 + Walkthrough | 完整通关录像 | 路线、阶段、Boss 机制、入口 / 奖励表 |
| `/dungeons/draupnir` | 副本实体 + Walkthrough | Normal / Hard 实机证据 | 自制路线图、Boss 图解、队伍 / 掉落 / 难度表 |
| `/dungeons/fire-temple` | 副本实体 + Walkthrough | 实机取证 | 入口、路线、Boss、模式差异与掉落表 |

副本发布规则：没有一张自制路线图、至少 3 张机制截图、入口 / 准备 / 奖励三张表，就不应标记为完成。文章嵌入 YouTube 时要使用官方或获许可视频，并附时间戳与文字替代；嵌入视频不能代替本站自己的可扫描说明。

### P2：先建数据 / 版权 / 交互能力

| 页面集群 | 页面类型 | 目标 URL | 上线门槛 |
|---|---|---|---|
| Character Presets | 视觉图库 | `/character-presets` | 10+ 授权预设、作者 / 文件 / 版本、筛选、举报与下架机制 |
| Cosmetics | 视觉图库 / Hub | `/cosmetics`、`/cosmetics/skins` | 前后 / 男女 / 染色预览、来源、价格 / 活动状态、素材许可 |
| Maps | 工具 | `/map`、`/map/hidden-cubes`、`/map/sealed-dungeons` | 真实坐标、交互图层、过滤、完成状态、纠错流程 |
| Gathering | 数据库实体 + 地图 | `/gathering/orichalcum`、`/gathering/splendent-ruby` | Spawn 数据、阵营 / 区域图、熟练度与产物表、Build 元数据 |
| Quests | 数据库实体 | `/quests/finding-nemon` 等 | 目标、NPC、地图、任务链、奖励、版本；至少有可规模化 schema |
| Titles | 数据库实体 | `/titles/unbound-by-genus` 等 | 属性、获取、前置、图标、版本；内容不足的条目 `noindex` |
| Items | 数据库实体 | `/items/empyrean-trace` 等 | Tooltip、来源、用途、绑定 / 赛季状态、关联 Guide |

## 页面最低媒体 / 结构契约

| 页面类型 | 最低正文 / 结构 | 最低真实媒体 | 必须的信任信息 | 不合格示例 |
|---|---|---|---|---|
| 图文系统 Guide | 清晰 TOC；前置、步骤、结果、FAQ；2–4 张可扫描表 | 5–8 张客户端截图，或 3–5 张截图 + 1 段带时间戳实机视频 | Build、核验日期、来源、作者 / 测试说明 | 只有 Hero 图和 800 字文字 |
| 副本 Walkthrough | 概览、进入、路线、Boss、奖励、难度差异 | 1 张自制路线图 + 3 张以上机制图 + 入口图 | 模式 / 人数 / 装等 / Build / 核验日期 | 用通用怪物 AI 图替代机制截图 |
| 数据库实体 | 首屏答“是什么 / 哪里 / 怎么得”；字段表；关联实体 | 真实图标 / Tooltip；地点实体另需地图 Pin 和近景 | 来源、客户端 Build、稳定 ID、最后核验 | 只有一句描述仍强制 index |
| 视觉图库 | 筛选、详情、来源 / 获取、下载或深链 | 首批至少 10 个合法真实条目；每条多视角或明确预览 | 作者 / 许可、版本、下架通道 | 抓取社区图片或用 AI 图冒充游戏外观 |
| Hub | 用户任务分组、搜索 / 筛选、Updated、推荐路径 | 每组使用少量代表性真实图标 / 缩略图 | 内容数量与更新时间 | 用一屏同款 Card 填满，但没有分类逻辑 |
| enrich_existing | 将短答案放到最接近的强页面，有锚点和 FAQ | 1–3 张能解释动作的图 / GIF / 视频帧 | 更新说明和原始来源 | 每个按键问题单独发一篇薄文 |
| 地图工具 | 可缩放、筛选、Pin、完成状态、分享 / 定位 | 游戏地图底图与真实坐标；近景验证图 | 数据来源、Build、纠错入口 | 单张不可交互地图截图 |

这些媒体必须是能证明位置、操作或外观的真实游戏素材。**不能用占位图、图库图、AI 生成的“类似 AION 2”画面替代**路线、UI、Boss Telegraphed attack、物品 Tooltip、预设或皮肤。AI 图可以做不影响事实判断的编辑插画，但不应出现在会被用户当成游戏证据的位置。

## 站内信息架构与防止互相争词

```text
/guides                         Guide Hub
├── /guides/beginner-guide      gameplay / controls / max-level quick answers
├── /guides/elyos-vs-asmodian   faction decision
├── /guides/old-gear            dispose / extract / transfer decision
├── /guides/essence-extraction  progression system
├── /guides/combat-power        progression system
└── /guides/pets-genus-insight  pet system

/dungeons                       Dungeon Hub
├── /dungeons/dimensional-invasion
├── /dungeons/draupnir
└── /dungeons/fire-temple

/character-creation             operation guide
/character-presets              permissioned visual gallery
/cosmetics                      catalog hub
/pets                           pet entity hub
/map                            interactive tool
/gathering                      gathering entity hub
/quests                         quest database
/titles                         title database
/items                          item database
```

- `/guides/expedition-hard-mode` 继续解释跨副本 Hard Mode 规则，不与 `/dungeons/draupnir`、`/dungeons/fire-temple` 重复 Boss 路线。
- Beginner Guide 只给 Faction 摘要，完整选择进入 `/guides/elyos-vs-asmodian`。
- `Splendent Ruby` 先作为 Essence Extraction 的步骤和相关实体；实体页上线后双向链接，不复制全文。
- `Unbound by Genus` 先在 Genus Insight Guide 内解释；Titles 数据库有完整字段后再用实体页承接精确词。
- `gameplay` 进入首页和 Beginner Guide 的真实实机内容；没有亲自测试、时长和披露时，不建立“Review”页。

## 发布顺序建议

1. **本轮**：重构 `/guides` 分组；补强 Beginner Guide；发布 Faction、Old Gear、Twitch Drops 三个可独立完成的 P0 页面。
2. **取证轮**：按“系统 Guide”录制一次 Global 客户端素材，同时覆盖 Essence Extraction、Combat Power、Soul Binding、Pet / Genus Insight。
3. **副本轮**：先选一个有完整通关录像的副本做金标准模板，通过路线图、机制图、表格契约后再复制到另外两个。
4. **产品轮**：决定是否真正建设 Map、Presets、Cosmetics 与实体数据库。若不做数据与版权能力，就不要用批量 SEO 薄页替代。
5. 每页上线前核对：搜索意图形态、真实媒体数量、来源 / Build / 日期、是否与现有页争词、是否需要 `noindex`。

最终判断：当前机会不是“再写更多 Guide”，而是建立 Guide、Dungeon、Entity、Gallery、Map 五套不同页面产品。关键词数量可以很快扩张，但只有当每套页面都有对应的真实素材、数据和更新机制时，才会从 Card 拼装站变成可信的游戏 Wiki。
