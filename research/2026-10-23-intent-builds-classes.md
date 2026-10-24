# AION 2 职业、Build 与技能系统搜索意图分析

日期：2026-10-23
范围：`classes_builds_tier.csv`、`skills_build_systems.csv`，并抽查 `other_verify.csv` 中职业、PvE/PvP 与职业成长系统相关词；另对 18 个代表词做当前 Web SERP 抽样。
目标：合并近义词，决定哪些需求应扩充已有页面、建新页面、先验证或跳过；不把关键词变体机械拆成独立 URL。

## 结论先行

1. **先把现有 8 个 `/classes/{slug}` 做成真正的 Build 指南，不要另建 8 个重复的 `/builds/{slug}`。** `class / guide / build / PvE build / PvP build / skill build / Daevanion build / macro` 是同一用户旅程的不同入口，应由一个持续更新的职业权威页承接。可以新增 `/builds` 聚合页，但它应筛选并导向这些 canonical 职业页。
2. **第一波职业优先级：Gladiator → Ranger → Sorcerer → Cleric；第二波：Spiritmaster → Chanter → Templar → Assassin。** 这主要依据各职业 Build 头词的相对量级、意图清晰度和可形成的内容模块，不是把所有变体 volume 相加后的“总量”。
3. **Tier list 可以做，但必须是同一版本、同一模式下的可审计排名。** `class tier list / tier list / PvP tier list / DPS tier list / best class / meta` 合并到 `/tier-list`，用 PvE、1v1/小队 PvP、大规模 PvP、solo/新手等 tab 或矩阵承接，不要分裂成多篇互相冲突的榜单。
4. **Macro 有真实需求，但风险最高。** 只讨论游戏内置 macro/技能行、明确列出必须手动释放的位移、爆发和机制技能；任何 Logitech G Hub、Razer Synapse、10ms 连发、AFK/循环自动化都应跳过。当前搜索没有找到可明确授权外部自动化的官方 Global 政策，因此通用 Macro 页应 `verify_first`，而非直接照搬 YouTube 设置。
5. **Daevanion、Stigma、Arcana、Stats 都可做独立系统页；Skill Builder 不能先做成文章冒充工具。** Planner SERP 已经由可交互、可分享、引用 live-client 数据的产品占据；没有可靠数据同步与交互能力时，`skill builder` 应 `verify_first`。
6. **SERP 已经非常拥挤，薄页没有胜算。** 竞争页常见：模式切换、等级阶段、技能点、Stigma、Daevanion 路径、Arcana、属性/装备、rotation/macro、图标与截图、更新版本和来源。我们的切入点不是再写一份“best build”摘要，而是把这些模块做齐，并显示 Global/KR/TW 版本边界。

## 数据口径与污染说明

- `volume_28d`、`average_volume`、clicks、zero-click 等均为 Similarweb 第三方估算，只能用于相对排序，**不能解释为 Google 官方搜索量或可获得流量**。
- **同簇词的 volume 不可相加。** 例如 `aion 2 class tier list`、`aion 2 tier list`、`aion 2 classes tier list` 很可能是同一搜索人群；`aion 2 builds` 与单职业 build 也存在重叠。
- 导出混入全球多语言词、旧 AION、KR/TW/Global 版本差异、拼写变体和 related 扩展污染。例：`crear macros para cantor`、`macro sorcier`、`templer`、`aion 2.0`，以及 Elementalist/Summoner/Spiritmaster 命名差异。
- `difficulty=0` 不等于没有竞争。当前 SERP 里已经有多个 exact-match AION 2 站、视频、互动 Planner 和数据站；应以实际结果形态为准。
- 以下 SERP 是 2026-10-23 当前 Web 搜索抽样，不代表所有国家/设备上的个性化 Google 排名；“前 3–5”指抽样中最靠前且与意图直接相符的结果。

## 关键词合并后的页面簇

