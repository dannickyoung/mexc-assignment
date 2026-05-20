"use client";

import { LanguageProvider, useT, useLanguage } from "@/components/deck/LanguageContext";
import { ReportSidebar, type Section as SidebarSection } from "@/components/report/Sidebar";
import { XanthusMark } from "@/components/deck/XanthusMark";
import { XanthusWordmark } from "@/components/deck/XanthusWordmark";
import { MexcLogo } from "@/components/deck/MexcLogo";

export default function ReportPage() {
  return (
    <LanguageProvider>
      <ReportContent />
    </LanguageProvider>
  );
}

function ReportContent() {
  const t = useT({
    en: enContent,
    zh: zhContent,
  });

  const sections: SidebarSection[] = t.sections.map((s) => ({
    id: s.id,
    num: s.num,
    title: s.navTitle,
  }));

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        <ReportSidebar sections={sections} />

        <main className="flex-1">
          <div className="relative mx-auto max-w-3xl px-8 py-16 lg:px-12 lg:py-20">
            <LanguageToggle />

            <Header t={t} />

            {/* 01 Executive Summary */}
            <Section id="summary" num="01" title={t.sections[0].title}>
              {t.summary.paras.map((p, i) => (
                <P key={i}>{p}</P>
              ))}
              <Callout>{t.summary.callout}</Callout>
            </Section>

            {/* 02 Opportunity */}
            <Section id="opportunity" num="02" title={t.sections[1].title}>
              <P>{t.opportunity.intro}</P>
              <GapList items={t.opportunity.pillars} />
              <P>{t.opportunity.close}</P>
            </Section>

            {/* 03 Brand Research */}
            <Section id="brand-research" num="03" title={t.sections[2].title}>
              <H3>{t.brandResearch.h1}</H3>
              <P>{t.brandResearch.p1}</P>
              <div className="my-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="flex items-center justify-center">
                  <MexcLogo width={160} />
                </div>
                <div className="mt-5 flex items-center justify-center gap-6">
                  <Swatch hex="#1463FE" label="Blue Ribbon" />
                  <Swatch hex="#509AD0" label="Shakespeare" />
                  <Swatch hex="#000000" label="Black" />
                </div>
              </div>
              <H3>{t.brandResearch.h2}</H3>
              <P>{t.brandResearch.p2}</P>
              <P>{t.brandResearch.p3}</P>
            </Section>

            {/* 04 Competitor Research */}
            <Section id="competitor-research" num="04" title={t.sections[3].title}>
              <P>{t.competitor.intro}</P>
              <div className="my-6 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="px-5 py-3 text-[11px] font-mono tracking-wider text-white/55">
                        {t.competitor.thExchange}
                      </th>
                      <th className="px-5 py-3 text-[11px] font-mono tracking-wider text-white/55">
                        {t.competitor.thName}
                      </th>
                      <th className="px-5 py-3 text-[11px] font-mono tracking-wider text-white/55">
                        {t.competitor.thVerdict}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.competitor.rows.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-white/8 last:border-b-0"
                      >
                        <td className="px-5 py-3 text-white/65">{row.exchange}</td>
                        <td className={`px-5 py-3 ${row.strong ? "text-white font-medium" : "text-white/80"}`}>
                          {row.ai}
                        </td>
                        <td className={`px-5 py-3 text-xs ${row.strong ? "text-xanthus-flame-light font-mono" : "text-white/45"}`}>
                          {row.verdict}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <H3>{t.competitor.h2}</H3>
              <P>{t.competitor.p2}</P>
              <P>{t.competitor.p3}</P>
            </Section>

            {/* 05 Strategic Insight */}
            <Section id="insight" num="05" title={t.sections[4].title}>
              <Pullquote>{t.insight.quote}</Pullquote>
              <P>{t.insight.p1}</P>
              <P>{t.insight.p2}</P>
            </Section>

            {/* 06 Solution */}
            <Section id="solution" num="06" title={t.sections[5].title}>
              <div className="my-4 flex items-center justify-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-md">
                <div className="flex items-center gap-5">
                  <XanthusMark size={80} />
                  <XanthusWordmark width={240} fill="#FFFFFF" />
                </div>
              </div>
              <H3>{t.solution.h1}</H3>
              {t.solution.paras.map((p, i) => (
                <P key={i}>{p}</P>
              ))}
            </Section>

            {/* 07 Naming */}
            <Section id="naming" num="07" title={t.sections[6].title}>
              <P>{t.naming.intro}</P>
              <H3>{t.naming.h1}</H3>
              <RejectList items={t.naming.rejects} />
              <H3>{t.naming.h2}</H3>
              <P>{t.naming.p1}</P>
              <P>{t.naming.p2}</P>
              <H3>{t.naming.h3}</H3>
              <P>{t.naming.p3}</P>
              <P>{t.naming.p4}</P>
              <P>{t.naming.p5}</P>
              <Bullets items={t.naming.bullets} />
              <P>{t.naming.p6}</P>
            </Section>

            {/* 08 Visual System */}
            <Section id="visual" num="08" title={t.sections[7].title}>
              <H3>{t.visual.h1}</H3>
              <P>{t.visual.p1}</P>
              <H3>{t.visual.h2}</H3>
              <SwatchRow rows={t.visual.swatches} />
              <H3>{t.visual.h3}</H3>
              <P>{t.visual.p2}</P>
              <H3>{t.visual.h4}</H3>
              <Bullets items={t.visual.motionRules} />
            </Section>

            {/* 09 IP Character */}
            <Section id="ip-character" num="09" title={t.sections[8].title}>
              <P>{t.ip.intro}</P>
              <StatesGrid items={t.ip.states} />
              <P>{t.ip.close}</P>
            </Section>

            {/* 10 Brand Projection */}
            <Section id="projection" num="10" title={t.sections[9].title}>
              <H3>{t.projection.h1}</H3>
              <P>{t.projection.p1}</P>
              <Bullets items={t.projection.bullets} />
              <H3>{t.projection.h2}</H3>
              <P>{t.projection.p2}</P>
              <P>{t.projection.p3}</P>
            </Section>

            {/* 11 Roadmap */}
            <Section id="roadmap" num="11" title={t.sections[10].title}>
              <PhaseRow phases={t.roadmap.phases} />
            </Section>

            {/* 12 Tools */}
            <Section id="tools" num="12" title={t.sections[11].title}>
              <P>{t.tools.intro}</P>
              <ToolList tools={t.tools.tools} />
            </Section>

            <Footer t={t} />
          </div>
        </main>
      </div>
    </div>
  );
}

