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

  // Calculate tiered Air rate
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
      badge: "Express Priority",
      badgeColor: "bg-[#F45B0B] text-white",
      borderColor: "border-[#F45B0B]/30 hover:border-[#F45B0B]",
      accentBg: "bg-[#F45B0B]/[0.04]",
      icon: Zap,
      mode: "Air Transport Express",
      generalTime: "6–12 days",
      sensitiveTime: "Available · Specialized channel",
      rateText: "From £14–£18 / kg",
      recommendedFor: "Time-critical inventory, urgent customer orders, high-value electronics.",
      features: [
        "Fastest direct China ➔ UK flight route",
        "Priority Heathrow customs processing",
        "Next-day domestic dispatch (DPD)",
      ],
    },
    {
      category: "STANDARD SPEED",
      badge: "Most Popular",
      badgeColor: "bg-[#FFB000] text-[#171B22]",
      borderColor: "border-[#FFB000]/40 hover:border-[#FFB000]",
      accentBg: "bg-[#FFB000]/[0.05]",
      icon: Plane,
      mode: "Air Transport Standard",
      generalTime: "10–20 days",
      sensitiveTime: "Available · Scheduled channel",
      rateText: "£14–£18 / kg (8–15 days avg)",
      recommendedFor: "General e-commerce, Taobao & 1688 haul consolidation, clothing & gifts.",
      features: [
        "Regular 3-4x weekly scheduled departures",
        "Full DDP customs & UK VAT settled in advance",
        "Free Shenzhen consolidation & HD inspection photos",
      ],
    },
    {
      category: "LAND TRANSPORTATION",
      badge: "Overland Truck",
      badgeColor: "bg-[#171B22] text-[#FFB000]",
      borderColor: "border-[#171B22]/20 hover:border-[#171B22]/40",
      accentBg: "bg-[#171B22]/[0.02]",
      icon: Truck,
      mode: "Land Transportation (Truck)",
      generalTime: "30–45 days",
      sensitiveTime: "Available · Truck freight route",
      rateText: "£8 / kg (30–50 days)",
      recommendedFor: "Cost-sensitive medium cargo, liquid/battery goods restricted on passenger planes.",
      features: [
        "Dedicated Eurasian overland convoy route",
        "Flat £8/kg — fantastic budget-to-speed ratio",
        "Full door-to-door tracking across all border hubs",
      ],
    },
    {
      category: "SEA TRANSPORTATION",
      badge: "Maximum Economy",
      badgeColor: "bg-slate-700 text-white",
      borderColor: "border-slate-300 hover:border-slate-500",
      accentBg: "bg-slate-100/60",
      icon: Ship,
      mode: "Sea Transportation (Ocean Container)",
      generalTime: "50–65 days",
      sensitiveTime: "Available · Ocean freight route",
      rateText: "£8 / kg (45–70 days)",
      recommendedFor: "Heavy bulk shipments, furniture, industrial equipment, large commercial restocks.",
      features: [
        "LCL & FCL sea container shipping",
        "Lowest total logistics cost for high volume",
        "UK port clearance at Felixstowe / Southampton",
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
      className="relative overflow-hidden bg-[#F4F5F7] text-[#171B22] py-20 sm:py-28 border-t border-[#171B22]/8"
    >
      {/* Anchor targets so existing links work */}
      <div id="pricing" className="absolute -top-24" />
      <div id="how-it-works" className="absolute -top-24" />

      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="absolute -top-40 right-1/4 w-[750px] h-[450px] rounded-full opacity-[0.25] blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #FFB00033, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 left-1/4 w-[650px] h-[400px] rounded-full opacity-[0.2] blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #F45B0B22, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header ──────────────────────────────────── */}
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#171B22]/10 bg-white shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F45B0B]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/70 font-bold">
              🇬🇧 ALL SHIPPING TO UK · OFFICIAL RATES & TIMELINES
            </span>
          </div>

          <h2 className="mt-5 text-[32px] sm:text-[44px] lg:text-[50px] font-extrabold tracking-[-0.03em] leading-[1.05] text-[#171B22]">
            Clear, all-inclusive rates.
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">No hidden Royal Mail or customs fees.</span>
              <span
                aria-hidden="true"
                className="absolute left-0 right-0 bottom-[0.08em] h-[0.32em] bg-[#FFB000]/40 -skew-x-6 -z-0"
              />
            </span>
          </h2>

          <p className="mt-5 text-[15px] sm:text-base text-[#171B22]/65 leading-relaxed max-w-2xl mx-auto">
            Direct freight routes from Chinese receiving hubs (Shenzhen, Guangzhou, Yiwu) straight
            to your UK door. All prices include complete UK HMRC customs clearance (DDP) and VAT.
          </p>
        </div>

        {/* ── Core UK Rate Cards (3 Main Modes) ───────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-aos="fade-up">
          {/* Card 1: UK Air Freight */}
          <div className="relative rounded-2xl bg-white border-2 border-[#FFB000] p-6 sm:p-7 shadow-[0_12px_36px_-12px_rgba(255,176,0,0.3)] flex flex-col justify-between">
            <div className="absolute -top-3 left-6">
              <span className="px-3 py-1 rounded-full bg-[#171B22] text-[#FFB000] font-mono text-[10px] font-bold uppercase tracking-[0.16em] flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#FFB000]" />
                Most Popular
              </span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-1">
                <div className="w-11 h-11 rounded-xl bg-[#FFB000]/15 flex items-center justify-center text-[#171B22]">
                  <Plane className="w-6 h-6 text-[#171B22]" />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/50 font-semibold">
                    Delivery Time
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[13px] font-bold text-[#171B22] mt-0.5 justify-end">
                    <Clock className="w-3.5 h-3.5 text-[#F45B0B]" />
                    8–15 Days
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#171B22]">
                UK Air Freight
              </h3>
              <p className="mt-1 text-[13px] text-[#171B22]/60">
                Direct air cargo to London Heathrow. Tiered by parcel weight.
              </p>

              {/* Tier breakdown table */}
              <div className="mt-5 rounded-xl border border-[#171B22]/10 bg-[#F4F5F7]/80 p-3.5 space-y-2 font-mono">
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#171B22]/8">
                  <span className="text-[#171B22]/60">0 – 5 kg</span>
                  <span className="font-bold text-[#171B22] text-[13px]">£18 / kg</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 border-b border-[#171B22]/8">
                  <span className="text-[#171B22]/60">5 – 15 kg</span>
                  <span className="font-bold text-[#171B22] text-[13px]">£16 / kg</span>
                </div>
                <div className="flex items-center justify-between text-xs py-1 bg-[#FFB000]/15 -mx-1 px-2 rounded-md">
                  <span className="text-[#171B22] font-semibold">15 kg upward (15kg+)</span>
                  <span className="font-bold text-[#F45B0B] text-[14px]">£14 / kg</span>
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-[12.5px] text-[#171B22]/75">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>DDP customs & UK VAT cleared</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Doorstep delivery via DPD / Royal Mail</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free repackaging & volumetric reduction</span>
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-[#171B22]/8">
              <Link
                to="/signup"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-sm"
              >
                Ship via Air Freight
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Land Shipping (Truck) */}
          <div className="relative rounded-2xl bg-white border border-[#171B22]/10 p-6 sm:p-7 shadow-xs hover:border-[#171B22]/25 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#171B22]/8 flex items-center justify-center text-[#171B22]">
                  <Truck className="w-6 h-6 text-[#171B22]" />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/50 font-semibold">
                    Delivery Time
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[13px] font-bold text-[#171B22] mt-0.5 justify-end">
                    <Clock className="w-3.5 h-3.5 text-[#171B22]/70" />
                    30–50 Days
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#171B22]">
                Land Shipping
              </h3>
              <p className="mt-1 text-[13px] text-[#171B22]/60">
                Direct overland truck route. Balanced speed and budget.
              </p>

              {/* Flat rate box */}
              <div className="mt-5 rounded-xl border border-[#171B22]/10 bg-[#F4F5F7]/80 p-4 font-mono">
                <div className="text-[10px] uppercase tracking-[0.16em] text-[#171B22]/50 mb-1">
                  Flat Rate
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#171B22]">£8</span>
                  <span className="text-xs text-[#171B22]/60 font-semibold">/ kg (all weights)</span>
                </div>
                <div className="mt-2 text-[11px] text-[#171B22]/60 font-sans">
                  Transit timeline: 30–50 days door-to-door
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-[12.5px] text-[#171B22]/75">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Overland Eurasian truck convoy</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Supports sensitive & battery items</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full customs clearance and delivery</span>
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-[#171B22]/8">
              <Link
                to="/signup"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#171B22] hover:bg-[#0A0E14] text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
              >
                Ship via Land Truck
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB000]" />
              </Link>
            </div>
          </div>

          {/* Card 3: Sea Shipping */}
          <div className="relative rounded-2xl bg-white border border-[#171B22]/10 p-6 sm:p-7 shadow-xs hover:border-[#171B22]/25 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-xl bg-[#171B22]/8 flex items-center justify-center text-[#171B22]">
                  <Ship className="w-6 h-6 text-[#171B22]" />
                </div>
                <div className="text-right">
                  <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/50 font-semibold">
                    Delivery Time
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[13px] font-bold text-[#171B22] mt-0.5 justify-end">
                    <Clock className="w-3.5 h-3.5 text-[#171B22]/70" />
                    45–70 Days
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-[#171B22]">
                Sea Shipping
              </h3>
              <p className="mt-1 text-[13px] text-[#171B22]/60">
                Ocean container freight. Lowest rate for bulk & heavy stock.
              </p>

              {/* Flat rate box */}
              <div className="mt-5 rounded-xl border border-[#171B22]/10 bg-[#F4F5F7]/80 p-4 font-mono">
                <div className="text-[10px] uppercase tracking-[0.16em] text-[#171B22]/50 mb-1">
                  Flat Rate
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#171B22]">£8</span>
                  <span className="text-xs text-[#171B22]/60 font-semibold">/ kg (all weights)</span>
                </div>
                <div className="mt-2 text-[11px] text-[#171B22]/60 font-sans">
                  Transit timeline: 45–70 days door-to-door
                </div>
              </div>

              <ul className="mt-5 space-y-2 text-[12.5px] text-[#171B22]/75">
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
                  <span>Includes tailgate UK domestic delivery</span>
                </li>
              </ul>
            </div>

            <div className="mt-7 pt-5 border-t border-[#171B22]/8">
              <Link
                to="/signup"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#171B22] hover:bg-[#0A0E14] text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200"
              >
                Ship via Sea Freight
                <ArrowRight className="w-3.5 h-3.5 text-[#FFB000]" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── Interactive Rate Comparison Tool ─────────────────── */}
        <div
          className="rounded-2xl border border-[#171B22]/10 bg-white p-6 sm:p-8 mb-16 shadow-xs"
          data-aos="fade-up"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-4 h-4 text-[#F45B0B]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#171B22]/60 font-bold">
                  Quick Quote Calculator
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171B22]">
                Estimate your UK shipping cost
              </h3>
              <p className="mt-1 text-sm text-[#171B22]/60">
                Enter your total package weight to see instant comparative quotes across Air, Land, and Sea.
              </p>
            </div>

            {/* Input & Instant Comparison Pill */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 flex-1 lg:max-w-xl">
              <div className="sm:w-44">
                <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/50 font-bold mb-1">
                  Weight (kg)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    min="0.5"
                    step="0.5"
                    value={calcWeight}
                    onChange={(e) => setCalcWeight(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#171B22]/15 bg-[#F4F5F7] text-sm font-mono font-bold text-[#171B22] outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15"
                    placeholder="10"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 font-mono text-xs text-[#171B22]/40">
                    kg
                  </span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div className="grid grid-cols-3 gap-2 flex-1">
                <div className="rounded-xl border border-[#FFB000]/40 bg-[#FFB000]/10 p-2.5 text-center">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#171B22]/60 font-bold">
                    Air ({airRate}£/kg)
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#171B22] mt-0.5 font-mono">
                    £{airTotal}
                  </div>
                  <div className="text-[10px] text-[#171B22]/50 font-mono">8–15d</div>
                </div>

                <div className="rounded-xl border border-[#171B22]/10 bg-[#F4F5F7] p-2.5 text-center">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#171B22]/60 font-bold">
                    Land (8£/kg)
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#171B22] mt-0.5 font-mono">
                    £{landTotal}
                  </div>
                  <div className="text-[10px] text-[#171B22]/50 font-mono">30–50d</div>
                </div>

                <div className="rounded-xl border border-[#171B22]/10 bg-[#F4F5F7] p-2.5 text-center">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#171B22]/60 font-bold">
                    Sea (8£/kg)
                  </div>
                  <div className="text-base sm:text-lg font-bold text-[#171B22] mt-0.5 font-mono">
                    £{seaTotal}
                  </div>
                  <div className="text-[10px] text-[#171B22]/50 font-mono">45–70d</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ALL SHIPPING TO UK: SPEED & CARGO BREAKDOWN ─────── */}
        <div className="mb-16" data-aos="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#171B22]/10 bg-white">
                <Zap className="w-3 h-3 text-[#F45B0B]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/70 font-bold">
                  TRANSIT TIERS & CARGO HANDLING
                </span>
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#171B22]">
                ALL SHIPPING TO UK — Speeds & Classification
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#171B22]/60 max-w-xl">
                Choose the transit tier that fits your urgency. We support both General Cargo and
                Sensitive Goods across air, land, and ocean.
              </p>
            </div>

            {/* Filter pills */}
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
                      ? "bg-[#171B22] text-[#FFB000] shadow-sm"
                      : "bg-white border border-[#171B22]/10 text-[#171B22]/60 hover:text-[#171B22]"
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
                  className={`rounded-2xl border bg-white p-6 sm:p-7 transition-all duration-200 ${opt.borderColor} ${opt.accentBg} shadow-xs flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <span
                        className={`px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-[0.14em] ${opt.badgeColor}`}
                      >
                        {opt.category}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#171B22]/70">
                        {opt.rateText}
                      </span>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-white border border-[#171B22]/10 flex items-center justify-center shrink-0 shadow-2xs">
                        <Icon className="w-5 h-5 text-[#171B22]" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold tracking-tight text-[#171B22]">
                          {opt.mode}
                        </h4>
                        <p className="mt-1 text-xs text-[#171B22]/60 leading-relaxed">
                          {opt.recommendedFor}
                        </p>
                      </div>
                    </div>

                    {/* General vs Sensitive Timelines */}
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-xs">
                      <div className="rounded-xl border border-[#171B22]/8 bg-white p-3">
                        <div className="text-[10px] uppercase tracking-wider text-[#171B22]/50 font-semibold mb-1">
                          General Cargo
                        </div>
                        <div className="text-[14px] font-bold text-emerald-700 flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {opt.generalTime}
                        </div>
                      </div>

                      <div className="rounded-xl border border-[#171B22]/8 bg-white p-3">
                        <div className="text-[10px] uppercase tracking-wider text-[#171B22]/50 font-semibold mb-1">
                          Sensitive Goods Cargo
                        </div>
                        <div className="text-[13px] font-bold text-[#F45B0B] flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          {opt.sensitiveTime}
                        </div>
                      </div>
                    </div>

                    {/* Features list */}
                    <ul className="mt-5 space-y-1.5 text-xs text-[#171B22]/75">
                      {opt.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#171B22]/8 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#171B22]/50">
                      Destination: UK Doorstep
                    </span>
                    <Link
                      to="/signup"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#171B22] hover:text-[#F45B0B] transition-colors"
                    >
                      Book route
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
          className="rounded-2xl border border-[#171B22]/10 bg-white p-6 sm:p-8"
          data-aos="fade-up"
        >
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-[#F45B0B]" />
            <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] font-bold text-[#171B22]">
              Cargo Type Classification Guide
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="rounded-xl border border-emerald-600/20 bg-emerald-50/40 p-4">
              <div className="flex items-center gap-2 font-bold text-sm text-emerald-900 mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                General Cargo (Standard)
              </div>
              <p className="text-xs text-emerald-950/70 leading-relaxed">
                Apparel, footwear, plain fabrics, home goods, kitchenware, toys (no batteries),
                stationery, phone cases, dry goods, and standard retail commodities. Standard
                customs documentation applies.
              </p>
            </div>

            <div className="rounded-xl border border-[#F45B0B]/25 bg-orange-50/40 p-4">
              <div className="flex items-center gap-2 font-bold text-sm text-[#F45B0B] mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#F45B0B]" />
                Sensitive Goods Cargo (Special Clearance)
              </div>
              <p className="text-xs text-orange-950/70 leading-relaxed">
                Items with built-in or loose lithium batteries, cosmetics, creams, liquids, powders,
                food, perfumes, branded merchandise, magnets, or circuit boards. Transported via
                dedicated air/land corridors with authorized customs declaration.
              </p>
            </div>
          </div>
        </div>

        {/* ── Quick 4-Step Process Strip ──────────────────────── */}
        <div className="mt-14 pt-10 border-t border-[#171B22]/10" data-aos="fade-up">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/60 font-bold">
              Simple 4-Step Flow
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-[#171B22] mt-1">
              How China to UK package forwarding works
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "01",
                title: "Get China Address",
                desc: "Sign up instantly to get your unique suite at our Shenzhen receiving hub.",
              },
              {
                step: "02",
                title: "Shop Any Supplier",
                desc: "Order on Taobao, 1688, JD, Pinduoduo, or direct from Chinese factories.",
              },
              {
                step: "03",
                title: "Inspection & Repack",
                desc: "Free HD photos, volumetric weight reduction, and parcel consolidation.",
              },
              {
                step: "04",
                title: "UK Door Delivery",
                desc: "Dispatched via Air, Land, or Sea with full DDP customs & zero postal fees.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-[#171B22]/8 bg-white p-5 shadow-2xs"
              >
                <div className="font-mono text-xs font-extrabold text-[#F45B0B]">{s.step}</div>
                <div className="mt-2 text-sm font-bold text-[#171B22]">{s.title}</div>
                <div className="mt-1 text-xs text-[#171B22]/60 leading-relaxed">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
