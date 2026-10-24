# AION 2 视觉与编辑基准

审查日期：2026-10-22
范围：AION 2 竞对首页、数据库/详情页、长 Guide、Build/Class、Codes/Event，以及本站本地页面。
方法：真实浏览器抽样、DOM 结构量化、全页截图目测、搜索结果/页面正文交叉核对。DOM 中的图片数量包含图标、响应式副本和隐藏 Tab，不能直接当作“可见大图数量”。

> **快照说明：** 本文对首页、Guide、职业页和 Update Log 的数量化诊断记录的是 2026-10-22 改版前状态。当前实现与索引判断见 [`2026-10-24-publish-gate-audit.md`](./2026-10-24-publish-gate-audit.md)；本文的页面模板、视觉证据与素材版权标准继续适用。

## 结论

当前站点离可正式发布的 AION 2 Wiki/Guide 产品仍有明显距离。这不是轻微的配色或 Card 样式问题，而是**内容形态和素材供应链都还没有建立起来**：

- 首页约 450 词，正文只有 1 张图；主体仍以入口卡片承担信息，缺少搜索、实时工具、视觉导航和深内容样板。
- 6 篇 Guide 约 115–335 词且全部 0 图。它们能当“核过来源的速查答案”，不能当图文 Guide。
- 职业页多数约 106–140 词且全部 0 图。即使诚实标了 Research Notes，也不具备 Build 页面应有的技能、装备、板图、热键和版本化方案。
- Update Log 约 485 词、0 图，仍是单列文字流水账；缺少 Patch Hero、发布日期/区域 Badge、改动摘要表、受影响内容入口和来源状态。
- 全站几乎没有目录、侧栏、页内搜索、图注、截图、地图、技能图标、视频章节、作者/校验者、更新历史或“报告错误”工作流。

竞对也大量使用 Card，但成熟页面把 Card 限定在“发现和选择”层；用户进入详情页后，Card 会让位给**工具、数据、图标矩阵、流程、表格、截图、目录、来源台账和版本状态**。本站的问题不是“用了 Card”，而是 Card 后面目前没有足够的产品和编辑内容。

## 竞对样本与页面骨架

