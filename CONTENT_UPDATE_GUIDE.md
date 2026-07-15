# Metal 3D Powder 内容更新执行指南

本指南适用于 `metal3dpowder.com` 的文章、内容 hub、内链和相关 SEO 内容。任何人或 Agent 在内容改动前都必须完整阅读本文件。本站的目标不是增加文章数量，而是让工程师和采购人员更可靠地完成粉末、工艺、应用适配和 RFQ 决策。

## 1. 项目中的真实入口

- 文章源文件：`src/content/blog/{slug}.md`
- frontmatter schema：`src/content.config.ts`
- 文章生产 URL：`/posts/Alloys/{slug}/`
- 文章路由、canonical、BlogPosting、面包屑和文章布局：`src/pages/posts/Alloys/[slug].astro`
- 材料/应用/工艺 hub 与 Knowledge 精选：`src/data/contentHubs.ts`
- 材料 hub：`/materials/` 与 `/materials/{slug}/`
- 应用 hub：`/applications/` 与 `/applications/{slug}/`
- 工艺 hub：`/processes/` 与 `/processes/{slug}/`
- Knowledge：`/knowledge/`
- RFQ CTA：`src/components/RfqCta.astro`；联系内容：`src/data/contact.ts` 与 `/contact/`
- 构建产物：`dist/`，不得手工编辑

## 2. 内容策略：先修高意图 URL，不追求文章数量

本站已经有大量相近的材料 × 应用文章。开始任何内容波次前都要先审计现有 URL。

1. 获取最新 GSC **Pages** 和 **Queries** 导出，至少分别覆盖最近 3 个月和 6 个月，并记录 clicks、impressions、CTR、average position 和主要 query。
2. 当前仓库中最近可见的 GSC 基线是 `docs/gsc-performance-audit-2026-04-29.md`，已经过时。它只能作为历史参考，不能单独支持新增、合并、删除或 noindex 决策。
3. 建立“URL -> 查询组 -> 搜索意图 -> 工程决策 -> RFQ 价值”映射。优先刷新：已有曝光/点击、排名接近可见区、有明确询盘意图但回答不完整的 URL。
4. 搜索题目、slug、tags、正文和 hub，不要只查文件名：

   ```powershell
   rg -ni "关键词|同义词|牌号|工艺|应用" src/content/blog src/data/contentHubs.ts docs/seo
   ```

5. 若已有 URL 能回答相同的主要问题，补强该页，不要再建“同一牌号 + 稍微不同趋势词”的页面。
6. 新页面必须具有独立的主要意图、独立的工程决策和足够的可核验证据。只有行业新闻、趋势名或长尾关键词不同，不足以成为新 URL。
7. 对无表现近重复页，先核对最新 GSC、外链和 hub/内链角色；确认合并时，保留最强 URL并配永久重定向。不得直接删掉已有 `/posts/Alloys/` URL。

衡量质量的核心不是字数。已有内容债务包括薄页和缺少外部技术来源的页面；下一轮应优先增加**独特决策价值、证据与询盘质量**，不是继续扩大页数。

## 3. URL、frontmatter 和日期

文章文件名就是 slug。已有文件不得随意重命名；生产 URL 必须保持：

```text
https://metal3dpowder.com/posts/Alloys/{slug}/
```

新文章只使用 `src/content.config.ts` 已定义字段：

```yaml
---
title: CuCrZr Powder for a Specific Engineering Decision
description: Explain the decision, constraints, evidence, and RFQ value without keyword stuffing.
pubDate: 2026-07-15T10:00:00+08:00
updatedDate: 2026-07-15
category: Copper
tags:
  - CuCrZr
  - LPBF
  - application name
featured: false
---
```

- `pubDate` 是首次真实发布日期。更新旧文不得将它改成今天。
- `updatedDate` 只在事实、来源、决策表、适用边界或 RFQ 指引发生实质变化时添加/更新；纯排版或标点修改不改日期。
- frontmatter 当前没有 `canonical`、`image`、`draft` 字段，不要自行加入。canonical 由文章路由按文件名自动生成。
- title/description 必须独特并与可见 H1、开头答案及正文同一意图。不要用虚假年份或“best/ultimate”制造新鲜感。
- `category` 和 tags 复用现有拼写与粒度，避免 `CuCrZr`、`CuCrZR`、`copper chrome zirconium` 等同义标签分裂。
- `featured: true` 会影响精选展示，不是“新文章默认值”。只有真正的核心选择页、主要规格页或跨应用 pillar 才使用。

已有 slug 若必须迁移，先明确旧 URL -> 新 URL 的 301、更新所有内链/hub、核对 canonical 与 sitemap，再执行；不得移除旧 `/posts/Alloys/` 兼容性。

