import { Plane, Ship, Package, Building2, ArrowRight, ShieldCheck, Check } from "lucide-react";
import { Link } from "react-router-dom";

const shippingServices = [
  {
    code: "SVC-01",
    title: "Air Express Freight",
    tagline: "Fast & reliable · 8–15 days",
    transitTime: "8–15 Days (6–12d Express)",
    route: "Shenzhen · Guangzhou → London Heathrow",
    features: [
      "Daily air cargo flight departures",
      "Full HMRC DDP clearance included",
      "Real-time milestone flight tracking",
      "Licensed UK domestic courier delivery",
    ],
    badge: "Most Popular",
    icon: Plane,
    accent: true,
  },
  {
    code: "SVC-02",
    title: "Ocean Sea Freight",
    tagline: "Lowest cost for bulk · £8/kg",
    transitTime: "45–70 Days",
    route: "Ningbo · Shanghai · Shenzhen → Felixstowe",
    features: [
      "LCL & FCL container consolidation",
      "Flat £8/kg rate across all weights",
      "UK port handling & customs clearance",
      "Tailgate commercial delivery available",
    ],
    badge: "Cost Saver",
    icon: Ship,
  },
  {
    code: "SVC-03",
    title: "Multi-Supplier Consolidation",
    tagline: "Combine multiple orders into one box",
    transitTime: "Flexible Scheduling",
    route: "Chinese suppliers & factories → Shenzhen hub → UK",
    features: [
      "30-day free hub warehousing storage",
      "Free inspection & HD photo verification",
      "Volumetric repacking to reduce air weight",
      "Save up to 50% on international shipping",
    ],
    badge: "Smart Savings",
    icon: Package,
  },
  {
    code: "SVC-04",
    title: "Commercial & B2B Logistics",
    tagline: "End-to-end UK commercial supply chain",
    transitTime: "Air 8–15d / Sea 45–70d",
    route: "China manufacturers → UK warehouses & commercial depots",
    features: [
      "Carton sorting & barcode labelling",
      "Delivery dock appointment scheduling",
      "Full VAT & customs declaration paperwork",
      "Dedicated commercial logistics manager",
    ],
    badge: "Enterprise",
    icon: Building2,
  },
];

export default function Projects() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white text-slate-900 py-20 sm:py-28 border-t border-slate-100"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14" data-aos="fade-up">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F45B0B]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 font-bold">
                Specialized Service Lines
              </span>
            </div>
            <h2 className="mt-4 text-[30px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-[-0.03em] leading-[1.06] text-[#0B1320]">
              Cross-border shipping,
              <br />
              <span className="text-slate-900">engineered for peace of mind.</span>
            </h2>
          </div>

          <a
            href="#rates"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] font-bold text-[#0B1320] hover:text-[#F45B0B] transition-colors shrink-0"
          >
            Compare All UK Rates
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* 2×2 Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shippingServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <article
                key={svc.code}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className={`group relative rounded-2xl p-7 transition-all duration-200 flex flex-col justify-between ${
                  svc.accent
                    ? "bg-white border-2 border-[#FFB000] shadow-md hover:shadow-xl"
                    : "bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-lg"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span className="font-mono text-[10.5px] font-bold text-slate-400 uppercase tracking-widest">
                      {svc.code}
                    </span>
                    <span
                      className={`font-mono text-[10px] font-bold uppercase tracking-[0.14em] px-3 py-1 rounded-full ${
                        svc.accent
                          ? "bg-[#0B1320] text-[#FFB000]"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      {svc.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 text-slate-800 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-[#0B1320]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight text-[#0B1320]">
                        {svc.title}
                      </h3>
                      <p className="mt-1 font-mono text-xs font-semibold text-[#F45B0B]">
                        {svc.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-xl bg-slate-50 border border-slate-100 p-3.5 space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Transit Duration</span>
                      <span className="font-bold text-slate-900">{svc.transitTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Route Gateway</span>
                      <span className="text-slate-700 text-right font-medium">{svc.route}</span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5 text-[13px] text-slate-600">
                    {svc.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                    Full DDP customs cleared
                  </span>
                  <Link
                    to="/signup"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#0B1320] hover:text-[#F45B0B] transition-colors"
                  >
                    Select service
                    <ArrowRight className="w-3.5 h-3.5" />
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
