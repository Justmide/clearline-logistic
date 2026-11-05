import { MapPin, Plane, Ship, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const infrastructureFacts = [
  { label: "China hubs", value: "Shenzhen · Guangzhou · Yiwu" },
  { label: "UK air gateway", value: "London Heathrow (LHR)" },
  { label: "UK ocean ports", value: "Felixstowe · Southampton" },
  { label: "Customs", value: "100% HMRC DDP" },
];

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white text-slate-900 py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 right-1/4 w-[700px] h-[400px] rounded-full opacity-[0.25] blur-[140px] pointer-events-none"
        
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ── LEFT: Copy ───────────────────────────────────── */}
          <div className="lg:col-span-6 lg:pt-4" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#171B22]/10 bg-white">
              <span className="w-1 h-1 rounded-full bg-[#F45B0B]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-900/60">
                The China → UK specialist
              </span>
            </div>

            <h2 className="mt-5 text-[32px] sm:text-[42px] lg:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.05] text-slate-900">
              Bridging factories in China
              <br />
              <span className="text-slate-900">with UK doorsteps.</span>
            </h2>

            <p className="mt-5 text-[15px] text-slate-900/70 leading-relaxed max-w-xl">
              We run dedicated receiving warehouses in Shenzhen and Guangzhou with in-house
              repacking, export customs, and direct airline space to London. Combined with
              licensed UK customs clearance, we remove the usual cross-border friction — no
              surprise volume charges, no postal tax letters.
            </p>

            {/* Micro stats row */}
            <div className="mt-8 grid grid-cols-3 gap-px bg-[#171B22]/10 rounded-xl overflow-hidden border border-[#171B22]/10">
              {[
                { k: "3", label: "China hubs" },
                { k: "2", label: "UK ports" },
                { k: "100%", label: "DDP cleared" },
              ].map((s, i) => (
                <div key={i} className="bg-white px-4 py-4">
                  <div className="text-[22px] font-extrabold tracking-tight text-slate-900">
                    {s.k}
                  </div>
                  <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-slate-900/45">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-slate-900 hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-[0_8px_30px_-8px_rgba(255,176,0,0.6)] hover:shadow-[0_12px_36px_-8px_rgba(244,91,11,0.6)]"
              >
                Get your China suite
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-[#171B22]/15 hover:border-[#171B22]/30 bg-white hover:bg-[#171B22]/[0.03] text-slate-900 font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
              >
                Explore services
              </Link>
            </div>
          </div>

          {/* ── RIGHT: Network panel ─────────────────────────── */}
          <div className="lg:col-span-6" data-aos="fade-left" data-aos-delay="100">
            <div className="relative rounded-2xl border border-[#171B22]/10 bg-white overflow-hidden">
              {/* Panel header */}
              <div className="px-6 pt-6 pb-5 border-b border-[#171B22]/8">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[16px] font-bold tracking-tight text-slate-900">
                    Operational network
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 font-mono text-[9px] uppercase tracking-[0.14em] font-bold text-emerald-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </span>
                </div>
              </div>

              {/* Facts grid */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#171B22]/8">
                {infrastructureFacts.map((fact, i) => {
                  const icons = [MapPin, Plane, Ship, ShieldCheck];
                  const Icon = icons[i % icons.length];
                  return (
                    <li key={i} className="bg-white px-5 py-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-3.5 h-3.5 text-[#F45B0B]" />
                        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-slate-900/45">
                          {fact.label}
                        </span>
                      </div>
                      <div className="font-mono text-[12px] font-bold text-slate-900 leading-snug">
                        {fact.value}
                      </div>
                    </li>
                  );
                })}
              </ul>

              {/* Compliance block */}
              <div className="px-6 py-5 border-t border-[#171B22]/8">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-slate-900">
                    UK HMRC customs declarations
                  </span>
                </div>
                <p className="text-[11.5px] text-slate-900/60 leading-relaxed">
                  Every parcel is pre-cleared digitally through CHIEF / CDS — zero airport
                  clearance delays.
                </p>
              </div>

              {/* CTA row */}
              <Link
                to="/track"
                className="group flex items-center justify-between px-6 py-4 border-t border-[#171B22]/8 bg-white hover:bg-[#FFB000]/[0.08] transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-slate-900">
                  Track a shipment
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F45B0B] transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}