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
  Package,
  MapPin,
  Clock,
  Loader2,
} from "lucide-react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [activeTab, setActiveTab] = useState("track");
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const [weightKg, setWeightKg] = useState("3.5");
  const [shippingMode, setShippingMode] = useState("air");
  const [cargoType, setCargoType] = useState("general");

  useEffect(() => {
    const startVideo = () => {
      if (videoRef.current) {
        videoRef.current.defaultMuted = true;
        videoRef.current.muted = true;
        videoRef.current.play().catch(() => {});
      }
    };
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(startVideo, { timeout: 1200 });
    } else {
      const timer = setTimeout(startVideo, 200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleTrackSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    if (!trackingCode.trim() || isSearching) return;

    setIsSearching(true);
    setTrackingResult(null);

    setTimeout(() => {
      setIsSearching(false);
      setTrackingResult({
        code: trackingCode.trim().toUpperCase(),
        status: "In Transit",
        statusDetail: "Flight departed",
        origin: "Shenzhen Hub (SZX)",
        destination: "London Heathrow (LHR) → UK Doorstep",
        eta: "3–4 Business Days",
        steps: [
          { label: "Received at China hub", done: true },
          { label: "Consolidated & export cleared", done: true },
          { label: "Cargo en route to London", done: true, current: true },
          { label: "HMRC customs clearance (DDP)", done: false },
          { label: "Doorstep courier delivery", done: false },
        ],
      });
    }, 420);
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
    const sensitiveExtra = cargoType === "sensitive" ? 1 : 0;
    return (numWeight * (8 + sensitiveExtra)).toFixed(2);
  })();

  return (
    <section className="relative overflow-hidden bg-[#0B1320] text-white pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">
      {/* ── Background Video (Fully Visible & Vibrant) ──────── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover hidden sm:block pointer-events-none"
        autoPlay
        loop
        muted
        defaultMuted
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/assets/videos/hero-cargo.mp4" type="video/mp4" />
        <source src="/videos/hero-cargo.mp4" type="video/mp4" />
      </video>

      {/* ── Subtle Cinematic Overlays for Text Legibility ───── */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#0B1320]/45" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0B1320]/85 via-[#0B1320]/50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0B1320] to-transparent pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top Pill ────────────────────────────────────────── */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#FFB000] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-wider uppercase text-white font-semibold">
              China ➔ UK Dedicated Freight
            </span>
          </div>
        </div>

        {/* ── Two-Column Layout ───────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT: Short, Punchy Headline & Value */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              China to UK Shipping,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB000] via-[#FFD166] to-[#F45B0B]">
                Delivered Duty Paid.
              </span>
            </h1>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-200 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
              Air from <strong className="text-white">£14/kg</strong> (8–15d) · Land &amp; Sea at <strong className="text-white">£8/kg</strong>. Full HMRC DDP customs settled in advance to your UK doorstep.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <Link
                to="/signup"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] active:scale-[0.97] text-[#0B1320] hover:text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all duration-150 shadow-sm"
              >
                <Package className="w-4 h-4" />
                Get China Suite
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="#rates"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.97] border border-white/20 text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all backdrop-blur-md"
              >
                <Calculator className="w-4 h-4 text-[#FFB000]" />
                View Rates
              </a>
            </div>

            {/* Compact Trust Metrics */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              {[
                { k: "8–15d", label: "Air Freight" },
                { k: "£8/kg", label: "Land & Sea" },
                { k: "100%", label: "DDP Handled" },
                { k: "Free", label: "Consolidation" },
              ].map((m, i) => (
                <div key={i} className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-xs p-2.5">
                  <div className="text-base sm:text-lg font-bold text-white tabular-nums">{m.k}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-slate-300">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-center lg:justify-start gap-1.5 text-slate-300 text-[11px] font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>HMRC Registered · No Hidden Postal Fees</span>
            </div>
          </div>

          {/* RIGHT: Compact Console (Tracking & Quote) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/20 bg-white/95 text-slate-900 shadow-xl backdrop-blur-xl overflow-hidden">
              {/* Header & Tabs */}
              <div className="border-b border-slate-200 bg-slate-50/90 px-5 pt-4 pb-0">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setActiveTab("track");
                      setTrackingResult(null);
                    }}
                    className={`flex-1 pb-2.5 flex items-center justify-center gap-1.5 font-mono text-[11px] uppercase tracking-wider font-bold border-b-2 transition-all cursor-pointer ${
                      activeTab === "track"
                        ? "border-[#F45B0B] text-[#0B1320]"
                        : "border-transparent text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <Search className={`w-3.5 h-3.5 ${activeTab === "track" ? "text-[#F45B0B]" : ""}`} />
                    Track
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("calculate")}
                    className={`flex-1 pb-2.5 flex items-center justify-center gap-1.5 font-mono text-[11px] uppercase tracking-wider font-bold border-b-2 transition-all cursor-pointer ${
                      activeTab === "calculate"
                        ? "border-[#F45B0B] text-[#0B1320]"
                        : "border-transparent text-slate-400 hover:text-slate-700"
                    }`}
                  >
                    <Calculator className={`w-3.5 h-3.5 ${activeTab === "calculate" ? "text-[#F45B0B]" : ""}`} />
                    Quick Quote
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                {activeTab === "track" ? (
                  <div>
                    <form onSubmit={handleTrackSubmit} className="flex gap-2">
                      <div className="relative flex-1">
                        <Package className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={trackingCode}
                          onChange={(e) => setTrackingCode(e.target.value)}
                          placeholder="CLE-88392-UK"
                          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-slate-200 bg-white text-base sm:text-sm font-mono outline-none focus:border-[#FFB000] focus:ring-2 focus:ring-[#FFB000]/20 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSearching}
                        className="px-4 py-2.5 rounded-lg bg-[#0B1320] hover:bg-slate-800 active:scale-95 text-white font-mono text-[11px] uppercase tracking-wider font-bold transition-all cursor-pointer shrink-0 disabled:opacity-75 flex items-center justify-center gap-1.5 min-w-[76px]"
                      >
                        {isSearching ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-[#FFB000]" />
                            <span>Locating…</span>
                          </>
                        ) : (
                          <>
                            <Search className="w-3.5 h-3.5" />
                            <span>Track</span>
                          </>
                        )}
                      </button>
                    </form>

                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="font-mono text-[10px] text-slate-400">Try:</span>
                      {["CLE-88392-UK", "CLE-74190-UK"].map((code) => (
                        <button
                          key={code}
                          type="button"
                          disabled={isSearching}
                          onClick={() => {
                            setTrackingCode(code);
                            setIsSearching(true);
                            setTrackingResult(null);
                            setTimeout(() => {
                              setIsSearching(false);
                              setTrackingResult({
                                code: code,
                                status: "In Transit",
                                statusDetail: "Flight departed",
                                origin: "Shenzhen Hub (SZX)",
                                destination: "London Heathrow (LHR) → UK Doorstep",
                                eta: "3–4 Business Days",
                                steps: [
                                  { label: "Received at China hub", done: true },
                                  { label: "Consolidated & export cleared", done: true },
                                  { label: "Cargo en route to London", done: true, current: true },
                                  { label: "HMRC customs clearance (DDP)", done: false },
                                  { label: "Doorstep courier delivery", done: false },
                                ],
                              });
                            }, 380);
                          }}
                          className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 active:scale-95 border border-slate-200 font-mono text-[10px] text-slate-700 cursor-pointer transition-all"
                        >
                          {code}
                        </button>
                      ))}
                    </div>

                    {trackingResult && (
                      <div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs font-mono space-y-1.5">
                        <div className="flex justify-between font-bold text-slate-800">
                          <span>{trackingResult.code}</span>
                          <span className="text-emerald-700">{trackingResult.status}</span>
                        </div>
                        <div className="text-slate-500 text-[11px]">{trackingResult.origin} → {trackingResult.destination}</div>
                        <div className="text-emerald-700 text-[11px] font-semibold">100% HMRC DDP Paid · ETA {trackingResult.eta}</div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-3.5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div>
                        <label className="block font-mono text-[10px] uppercase text-slate-500 font-bold mb-1">
                          Weight (kg)
                        </label>
                        <input
                          type="number"
                          min="0.5"
                          step="0.5"
                          value={weightKg}
                          onChange={(e) => setWeightKg(e.target.value)}
                          className="w-full px-2.5 py-2 rounded-lg border border-slate-200 bg-white text-base sm:text-sm font-mono font-bold text-slate-900 outline-none focus:border-[#FFB000]"
                        />
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] uppercase text-slate-500 font-bold mb-1">
                          Mode
                        </label>
                        <select
                          value={shippingMode}
                          onChange={(e) => setShippingMode(e.target.value)}
                          className="w-full px-2.5 py-2 rounded-lg border border-slate-200 bg-white text-base sm:text-sm font-mono text-slate-900 outline-none focus:border-[#FFB000] cursor-pointer"
                        >
                          <option value="air">Air (8–15d · £14-18)</option>
                          <option value="land">Land (30–50d · £8)</option>
                          <option value="sea">Sea (45–70d · £8)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-mono text-[10px] uppercase text-slate-500 font-bold mb-1">
                          Cargo
                        </label>
                        <select
                          value={cargoType}
                          onChange={(e) => setCargoType(e.target.value)}
                          className="w-full px-2.5 py-2 rounded-lg border border-slate-200 bg-white text-base sm:text-sm font-mono text-slate-900 outline-none focus:border-[#FFB000] cursor-pointer"
                        >
                          <option value="general">General</option>
                          <option value="sensitive">Sensitive</option>
                        </select>
                      </div>
                    </div>

                    {/* Output Total */}
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 flex items-center justify-between">
                      <div>
                        <div className="font-mono text-[9.5px] uppercase tracking-wider text-slate-500 font-semibold">
                          Doorstep Total (DDP included)
                        </div>
                        <div className="text-2xl font-extrabold text-slate-900 font-mono tabular-nums">
                          £{estimatedCost}
                        </div>
                      </div>
                      <Link
                        to="/signup"
                        className="px-3.5 py-2 rounded-lg bg-[#FFB000] hover:bg-[#F45B0B] text-[#0B1320] hover:text-white font-mono text-[10.5px] font-bold uppercase transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>

                    {/* 3 mini cards */}
                    <div className="grid grid-cols-3 gap-1.5 text-center font-mono">
                      <div className="rounded border border-slate-200 p-1.5 bg-white">
                        <div className="text-[10px] font-bold text-slate-800">Air</div>
                        <div className="text-[9px] text-slate-500">8–15d · £14-18</div>
                      </div>
                      <div className="rounded border border-slate-200 p-1.5 bg-white">
                        <div className="text-[10px] font-bold text-slate-800">Land</div>
                        <div className="text-[9px] text-slate-500">30–50d · £8</div>
                      </div>
                      <div className="rounded border border-slate-200 p-1.5 bg-white">
                        <div className="text-[10px] font-bold text-slate-800">Sea</div>
                        <div className="text-[9px] text-slate-500">45–70d · £8</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-5 py-2.5 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-500 text-[10.5px]">Free China Suite on signup</span>
                <Link to="/signup" className="font-bold text-[#0B1320] hover:text-[#F45B0B]">
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
