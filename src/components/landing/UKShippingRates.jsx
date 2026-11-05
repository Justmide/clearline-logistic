import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Truck,
  Ship,
  Clock,
  ShieldCheck,
  Check,
  Package,
  ArrowRight,
  Sparkles,
  Zap,
  Info,
  CheckCircle2,
  Calculator,
} from "lucide-react";

export default function UKShippingRates() {
  const [calcWeight, setCalcWeight] = useState("10");
  const [activeSpeedTab, setActiveSpeedTab] = useState("all");

  const weight = parseFloat(calcWeight) || 0;

  // Tiered Air rate as requested by user
  const getAirRatePerKg = (w) => {
    if (w <= 5) return 18;
    if (w <= 15) return 16;
    return 14;
  };

  const airRate = getAirRatePerKg(weight);
  const airTotal = weight > 0 ? (weight * airRate).toFixed(2) : "0.00";
  const landTotal = weight > 0 ? (weight * 8).toFixed(2) : "0.00";
  const seaTotal = weight > 0 ? (weight * 8).toFixed(2) : "0.00";

  // Speed matrix data requested by user
  const speedOptions = [
    {
      category: "FASTER SPEED EXPRESS",
      badge: "Express Air",
      badgeColor: "bg-[#F45B0B] text-white",
      borderColor: "border-slate-200 hover:border-[#F45B0B]/60",
      accentBg: "bg-white",
      icon: Zap,
      mode: "Air Transport (Faster Speed Express)",
      generalTime: "6–12 days",
      sensitiveTime: "Available · Priority channel",
      rateText: "From £14–£18 / kg",
      recommendedFor: "Time-sensitive commercial stock, urgent retail drops, high-priority parcels.",
      features: [
        "Priority cargo flight dispatch to London Heathrow",
        "Direct export clearance & priority HMRC DDP handling",
        "Fastest door-to-door delivery across all UK addresses",
      ],
    },
    {
      category: "STANDARD SPEED",
      badge: "Most Popular",
      badgeColor: "bg-[#FFB000] text-[#0B1320]",
      borderColor: "border-slate-200 hover:border-[#FFB000]",
      accentBg: "bg-white",
      icon: Plane,
      mode: "Air Transport (Standard Speed)",
      generalTime: "10–20 days",
      sensitiveTime: "Available · Scheduled route",
      rateText: "£14–£18 / kg (8–15d avg)",
      recommendedFor: "Personal packages, consolidated multi-vendor orders, consumer goods.",
      features: [
        "Scheduled 3–4x weekly cargo departures",
        "All UK import VAT & duties paid in advance",
        "Free China hub consolidation & HD photo inspection",
      ],
    },
    {
      category: "LAND TRANSPORTATION",
      badge: "Overland Truck",
      badgeColor: "bg-[#0B1320] text-[#FFB000]",
      borderColor: "border-slate-200 hover:border-slate-400",
      accentBg: "bg-white",
      icon: Truck,
      mode: "Land Transportation (Truck)",
      generalTime: "30–45 days",
      sensitiveTime: "Available · Overland freight line",
      rateText: "£8 / kg (30–50 days)",
      recommendedFor: "Bulk goods, heavier packages, and items restricted on passenger aircraft.",
      features: [
        "Eurasian overland trucking convoy route",
        "Flat £8/kg — outstanding balance of speed and cost",
        "Continuous GPS checkpoint milestone tracking",
      ],
    },
    {
      category: "SEA TRANSPORTATION",
      badge: "Max Economy",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-200 hover:border-slate-400",
      accentBg: "bg-white",
      icon: Ship,
      mode: "Sea Transportation (Ocean Container)",
      generalTime: "50–65 days",
      sensitiveTime: "Available · Ocean container line",
      rateText: "£8 / kg (45–70 days)",
      recommendedFor: "Large commercial inventory, heavy machinery, furniture, high-volume cargo.",
      features: [
        "LCL consolidation & full container (FCL) service",
        "Lowest total logistics cost per kilogram",
        "UK port clearance at Felixstowe & Southampton",
      ],
    },
  ];

  const filteredSpeedOptions =
    activeSpeedTab === "all"
      ? speedOptions
      : activeSpeedTab === "air"
      ? speedOptions.filter((s) => s.category.includes("SPEED") || s.mode.includes("Air"))
      : activeSpeedTab === "land"
      ? speedOptions.filter((s) => s.category.includes("LAND"))
      : speedOptions.filter((s) => s.category.includes("SEA"));

  return (
    <section
      id="rates"
      className="relative overflow-hidden bg-slate-50 text-slate-900 py-20 sm:py-28 border-t border-slate-200/80"
    >
      {/* Anchor targets so existing links work smoothly */}
      <div id="pricing" className="absolute -top-24" />
      <div id="how-it-works" className="absolute -top-24" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ──────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-200 bg-white shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B0B]" />
            <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-slate-600 font-bold">
              🇬🇧 ALL SHIPPING TO UK · OFFICIAL CORRIDOR RATES
            </span>
          </div>

          <h2 className="mt-5 text-[32px] sm:text-[44px] lg:text-[48px] font-extrabold tracking-[-0.03em] leading-[1.05] text-[#0B1320]">
            Transparent UK shipping rates.
            <br />
            <span className="text-slate-900">Delivered Duty Paid to your doorstep.</span>
          </h2>

          <p className="mt-4 text-[15px] sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Direct air, land, and sea lines connecting Chinese logistics hubs to all United Kingdom addresses.
            Every rate includes full UK HMRC customs declaration, import VAT/duty, and domestic doorstep courier delivery.
          </p>
        </div>

        {/* ── Core UK Rate Cards (3 Modes) ────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14" data-aos="fade-up">
          {/* Card 1: UK Air Freight */}
          <div className="relative rounded-2xl bg-white border-2 border-[#FFB000] p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="absolute -top-3 left-6">
              <span className="px-3 py-1 rounded-full bg-[#0B1320] text-[#FFB000] font-mono text-[10px] font-bold uppercase tracking-[0.16em] flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3 h-3 text-[#FFB000]" />
                Most Popular
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <div className="w-12 h-12 rounded-xl bg-[#FFB000]/15 flex items-center justify-center text-[#0B1320]">
                  <Plane className="w-6 h-6 text-[#0B1320]" />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 font-semibold">
                    Delivery Time
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[13px] font-bold text-[#0B1320] mt-0.5 justify-end">
                    <Clock className="w-3.5 h-3.5 text-[#F45B0B]" />
                    8–15 Days
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#0B1320]">
                UK Air Freight
              </h3>
              <p className="mt-1 text-[13px] text-slate-500">
                Direct cargo flights to London Heathrow with tiered pricing by weight.
              </p>

              {/* Tier breakdown table */}
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 space-y-2 font-mono">
                <div className="flex items-center justify-between text-xs py-1 border-b border-slate-200">
                  <span className="text-slate-600">0 – 5 kg</span>
                  <span className="font-bold text-[#0B1320] text-[13px] tabular-nums">£18 / kg</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-slate-200">
                  <span className="text-slate-600">5 – 15 kg</span>
                  <span className="font-bold text-[#0B1320] text-[13px] tabular-nums">£16 / kg</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 bg-[#FFB000]/15 -mx-1 px-2 rounded-md">
                  <span className="text-[#0B1320] font-semibold">15 kg upward (15kg+)</span>
                  <span className="font-bold text-[#F45B0B] text-[14px] tabular-nums">£14 / kg</span>
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-[12.5px] text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% HMRC customs & UK VAT cleared</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Doorstep delivery via licensed national courier</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free repackaging & volumetric reduction</span>
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-slate-100">
              <Link
                to="/signup"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-[#0B1320] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-xs"
              >
                Ship via Air Freight
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Land Shipping (Truck) */}
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0B1320]">
                  <Truck className="w-6 h-6 text-[#0B1320]" />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 font-semibold">
                    Delivery Time
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[13px] font-bold text-[#0B1320] mt-0.5 justify-end">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    30–50 Days
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#0B1320]">
                Land Shipping
              </h3>
              <p className="mt-1 text-[13px] text-slate-500">
                Direct overland truck route. Balanced speed and budget.
              </p>

              {/* Flat rate box */}
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400 mb-1">
                  Flat Rate
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#0B1320] tabular-nums">£8</span>
                  <span className="text-xs text-slate-500 font-semibold">/ kg (all weights)</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 font-sans">
                  Transit timeline: 30–50 days door-to-door
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-[12.5px] text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Eurasian overland convoy route</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Supports sensitive & battery items</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Complete DDP door-to-door service</span>
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-slate-100">
              <Link
                to="/signup"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B1320] hover:bg-slate-800 text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
              >
                Ship via Land Truck
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB000]" />
              </Link>
            </div>
          </div>

          {/* Card 3: Sea Shipping */}
          <div className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-[#0B1320]">
                  <Ship className="w-6 h-6 text-[#0B1320]" />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400 font-semibold">
                    Delivery Time
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[13px] font-bold text-[#0B1320] mt-0.5 justify-end">
                    <Clock className="w-3.5 h-3.5 text-slate-600" />
                    45–70 Days
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#0B1320]">
                Sea Shipping
              </h3>
              <p className="mt-1 text-[13px] text-slate-500">
                Ocean container freight. Lowest rate for bulk & heavy stock.
              </p>

              {/* Flat rate box */}
              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 font-mono">
                <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400 mb-1">
                  Flat Rate
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#0B1320] tabular-nums">£8</span>
                  <span className="text-xs text-slate-500 font-semibold">/ kg (all weights)</span>
                </div>
                <div className="mt-2 text-[11px] text-slate-500 font-sans">
                  Transit timeline: 45–70 days door-to-door
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-[12.5px] text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cost-effective for bulky commercial crates</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Felixstowe & Southampton port handling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Includes tailgate commercial delivery</span>
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-slate-100">
              <Link
                to="/signup"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B1320] hover:bg-slate-800 text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
              >
                Ship via Sea Freight
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB000]" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Interactive Rate Comparison Tool (iPhone Zoom Proof) ── */}
        <div
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 mb-14 shadow-xs"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-4 h-4 text-[#F45B0B]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                  Instant Comparative Estimator
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0B1320]">
                Compare your shipment cost
              </h3>
              <p className="mt-1 text-sm text-slate-500 leading-relaxed">
                Enter your parcel or consignment weight to see live comparative quotes across Air, Land, and Sea.
              </p>
            </div>

            {/* Input & Output Stack */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-1 lg:max-w-xl">
              <div className="sm:w-44">
                <label className="block font-mono text-[10.5px] uppercase tracking-[0.16em] text-slate-500 font-bold mb-1.5">
                  Weight (kg)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0.5"
                    step="0.5"
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 bg-slate-50 text-base sm:text-sm font-mono font-bold text-slate-900 outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15"
                    placeholder="10"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-xs text-slate-400">
                    kg
                  </span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 flex-1">
                <div className="rounded-xl border border-[#FFB000]/40 bg-[#FFB000]/10 p-3 text-center">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-slate-600 font-bold">
                    Air ({airRate}£/kg)
                  </div>
                  <div className="text-lg font-bold text-[#0B1320] mt-0.5 font-mono tabular-nums">
                    £{airTotal}
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono">8–15 days</div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                    Land (8£/kg)
                  </div>
                  <div className="text-lg font-bold text-[#0B1320] mt-0.5 font-mono tabular-nums">
                    £{landTotal}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">30–50 days</div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-slate-500 font-bold">
                    Sea (8£/kg)
                  </div>
                  <div className="text-lg font-bold text-[#0B1320] mt-0.5 font-mono tabular-nums">
                    £{seaTotal}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">45–70 days</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ALL SHIPPING TO UK: SPEED & CARGO BREAKDOWN ─────── */}
        <div className="mb-14" data-aos="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white">
                <Zap className="w-3 h-3 text-[#F45B0B]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600 font-bold">
                  TRANSIT SPEED TIERS & CARGO HANDLING
                </span>
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1320]">
                ALL SHIPPING TO UK — Transit Speeds & Cargo Tiers
              </h3>
              <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
                Choose the transit tier that aligns with your timeline. We manage both General Cargo and
                Sensitive Goods with full customs declaration across air, land, and ocean corridors.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Tiers" },
                { id: "air", label: "Air Transport" },
                { id: "land", label: "Land (Truck)" },
                { id: "sea", label: "Sea Transport" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSpeedTab(tab.id)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-[11px] font-bold uppercase tracking-[0.12em] transition-all cursor-pointer ${
                    activeSpeedTab === tab.id
                      ? "bg-[#0B1320] text-[#FFB000] shadow-xs"
                      : "bg-white border border-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filteredSpeedOptions.map((opt, idx) => {
              const Icon = opt.icon;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-200 ${opt.borderColor} shadow-xs hover:shadow-md flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${opt.badgeColor}`}
                      >
                        {opt.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-700">
                        {opt.rateText}
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-[#0B1320]" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold tracking-tight text-[#0B1320]">
                          {opt.mode}
                        </h4>
                        <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                          {opt.recommendedFor}
                        </p>
                      </div>
                    </div>

                    {/* General vs Sensitive Timelines */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                          General Cargo
                        </div>
                        <div className="text-[14px] font-bold text-emerald-700 flex items-center gap-1.5 tabular-nums">
                          <Clock className="w-3.5 h-3.5" />
                          {opt.generalTime}
                        </div>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                        <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                          Sensitive Goods Cargo
                        </div>
                        <div className="text-[13px] font-bold text-[#F45B0B] flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {opt.sensitiveTime}
                        </div>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="mt-5 space-y-2 text-xs text-slate-600">
                      {opt.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="font-mono text-[10.5px] uppercase tracking-wider text-slate-400">
                      Destination: UK Doorstep
                    </span>
                    <Link
                      to="/signup"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#0B1320] hover:text-[#F45B0B] transition-colors"
                    >
                      Book this tier
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Cargo Classification Guidelines (General vs Sensitive) ── */}
        <div
          className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-[#F45B0B]" />
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold text-[#0B1320]">
              Cargo Type Classification Guide
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-900 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                General Cargo (Standard Documentation)
              </div>
              <p className="text-xs text-emerald-950/70 leading-relaxed">
                Apparel, non-branded textiles, footwear, home furnishings, stationery, phone accessories (without batteries),
                dry non-food goods, and standard manufacturing hardware.
              </p>
            </div>

            <div className="rounded-xl border border-orange-200 bg-orange-50/40 p-4">
              <div className="flex items-center gap-2 font-bold text-sm text-orange-900 mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F45B0B]" />
                Sensitive Goods Cargo (Special Declaration)
              </div>
              <p className="text-xs text-orange-950/70 leading-relaxed">
                Items with built-in or loose lithium batteries, liquids, creams, cosmetics, perfumes, food items,
                powders, magnets, or microchips. Dispatched via authorized hazardous handling lines for compliant UK customs clearance.
              </p>
            </div>
          </div>
        </div>

        {/* ── Quick 4-Step Process Strip ──────────────────────── */}
        <div className="mt-14 pt-10 border-t border-slate-200" data-aos="fade-up">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">
              Standardized Workflow
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[#0B1320] mt-1">
              How China to UK package moving works
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Get China Address",
                desc: "Sign up instantly to receive your dedicated suite address at our Shenzhen receiving hub.",
              },
              {
                step: "02",
                title: "Order From Suppliers",
                desc: "Order from any Chinese merchant, manufacturer, or wholesale supplier to your suite.",
              },
              {
                step: "03",
                title: "Inspection & Repack",
                desc: "Free HD photos, volumetric weight reduction, and parcel consolidation into one box.",
              },
              {
                step: "04",
                title: "UK Door Delivery",
                desc: "Dispatched via Air, Land, or Sea with full HMRC DDP customs settled and zero postal fees.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-2xs"
              >
                <div className="font-mono text-xs font-extrabold text-[#F45B0B]">{s.step}</div>
                <div className="mt-2 text-sm font-bold text-[#0B1320]">{s.title}</div>
                <div className="mt-1 text-xs text-slate-500 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
