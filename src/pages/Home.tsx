import { motion } from "motion/react";
import { Link } from "react-router-dom";

const HEADING = { fontFamily: "'Chakra Petch', sans-serif" } as const;

const reveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" },
} as const;

export default function Home() {
  return (
    <main
      className="min-h-screen pt-24 pb-24 px-6 flex items-center"
      style={{ background: "var(--surface-alt)" }}
    >
      <div className="max-w-5xl mx-auto w-full">
        <motion.div {...reveal}>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px" style={{ background: "var(--primary)" }} />
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase"
              style={{ color: "var(--primary)" }}
            >
              Builder · Developer
            </span>
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold tracking-tight leading-none mb-6"
            style={{ ...HEADING, color: "var(--foreground)" }}
          >
            I Build Systems<br />
            <span style={{ color: "var(--primary)" }}>That Work.</span>
          </h1>

          <p
            className="text-lg max-w-lg leading-relaxed mb-10"
            style={{ color: "var(--muted-foreground)" }}
          >
            Five products shipped across AI, iOS, privacy tech, and automation —
            each one end-to-end, each one solving a real problem.
          </p>

          <Link
            to="/work"
            className="inline-flex items-center gap-3 font-mono text-sm border rounded-lg px-5 py-3 transition-colors"
            style={{
              borderColor: "var(--border)",
              color: "var(--foreground)",
              background: "var(--card)",
            }}
          >
            <span style={{ color: "var(--primary)" }}>→</span>
            View the work
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