/* ----------------------- Translations ----------------------- */

const enContent = {
  sections: [
    { id: "summary", num: "01", navTitle: "Executive Summary", title: "Executive Summary" },
    { id: "opportunity", num: "02", navTitle: "The Opportunity", title: "The Opportunity" },
    { id: "brand-research", num: "03", navTitle: "Brand Research", title: "Brand Research" },
    { id: "competitor-research", num: "04", navTitle: "Competitor Research", title: "Competitor Research" },
    { id: "insight", num: "05", navTitle: "Strategic Insight", title: "Strategic Insight" },
    { id: "solution", num: "06", navTitle: "The Solution", title: "The Solution" },
    { id: "naming", num: "07", navTitle: "Naming Decision", title: "Naming Decision" },
    { id: "visual", num: "08", navTitle: "Visual System", title: "Visual System" },
    { id: "ip-character", num: "09", navTitle: "IP Character", title: "IP Character" },
    { id: "projection", num: "10", navTitle: "Brand Projection", title: "Brand Projection" },
    { id: "roadmap", num: "11", navTitle: "Brand Roadmap", title: "Brand Roadmap" },
    { id: "tools", num: "12", navTitle: "Tools Used", title: "Tools Used" },
  ],
  header: {
    eyebrow: "BRAND REPORT",
    title: "From unfinished to premium.",
    subtitle: "A strategic brand identity proposal for MEXC's AI sub-brand. The product is called Xanthus. This report explains why it exists, how it was decided, and where it goes from here.",
    author: "BY DANNICK YOUNG · 2026",
  },
  footer: {
    end: "END OF REPORT",
    back: "BACK TO DECK →",
  },
  summary: {
    paras: [
      "MEXC has built a category leading exchange, with breadth of listings, speed of execution, and a global trader base. Its AI feature, however, still feels like a placeholder inside an otherwise sharp product. This proposal closes that gap by introducing a single, named, premium AI identity: Xanthus.",
      "Xanthus is not a chatbot. It is the advisor archetype the crypto AI category has not yet claimed. The name is short, ownable, and starts with X, the letter Web3 has already adopted as its own. The visual system pairs MEXC's Blue Ribbon with a flame gradient that no other exchange has staked out. The IP character moves across three live states inside the app: idle, generating, and output.",
    ],
    callout: "The bet: an AI brand should feel as deliberate as the platform that hosts it. Xanthus turns MEXC's AI from a feature into a brand citizens of crypto will recognize on sight.",
  },
  opportunity: {
    intro: "The brief from MEXC named three specific gaps in the current AI brand visual. Each one is real, and each one points to the same underlying problem: the AI mark was treated as a feature icon, not as a sub-brand with its own surface area.",
    pillars: [
      { label: "01", title: "The Web3 feel is weak", body: "The current A↗ mark reads as a generic AI icon. It could belong to any productivity tool. It says nothing about crypto." },
      { label: "02", title: "The brand extension is unsystematic", body: "There is no coherent IP, no consistent visual grammar across surfaces, no system that scales from the chat header to a launch hero." },
      { label: "03", title: "It lacks an international design feel", body: "Current treatment reads regional. The category leaders (Aurora, Apple Intelligence, Claude) all operate at a different bar." },
    ],
    close: "The opportunity is to do for MEXC AI what Aurora did for Bybit: claim a name, a face, and a feeling that the entire category will then have to react to.",
  },
  brandResearch: {
    h1: "MEXC's current state",
    p1: "MEXC's 2026 brand refresh sharpened the master brand. The new Blue Ribbon mark, the Shakespeare blue secondary, and the cleaner wordmark all signal a platform that takes itself seriously. The positioning has moved from \"easiest way to crypto\" toward \"the universal gateway for global markets.\"",
    h2: "Where the AI feature falls short",
    p2: "Open the MEXC app today and the AI lives behind a generic mark and a generic name (MEXC-AI). The chat surface is functional but indistinguishable from a dozen other crypto AI assistants. There is no character, no signature motion, no voice that says \"this is a product MEXC chose to make great.\"",
    p3: "That gap is the entire premise of this proposal. Closing it is not a visual exercise. It is a brand decision: treat the AI as a product worthy of its own identity.",
  },
  competitor: {
    intro: "We audited every major crypto exchange AI product live as of May 2026. The category has one premium named character, Bybit's Aurora. Everything else falls into one of three patterns: a descriptive label, a fragmented portfolio of names, or a dated customer-service tone.",
    thExchange: "EXCHANGE",
    thName: "AI NAME",
    thVerdict: "VERDICT",
    rows: [
      { exchange: "Bybit", ai: "Aurora", verdict: "Premium, the category bar", strong: true },
      { exchange: "Binance", ai: "AI Pro", verdict: "Descriptive product label" },
      { exchange: "OKX", ai: "Moby / Planet / OnchainOS", verdict: "Fragmented across 3 names" },
      { exchange: "Bitget", ai: "GetAgent / GetClaw / Gracy", verdict: "Three products, one job" },
      { exchange: "Crypto.com", ai: "Amy", verdict: "Dated customer service tone" },
      { exchange: "KuCoin", ai: "Kia", verdict: "Functional, low character" },
      { exchange: "Gate", ai: "GateAI", verdict: "Descriptive label" },
      { exchange: "HTX", ai: "Unnamed", verdict: "No named AI yet" },
    ],
    h2: "The pattern",
    p2: "Across the eight largest exchanges, only Aurora has been treated as a brand. The rest are product names. None has a character system. None has a story. The category is wide open for the second premium IP.",
    p3: "We also looked outside crypto. Apple Intelligence (rainbow boundary glow), Claude (warm and approachable), Gemini (cosmic gradient sparkle), and Siri (orb morphology) all use signature visual language. None of these patterns has been adopted by a crypto AI. That absence is the opening.",
  },
  insight: {
    quote: "Crypto AI is a generic landscape. The first exchange to treat its AI as a brand wins the category for the next two years.",
    p1: "Bybit proved this with Aurora. MEXC has the platform, the audience, and the technical surface to do it next, with a stronger system. Xanthus is engineered to be that system.",
    p2: "The strategic insight is not about mythology. It is about category positioning. Web3 users respond to confident, signal-rich brands. They reject anything that feels generic, derivative, or customer-service. The brief is an opening, not a critique.",
  },
  solution: {
    h1: "Xanthus, the advisor for Web3 traders",
    paras: [
      "A single name. A single mark. A single visual system that scales from a 16px chat avatar to a launch hero. The X mark is built from two crossing strokes that converge at the center, the geometric translation of two forces meeting at a decisive moment.",
      "In product, Xanthus has three IP states. Idle: the mark breathing. Generating: two strokes parting and rejoining as counsel forms. Output: a decisive pulse outward as the answer arrives. The same visual identity is alive across every surface, every moment of use.",
      "Color: MEXC's Blue Ribbon stays as the platform foundation. Xanthus owns the flame, an orange gradient from #FF600A to #FFA319 that is rare in crypto AI and complementary to MEXC blue. Two colors, one brand cosmology: sunset over ocean.",
    ],
  },
  naming: {
    intro: "We tested twelve names against five criteria: trademark clearance in crypto AI, etymology, mission fit, pronunciation across markets, and category positioning. Most failed on at least one. Several failed spectacularly because the namespace was already claimed by an adjacent crypto product.",
    h1: "Names considered and rejected",
    rejects: [
      ["Mira", "Too phonetically close to MEXC, read as a brand duplicate"],
      ["Kairos", "a16z funded a crypto trading terminal named Kairos in February 2026"],
      ["Argus", "Surveillance baggage. The myth has Hermes (the god of trading) kill Argus"],
      ["Artemis", "Blocked. Artemis.ai analytics terminal + ArtemisAI token trades on MEXC"],
      ["Apollo", "Multiple Apollo AI trading products active (ApolloBot, Apollo Market GPT)"],
      ["Hermes", "Trademark blocked by Hermès fashion house globally"],
      ["Aria", "Opera browser AI since 2023, plus AriaAI token trading on MEXC"],
      ["Houyi (Chinese)", "Asian mythology rejected, brief asked for international polish"],
    ] as [string, string][],
    h2: "Why Xanthus",
    p1: "Greek \"Ξάνθος,\" pronounced [ZAN-thuhs]. Two syllables, ownable, globally pronounceable. Verified clean in crypto AI namespace as of May 2026. The X is the letter of Web3 (xAI, X-chain, dYdX), giving the brand a crypto-native read with zero explanation.",
    p2: "The etymology adds depth without doing strategic work on its own. Xanthus was the advisor archetype in classical literature. That story exists in the report and the deck, but the brand stands or falls on its category positioning, which is independent of any myth.",
    h3: "Why just \"Xanthus,\" not \"Xanthus AI\"",
    p3: "The strongest AI brands drop the \"AI\" suffix. Aurora, Claude, Siri, Alexa, Cortana, Gemini, Grok. Not one of them ships as \"Aurora AI\" or \"Claude AI.\" The category leaders earn the right to be known by name alone, and that single decision is what separates a brand from a feature label.",
    p4: "\"Xanthus AI\" would do three things wrong. It would read as a Web2 product label (the same trap that gives us Binance AI Pro and GateAI). It would create visual clutter at small sizes (the wordmark is already \"XANTHUS,\" a trailing \"AI\" weakens it). It would signal that we do not trust the name to stand on its own.",
    p5: "Context already does the work. Xanthus lives inside MEXC-AI as a surface. Users meeting Xanthus there will know it is an AI. The naming convention reinforces this:",
    bullets: [
      "Formal brand wordmark: XANTHUS",
      "Conversational form in product: \"Ask Xanthus\"",
      "Surface label inside MEXC: MEXC-AI · Xanthus",
      "External announcement: \"MEXC launches Xanthus\"",
    ],
    p6: "One name, used confidently. That confidence is itself a premium signal.",
  },
  visual: {
    h1: "The mark",
    p1: "Two strokes that cross at the center. Built on a tight geometric grid. The mark animates by sliding the two strokes in from opposite sides, converging at the intersection. Audiences see the pieces first, then the resolution. The animation is the brand thesis in motion.",
    h2: "The color system",
    swatches: [
      { hex: "#1463FE", label: "MEXC Blue Ribbon", role: "Platform foundation" },
      { hex: "#FF600A", label: "Xanthus Flame Deep", role: "Mark gradient start" },
      { hex: "#FFA319", label: "Xanthus Flame Light", role: "Mark gradient end" },
      { hex: "#000000", label: "Onyx", role: "Canvas" },
    ],
    h3: "Typography",
    p2: "Helvetica Neue throughout the system, matching MEXC's master brand sans family. Playfair Display Italic is used sparingly for inline keyword emphasis, providing classical contrast against the modernist sans. Geist Mono is used for labels, metadata, and code spec annotations.",
    h4: "Motion principles",
    motionRules: [
      "Organic, never mechanical. Every movement should feel alive, like the brand has its own pulse.",
      "Smooth, never abrupt. Animations ease in and out, never jolt the eye.",
      "One thing at a time. Never parallel animations competing for attention.",
      "Subtle by default. Motion is a brand signal, not a performance.",
    ],
  },
  ip: {
    intro: "The brief required three states for the AI IP: idle, generating, and output. Xanthus delivers all three using the same two strokes that build the mark, so the character never feels like a separate asset. The same visual identity moves through three personalities.",
    states: [
      { num: "01", label: "IDLE", body: "The mark breathing. Slow scale pulse. Alive, waiting, attentive." },
      { num: "02", label: "GENERATING", body: "Two strokes part and rejoin in oscillation. Counsel forming. Echoes the construction story of the mark itself." },
      { num: "03", label: "OUTPUT", body: "Decisive pulse outward. A radial glow ring expands and fades as the answer arrives." },
    ],
    close: "In the app, the same character is the chat avatar, the loading indicator, and the response icon. One IP, three behaviors, every surface.",
  },
  projection: {
    h1: "How premium gets signalled",
    p1: "Premium is not the orange. Premium is the discipline. Five concrete decisions encode the premium signal:",
    bullets: [
      "A real name with a real story. Not a descriptor. Not a token brand. A name worth saying.",
      "A constructed mark, built from two strokes that meet. Geometry instead of an arrow plus a star.",
      "A signature motion. Two strokes converging, then a breathing state, then a pulse. The same character moves through every surface.",
      "Restraint. Two colors, two typefaces, one IP. Premium brands earn attention by what they leave out.",
    ],
    h2: "What it does for MEXC",
    p2: "Xanthus gives MEXC a second brand asset that travels independently. The AI can be marketed, partnered with, integrated with third parties, all without diluting the master brand. MEXC stays the platform. Xanthus becomes the advisor. The two reinforce each other.",
    p3: "In a category where Aurora has been alone at the top for two years, Xanthus is the second premium IP. That positioning is worth a multiple of what it costs to ship.",
  },
  roadmap: {
    phases: [
      { label: "PHASE 01", name: "Launch", period: "Q3 2026", body: "Replace the placeholder mark inside MEXC-AI with the Xanthus mark and wordmark. Roll out the three IP states. Update splash, chat header, services tile. Announce externally with a launch deck and short film." },
      { label: "PHASE 02", name: "Establish", period: "Q4 2026 to Q1 2027", body: "Extend Xanthus across all MEXC marketing surfaces. Run a global campaign anchored on a single line (the premium AI advisor in Web3). Ship a Xanthus voice (tone, vocabulary, response patterns)." },
      { label: "PHASE 03", name: "Expand", period: "Q2 2027 onward", body: "Introduce sibling characters from the same brand cosmology. Open Xanthus to integrations and developer agents. Establish Xanthus as the second premium IP in crypto AI, alongside Aurora." },
    ],
  },
  tools: {
    intro: "The deck, the IP character animations, and this report were built across a small stack of tools chosen for speed and craft, not just output.",
    tools: [
      { name: "Claude Code", role: "Pair programmer for the Next.js deck, the React IP states, the report build, and brand token system." },
      { name: "Wispr Flow", role: "Voice dictation for thinking out loud during ideation and copywriting." },
      { name: "Midjourney", role: "Visual exploration for mood and texture references." },
      { name: "Nanobanana", role: "Image generation, including the X cosmology visual used in the bento grid." },
      { name: "Figma", role: "Logo construction, mark refinement, color spec, and final export of the Xanthus brand assets." },
      { name: "Perplexity", role: "Research on crypto AI competitive landscape and trademark namespace checks." },
    ],
  },
};

