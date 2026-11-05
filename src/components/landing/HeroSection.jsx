import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Ship,
  Truck,
  Search,
  Calculator,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Package,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState("track");
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);

  const [weightKg, setWeightKg] = useState("3.5");
  const [shippingMode, setShippingMode] = useState("air");
  const [cargoType, setCargoType] = useState("general");

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by battery saver or policy
      });
    }
  }, []);

  const handleTrackSubmit = (e) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;

    setTrackingResult({
      code: trackingCode.trim().toUpperCase(),
      status: "In Transit",
      statusDetail: "Direct flight departed",
      origin: "Shenzhen Hub (SZX)",
      destination: "London Heathrow (LHR) → UK Doorstep",
      eta: "3–4 Business Days",
      steps: [
        { label: "Received at China consolidation hub", done: true },
        { label: "Consolidated, inspected & export cleared", done: true },
        { label: "Direct cargo flight en route to London", done: true, current: true },
        { label: "UK HMRC customs clearance (DDP settled)", done: false },
        { label: "Last-mile doorstep dispatch via licensed UK courier", done: false },
      ],
    });
  };

  const numWeight = parseFloat(weightKg) || 1;
  const getAirRate = (w) => {
    if (w <= 5) return 18;
    if (w <= 15) return 16;
    return 14;
  };
  const estimatedCost = (() => {
    if (shippingMode === "air") {
      const rate = getAirRate(numWeight);
      const sensitiveExtra = cargoType === "sensitive" ? 2 : 0;
      return (numWeight * (rate + sensitiveExtra)).toFixed(2);
    }
    if (shippingMode === "land") {
      const sensitiveExtra = cargoType === "sensitive" ? 1.5 : 0;
      return (numWeight * (8 + sensitiveExtra)).toFixed(2);
    }
    // sea
    const sensitiveExtra = cargoType === "sensitive" ? 1 : 0;
    return (numWeight * (8 + sensitiveExtra)).toFixed(2);
  })();

  return (
    <section className="relative overflow-hidden bg-[#0B1320] text-white pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-28">
      {/* ── Background Video with Dark Vignette ──────────────── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/assets/videos/hero-cargo.mp4" type="video/mp4" />
        <source src="/videos/hero-cargo.mp4" type="video/mp4" />
      </video>

      {/* ── Professional Optical Contrast Gradients ─────────── */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#0B1320]/75" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#0B1320]/90 via-[#0B1320]/60 to-[#0B1320]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0B1320] to-transparent pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Corridor Pill ───────────────────────────────── */}
        <div className="flex justify-center lg:justify-start mb-8" data-aos="fade-up">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-md shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFB000] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFB000]" />
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="font-mono text-[10.5px] tracking-[0.16em] uppercase text-slate-200 font-semibold">
              China ➔ United Kingdom Dedicated Corridor
            </span>
          </div>
        </div>

        {/* ── Two-Column Hero Grid ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT: Headline & Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left" data-aos="fade-up">
            <h1 className="text-[36px] sm:text-[50px] lg:text-[58px] font-extrabold tracking-[-0.035em] leading-[1.04] text-white">
              China to the UK,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB000] via-[#FFD166] to-[#F45B0B]">
                transparent, reliable & DDP.
              </span>
            </h1>

            <p className="mt-6 text-[15px] sm:text-base text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Direct Air Freight from <span className="text-white font-semibold">£14/kg</span> (8–15 days). Overland Land Trucking & Sea Cargo at <span className="text-white font-semibold">£8/kg</span>. Free China hub consolidation, HD photo inspection, and 100% HMRC import duty/VAT settled in advance.
            </p>

            {/* CTA Action Row */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Link
                to="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-[#0B1320] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-md active:scale-[0.98]"
              >
                <Package className="w-4 h-4" />
                Get Your China Suite
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="#rates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 backdrop-blur-md active:scale-[0.98]"
              >
                <Calculator className="w-4 h-4 text-[#FFB000]" />
                Compare UK Rates
              </a>
            </div>

            {/* Metrics Trust Row */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-2xl mx-auto lg:mx-0">
              {[
                { k: "8–15", unit: "days", label: "Air freight" },
                { k: "100%", unit: "DDP", label: "VAT & duty cleared" },
                { k: "£8.00", unit: "/kg", label: "Land & Sea from" },
                { k: "Free", unit: "", label: "Consolidation & repacking" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-3.5 text-center lg:text-left transition-colors hover:bg-white/[0.08]"
                >
                  <div className="flex items-baseline justify-center lg:justify-start gap-1">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-white tabular-nums">
                      {m.k}
                    </span>
                    {m.unit && (
                      <span className="font-mono text-[10px] text-[#FFB000] tracking-wider uppercase font-semibold">
                        {m.unit}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 font-mono text-[9.5px] uppercase tracking-[0.14em] text-slate-400">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Reassurance badge */}
            <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-slate-400 text-xs font-mono">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>HMRC Registered · DDP Doorstep Delivery · No Postal Surcharges</span>
            </div>
          </div>

          {/* RIGHT: Live Interactive Console (Track & Quick Quote) */}
          <div className="lg:col-span-5" data-aos="fade-up" data-aos-delay="100">
            <div className="rounded-2xl border border-slate-700/80 bg-white/95 text-slate-900 shadow-2xl backdrop-blur-xl overflow-hidden">
              {/* Card Header & Tab Switcher */}
              <div className="border-b border-slate-200 bg-slate-50/80 px-6 pt-5 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                      Direct Hub Portal
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                    <Clock className="w-3 h-3 text-[#F45B0B]" />
                    Live Rates
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("track");
                      setTrackingResult(null);
                    }}
                    className={`flex-1 pb-3 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] font-bold border-b-2 transition-all cursor-pointer ${
                      activeTab === "track"
                        ? "border-[#F45B0B] text-[#0B1320]"
                        : "border-transparent text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <Search className={`w-3.5 h-3.5 ${activeTab === "track" ? "text-[#F45B0B]" : ""}`} />
                    Track Shipment
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("calculate")}
                    className={`flex-1 pb-3 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] font-bold border-b-2 transition-all cursor-pointer ${
                      activeTab === "calculate"
                        ? "border-[#F45B0B] text-[#0B1320]"
                        : "border-transparent text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <Calculator className={`w-3.5 h-3.5 ${activeTab === "calculate" ? "text-[#F45B0B]" : ""}`} />
                    Instant Quote
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {activeTab === "track" ? (
                  <div>
                    <form onSubmit={handleTrackSubmit} className="flex flex-col sm:flex-row gap-2">
                      <div className="relative flex-1">
                        <Package className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={trackingCode}
                          onChange={(e) => setTrackingCode(e.target.value)}
                          placeholder="e.g. CLE-88392-UK"
                          className="w-full pl-10 pr-3 py-3 rounded-xl border border-slate-200 bg-white text-base sm:text-sm font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 text-slate-900 placeholder:text-slate-400 transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0B1320] hover:bg-slate-800 text-white font-mono text-[11px] uppercase tracking-[0.14em] font-bold transition-colors cursor-pointer shrink-0 shadow-sm"
                      >
                        <Search className="w-3.5 h-3.5 text-[#FFB000]" />
                        Track
                      </button>
                    </form>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
                        Demo:
                      </span>
                      {["CLE-88392-UK", "CLE-74190-UK"].map((code) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => {
                            setTrackingCode(code);
                            handleTrackSubmit({ preventDefault: () => {} });
                          }}
                          className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-200 font-mono text-[10.5px] text-slate-700 transition-colors cursor-pointer"
                        >
                          {code}
                        </button>
                      ))}
                    </div>

                    {trackingResult && (
                      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50/70 overflow-hidden">
                        <div className="px-4 py-3 flex items-center justify-between border-b border-slate-200 bg-[#0B1320] text-white">
                          <span className="font-mono text-xs tracking-wider text-white font-bold">
                            {trackingResult.code}
                          </span>
                          <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-[#FFB000] text-[#0B1320] font-bold">
                            {trackingResult.status}
                          </span>
                        </div>
                        <div className="p-4 space-y-3 font-mono text-xs">
                          <div className="flex justify-between border-b border-slate-200 pb-2">
                            <span className="text-slate-500">Route</span>
                            <span className="font-bold text-slate-800 text-right">{trackingResult.origin} → {trackingResult.destination}</span>
                          </div>
                          <div className="flex justify-between border-b border-slate-200 pb-2">
                            <span className="text-slate-500">Customs Status</span>
                            <span className="font-bold text-emerald-700">100% HMRC DDP Paid</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Estimated Delivery</span>
                            <span className="font-bold text-slate-900">{trackingResult.eta}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {/* Weight & Mode Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 font-bold mb-1.5">
                          Weight (kg)
                        </label>
                        <input
                          type="number"
                          min="0.5"
                          step="0.5"
                          value={weightKg}
                          onChange={(e) => setWeightKg(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-base sm:text-sm font-mono font-bold text-slate-900 outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 font-bold mb-1.5">
                          Mode
                        </label>
                        <select
                          value={shippingMode}
                          onChange={(e) => setShippingMode(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-base sm:text-sm font-mono text-slate-900 outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 cursor-pointer"
                        >
                          <option value="air">Air (8–15d · £14-18)</option>
                          <option value="land">Land Truck (30–50d · £8)</option>
                          <option value="sea">Sea Freight (45–70d · £8)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 font-bold mb-1.5">
                          Cargo Type
                        </label>
                        <select
                          value={cargoType}
                          onChange={(e) => setCargoType(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-slate-200 bg-white text-base sm:text-sm font-mono text-slate-900 outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 cursor-pointer"
                        >
                          <option value="general">General Cargo</option>
                          <option value="sensitive">Sensitive Goods</option>
                        </select>
                      </div>
                    </div>

                    {/* Estimated Total Card */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500 font-bold">
                            All-in UK Doorstep Total
                          </div>
                          <div className="mt-1 flex items-baseline gap-2">
                            <span className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                              £{estimatedCost}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-[#F45B0B] font-bold">
                              DDP Included
                            </span>
                          </div>
                          <div className="mt-1 text-xs text-slate-500">
                            Includes Chinese hub receiving, UK import duty/VAT & door courier delivery.
                          </div>
                        </div>

                        <Link
                          to="/signup"
                          className="px-4 py-2.5 rounded-lg bg-[#FFB000] hover:bg-[#F45B0B] text-[#0B1320] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shrink-0 shadow-xs"
                        >
                          Book Now
                        </Link>
                      </div>
                    </div>

                    {/* Quick 3-Mode Summary Strip */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono">
                      <div className="rounded-lg border border-slate-200 bg-white p-2.5 flex items-center gap-2">
                        <Plane className="w-4 h-4 text-[#F45B0B] shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">Air Freight</div>
                          <div className="text-[10px] text-slate-500">8–15d · £14–£18</div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white p-2.5 flex items-center gap-2">
                        <Truck className="w-4 h-4 text-slate-700 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">Land Truck</div>
                          <div className="text-[10px] text-slate-500">30–50d · £8/kg</div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-slate-200 bg-white p-2.5 flex items-center gap-2">
                        <Ship className="w-4 h-4 text-slate-700 shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-slate-900">Sea Freight</div>
                          <div className="text-[10px] text-slate-500">45–70d · £8/kg</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-slate-600 font-mono text-[11px]">
                  <MapPin className="w-3.5 h-3.5 text-[#F45B0B]" />
                  <span>Free China Suite assigned on registration</span>
                </div>
                <Link
                  to="/signup"
                  className="font-mono text-[11px] font-bold uppercase text-[#0B1320] hover:text-[#F45B0B] transition-colors"
                >
                  Register →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
