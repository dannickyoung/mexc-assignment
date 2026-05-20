"use client";

import { motion } from "framer-motion";

/**
 * Constructive Xanthus mark - the two strokes slide in horizontally from
 * the left and right, then converge to form the X.
 *
 * Animation sequence:
 *   0.0 - 0.8s   strokes fade in at their offset positions (audience sees the pieces apart)
 *   0.8 - 2.2s   strokes glide together to form the mark
 *   2.2s         the X is whole
 */
export function XanthusMarkAnimated({
  size = 220,
  className = "",
  startDelay = 0.2,
}: {
  size?: number;
  className?: string;
  startDelay?: number;
}) {
  const aspectRatio = 148 / 111;
  const height = size;
  const width = height * aspectRatio;

  const strokeTransition = {
    duration: 1.1,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 148 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: "visible" }}
      aria-label="Xanthus mark"
    >
      <defs>
        <linearGradient
          id="xanthus-animated-gradient"
          x1="74"
          y1="0"
          x2="74"
          y2="111"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFA319" />
          <stop offset="1" stopColor="#FF600A" />
        </linearGradient>
      </defs>

      {/* Top stroke (the upper "/" of the X) - slides in from the LEFT */}
      <motion.path
        d="M73.9992 60.51L5.3792 19.34C0.699196 16.53 -1.4408 10.52 1.0492 5.63C2.8792 2.01 6.4892 0 10.2192 0C12.0092 0 13.8392 0.47 15.4792 1.46L74.0192 36.59L100.149 20.91C104.916 18.05 111.309 19.06 114.419 23.66C117.729 28.57 116.209 35.19 111.189 38.19L74.0092 60.51H73.9992Z"
        fill="url(#xanthus-animated-gradient)"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ...strokeTransition, delay: startDelay }}
      />

      {/* Bottom stroke (the lower "\" of the X) - slides in from the RIGHT */}
      <motion.path
        d="M74.0008 50.49L142.621 91.66C147.301 94.47 149.441 100.48 146.951 105.37C145.121 108.99 141.511 111 137.781 111C135.991 111 134.161 110.53 132.521 109.54L73.9808 74.41L47.8508 90.09C43.0808 92.95 36.6908 91.94 33.5808 87.34C30.2708 82.43 31.7908 75.81 36.8108 72.81L73.9908 50.49L74.0008 50.49Z"
        fill="url(#xanthus-animated-gradient)"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ...strokeTransition, delay: startDelay }}
      />
    </svg>
  );
}