const zhContent: typeof enContent = {
  sections: [
    { id: "summary", num: "01", navTitle: "执行摘要", title: "执行摘要" },
    { id: "opportunity", num: "02", navTitle: "升级机会", title: "升级机会" },
    { id: "brand-research", num: "03", navTitle: "品牌研究", title: "品牌研究" },
    { id: "competitor-research", num: "04", navTitle: "竞品研究", title: "竞品研究" },
    { id: "insight", num: "05", navTitle: "战略洞察", title: "战略洞察" },
    { id: "solution", num: "06", navTitle: "解决方案", title: "解决方案" },
    { id: "naming", num: "07", navTitle: "命名决策", title: "命名决策" },
    { id: "visual", num: "08", navTitle: "视觉系统", title: "视觉系统" },
    { id: "ip-character", num: "09", navTitle: "IP 形象", title: "IP 形象" },
    { id: "projection", num: "10", navTitle: "品牌投射", title: "品牌投射" },
    { id: "roadmap", num: "11", navTitle: "品牌路线图", title: "品牌路线图" },
    { id: "tools", num: "12", navTitle: "工具", title: "工具" },
  ],
  header: {
    eyebrow: "品牌报告",
    title: "从未完成，到高端。",
    subtitle: "为 MEXC AI 子品牌提出的战略品牌身份提案。产品名为 Xanthus。这份报告解释了它存在的原因、是如何决策的、以及未来走向何处。",
    author: "撰写 DANNICK YOUNG · 2026",
  },
  footer: {
    end: "报告结束",
    back: "返回 DECK →",
  },
  summary: {
    paras: [
      "MEXC 已经打造了一个品类领先的交易所：上币速度快、执行速度快、用户遍布全球。但它的 AI 功能，在这个本应锐利的产品里，仍然像个占位符。本提案以一个独立、命名、高端的 AI 身份「Xanthus」来填补这个空缺。",
      "Xanthus 不是聊天机器人。它是加密 AI 品类尚未被人占有的「智者」原型。名字简短、可拥有、以字母 X 开头，而 X 已经是 Web3 的语言（xAI、X-chain、dYdX）。视觉系统把 MEXC 的 Blue Ribbon 与火焰渐变结合，这是其它交易所未曾占据的组合。IP 形象在应用内拥有三种状态：待机、生成中、结果输出。",
    ],
    callout: "押注：AI 品牌应该和承载它的平台一样深思熟虑。Xanthus 把 MEXC 的 AI 从一个功能变成了一个加密公民能一眼认出的品牌。",
  },
  opportunity: {
    intro: "MEXC 的简报指出了当前 AI 品牌视觉中三个具体的差距。每个都是真实的，每个都指向同一个根本问题：AI 标志被当作功能图标，而不是一个具备自身展开空间的子品牌。",
    pillars: [
      { label: "01", title: "Web3 感受不强", body: "目前的 A↗ 标志像是通用 AI 图标，可以属于任何效率工具。它没有说出任何加密语言。" },
      { label: "02", title: "品牌延展不够体系化", body: "缺乏一致的 IP，缺乏统一的视觉语法，没有可从聊天标头扩展到发布主视觉的体系。" },
      { label: "03", title: "缺少国际化设计感受", body: "现有处理偏区域感。品类领跑者（Aurora、Apple Intelligence、Claude）都在不同的标准上运作。" },
    ],
    close: "机会，是为 MEXC AI 做 Aurora 为 Bybit 做的事：占有一个名字、一张面孔、一种感觉，让整个品类都得对此回应。",
  },
  brandResearch: {
    h1: "MEXC 的现状",
    p1: "MEXC 2026 年的品牌升级让主品牌更锐利。新的 Blue Ribbon 标志、Shakespeare 蓝辅色、更干净的字标，都在传达一个认真对待自己的平台。定位也从「最容易的加密入口」，转向「全球市场的通用门户」。",
    h2: "AI 功能的短板",
    p2: "打开当下的 MEXC 应用，AI 隐藏在一个通用的标志和一个通用的名字（MEXC-AI）背后。聊天界面是功能性的，但和其它十几个加密 AI 助手无法区分。没有角色、没有标志性动效、没有「这是 MEXC 选择要做好的产品」的声音。",
    p3: "这个差距就是本提案的全部前提。补上它不是一次视觉作业。是一个品牌决定：把 AI 当作配得上自己身份的产品来对待。",
  },
  competitor: {
    intro: "我们在 2026 年 5 月审视了所有主流加密交易所的 AI 产品。这个品类有一个高端的命名角色：Bybit 的 Aurora。其它的都落在三类模式之一：描述性标签、命名碎片化、过时的客服口吻。",
    thExchange: "交易所",
    thName: "AI 名字",
    thVerdict: "评价",
    rows: [
      { exchange: "Bybit", ai: "Aurora", verdict: "高端，品类标杆", strong: true },
      { exchange: "Binance", ai: "AI Pro", verdict: "描述性产品标签" },
      { exchange: "OKX", ai: "Moby / Planet / OnchainOS", verdict: "三个名字，分散" },
      { exchange: "Bitget", ai: "GetAgent / GetClaw / Gracy", verdict: "三套产品，一件事" },
      { exchange: "Crypto.com", ai: "Amy", verdict: "过时的客服口吻" },
      { exchange: "KuCoin", ai: "Kia", verdict: "功能性，角色弱" },
      { exchange: "Gate", ai: "GateAI", verdict: "描述性标签" },
      { exchange: "HTX", ai: "未命名", verdict: "尚无命名 AI" },
    ],
    h2: "结论",
    p2: "在八大交易所里，只有 Aurora 被当作品牌处理。其他都是产品名。没有角色系统。没有故事。这个品类对第二个高端 IP 完全开放。",
    p3: "我们也看了加密之外。Apple Intelligence（彩虹边缘光晕）、Claude（温暖、亲切）、Gemini（宇宙渐变星光）、Siri（球体形态），都使用了标志性的视觉语言。这些模式没有一个被加密 AI 采用。这个缺席就是开口。",
  },
  insight: {
    quote: "加密 AI 是一片同质化的风景。第一个把 AI 当作品牌的交易所，会赢下未来两年的品类。",
    p1: "Bybit 已经用 Aurora 证明了。MEXC 拥有平台、用户、技术界面，可以接下来做这件事，而且做得更体系。Xanthus 就是这个体系。",
    p2: "战略洞察不在于神话。在于品类定位。Web3 用户对自信、信号密集的品牌做出回应。他们拒绝任何感觉通用、衍生、客服式的东西。简报本身就是一个机会，不是批评。",
  },
  solution: {
    h1: "Xanthus，为 Web3 交易者而生的智者",
    paras: [
      "一个名字。一个标志。一个能从 16px 聊天头像扩展到发布主视觉的视觉系统。X 标志由两笔交叉构成，在中心汇合，是两股力量在决定性瞬间相遇的几何表达。",
      "在产品里，Xanthus 有三个 IP 状态。待机：标志在呼吸。生成中：两笔分离再合，建议正在成型。结果输出：向外的一次脉动，回答抵达。同一个视觉身份在每个界面、每个使用瞬间都鲜活。",
      "颜色：MEXC 的 Blue Ribbon 仍然是平台基底。Xanthus 拥有火焰，从 #FF600A 到 #FFA319 的橙色渐变，在加密 AI 里少见，和 MEXC 蓝形成完美互补。两种颜色，一个品牌宇宙：日落之于海洋。",
    ],
  },
  naming: {
    intro: "我们用五个标准测试了十二个名字：加密 AI 商标净空、词源、使命契合度、跨市场发音、品类定位。大部分至少在一个标准上失败。有几个甚至因为相邻加密产品已经占用名字而失败得很彻底。",
    h1: "考虑并放弃的名字",
    rejects: [
      ["Mira", "发音上太接近 MEXC，读起来像品牌复制品"],
      ["Kairos", "a16z 在 2026 年 2 月投资了一个名为 Kairos 的加密交易终端"],
      ["Argus", "监视感包袱。神话里，Hermes（交易之神）杀了 Argus"],
      ["Artemis", "受阻。Artemis.ai 分析终端 + ArtemisAI 代币在 MEXC 上交易"],
      ["Apollo", "多个 Apollo AI 交易产品在运行（ApolloBot、Apollo Market GPT）"],
      ["Hermes", "Hermès 时装屋在全球持有商标"],
      ["Aria", "Opera 浏览器 AI 自 2023 年起使用，加上 AriaAI 代币在 MEXC 上交易"],
      ["Houyi (中文)", "亚洲神话被放弃，简报要求国际化精致感"],
    ] as [string, string][],
    h2: "为什么是 Xanthus",
    p1: "希腊语「Ξάνθος」，发音 [ZAN-thuhs]。两个音节，可拥有，全球可发音。在 2026 年 5 月已验证加密 AI 名字空间净空。X 是 Web3 的字母（xAI、X-chain、dYdX），让品牌瞬间具备加密原生感，无需解释。",
    p2: "词源增加了深度，但它本身不做战略工作。Xanthus 是古典文学中的智者原型。这个故事存在于报告和 deck 中，但品牌的成败取决于它的品类定位，而品类定位独立于任何神话。",
    h3: "为什么只是「Xanthus」，而不是「Xanthus AI」",
    p3: "最强的 AI 品牌都丢掉了「AI」后缀。Aurora、Claude、Siri、Alexa、Cortana、Gemini、Grok。没有一个以「Aurora AI」或「Claude AI」的形式出现。品类领跑者赢得了仅凭名字被认识的权利，这一个决定就把品牌和功能标签区分开来。",
    p4: "「Xanthus AI」会做错三件事。它会读起来像一个 Web2 产品标签（这就是 Binance AI Pro 和 GateAI 掉进的同一个陷阱）。它会在小尺寸上造成视觉杂乱（字标已经是「XANTHUS」，尾随的「AI」削弱了它）。它会信号化我们不信任名字独立成立。",
    p5: "语境已经在做这件事。Xanthus 作为一个界面存在于 MEXC-AI 内部。在那里遇见 Xanthus 的用户会知道它是一个 AI。命名约定强化了这一点：",
    bullets: [
      "正式品牌字标：XANTHUS",
      "产品内对话形式：「Ask Xanthus」",
      "MEXC 内界面标签：MEXC-AI · Xanthus",
      "对外发布：「MEXC 发布 Xanthus」",
    ],
    p6: "一个名字，自信地使用。这种自信本身就是一种高端信号。",
  },
  visual: {
    h1: "标志",
    p1: "两笔在中心交叉。建立在严谨的几何网格上。标志通过两笔从相反方向滑入、在交叉点汇合来动画呈现。观众先看见碎片，再看到结果。动画就是品牌主张的运动表达。",
    h2: "颜色系统",
    swatches: [
      { hex: "#1463FE", label: "MEXC Blue Ribbon", role: "平台基底" },
      { hex: "#FF600A", label: "Xanthus Flame Deep", role: "标志渐变起点" },
      { hex: "#FFA319", label: "Xanthus Flame Light", role: "标志渐变终点" },
      { hex: "#000000", label: "Onyx", role: "画布" },
    ],
    h3: "字体",
    p2: "整个系统使用 Helvetica Neue，与 MEXC 主品牌的无衬线字体家族相匹配。Playfair Display Italic 谨慎用于内联关键词强调，提供与现代无衬线字体的古典对比。Geist Mono 用于标签、元数据和规格注释。",
    h4: "动效原则",
    motionRules: [
      "有机，而非机械。每个动作都该有生命，像品牌自带脉搏。",
      "流畅，而非突兀。动效缓入缓出，从不让视线被惊吓。",
      "一次只做一件事。永远不让两个动画同时争夺注意力。",
      "默认克制。动效是品牌信号，不是表演。",
    ],
  },
  ip: {
    intro: "简报要求 AI IP 有三种状态：待机、生成中、结果输出。Xanthus 用构建标志的同一对笔画交付了所有三种状态，因此角色从不像一个独立资产。同一个视觉身份穿过三种性格。",
    states: [
      { num: "01", label: "待机", body: "标志在呼吸。缓慢的尺度脉动。鲜活、等待、专注。" },
      { num: "02", label: "生成中", body: "两笔分离再合，建议正在凝聚。回响标志本身的构建故事。" },
      { num: "03", label: "结果输出", body: "向外的一次决定性脉动。一圈径向光晕扩展再消散，回答抵达。" },
    ],
    close: "在应用里，同一个角色是聊天头像、加载指示、回应图标。一个 IP、三种行为、每一个界面。",
  },
  projection: {
    h1: "高端感如何被传达",
    p1: "高端不是橙色。高端是克制。五个具体决定编码了高端信号：",
    bullets: [
      "一个真实的名字，配一个真实的故事。不是描述符。不是代币品牌。一个值得呼唤的名字。",
      "一个被构造的标志，由两笔交汇而成。是几何，不是「箭头加星」。",
      "一个标志性动效。两笔汇合、然后呼吸、然后脉动。同一个角色穿过每一个界面。",
      "克制。两种颜色、两种字体、一个 IP。高端品牌靠它们留下的东西赢得注意。",
    ],
    h2: "对 MEXC 的意义",
    p2: "Xanthus 给 MEXC 多了一个可以独立行走的品牌资产。AI 可以独立营销、合作、与第三方集成，而不稀释主品牌。MEXC 仍然是平台。Xanthus 成为智者。两者相互强化。",
    p3: "在 Aurora 独居顶端两年的品类里，Xanthus 是第二个高端 IP。这个定位的价值，远超出货的成本。",
  },
  roadmap: {
    phases: [
      { label: "阶段 01", name: "上线", period: "2026 Q3", body: "用 Xanthus 标志和字标替换 MEXC-AI 中的占位符。推出三种 IP 状态。更新启动页、聊天标头、服务卡片。对外配合发布 deck 和短片。" },
      { label: "阶段 02", name: "建立", period: "2026 Q4 至 2027 Q1", body: "把 Xanthus 扩展到所有 MEXC 营销界面。围绕一句话开展全球战役（Web3 的高端 AI 智者）。发布 Xanthus 声音（语调、词汇、回应模式）。" },
      { label: "阶段 03", name: "扩张", period: "2027 Q2 起", body: "从同一个品牌宇宙中引入兄弟角色。向集成方和开发者代理开放 Xanthus。把 Xanthus 确立为加密 AI 的第二个高端 IP，与 Aurora 并列。" },
    ],
  },
  tools: {
    intro: "Deck、IP 形象动效、本报告都建立在一小堆工具上，选择标准是速度和工艺，而不仅仅是输出。",
    tools: [
      { name: "Claude Code", role: "Next.js deck、React IP 状态、报告构建、品牌 token 系统的结对编程。" },
      { name: "Wispr Flow", role: "在构思和文案中用语音口述思考。" },
      { name: "Midjourney", role: "为情绪和质感做视觉探索。" },
      { name: "Nanobanana", role: "图像生成，包括 bento 网格里使用的 X 宇宙学视觉。" },
      { name: "Figma", role: "标志构建、字标精修、颜色规格、最终导出 Xanthus 品牌资产。" },
      { name: "Perplexity", role: "对加密 AI 竞品图景和商标名字空间做调研。" },
    ],
  },
};

