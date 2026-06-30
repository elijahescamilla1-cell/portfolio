import { motion } from "motion/react";

// ── Screenshots ──────────────────────────────────────────────────────────────
import ccDashboard from "../assets/work/command-center-dashboard.jpg";
import ccAcademics from "../assets/work/command-center-academics.jpg";
import ccLsat from "../assets/work/command-center-lsat.jpg";
import ccEmail from "../assets/work/command-center-email.jpg";
import nullifyScore from "../assets/work/nullify-privacy-score.png";
import nullifyExposure from "../assets/work/nullify-exposure.png";
import nullifyRisk from "../assets/work/nullify-risk-profile.png";
import spotlightDiscover from "../assets/work/spotlight-discover.png";
import spotlightDashboard from "../assets/work/spotlight-dashboard.png";
import spotlightBooking1 from "../assets/work/spotlight-booking-1.png";
import spotlightBooking2 from "../assets/work/spotlight-booking-2.png";
import ghosttraceProtection from "../assets/work/ghosttrace-protection.png";
import ghosttraceRemovals from "../assets/work/ghosttrace-removals.png";
import ghosttracePlans from "../assets/work/ghosttrace-plans.png";

const HEADING = { fontFamily: "'Chakra Petch', sans-serif" } as const;

// ── Shared bits ──────────────────────────────────────────────────────────────
function ToolChip({ label }: { label: string }) {
  return (
    <span className="font-mono text-[11px] text-muted-foreground bg-card border border-border rounded-md px-2.5 py-1">
      {label}
    </span>
  );
}

function ProvesRow({ lead, children }: { lead: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 py-3 border-t border-border">
      <span className="font-mono text-primary">→</span>
      <p className="m-0 text-sm leading-relaxed text-muted-foreground">
        <strong className="text-foreground font-semibold">{lead} </strong>
        {children}
      </p>
    </div>
  );
}

