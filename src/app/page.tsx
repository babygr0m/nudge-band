"use client";

import { motion } from "framer-motion";

/* ── Animations ── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.25, 0.4, 0.25, 1] },
  }),
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const si = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

/* ── Data ── */
const steps = [
  { num: "01", title: "Set Your Trigger", desc: "Choose any coin. Set your price or indicator.", icon: "trigger" },
  { num: "02", title: "Get The Nudge", desc: "When the condition hits, your band vibrates.", icon: "vibrate" },
  { num: "03", title: "Tap To Execute", desc: "Single or double tap to buy or sell instantly.", icon: "tap" },
];

const features = [
  { num: "01", title: "Trade Without Staring at Charts", desc: "Set your conditions once. Live your life. The market comes to you." },
  { num: "02", title: "No Emotional Hesitation", desc: "Physical feedback bypasses overthinking. Feel it. Act on it." },
  { num: "03", title: "One Ticker Focus = Discipline", desc: "Eliminate noise. Track what matters. Execute with conviction." },
  { num: "04", title: "CEX + DEX Compatible", desc: "Works with major centralized and decentralized exchanges." },
  { num: "05", title: "Secure Execution", desc: "End-to-end encrypted. Your keys, your trades, your control." },
];

const cases = [
  { q: "Waiting for the Dip?", type: "BUY" as const, sig: "SOL drops to your target price →", act: "feel it → double tap → executed." },
  { q: "Breakout Alert?", type: "SELL" as const, sig: "Market rips through resistance →", act: "instant vibration → single tap → sell." },
];