/* ----------------------- Components ----------------------- */

function LanguageToggle() {
  const { lang, toggle } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle language"
      className="absolute right-8 top-8 z-20 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-white/5 font-mono text-[11px] tracking-wider text-white/65 transition-all duration-200 hover:bg-white/10 hover:text-white lg:right-12 lg:top-10"
    >
      {lang === "en" ? "中" : "EN"}
    </button>
  );
}

function Header({ t }: { t: typeof enContent }) {
  return (
    <header className="mb-16">
      <div className="font-mono text-[10px] tracking-[0.35em] text-xanthus-flame-light">
        {t.header.eyebrow}
      </div>
      <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl">
        {t.header.title}
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75">
        {t.header.subtitle}
      </p>
      <div className="mt-7 font-mono text-[11px] tracking-[0.25em] text-white/45">
        {t.header.author}
      </div>
    </header>
  );
}

function Footer({ t }: { t: typeof enContent }) {
  return (
    <footer className="mt-24 border-t border-white/10 pt-10 pb-12">
      <div className="flex items-center justify-between">
        <div className="font-mono text-[10px] tracking-[0.3em] text-white/45">
          {t.footer.end}
        </div>
        <a
          href="/deck"
          className="font-mono text-[10px] tracking-[0.3em] text-white/55 transition-colors hover:text-white"
        >
          {t.footer.back}
        </a>
      </div>
    </footer>
  );
}

