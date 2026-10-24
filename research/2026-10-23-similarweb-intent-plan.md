# AION 2 Similarweb 关键词与搜索意图实施计划

日期：2026-10-23
数据窗口：2026-09-22 至 2026-10-19，Google Worldwide，Total web
范围：Similarweb Keyword Generator 全量导出 + 54 组当前 SERP 抽样 + 现有站点结构
目标：决定应该丰富哪些现有页面、创建哪些新页面、哪些必须做成工具，以及哪些不应发布。

## 决策摘要

这次全量数据确认了：网站不应该继续只靠几篇 Guide 和一排排 Card 扩张。真正有需求的产品线至少有六条：

1. **Builds 与职业决策**：先把现有 8 个职业页做成真正的 Build 产品，再增加 `/builds` 聚合入口与 `/classes/tier-list`。
2. **实时信息**：`server status`、`maintenance`、`codes`、`rift timer`、`player count` 是持续更新型页面，不是普通文章。
3. **地图与查找**：`interactive map`、`hidden cubes`、材料地点需要真实坐标、筛选与完成状态；静态文字页不能满足意图。
4. **图文系统 Guide**：Twitch Drops、阵营选择、旧装备、Essence Extraction、Combat Power、宠物与 Soul Binding 都需要真实客户端截图和决策表。
5. **副本内容**：Dimensional Invasion、Draupnir、Fire Temple 应成为带路线图与机制图的副本页，而不是泛泛的攻略摘要。
6. **实体数据库与图库**：任务、称号、材料、宠物、预设和时装有明显长尾，但必须先有数据模型、来源和素材权利，再批量建页。

最重要的新变化是 **`/codes` 从“观察”提升为 P0**。早前 autocomplete 样本没有 codes 信号，但这次导出中 `aion 2 codes` 的 28 天估算为 74,620，且当前 SERP 已有专门页面。页面价值在于“当前是否有可用码、刚核验过没有、如何兑换、过期记录”，即使当前为 0 个有效码也能提供可信答案。

## 数据处理与可信边界

### 处理结果

| 指标 | 数量 |
| --- | ---: |
| 原始关键词行 | 79,740 |
| Phrase match | 70,576 |
| Questions | 5,740 |
| Related | 3,420 |
| Popular | 4 |
| 规范化去重后唯一词 | 70,770 |
| 跨标签重复出现 | 8,970 |
| 非英语或语言不明确 | 10,303 |
| Related 标签中的无关/歧义污染 | 2,008 |
| exploit、外部自动化、RMT、成人/mod 等跳过词 | 351 |
| 仍需人工验证的长尾 | 17,040 |

所有 70,770 个唯一词都保留在分类表中，没有因为当前无法判断而被删除。`other_verify` 是人工复核队列，不是自动建页队列。

### 不能怎样使用这些数字

- Similarweb 数值是第三方估算，不是 Google 官方搜索量，也不是本站可获得流量预测。
- 同一意图的变体高度重叠，不能把 `tier list`、`class tier list`、`best class` 等相加当作总需求。
- Worldwide 导出混入 KR/TW/Global、多语言、旧 AION、错拼和品牌导航词。
- `difficulty=0` 或 `zero-click=0` 很多时候意味着缺数据，不等于没有竞争。
- SERP 的页面形态比单个分数更重要：工具词必须拿产品能力竞争，实体词必须拿结构化数据竞争。

## 关键词家族与页面决策

下表只列代表头词，数值之间不可相加。

