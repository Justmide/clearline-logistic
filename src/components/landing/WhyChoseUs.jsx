import { Check, X, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const comparisons = [
  {
    feature: "All-inclusive DDP Clearance",
    detail: "UK import VAT & customs duty paid in advance. No unexpected postal handling surcharges or surprise letters.",
    clearline: true,
    postal: false,
    traditional: "Partial / extra fees",
  },
  {
    feature: "Free Inspection & HD Photos",
    detail: "Catch incorrect, damaged, or incomplete items while your parcels are still inside China.",
    clearline: true,
    postal: false,
    traditional: "Extra fee",
  },
  {
    feature: "Consolidation & Repackaging",
    detail: "Combine 5–15 supplier packages into one compact carton. Save up to 50% on air volume weight.",
    clearline: true,
    postal: false,
    traditional: false,
  },
  {
    feature: "China ➔ UK Air Transit",
    detail: "Direct air routes from Shenzhen & Guangzhou hubs straight to London Heathrow.",
    clearline: "8–15 days (6–12d Express)",
    postal: "20–40 days",
    traditional: "14–25 days",
  },
  {
    feature: "Milestone Doorstep Tracking",
    detail: "Full visibility from China warehouse receipt all the way to your UK front door.",
    clearline: true,
    postal: "Vague / delayed",
    traditional: "Port only",
  },
  {
    feature: "Dedicated UK-Based Support",
    detail: "Fast help via WhatsApp, direct UK phone helpline, and live support desk.",
    clearline: true,
    postal: false,
    traditional: "Slow email",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-50 text-slate-900 py-20 sm:py-28 border-t border-slate-200/70"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ─────────────────────────────────────────── */}
        <div
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14"
          data-aos="fade-up"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B0B]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 font-bold">
                Transparent Cross-Border Logistics
              </span>
            </div>

            <h2 className="mt-4 text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0B1320]">
              Why shippers choose
              <br />
              <span className="text-slate-900">ClearLine Express.</span>
            </h2>

            <p className="mt-4 text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-xl">
              See how our dedicated China to UK corridor compares against traditional postal networks and legacy freight brokers.
            </p>
          </div>

          <Link
            to="/signup"
            className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#0B1320] hover:bg-slate-800 text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-md shrink-0"
          >
            Create Free Account
            <ArrowRight className="w-3.5 h-3.5 text-[#FFB000] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ── Desktop Comparison Table (Hidden on small mobile) ── */}
        <div
          className="hidden md:block rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs"
          data-aos="fade-up"
        >
          {/* Table Headers */}
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-slate-200 bg-slate-50/90 font-mono text-[11px] uppercase tracking-[0.14em] font-bold">
            <div className="px-6 py-4 text-slate-500">Service Capability</div>
            <div className="px-4 py-4 text-center border-x border-slate-200 bg-[#FFB000]/10 text-[#0B1320] flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#F45B0B]" />
              ClearLine Express
            </div>
            <div className="px-4 py-4 text-center text-slate-500">Traditional Postal</div>
            <div className="px-4 py-4 text-center text-slate-500">Freight Brokers</div>
          </div>

          {/* Rows */}
          <ul className="divide-y divide-slate-100">
            {comparisons.map((row, idx) => (
              <li
                key={idx}
                className="grid grid-cols-[2fr_1fr_1fr_1fr] hover:bg-slate-50/60 transition-colors items-center"
              >
                {/* Feature Info */}
                <div className="px-6 py-4.5">
                  <div className="text-[14px] font-bold text-slate-900">{row.feature}</div>
                  <div className="mt-1 text-xs text-slate-500 leading-normal max-w-md">{row.detail}</div>
                </div>

                {/* ClearLine Column */}
                <div className="px-4 py-4.5 text-center border-x border-slate-200 bg-[#FFB000]/[0.06] h-full flex items-center justify-center">
                  {row.clearline === true ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                      <Check className="w-3.5 h-3.5" />
                      Included
                    </span>
                  ) : (
                    <span className="font-mono text-xs font-bold text-slate-900">{row.clearline}</span>
                  )}
                </div>

                {/* Traditional Postal Column */}
                <div className="px-4 py-4.5 text-center flex items-center justify-center">
                  {row.postal === false ? (
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-400">
                      <X className="w-3.5 h-3.5" />
                      No
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-slate-500">{row.postal}</span>
                  )}
                </div>

                {/* Brokers Column */}
                <div className="px-4 py-4.5 text-center flex items-center justify-center">
                  {row.traditional === false ? (
                    <span className="inline-flex items-center gap-1 font-mono text-xs text-slate-400">
                      <X className="w-3.5 h-3.5" />
                      No
                    </span>
                  ) : (
                    <span className="font-mono text-xs text-slate-500">{row.traditional}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Mobile Responsive Cards (Displayed on phones for zero-zoom readability) ── */}
        <div className="md:hidden space-y-4" data-aos="fade-up">
          {comparisons.map((row, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs">
              <div className="font-bold text-base text-slate-900">{row.feature}</div>
              <div className="mt-1 text-xs text-slate-500 leading-relaxed">{row.detail}</div>

              <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="rounded-xl bg-[#FFB000]/10 border border-[#FFB000]/30 p-2.5">
                  <div className="text-[10px] uppercase text-slate-600 font-bold mb-1">ClearLine</div>
                  {row.clearline === true ? (
                    <span className="inline-flex items-center gap-1 text-emerald-800 font-bold">
                      <Check className="w-3.5 h-3.5" />
                      Included
                    </span>
                  ) : (
                    <span className="font-bold text-slate-900">{row.clearline}</span>
                  )}
                </div>

                <div className="rounded-xl bg-slate-50 border border-slate-200 p-2.5">
                  <div className="text-[10px] uppercase text-slate-400 font-bold mb-1">Traditional Postal</div>
                  {row.postal === false ? (
                    <span className="text-slate-400 flex items-center gap-1">
                      <X className="w-3.5 h-3.5" />
                      Not included
                    </span>
                  ) : (
                    <span className="text-slate-600">{row.postal}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>100% HMRC Registered &amp; DDP Handled</span>
          </div>
          <div>No hidden taxes · Real-time UK milestone tracking</div>
        </div>
      </div>
    </section>
  );
}