/* ── SVG Icons ── */
function TriggerIcon() {
  return (<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#00F0FF" strokeWidth="1.5" /><circle cx="9" cy="9" r="2.5" fill="#00F0FF" /></svg>);
}
function VibrateIcon() {
  return (<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="6" y="3" width="6" height="12" rx="1.5" stroke="#00F0FF" strokeWidth="1.5" /><path d="M3 6.5C2 7.5 2 10.5 3 11.5" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" /><path d="M15 6.5C16 7.5 16 10.5 15 11.5" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" /></svg>);
}
function TapIcon() {
  return (<svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2V6M9 6L12 9H6L9 6Z" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M6 12H12" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" /><path d="M7 15H11" stroke="#00F0FF" strokeWidth="1.5" strokeLinecap="round" /></svg>);
}
const iconMap: Record<string, React.ReactNode> = { trigger: <TriggerIcon />, vibrate: <VibrateIcon />, tap: <TapIcon /> };

/* ── Bracket Card ── */
function Bracket({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative p-7 lg:p-9">
      <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#2a2a2a]" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#2a2a2a]" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#2a2a2a]" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#2a2a2a]" />
      {children}
    </div>
  );
}

/* ── Shared wrapper for consistent page padding ── */
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-10 sm:px-16 lg:px-20 ${className}`}>
      {children}
    </div>
  );
}

const sg = { fontFamily: "var(--font-space-grotesk)" };
const jb = { fontFamily: "var(--font-jetbrains)" };

export default function Home() {
  return (
    <main className="relative bg-[#050507] text-white overflow-x-hidden">

      {/* ════════ S1: HERO ════════ */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20">
        <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[500px] h-[500px] bg-[#00F0FF]/[0.025] rounded-full blur-[140px] pointer-events-none" />
        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
              <motion.h1 className="font-bold tracking-[-0.03em] leading-[0.88]" style={sg} variants={fadeUp} initial="hidden" animate="visible" custom={0}>
                <span className="block text-[clamp(2.8rem,6vw,5.5rem)] text-white uppercase">FEEL THE</span>
                <span className="block text-[clamp(2.8rem,6vw,5.5rem)] text-[#00F0FF] uppercase">MARKET.</span>
              </motion.h1>
              <motion.p className="text-[#666] text-[15px] sm:text-base max-w-[380px] leading-[1.75]" style={sg} variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                Trade without looking. A wearable trading trigger that lets you execute with a tap.
              </motion.p>
              <motion.div className="flex flex-wrap gap-4 mt-1" variants={fadeUp} initial="hidden" animate="visible" custom={2}>
                <a href="#reserve" className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-[#00F0FF] text-[#050507] font-medium text-[12px] tracking-[0.12em] uppercase transition-all duration-300 hover:shadow-[0_0_24px_rgba(0,240,255,0.25)]" style={jb}>RESERVE NUDGE</a>
                <button className="inline-flex items-center justify-center px-7 py-3 rounded-md text-[#666] font-medium text-[12px] tracking-[0.12em] uppercase border border-[#1e1e1e] transition-all duration-300 hover:text-[#00F0FF] hover:border-[#00F0FF]/30" style={jb}>WATCH DEMO</button>
              </motion.div>
            </div>

            {/* Product — drop your renders here */}
            <motion.div className="relative flex items-center justify-center min-h-[380px]" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3 }}>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#00F0FF]/[0.025] rounded-full blur-[80px] pointer-events-none" />
              <div className="relative w-full max-w-[420px] aspect-[4/3] border border-dashed border-[#1a1a1e] rounded-xl flex items-center justify-center">
                <p className="text-[#1e1e1e] text-[10px] tracking-[0.15em] uppercase text-center" style={jb}>BAND RENDERS<br />/public/band-hero.png</p>
              </div>
            </motion.div>
          </div>
        </Container>

        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}>
          <span className="text-[#333] text-[9px] tracking-[0.3em] uppercase" style={jb}>SCROLL</span>
          <motion.div className="w-[1px] h-7 bg-gradient-to-b from-[#333] to-transparent" animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2.5, repeat: Infinity }} />
        </motion.div>
      </section>

      {/* ════════ S2: HOW IT WORKS ════════ */}
      <section id="how-it-works" className="py-40">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p className="text-[#00F0FF] text-[10px] tracking-[0.3em] uppercase mb-5" style={jb} variants={si}>[01] HOW IT WORKS</motion.p>
            <motion.h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-bold leading-[0.95] uppercase mb-20" style={sg} variants={si}>
              THREE STEPS.<br /><span className="text-[#00F0FF]/25">ZERO HESITATION.</span>
            </motion.h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={stagger}>
              {steps.map((s) => (
                <motion.div key={s.num} variants={si}>
                  <Bracket>
                    <span className="block text-[3.5rem] font-bold text-[#0c0c0f] leading-none mb-6 select-none" style={sg}>{s.num}</span>
                    <div className="w-9 h-9 rounded-lg bg-[#00F0FF]/[0.07] border border-[#00F0FF]/[0.12] flex items-center justify-center mb-5">{iconMap[s.icon]}</div>
                    <h3 className="text-[15px] font-semibold text-white mb-2" style={sg}>{s.title}</h3>
                    <p className="text-[#4a4a4a] text-[13px] leading-[1.7]">{s.desc}</p>
                  </Bracket>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ════════ S3: WHY NUDGE ════════ */}
      <section id="why-nudge" className="py-40">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p className="text-[#00F0FF] text-[10px] tracking-[0.3em] uppercase mb-16" style={jb} variants={si}>[02] WHY NUDGE</motion.p>
            {features.map((f, idx) => (
              <motion.div key={f.num} className={`grid grid-cols-1 sm:grid-cols-[60px_1.2fr_1.5fr] gap-3 sm:gap-8 items-baseline py-7 ${idx !== features.length - 1 ? "border-b border-[#0e0e10]" : ""}`} variants={si}>
                <span className="text-[#1e1e1e] text-[13px] tracking-wider hidden sm:block" style={jb}>{f.num}</span>
                <h3 className="text-[14px] sm:text-[15px] font-semibold text-white" style={sg}>{f.title}</h3>
                <p className="text-[#4a4a4a] text-[13px] leading-[1.75]">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ════════ S4: DIVIDER ════════ */}
      <section className="py-48 sm:py-60 flex items-center justify-center text-center px-10">
        <motion.h2 className="text-xl sm:text-2xl lg:text-4xl font-bold uppercase tracking-[0.06em] leading-[1.4]" style={sg} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}>
          NO SCREENS. NO NOISE.<br /><span className="text-[#00F0FF]">JUST SIGNAL.</span>
        </motion.h2>
      </section>

      {/* ════════ S5: USE CASES ════════ */}
      <section id="use-cases" className="py-40">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p className="text-[#00F0FF] text-[10px] tracking-[0.3em] uppercase mb-16" style={jb} variants={si}>[03] USE CASES</motion.p>
            <div className="flex flex-col gap-28">
              {cases.map((c, idx) => (
                <motion.div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" variants={si}>
                  <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                    <h3 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white leading-[1.1]" style={sg}>{c.q}</h3>
                  </div>
                  <div className={`bg-[#090910] border border-[#151518] p-7 rounded-lg ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_6px_2px_rgba(0,240,255,0.3)]" />
                        <span className="text-[#333] text-[9px] tracking-[0.2em] uppercase" style={jb}>SIGNAL ACTIVE</span>
                      </div>
                      <span className={`text-[10px] font-semibold tracking-[0.15em] ${c.type === "BUY" ? "text-[#00D26A]" : "text-[#ff4757]"}`} style={jb}>{c.type}</span>
                    </div>
                    <p className="text-[#555] text-[13px] sm:text-[14px] leading-[1.7]">
                      {c.sig} <span className={c.type === "BUY" ? "text-[#00D26A]" : "text-[#00F0FF]"}>{c.act}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ════════ S6: PRECISION BUILT ════════ */}
      <section id="product" className="py-40">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.p className="text-[#00F0FF] text-[10px] tracking-[0.3em] uppercase mb-5" style={jb} variants={si}>[04] THE HARDWARE</motion.p>
            <motion.h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[0.92] uppercase mb-4" style={sg} variants={si}>
              PRECISION<br /><span className="text-[#00F0FF]">BUILT.</span>
            </motion.h2>
            <motion.p className="text-[#555] text-[14px] max-w-[400px] leading-[1.75] mb-16" variants={si}>
              Engineered for instant response. Designed for traders who move before the crowd.
            </motion.p>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-5" variants={si}>
              <div className="relative aspect-[4/3] bg-[#08080b] border border-dashed border-[#151518] rounded-xl flex items-center justify-center">
                <p className="text-[#1e1e1e] text-[10px] tracking-[0.15em] uppercase text-center" style={jb}>DROP: /band-glamour.png</p>
              </div>
              <div className="relative aspect-[4/3] bg-[#08080b] border border-dashed border-[#151518] rounded-xl flex items-center justify-center">
                <p className="text-[#1e1e1e] text-[10px] tracking-[0.15em] uppercase text-center" style={jb}>DROP: /band-exploded.png</p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ════════ S7: BRAND STATEMENT ════════ */}
      <section className="py-40 min-h-[80vh] flex items-center">
        <Container>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
            <motion.div className="w-40 h-14 bg-[#08080b] border border-[#151518] rounded-lg flex items-center justify-center mb-20" variants={si}>
              <span className="text-white text-lg font-bold tracking-wider" style={sg}>nudge</span>
              <div className="w-[1px] h-7 bg-[#1e1e1e] ml-3" />
            </motion.div>

            <motion.h2 className="text-3xl sm:text-4xl lg:text-[3.2rem] font-bold leading-[1.25] uppercase" style={sg} variants={si}>
              IT&apos;S <span className="text-[#4a4a4a]">SILENT.</span><br />
              IT&apos;S <span className="text-[#00F0FF]/50">INSTANT.</span><br />
              IT&apos;S <span className="text-[#00F0FF]">PHYSICAL.</span>
            </motion.h2>
            <motion.p className="mt-8 text-[#555] text-[14px] max-w-[440px] leading-[1.75]" variants={si}>
              Nudge removes emotion and hesitation from trading. When the market moves, you feel it — and you act.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* ════════ S8: RESERVE CTA ════════ */}
      <section id="reserve" className="min-h-screen flex flex-col items-center justify-center text-center px-10 py-40">
        <motion.div className="flex flex-col items-center max-w-xl" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <motion.div className="relative w-24 h-24 mb-12 flex items-center justify-center" variants={si}>
            <div className="absolute inset-0 bg-white/[0.02] rounded-2xl blur-xl" />
            <div className="relative w-16 h-16 border border-dashed border-[#1a1a1e] rounded-xl flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] shadow-[0_0_8px_3px_rgba(0,240,255,0.3)]" />
            </div>
          </motion.div>

          <motion.h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-bold uppercase leading-[0.95] mb-6" style={sg} variants={si}>
            THE FASTEST WAY<br /><span className="text-[#00F0FF]">TO REACT.</span>
          </motion.h2>
          <motion.p className="text-[#555] text-[14px] max-w-sm mb-12 leading-[1.75]" variants={si}>
            Be among the first to trade with instinct, not hesitation.
          </motion.p>
          <motion.div className="flex flex-col sm:flex-row gap-3 w-full max-w-md" variants={si}>
            <input type="email" placeholder="Enter your email" className="flex-1 px-5 py-3 rounded-md bg-transparent border border-[#1e1e1e] text-white text-[13px] placeholder:text-[#333] focus:border-[#00F0FF]/30 focus:outline-none transition-colors" style={jb} />
            <button className="px-6 py-3 rounded-md bg-transparent border border-[#00F0FF]/25 text-[#00F0FF] font-medium text-[12px] tracking-[0.12em] uppercase transition-all duration-300 hover:bg-[#00F0FF] hover:text-[#050507] whitespace-nowrap" style={jb}>RESERVE YOURS</button>
          </motion.div>
          <motion.p className="mt-6 text-[#222] text-[9px] tracking-[0.2em] uppercase" style={jb} variants={si}>
            NO PAYMENT REQUIRED — EARLY ACCESS RESERVATION
          </motion.p>
        </motion.div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="border-t border-[#0e0e10] py-8">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white text-[10px] tracking-[0.2em] uppercase font-semibold" style={jb}>NUDGE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
          </div>
          <p className="text-[#222] text-[9px] tracking-[0.15em] uppercase" style={jb}>© 2026 NUDGE. ALL RIGHTS RESERVED.</p>
        </Container>
      </footer>
    </main>
  );
}