| 需求家族 | 代表 28 天估算 | 用户真正想完成的任务 | 应交付的形态 | 动作与目标 |
| --- | ---: | --- | --- | --- |
| Classes | `aion 2 classes` 552,670 | 选职业、比较难度与场景 | 决策矩阵 + 职业入口 | `enrich_existing` `/classes` |
| Builds | `aion 2 builds` 135,630 | 找到当前职业/模式的可执行配置 | 可筛选聚合页 | `new_page_candidate` `/builds`；详情仍用 `/classes/{slug}` |
| Class build | Gladiator 127,640；Ranger 82,130；Sorcerer 73,910；Cleric 66,230 | 复制并理解完整配置 | 深度职业 Build 页 | 先丰富四个职业页，再完成其余四个 |
| Tier list | `class tier list` 110,700 | 按 PvE/PvP/solo 等场景选职业 | 有方法、版本、模式切换的榜单 | 新建 `/classes/tier-list`，变体用页内 tab/锚点 |
| Release/access | `release date` 279,160；`download` 45,660；`system requirements` 14,550 | 能否玩、在哪里下、设备是否支持 | Access hub + 官方深链 + 配置表 | `/play` 或 `/download`；`/system-requirements` |
| Server/live status | `server status` 158,180；`maintenance` 94,950 | 现在能不能登录、何时恢复 | 官方源优先的状态面板 | 新建 `/status`，不能伪造全区实时探测 |
| Rift timer | `rift timer` 105,600 | 下一次事件还有多久 | 真倒计时 + 时区 + 数据来源 | `/tools/rift-timer`，仅在 Global 排期锚点核验后发布 |
| Player count | `player count` 100,700；`steam charts` 203,630 | 看活跃度趋势 | 图表 + 数据范围说明 | `/tools/player-count`，必须明确“Steam-only，不是总玩家数” |
| Codes | `aion 2 codes` 74,620 | 找到有效码并成功兑换 | 当前/过期表 + 兑换步骤 + 核验时间 | P0 `/codes` |
| Server transfer | `server transfer` 65,500 | 确认资格、价格、窗口和限制 | 持续更新的操作 Guide | 刷新现有 `/guides/server-transfer` |
| Interactive map | `interactive map` 113,080；`hidden cube locations` 45,290 | 找坐标并跟踪完成度 | 可缩放筛选地图 | P2 `/map`、`/map/hidden-cubes`；未完成工具前不发静态替代页 |
| DPS meter | `dps meter` 103,850 | 下载/使用可运行的 meter | Windows 工具 + 网络解析 + 安全说明 | 暂缓；不能用文章冒充产品 |
| Character creation | `character creation` 93,570 | 创建、导入/导出外观 | 图文操作 Guide | P1 `/guides/character-creation` |
| Character presets | `character presets` 50,890 | 浏览并下载外观 | 获授权的可筛选图库 | P2 `/character-presets` |
| Factions | `factions` 46,940；`elyos or asmodian` 34,760 | 开角前做不可逆选择 | 并排图文对比 | P0 `/guides/elyos-vs-asmodian` |
| Twitch Drops | `twitch drops` 108,800 | 绑定账号、领取、排错 | 官方状态 + 图文流程 | P0 `/guides/twitch-drops` |
| Old gear | `what to do with old gear` 30,200 | 判断保留、提取、转移或出售 | 决策树 + Tooltip/UI 截图 | P0 `/guides/old-gear` |
| Essence Extraction | `essence extraction guide` 31,010 | 解锁、升级、提高成功率、找材料 | 实机图文系统 Guide | P1 `/guides/essence-extraction` |
| Pets | `pet transform` 27,010；`genus insight` 13,190 | 选宠物并升级系统 | `/pets` Hub + 图文系统页 | P1 `/guides/pets-genus-insight` |
| Build systems | Macro 20,130；Daevanion 16,010；Arcana 15,260；Stigma 12,100 | 配置技能与成长系统 | 通用系统 Guide + 职业页具体选择 | P1；Macro 先核对官方边界 |
| Dungeons | Dimensional Invasion 20,700；Draupnir guide 8,510 | 进入、准备并通关 | 路线图 + 机制截图 + 奖励表 | P1 `/dungeons` 与副本详情 |
| Entity lookup | Nemon 14,260；Unbound by Genus 15,640 等 | 查任务、标题、材料、NPC | 结构化实体页 | P2，数据架构完成后再扩张 |

## 竞争结果告诉我们的产品门槛

### Builds 不是一篇文章

