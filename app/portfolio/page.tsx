"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { heroByCaseId, GenericVisual } from "./visuals";

const PASSWORD_HASH =
  "057ba03d6c44104863dc7361fe4578965d1887360f90a0895882e58a6248fc86";
const STORAGE_KEY = "portfolio-auth";

async function sha256(input: string): Promise<string> {
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return [...new Uint8Array(digest)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

type Metric = { value: string; label: string };

type CaseStudy = {
  id: string;
  company: string;
  role: string;
  period: string;
  hook: string;
  tags: string[];
  problem: string;
  approach: string[];
  solution: string;
  outcome: string;
  metrics: Metric[];
  visuals: number; // number of placeholder visuals to render
};

const cases: CaseStudy[] = [
  {
    id: "wipro",
    company: "WIPRO",
    role: "Principal UX Consultant",
    period: "Apr 2022 — Apr 2023",
    hook:
      "Directed UX engagements for TD Bank, Estée Lauder, and FedEx — turning Fortune 500 ambition into shipping product.",
    tags: ["Enterprise UX", "Fortune 500", "Salesforce Lightning", "E-commerce"],
    problem:
      "Three very different Fortune 500 clients with one shared symptom: digital surfaces that didn't match their brand promise. TD Bank's mobile banking was leaking transactions. Estée Lauder's global e-commerce wasn't converting. FedEx had a UX modernization to land. Each needed senior direction, fast, with no time to ramp.",
    approach: [
      "Plugged into each client's product + engineering teams as a Principal — not a contractor on the bench",
      "TD Bank: rebuilt the mobile banking flow on Salesforce Lightning Design System",
      "Estée Lauder: re-architected the global e-commerce experience around real conversion friction",
      "Held a portfolio view across 5 enterprise projects and a $5M+ engagement book",
    ],
    solution:
      "Senior UX leadership embedded into each engagement — fast, opinionated, accountable to outcomes — with reusable patterns and design QA so the wins stuck after I left the room.",
    outcome:
      "Three Fortune 500 clients, three measurable lifts, and a 95% client satisfaction rate across the portfolio.",
    metrics: [
      { value: "$12M", label: "Added quarterly revenue (Estée Lauder)" },
      { value: "32%", label: "Mobile banking adoption lift (TD Bank)" },
      { value: "95%", label: "Client satisfaction across 5 projects" },
    ],
    visuals: 4,
  },
  {
    id: "tds-telecom",
    company: "TDS Telecom",
    role: "Senior UX/UI Designer",
    period: "2024 — Present",
    hook:
      "Modernizing a legacy advisor tooling stack used daily across small to mid-size urban, suburban, and rural markets.",
    tags: ["Internal Tools", "Service Design", "Workflow Modernization"],
    problem:
      "Advisors were bouncing across half a dozen disconnected tools to resolve a single customer issue. The current-state flow was exhausting, error-prone, and slowed every metric the business cared about.",
    approach: [
      "Mapped the advisor's full journey from call open to resolution — what they did, where they got stuck",
      "Built a current-vs-future architecture diagram so leadership could see what consolidation actually looked like",
      "Designed a guided-repair panel that surfaced the right action at the right moment",
      "Iterated with real advisors — not just stakeholders — at every milestone",
    ],
    solution:
      "A consolidated guided-repair experience that pulled the advisor's most-used actions into a single decision pane, with contextual handoffs to the deeper tools when needed.",
    outcome:
      "Advisors hit resolution faster, made fewer wrong-tool detours, and the team could finally measure the work because the flow was unified.",
    metrics: [
      { value: "Multi-tool", label: "Consolidated into one pane" },
      { value: "Faster", label: "Resolution path" },
      { value: "Service-wide", label: "Advisor footprint" },
    ],
    visuals: 4,
  },
  {
    id: "healthedge",
    company: "HealthEdge",
    role: "Lead UX/UI Designer",
    period: "Apr 2023 — Nov 2024",
    hook:
      "Led UX strategy across Claims Processing, Integration, Data Science, and Help Center — modernizing a healthcare platform serving major payers and providers.",
    tags: ["Healthcare", "Platform UX", "B2B + B2C", "Claims Processing"],
    problem:
      "A high-stakes B2B/B2C healthcare platform had grown faster than its UX could keep up. Claims teams were stuck in slow processes, integration tooling was inconsistent, and there was no shared definition of what good UX even looked like across product lines.",
    approach: [
      "Led platform-wide UX modernization across four value streams",
      "Established the company's first UX metrics framework via a systematic platform audit",
      "Reframed claims processing UX around the actual time-to-decision specialists needed",
      "Created actionable benchmarks teams could measure feature adoption against",
    ],
    solution:
      "A unified UX direction with measurable benchmarks, modernized claims and integration surfaces, and a metrics framework that turned 'feels better' into provable lifts.",
    outcome:
      "Customer satisfaction up, claims processing time down, and a feature adoption story that finally had numbers behind it.",
    metrics: [
      { value: "37%", label: "Increase in customer satisfaction" },
      { value: "45%", label: "Reduction in claims processing time" },
      { value: "55%", label: "Improvement in feature adoption" },
    ],
    visuals: 5,
  },
  {
    id: "aflac",
    company: "Aflac",
    role: "Lead UX/UI Designer (COE Team)",
    period: "Sep 2019 — Feb 2022",
    hook:
      "Directed UX/UI strategy across Claims Intake, Employee Benefits, HR, and the Leave Forecaster — serving 50M+ policyholders.",
    tags: ["Insurance", "B2C Enterprise", "AI Forecasting", "Design System"],
    problem:
      "Aflac's enterprise platforms touched 50M+ policyholders, but core flows like benefits enrollment and HR leave management were still slow, manual, and hard for both employees and admins. The COE team needed to lead the next wave of digital transformation across multiple value streams at once.",
    approach: [
      "Owned UX/UI strategy across four enterprise value streams as a COE lead",
      "Rebuilt the employee benefits enrollment flow around real time-to-completion data",
      "Designed the Leave Forecaster — an AI-assisted tool predicting employee absences with high accuracy",
      "Embedded usability and accessibility as non-negotiable defaults across the COE",
    ],
    solution:
      "A modernized benefits enrollment flow that finished much faster, plus a Leave Forecaster tool that gave HR teams predictive power they didn't have before.",
    outcome:
      "Faster enrollments, higher benefits adoption, and HR teams that could now plan for absences instead of reacting to them.",
    metrics: [
      { value: "75%", label: "Faster benefits enrollment" },
      { value: "92%", label: "Leave Forecaster accuracy" },
      { value: "45%", label: "Admin overhead reduction" },
    ],
    visuals: 3,
  },
];

function CaseStudy({ c, index }: { c: CaseStudy; index: number }): React.JSX.Element {
  const Hero = heroByCaseId[c.id];
  return (
    <section
      id={c.id}
      className="py-20 px-6 border-t border-white/10 scroll-mt-20"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Header row */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-widest text-red-400 mb-2">
            Case 0{index + 1} · {c.period}
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="text-4xl lg:text-5xl font-semibold">{c.company}</h2>
            <div className="text-white/60 text-sm">{c.role}</div>
          </div>
          <p className="text-xl text-white/85 max-w-3xl leading-relaxed mt-5">
            {c.hook}
          </p>
          <div className="flex flex-wrap gap-2 mt-5">
            {c.tags.map((t) => (
              <span
                key={t}
                className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="aspect-[16/9] lg:aspect-[2/1] rounded-2xl overflow-hidden border border-white/10 mb-12">
          {Hero ? <Hero /> : <GenericVisual seed={index} />}
        </div>

        {/* Metrics strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {c.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl border border-white/10 bg-white/5 p-5 text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-red-600 via-rose-400 to-red-600 bg-clip-text text-transparent">
                {m.value}
              </div>
              <div className="text-xs uppercase tracking-widest text-white/60 mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-red-400 mb-3">
              The problem
            </h3>
            <p className="text-white/80 leading-relaxed">{c.problem}</p>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-red-400 mb-3">
              The approach
            </h3>
            <ul className="space-y-2">
              {c.approach.map((step) => (
                <li
                  key={step}
                  className="text-white/80 text-sm flex gap-2 leading-relaxed"
                >
                  <span className="text-red-400 shrink-0">→</span>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-widest text-red-400 mb-3">
              The outcome
            </h3>
            <p className="text-white/80 leading-relaxed mb-3">{c.solution}</p>
            <p className="text-white/70 leading-relaxed text-sm">{c.outcome}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PortfolioContent(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 uppercase tracking-widest">
              NDA cleared
            </span>
            <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 uppercase tracking-widest">
              Selected work
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-5">
            Portfolio
          </h1>
          <p className="text-xl text-white/85 max-w-3xl leading-relaxed mb-8">
            Product Design Leader. Enterprise UX/UI. Design Systems.
            AI-driven product experiences. Each case below leads with the
            problem, the approach, the outcome, and the numbers.
          </p>
          <div className="border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
              Past work spans
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-white/70 text-sm">
              {[
                "TD Bank",
                "FedEx",
                "Estée Lauder",
                "American Express",
                "Aflac",
                "HealthEdge",
                "BYUtv",
                "Vans Warped Tour",
              ].map((c) => (
                <span key={c} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-red-400" />
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Index */}
      <section className="pb-12 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cases.map((c, i) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className="group block rounded-xl border border-white/10 bg-white/5 hover:bg-white/[0.07] hover:border-red-500/40 p-5 transition-all"
              >
                <div className="text-xs uppercase tracking-widest text-red-400 mb-2">
                  Case 0{i + 1}
                </div>
                <div className="text-lg font-semibold mb-1 group-hover:text-red-300 transition-colors">
                  {c.company}
                </div>
                <div className="text-xs text-white/60">{c.role}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {cases.map((c, i) => (
        <CaseStudy key={c.id} c={c} index={i} />
      ))}

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold mb-3">
            Want a deeper walkthrough?
          </h2>
          <p className="text-white/70 mb-6">
            Most of these have richer material I can share live — flows,
            sketches, before/after screens, decisions that didn&apos;t make the
            cut. Email me and I&apos;ll set up a session.
          </p>
          <a
            href="mailto:ross@codedink.com?subject=Portfolio%20walkthrough"
            className="inline-block rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-medium px-6 py-3 transition-all shadow-lg shadow-red-900/40"
          >
            Schedule a walkthrough →
          </a>
        </div>
      </section>
    </>
  );
}

export default function Portfolio(): React.JSX.Element {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setAuthed(sessionStorage.getItem(STORAGE_KEY) === "1");
  }, []);

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    const hash = await sha256(password);
    if (hash === PASSWORD_HASH) {
      sessionStorage.setItem(STORAGE_KEY, "1");
      setAuthed(true);
    } else {
      setError("Nope — try again, or ping me and I'll send you the key.");
      setPassword("");
    }
    setSubmitting(false);
  }

  if (authed === null) {
    return <main className="min-h-screen bg-[#110720]" />;
  }

  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />
      {authed ? (
        <PortfolioContent />
      ) : (
        <section className="pt-32 pb-20 px-6 flex items-center justify-center">
          <div className="w-full max-w-xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 lg:p-10 backdrop-blur-md shadow-2xl shadow-red-900/20">
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-800 shadow-lg shadow-red-900/50">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-8 h-8 text-white"
                  aria-hidden="true"
                >
                  <rect x="4" y="11" width="16" height="10" rx="2" />
                  <path d="M8 11V7a4 4 0 1 1 8 0v4" />
                  <circle cx="12" cy="16" r="1.3" fill="currentColor" />
                </svg>
                <span className="absolute -top-1 -right-1 text-[10px] font-bold tracking-widest bg-black/60 border border-red-500/40 text-red-300 rounded-full px-2 py-0.5">
                  NDA
                </span>
              </div>
            </div>

            <h1 className="text-3xl font-semibold text-center mb-3">
              Classified by{" "}
              <span className="bg-gradient-to-r from-red-600 via-rose-400 to-red-600 bg-clip-text text-transparent">
                legal
              </span>
              , not by ego.
            </h1>

            <p className="text-white/80 text-center leading-relaxed mb-6">
              Most of my best work lives under signed NDAs with Enterprise and
              Fortune 500 clients. I can&apos;t drop screenshots into a public
              gallery without summoning a legal team, so everything sensitive
              sits behind this little red door.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6 text-sm text-white/75 space-y-2">
              <p className="font-semibold text-white">What&apos;s inside:</p>
              <ul className="space-y-1.5 list-none">
                <li className="flex gap-2">
                  <span className="text-red-400 shrink-0">→</span>
                  <span>Case studies from WIPRO, HealthEdge, Aflac, and TDS Telecom</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 shrink-0">→</span>
                  <span>Design system work, research artifacts, and before/after flows</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-400 shrink-0">→</span>
                  <span>Full-resolution visuals (no blurred screenshots)</span>
                </li>
              </ul>
            </div>

            <p className="text-white/70 text-sm text-center mb-6">
              Recruiter, hiring manager, or just curious?{" "}
              <a
                href="mailto:ross@codedink.com?subject=Portfolio%20access"
                className="text-red-400 hover:text-red-300 underline underline-offset-2"
              >
                Email me
              </a>{" "}
              and I&apos;ll send you the password.
            </p>

            <form onSubmit={handleSubmit}>
              <label className="block text-sm text-white/80 mb-2" htmlFor="pwd">
                Password
              </label>
              <input
                id="pwd"
                type="password"
                autoFocus
                placeholder="Enter the key"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg bg-white/10 border border-white/10 px-3 py-2.5 text-white placeholder-white/30 outline-none focus:border-red-500 transition-colors"
              />
              {error && (
                <p className="text-red-400 text-sm mt-2">{error}</p>
              )}
              <button
                type="submit"
                disabled={submitting || !password}
                className="mt-5 w-full rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-2.5 transition-all shadow-lg shadow-red-900/40"
              >
                {submitting ? "Verifying…" : "Unlock portfolio"}
              </button>
            </form>
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