| 类型 | 页面 | 观察到的骨架 | 图文/工具密度 | 可借鉴点 | 不应照抄 |
| --- | --- | --- | --- | --- | --- |
| 综合首页 | [Aion2.gg 首页](https://aion2.gg/) | Hero + 全站搜索 + Planner 快捷入口 + Server/This week 状态 + 新手路径 + Class/Tier/Build + 官方 News/Guide + Codex 分类 | 首页直接通向 23,158 条条目、Map、Timer、Checklist、Codes、Build 等真实功能；不是只有文章卡 | 首页先满足“查东西、规划、今天做什么”，再做内容发现；明确 EU/NA 客户端版本 | 不要把整个数据库规模当成短期目标，也不要复制其游戏资源 |
| Wiki/数据库 Hub | [Aion2.gg Database](https://aion2.gg/database) | 数据版本摘要 + Gear/World/Crafting/Collections 分类 + 数据表 + Tools + Popular/Classes/Top gear/Dungeons/Map | 页面显示 23,158 entries、Client 2.0.7.0、Steam build、Extracted date，并有 27 个分类和纠错入口 | 数据必须带客户端、构建号、抽取日期和方法页；目录 Card 后面有可操作详情 | 没有数据抽取/维护能力时，不要先造空 Item/NPC 页面 |
| Class 详情 | [Aion2.gg Gladiator](https://aion2.gg/database/classes/gladiator) | Class Hero + 角色/武器/定位 + 4 种 Build + 玩法说明 + Skill chains + 全技能 + FAQ + 其他职业 | 浏览器中约 789 词、64 个主内容图片元素，图片主要是职业/武器/技能图标；技能链把图标与名称直接对应 | 图标、链路、Build 模式和 Planner 互通；每个技能可继续进入详情 | 图标来自游戏客户端，技术上可做不代表已获得再分发许可 |
| 深度 Class/Build | [Aion2Data Gladiator](https://aion2data.com/guides/gladiator) | Hero + 版本日期 + Strength/Weakness + 5 个场景 Build + Endgame gear + Leveling + 31-source ledger + Tools + FAQ | 约 1,442 词、113 个图片元素，绝大多数是技能/物品图标；每个 Build 有图标顺序、来源数和 Full guide | 同页回答 PvE damage、Party tank/support、PvP、Leveling；来源台账是内容的一部分，不是页脚一句话 | 页面仍使用大量游戏美术和图标；不可直接抓取或重托管 |
| 超长 Guide | [AION2 Guides Gladiator](https://aion2-guides.info/en/gladiator/) | Class Hero + 左侧粘性目录 + PvE/PvP/Leveling Tab + Skills/Passives/Gear/Arcana/Board/Stigma/Macro/Rotation/Combos/Leveling/Sources | 约 3,111 词、5 表、2 figure、3 aside；DOM 有 446 个 img（含大量技能图标、隐藏 Tab/响应式副本），可见内容含 Daevanion Board 和 Hotbar 截图 | 长文按任务切片；Board、热键和技能图标提供“看一眼就能照做”的信息 | 不要追求 446 这个数字；重复图标和隐藏内容会虚增统计。顶部角色图与游戏图标有版权风险 |
| Build 聚合/创作者目录 | [Aion2.gg Build Guides](https://aion2.gg/builds/guides) | Planner CTA + Guides/Players/Creators 数量 + 职业图标筛选 + PvE/PvP、ILvl、语言、视频、装备、强化、排序过滤 + Build 列表 | 48 个 Guide、41 个 Creator；卡片标作者、Item Level、变体数、语言、是否视频和更新时间 | Build Hub 需要可筛选的使用场景与版本信息；“有视频”是功能筛选而不是装饰 | 需要真实构建数据和持续审核，不能用几篇静态文案伪装 Planner |
| 大站 Guide Hub | [Mobalytics AION 2 Builds](https://mobalytics.gg/gamebase/guides/aion-2-builds) | 作者/更新时间 + Overview + 职业目录 + TOC + Related | Hub 本身偏薄，约 1 张主图，但依赖品牌权重和下游 Build 详情 | 说明竞对并非每一页都深；Hub 可以短，但下游必须够强 | 只复制这个 Hub 会变成“薄目录套薄详情” |
| Codes 产品页 | [Aion2.gg Coupon Codes](https://aion2.gg/coupons) | Region Filter + Active codes + Copy code + Reward icons + Expiry + Official source/last verified + Redeem steps + Mail gifts | 兑换码不是普通文章：有 Copy、区域、有效期、奖励条目、官方验证和相关 Timer/Checklist | Codes 应做成维护型小工具；把“最后核验时间”放在答案附近 | 不要只写一段“暂无兑换码”就单独索引 |
| Codes 新闻文章 | [TheClick Codes](https://www.theclick.gg/aion-2-codes-october-2026/) | 作者/日期 + Hero + Active 表 + 兑换步骤 + Expiry 表 + Rewards + Troubleshooting + Related + 侧栏 | 约 1,178 词、10 img、4 figure、2 table、1 aside；但全页截图可见广告/懒加载空白，官图并未解释操作界面 | 表格、故障排查和相关集群完整 | 泛用官图、广告堆叠和图片占位并不等于“图文并茂”；它缺少真正的 Coupon UI 截图 |
| 大型数据库 | [DBAion2](https://dbaion2.ru/en/) | 多级 Mega Menu + Items/NPC/Quest/Dungeon/Map/Skill calculator/Builder/Ranking/Guide | 结构覆盖武器、护甲、材料、消耗品、宠物、NPC、地图、技能计算器等 | 用户搜索词不只 Guide，数据库和工具类意图非常大 | 信息架构很宽，运营和数据成本也很高，不适合作为空页面批量复制 |
| 交互 Planner | [QuestLog Character Builder](https://questlog.gg/aion-2/en/character-builder) | 目标是完整角色构建器而非文章 | 本轮自动浏览只得到黑屏/空 DOM，未据此做视觉结论；搜索结果和竞对均把它当完整 Build 的外链载体 | 对 `skill builder/build planner`，用户要的是工具，不是 SEO 长文 | 不能把不能验证的交互细节写成已观察事实 |

补充：Aion2Data 的长 Class 页面底部目录还覆盖 Items、Characters、World、Maps、Timers、Quests、Macros、Gear planner、Collections、News、Patch changes 等，说明竞对绝非“只有几篇 Guide”。

## 卡片是否一定有问题

不是。问题是卡片承担了错误的职责。

### 适合卡片

- 首页的 3–6 个主入口；
- Class/Guide/Tool 的选择与筛选结果；
- Related content；
- Build 变体概览；
- 数据对象摘要（Item、Dungeon、Event）。

### 不适合卡片

- 连续正文的每一节；
- 操作步骤；
- Patch 时间线；
- 需要横向比较的技能/装备/奖励；
- 来源与更新记录；
- 地图、Daevanion Board、Hotbar 和 Rotation。

这些内容应分别使用长文段落、步骤流、时间线、表格/矩阵、来源台账、真实截图/图表和交互工具。把所有内容继续包成圆角 Card，只会强化“模板拼装感”。

## 本站页面逐类诊断

### 首页

现状：Hero 有一张来源注明为 NC 的官方 Key Art，之后主要是状态卡、Guide 卡、职业卡和 FAQ。信息层级比旧版清楚，但它仍像一个项目目录，而不像一个正在更新的游戏站。

缺失：

- 全站搜索或至少静态索引搜索；
- “今天/本周”状态：事件、Patch、Codes、服务器、截止日期；
- 一条真实新手路径，而不是三个并列 CTA；
- 能代表内容质量的 Featured Guide/Build 样板；
- 职业视觉识别（真实职业头像/武器/技能图标）；
- 地图/工具/数据库入口；
- 编辑署名、更新时间、版本号和修订说明。

### Guide

现状：基本骨架是 `H1 + prose + H2 + table/list + source`。Server Transfer 约 258 词、2 张表、0 图；其它 Guide 同样没有截图/图注/目录。内容能快速扫读，但没有“跟着做”的视觉证据。

缺失：

- Hero/题图与一句话答案；
- 目录和阅读进度；
- 前置条件、区域/版本/适用日期；
- 操作步骤截图；
- 地图点位或 UI 路径标注；
- Troubleshooting；
- 变更记录、作者/校验者；
- Related Guide/Tool；
- 来源按 Claim 对应，而非只在结尾放一条链接。

### Class/Build

现状：Gladiator 约 138 词，只有两个技能 Tooltip 和“未确认”说明；其它多数职业也是 106–140 词、0 图。作为 Evidence Note 它是诚实的，作为 “Build” 页面则远远不够。

缺失：职业 Hero、武器/定位、适用版本、PvE/PvP/Group/Solo 分流、技能图标和链、Stigma、Passive、Gear、Stats、Rotation、Macro、Daevanion、Arcana、升级顺序、常见错误、Build Variant、作者实战条件和来源冲突。

判断：证据不足的页面应继续 noindex 并明确叫 Research Note；不能通过扩写泛文案或补 AI 图把它伪装成完整 Build。

### Update Log

现状：日期 H2 与段落/列表串联，约 485 词、0 图。查时间尚可，但不适合持续追踪版本。

缺失：时间线、Patch 类型 Badge、地区与生效时间、官方来源状态、受影响 Class/Guide、重要数值表、Patch Hero/系统截图、订阅/RSS，以及“本页上次复核”的明确位置。

## 可落地的页面模板与最低发布契约

以下是发布前的最低合同，不是“最好有”。如果拿不到真实素材，应延迟发布或保留 noindex，而不是用占位图、AI 生成 UI 或泛用官图冒充证据。

### 1. 首页模板

**结构**

1. 一张明确授权来源的主视觉 + 核心定位；
2. 全站搜索；
3. `Today in AION 2` 状态条（Patch、Event、Codes、Reset/截止）；
4. 三条任务路径：新手开始、选择职业、查看本周变化；
5. Featured Guide/Build，以长横幅而不是等宽 Card 墙呈现；
6. 8 职业视觉导航；
7. 数据库/Map/Timer/Planner 只在真实可用时出现；
8. Latest updates 时间线；
9. 来源方法与最近更新。

**最低真实素材**

- 1 张 1600×900 以上主视觉；
- 8 个职业识别素材（自有 Global 客户端截图或确认可用的官方素材）；
- 3 张 Featured 内容缩略图；
- 1 张真实系统/地图/战斗截图作为功能预览；
- 所有图都有来源、日期、alt 和可追溯原文件。

### 2. Guide/How-to 模板

**结构**

- Hero + 适用 Region/Patch/Last verified；
- 50–100 词 Quick Answer；
- 粘性 TOC；
- Prerequisites；
- Step-by-step，每 2–3 步至少一个真实 UI 截图；
- 奖励/成本/时间表；
- Troubleshooting；
- What changed；
- Claim-level sources；
- Related guide/tool。

**最低真实素材**

- 4–8 张自有游戏截图，展示具体菜单、NPC、地图、奖励或操作结果；
- 1 张标注过的路线/流程图；
- 1 个有信息意义的表格；
- 若引用视频，使用原 YouTube Embed，并标 Creator、地区、发布日期和时间戳；
- 正文通常应有 800–1,800 词，但以任务完整性为准，禁止为字数灌水。

Server Transfer 应至少补：入口菜单、申请界面、角色条件、目标服务器/槽位费用、确认结果各一张截图。Hard Mode 应至少补：入口/IL 要求、Frenzy/复活 UI、掉落/Fragment、Substance Morph、Ariel Board 各一张截图。

### 3. Class/Build 模板

**结构**

- Class Hero、Weapon、Role、Difficulty、Patch/Region；
- `PvE Solo / PvE Group / PvP Solo / PvP Group / Leveling` Tab；
- Build at a glance；
- Skill chain 图标行；
- Stigma/Passive/Stat priority；
- Rotation 时间轴和 Hotbar；
- Gear/Arcana 表；
- Daevanion Board 图与点法；
- Alternatives / Common mistakes；
- 作者/测试条件；
- 每个核心 Claim 的视频时间戳或客户端数据来源；
- 更新记录和相关 Planner。

**最低真实素材**

- 12–20 个真实技能/装备图标；
- 1 张完整 Daevanion Board 截图并标注路线；
- 1 张 Hotbar/Macro 截图；
- 1 张角色/武器视觉；
- 1 个 Rotation 图；
- 可选 1 个原始视频 Embed；
- 完整 Build 通常需要 1,200–2,500 词。证据不足时宁可保留 Research Note，不要扩成 AI 总结。

### 4. Codes/Event 模板

**结构**

- Active / Expired；
- Region Filter；
- 一键 Copy；
- Reward icon + 数量；
- 开始/到期时间和最后核验时间；
- 兑换步骤；
- 失败排查；
- 官方公告链接；
- Event 关联 Timer/Checklist。

**最低真实素材**

- 3–5 张真实兑换流程截图；
- 奖励图标或实际奖励截图；
- Active/Expired 数据表；
- 官方来源与每次核验日期。

### 5. Update/Patch 模板

**结构**

- 时间线而非 Card 墙；
- Region、日期、类型、Source Badge；
- TL;DR；
- Before/After 或改动表；
- 受影响职业/系统/Guide 深链；
- 官方原文和本站复核时间；
- RSS/订阅只在真实可用时展示。

**最低真实素材**

- 每个 Major Patch 1 张官方 Patch Art 或自有系统截图；
- 重要新系统至少 1 张真实界面截图；
- 不需要给每条小热修复硬塞图片。

### 6. Database/Item/Dungeon 模板

这类页面不是长文模板，而是数据产品。最低要求：

- 图标/3D 或实物截图；
- 客户端版本、Build、抽取/复核日期；
- Stats/Enhancement；
- Drop source / NPC / Dungeon；
- Map position；
- Recipe / Related items；
- 搜索与过滤；
- 数据方法与错误报告。

没有稳定数据管道前，不建议批量生成 Item/NPC/Quest 空页。

## 图片来源与版权边界

### 推荐来源优先级

1. **团队自己在 Global 客户端截取的游戏截图**：保留原图、账号/服务器隐私处理记录、捕获日期和版本；只做说明性裁切/标注。
2. **NC/Steam 的官方媒体或新闻素材**：使用前确认具体页面或媒体包的使用条款，保留源 URL、发布日期和 `© NC` 归属。Steam 商店当前提供 17 个 Trailer/Screenshot 媒体位，但“公开展示”不自动等于允许任意下载再分发：[AION 2 on Steam](https://store.steampowered.com/app/3393110/AION_2/)。
3. **Creator 视频**：优先用 YouTube 官方 Embed，不下载/截帧重托管；写清 Creator、视频名、日期、地区、时间戳。
4. **原创建的非事实图表**：Rotation、流程、比较表、路线箭头可由本站重新绘制；底层事实必须可追溯。

### 不应使用

- 从竞对 CDN 抓图、抠图或复制它们的合成版 Board/Hotbar；
- 用 AI 生成技能图标、游戏 UI、地图、奖励、职业外观或“游戏截图”；
- 用占位图假装 Guide 已经图文完善；
- 用泛用 Key Art 代替操作步骤截图；
- 未确认条款就批量提取、重托管游戏客户端图标。

本轮未找到明确覆盖 AION 2 游戏客户端素材的公开 Fan Content License。NC PLAY 的 [Guide to Content Use](https://about.ncsoft.com/en/blog-operating-policy) 只明确允许其直接制作的 NC PLAY 内容用于媒体/学术用途且建议注明来源，并要求第三方 Creator 内容另行获批；它不能自动扩大解释成 AION 2 客户端美术授权。因此，所有游戏图标/截图都应视为 NC 的受版权保护素材，发布前需要进一步确认适用条款。此处是风险控制建议，不是法律意见。

## 重构优先级

### P0：先做一个能代表质量的完整样板

不要同时“美化”全部薄页。先选一个有真实需求、可拿到真实素材的页面做样板：

1. `Expedition Hard Mode`：素材目标明确，能展示入口、规则、奖励、Fragment、Morph 和 Ariel Board；
2. `Gladiator Build`：只有在拿到 Global 客户端的技能、Board、Hotbar 和可验证完整 Rotation 后再做；
3. `Coupon Codes`：可快速做成小工具，但必须持续核验 Active/Expired。

样板通过后，再把同一媒体/来源结构复用到其它页面。

### P1：首页重构

首页从“Card 目录”改成“搜索 + Today + 三条任务路径 + Featured 样板 + 职业视觉导航 + Update 时间线”。Cards 数量应减少，尺寸和布局不再完全一致。

### P2：建立素材管道

- 每个 Guide 先写 Shot List；
- 统一截图尺寸、暗/亮 UI、马赛克规则、标注样式和文件命名；
- 建立 `source URL / creator / region / patch / captured-at / license-note / alt` 元数据；
- 发布检查阻止 `placeholder`、无 alt、无来源、无版本素材；
- Grok/UTB 交付必须包含 `outline + claims + exact video URLs/timestamps + screenshot shot list`，而不是只交一份纯文本稿。

### P3：再扩内容类型

按真实搜索意图，站点至少应规划：

- Builds / Classes；
- Skills / Stigmas / Daevanion / Arcana；
- Items / Gear / Drops / Crafting；
- Dungeons / Bosses / Expedition；
- Maps / Hidden Cubes / NPC / Routes；
- Codes / Events / Rewards；
- Timers / Daily & Weekly Checklist；
- Patch Notes / Server / Transfer；
- New player / Leveling / Factions；
- Planner / Calculator（只有可用产品，不建纯文案替代页）。

这也意味着当前的 `Home / Classes / Guides / Update Log / About` 顶层导航过窄。下一版信息架构至少要为 `Database`、`Tools/Timers/Map`、`Builds` 和 `Codes/Events` 留位置，但只有在对应内容或工具真实可用时再开放。

## 对 Grok / UTB 的新交付要求

以后不能只要求“写一篇 Guide”。应给 Bot 如下验收合同：

1. 先列 Query Intent 与用户完成任务；
2. 至少核查 3 个一手来源或明确说明不足；
3. 每个关键结论带 URL、Region、Patch 和时间戳；
4. 输出页面 Outline；
5. 输出 Screenshot Shot List：画面内容、视频时间戳、需要说明的 UI 区域；
6. 输出可合法 Embed 的视频，不下载 Creator 资产；
7. 输出表格数据和冲突项；
8. 输出 `unknown / not confirmed`，不得用推测填空；
9. 若无法取得足够真实视觉证据，标为“不可发布完整 Guide”；
10. HTML 只是预览，不得把 Bot 生成的占位图或 AI 图当成最终素材。

## 最终判断

当前版本适合作为“研究原型和来源诚实的静态站”，不适合作为完成态的 AION 2 Wiki。下一轮不应继续平均地给每页加一层 Card，而应：

1. 选择 1 个完整 Guide/Build 做真实图文样板；
2. 建立截图、图标、视频和来源元数据管道；
3. 用样板反推首页和信息架构；
4. 再决定数据库、Map、Timer、Codes 哪些能作为真实产品维护。

图片越多不代表越好；**每一张图必须解释一个用户动作、数据关系或判断依据**。泛用官图只适合 Hero，真实 Guide 的主体必须是可复核的客户端截图、图标、板图、表格和原始视频证据。