当前结果里已经有带筛选和可分享配置的 [Aion2.gg Build Planner](https://aion2.gg/builds/planner)、职业数据页和完整攻略。职业页若只保留两三个技能提示，没有机会满足 `build` 意图。每个可索引的职业页至少应包括：

- Global/KR/TW、客户端 Build、最后验证日期与证据来源；
- Solo、Group PvE、PvP 的配置切换；
- 技能等级节点、Stigma、Daevanion、Arcana、属性、装备；
- rotation 与“必须手动操作”的技能；
- 真实 UI/技能图标/Tooltip 与至少一段可核对的视频时间戳；
- 本次更新改了什么，以及仍不知道什么。

### 实时词需要真实状态

`server status` 的首要来源应是 [NC 官方 Notices](https://aion2.plaync.com/en-us/board/notice/list?redirect=false) 与 [Steam News](https://steamcommunity.com/app/3393110/allnews/)。第一版 `/status` 可以可靠聚合官方公告、维护窗口、最后更新时间与官方状态链接；在没有可信探针时不能声称所有服务器均“实时在线”。

`rift timer` 的竞品已经是 [Aion2Data Timers](https://aion2data.com/timers) 和 [AION2 Hub Event Timer](https://aion2hub.com/tools/event-timer) 这样的倒计时工具。必须先拿到 Global 可验证的排期/重置锚点，才能上线真正的时区感知倒计时。

`player count` 可引用 [SteamDB charts](https://steamdb.info/app/3393110/charts/)，但标题、图表和 FAQ 都要明确它只覆盖 Steam 公共数据，不代表 PURPLE、其他地区或全平台总人数。

### 地图词需要地图

当前 [MetaBot AION 2 Map](https://metabot.gg/en/aion-2/map)、[Aion2Hub Maps](https://aion2hub.com/maps) 与 [Aion2.gg Map](https://aion2.gg/map/hidden-cubes) 已经在用 Pin、筛选和类别满足查找需求。我们的地图在具备真实坐标、区域/阵营筛选、完成状态、分享链接和纠错机制前，不应该用一篇 SEO 文字页占位。

### Guide 必须图文并茂，但图片要承担任务

Guide 不应该塞通用宣传图。图片的职责是证明并帮助操作：地图截图回答“在哪里”，Tooltip 回答“是什么”，UI 截图回答“点哪里”，机制帧回答“看到什么信号该怎么躲”。例如 Twitch Drops 应优先引用 [NC 官方活动页](https://aion2.plaync.com/en-us/twitchdrops/index)，阵营页可对照 [Aion2Help factions](https://aion2help.com/en/beginners/factions/) 与 [Aion2Data factions](https://aion2data.com/factions/)，旧装备页则要达到 [Lum](https://lum.gg/aion-2/guides/what-to-do-with-old-gear) 或 [Aion 2 Atlas](https://aion2atlas.app/guides/old-gear/) 那种可立即做决定的程度。

## 更新后的站点信息架构

```text
/
├── /builds                         # 可筛选 Build 聚合，不复制正文
│   ├── /classes/gladiator          # canonical Build 详情
│   ├── /classes/ranger
│   ├── /classes/sorcerer
│   ├── /classes/cleric
│   ├── /classes/spiritmaster
│   ├── /classes/chanter
│   ├── /classes/templar
│   └── /classes/assassin
├── /classes
│   └── /classes/tier-list
├── /guides
│   ├── /guides/beginner-guide
│   ├── /guides/twitch-drops
│   ├── /guides/elyos-vs-asmodian
│   ├── /guides/old-gear
│   ├── /guides/server-transfer
│   ├── /guides/daevanion-board
│   ├── /guides/stigma
│   ├── /guides/arcana
│   ├── /guides/stats
│   ├── /guides/essence-extraction
│   ├── /guides/combat-power
│   ├── /guides/soul-binding
│   └── /guides/pets-genus-insight
├── /dungeons
│   ├── /dungeons/dimensional-invasion
│   ├── /dungeons/draupnir
│   └── /dungeons/fire-temple
├── /tools
│   ├── /status                     # 可作为一级产品入口
│   ├── /tools/rift-timer
│   └── /tools/player-count
├── /codes
├── /download
├── /system-requirements
└── P2 data products
    ├── /map
    ├── /items
    ├── /quests
    ├── /titles
    ├── /pets
    ├── /cosmetics
    └── /character-presets
```

### Header 建议

桌面 Header 控制为：`Builds`、`Tier List`、`Guides`、`Tools`、`Updates`、Search。Logo 回首页；`Classes` 进入 Builds 的菜单与 `/classes` 聚合，不再与 Builds 重复争夺一级入口。`Codes` 放入 Tools 下拉并可在有新码时显示状态点。数据库、Map、Presets 在达到最低产品能力前不要提前暴露空入口。

## 页面合并与 canonical 规则

1. `/builds` 是筛选/导航页，8 个详情 canonical 继续使用现有 `/classes/{slug}`；不要再生成 `/builds/gladiator` 等重复 URL。
2. `tier list`、`class tier list`、`best class`、PvP/PvE/DPS/Solo 排名合并到 `/classes/tier-list`，用模式切换或锚点承接。
3. 职业 macro 放在各职业页的 rotation/macro 模块；通用 macro 页只有在 Global 内置功能和政策核验后才建。外部连发、AFK、G Hub/Razer 自动化不覆盖。
4. `splendid/splendent`、`location/locati0n`、Spiritmaster/Elementalist 等拼写与地区命名统一到 canonical 名称，必要时 redirect，不为错拼创建页面。
5. 单个任务、称号、材料长尾先进入数据库 backlog；没有 schema、ID、来源、版本与足够字段时不批量建薄页。
6. 一个短答案若能被 Beginner Guide 的可搜索 FAQ 充分满足，例如 block/parry、离开副本、训练木桩基础位置，优先丰富现有页而不是独立文章。

## 发布波次

### P0：先把站点从内容原型变成可用产品

1. 重做 `/classes` 比较页，新建 `/builds` 与 `/classes/tier-list`。
2. 深化 Gladiator、Ranger、Sorcerer、Cleric 四个职业页，建立可复用的 Build 模板与版本字段。
3. 上线 `/codes`；每个 code 记录状态、奖励、地区、来源、首次/最后核验、兑换位置与过期记录。
4. 上线 `/status` 的官方公告/维护聚合版；首版不承诺虚假的全区实时状态。
5. 新建 `/download`、`/system-requirements`，只深链 [Steam Store](https://store.steampowered.com/app/3393110/AION_2/) 与 [PURPLE 官方下载](https://purple.plaync.com/download) 等可信来源。
6. 发布图文 `/guides/twitch-drops`、`/guides/elyos-vs-asmodian`、`/guides/old-gear`。
7. 丰富 `/guides/beginner-guide`，加入 combat controls、block/parry、训练木桩、快速 FAQ；重构 `/guides` 为按任务分组和按更新时间展示的 Hub，而非等权 Card 墙。
8. 选择 Draupnir 或 Dimensional Invasion 做一篇“金标准”副本 Guide；先拿到真实路线图、机制图和当前 Global 证据再决定首篇。

### P1：扩充高价值系统与实时工具

1. 完成 Spiritmaster、Chanter、Templar、Assassin 四个职业页。
2. 在 Global 排期验证后发布真正的 `/tools/rift-timer`。
3. 发布 Daevanion、Stigma、Arcana、Stats 四个系统 Guide，并与职业页互链。
4. 发布 Essence Extraction、Combat Power、Soul Binding、Pets/Genus Insight 图文 Guide。
5. 发布 Controller、Support/Troubleshooting 内容；把 player count 做成明确标注 Steam-only 的图表。
6. 建 `/dungeons` Hub，完成 Dimensional Invasion、Draupnir、Fire Temple 三个副本页。

### P2：只有具备数据与交互能力后才做

1. `/map`、Hidden Cubes、采集点与材料坐标。
2. Items、Quests、Titles、Bosses 数据库。
3. Character Presets 与 Cosmetics 授权图库。
4. Build Planner、Armory 等高维护工具。
5. DPS meter：涉及 Windows 分发、Npcap/网络解析、签名、隐私与 NCGuard/政策风险，单独做产品和安全评估，不能作为普通 SEO 页面插队。

## 每种页面的最低发布合同

### 深度 Build 页

- 一个明确的版本/地区/模式头部；
- 角色定位、等级阶段、skills、Stigma、Daevanion、Arcana、stats、gear、rotation；
- 至少 5 张任务相关的真实 UI/Tooltip 截图，或 3 张截图 + 有时间戳的视频证据；
- PvE/PvP 和手动/macro 边界；
- changelog、最后核验时间、已知未知项。

### 图文系统 Guide

- 可扫描目录和逐步流程；
- 2–4 张决策/材料/成本表；
- 5–8 张真实客户端截图，或 3–5 张截图 + 时间戳视频；
- 客户端 Build、地区、最后验证日期与直接来源；
- 常见失败状态和排错，而不是只写理想流程。

### 副本页

- 自制或获授权的路线图；
- 至少 3 张 Boss/机制信号截图；
- 入口、前置、队伍准备、Normal/Hard、奖励表；
- 队伍角色职责、wipe 原因和版本差异。

### 实体页

- 稳定 ID、类型、地区/版本；
- 真实图标/Tooltip；
- 来源、用途、前后置、NPC/地图、奖励等足够字段；
- 字段不足的实体合并进 Hub 或 `noindex`，不发布一句话页面。

### 图库

- 首发至少 10 个有明确使用权的条目；
- 正面/侧面/全身或对应用途的完整预览；
- 作者、许可、客户端版本、来源和 takedown 机制；
- 筛选、搜索、导入/下载能力，而不是图片 Card 墙。

### 工具

- 有可验证的数据源和更新时间；
- 在空数据、数据过期和数据源失败时诚实降级；
- 真正完成倒计时、筛选、图表、地图等核心任务；
- 禁止用静态文章占用工具词 URL。

## 更新与衡量

- Codes：至少每日核验，重大活动时提高频率；保留过期记录与来源。
- Status/maintenance：轮询或人工同步官方 Notices；显示数据源和最后更新时间。
- Builds/tier list：每个 balance patch 复核；旧结论保留 changelog，不静默覆盖。
- Event Guide：开始、结束、奖励变更时复核；结束后明确标记历史状态。
- Evergreen systems：每次大版本或客户端字段变化时复核。
- 第一阶段衡量不只看流量：还看 `/builds` 到职业页 CTR、职业页的模式切换/目录使用、codes 复制、status 官方链接点击、Guide 的图片/步骤完成度与更新时间覆盖率。

## 本轮交付物

原始导出和由其生成的全量表格只保存在本地、并已加入 gitignore；公开仓库仅提交解析器和研究结论，避免把第三方数据集重新发布出去。

- 原始快照：`research/raw/aion-2-similarweb-keywords-2026-10-23.md`
- 可复现解析器：`scripts/analyze-similarweb-keywords.mjs`
- 全量分类：`data/keywords/similarweb-2026-10-23/all-classified.csv`
- 汇总：`data/keywords/similarweb-2026-10-23/summary.json`
- 高优先词：`data/keywords/similarweb-2026-10-23/top-actionable.csv`
- 问题词：`data/keywords/similarweb-2026-10-23/top-questions.csv`
- 分簇导出：`data/keywords/similarweb-2026-10-23/clusters/`
- Builds/Classes 意图报告：`research/2026-10-23-intent-builds-classes.md`
- Tools/Live Ops 意图报告：`research/2026-10-23-intent-tools-liveops.md`
- Guides/Entities 意图报告：`research/2026-10-23-intent-guides-entities.md`

这份计划不把所有关键词变成页面。它把关键词当成用户任务证据，再按“文章、实时页、工具、地图、数据库、图库”选择正确产品形态；这也是避免网站继续变成薄 Card 集合的核心约束。
