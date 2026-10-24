# AION 2 竞对内容版图与本站缺口

检查日期：2026-10-22。

> **快照说明：** 本文中的本站页数、图片数和页面薄弱度描述的是 2026-10-22 改版前状态。当前路由、索引和发布门槛以 [`2026-10-24-publish-gate-audit.md`](./2026-10-24-publish-gate-audit.md) 为准；竞对范围与产品形态结论仍作为规划依据。

本报告直接检查竞对首页、导航、分类页、公开 sitemap 和代表详情页。搜索结果只用于发现站点；规模与内容类型尽量由竞对自己的页面或 sitemap 佐证。它补充而不是替代 `2026-10-22-competitor-audit.md`：旧报告偏 SERP 和 Build 结果，本报告回答“真正的 AION 2 内容站到底覆盖了什么”。

## 结论先行

本站现在还不能称为完整的 AION 2 Wiki。真正的竞对普遍不是只写 6 篇 Guide，而是在以下四层至少占一到两层：

1. **编辑内容层**：Beginner、Leveling、Class、Build、Dungeon/Boss、PvP、Gear、Economy、Events、Codes、Patch Notes。
2. **结构化数据库层**：items、skills、quests、monsters/NPCs、dungeons、recipes、titles、skins、wings、pets、zones、drops。
3. **工具层**：Build/skill/Daevanion planner、item compare、enhancement/crafting calculator、interactive map、event/boss/rift timer、daily/weekly checklist、character armory。
4. **鲜活社区层**：按职业分板、图片/视频攻略、实时讨论、攻略认证和浏览/互动信号。

我们本地构建目前有 23 个正常页面，其中 8 个职业详情明确 `noindex`；内容主体是首页、职业总览、8 份尚不完整的职业研究笔记、6 篇 Guide、Update Log 和基础说明页。对构建产物逐页统计后，正文只有 **1 张非 Logo 图片**（全站头图）、**0 个 figure/video/embed**，表格共 9 个。这正是页面会显得“Card 拼装、正文薄、没有游戏现场感”的直接原因。

## 指定竞对横向比较

这一组是旧 `2026-10-22-competitor-audit.md` 没有充分核实的重点竞对。规模数字来自站点自己的首页、数据库页或公开 sitemap，不使用搜索摘要臆测。

