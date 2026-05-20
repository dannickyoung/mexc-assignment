"use client";

import { motion } from "framer-motion";

const PATH_TOP =
  "M73.9992 60.51L5.3792 19.34C0.699196 16.53 -1.4408 10.52 1.0492 5.63C2.8792 2.01 6.4892 0 10.2192 0C12.0092 0 13.8392 0.47 15.4792 1.46L74.0192 36.59L100.149 20.91C104.919 18.05 111.309 19.06 114.419 23.66C117.729 28.57 116.209 35.19 111.189 38.19L74.0092 60.51H73.9992Z";

const PATH_BOTTOM =
  "M74.0008 50.49L142.621 91.66C147.301 94.47 149.441 100.48 146.951 105.37C145.121 108.99 141.511 111 137.781 111C135.991 111 134.161 110.53 132.521 109.54L73.9808 74.41L47.8508 90.09C43.0808 92.95 36.6908 91.94 33.5808 87.34C30.2708 82.43 31.7908 75.81 36.8108 72.81L73.9908 50.49L74.0008 50.49Z";

type State = "idle" | "generating" | "output";

/**
 * Xanthus IP character ,  three states.
 *   idle:       slow breathing ,  the mark waiting, alive but calm
 *   generating: the two strokes oscillate apart and back together, signaling
 *               counsel forming (echoes the logo's construction story)
 *   output:     decisive pulse outward ,  the answer arriving
 */
export function XanthusMarkState({
  state,
  size = 88,
  className = "",
}: {
  state: State;
  size?: number;
  className?: string;
}) {
  const aspectRatio = 148 / 111;
  const width = size * aspectRatio;
  const height = size;
  const gradientId = `xanthus-state-${state}`;

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {/* Output state ,  radiating glow ring behind the mark */}
      {state === "output" && (
        <motion.div
          aria-hidden
          className="absolute rounded-full"
          style={{
            width: width * 1.6,
            height: width * 1.6,
            background:
              "radial-gradient(circle, rgba(255,107,53,0.35) 0%, rgba(255,107,53,0) 65%)",
          }}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.6, 1.4, 0.6], opacity: [0, 0.9, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      )}

      {/* The mark itself */}
      <motion.svg
        width={width}
        height={height}
        viewBox="0 0 148 111"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
        style={{ overflow: "visible" }}
        animate={
          state === "idle"
            ? { scale: [1, 1.04, 1] }
            : state === "output"
            ? { scale: [1, 1.12, 1] }
            : { scale: 1 }
        }
        transition={
          state === "idle"
            ? { duration: 3, repeat: Infinity, ease: "easeInOut" }
            : state === "output"
            ? { duration: 1.6, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }
            : { duration: 0 }
        }
      >
        <defs>
          <linearGradient
            id={gradientId}
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

        {/* Top stroke ,  for "generating" it lifts away, then returns */}
        <motion.path
          d={PATH_TOP}
          fill={`url(#${gradientId})`}
          animate={
            state === "generating"
              ? { y: [0, -10, 0, -10, 0], rotate: [0, -3, 0, 3, 0] }
              : { y: 0, rotate: 0 }
          }
          transition={
            state === "generating"
              ? {
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : { duration: 0 }
          }
          style={{ transformOrigin: "74px 30px" }}
        />

        {/* Bottom stroke ,  mirror motion */}
        <motion.path
          d={PATH_BOTTOM}
          fill={`url(#${gradientId})`}
          animate={
            state === "generating"
              ? { y: [0, 10, 0, 10, 0], rotate: [0, 3, 0, -3, 0] }
              : { y: 0, rotate: 0 }
          }
          transition={
            state === "generating"
              ? {
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : { duration: 0 }
          }
          style={{ transformOrigin: "74px 80px" }}
        />
      </motion.svg>
    </div>
  );
}