function Section({
  id,
  num,
  title,
  children,
}: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-12 border-t border-white/10 py-14">
      <div className="font-mono text-[10px] tracking-[0.35em] text-xanthus-flame-light">
        {num}
      </div>
      <h2 className="mt-3 text-3xl font-semibold leading-tight text-white md:text-4xl">
        {title}
      </h2>
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] leading-[1.75] text-white/85">{children}</p>;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-8 text-lg font-semibold text-white">{children}</h3>;
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-3 rounded-2xl border p-5 backdrop-blur-md"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,96,10,0.12) 0%, rgba(255,163,25,0.06) 100%)",
        borderColor: "rgba(255,96,10,0.3)",
      }}
    >
      <p className="text-[15px] leading-[1.65] text-white/95">{children}</p>
    </div>
  );
}

function Pullquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-4 border-l-2 border-xanthus-flame-light pl-5 italic">
      <p className="font-display text-xl leading-snug text-white/95">{children}</p>
    </blockquote>
  );
}

function GapList({
  items,
}: {
  items: { label: string; title: string; body: string }[];
}) {
  return (
    <div className="my-3 space-y-3">
      {items.map((it) => (
        <div
          key={it.label}
          className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
        >
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[10px] tracking-wider text-xanthus-flame-light">
              {it.label}
            </span>
            <span className="text-base font-medium text-white">{it.title}</span>
          </div>
          <p className="mt-1.5 text-[14px] leading-relaxed text-white/75">{it.body}</p>
        </div>
      ))}
    </div>
  );
}

