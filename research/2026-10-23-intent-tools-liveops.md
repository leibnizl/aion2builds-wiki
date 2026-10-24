# AION 2 工具、实时状态与访问意图审计

检查日期：2026-10-23。范围：Similarweb 导出的 `liveops_servers_codes.csv`、`maps_locations_rifts.csv`、`access_release_platform.csv`、`tools_competitors_navigation.csv`，以及 `other_verify.csv` 中的状态、计数、Meter、DirectX 与崩溃词；另对 16 个代表意图进行了当前 Web SERP 抽查。

## 结论先行

1. **不能再把所有词都交给 Guide 模板。** `server status`、`rift timer`、`player count`、`interactive map` 和 `dps meter` 的头部结果分别是实时面板、倒计时、数据图表、可筛选地图和 Windows 客户端。纯文章不是同一种产品。
2. **最值得先做的不是完整数据库，而是三个窄而可维护的产品：** `/status`（官方维护公告聚合，未接入可信探针前不声称全区实时）、`/tools/rift-timer`（经过 Global 区服实测的倒计时）和 `/codes`（active/expired/source/last checked）。
3. **访问类词应做官方入口页。** `download`、`Steam`、`system requirements`、`controller support` 的事实来源已经足够明确；本站应解释平台差异并把用户送到 Steam/PURPLE，绝不镜像安装包。
4. **Steam player count 可以做，但只能叫 Steam player count。** Valve/Steam 数据不含 PURPLE。把 Steam CCU 写成全游戏玩家数，或把服务器拥堵值写成玩家人数，都会是虚假精度。
5. **Interactive map 与 DPS meter 都不是“补一篇文案”的任务。** 前者需要可更新坐标数据、地图交互、筛选与进度状态；后者还需要 Windows 应用、Npcap/数据包解析、版本适配、签名、隐私和 NCGuard/政策风险处理。两者都应后置。

## Similarweb 读数应如何解释

以下只保留每组一个代表词，**没有把变体相加**。`volume_28d` 是本次导出提供的全球 28 天估算，不是本站可获得点击，也不是目标英语市场的确定搜索量；`average_volume` 与 28 天值的巨大差距显示 Global 上线期的短期爆发。

| 合并后的意图 | 代表词 | 28 天量 | 平均量 | 导出中的领先站点 | 初步产品判断 |
| --- | --- | ---: | ---: | --- | --- |
| 服务器是否可用 | `aion 2 server status` | 158,180 | 2,931 | talentbuilds.com | 实时/准实时状态面板 |
| Rift 下一次何时开 | `aion 2 rift timer` | 105,600 | 1,419 | aion2hub.com | 工作倒计时 |
| 当前在线人数 | `aion 2 player count` | 100,700 | 2,290 | steamdb.info | Steam 数据面板 |
| 维护是否进行中 | `aion 2 maintenance` | 94,950 | 796 | Steam | 官方公告聚合 + 状态 |
| 可用兑换码 | `aion 2 codes` | 74,620 | 253 | thegamer.com | 高频更新的状态页 |
| 服务器转移 | `aion 2 server transfer` | 65,500 | 462 | Steam | 时效工作流/检查单 |
| 地图找点 | `aion 2 interactive map` | 113,080 | 2,836 | questlog.gg | 真正的交互地图 |
| Hidden Cube 位置 | `aion 2 hidden cube locations` | 45,290 | 171 | game8.co | 地图 + 路线 + 进度 |
| DPS Meter | `aion 2 dps meter` | 103,850 | 1,466 | YouTube | 桌面工具/日志服务 |
| 指定品牌工具 | `notmeter aion2` | 37,670 | 318 | notmeter.com | 品牌导航，不应截流 |
| Steam 图表 | `aion 2 steam charts` | 203,630 | 2,359 | steamdb.info | 第三方数据导航/图表 |
| 官方 Steam 入口 | `aion 2 steam` | 79,320 | 6,724 | Steam | 官方导航 |
| 下载 | `aion 2 download` | 45,660 | 16,397 | PURPLE | 官方导航 + 安装说明 |
| 手柄支持 | `aion 2 controller support` | 27,000 | 727 | Reddit | 官方状态 + 设置说明 |
| 配置要求 | `aion 2 system requirements` | 14,550 | 1,627 | Steam | 官方规格参考页 |

