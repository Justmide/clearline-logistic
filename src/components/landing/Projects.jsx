import { Plane, Ship, Package, Building2, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { Link } from "react-router-dom";

const shippingServices = [
  {
    code: "SVC-01",
    title: "Air Express",
    tagline: "Fastest · 3–7 days",
    transitTime: "3–7 Days",
    route: "Shenzhen · Guangzhou → London Heathrow",
    features: [
      "Daily air cargo departures",
      "Full DDP clearance included",
      "Real-time flight tracking",
      "DPD / Royal Mail last-mile",
    ],
    badge: "Most Popular",
    icon: Plane,
    accent: true,
  },
  {
    code: "SVC-02",
    title: "Sea Freight",
    tagline: "Lowest cost for bulk",
    transitTime: "25–35 Days",
    route: "Ningbo · Shanghai · Shenzhen → Felixstowe",
    features: [
      "LCL & FCL containers",
      "Best £/kg above 25 kg",
      "UK port handling included",
      "Tailgate delivery available",
    ],
    badge: "Cost Saver",
    icon: Ship,
  },
  {
    code: "SVC-03",
    title: "Taobao Consolidation",
    tagline: "Combine orders into one box",
    transitTime: "Flexible",
    route: "Chinese merchants → Shenzhen hub → UK",
    features: [
      "30-day free storage",
      "Free inspection & HD photos",
      "Repack to cut weight",
      "Save ~45% on shipping",
    ],
    badge: "Shop from China",
    icon: Package,
  },
  {
    code: "SVC-04",
    title: "Amazon FBA / B2B",
    tagline: "End-to-end UK warehousing",
    transitTime: "Air 5–8 / Sea 28–32 Days",
    route: "China factory → UK FBA centres & 3PLs",
    features: [
      "FNSKU labelling & prep",
      "FBA appointment booking",
      "Customs & VAT paperwork",
      "Dedicated account manager",
    ],
    badge: "Business",
    icon: Building2,
  },
];

export default function Projects() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F4F5F7] text-[#171B22] py-16 sm:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute -top-40 left-1/4 w-[700px] h-[400px] rounded-full opacity-[0.3] blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFB00033, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" data-aos="fade-up">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#171B22]/10 bg-white">
              <span className="w-1 h-1 rounded-full bg-[#F45B0B]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/60">
                Service lines
              </span>
            </div>
            <h2 className="mt-4 text-[28px] sm:text-[36px] lg:text-[42px] font-extrabold tracking-[-0.03em] leading-[1.05] text-[#171B22]">
              Cross-border shipping,
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">made simple.</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-[0.08em] h-[0.32em] bg-[#FFB000]/40 -skew-x-6 -z-0"
                />
              </span>
            </h2>
          </div>

          <Link
            to="/pricing"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-[#171B22] hover:text-[#F45B0B] transition-colors shrink-0"
          >
            Compare rates
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {shippingServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <article
                key={svc.code}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group relative rounded-2xl border border-[#171B22]/10 bg-white hover:border-[#FFB000]/50 hover:shadow-[0_20px_50px_-20px_rgba(23,27,34,0.18)] transition-all duration-300 p-5 flex flex-col overflow-hidden"
              >
                {svc.accent && (
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FFB000] via-[#FFB000] to-transparent"
                  />
                )}

                {/* Header */}
                <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-[#171B22]/8">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg border border-[#171B22]/10 bg-[#F4F5F7] group-hover:border-[#FFB000]/50 group-hover:bg-[#FFB000]/15 transition-all duration-300 shrink-0">
                      <Icon className="w-4 h-4 text-[#F45B0B]" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#171B22]/40">
                        {svc.code}
                      </div>
                      <h3 className="text-[15px] font-bold tracking-tight text-[#171B22] leading-snug truncate">
                        {svc.title}
                      </h3>
                    </div>
                  </div>

                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-[#FFB000]/15 border border-[#FFB000]/30 font-mono text-[9px] uppercase tracking-[0.14em] font-bold text-[#825E12] whitespace-nowrap shrink-0">
                    {svc.badge}
                  </span>
                </div>

                {/* Tagline */}
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#825E12] font-semibold mb-3">
                  {svc.tagline}
                </p>

                {/* Route + transit */}
                <div className="rounded-lg border border-[#171B22]/8 bg-[#F4F5F7] px-3.5 py-3 mb-4 space-y-1.5">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/45">
                      Transit
                    </span>
                    <span className="font-mono text-[10.5px] font-bold text-[#171B22]">
                      {svc.transitTime}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/45 pt-0.5 shrink-0">
                      Route
                    </span>
                    <span className="text-[10.5px] font-medium text-[#171B22]/75 text-right leading-snug">
                      {svc.route}
                    </span>
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-1.5 mb-4 flex-1">
                  {svc.features.map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-[12px] text-[#171B22]/75 leading-snug"
                    >
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-[3px]" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer */}
                <div className="pt-3 border-t border-[#171B22]/8 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/45">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    DDP compliant
                  </span>
                  <Link
                    to="/signup"
                    className="group/cta inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-[#171B22] hover:text-[#F45B0B] transition-colors"
                  >
                    Ship now
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/cta:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}