| 站点 | 导航/内容面 | 数据规模信号 | 实际工具与代表 URL | 对本站的意义 |
| --- | --- | --- | --- | --- |
| [aion2builds.com](https://aion2builds.com/) | Classes、Builds、Tier List、Guides、Database、Tools、Updates | sitemap 实查 186 URL；1,600 名 Global 45 级角色样本；176 skills、104 Stigmas、438 items、166 pets | [Build Planner](https://aion2builds.com/tools/build-planner/)、[Daevanion Planner](https://aion2builds.com/tools/daevanion-planner/)、Rift/Reset timer、[skills DB](https://aion2builds.com/database/skills/) | 这是与本站名字、定位最接近且当前强很多的直接对手；其优势是官方 Armory 聚合数据、页面集群和实际工具 |
| [dbaion2.online](https://dbaion2.online/) | items、NPC/monsters、quests、crafting、dungeons、map、skills、guides、ranking、builds、codes/news | sitemap 是 22 个子 sitemap 的多语言索引，lastmod 到 2026-10-21；站方说明数据来自客户端并随补丁更新 | [Skill/Stigma calculator](https://dbaion2.online/skills/)、[Daevanion calculator](https://dbaion2.online/daevanion/)、[Build creator](https://dbaion2.online/builder/)、crafting、ranking、farm tracker/DPS meter | 证明俄语/英语市场已经出现“数据库 + 工具 +桌面伴侣”的完整产品，不是文章站竞争 |
| [aion2wiki.date](https://aion2wiki.date/) | Classes、Tools、Items、Pets、Monsters、Gathering、Map | 9,322 items、209 pets/mounts、1,450 monsters、221 dungeons、575 NPCs、1,053 quests、10 maps | 4 个 player tools、interactive maps、build/progression tracking；主页本身就是可核验目录 | 其最强点是对客户端数据“indexed 不等于 currently obtainable”的边界说明，值得直接借鉴 |
| [QuestLog](https://questlog.gg/aion-2/character-builder) | Database、Armory、Character Builds、Skill Builds、Checklist、Map、Timers | Character Builder 公布 1,000+ community builds；数据库覆盖 items、sets、recipes、boards/nodes、quests、achievements、dungeons、NPCs、gatherables、collections | [Character Builder](https://questlog.gg/aion-2/character-builder)、Skill/Daevanion planner、Gear Viewer、Crafting Calculator、Armory、Tier List、[DPS/overlay app](https://questlog.gg/aion-2/en-nc/app) | 它把 UGC Build、评论、数据库和客户端工具连成闭环；Guide 不是孤立文章 |
| [AION2 Hub](https://aion2hub.com/builds) | Tools、Builds、Database、Maps、Guides、分阵营 Leveling、News | Builds 页当次可搜索 36 builds；明确区分 Global 与 KR/TW client version | Rift timer、Build planner、Gear Forge、Stat/Crafting Calculator、DPS meter、World Boss timers、Season calendar、Rankings、Map/Hidden Cubes | 证明玩家会搜索“可分享 Build”和分阶段 Leveling；同时说明地区版本标记是基础要求 |
| [aion2.gg](https://aion2.gg/database) | Database、Tools、Builds、Rankings、Guides/News | 23,158 条客户端记录；6,607 items、5,099 NPCs/monsters、849 quests、475 dungeons | [Build Planner](https://aion2.gg/builds/planner)、Item Compare、Enhancement/Crafting calculators、Interactive Map、checklists | 当前最完整的英文客户端数据库型对手；短期不可复制，长期需要单独数据工程项目 |

### aion2builds.com：最需要正面对比的直接竞对

- 首页不是空泛宣称：它展示从官方角色页聚合的 1,600 名 Global 45 级角色样本、各职业 median Combat Power、PvE/PvP build、实时 patch 与 timer。[首页](https://aion2builds.com/)
- 公开 sitemap 实查为 **186 个 URL**，结构包含 PvE/PvP builds、8 职业详情、每职业 skills 与 Daevanion、Codes、数据库实体、约 30 篇 systems/gear/dungeon/pet/map Guide、4 个工具和独立 patch pages。[Sitemap](https://aion2builds.com/sitemap.xml)
- 数据库当前公开 176 skills、104 Stigmas、438 items（397 有独立页）、33 wings、36 skins、166 pets、45 titles，并清楚标记 sample/date。[首页](https://aion2builds.com/) / [Database](https://aion2builds.com/database/)
- Build Planner 不是 mockup：可选 8 职业、最多 12 个 active skills 和 Stigmas，显示 top-200 sample 的 equip rate，支持一键采用热门配置与复制分享链接。[Build Planner](https://aion2builds.com/tools/build-planner/)
- Daevanion Planner 会汇总节点属性并生成分享链接，同时明确承认官方数据没有 unlock cost/连接规则，因此只计算节点、不假装验证游戏内合法路线。[Daevanion Planner](https://aion2builds.com/tools/daevanion-planner/)
- Methodology 说明了候选角色采样、每职业 top 200、隐私处理和 `Official-sample` 标签；这是本站现有“creator research note”完全没有的数据资产。[Methodology](https://aion2builds.com/methodology/)

**判断**：此前把 `aion2 build` 竞对概括成几个 Guide hub 明显不够。本站若继续用同样名字打 Build 意图，至少要在一个维度形成真实优势：更好的图文 walkthrough、更快的补丁响应、独家数据，或更强的工具；仅增加文字段落不会追平。

### dbaion2.online：多语言客户端数据库与伴侣工具

- 主导航细到武器/防具/饰品/Arcana/material/consumable/pet 等 item subtype，并覆盖 NPC/monsters、三阵营 quests、7 类 crafting、6 类 dungeons、9 个地区地图和 9 个职业 skill calculator。[首页](https://dbaion2.online/)
- 工具层包含 equipment/stat calculator、Daevanion tree、skills/Stigmas、crafting material calculator、player rankings、community build creator、event schedule、promo codes、checklist、server status 与 TeamMate farm tracker/DPS meter。[首页](https://dbaion2.online/)
- 站方明确说数据从游戏客户端取得、随 patch 更新，并提供俄语/英语；首页在 2026-10-21 已出现当天 Global patch 与 Korean patch 更新。[首页](https://dbaion2.online/)
- 公开 sitemap 是 22 个子 sitemap 的索引，并按 language × static/tools/database/guides/items/news 拆分，lastmod 到 2026-10-21，说明它是大规模自动化数据站而非十几页博客。[Sitemap](https://dbaion2.online/sitemap.xml)

**判断**：它说明非英文竞对的产品深度很高。我们短期能借鉴的是中英搜索意图、工具入口和 patch freshness；不能把它的大规模客户端数据页误判成“多写 Guide 就能追上”。

### aion2wiki.date：公开数量最清楚的数据库型 Wiki

- 首页自报 9,322 browsable items、209 pets/mounts、1,450 monsters、221 dungeons、575 useful NPCs、1,053 quests、119 gathering sources/21 resource families 和 10 interactive maps。[首页](https://aion2wiki.date/)
- 4 个 player tools 与 desktop companion 将 Targets → Missions → Now → Map 串成任务流，还能在单独窗口查看 Daevanion plan。[首页](https://aion2wiki.date/)
- 它在首页显著提示：客户端中被索引的 item/creature/quest/location 可能是未来、测试、已停用或未实装内容；没有验证 acquisition source 就不能说当前可获得。[首页](https://aion2wiki.date/)
- sitemap 按 static、items、collections、pets、monsters、gathering、world 七个子 sitemap 拆分，与首页的实体规模相互印证。[Sitemap](https://aion2wiki.date/sitemap.xml)

**判断**：这不仅是规模对手，也是信息可信度范例。我们未来若导入客户端数据，必须把 `indexed`、`live`、`obtainable`、`verified source` 分开。

### QuestLog：UGC Build、数据库、Armory 和桌面应用闭环

- Character Builder 页公开 **1,000+ Builds**，支持 Global/Korea & Taiwan、9 职业和 PvE/PvP/Arena/Dungeon/Siege/Budget/Endgame/role 等筛选。[Character Builder](https://questlog.gg/aion-2/character-builder)
- 全局导航的数据库实体包括 weapons/armor/accessories/Arcana、skills、item sets、recipes、Daevanion boards/nodes、quests、achievements、dungeons、NPCs、gatherables、titles、wings、skins、pets；工具有 Character/Gear/Skill/Daevanion planners、Armory、leaderboards、tier/meta analysis、checklist、map 和 crafting calculator。[代表数据库页](https://questlog.gg/aion-2/en/db/items/misc?page=12)
- 代表 Build 页不只展示装备，还可以嵌入技能/Leveling 视频、写分阶段 gear progression，并承载真实评论问答与作者更新回复。[Community build example](https://questlog.gg/aion-2/en/character-builder/PerceptionOfTheVictory?build-id=10380)
- 桌面应用提供 DPS/healing/history、boss HP/stagger/debuff overlay、cooldown tracker、field-boss timers、event alerts 和 run comparison。[Desktop app](https://questlog.gg/aion-2/en-nc/app)

**判断**：QuestLog 的护城河是内容生产者与玩家数据回流。本站不应立刻复制桌面 DPS 产品，但可先做“分享链接 + build variants + comments/corrections + source video”这一条更轻的闭环。

### AION2 Hub：社区 Build 与分版本内容架构

- Tools 导航包括 Rift Timer、Build Planner、Gear Forge、Stat Calculator、Crafting Calculator、DPS Meter、World Boss Timers、Season Calendar、Abyss Rankings、Cash Shop、Conversion。[Builds](https://aion2hub.com/builds)
- Database 有 items、set bonuses、achievements、Nightmare、Awakening、Monoliths、titles、cosmetics、world objects、drop rates；Maps 另拆 world map 与 Hidden Cubes。[Builds](https://aion2hub.com/builds)
- Leveling 不是一个泛文：按 Elyos/Asmodian 分成 1–10、10–25、25–40、40–45，再有 45–50 区域路线。[Builds](https://aion2hub.com/builds)
- Builds 页当次显示可搜索 36 builds，支持职业筛选，并将 Global playtest 数据与 KR/TW client v110（2026-09-09）明确分区。[Builds](https://aion2hub.com/builds)

**判断**：其规模不及 QuestLog，但信息架构非常清楚地对应玩家任务；本站的 Beginner Guide 过于泛，应拆 faction/level/content milestone，同时给出 visual route。

## 相比旧竞对审计，本报告新增的证据

旧 `2026-10-22-competitor-audit.md` 主要来自 10 月 11 日 SERP 导出，列出 Mobalytics、QuestLog、AION2 Hub、Fextralife 等结果格式，并得出“Build 竞争不低”的结论；它没有逐站回答内容规模、导航结构、数据库实体、工具闭环和视觉/UGC 形态。

本报告新增：

1. 对 `aion2builds.com` 公开 sitemap 的 186 URL 实查，以及官方 Armory sample、数据库数量、Planner 行为与 Methodology。
2. 对 `dbaion2.online` 的 22-sitemap 多语言架构、客户端更新、calculator/build/ranking/DPS 产品线实查。
3. 对 `aion2wiki.date` 的 9,322 items 等实体数量、10 maps、4 tools 和“indexed ≠ obtainable”可信度边界实查。
4. 对 QuestLog 的 1,000+ UGC Builds、完整数据库导航、Build 评论/视频与 DPS desktop app 实查。
5. 对 AION2 Hub 的 36 builds、Global/KR-TW 分区、分阵营 leveling 和工具/数据库导航实查。
6. 另外补充 Aion2.gg、Shugo、Codex、Vault、Grimvane、WikiRealm 与韩文 Inven，证明竞对格局是“内容 + 数据库 + 工具 + 社区”，而不是“谁多写几篇 Guide”。

## 主要竞对实查

### 1. Aion2.gg：完整数据产品，不只是 Wiki

- 数据库首页自报 **23,158 条记录**，其中 6,607 items、280 skills、5,099 NPCs/monsters、849 quests、475 dungeons，并显示游戏版本 `2.0.7.0`、Steam build `25926599`、数据提取日期 2026-10-16。[数据库首页](https://aion2.gg/database)
- 页面类型覆盖 items、skills、drop rates、gear families/Arcana、buffs/debuffs、Theostones、Daevanion、classes、recipes、gathering、shops、NPCs、quests、dungeons、zones、objects、events、passes、servers、titles、achievements、skins、wings、pets 和 3D models。[数据库首页](https://aion2.gg/database)
- 工具不是装饰链接：有 Stat Calculator、Soul Binding Odds、Enhancement Planner、Upgrade Priority、Gear Matrix、Item Compare、Crafting Calculator、Event Timer、Interactive Map、Hidden Cube Tracker、Empyrean Trace Checklist 和 Build Planner。[Build Planner](https://aion2.gg/builds/planner)
- Build Planner 按 8 个职业、Solo/Group PvE 与 Solo/Group PvP组织，支持等级进度、官方 Armory 导入、本地保存和分享链接，并用职业图标而不是纯文字卡片。[Build Planner](https://aion2.gg/builds/planner)
- **新鲜度信号**：数据库公开客户端版本、Steam build 和提取日期，比只写“最近更新”更可信。[数据库首页](https://aion2.gg/database)

可执行判断：我们无法在一轮编辑里复制 23k 条客户端数据库，但可以先做其上层的高意图页面；若未来要做数据库，必须先建立合法、可持续的数据更新管道，而不是人工写卡片。

### 2. Shugo.GG：数据库 + 地图 + Armory + 实时工具

- 数据库公开规模：9,195 items、432 skills、239 dungeons、773 monsters、1,429 quests、512 crafting recipes，并给出 titles 与地图入口。[数据库](https://shugo.gg/database)
- 地图覆盖 Poeta、Verteron、Eltnen、Ishalgen、Altgard、Morheim 和 Reshanta 分层，页面列出区域、村庄、狩猎区和地下城入口。[Interactive Map](https://shugo.gg/map)
- Armory 可以搜索 Global、Korea、Taiwan 角色，展示等级、职业、装备分、Combat Power、装备强化、Legion 与排名；页面同时链接 leaderboard、tier list、item database 和 translated patch notes。[Character Search & Armory](https://shugo.gg/character)
- 首页与 FAQ 还把服务定义为 profile/gear inspection、Combat Power leaderboard、data-driven tier list、rift timers 和官方补丁翻译，而非单纯文章站。[FAQ](https://shugo.gg/faq)
- **视觉/功能信号**：monsters、pets/mounts 和装备条目承诺图片；地图和角色装备是交互界面，不是文字说明。[数据库](https://shugo.gg/database)

可执行判断：地图和 Armory 属于高维护产品，不能假装用一篇“地图指南”替代；但是我们可以马上做官方数据支持的 Codes、Events、Dungeon 索引与 visual walkthrough。

### 3. AION2 Codex：长篇职业 Guide 与数据库实体深度互链

- 导航把 Players/Rankings、Class Guides、Event Timers、Progression、Boss & Dungeon Guides、Search/Database、Items、Crafting、Marketplace、Pantheon、Gear Fitting/Compare 等放在同一体系里。[Skill builds](https://aion2codex.com/skill-builds)
- Skill Builds 页给出 9 个职业计划，每个职业再分 Group PvE、Farm、Solo questing、PvP；Global 八职业还区分 Arena 1v1/5v5。[Skill builds](https://aion2codex.com/skill-builds)
- 代表详情 `Sorcerer PvE Guide` 不是三五段概述：它有 35 个技能实体、4 个 Stigma、技能等级与 specialties、rotation、Daevanion、gear/substats、consumables、macro、来源与 review process，更新时间 2026-10-13。[Sorcerer PvE Guide](https://aion2codex.com/guides/sorcerer)
- `Templar PvE Guide` 包含装备槽位表、明确的决策规则、官方职业图与来源链接；不是连续文字堆叠。[Templar PvE Guide](https://aion2codex.com/guides/templar)
- Guides hub 还声明有 19 篇 systems guides，并把 titles 数据库、weapon conversion、progression、Pantheon 等入口穿插进内容。[Guides hub](https://aion2codex.com/guides)

可执行判断：职业页必须从“几条研究笔记”升级成可完成任务的文档模板；至少应有 build goal、skill/stigma visual strip、rotation/macro、Daevanion route、gear table、variants、common mistakes、version/source。没有证据的字段应明确留空或继续 `noindex`，不能用 AI 猜全。

### 4. AION2 Vault：8 职业 × 7 种页面，并持续追补新系统

- 首页明确每个职业都有 build overview、PvE、Daevanion、gear、best-build comparison、macro、PvP 七类入口；8 个职业即形成至少 56 个职业意图页面。[首页](https://aion2vault.com/)
- 工具/资料还包括 Daevanion calculator、rift/reset/world-boss timers、Hidden Cubes、209 pets 的掉落与 Essence Extraction。[首页](https://aion2vault.com/)
- 2026-10-22 当天新增 Ariel Board 页面，并同步更新 Assassin、Chanter、Cleric、Gladiator、Ranger 等 Daevanion 页面，显示它在按补丁横向更新内容集。[Recent updates](https://aion2vault.com/)
- 首页把每个职业的 core skills、Stigmas、macro/opener、Daevanion priority 直接做成四步摘要，再通向详情，而不只给一个 Card 标题。[首页](https://aion2vault.com/)

可执行判断：本站不应把“一个职业 = 一张 Card + 一页薄笔记”当作最终信息架构。职业应成为 topic cluster；短期可先为证据最强的 Chanter 做完整模板，再复制结构而不是复制结论。

### 5. Aion 2 Companion / Grimvane：53 篇 Wiki + 计算器/计时器/个人工作台

- Wiki 首页公开 **53 pages / 8 sections**，其中 Classes 34 页；其余覆盖 getting started、combat/systems、open world、dungeons/raids、Abyss/PvP、gear/economy、progression/routines。[Wiki index](https://aion2.grimvane.app/companion/wiki/)
- 每个主要职业不是一个页面，而是 guide、primer、skills/builds、Daevanion boards，部分还有 mistakes/safety 或职业对比。[Wiki index](https://aion2.grimvane.app/companion/wiki/)
- 代表 `Templar build and guide` 有 15 个章节，覆盖 1–45、货币、skill order、hotbar/macro、first steps at 45、endgame、tanking、PvP、daily/weekly、gathering/crafting，并使用多张数据表和分步清单。[Templar guide](https://aion2.grimvane.app/companion/wiki/templar-guide/)
- 站内工具包括 Stigma、DPS、gear score、enhancement calculator、rotation simulator、timers、daily/weekly checklist、shopping list、pet souls 和 farming target/map。[Templar guide](https://aion2.grimvane.app/companion/wiki/templar-guide/)

可执行判断：内容深度不等于堆字。其有效结构是“目录 + 任务章节 + 表格/清单 + 工具联动”。本站可以直接借鉴这种文章骨架，但仍需补游戏截图、技能图标和地图证据。

### 6. WikiRealm：Codes、Bosses、Dungeons、Events 等搜索意图均已落页

- 顶部分类不是只有 Classes/Guides，而是 Classes、Guides、Dungeons、Bosses、Items & Gear、Systems、Events、PvP、Codes。[Codes page](https://aion2.wikirealm.com/codes/aion-2-codes/)
- 首页展示的内容规模信号包括 98 servers、207 mounts、28 wings、1,461 skins、48 bosses 与多种 endgame/event/system 页面。[首页](https://aion2.wikirealm.com/)
- Codes 详情使用 hero image、Quick Answer、active/expired tables、region/expiry/source、redemption steps、FAQ、related articles 与 last-updated；这证明 `aion 2 codes` 是一个独立页面意图，不应藏在 Update Log。[Codes page](https://aion2.wikirealm.com/codes/aion-2-codes/)
- 但该页在 2026-10-22 仍把 10 月 13 日已过期的 `TAKEFLIGHTAION2` 放在“Active Codes 1”中，说明竞对有覆盖不代表信息可靠。[Codes page](https://aion2.wikirealm.com/codes/aion-2-codes/)

可执行判断：Codes 是本站最容易且最值得立刻增加的非 Guide 页面。差异化不是抄列表，而是显示 `active / expired / region / reward / source / expires / last verified`，当前无可用码时明确写“0 active codes”。

### 7. AION2 Inven（韩文）：数据库、职业社区与图/视频攻略供给

- 首页导航含 Daevanion simulator、items、crafting、pendant/amulet/belt/wings enhancement、live streams；另有 news、tips、dungeon、sanctuary、gearing/farming、PvP、9 个职业板、customization/source-sharing 与 event calendar。[AION2 Inven](https://aion2.inven.co.kr/)
- Dungeon 攻略板的真实列表明确标记 `사진`（图片）和 `비디오`（视频），大量帖子是 boss 机制、站位、路线和补丁变化，而不是纯文字新闻。[Dungeon guides board](https://www.inven.co.kr/board/aion2/6444?category=%EB%8D%98%EC%A0%84)
- 同一列表可见最新周时间表、Hidden Cube tips、机制研究、制作效率和 Web simulator，且有日期、浏览量、评论与推荐信号。[Dungeon guides board](https://www.inven.co.kr/board/aion2/6444?category=%EB%8D%98%EC%A0%84)
- 数据库入口独立存在于 `aion2.inven.co.kr/db/`，items 页面也单独成类。[Database](https://aion2.inven.co.kr/db/) / [Items](https://aion2.inven.co.kr/db/item/)

可执行判断：真正的副本攻略必须有机制截图/示意图/视频时间点。UTB/Grok 任务应要求输出证据素材包，而不是只交一份 HTML 文案。

### 8. aion2build.wiki：和本站定位最接近的直接竞对

- 首页公开 8 classes、8 PvE build guides、3 interactive tools；导航有 Builds、Compare、Classes、Tier List、Guides、Board、Search。[首页](https://aion2build.wiki/)
- 首页使用官方 Gladiator artwork、角色筛选、Build comparison、Daevanion tracker 与 leveling checklist，至少形成 hero、archive、tools、field notes 多个版面节奏，不是从上到下同一种 Card。[首页](https://aion2build.wiki/)
- 内容定位同样强调 named creator sources 和 Global 差异，因此它是本站最直接的“证据优先 Build Wiki”对手。[首页](https://aion2build.wiki/)

可执行判断：只靠“我们也标来源”不能形成优势；本站必须在实际可用的视觉步骤、更新速度或更清晰的任务决策上赢。

### 9. aion-2-wiki.wiki：大规模 SEO 内容网络的宽度参照

- 导航直接覆盖 Codes、Release、Classes、Guide、Builds、Servers、Systems、Monetization；首页还有 Beginner、Tier List、Dungeons/Bosses、Factions/PvP、Events/Patch Notes，并嵌入 YouTube thumbnail/观看入口。[首页](https://www.aion-2-wiki.wiki/)
- 公开 sitemap 在检查时含 451 个 URL（包含多语言版本），lastmod 集中在 2026-10-17。[Sitemap](https://www.aion-2-wiki.wiki/sitemap.xml)
- 最新列表还覆盖 titles、bracelets、Daevanion board、network errors、review、Twitch Drops、VPN、emotes 和具体 dungeon 等长尾。[首页](https://www.aion-2-wiki.wiki/)

可执行判断：它证明长尾远多于 6 篇 Guide，但“451 URL”本身不是质量目标。本站应优先做能被来源与视觉证据支撑的任务页，而不是机械生成同质文章。

## 我们缺的页面类型

以下缺口都由多个竞对的真实导航或详情页交叉验证，不是凭感觉列题：

| 缺口 | 竞对已覆盖 | 本站建议 | 现在能否执行 |
| --- | --- | --- | --- |
| Codes | WikiRealm、Aion2.gg、多个宽站 | `/codes`：active/expired、地区、奖励、到期、官方来源、last checked、复制按钮 | **能，P0**；必须先核实当前 0 active/有效码状态 |
| Dungeon/Boss | Inven、Aion2.gg、Codex、WikiRealm | 总览 + 单副本：entry、boss mechanics、positioning、loot、mistakes、patch | **能，P0/P1**；每篇先取得视频帧/官方或客户端证据 |
| 完整 Class/Build cluster | Vault、Codex、Grimvane | 每职业拆 PvE、PvP、skills/Stigma、Daevanion、gear、macro | **部分能，P0**；从证据最强职业开始，薄页继续 noindex |
| Gear/Systems | Codex、Aion2.gg、WikiRealm、Grimvane | Stigma、Daevanion、Arcana、item level、enhancement、currencies、crafting | **能，P1**；优先做解释与决策，不伪装数据库 |
| Events/Timers | Inven、Aion2.gg、Shugo、Vault | live/expired event hub，日程表与到期提醒 | **能，P0**；需要持续维护机制 |
| Maps/locations | Shugo、Aion2.gg、Inven | Hidden Cubes、boss/gathering/dungeon entrance maps | **条件能，P1**；先做带标注静态图，互动地图需数据源 |
| Collections | Aion2.gg、Shugo、WikiRealm | pets、mounts、wings、skins、titles | **条件能，P2**；需要客户端/官方数据集 |
| Tools | Aion2.gg、Vault、Grimvane、Inven | checklist、event timer、simple calculators，后续 build planner | **分级执行**；简单工具 P1，完整 planner P2 |
| Database/Armory | Aion2.gg、Shugo、Inven | items/skills/quests/monsters/characters | **暂不能靠编辑完成**；需要 API/客户端数据管道 |
| News/patch knowledge graph | Shugo、Inven、Aion2.gg | Patch → affected guides/classes/systems 的双向更新 | **能，P1**；需建立变更映射而非一页日志 |

## 页面形态缺口：为什么现在看起来像 Card 拼起来的

Card 适合索引，不适合承载攻略正文。本站当前几乎每个入口都用同一种矩形 Card，且所有详情页共享“标题—连续文字/表格—来源”节奏。竞对的有效页面通常组合以下组件：

- 宽幅 hero 或职业/副本视觉；
- patch、region、author/source、last verified 元数据条；
- sticky/on-page TOC；
- Quick answer / prerequisite / rewards summary；
- 真实技能图标、装备图标、boss/地图截图；
- 对操作界面加框、箭头、编号的 step screenshots；
- rotation timeline、skill bar、Daevanion route 或 mechanic diagram；
- 可排序/过滤的表格，或至少针对决策设计的 comparison table；
- 视频嵌入 + 精确时间点 + 文字摘要；
- warning/callout（地区差异、过期、未确认）；
- related content 只放文末，不让整篇文章再次变成卡片墙。

图片数量不是唯一目标。装饰性 AI 图不会解决问题；每张图必须回答“点哪里、站哪里、选什么、长什么样、路线怎么走、技能顺序是什么”中的一个。

## 给 UTB / Grok YouTube bot 的正确交付要求

以后不能只让 bot “写一篇 Guide”。每个 Guide 应交一个可复核的素材包：

1. `guide.md`：结构化正文，带 region、patch/date、目标读者和先决条件。
2. `sources.csv`：视频 URL、频道、发布时间、访问时间、每条结论对应的开始/结束 timestamp。
3. `frames/`：至少 6–12 张有意义的原始视频帧；文件名带 timestamp。
4. `captions.md`：每张图说明它证明什么，建议裁切范围和标注箭头/框的位置。
5. `mechanics/`：boss 阶段、站位、路线或 rotation 的结构化数据，便于画图而不是截图堆砌。
6. `uncertainties.md`：视频没有证明的内容、地区/版本差异、互相矛盾的 creator 建议。
7. `rights-and-attribution.md`：来源与使用方式；优先使用官方 media、自己的客户端截图或明确可引用的 creator frames。

最低验收线：没有 timestamp、没有可辨认画面、没有 region/version、没有不确定性清单的素材，不应直接发布成完整 Guide。

## 可执行优先级

### P0：先把网站从“薄卡片目录”变成可用内容产品

1. 重做首页内容编排：一张主视觉 + latest patch strip + task-based navigation + 当前 Codes 状态 + 重点职业/副本横幅 + 最近更新；减少同形 Card 数量。
2. 建立富媒体 Guide 模板：hero、metadata、TOC、quick answer、annotated steps、table/diagram、source timestamps、related links。
3. 发布 `/codes`，并把“当前无有效码”作为真实状态，而不是复制过期码。
4. 选 1 个证据最完整职业做示范级 Build cluster，不同时把 8 个薄页包装成完整 Build。
5. 选 1 个当前副本做图文/视频时间点 walkthrough，验证模板和素材管线。

### P1：扩大高意图内容面

1. Dungeons/Bosses、Events、Systems、Gear/Currencies 的 hub + detail。
2. 实用的 daily/weekly checklist、event/reset table、简单 enhancement/material calculator。
3. Patch change map：每次补丁自动列出受影响的职业页、Guide 和表格。

### P2：数据产品

1. 在确认可用数据源、更新成本和版权边界后，再做 items/skills/dungeons 数据库。
2. Interactive map、完整 Build planner、Armory 需要长期数据与工程投入，应单独立项，不宜伪装成“再写几篇 Guide”。

## 风险与事实边界

- 竞对自报条目数是其产品规模信号，不等于数据全都正确。
- Codes 页存在明显过期未清理案例；我们应把 `last verified` 和 official source 做成页面核心。
- 韩服/TW 内容不能直接当 Global 结论；图片与数值都要带 region/version。
- 公开视频适合发现 mechanics 和关键帧，但发布图像仍需处理来源、合理引用和 attribution。
- sitemap URL 数量能说明覆盖宽度，不能说明页面质量或真实流量。
