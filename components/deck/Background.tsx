"use client";

import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";

/**
 * Fixed background layer for the entire deck. Renders behind all slides
 * (z-0) so the slides themselves can have transparent backgrounds and
 * float on top of the living gradient.
 *
 * Color palette: Xanthus flame (warm core) → MEXC Blue Ribbon (mid) → pure
 * black (edges). The "brand cosmology" ,  sunset bleeding into ocean , 
 * encoded in the background itself.
 */
export function DeckBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <AnimatedGradientBackground
        startingGap={110}
        animationSpeed={0}
        gradientColors={[
          "#000000", // 1. pure black, center core
          "#000000", // 2. hold black (large dark center)
          "#FF600A", // 3. Xanthus flame deep, inner warm ring
          "#FFA319", // 4. Xanthus flame light
          "#1463FE", // 5. MEXC Blue Ribbon, visible band
          "#000000", // 6. fade back to black at the very edges
        ]}
        gradientStops={[22, 42, 60, 75, 88, 100]}
        topOffset={-20}
      />
      {/* Slight black overlay over the gradient */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />
    </div>
  );
}