function PhoneShot({ src, caption }: { src: string; caption: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full aspect-[9/19.5] rounded-[26px] border border-border bg-[#0c0c12] p-1.5 shadow-[0_22px_44px_-26px_rgba(0,0,0,0.5)] overflow-hidden">
        <img src={src} alt={caption} className="w-full h-full object-cover rounded-[20px] block" />
      </div>
      <span className="font-mono text-[10.5px] text-muted-foreground text-center">{caption}</span>
    </div>
  );
}

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

type ProjectHeaderProps = {
  status: string;
  statusColor?: string;
  dot?: boolean;
  title: string;
  tagline: string;
  description: string;
  tools: string[];
  proves: { lead: string; body: string }[];
};

function ProjectHeader(p: ProjectHeaderProps) {
  const color = p.statusColor ?? "text-muted-foreground";
  return (
    <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
      <div>
        <div className={`font-mono text-[10.5px] tracking-[0.16em] uppercase flex items-center gap-2 ${color}`}>
          {p.dot && <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />}
          {p.status}
        </div>
        <h2 className="text-4xl font-bold tracking-tight mt-3.5 mb-0" style={HEADING}>
          {p.title}
        </h2>
        <p className="text-lg leading-snug text-secondary-foreground mt-2.5 mb-0">{p.tagline}</p>
        <p className="text-[15.5px] leading-relaxed text-muted-foreground mt-5 mb-0">{p.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tools.map((t) => (
            <ToolChip key={t} label={t} />
          ))}
        </div>
      </div>
      <div>
        <div className="font-mono text-[10px] tracking-[0.16em] uppercase text-primary mb-1.5">What this proves</div>
        {p.proves.map((row) => (
          <ProvesRow key={row.lead} lead={row.lead}>
            {row.body}
          </ProvesRow>
        ))}
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <main className="min-h-screen pt-24 pb-24 px-6" style={{ background: "var(--surface-alt)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Section intro */}
        <motion.div {...reveal} className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-primary" />
            <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase">Featured Work</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight" style={HEADING}>
              Systems I've Built
            </h1>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Five systems shipped across AI, iOS, privacy tech, and automation — each built to solve a real problem,
              end to end.
            </p>
          </div>
        </motion.div>

        {/* ── 01 · Command Center ─────────────────────────────────────────── */}
        <motion.article {...reveal} className="border-t border-border pt-14 mb-14">
          <ProjectHeader
            status="Live · Deployed"
            statusColor="text-emerald-500"
            dot
            title="Command Center"
            tagline="Every task, deadline, and follow-up in one place."
            description="A live, deployed dashboard that runs my entire operation — priorities, deadlines, and goals in a single system. I then rebuilt it for a client (a solo salon owner) tracking weekly income, bookings, and follow-up outreach. Same architecture, a completely different business. An automated email reviews the board every morning and briefs what's actually moving."
            tools={["React", "Vercel", "Automated email"]}
            proves={[
              { lead: "Operational visibility.", body: "One source of truth for every task and deadline." },
              { lead: "Repeatable system.", body: "Built for me, redeployed for a client's business." },
              { lead: "Follow-through.", body: "A daily AI debrief keeps the whole system honest." },
            ]}
          />

          <div className="mt-10 flex flex-col gap-7">
            <figure className="m-0">
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[0_24px_50px_-30px_rgba(0,0,0,0.5)]">
                <div className="h-9 flex items-center gap-1.5 px-3.5 border-b border-border" style={{ background: "var(--surface-alt)" }}>
                  <span className="w-2.5 h-2.5 rounded-full border border-border" />
                  <span className="w-2.5 h-2.5 rounded-full border border-border" />
                  <span className="w-2.5 h-2.5 rounded-full border border-border" />
                  <span className="ml-2.5 font-mono text-[10px] text-muted-foreground">command-center.app</span>
                </div>
                <img src={ccDashboard} alt="Command Center week view dashboard" className="block w-full h-auto" />
              </div>
              <figcaption className="font-mono text-[11px] tracking-wide text-muted-foreground mt-3">
                Live ops dashboard — week view
              </figcaption>
            </figure>

            <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-7 items-start">
              <figure className="m-0">
                <div className="flex gap-3.5">
                  <img src={ccAcademics} alt="Academics tracking" className="w-[calc(50%-7px)] h-auto rounded-2xl border border-border shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)]" />
                  <img src={ccLsat} alt="LSAT prep tracking" className="w-[calc(50%-7px)] h-auto rounded-2xl border border-border shadow-[0_18px_40px_-26px_rgba(0,0,0,0.45)]" />
                </div>
                <figcaption className="font-mono text-[11px] tracking-wide text-muted-foreground mt-3">
                  Goals &amp; deadlines — tracked on mobile
                </figcaption>
              </figure>
              <figure className="m-0">
                <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-[0_24px_50px_-30px_rgba(0,0,0,0.5)]">
                  <img src={ccEmail} alt="Daily accountability email debrief" className="block w-full h-auto" />
                </div>
                <figcaption className="font-mono text-[11px] tracking-wide text-muted-foreground mt-3 leading-relaxed">
                  Daily debrief — an automated email that reviews the board every morning and lays out the day's
                  priorities in order.
                </figcaption>
              </figure>
            </div>
          </div>
        </motion.article>

        {/* ── 02 · Document Automation ────────────────────────────────────── */}
        <motion.article {...reveal} className="border-t border-border pt-14 mb-14">
          <ProjectHeader
            status="⌘ Built with Python"
            title="Document Automation"
            tagline="When the workflow needs a tool that doesn't exist, I write it."
            description="A set of Python scripts that batch-convert any document into a clean, sendable PDF, plain text, or Markdown in a single command — no twelve-click process, no third-party site holding onto your data. It turns a repetitive, error-prone task into one reliable command."
            tools={["Python"]}
            proves={[
              { lead: "Initiative.", body: "I close the gap myself instead of waiting for a tool." },
              { lead: "Efficiency.", body: "A multi-step task becomes one repeatable step." },
              { lead: "Privacy.", body: "Sensitive files never leave the machine." },
            ]}
          />

          <div className="mt-10 rounded-2xl border border-border overflow-hidden shadow-[0_30px_60px_-34px_rgba(0,0,0,0.6)]" style={{ background: "var(--terminal-bg)" }}>
            <div className="h-[38px] flex items-center gap-1.5 px-4 border-b border-border">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/55" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/55" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/55" />
              <span className="ml-2.5 font-mono text-[10.5px] text-muted-foreground">convert.py — workflow</span>
            </div>
            <div className="px-6 py-5 font-mono text-[13px] leading-loose" style={{ color: "var(--foreground)" }}>
              <div><span className="text-primary">$</span> python convert.py engagement-letter.docx <span className="text-accent">--to</span> pdf</div>
              <div className="text-emerald-500">✓ engagement-letter.pdf — ready to send</div>
              <div className="mt-2"><span className="text-primary">$</span> python convert.py case-notes.txt <span className="text-accent">--to</span> md</div>
              <div className="text-emerald-500">✓ case-notes.md</div>
              <div className="mt-2"><span className="text-primary">$</span> python convert.py /intake/*.docx <span className="text-accent">--to</span> pdf <span className="text-muted-foreground">&nbsp;# batch</span></div>
              <div className="text-emerald-500">✓ 14 files converted<span className="text-muted-foreground"> · 0 errors · 1.8s</span></div>
            </div>
          </div>
        </motion.article>

        {/* ── 03 · Nullify ────────────────────────────────────────────────── */}
        <motion.article {...reveal} className="border-t border-border pt-14 mb-14">
          <ProjectHeader
            status="◆ In development · Pre-launch"
            statusColor="text-accent"
            title="Nullify"
            tagline="Sensitive data handled with accuracy and accountability."
            description="A white-glove privacy service that removes high-net-worth clients' personal data from broker sites and keeps it off through monthly monitoring. The build runs a real pipeline: risk scoring, broker-by-broker removal, and re-listing detection — every client and every removal tracked to completion."
            tools={["React Native", "Expo", "iOS"]}
            proves={[
              { lead: "Accuracy.", body: "A tracked, step-by-step process with no margin for error." },
              { lead: "Confidentiality.", body: "Built around sensitive personal data handled with care." },
              { lead: "Follow-through.", body: "Every item monitored and tracked to completion." },
            ]}
          />
          <div className="grid grid-cols-3 gap-5 mt-10 max-w-2xl">
            <PhoneShot src={nullifyScore} caption="Privacy score" />
            <PhoneShot src={nullifyExposure} caption="Exposure & activity" />
            <PhoneShot src={nullifyRisk} caption="Client risk profile" />
          </div>
        </motion.article>

        {/* ── 04 · Spotlight ──────────────────────────────────────────────── */}
        <motion.article {...reveal} className="border-t border-border pt-14 mb-14">
          <ProjectHeader
            status="◆ In development · Beta"
            statusColor="text-accent"
            title="Spotlight"
            tagline="Coordinating two parties to a clear, agreed outcome."
            description="An iOS marketplace connecting event clients with DJs, photographers, and other creators — built to replace bookings buried in DMs with clear terms agreed up front. The product was the easy part; the real work was getting both sides to a documented yes."
            tools={["iOS native"]}
            proves={[
              { lead: "Communication.", body: "Clear, professional contact with multiple parties at once." },
              { lead: "Coordination.", body: "Keeping two sides aligned to a documented agreement." },
              { lead: "Relationship-building.", body: "Getting people to say yes and follow through." },
            ]}
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 max-w-3xl">
            <PhoneShot src={spotlightDiscover} caption="Discover feed" />
            <PhoneShot src={spotlightDashboard} caption="Creator dashboard" />
            <PhoneShot src={spotlightBooking1} caption="Booking profile" />
            <PhoneShot src={spotlightBooking2} caption="Portfolio & reviews" />
          </div>
        </motion.article>

        {/* ── 05 · GhostTrace ─────────────────────────────────────────────── */}
        <motion.article {...reveal} className="border-t border-border pt-14">
          <ProjectHeader
            status="▣ Prototype"
            title="GhostTrace"
            tagline="Test, learn, refine — attention to detail end to end."
            description="The SwiftUI prototype that came before Nullify: a protection-score dashboard, a broker-results view, and tiered pricing. Building it taught me where an automated process falls short — exactly the detail that reshaped Nullify's approach."
            tools={["SwiftUI", "iOS"]}
            proves={[
              { lead: "Attention to detail.", body: "Caught the gaps that reshaped the next build." },
              { lead: "Iteration.", body: "Tested, learned, and refined rather than settling." },
              { lead: "Care.", body: "A polished, fully-built prototype, not a rough sketch." },
            ]}
          />
          <div className="grid grid-cols-3 gap-5 mt-10 max-w-2xl">
            <PhoneShot src={ghosttraceProtection} caption="Protection score" />
            <PhoneShot src={ghosttraceRemovals} caption="Data removals" />
            <PhoneShot src={ghosttracePlans} caption="Pricing plans" />
          </div>
        </motion.article>
      </div>
    </main>
  );
}