| 合并后的需求 | 代表 Similarweb 估算（不相加） | 意图 | 动作 | 目标 URL | 主要理由 |
|---|---:|---|---|---|---|
| 全职业比较、best class | `aion 2 classes` 552,670；`best class` 49,910 | 信息/选择 | `enrich_existing` | `/classes` | 增加角色定位、难度、solo/group、PvE/PvP、武器、延迟容忍度、8 职业横向对比，不做另一篇 best-class 薄文 |
| Build 聚合 | `aion 2 builds` 135,630 | 导航/信息/工具前置 | `new_page_candidate` | `/builds` | 做模式/职业/角色筛选与更新状态，结果链接至 `/classes/{slug}`；不复制职业正文 |
| Gladiator build/guide/PvE/PvP/Daevanion/macro | 127,640（头词） | 信息/执行 | `enrich_existing` | `/classes/gladiator` | 8 职业最高头词；需坦/DPS、AoE、仇恨、技能里程碑和模式分流 |
| Ranger build/guide/PvE/PvP/Daevanion/macro | 82,130 | 信息/执行 | `enrich_existing` | `/classes/ranger` | SERP 同时有指南、数据页和 Planner；需技能优先级、走位/距离、multi-hit、宏受 ping 影响 |
| Sorcerer build/guide/PvE/PvP/Daevanion/macro | 73,910 | 信息/执行 | `enrich_existing` | `/classes/sorcerer` | 需 Global PvE/PvP 分流、爆发窗口、蓝量、手动技能与宏边界 |
| Spiritmaster/Elementalist/Summoner build | 66,400 | 信息/执行 | `enrich_existing` | `/classes/spiritmaster` | 名称与地区版本歧义显著；需同义词说明、召唤物循环、PvE/PvP 分开 |
| Cleric build/guide/heal/DPS/macro | 66,230 | 信息/执行 | `enrich_existing` | `/classes/cleric` | 同一职业有 healer、DPS、solo、group、PvP 多角色；必须提供 swap 逻辑 |
| Chanter build/guide/support/DPS/macro | 62,690 | 信息/执行 | `enrich_existing` | `/classes/chanter` | Mantra、support/DPS、等级断点和 group buff 是核心，不是单套 rotation |
| Templar build/guide/tank/DPS/macro | 57,900 | 信息/执行 | `enrich_existing` | `/classes/templar` | 需仇恨、生存、pull、tank/DPS 双路线；错误宏可能把角色带进 Boss 机制 |
| Assassin build/guide/PvE/PvP/macro | 57,530 | 信息/执行 | `enrich_existing` | `/classes/assassin` | 高操作/位置要求；宏不能覆盖 opener、位移、防御与爆发判断 |
| Class tier list / best class / meta | 110,700（class tier list 头词） | 信息/时效 | `new_page_candidate` | `/tier-list` | 一页按版本和场景分层；需 methodology、证据、更新时间、改动记录 |
| PvP/DPS tier list | 11,450 / 13,110 | 信息/时效 | `enrich_existing` | `/tier-list#pvp`、`#pve-dps` | 与总榜同一意图；独立 URL 会造成榜单冲突和维护重复 |
| 游戏内 Macro 基础与安全边界 | 20,130 | 信息/执行/风险 | `verify_first` | `/guides/macros` | 先确认 Global 官方规则与客户端行为；只覆盖内置功能，不覆盖外部自动化 |
| 职业 macro | Chanter 25,820；Gladiator 21,220；Sorc 20,480；Ranger 20,410 等 | 信息/执行/时效 | `enrich_existing` | 各 `/classes/{slug}#rotation-and-macro` | 与技能等级、ping、模式、Boss 机制强耦合；不建 8 篇重复 macro 页 |
| Daevanion board/points/crystals/class route | 16,010 | 信息/执行 | `new_page_candidate` | `/guides/daevanion-board` | 通用机制独立页；各职业最优路线留在职业页，避免通用页膨胀 |
| Arcana/cards/how to get/upgrade | 15,260 | 信息/执行/时效 | `new_page_candidate` | `/guides/arcana` | 需要 card slot、来源、升级/提取/转化、技能等级、版本差异和实机图 |
| Stigma/slots/shards/points/best picks | 12,100 | 信息/执行 | `new_page_candidate` | `/guides/stigma` | 通用解锁、slot、成本与来源独立；每职业 picks/swaps 留在职业页 |
| Skills/skill tree/skill level 16 | 6,570 | 信息/执行 | `enrich_existing` | `/classes/{slug}#skills` + 上述系统页 | 用户不是只要技能名录，而是要技能点、专精、Stigma/Daevanion/Arcana 如何共同抬等级 |
| Skill builder/build planner | 6,630 | 工具 | `verify_first` | `/tools/build-planner` | SERP 对手已经提供完整互动工具与 live-client 数据；没有可维护数据管线时不要发布静态假工具 |
| Stats / stats explained / penetration / multi-hit / combat speed | 5,350；3,080；4,290；7,970；5,100 | 信息/决策 | `new_page_candidate` | `/guides/stats` | 一页解释定义、软硬上限/未知项、不同职业收益与测试方法；职业页链接具体优先级 |
| G Hub / mouse / external macro | 2,010（单个导出词） | 自动化/账号风险 | `skip` | 无 | 不提供外部连发、10ms 循环、AFK 或规避检测设置；没有可靠官方许可 |