`other_verify.csv` 的抽查进一步说明必须先合并意图、再决定页面：`aion 2 steamchart`（9,120）、`aion 2 status`（5,180）、`aion 2 playercount`（4,030）都是上表意图的变体，不应再造页面；`aion 2 directx 12 not supported`（3,680）和完整崩溃报错 `the ue aion2 game has crashed and will close`（2,400）则是独立排障任务，不能塞进 player-count 或 download 页面。

### 数据污染与不可相加说明

- 同一关键词可能同时来自 `phrase_match`、`popular`、`related`，而且拼写、空格、词序和语言变体高度重叠，因此体量不可相加。
- 这些是 **Worldwide** 数据，不代表英语 Global 用户，更不代表本站最终可获得的点击。
- `related` 会混入品牌导航、旧版本、其他地区、错误拼写甚至不同实体。例如 `notmeter` 明显是品牌词，`locati0n` 是错误拼写，`aion 2.0` 也不能直接解释为本作的明确页面需求。
- 很多头部词的 zero-click rate 很高；需求强不等于自然点击强。状态、时间和当前人数常会直接在摘要中得到答案。
- 因此这里用 Similarweb 做**相对排序和产品类型识别**，不做流量预测，也不把多行做 TAM 求和。

## 当前 SERP：16 个代表意图及产品形态

下面记录 2026-10-23 当前 Web 搜索中可见的前部结果。结果会因地区、语言和个性化变化；表格用于判定“用户期待什么产品”，不是承诺永久排名。

