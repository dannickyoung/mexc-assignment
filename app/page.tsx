import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-8 text-center">
      <div className="font-mono text-xs tracking-[0.3em] text-white/40">
        MEXC AI · BRAND PROPOSAL
      </div>

      <h1 className="mt-8 font-display text-6xl tracking-[0.15em] text-white md:text-7xl">
        XANTHUS
      </h1>

      <p className="mt-6 max-w-md text-white/50">
        An AI brand identity proposal for MEXC&apos;s next era.
      </p>

      <div className="mt-12 flex gap-4">
        <Link
          href="/deck"
          className="bg-flame-gradient inline-flex h-12 items-center rounded-full px-8 font-mono text-sm tracking-[0.2em] text-onyx transition-opacity hover:opacity-90"
        >
          OPEN DECK →
        </Link>
        <Link
          href="/report"
          className="inline-flex h-12 items-center rounded-full border border-white/15 px-8 font-mono text-sm tracking-[0.2em] text-white/70 transition-colors hover:bg-white/5"
        >
          READ REPORT
        </Link>
      </div>

      <div className="mt-16 font-mono text-xs tracking-[0.2em] text-white/30">
        Tip: press ← → to navigate the deck.
      </div>
    </main>
  );
}