## 4. 技术声明必须可核验

### 4.1 粉末与成品性能不能混为一谈

正文中的每个关键数字都要注明适用条件和直接来源。

- 粉末层面分别说明：牌号/化学成分版本、粒度分布（PSD）及测量方法、氧/氮等间隙元素、卫星粉/球形度、流动性、松装/振实密度、批次和回用状态。
- 工艺层面说明适用路线：LPBF、DED、binder jet 或 MIM。一个路线的 PSD、氧限、收缩或性能不能直接移植到另一条路线。
- 零件层面说明：设备/参数窗口、致密度、取向、热处理、HIP、试样位置、机加工状态、测试温度和方法。
- 不得把粉末供应商典型数据、锻材/铸材值或单篇论文 coupon 值写成打印成品保证。
- 不得将“适合某应用”写成已通过航空、医疗、核能、压力设备或客户认证。法规/标准适配需要项目级材料追溯、验证和批准。
- 公差、最小壁厚、表面粗糙度、孔/通道、收缩、密度和机械性能只能作为有条件的起点；最终接受标准来自图纸、采购规范、样件/试样和双方确认。

使用一手、可追溯来源：ISO/ASTM 标准官方页面或正式标准、材料/设备厂商正式数据表、同行评审论文、政府/大学/研究机构报告。标准需写明编号与版本/年份；没有标准全文时不得猜条款。来源链接应直接支持附近的数值或结论，不用搜索结果、聚合转载或 AI 摘要。

写作前建议建立临时声明表：`声明 | 数值/结论 | 粉末/试样/零件 | 条件 | 来源 | 可否作为报价承诺`。无法核验的精确值删除，或明确标为待供应商 COA、试样和项目验证。

### 4.2 价格、案例和商业声明

- 价格会变化。只有用户提供的有效报价或带日期的公开可靠来源才能支持价格更新，并注明币种、单位、数量、规格、地区、时间和“仅供参考”。不能把起售价写成固定成交价。
- 只有证据充分且获得发布许可时才能写真实客户、订单、机器批次、节省比例、寿命或认证结果。
- 无客户证据时使用“代表性选择场景”“假设性 RFQ 示例”，不得包装成案例研究，也不得虚构性能改善数字。
- 不添加未经核实的证书、产能、交期、库存、全球供应能力、客户名称或独家工艺声明。

## 5. 每篇文章应提供的工程决策

不要套用同一模板机械扩写。根据搜索任务组织内容，但通常至少需要：

1. 开头直接答案：什么时候适用、什么时候不适用、需先确认什么。
2. 决策表：候选牌号/路线、适用条件、主要风险、所需证据。列数保持克制，单元格简短，移动端可横向查看。
3. 粉末规格：chemistry、PSD、oxygen、flow/apparent density、批次文件，以及它们为何影响目标工艺。
4. 工艺与成品边界：打印/烧结路线、热处理/HIP、支撑或收缩、机加工、清洁和检验。
5. 替代路线：明确何时另一合金、锻材、CNC、铸造、MIM 或 binder jet 更合理。
6. 验收证据：COA、批次追溯、筛分/取样、试样、密度、显微、机械/腐蚀/功能测试等按项目选择。
7. RFQ 清单与直接来源。

粉末 RFQ 通常应让读者准备：准确牌号与规范、目标 AM/MIM/binder jet/DED 路线、PSD 范围及测法、化学/氧限、试用或量产数量、批次和包装、回用策略、COA/追溯/测试文件、目的国、应用与关键成品要求、目标时间。未知条件要标记待确认，不能替客户发明规格。

## 6. Hub、内链、JSON-LD 和移动表格

### 6.1 Hub 分配

新建或实质重构文章后检查 `src/data/contentHubs.ts`：

- 文章 ID 就是文件名去掉 `.md`。
- 只把文章加入明确相关的 material、application、process hub；标题中偶然出现某材料或行业，不等于属于该 hub。
- hub 归属要让读者形成清楚的选择路径。不要为了曝光把每篇文塞进多个不相干 hub。
- `knowledgePostIds` 只放能跨页面支持规格、比较或选型的核心 pillar，不是所有新文的收录清单。
- 若主题已被某 hub 中的现有 pillar 覆盖，优先从现有文章上下文链接，而不是再建 hub 或重复 pillar。

修改后检查引用 ID 是否真实存在：

```powershell
rg -n "文章-slug" src/content/blog src/data/contentHubs.ts
```

### 6.2 内链与结构化数据