| 代表查询（已合并变体） | 当前可见的 3–5 个代表结果 | 结果形态 | 本站应满足的意图 |
| --- | --- | --- | --- |
| `aion 2 server status` | [QuestLog live status](https://questlog.gg/aion-2/de/server-status)、[gaming.tools](https://aion2.gaming.tools/server-status)、[AION2 Status](https://www.aion2status.com/en/server-status/)、[LUM.GG](https://lum.gg/aion-2/server-status)、[Aion 2 DB](https://aion2.tools/servers) | 实时卡片、区服筛选、历史、维护横幅；部分站点只显示“unavailable” | 工作状态页，不是“如何检查服务器”的文章 |
| `aion 2 maintenance today` | [NC notices](https://aion2.plaync.com/en-us/board/notice/list?redirect=false)、[Steam announcements](https://steamcommunity.com/app/3393110/allnews/)、[AION2 Status](https://www.aion2status.com/en/server-status/)、[Daeva Guides](https://daevaguides.com/en/guides/server-status-maintenance/index.html) | 官方公告 + 第三方本地时区/历史聚合 | 当前窗口、预计结束、官方原文、最后检查时间 |
| `aion 2 rift timer` | [Aion2Data timers](https://aion2data.com/timers)、[AION2 Hub timer](https://aion2hub.com/tools/event-timer)、[Aion2RiftTimer](https://aion2rifttimer.com/)、[AION2 Wiki timer](https://aion2wiki.wiki/rift-timer/)、[AION 2 Handbook](https://aion2handbook.com/rift-timer/) | 运行中的倒计时、服务器时区、全天表、提醒 | 真计时器；文章只能做辅助说明 |
| `aion 2 player count` / `steam charts` | [SteamDB charts](https://steamdb.info/app/3393110/charts/)、[Steam dashboard](https://steamdb.com/en/tools/steam-charts/3393110-aion-2)、[AION2 Companion](https://www.aion2companion.com/player-count/)、[AION2 Launch Stats](https://aion2launchstats.com/) | 当前 CCU、24h/历史图、采样时间、Steam-only 限制 | 数据面板；必须把 Steam 与 PURPLE 分开 |
| `aion 2 codes` | [Vi.ki](https://aion2.vi.ki/codes-and-coupons)、[Daeva Guides](https://daevaguides.com/en/guides/codes/)、[Aion2Builds](https://aion2builds.com/codes/)、[AION2 Wiki](https://aion2wiki.wiki/codes/) | active/expired 表、复制、兑换步骤、来源；旧页会继续把过期码标 active | 新鲜度产品；“0 active”也必须明确显示 |
| `aion 2 server transfer` | [NC official notice](https://aion2.plaync.com/en-us/board/notice/view?articleId=6abd2d50a279104f7d9d5ee2)、[LUM.GG](https://lum.gg/aion-2/guides/how-to-transfer-servers)、[AION 2 Wiki guide](https://aion2-guide.wiki/guides/server-transfer)、[本站现有页](https://aion2builds.com/guides/server-transfer/) | 日期/阶段、地区时段、资格、不可逆提醒、检查单 | 时效工作流；现有页应持续更新而非再建近义页 |
| `aion 2 interactive map` | [MetaBot map](https://metabot.gg/en/aion-2/map)、[AION2 Hub maps](https://aion2hub.com/maps)、[InteractiveMap.app](https://interactivemap.app/aion2/)、[Aion2 Atlas](https://aion2atlas.app/map/) | 多区地图、图层、搜索、进度、路线、分享链接 | 真地图；静态卡片和文字清单不满足 |
| `aion 2 hidden cube locations` | [MetaBot cubes](https://metabot.gg/en/aion-2/hidden-cubes)、[AION2 Status cubes](https://www.aion2status.com/en/hidden-cubes/)、[SenseOS](https://senseos.gg/guides/aion-2/hidden-cubes/)、[Aion2.gg map](https://aion2.gg/map/hidden-cubes)、[CoGM map](https://cogm.app/aion2/map) | 候选刷新点、地图图层、进度、钥匙/奖励、路线 | 地图 + 解释；纯“全部位置”文章会迅速失真 |
| `aion 2 spacetime rift` | [LUM.GG guide](https://lum.gg/aion-2/guides/spacetime-rift-guide)、[Aion2Rift map](https://aion2rift.com/spacetime-rift/)、[AION2 Hub timer](https://aion2hub.com/tools/event-timer)、[Aion2Data](https://aion2data.com/timers) | 教程、入口候选点和倒计时混合 | 一页解释机制，明确链接到 timer/map；不要把两种任务混成一块长文 |
| `aion 2 dps meter` | [开源 Aion DPS Meter](https://github.com/SkeeveAN/Aion-DPS-Meter)、[Abyss Logs](https://abysslogs.com/)、[QuestLog desktop app](https://questlog.gg/aion-2/en/app)、[另一开源 meter](https://github.com/cyberbadger6969/aion2-dps-meter) | Windows 客户端、Npcap、Overlay、战斗日志、排行 | 用户要可下载工具；本站无客户端时不要以 generic DPS meter 为主承诺 |
| `notmeter aion2` | [NotMeter](https://notmeter.com/)、[Reddit comparison](https://www.reddit.com/r/Aion2/comments/1x7k54f/what_dps_meter_should_i_use/)、[Reddit meter comparison](https://www.reddit.com/r/Aion2/comments/1x0z2m4/dps_meters_comparison/) | 品牌官网/下载与口碑比较 | 官方品牌导航；本站应跳过独立截流页 |
| `aion 2 download` | [Steam store](https://store.steampowered.com/app/3393110/AION_2/)、[PURPLE AION2](https://purple.plaync.com/game/aion2)、[PURPLE download](https://purple.plaync.com/download)、[NC official site](https://aion2.plaync.com/en-us/index) | 官方下载/商店入口 | 官方导航 Hub；不托管安装包，不放第三方“高速下载” |
| `aion 2 system requirements` | [Steam store](https://store.steampowered.com/app/3393110/AION_2/)、[官方 KR 下载/规格页](https://aion2.plaync.com/ko-kr/download/index)、[PURPLE download](https://purple.plaync.com/download) | 官方最低/推荐配置、存储、DirectX、下载 | 规格表 + 版本/地区说明 + 官方入口 |
| `aion 2 controller support` | [NC Launch FAQ](https://lounge.plaync.com/feed/82939?country=US&locale=en-US)、[LUM.GG](https://lum.gg/aion-2/faq/does-aion-2-have-controller-support)、[Vi.ki](https://aion2.vi.ki/controller-support)、[Aion2.gg FAQ](https://aion2.gg/launch/faq) | 官方一句话状态 + 社区实测设置 | 参考页/设置指南；答案是“可玩，但未获官方支持” |
| `aion 2 steam` | [Steam store](https://store.steampowered.com/app/3393110/AION_2/)、[Steam Community](https://steamcommunity.com/app/3393110/)、[NC launch announcement](https://about.ncsoft.com/en/news/article/aion2_update_20260930) | 官方商店、社区和新闻 | 导航，不需要一篇泛介绍抢官方品牌词 |
| `AION 2 crash on startup` / exact error | [NC crash/fatal-error help](https://help.plaync.com/faq/aion2global?faqNo=7248)、[NC startup/NCGuard help](https://help.plaync.com/faq/aion2global?faqNo=7254)、[SenseOS sourced summary](https://senseos.gg/guides/aion-2/crashes-fatal-errors/)、[社区排查线程](https://www.reddit.com/r/Aion2/comments/1wiwvnr/fix_aion_2_launch_scale_test_crashing_closing/) | 错误级排障、官方步骤、社区实验 | 独立 Troubleshooting Hub；按错误码拆页，不写万能“更新驱动”模板 |

## 产品决策与目标 URL

优先级含义：P0 是下一轮可交付且能真实满足意图；P1 是有清晰价值但需数据接入或持续编辑；P2 是重产品/高风险，暂不以 SEO 页面假装完成。

| 优先级 | 目标 URL | 文章 / 工具 / 导航 | 必备模块 | 数据源依赖 | 维护成本与发布门槛 |
| --- | --- | --- | --- | --- | --- |
| **P0** | `/status` | 准实时工具 + 官方导航 | 当前维护横幅、区服/区域、开始与预计结束、本地时区、官方原文、最后成功检查、历史事件、数据不可用状态 | [NC notices](https://aion2.plaync.com/en-us/board/notice/list?redirect=false)、[Steam news](https://steamcommunity.com/app/3393110/allnews/)；如做探针，必须先验证自己的合法、稳定数据端点 | 公告轮询中等；在没有可信探针前只叫“maintenance/status hub”，不能声称所有区域实时在线 |
| **P0** | `/tools/rift-timer` | 工作工具 | region/service 选择、当前状态、下一次、全天表、服务器时区与本地时区、提醒开关、来源/版本、手动校准、异常提示 | 官方/客户端 schedule table + Global 实服核验；不能直接复用 KR/TW 时刻 | 前端计时低，数据验证高；每次时间表/版本变化重新核验 |
| **P0** | `/codes` | 新鲜度工具页 | 0-active 状态、active/expired、地区、奖励、到期时间、复制、兑换步骤、官方来源、last checked、变更记录 | NC notice board、官方 coupon UI、官方社媒人工复核 | 低工程、中编辑；每天或事件触发检查。2026-10-21 的可靠页面显示 Global 当前 0 active，而旧页仍显示过期码，说明时间戳是核心产品功能：[实例](https://aion2builds.com/codes/) |
| **P0** | `/play` 或 `/download` | 官方导航 Hub | Steam/PURPLE 两个官方按钮、适用地区、账户/角色互通说明、安装步骤、100 GB 存储提示、官方 Support、常见安装错误入口 | [Steam](https://store.steampowered.com/app/3393110/AION_2/)、[PURPLE](https://purple.plaync.com/download)、[Launch FAQ](https://lounge.plaync.com/feed/82939?country=US&locale=en-US) | 很低；只链接官方安装源，平台信息变化时复核 |
| **P0** | `/system-requirements` | 参考文章 | min/recommended 对照、Windows 10/11 64-bit、CPU/GPU/RAM、DirectX 12、100 GB、SSD、分辨率/画质条件、last verified、download CTA | [Steam official listing](https://store.steampowered.com/app/3393110/AION_2/)；KR/TW/mobile 规格若引用必须单独标服务区 | 低；每次商店规格变化对照更新。Global 页不要把 KR/TW mobile 条件写成 Global 承诺 |
| **P0** | `/guides/server-transfer`（刷新现有页） | 时效工作流 | 当前阶段/是否开放、地区时段、本地时间、资格条件、搬前 checklist、哪些不转移、费用、不可逆提醒、官方 CTA、归档状态 | [NC notice](https://aion2.plaync.com/en-us/board/notice/view?articleId=6abd2d50a279104f7d9d5ee2) + 官方 Support/Steam 公告 + 游戏内可用性 | 活动期每日检查；窗口结束后显式标“closed/archived”，不能保留“Live”旧状态 |
| **P1** | `/tools/player-count` | 数据工具 | current Steam CCU、采样时间、24h peak、7d/30d 图、缺口标记、方法、Steam-only 警示、SteamDB 外链 | Valve current-player endpoint / 自有定时采样；历史可链接 [SteamDB](https://steamdb.info/app/3393110/charts/) | 需 5–10 分钟采样和缺口监控；绝不估算 PURPLE。可参考清晰披露范围的 [Launch Stats](https://aion2launchstats.com/) |
| **P1** | `/controller-support` | 官方状态 + 实测指南 | 官方结论、Windows/Steam/PURPLE、已测试设备与客户端版本、默认布局截图、重绑/目标设置、菜单限制、Steam Deck 边界、last tested | [NC Launch FAQ](https://lounge.plaync.com/feed/82939?country=US&locale=en-US) + 本站实际设备测试 | 低到中；“可玩”不等于“官方支持”，未实测的手柄不能写兼容 |
| **P1** | `/support` + `/troubleshooting/{error}` | 官方导航 + 错误级文章 | 官方 ticket CTA、错误原文/码、适用平台、诊断顺序、可逆步骤、收集日志、升级至官方 Support | [NC Support](https://help.plaync.com/faq/aion2global)、具体 FAQ/patch notes、本机复现 | 中到高；按精确错误建页。NC 官方已警告某些 Overlay/监控程序会冲突：[crash FAQ](https://help.plaync.com/faq/aion2global?faqNo=7248) |
| **P1** | `/guides/spacetime-rift` | 图文 Guide，链接工具 | unlock/入口/地图图、10 分钟窗口、任务、常见找不到原因、Global 与 KR/TW 差异、timer/map CTA | 官方/客户端数据 + 实服截图/原创标注图 | 中；Guide 不复制计时逻辑，统一调用 timer 数据 |
| **P2** | `/map` | 重型工作工具 | 多区底图、缩放、图层、搜索、坐标/分享、found tracker、过滤、路线、版本、问题反馈 | 获准使用的地图底图；可重建且版本化的 client/自有坐标数据；用户纠错 | 很高。MetaBot 已有 9 地区、333 区域、进度同步和客户端版本说明；没有数据流水线时不要发布“interactive map”：[对照](https://metabot.gg/en/aion-2/map) |
| **P2** | `/map/hidden-cubes` | 地图子产品 | 候选点而非单一“准确点”、spawn group、key/reward、nearest teleport、路线、完成状态、数据版本 | 同一地图管线 + Global client 数据/实测 | 很高；竞对公开数据从 226 个标记到 3,722 个候选点差异巨大，证明来源与版本比文章字数更重要：[MetaBot](https://metabot.gg/en/aion-2/hidden-cubes)、[SenseOS](https://senseos.gg/guides/aion-2/hidden-cubes/) |
| **P2 / 暂缓** | 不以 `/tools/dps-meter` 承诺产品 | 桌面工具；可先做安全说明页 | 若真做：签名 Windows app、Npcap 说明、Overlay、日志/隐私、卸载、版本兼容、故障支持、政策风险；若只写文：明确本站不提供 Meter | 网络包解析、每版协议、Npcap、代码签名、后端日志；[开源实现](https://github.com/SkeeveAN/Aion-DPS-Meter)展示了真实工程面 | 极高且有账户/安全风险。NC 规则禁止干扰或获取不公平优势的第三方程序，并保留裁量：[Code of Conduct](https://help.plaync.com/faq/aion2global/view?faqNo=7164)。NC 的 crash FAQ 还要求排查第三方 Overlay |
| **Skip** | 不建 `notmeter-*` 独立页 | 品牌导航 | 最多在“第三方工具风险/对比”中客观提及并直链官网 | [NotMeter](https://notmeter.com/) | 这是明确品牌词；做仿品牌落地页既不满足下载意图，也增加信任风险 |

## 关键数据边界

### Server status 不是 player count

[gaming.tools](https://aion2.gaming.tools/server-status) 明确把其数值定义为游戏报告的 congestion 百分比，并声明“不是玩家人数”；[AION2 Status](https://www.aion2status.com/en/server-status/) 则只对 Europe 做每分钟连接探测，其他地区跟随官方维护公告。两者证明一个可信状态页必须公开：每个地区到底是 API、连接探针、公告还是“no data”。

本站不应复制 QuestLog 等页面显示的绝对在线人数，除非能复现来源、采样和含义。安全的第一版是“官方维护/中断聚合 + 数据不可用状态”，不是编造 `Online`。

### Player count 只能覆盖 Steam

[AION2 Launch Stats](https://aion2launchstats.com/) 将实时数定义为 Steam Web API 的 concurrent players，并明确不含 PURPLE；[AION2 Companion](https://www.aion2companion.com/player-count/) 也把 PURPLE 标为 NC 未公开数据。目标标题和所有图例都应包含 `Steam`，不能使用“total AION 2 players”。

### Rift timer 必须版本化和分区服

当前结果之间已经存在 Global 与 KR/TW 时刻表差异。[Aion2Data](https://aion2data.com/timers) 同时显示客户端表与 Global reported schedule，[AION2 Hub](https://aion2hub.com/tools/event-timer) 的页面内容还包含另一服务区时区说明。发布前必须在 Global 具体 region 实测锚点；页面要展示 `service / region / source / last verified`，倒计时异常时宁可显示“待确认”。

### Codes 的价值在 freshness，不在长度

2026-10-21 检查的 [Aion2Builds codes](https://aion2builds.com/codes/) 显示 Global 0 active，并把 `TAKEFLIGHTAION2` 标为 10 月 13/14 日过期；2026-10-02 检查的 [旧 AION2 Wiki 页面](https://aion2wiki.wiki/codes/) 仍把它列为 active。可见“last checked、expires、source、active/expired 自动迁移”比再写 1,000 字背景更能赢得信任。

### DPS Meter 的 SERP 要求与政策风险同时存在

头部产品不是网页小组件。[开源 Aion DPS Meter](https://github.com/SkeeveAN/Aion-DPS-Meter) 需要 Windows、Npcap、实时包解析、Overlay、更新器和可选日志上传；[Abyss Logs](https://abysslogs.com/) 还提供上传、排行榜和服务器成本。与此同时，NC 的 [Code of Conduct](https://help.plaync.com/faq/aion2global/view?faqNo=7164) 禁止用第三方程序干扰服务或获得不公平优势，且是否违规由 NC 裁量；这不是“passive = 官方批准”。在拿到明确书面边界前，不建议本站分发或背书第三方可执行文件。

## 推荐执行顺序

### P0：先把可诚实维护的窄产品做完

1. 刷新现有 `/guides/server-transfer`，加当前开放/关闭状态、地区本地时段与归档逻辑。
2. 上线 `/codes`：即便 0 active，也提供可靠状态、过期记录和官方变更来源。
3. 上线 `/download`（或 `/play`）与 `/system-requirements`，全部使用 Steam/PURPLE/NC 官方链接。
4. 建 `/status` 的官方公告聚合第一版；无可信 live 数据的地区显示 `No verified live signal`。
5. 只在完成 Global 实服锚点验证后发布 `/tools/rift-timer`。

### P1：接入稳定数据后再扩

1. 用 Steam API 自采样做 `/tools/player-count`，从第一天就标 Steam-only 和采样缺口。
2. 通过原创客户端截图完善 `/controller-support` 与 `/guides/spacetime-rift`。
3. 建 `/support`，先覆盖 NC 已有官方答案的 crash/fatal/NCGuard 问题。

### P2：当作产品项目，不当作内容填充

1. Interactive map 先解决数据权利、底图、坐标导入、版本差异和纠错流程，再排前端。
2. Hidden Cube 是 map 的图层/落地页，不应另起一套静态数据。
3. DPS meter 需要单独的桌面产品与政策评估；没有这些能力时，只做客观安全/官方状态说明，不抢 generic `dps meter` 的下载承诺。

## 不应做的事

- 不把 15 个变体的 Similarweb volume 相加后宣称“百万搜索量”。
- 不把 server congestion、角色数、排队人数、Steam CCU 和全平台玩家数混为一谈。
- 不用一篇长文冒充 timer、map、status 或 meter。
- 不为 `NotMeter`、`QuestLog`、`SteamDB` 等明确品牌导航词建仿冒落地页。
- 不把 KR/TW schedule、mobile 规格或地图数据无标识地写进 Global 页面。
- 不托管 PURPLE/Steam 安装包，不分发来源不明的 DPS meter 可执行文件。
- 不把 `related` 中的错拼、旧版本和完整报错句机械批量生成薄页。

最终原则：**页面类型由用户任务决定，而不是由现有 Guide 模板决定；实时声明必须有可观测数据，官方导航必须把用户送到官方，重型工具必须先有可维护的数据管线。**
