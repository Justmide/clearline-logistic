import { Check, X, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const comparisons = [
  {
    feature: "All-inclusive DDP Clearance",
    detail: "UK import VAT & duty settled in advance. No unexpected postal delivery surcharges.",
    clearline: true,
    postal: false,
    traditional: "Partial / extra fees",
  },
  {
    feature: "Free Inspection & Photos",
    detail: "Verify package contents with HD photos while still at the China warehouse.",
    clearline: true,
    postal: false,
    traditional: "Extra fee",
  },
  {
    feature: "Parcel Consolidation",
    detail: "Combine multiple supplier orders into one box to cut volume weight by up to 50%.",
    clearline: true,
    postal: false,
    traditional: false,
  },
  {
    feature: "China ➔ UK Air Transit",
    detail: "Direct air routes from Shenzhen & Guangzhou straight to London Heathrow.",
    clearline: "8–15 days (6–12d Express)",
    postal: "20–40 days",
    traditional: "14–25 days",
  },
  {
    feature: "Doorstep Tracking",
    detail: "Full visibility from China warehouse receipt to UK front door delivery.",
    clearline: true,
    postal: "Vague / delayed",
    traditional: "Port only",
  },
  {
    feature: "UK-Based Customer Help",
    detail: "Direct assistance via WhatsApp, UK phone desk, and live support.",
    clearline: true,
    postal: false,
    traditional: "Slow email",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white text-slate-900 py-14 sm:py-20 border-t border-slate-200 paint-deferred">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-slate-200 bg-slate-50 font-mono text-[10px] uppercase font-bold text-slate-600 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B0B]" />
              ClearLine Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1320] tracking-tight">
              Why Shippers Choose ClearLine
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Dedicated China to UK corridor vs traditional postal networks and freight brokers.
            </p>
          </div>

          <Link
            to="/signup"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B1320] hover:bg-slate-800 active:scale-[0.98] text-white font-mono text-xs font-bold uppercase transition-all shrink-0"
          >
            Create Account
            <ArrowRight className="w-3.5 h-3.5 text-[#FFB000]" />
          </Link>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] border-b border-slate-200 bg-slate-50 font-mono text-xs uppercase font-bold text-slate-600">
            <div className="px-5 py-3">Capability</div>
            <div className="px-3 py-3 text-center border-x border-slate-200 bg-[#FFB000]/10 text-[#0B1320]">
              ClearLine Express
            </div>
            <div className="px-3 py-3 text-center">Traditional Postal</div>
            <div className="px-3 py-3 text-center">Freight Brokers</div>
          </div>

          <ul className="divide-y divide-slate-100 text-xs">
            {comparisons.map((row, idx) => (
              <li key={idx} className="grid grid-cols-[2fr_1fr_1fr_1fr] hover:bg-slate-50/50 transition-colors items-center">
                <div className="px-5 py-3">
                  <div className="font-bold text-slate-900">{row.feature}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{row.detail}</div>
                </div>

                <div className="px-3 py-3 text-center border-x border-slate-200 bg-[#FFB000]/5 h-full flex items-center justify-center font-mono">
                  {row.clearline === true ? (
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                      <Check className="w-3.5 h-3.5" />
                      Included
                    </span>
                  ) : (
                    <span className="font-bold text-slate-900">{row.clearline}</span>
                  )}
                </div>

                <div className="px-3 py-3 text-center font-mono text-slate-400">
                  {row.postal === false ? <X className="w-3.5 h-3.5 mx-auto" /> : row.postal}
                </div>

                <div className="px-3 py-3 text-center font-mono text-slate-400">
                  {row.traditional === false ? <X className="w-3.5 h-3.5 mx-auto" /> : row.traditional}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-3">
          {comparisons.map((row, idx) => (
            <div key={idx} className="rounded-lg border border-slate-200 bg-white p-3.5 shadow-2xs">
              <div className="font-bold text-sm text-slate-900">{row.feature}</div>
              <div className="text-xs text-slate-500 mt-0.5">{row.detail}</div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <div className="text-[#0B1320] font-bold flex items-center gap-1">
                  <span className="text-slate-400 font-normal">ClearLine:</span>
                  {row.clearline === true ? (
                    <span className="text-emerald-700 flex items-center gap-0.5">
                      <Check className="w-3 h-3" /> Included
                    </span>
                  ) : (
                    row.clearline
                  )}
                </div>
                <div className="text-slate-400 text-[11px]">
                  Postal: {row.postal === false ? "No" : row.postal}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer trust note */}
        <div className="mt-8 flex items-center justify-between text-xs font-mono text-slate-500">
          <div className="flex items-center gap-1.5">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>100% HMRC DDP · Zero Postal Surcharges</span>
          </div>
          <span className="hidden sm:inline">Licensed UK Courier Doorstep Delivery</span>
        </div>
      </div>
    </section>
  );
}
