"use client";

import { Deck } from "@/components/deck/Deck";
import { LanguageProvider } from "@/components/deck/LanguageContext";
import { CoverSlide } from "@/components/deck/slides/cover";
import { ProblemSlide } from "@/components/deck/slides/01-problem";
import { LandscapeSlide } from "@/components/deck/slides/landscape";
import { QuestionSlide } from "@/components/deck/slides/question";
import { LogoRevealSlide } from "@/components/deck/slides/02-logo-reveal";
import { NameSlide } from "@/components/deck/slides/name";
import { MissionSlide } from "@/components/deck/slides/mission";
import { GeometrySlide } from "@/components/deck/slides/geometry";
import { ColorSlide } from "@/components/deck/slides/color";
import { BentoSlide } from "@/components/deck/slides/bento";
import { IPStatesSlide } from "@/components/deck/slides/ip-states";
import { ContextSlide } from "@/components/deck/slides/context";
import { PitchSlide } from "@/components/deck/slides/pitch";
import { LaunchSlide } from "@/components/deck/slides/launch";

const slides = [
  <CoverSlide key="cover" />,
  <ProblemSlide key="problem" />,
  <LandscapeSlide key="landscape" />,
  <QuestionSlide key="question" />,
  <LogoRevealSlide key="logo-reveal" />,
  <NameSlide key="name" />,
  <MissionSlide key="mission" />,
  <GeometrySlide key="geometry" />,
  <ColorSlide key="color" />,
  <BentoSlide key="bento" />,
  <IPStatesSlide key="ip-states" />,
  <ContextSlide key="context" />,
  <PitchSlide key="pitch" />,
  <LaunchSlide key="launch" />,
];

export default function DeckPage() {
  return (
    <LanguageProvider>
      <Deck slides={slides} />
    </LanguageProvider>
  );
}
