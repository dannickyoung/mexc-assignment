"use client";

import { motion } from "framer-motion";
import { CoverLayout } from "../layouts";
import { XanthusMarkAnimated } from "../XanthusMarkAnimated";
import { XanthusWordmark } from "../XanthusWordmark";
import { MexcLogo } from "../MexcLogo";
import { FadeUp } from "../AnimatedText";
import { useT } from "../LanguageContext";

export function LogoRevealSlide() {
  const t = useT({
    en: { presents: "presents", caption: "The next AI in Web3." },
    zh: { presents: "呈献", caption: "Web3 的下一代 AI。" },
  });

  // Animation timeline:
  //   0.2s  MEXC presents fades in
  //   0.8s  Two strokes start sliding in to form X (centered)
  //   1.9s  Strokes finish, X is whole and centered
  //   2.1s  X slides LEFT, wordmark fades in on the RIGHT
  //   3.1s  Caption fades in

  // Shift value: half of (wordmark + gap) so the mark appears centered
  // when alone, then shifts back to its natural left position in the lockup.
  const MARK_SHIFT_X = 245;

  return (
    <CoverLayout>
      <div className="flex flex-col items-center">
        {/* MEXC presents */}
        <FadeUp delay={0.2}>
          <div className="flex items-center gap-5">
            <MexcLogo width={100} />
            <span className="text-sm font-light italic tracking-wider text-white/55">
              {t.presents}
            </span>
          </div>
        </FadeUp>

        {/* Logo lockup container - native horizontal lockup, much bigger */}
        <div className="mt-14 flex items-center gap-7">
          {/* Mark - builds in centered, then slides left when wordmark appears */}
          <motion.div
            initial={{ x: MARK_SHIFT_X }}
            animate={{ x: 0 }}
            transition={{
              delay: 2.0,
              duration: 1.0,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <XanthusMarkAnimated size={190} startDelay={0.8} />
          </motion.div>

          {/* Wordmark - revealed as the mark slides away */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.3,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <XanthusWordmark width={490} fill="#FFFFFF" />
          </motion.div>
        </div>

        {/* Caption */}
        <motion.div
          className="mt-12 text-xs italic tracking-wide text-white/45"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 3.1 }}
        >
          {t.caption}
        </motion.div>
      </div>
    </CoverLayout>
  );
}