## 8 个职业 Build 的发布优先级

以下只比较头词，不把 guide、macro、PvE、PvP、拼写变体继续加总。

| 顺序 | 职业 | Build 头词 28d 估算 | 当前 SERP 强度 | 为什么排这里 | 首发必须覆盖 |
|---:|---|---:|---|---|---|
| 1 | Gladiator | 127,640 | 很强 | 量级断层第一，且 tank/DPS、AoE/单体与 PvE/PvP 有足够深度 | 角色定位、等级 12/20/30/40/45 节点、PvE group/solo、PvP、技能/专精、Stigma、Daevanion、Arcana、stats、gear、rotation、内置 macro、仇恨与生存 |
| 2 | Ranger | 82,130 | 很强 | 高需求，SERP 有文章、数据站、Planner；用户需要可执行且 ping-aware 的顺序 | 距离/走位、multi-hit、技能行优先级、PvE/PvP、宏与手动技能、Daevanion 路线、训练木桩验证 |
| 3 | Sorcerer | 73,910 | 强 | Build 与 macro 均高；不同来源意见容易冲突 | 蓝量、爆发窗口、技能等级断点、PvE/PvP、大规模战场、手动 vs macro、Stigma swap |
| 4 | Cleric | 66,230 | 很强 | 量略低于 Spiritmaster，但 healer/DPS/solo/group 意图更清晰、更容易做成高价值决策页 | 治疗与输出双套、组队职责、净化/保命、Stigma swap、属性优先级、何时不能跟随 DPS macro |
| 5 | Spiritmaster | 66,400 | 强 | 数值略高，但 Spiritmaster/Elementalist/Summoner 与地区版本歧义增加验证成本 | 名称/版本说明、召唤物、DoT/爆发、PvE/PvP、Stigma/Daevanion、macro 限制 |
| 6 | Chanter | 62,690 | 强 | Build 需求接近，但内容重心是 group utility 与等级断点，不能写成纯 DPS 排行 | support/DPS、Mantra、队伍 buff、level-aware setup、first dungeon/45 后、rotation 与 proc 条件 |
| 7 | Templar | 57,900 | 强 | 仍是大词，但 tank 结论必须有实战机制证据；错误建议代价高 | threat、pull、mitigation、tank/DPS、PvP、Boss 机制、macro 的位移/控制排除项 |
| 8 | Assassin | 57,530 | 强 | 头词略低且高技能上限使“万能宏”最不可信 | opener、背击/位置、爆发、PvP、手动技能、Stigma/Daevanion、训练木桩与实战差异 |

这不是“后四个不做”。八个头词都达到足以重做现有页面的量级；分波次的目的是先建立可复用的图文模板、版本字段和验证流程，再复用到其余职业。

## 代表词 SERP 抽样与结果形态（18 词）