function RejectList({ items }: { items: [string, string][] }) {
  return (
    <div className="my-3 overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
      {items.map((it, i) => (
        <div
          key={it[0]}
          className={`grid grid-cols-[140px_1fr] gap-4 px-4 py-2.5 ${
            i !== items.length - 1 ? "border-b border-white/8" : ""
          }`}
        >
          <span className="text-sm font-medium text-white/85">{it[0]}</span>
          <span className="text-[13px] leading-snug text-white/55">{it[1]}</span>
        </div>
      ))}
    </div>
  );
}

function Swatch({ hex, label }: { hex: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-14 w-20 rounded-lg border border-white/10" style={{ background: hex }} />
      <div className="mt-2 text-[10px] font-mono tracking-wider text-white/55">{label}</div>
      <div className="text-[10px] font-mono text-white/35">{hex}</div>
    </div>
  );
}

function SwatchRow({
  rows,
}: {
  rows: { hex: string; label: string; role: string }[];
}) {
  return (
    <div className="my-3 space-y-2">
      {rows.map((r) => (
        <div
          key={r.hex}
          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur-md"
        >
          <div
            className="h-10 w-16 rounded-md border border-white/10"
            style={{ background: r.hex }}
          />
          <div className="flex-1">
            <div className="text-sm text-white">{r.label}</div>
            <div className="text-[12px] text-white/55">{r.role}</div>
          </div>
          <div className="font-mono text-[11px] text-white/45">{r.hex}</div>
        </div>
      ))}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="my-3 space-y-2">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 inline-block h-1 w-1 shrink-0 rounded-full bg-xanthus-flame-light" />
          <span className="text-[15px] leading-relaxed text-white/85">{it}</span>
        </li>
      ))}
    </ul>
  );
}

