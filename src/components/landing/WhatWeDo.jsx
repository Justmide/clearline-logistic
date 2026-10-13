import { Check, X, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const comparisons = [
  {
    feature: "All-inclusive DDP",
    detail: "UK import VAT & duty paid in advance. No Royal Mail £12 handling charge.",
    clearline: true,
    ems: false,
    traditional: "Partial / hidden fees",
  },
  {
    feature: "Free inspection & HD photos",
    detail: "Catch incorrect or damaged items before they leave China.",
    clearline: true,
    ems: false,
    traditional: "Extra fee",
  },
  {
    feature: "Consolidation & repack",
    detail: "Combine 5–10 merchant parcels into one box. Save up to 50% on air weight.",
    clearline: true,
    ems: false,
    traditional: false,
  },
  {
    feature: "China → UK transit",
    detail: "Direct air routes from Shenzhen & Guangzhou to London Heathrow.",
    clearline: "3–7 business days",
    ems: "18–35 days",
    traditional: "10–18 days",
  },
  {
    feature: "Milestone tracking",
    detail: "Full tracking from China warehouse to your UK front door.",
    clearline: true,
    ems: "Vague / delayed",
    traditional: "Port only",
  },
  {
    feature: "UK-based support",
    detail: "WhatsApp, live chat, or UK phone helpline.",
    clearline: true,
    ems: false,
    traditional: "Slow email",
  },
];

function Cell({ value, highlight = false }) {
  if (value === true) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 font-mono text-[10.5px] font-bold ${
          highlight ? "text-emerald-700" : "text-[#171B22]/60"
        }`}
      >
        <Check className={`w-3.5 h-3.5 ${highlight ? "text-emerald-600" : "text-[#171B22]/45"}`} />
        Included
      </span>
    );
  }

  if (value === false) {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] font-bold text-[#171B22]/35">
        <X className="w-3.5 h-3.5" />
        Not available
      </span>
    );
  }

  return (
    <span
      className={`font-mono text-[10.5px] ${
        highlight ? "font-bold text-[#171B22]" : "text-[#171B22]/65"
      }`}
    >
      {value}
    </span>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[#F4F5F7] text-[#171B22] py-20 sm:py-28"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/3 w-[700px] h-[400px] rounded-full opacity-[0.25] blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFB00033, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ─────────────────────────────────────────── */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 lg:mb-16"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#171B22]/10 bg-white">
              <span className="w-1 h-1 rounded-full bg-[#F45B0B]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/60">
                Transparent logistics
              </span>
            </div>

            <h2 className="mt-5 text-[34px] sm:text-[44px] lg:text-[52px] font-extrabold tracking-[-0.03em] leading-[1.02] text-[#171B22]">
              Why shippers choose
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">ClearLine Express.</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-[0.08em] h-[0.32em] bg-[#FFB000]/40 -skew-x-6 -z-0"
                />
              </span>
            </h2>

            <p className="mt-5 text-[15px] sm:text-base text-[#171B22]/60 leading-relaxed max-w-xl">
              Six reasons our China → UK corridor beats China Post / EMS and traditional freight
              brokers — on price, speed, and certainty.
            </p>
          </div>

          <Link
            to="/signup"
            className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-[0_8px_30px_-8px_rgba(255,176,0,0.6)] hover:shadow-[0_12px_36px_-8px_rgba(244,91,11,0.6)] shrink-0"
          >
            Create an account
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* ── Legend / column key ───────────────────────────── */}
        <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-2" data-aos="fade-up" data-aos-delay="50">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F45B0B]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-[#171B22]">
                ClearLine Express
              </span>
            </span>
          </div>
          <span className="w-px h-4 bg-[#171B22]/15" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/45">
            China Post / EMS
          </span>
          <span className="w-px h-4 bg-[#171B22]/15" />
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/45">
            Brokers
          </span>
        </div>

        {/* ── Feature cards with inline comparison ─────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {comparisons.map((row, idx) => (
            <article
              key={idx}
              data-aos="fade-up"
              data-aos-delay={(idx % 2) * 100}
              className="group rounded-2xl border border-[#171B22]/10 bg-white hover:border-[#FFB000]/50 hover:shadow-[0_20px_50px_-20px_rgba(23,27,34,0.18)] transition-all duration-300 overflow-hidden"
            >
              {/* Header */}
              <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-4">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#F4F5F7] border border-[#171B22]/10 font-mono text-[10px] font-bold text-[#171B22]/50 group-hover:bg-[#FFB000]/15 group-hover:border-[#FFB000]/50 group-hover:text-[#F45B0B] transition-all duration-300 shrink-0">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] font-bold tracking-tight text-[#171B22] leading-snug">
                      {row.feature}
                    </h3>
                    <p className="mt-1 text-[11.5px] text-[#171B22]/55 leading-snug">
                      {row.detail}
                    </p>
                  </div>
                </div>
              </div>

              {/* Comparison strip */}
              <div className="grid grid-cols-3 divide-x divide-[#171B22]/8 border-t border-[#171B22]/8 bg-[#F4F5F7]/50">
                {/* ClearLine */}
                <div className="px-4 py-3 bg-[#FFB000]/[0.08]">
                  <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/55 mb-1.5">
                    ClearLine
                  </div>
                  <Cell value={row.clearline} highlight />
                </div>

                {/* EMS */}
                <div className="px-4 py-3">
                  <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/45 mb-1.5">
                    EMS
                  </div>
                  <Cell value={row.ems} />
                </div>

                {/* Brokers */}
                <div className="px-4 py-3">
                  <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/45 mb-1.5">
                    Brokers
                  </div>
                  <Cell value={row.traditional} />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ── Bottom strip ───────────────────────────────────── */}
        <div
          className="mt-12 pt-8 border-t border-[#171B22]/10 flex flex-wrap items-center justify-between gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 text-[#171B22]/55">
              <Shield className="w-3.5 h-3.5 text-emerald-500" />
              <span className="font-mono text-[10px] uppercase tracking-[0.16em]">
                HMRC registered
              </span>
            </span>
            <span className="w-px h-4 bg-[#171B22]/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55">
              No hidden fees
            </span>
            <span className="w-px h-4 bg-[#171B22]/15" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55">
              UK-based support
            </span>
          </div>

          <Link
            to="/pricing"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-[#171B22] hover:text-[#F45B0B] transition-colors"
          >
            See full rate comparison
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}