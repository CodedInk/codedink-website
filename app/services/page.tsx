import Header from "../components/Header";
import Footer from "../components/Footer";

type Tier = {
  name: string;
  price: string;
  pitch: string;
  includes: string[];
  bestFor: string;
};

const tiers: Tier[] = [
  {
    name: "Design Advisory",
    price: "from $2,500/mo",
    pitch:
      "For founders, product leads, and teams that need senior design thinking on call.",
    includes: [
      "Ongoing product and UX guidance",
      "Design reviews and feedback",
      "Workflow and feature consultation",
      "IA, flows, and prioritization help",
      "Async support with weekly check-ins",
    ],
    bestFor:
      "Teams that already have execution capacity but need experienced direction.",
  },
  {
    name: "Embedded Product Design",
    price: "from $4,500/mo",
    pitch: "A monthly design partner for active product work.",
    includes: [
      "UX/UI design for active initiatives",
      "Wireframes, flows, and high-fidelity screens",
      "Design system guidance",
      "Developer-ready specs and handoff",
      "Collaboration with product and engineering",
    ],
    bestFor:
      "Teams shipping features, modernizing platforms, or improving internal tools.",
  },
  {
    name: "CodedInk Systems & Sites",
    price: "from $5,500/mo",
    pitch:
      "For businesses that need strategy, UX, and web execution under one roof.",
    includes: [
      "UX strategy and structure",
      "Website architecture and content guidance",
      "Custom web design direction",
      "Landing pages or modular site systems",
      "Conversion, usability, and messaging improvements",
    ],
    bestFor:
      "Brands that need a serious website or a more strategic digital presence.",
  },
];

const addons: string[] = [
  "UX audit",
  "Design system audit",
  "Research synthesis",
  "Workflow mapping workshop",
  "Landing page design",
  "Resume / portfolio PDF refresh",
  "Password-protected portfolio setup",
];

export default function Services(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-white">
      <Header />

      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight mb-6">
            Services
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto mb-4">
            Services built for teams that need{" "}
            <span className="text-red-400">clarity</span>,{" "}
            <span className="text-red-400">momentum</span>, and{" "}
            <span className="text-red-400">strong execution</span>.
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Whether you need a senior design partner, better product thinking,
            a cleaner UX foundation, or a sharper web presence — I offer
            flexible ways to plug in.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {tiers.map((t, i) => (
              <div
                key={t.name}
                className="bg-gradient-to-br from-slate-950 via-red-950/40 to-slate-950 rounded-2xl p-8 border border-white/10 hover:border-red-500/40 transition-colors flex flex-col"
              >
                <div className="text-xs uppercase tracking-widest text-red-400 mb-3">
                  Tier {i + 1}
                </div>
                <h2 className="text-2xl font-semibold mb-2">{t.name}</h2>
                <p className="text-white/70 text-sm mb-4">{t.pitch}</p>
                <p className="bg-gradient-to-r from-red-600 via-rose-400 to-red-600 bg-clip-text text-transparent text-2xl font-bold mb-6">
                  {t.price}
                </p>
                <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
                  Includes
                </p>
                <ul className="space-y-2 mb-6 flex-1">
                  {t.includes.map((inc) => (
                    <li
                      key={inc}
                      className="text-white/80 text-sm flex gap-2"
                    >
                      <span className="text-red-400 shrink-0">→</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs uppercase tracking-widest text-white/50 mb-2">
                    Best for
                  </p>
                  <p className="text-white/70 text-sm">{t.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-2">One-time add-ons</h2>
            <p className="text-white/70 text-sm mb-6">
              Standalone engagements outside the subscription tiers.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {addons.map((a) => (
                <li
                  key={a}
                  className="text-white/80 flex gap-2"
                >
                  <span className="text-red-400 shrink-0">→</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-lg text-white/80 mb-6">
            Currently available for select freelance, consulting, and
            subscription-based engagements.
          </p>
          <a
            href="mailto:ross@codedink.com?subject=CodedInk%20engagement"
            className="inline-block rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-medium px-6 py-3 transition-all shadow-lg shadow-red-900/40"
          >
            Start a conversation →
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