### 1. `aion 2 classes`

抽样前列：

1. [AION 2 Guide：Classes Guide](https://www.aion2game.com/en/classes/aion-2-classes)
2. [AION 2 Wiki：Best Class](https://aion2game.wiki/classes/best-class/)
3. [Corpus：Which class should you play?](https://corpus.gg/blog/aion-2/which-class-to-play)
4. [Aion2builds.com 首页/职业入口](https://aion2builds.com/)
5. [YouTube：Ultimate Class Guide](https://www.youtube.com/watch?v=rrIc5sxoKuQ)

结果形态是 8 职业总览、角色匹配问答、视频讲解和站内职业入口。应 `enrich_existing` `/classes`，增加可比较矩阵、玩法/延迟/组队需求，而非仅摆 8 张 card。

### 2. `aion 2 builds`

抽样前列：

1. [Aion2build.org：可筛选 Build Hub](https://www.aion2build.org/builds)
2. [Aion2 Codex：PvE/PvP Builds by Class](https://aion2codex.wiki/builds)
3. [Mobalytics：Class Builds](https://mobalytics.gg/gamebase/guides/aion-2-builds)
4. [AION2 Armory：Builds](https://aion2.io/builds)
5. [Aion2builds.com：Builds、Tier List、Guides](https://aion2builds.com/)

结果形态由筛选器、版本标签、模式/职业卡、用户或编辑 Build 组成。建议 `new_page_candidate` `/builds` 聚合页，但详情 canonical 仍指向 `/classes/{slug}`。

### 3. `aion 2 gladiator build`

抽样前列：

1. [Aion2.gg：Gladiator Builds](https://aion2.gg/builds/gladiator)
2. [Aion2.gg：Gladiator PvE Build](https://aion2.gg/guides/gladiator-pve-build)
3. [SolAshur：Gladiator Build Guide](https://solashur.com/builds/gladiator-build-guide.html)
4. [Aion2Data：Gladiator Guide](https://aion2data.com/guides/gladiator)
5. [Daeva Guides：Gladiator](https://daevaguides.com/en/gladiator/)

精确职业结果已是深度 Build/数据页；应 `enrich_existing` `/classes/gladiator`，首批完成。

### 4. `aion 2 ranger build`

抽样前列：

1. [Aion2.gg：Ranger Builds](https://aion2.gg/builds/ranger)
2. [Aion 2 Guide Wiki：Ranger Build](https://aion2-guide.wiki/builds/ranger)
3. [Corpus：Ranger Guide](https://corpus.gg/blog/aion-2/ranger-guide)
4. [AION2Build Wiki：Ranger](https://aion2build.wiki/builds/ranger/)
5. [Aion 2 Companion：Ranger Builds](https://www.aion2companion.com/builds/ranger/)

图文指南、Build 数据页和推荐配置并列；应 `enrich_existing` `/classes/ranger`。

### 5. `aion 2 sorcerer build`

抽样前列：

1. [Aion2.gg：Sorcerer Builds](https://aion2.gg/builds/sorcerer)
2. [Aion 2 Guide Wiki：Sorcerer](https://aion2-guide.wiki/builds/sorcerer)
3. [DaevaMeta：Sorcerer Guide](https://daevameta.io/en/class/sorcerer/guide?build=all)
4. [Elite Grind Lab：Sorcerer Builds](https://www.elitegrindlab.com/aion-2/builds/sorcerer/)

结果要求 build selector、技能/装备与模式差异；应 `enrich_existing` `/classes/sorcerer`。

### 6. `aion 2 spiritmaster build`

抽样前列：

1. [Aion 2 Companion：Spiritmaster Builds](https://www.aion2companion.com/builds/spiritmaster/)
2. [Aion 2 Maps：Spiritmaster Guide](https://aion2maps.com/guides/spiritmaster/)
3. [ExpCarry：Spiritmaster Guide](https://expcarry.com/aion-2-spiritmaster-guide)
4. [Corpus：Spiritmaster Guide](https://corpus.gg/blog/aion-2/spiritmaster-guide)
5. [Aion2 Website：Spiritmaster Build](https://aion2.website/builds/spiritmaster-build)

页面需解释 Spiritmaster/Elementalist/Summoner 命名与地区差异；应 `enrich_existing` `/classes/spiritmaster`。

### 7. `aion 2 cleric build`

抽样前列：

1. [Aion 2 Companion：Cleric Builds](https://www.aion2companion.com/builds/cleric/)
2. [Aion 2 Guide Wiki：Cleric](https://aion2-guide.wiki/builds/cleric)
3. [ToGame：Cleric Build](https://togame.io/b/aion-2-cleric-build/)
4. [AION2Hub：Cleric Builds](https://aion2hub.com/builds/cleric)
5. [Aion2Cleric：Builds](https://aion2cleric.com/builds/)

结果普遍按 healer/DPS/PvP 分角色；应 `enrich_existing` `/classes/cleric`。

### 8. `aion 2 chanter build`

抽样前列：

1. [Daeva Guides：Chanter](https://daevaguides.com/en/chanter/)
2. [Elite Grind Lab：Chanter Builds](https://www.elitegrindlab.com/aion-2/builds/chanter/)
3. [AION2Hub：Chanter Builds](https://aion2hub.com/builds/chanter)
4. [Aion 2 Companion：Chanter Builds](https://www.aion2companion.com/builds/chanter/)
5. [Aion2.gg：Chanter PvE Build](https://aion2.gg/guides/chanter-pve-build)

最强结果已有等级感知、进度保存或完整系统联动；应 `enrich_existing` `/classes/chanter`。

### 9. `aion 2 templar build`

抽样前列：

1. [Aion2.gg：Templar Builds](https://aion2.gg/builds/templar)
2. [Aion2 Guides：Templar](https://aion2-guides.info/en/templar/)
3. [Aion2 Vault：Templar Builds](https://aion2vault.com/builds/templar/)
4. [GamesTN：Templar](https://gamestn.com/games/aion2/classes/templar/)
5. [Aion2Data：Templar Builds](https://aion2data.com/builds/templar)

结果覆盖 tank/DPS、gear、skills、mode；应 `enrich_existing` `/classes/templar`。

### 10. `aion 2 assassin build`

抽样前列：

1. [Aion2.gg：Assassin Builds](https://aion2.gg/builds/assassin)
2. [Aion 2 Guide Wiki：Assassin](https://aion2-guide.wiki/builds/assassin)
3. [DaevaMeta：Assassin Guide](https://daevameta.io/en/class/assassin/guide)
4. [METAMMO：Assassin Build](https://metammo.com/aion-2-guide/builds/assassin)

应 `enrich_existing` `/classes/assassin`，尤其需要把 opener/位移/防御从宏中剥离。

### 11. `aion 2 class tier list`（合并 `tier list / best class / meta`）

抽样前列：

1. [Destructoid：Class Tier List](https://www.destructoid.com/aion-2-class-tier-list/)
2. [Aion2builds.com：PvE/PvP/Solo Tier List](https://aion2builds.com/tier-list/)
3. [AllThings.How：Meta Classes Ranked](https://allthings.how/aion-2-meta-classes-tier-list/)
4. [Aion2help：PvP Tier List / 多来源共识](https://aion2help.com/en/tier-list/pvp/)
5. [YouTube：Every Tier List You Found Is Already Wrong](https://www.youtube.com/watch?v=SEDHpmfJ0XA)

结果本身反复强调 patch 变化和 PvE/PvP 排名不同。建议 `new_page_candidate` `/tier-list`，但只能在有可说明证据与更新时间时发布。

### 12. `aion 2 pvp tier list`

抽样前列形态与上项高度重叠，包括 [Aion2help 多来源 PvP 共识页](https://aion2help.com/en/tier-list/pvp/)、[Destructoid PvE/PvP 合并榜](https://www.destructoid.com/aion-2-class-tier-list/)、[Aion2builds.com 多模式榜](https://aion2builds.com/tier-list/) 及视频榜。应 `enrich_existing` `/tier-list#pvp`，不要另建独立榜单。

### 13. `aion 2 macro`

抽样前列：

1. [Corpus：Macro Guide](https://corpus.gg/blog/aion-2/macros-guide)
2. [YouTube：Macro Guide（同时提到 Logitech G Hub）](https://www.youtube.com/watch?v=PifBVzUZICk)
3. [Aion2 Wiki Space：Macro Guide](https://aion2wiki.space/macro-guide)
4. [GitHub：8 职业 in-game macro sheet](https://github.com/265ada/aion2-macros)
5. [Reddit：玩家不理解内置 macro 的讨论](https://www.reddit.com/r/Aion2/comments/1wpaqto/help_me_understand_macros/)

搜索意图同时混合“客户端内置宏”和“鼠标/键盘软件连发”。前者可教育，后者存在账号/合规风险。建议 `verify_first` `/guides/macros`；未找到明确许可外部自动化的官方 Global 文档前，只能写内置功能和禁止/未知边界。

### 14. `aion 2 daevanion board`

抽样前列：

1. [Corpus：Daevanion Guide](https://corpus.gg/blog/aion-2/daevanion-guide)
2. [Aion2.run：Daevanion Boards Guide](https://aion2.run/en/astuces/daevanion-guide)
3. [Aion2Builder：Daevanion Board Guide](https://aion2builder.com/guides/daevanion-board/)
4. [Gameplay.tips：Daevanion Boards Guide](https://gameplay.tips/guides/aion-2-daevanion-boards-guide.html)
5. [Aion 2 Maps：Daevanion Boards](https://aion2maps.com/guides/daevanion-boards/)

结果是图解、点数来源、节点颜色、路线和职业差异。建议 `new_page_candidate` `/guides/daevanion-board`，通用规则与职业路线分层。

### 15. `aion 2 stigma`

抽样前列：

1. [AION2 Armory：Stigma Setup](https://aion2.io/guides/stigmas)
2. [Aion2builds.org：Stigma Guide](https://aion2builds.org/guides/stigma/)
3. [LUM.GG：Stigma Guide](https://lum.gg/aion-2/guides/stigma-guide)
4. [AION2 KINA：Stigma Skill System](https://www.aion2kina.com/en/guides/aion-2-stigma-skill-system-guide/)
5. [Aion2 Atlas：Stigma Guide](https://aion2atlas.app/guides/stigma/)

结果形态含 unlock level、slot、shard 成本/来源、职业推荐，部分甚至读角色进度。建议 `new_page_candidate` `/guides/stigma`。

### 16. `aion 2 skill builder`

抽样前列：

1. [Aion2.gg：Build Planner](https://aion2.gg/builds/planner)
2. [AION2 Guidance：Planner](https://aion2guidance.com/en/planner/)
3. [Vi.ki：Build Planner](https://aion2.vi.ki/build-planner)
4. [Aion2builds.com：Build Planner](https://aion2builds.com/tools/build-planner/)
5. [Aion2.app：Skill Simulator](https://aion2.app/simulator?job=7)

结果不是文章，而是能选技能、Stigma、gear、Daevanion、等级并复制分享链接的交互工具，且领先产品声明使用 client 数据。建议 `verify_first` `/tools/build-planner`；只有数据管线、URL state、移动端交互和版本更新都可做时才进入开发。

### 17. `aion 2 arcana`

抽样前列：

1. [Aion2.gg：Arcana System Explained](https://aion2.gg/guides/arcana-system-explained)
2. [Aion2Guide.org：Arcana Cards Guide](https://aion2guide.org/systems/aion-2-arcana-cards-guide/)
3. [HowToVideoGame：How to Get Arcana Cards](https://howtovideogame.com/aion-2-arcana-cards/)
4. [Aion2 Atlas：Arcana](https://aion2atlas.app/arcana/)
5. [Raid Relay：Arcana Guide](https://raidrelay.com/aion-2-arcana-guide)

SERP 要求 card types/slots、sets、skill levels、enhance/extract/transmute、drop source 与版本证据。建议 `new_page_candidate` `/guides/arcana`。

### 18. `aion 2 stats explained`

抽样前列包括 [Corpus：Combat Stats Explained](https://corpus.gg/blog/aion-2/combat-stats-explained)、社区 [Substats 实测讨论](https://www.reddit.com/r/Aion2/comments/1x4l6og/substats_guide_exploit_the_possibilities_of_gear/) 以及 build planner 内的实时属性解释。建议 `new_page_candidate` `/guides/stats`，并把 `penetration / multi-hit / combat speed / crit` 合并为同页词条和职业收益矩阵。

## `other_verify.csv` 的相关高量词抽查

这些词说明 Build 页面需要哪些模块，但不应自动变成独立页面。

| 词 | 28d 估算 | 处理 | 去向/原因 |
|---|---:|---|---|
| `aion 2 genus insight` | 13,190 | `verify_first` | 先确认 Global 实际系统、词义与职业影响；确认后进入 `/guides/stats` 或独立成长系统页，不凭词面造内容 |
| `aion 2 meta` | 9,310 | `enrich_existing` | 合并到 `/tier-list` 与 `/builds` 的 patch 状态，不建“meta”重复页 |
| `aion 2 soul binding` | 9,290 | `verify_first` | 属于装备/物品系统，不是职业 Build 头词；验证后可进入装备系统指南 |
| `aion 2 training dummy` | 8,110 | `enrich_existing` | 作为每个 Build 的验证方法：装备/等级/时长/目标设置、DPS 结果和限制，不必先建独立页 |
| `aion 2 multi hit` | 7,970 | `enrich_existing` | 放入 `/guides/stats` 并在 Ranger/Assassin 等职业页解释收益差异 |
| `aion 2 dps` | 5,760 | `verify_first` | 可由 tier list 与职业页满足；若实际意图是 DPS meter，则涉及第三方程序风险，不能混做 |
| `aion 2 dmg meter` | 5,750 | `skip`（当前） | 第三方工具/账号风险未验证；不应为了流量推荐未知软件 |
| `aion 2 pve mode` | 5,330 | `verify_first` | 先确认用户在找 PvE-only 设置、模式开关还是具体内容，再决定 FAQ/指南位置 |
| `aion 2 combat speed` | 5,100 | `enrich_existing` | 合并 `/guides/stats`，并在职业页提供优先级而非独立薄页 |
| `aion 2 endgame` | 4,670 | `verify_first` | 属于整体 progression，不要塞进职业页；可在另一个 progression 研究中处理 |

`aion 2.0`（360,020）是最典型污染：很可能混合旧版、版本号或其他导航需求，不应据其巨大估算值进入 AION 2 职业内容优先级。

## 每个职业页必须有的模块与素材

要超过当前 SERP 的普通文章，8 个职业页至少复用同一套完整结构：

1. **页面顶部可执行摘要**：Global 版本/patch、角色、武器、难度、强弱场景、最后验证日期、来源置信度。
2. **Build 切换器**：PvE solo、PvE group、PvP solo/small group、large-scale；不要把一个配置称为所有场景的 “best”。
3. **等级路径**：12/20/22/27/30/32/37/40/45 等系统/slot 断点；显示“现在加什么，下一步改什么”。
4. **技能优先级图**：技能图标、等级、专精节点、原因、手动/宏标记；用真实客户端截图或可核对的游戏素材。
5. **Stigma**：4 个 slot、升级顺序、PvE/PvP swap、shard 成本/来源链接。
6. **Daevanion 路线图**：不是纯文字清单；用完整 board 截图/可视路线、点数门槛、替代路径。
7. **Arcana 与技能等级联动**：目标技能在哪类 card、何时值得追、没有目标 card 时的替代。
8. **属性与装备**：stats 排序、阈值/未知项、gear slot、soul-bind lines；注明哪些是 client data、实测或推断。
9. **Rotation 与游戏内 Macro**：示意图/技能行截图、优先级、ping/冷却假设、必须手动的位移/保命/爆发/机制技能、常见失败案例。
10. **实测素材**：同装备和相同训练木桩条件的视频片段或帧截图；组队/Boss 场景截图；不能用不同 item level 的 DPS 数字直接比较。
11. **错误排查**：技能不触发、macro 被无 CD 技能卡住、slot 未解锁、Arcana/Daevanion 等级来源缺失。
12. **Patch changelog 与引用**：旧建议何时失效、改了什么、引用官方 patch/client data/具名视频章节，不把 KR/TW 结论默认为 Global。

## Macro 的安全与维护边界

### 可以覆盖

- 客户端内置 skill row/macro key 的界面位置与基本逻辑；
- 技能优先级、冷却、连锁条件、动画取消的教学；
- 哪些技能应该手动释放以及为什么；
- 不同 ping、等级、Stigma/Arcana/Daevanion 状态下的替代配置；
- patch 后的变更记录与测试条件。

### 不应覆盖

- Logitech G Hub、Razer Synapse、AutoHotkey 等第三方连发/循环配置；
- 10ms 重复输入、AFK/无人值守、自动寻怪/自动战斗；
- 绕过检测、规避处罚或“安全不会封”的承诺；
- 把玩家视频中的外部自动化做法当成官方允许的证据。

### 为什么先 `verify_first`

- 当前 SERP 同时混合内置 macro 和外部设备自动化，用户意图并不纯；
- 未在当前抽样中找到明确授权外部自动化的 AION 2 Global 官方规则；
- 具体技能行会随等级、patch、ping、装备和技能等级改变，维护频率高；
- Templar 位移/拉怪、Cleric 保命/净化、Assassin opener 等错误自动化会直接导致副本或 PvP 失败。

因此 Macro 的可赢切入点是“**安全、可解释、按版本和场景维护的游戏内宏**”，不是“更激进的自动按键脚本”。

## Tier list 的发布门槛

发布 `/tier-list` 前应具备：

- 明确 Global 客户端版本、发布日期、最后复核日期；
- PvE group、solo、新手、1v1、小队/大规模 PvP 分开；
- 对每个排名给出角色/机制理由，而非只有 S/A/B 图片；
- 至少记录 build、装备/战力、测试环境或引用的可复核来源；
- 说明排名不等同职业选择，组队刚需和个人输出不是同一指标；
- patch 变化表；失效时可以快速降级为 “needs review”，而不是保留过时排名；
- 图片至少包括 tier board、8 职业图标、关键比较图/实机帧，不使用无来源的 AI 角色图代替证据。

## 推荐执行顺序

1. 建立职业页共用的数据与视觉模板，并先重做 Gladiator、Ranger、Sorcerer、Cleric。
2. 同时补 `/guides/stats`、`/guides/stigma`、`/guides/daevanion-board`、`/guides/arcana`；职业页只保留推荐与链接，通用机制不重复八次。
3. 补 Spiritmaster、Chanter、Templar、Assassin，并对名称/地区/角色差异单独 QA。
4. 新建 `/builds` 聚合筛选页，仍以 `/classes/{slug}` 为详情 canonical。
5. 只有在版本化证据足够时发布 `/tier-list`。
6. 完成官方规则验证后再发布 `/guides/macros`；外部 automation 永久排除。
7. Skill Builder 单列产品评估：数据来源、同步频率、URL 分享、移动端、版权/素材、维护责任均明确后才做；不要用静态文章占这个工具意图。

## 证据边界

- 本报告没有把 Similarweb 估算相加，也没有把它当成 Google 官方 volume。
- SERP 抽样能证明当前结果形态与竞争者，但不能证明某个页面将获得排名或流量。
- 竞争页中的具体游戏数值仍需用 Global 当前客户端、官方 patch notes 或可复核实测二次确认；本报告只决定内容架构与研究优先级，不为这些数值背书。
- 对 Macro、DPS meter、第三方工具和地区版本差异采用保守策略；缺官方证据时标记 `verify_first` 或 `skip`。
