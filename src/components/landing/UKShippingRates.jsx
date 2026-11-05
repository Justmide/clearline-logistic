import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Truck,
  Ship,
  Clock,
  ShieldCheck,
  Zap,
  ArrowRight,
  Calculator,
} from "lucide-react";

export default function UKShippingRates() {
  const [calcWeight, setCalcWeight] = useState("10");

  const weight = parseFloat(calcWeight) || 0;

  const getAirRatePerKg = (w) => {
    if (w <= 5) return 18;
    if (w <= 15) return 16;
    return 14;
  };

  const airRate = getAirRatePerKg(weight);
  const airTotal = weight > 0 ? (weight * airRate).toFixed(2) : "0.00";
  const landTotal = weight > 0 ? (weight * 8).toFixed(2) : "0.00";
  const seaTotal = weight > 0 ? (weight * 8).toFixed(2) : "0.00";

  const tiers = [
    {
      speed: "FASTER SPEED EXPRESS",
      channel: "Air Transport",
      general: "6–12 days",
      sensitive: "Supported",
      rate: "£14–£18 / kg",
      tag: "Express",
      tagColor: "bg-[#F45B0B] text-white",
    },
    {
      speed: "STANDARD SPEED",
      channel: "Air Transport",
      general: "10–20 days",
      sensitive: "Supported",
      rate: "£14–£18 / kg",
      tag: "Popular",
      tagColor: "bg-[#FFB000] text-[#0B1320]",
    },
    {
      speed: "LAND TRANSPORTATION (TRUCK)",
      channel: "Truck Freight",
      general: "30–45 days",
      sensitive: "Supported",
      rate: "£8 / kg",
      tag: "Overland",
      tagColor: "bg-[#0B1320] text-white",
    },
    {
      speed: "SEA TRANSPORTATION",
      channel: "Ocean Container",
      general: "50–65 days",
      sensitive: "Supported",
      rate: "£8 / kg",
      tag: "Economy",
      tagColor: "bg-slate-700 text-white",
    },
  ];

  return (
    <section id="rates" className="bg-slate-50 text-slate-900 py-14 sm:py-20 border-t border-slate-200 paint-deferred">
      <div id="pricing" className="absolute -top-24" />
      <div id="how-it-works" className="absolute -top-24" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Title (Short & Punchy) ─────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white text-[11px] font-mono uppercase font-bold text-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#F45B0B]" />
            UK Official Corridor Rates
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1320] tracking-tight">
            All Shipping to UK
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Delivered Duty Paid (DDP) to your doorstep. All UK customs VAT and duty included.
          </p>
        </div>

        {/* ── 3 Main Rate Cards (Clean, Compact, No Clutter) ───── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* Air Freight */}
          <div className="rounded-xl bg-white border-2 border-[#FFB000] p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 font-bold text-base text-[#0B1320]">
                  <Plane className="w-5 h-5 text-[#F45B0B]" />
                  UK Air Freight
                </div>
                <span className="font-mono text-xs font-bold text-[#F45B0B] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                  8–15 Days
                </span>
              </div>

              {/* Weight tiers */}
              <div className="rounded-lg bg-slate-50 border border-slate-200 p-2.5 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">0 – 5 kg</span>
                  <span className="font-bold text-slate-900">£18 / kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">5 – 15 kg</span>
                  <span className="font-bold text-slate-900">£16 / kg</span>
                </div>
                <div className="flex justify-between text-[#F45B0B] font-bold">
                  <span>15 kg upward</span>
                  <span>£14 / kg</span>
                </div>
              </div>
            </div>

            <Link
              to="/signup"
              className="mt-4 w-full py-2.5 rounded-lg bg-[#FFB000] hover:bg-[#F45B0B] active:scale-[0.98] text-[#0B1320] hover:text-white font-mono text-xs font-bold uppercase text-center transition-all"
            >
              Book Air Freight →
            </Link>
          </div>

          {/* Land Shipping */}
          <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 font-bold text-base text-[#0B1320]">
                  <Truck className="w-5 h-5 text-[#0B1320]" />
                  Land Shipping
                </div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  30–50 Days
                </span>
              </div>

              <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 text-center font-mono">
                <div className="text-xs text-slate-500">Flat Rate</div>
                <div className="text-2xl font-bold text-slate-900 my-1">£8 / kg</div>
                <div className="text-[11px] text-slate-500">Overland Truck Freight</div>
              </div>
            </div>

            <Link
              to="/signup"
              className="mt-4 w-full py-2.5 rounded-lg bg-[#0B1320] hover:bg-slate-800 active:scale-[0.98] text-white font-mono text-xs font-bold uppercase text-center transition-all"
            >
              Book Land Shipping →
            </Link>
          </div>

          {/* Sea Shipping */}
          <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 font-bold text-base text-[#0B1320]">
                  <Ship className="w-5 h-5 text-[#0B1320]" />
                  Sea Shipping
                </div>
                <span className="font-mono text-xs font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  45–70 Days
                </span>
              </div>

              <div className="rounded-lg bg-slate-50 border border-slate-200 p-3 text-center font-mono">
                <div className="text-xs text-slate-500">Flat Rate</div>
                <div className="text-2xl font-bold text-slate-900 my-1">£8 / kg</div>
                <div className="text-[11px] text-slate-500">Ocean Container Cargo</div>
              </div>
            </div>

            <Link
              to="/signup"
              className="mt-4 w-full py-2.5 rounded-lg bg-[#0B1320] hover:bg-slate-800 text-white font-mono text-xs font-bold uppercase text-center transition-colors"
            >
              Book Sea Shipping →
            </Link>
          </div>
        </div>

        {/* ── Compact Instant Estimator (1 Row) ───────────────── */}
        <div className="rounded-xl border border-slate-200 bg-white p-4 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Calculator className="w-4 h-4 text-[#F45B0B]" />
              <span className="text-xs font-mono uppercase font-bold text-slate-700">
                Estimate:
              </span>
              <div className="relative w-28">
                <input
                  type="number"
                  min="0.5"
                  step="0.5"
                  value={calcWeight}
                  onChange={(e) => setCalcWeight(e.target.value)}
                  className="w-full px-2.5 py-1.5 rounded-md border border-slate-200 text-base sm:text-xs font-mono font-bold text-slate-900 outline-none focus:border-[#FFB000]"
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[11px] text-slate-400">
                  kg
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 w-full sm:w-auto font-mono text-xs text-center">
              <div className="bg-[#FFB000]/10 border border-[#FFB000]/30 px-3 py-1.5 rounded-md">
                <span className="text-slate-500 text-[10px] block">Air ({airRate}£/kg)</span>
                <span className="font-bold text-slate-900">£{airTotal}</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
                <span className="text-slate-500 text-[10px] block">Land (8£/kg)</span>
                <span className="font-bold text-slate-900">£{landTotal}</span>
              </div>
              <div className="bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-md">
                <span className="text-slate-500 text-[10px] block">Sea (8£/kg)</span>
                <span className="font-bold text-slate-900">£{seaTotal}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── ALL SHIPPING TO UK: SPEED & CARGO BREAKDOWN ─────── */}
        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden mb-8">
          <div className="px-5 py-3 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#F45B0B]" />
              <span className="font-mono text-xs uppercase font-bold text-slate-800">
                Speed &amp; Cargo Classification
              </span>
            </div>
            <span className="font-mono text-[11px] text-slate-500">Destination: All UK Addresses</span>
          </div>

          <div className="divide-y divide-slate-100 font-mono text-xs">
            {tiers.map((t, idx) => (
              <div
                key={idx}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 hover:bg-slate-50/70 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${t.tagColor}`}>
                    {t.tag}
                  </span>
                  <div>
                    <div className="font-bold text-slate-900">{t.speed}</div>
                    <div className="text-[11px] text-slate-500">{t.channel}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 sm:flex items-center gap-2 sm:gap-6 text-left sm:text-right pt-2.5 sm:pt-0 border-t border-slate-100 sm:border-0 w-full sm:w-auto">
                  <div>
                    <div className="text-[11px] text-slate-400">General Cargo</div>
                    <div className="font-bold text-emerald-700">{t.general}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Sensitive Goods</div>
                    <div className="font-bold text-[#F45B0B]">{t.sensitive}</div>
                  </div>
                  <div className="sm:w-24 text-right">
                    <div className="text-[11px] text-slate-400">Rate</div>
                    <div className="font-bold text-slate-900">{t.rate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── How It Works (Simple 4-Step Flow) ───────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center font-mono text-xs">
          {[
            { n: "01", t: "Get China Suite", d: "Free warehouse address" },
            { n: "02", t: "Ship From Suppliers", d: "Send items to suite" },
            { n: "03", t: "Free Consolidation", d: "Repack to cut weight" },
            { n: "04", t: "UK Doorstep Delivery", d: "100% DDP cleared" },
          ].map((s) => (
            <div key={s.n} className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="text-[11px] font-extrabold text-[#F45B0B]">{s.n}</div>
              <div className="font-bold text-slate-800 text-xs mt-0.5">{s.t}</div>
              <div className="text-[10px] text-slate-500 mt-0.5">{s.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