function StatesGrid({
  items,
}: {
  items: { num: string; label: string; body: string }[];
}) {
  return (
    <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.num}
          className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
        >
          <div className="font-mono text-[10px] tracking-wider text-xanthus-flame-light">
            {it.num}
          </div>
          <div className="mt-2 text-sm font-semibold text-white">{it.label}</div>
          <p className="mt-2 text-[12px] leading-relaxed text-white/75">{it.body}</p>
        </div>
      ))}
    </div>
  );
}

function PhaseRow({
  phases,
}: {
  phases: { label: string; name: string; period: string; body: string }[];
}) {
  return (
    <div className="my-3 space-y-3">
      {phases.map((p) => (
        <div
          key={p.label}
          className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
        >
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <div className="font-mono text-[10px] tracking-wider text-xanthus-flame-light">
                {p.label}
              </div>
              <div className="mt-1 text-lg font-semibold text-white">{p.name}</div>
            </div>
            <div className="font-mono text-[11px] tracking-wider text-white/55">{p.period}</div>
          </div>
          <p className="mt-2 text-[14px] leading-relaxed text-white/80">{p.body}</p>
        </div>
      ))}
    </div>
  );
}

function ToolList({ tools }: { tools: { name: string; role: string }[] }) {
  return (
    <div className="my-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {tools.map((t) => (
        <div
          key={t.name}
          className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md"
        >
          <div className="text-sm font-semibold text-white">{t.name}</div>
          <p className="mt-1.5 text-[13px] leading-relaxed text-white/65">{t.role}</p>
        </div>
      ))}
    </div>
  );
}
