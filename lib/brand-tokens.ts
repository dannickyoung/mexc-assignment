/**
 * Xanthus × MEXC brand tokens.
 * Single source of truth for colors, typography, and motion timings.
 *
 * Color values for MEXC Ocean Blue should be verified against the official
 * brand guidelines (April 2026 refresh). Treat the hexes here as working
 * approximations pulled from the public logo.
 */

export const colors = {
  // MEXC master brand — official palette per their brand guidelines.
  // Color names follow MEXC's own vocabulary (Blue Ribbon, Shakespeare, Black).
  mexc: {
    blueRibbon: "#1463FE",   // primary brand blue
    shakespeare: "#509AD0",  // secondary blue — softer, complementary
    black: "#000000",
    white: "#FFFFFF",
  },

  // Xanthus AI sub-brand ("Xanthus Flame")
  // Canonical 2-stop gradient as used in the logo (Figma source of truth).
  // Etymology framing: the *moment* Xanthus spoke was a moment of divine fire,
  // not passive gold. Fire = intelligence in motion.
  xanthus: {
    flameLight: "#FFA319",  // gradient stop 0% — warm yellow-orange (top)
    flameDeep: "#FF600A",   // gradient stop 100% — deep orange (bottom)
    flame: "#FF8013",       // derived mid-point for solid use
    flameShadow: "#CC4500", // shadow tone for layered compositions
  },

  // Neutrals for dark mode and contrast
  neutral: {
    onyx: "#050508",
    indigoDeep: "#1A0E3D",
    pureWhite: "#FFFFFF",
    paperWarm: "#F8F4EC",
  },
} as const;

/**
 * Gradient presets for the Xanthus mark and motion states.
 * Always pair Xanthus flame with MEXC blue in compositions — never use the
 * flame gradient in isolation, or the sub-brand disconnects from the master.
 */
export const gradients = {
  // Primary Xanthus mark gradient — matches the logo SVG exactly.
  // Linear top-to-bottom (180deg) per the Figma source.
  xanthusFlame: `linear-gradient(180deg, ${colors.xanthus.flameLight} 0%, ${colors.xanthus.flameDeep} 100%)`,

  // 135deg diagonal variant for surfaces where vertical doesn't fit
  xanthusFlameDiagonal: `linear-gradient(135deg, ${colors.xanthus.flameLight} 0%, ${colors.xanthus.flameDeep} 100%)`,

  // MEXC platform foundation: Blue Ribbon deepening to Shakespeare
  mexcBlueDepth: `linear-gradient(180deg, ${colors.mexc.blueRibbon} 0%, ${colors.mexc.shakespeare} 100%)`,

  // The full brand cosmology: MEXC blue meets Xanthus flame
  // Use only on hero surfaces (splash screen, launch marketing)
  sunsetOcean: `linear-gradient(135deg, ${colors.mexc.blueRibbon} 0%, ${colors.xanthus.flameDeep} 100%)`,
} as const;

/**
 * Typography system.
 * - Display: classical serif for the Xanthus wordmark (Cormorant as free Google Font stand-in;
 *   target acquisition: PP Editorial New or GT Sectra Display for final).
 * - Body: Geist Sans (Next.js default, harmonizes with MEXC's geometric sans).
 * - Mono: Geist Mono for numerical/data displays.
 */
export const typography = {
  display: {
    family: '"Cormorant", "PP Editorial New", "GT Sectra Display", Georgia, serif',
    weights: { regular: 400, medium: 500, semibold: 600, bold: 700 },
  },
  body: {
    family: 'var(--font-geist-sans), system-ui, sans-serif',
    weights: { regular: 400, medium: 500, semibold: 600 },
  },
  mono: {
    family: 'var(--font-geist-mono), "JetBrains Mono", monospace',
  },
  // CJK pairing for bilingual deliverables
  cjk: {
    family: '"PingFang SC", "HarmonyOS Sans", "Microsoft YaHei", sans-serif',
  },
} as const;

/**
 * Motion timings for the three IP character states.
 * Eased, calligraphic, never linear. Reference: Apple Intelligence boundary glow.
 */
export const motion = {
  idle: {
    duration: 3000,            // ms — slow breathing loop
    ease: [0.4, 0, 0.2, 1],    // ease-in-out
    loop: true,
  },
  generating: {
    duration: 1800,            // ms — quicker, alive
    ease: [0.65, 0, 0.35, 1],  // ease-in-out-cubic
    loop: true,
  },
  output: {
    duration: 900,             // ms — decisive snap to final state
    ease: [0.16, 1, 0.3, 1],   // ease-out-expo (the satisfying settle)
    loop: false,
  },
} as const;