- 所有文章链接使用真实稳定路径并带尾斜杠：`/posts/Alloys/{slug}/`。
- 优先链接一个上位材料/规格页、一个真正相邻的比较或应用页，以及 `/contact/`/现有 RFQ CTA；不要在每段堆相同锚文本。
- 内链锚文本应说明具体牌号或决策，避免 generic “learn more”。
- 相关文章、hub breadcrumb、BlogPosting、canonical 和日期由 `src/pages/posts/Alloys/[slug].astro` 生成。不要在 Markdown 中硬编码第二套 JSON-LD。
- 若修改 title、description、日期、category/tags，应在生成 HTML 中确认 canonical、Open Graph、BlogPosting 与可见内容一致。

文章页已经在 `src/pages/posts/Alloys/[slug].astro` 对表格和 blockquote 做响应式处理。Markdown 表格仍需控制列数和单元格长度：优先 3--5 列、短句和可比较单位；复杂证据拆成两张表，不用固定像素宽度或把整段文字塞进单元格。窄屏必须实际检查横向滚动和正文不溢出。

### 6.3 图片

本站不把装饰图数量当质量指标。当前文章 schema 没有图片字段，不要为了单篇文章私自扩 schema 或页面布局。只有图片能解释粉末形貌、粒度、工艺、零件特征、失效或检测时，才作为受版权许可的正文图并同步处理 alt、尺寸、压缩和来源。不得使用看似真实却含错误孔道、颗粒或设备结构的 AI 图作为技术证据。

## 7. 本地构建与链接验收

在仓库根目录执行：

```powershell
npm run build
npx wrangler@4.111.0 deploy --dry-run
```

`npm run build` 已包含 `astro check` 和静态构建，必须 0 error。之后运行本地预览：

```powershell
npm run preview
```

至少人工打开目标文章、所属 hub、`/knowledge/`（若加入精选）、`/blog/` 与 `/contact/`，并检查桌面和窄屏。还要检查：

- 目标文章只生成在 `dist/posts/Alloys/{slug}/index.html`；没有意外新 URL。
- 唯一 canonical 为 `https://metal3dpowder.com/posts/Alloys/{slug}/`，只有一个 H1。
- BlogPosting 与 Breadcrumb JSON-LD 可解析，`datePublished` 保持原日，`dateModified` 只反映实质更新。
- title/description 与已有页不重复，文章在预期 hub 出现，相关文章和 CTA 上下文合理。
- 新增/修改的站内链接均落到生成文件；外部技术来源打开到支持声明的具体页面。
- Markdown 表格在手机宽度可用，正文、代码和长 URL 不造成整页横向溢出。
- sitemap 包含应索引文章和 hub，不把低价值分页或标签归档误加进去。
- `git diff --check` 通过，diff 不含 `dist/`、密钥、凭据、私人报价或任务外改动。

可用下面的 PowerShell 只读检查目标生成页元数据（替换 slug）：

```powershell
$slug = 'example-slug'
$html = Get-Content -Raw "dist/posts/Alloys/$slug/index.html"
@('canonical', 'application/ld+json', '<h1', 'article:published_time', 'article:modified_time') |
  ForEach-Object { if ($html -notmatch [regex]::Escape($_)) { throw "Missing: $_" } }
```

构建没有自动证明所有技术事实正确；来源核验、意图去重和移动端审阅同样是发布门槛。

## 8. 上线与生产验收

只有在本次改动、远端推送和部署均已获得明确授权时，才执行：

```powershell
git add <本次明确修改的文件>
git commit -m "Update <metal powder topic> content"
git push origin main
npx wrangler@4.111.0 deploy
```

`4.111.0` 是本指南当前验证过的 Wrangler 版本；升级部署工具应作为单独改动验证。如果 Cloudflare Git 集成是当前唯一部署链路，`git push` 即为部署触发器，不要同时再手动部署。

生产版本传播后逐项验证：

```powershell
curl.exe -sSI "https://metal3dpowder.com/posts/Alloys/{slug}/"
curl.exe -sSI "https://metal3dpowder.com/sitemap-index.xml"
curl.exe -sL "https://metal3dpowder.com/posts/Alloys/{slug}/" | Select-String -Pattern "canonical|application/ld\+json|<h1"
```

- 生产 URL 返回 `200`；HTTP/www 规范化后为 HTTPS apex，不产生额外跳转链。
- canonical、H1、description、可见日期、JSON-LD、表格、内链、hub 卡片、RFQ CTA 和 sitemap 与本地一致。
- 旧 URL（若本次有迁移）返回正确永久重定向，并保留路径意图；不得出现软 404 或 canonical 指向不存在页面。
- 不因文章更新改变首页产品/价格、联系人、RFQ 邮件构造或 Cloudflare 配置。
- 对重要更新 URL 在 GSC 请求重新抓取；用相同 query/page 组在 2--8 周内观察 impressions、CTR、position 和高质量询盘，不以总文章数或短期全站波动判断成功。
