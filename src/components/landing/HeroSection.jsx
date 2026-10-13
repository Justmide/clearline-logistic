import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  Ship,
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
      statusDetail: "Air flight departed",
      origin: "Shenzhen (SZX)",
      destination: "London Heathrow (LHR) → UK Doorstep",
      eta: "3–4 Business Days",
      steps: [
        { label: "Received at Shenzhen warehouse", done: true },
        { label: "Consolidated & export customs cleared", done: true },
        { label: "Air cargo en route to Heathrow", done: true, current: true },
        { label: "UK HMRC customs clearance (DDP)", done: false },
        { label: "Last-mile delivery · DPD / Royal Mail", done: false },
      ],
    });
  };

  const numWeight = parseFloat(weightKg) || 1;
  const baseRateAir = cargoType === "general" ? 8.5 : 10.2;
  const baseRateSea = 2.4;
  const estimatedCost =
    shippingMode === "air"
      ? (numWeight * baseRateAir + 12).toFixed(2)
      : (Math.max(numWeight, 15) * baseRateSea + 20).toFixed(2);

  return (
    <section className="relative overflow-hidden bg-[#171B22] text-white pt-28 sm:pt-32 lg:pt-36 pb-20 sm:pb-28">
      {/* ── Animated video background ───────────────────────── */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
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

      {/* ── Glass overlays for legibility ─────────────────── */}
      <div aria-hidden="true" className="absolute inset-0 bg-[#171B22]/45" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#171B22]/85 via-[#171B22]/55 to-[#171B22]/25"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#171B22] to-transparent"
      />

      {/* ── Ambient colour glows ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-30 blur-[140px] pointer-events-none mix-blend-screen"
        style={{ background: "radial-gradient(circle, #FFB00055, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-[140px] pointer-events-none mix-blend-screen"
        style={{ background: "radial-gradient(circle, #F45B0B44, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Top corridor chip ─────────────────────────────── */}
        <div className="flex justify-center mb-10">
          <div
            className="
              inline-flex items-center gap-3 px-4 py-2 rounded-full
              bg-white/[0.08] backdrop-blur-2xl backdrop-saturate-150
              border border-white/20
              shadow-[0_8px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.15)_inset]
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#FFB000] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FFB000]" />
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-white">
              China to all UK postcodes
            </span>
          </div>
        </div>

        {/* ── Two-column hero ─────────────────────────────── */}
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-start">
          {/* LEFT: Headline + trust */}
          <div className="lg:pt-4">
            <h1 className="text-center text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold tracking-[-0.03em] leading-[0.98] text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.5)]">
              China to the UK,
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">without the friction.</span>
                <span
                  aria-hidden="true"
                  className="absolute left-0 right-0 bottom-[0.08em] h-[0.35em] bg-[#FFB000]/40 -skew-x-6 -z-0"
                />
              </span>
            </h1>

            <p className="text-center mt-7 text-[15px] sm:text-base text-white/75 max-w-xl mx-auto leading-relaxed [text-shadow:0_1px_12px_rgba(0,0,0,0.4)]">
              Air courier in <span className="text-white font-medium">3–7 days</span>. Ocean
              freight from <span className="text-white font-medium">£2.40/kg</span>. Free
              warehouse consolidation for Taobao &amp; 1688 orders. Full DDP customs — duties and
              VAT handled — delivered straight to your door.
            </p>

            {/* Primary actions */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/signup"
                className="
                  group inline-flex items-center gap-2 px-5 py-3 rounded-xl
                  bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white
                  font-mono text-[11px] font-bold uppercase tracking-[0.14em]
                  transition-all duration-200
                  shadow-[0_8px_30px_-8px_rgba(255,176,0,0.6),0_1px_0_rgba(255,255,255,0.25)_inset]
                  hover:shadow-[0_12px_36px_-8px_rgba(244,91,11,0.65),0_1px_0_rgba(255,255,255,0.3)_inset]
                "
              >
                <Ship className="w-4 h-4" />
                Start shipping
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <Link
                to="/pricing"
                className="
                  inline-flex items-center gap-2 px-5 py-3 rounded-xl
                  bg-white/[0.08] hover:bg-white/[0.14]
                  backdrop-blur-2xl backdrop-saturate-150
                  border border-white/20 hover:border-white/35
                  text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em]
                  transition-all duration-200
                  shadow-[0_8px_32px_rgba(0,0,0,0.25),0_1px_0_rgba(255,255,255,0.15)_inset]
                "
              >
                <Calculator className="w-4 h-4 text-[#FFB000]" />
                View full pricing
              </Link>
            </div>

            {/* Glass bento trust row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/15 rounded-2xl overflow-hidden border border-white/20 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_32px_rgba(0,0,0,0.35),0_1px_0_rgba(255,255,255,0.15)_inset]">
              {[
                { k: "3–7", unit: "days", label: "Air express" },
                { k: "100%", unit: "DDP", label: "Duties handled" },
                { k: "£2.40", unit: "/kg", label: "Ocean from" },
                { k: "Free", unit: "", label: "Repack & store" },
              ].map((m, i) => (
                <div
                  key={i}
                  className="bg-[#171B22]/50 px-4 py-5 hover:bg-[#171B22]/70 transition-colors"
                >
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                      {m.k}
                    </span>
                    {m.unit && (
                      <span className="font-mono text-[10px] text-[#FFB000] tracking-wider uppercase">
                        {m.unit}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-white/55">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Micro reassurance */}
            <div className="mt-6 flex items-center justify-center gap-2 text-white/60">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.14em]">
                HMRC registered · 30-day free storage · Insured end-to-end
              </span>
            </div>
          </div>

          {/* RIGHT: Glass interactive card */}
          <div className="relative">
            {/* Colour halo behind the card */}
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[#FFB000]/25 via-transparent to-[#F45B0B]/15 blur-2xl opacity-70 pointer-events-none"
            />

            <div
              className="
                relative rounded-2xl overflow-hidden
                bg-white/70 backdrop-blur-3xl backdrop-saturate-150
                border border-white/40
                text-[#171B22]
                shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5),0_1px_0_rgba(255,255,255,0.9)_inset]
              "
            >
              {/* Specular highlight streak */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-70"
              />

              {/* Card header */}
              <div className="px-6 pt-6 pb-5 border-b border-[#171B22]/8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-[#F45B0B]" />
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/60">
                        Live tools
                      </span>
                    </div>
                    <h2 className="mt-2 text-lg sm:text-xl font-bold tracking-tight text-[#171B22]">
                      Track or quote in seconds
                    </h2>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#171B22]/85 text-[#FFB000] font-mono text-[9px] uppercase tracking-[0.16em] backdrop-blur-sm">
                    <Clock className="w-3 h-3" />
                    Realtime
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="relative flex px-6 pt-4">
                <div className="flex-1 flex">
                  {[
                    { id: "track", label: "Track package", icon: Search },
                    { id: "calculate", label: "Get a quote", icon: Calculator },
                  ].map((t) => {
                    const Icon = t.icon;
                    const active = activeTab === t.id;
                    return (
                      <button
                        key={t.id}
                        onClick={() => {
                          setActiveTab(t.id);
                          if (t.id === "track") setTrackingResult(null);
                        }}
                        className={`flex-1 pb-3 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] font-bold transition-colors cursor-pointer ${
                          active
                            ? "text-[#171B22]"
                            : "text-[#171B22]/40 hover:text-[#171B22]/70"
                        }`}
                      >
                        <Icon
                          className={`w-3.5 h-3.5 ${
                            active ? "text-[#F45B0B]" : "text-[#171B22]/40"
                          }`}
                        />
                        {t.label}
                      </button>
                    );
                  })}
                </div>
                <div className="absolute left-6 right-6 bottom-0 h-px bg-[#171B22]/10" />
                <div
                  className="absolute bottom-0 h-[2px] bg-[#FFB000] transition-transform duration-300 ease-out"
                  style={{
                    left: "1.5rem",
                    right: "1.5rem",
                    width: "calc(50% - 1.5rem)",
                    transform:
                      activeTab === "track" ? "translateX(0)" : "translateX(100%)",
                  }}
                />
              </div>

              {/* Card body */}
              <div className="px-6 pt-6 pb-6">
                {activeTab === "track" && (
                  <div>
                    <form
                      onSubmit={handleTrackSubmit}
                      className="flex flex-col sm:flex-row gap-2"
                    >
                      <div className="relative flex-1">
                        <Package className="w-4 h-4 text-[#171B22]/35 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          value={trackingCode}
                          onChange={(e) => setTrackingCode(e.target.value)}
                          placeholder="CLE-88392-UK or China domestic code"
                          className="w-full pl-10 pr-3 py-3 rounded-lg border border-[#171B22]/12 bg-white/70 backdrop-blur-xl text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 focus:bg-white transition-all text-[#171B22] placeholder:text-[#171B22]/30"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#171B22] hover:bg-[#0A0E14] text-white font-mono text-[11px] uppercase tracking-[0.14em] font-bold transition-colors cursor-pointer shrink-0 shadow-[0_1px_0_rgba(255,255,255,0.12)_inset]"
                      >
                        <Search className="w-3.5 h-3.5 text-[#FFB000]" />
                        Track
                      </button>
                    </form>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/40">
                        Try
                      </span>
                      {["CLE-88392-UK", "CLE-74190-UK"].map((code) => (
                        <button
                          key={code}
                          type="button"
                          onClick={() => {
                            setTrackingCode(code);
                            handleTrackSubmit({ preventDefault: () => {} });
                          }}
                          className="px-2 py-1 rounded-md bg-white/70 backdrop-blur-xl border border-[#171B22]/10 hover:border-[#FFB000] font-mono text-[10px] text-[#171B22]/70 hover:text-[#171B22] transition-colors"
                        >
                          {code}
                        </button>
                      ))}
                    </div>

                    {trackingResult && (
                      <div className="mt-5 rounded-xl border border-[#171B22]/10 bg-white/70 backdrop-blur-xl overflow-hidden">
                        <div className="px-4 py-3 flex flex-wrap items-center justify-between gap-2 border-b border-[#171B22]/8 bg-[#171B22] text-white">
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB000] animate-pulse" />
                            <span className="font-mono text-[11px] tracking-[0.14em] text-white/60 uppercase">
                              {trackingResult.code}
                            </span>
                          </div>
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#FFB000] text-[#171B22] font-mono text-[10px] font-bold uppercase tracking-wider">
                            {trackingResult.status} · {trackingResult.statusDetail}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#171B22]/8">
                          <div className="px-4 py-3">
                            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#171B22]/40">
                              Route
                            </div>
                            <div className="mt-1 text-[12px] font-semibold text-[#171B22] leading-snug">
                              {trackingResult.origin}
                              <br />
                              <span className="text-[#171B22]/50 font-normal">
                                → {trackingResult.destination}
                              </span>
                            </div>
                          </div>
                          <div className="px-4 py-3">
                            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#171B22]/40">
                              Customs
                            </div>
                            <div className="mt-1 text-[12px] font-semibold text-emerald-700 flex items-center gap-1.5">
                              <ShieldCheck className="w-3.5 h-3.5" />
                              DDP · HMRC
                            </div>
                          </div>
                          <div className="px-4 py-3">
                            <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#171B22]/40">
                              ETA
                            </div>
                            <div className="mt-1 text-[12px] font-semibold text-[#171B22] font-mono">
                              {trackingResult.eta}
                            </div>
                          </div>
                        </div>

                        <div className="px-4 py-4 border-t border-[#171B22]/8">
                          <ol className="relative space-y-3">
                            <span
                              aria-hidden="true"
                              className="absolute left-[7px] top-2 bottom-2 w-px bg-[#171B22]/10"
                            />
                            {trackingResult.steps.map((st, idx) => (
                              <li key={idx} className="relative flex items-start gap-3">
                                <span className="relative z-10 mt-0.5">
                                  <CheckCircle2
                                    className={`w-3.5 h-3.5 ${
                                      st.current
                                        ? "text-[#FFB000] animate-pulse"
                                        : st.done
                                        ? "text-emerald-500"
                                        : "text-[#171B22]/20"
                                    }`}
                                  />
                                </span>
                                <span
                                  className={`text-[12px] leading-snug ${
                                    st.done
                                      ? "text-[#171B22] font-medium"
                                      : "text-[#171B22]/40"
                                  }`}
                                >
                                  {st.label}
                                  {st.current && (
                                    <span className="ml-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#F45B0B]">
                                      Now
                                    </span>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === "calculate" && (
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <label className="block">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                          Weight (kg)
                        </span>
                        <input
                          type="number"
                          min="0.5"
                          step="0.5"
                          value={weightKg}
                          onChange={(e) => setWeightKg(e.target.value)}
                          className="w-full px-3 py-2.5 rounded-lg border border-[#171B22]/12 bg-white/70 backdrop-blur-xl text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 focus:bg-white transition-all text-[#171B22]"
                        />
                      </label>

                      <label className="block">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                          Transit
                        </span>
                        <div className="relative">
                          <select
                            value={shippingMode}
                            onChange={(e) => setShippingMode(e.target.value)}
                            className="w-full appearance-none px-3 py-2.5 pr-9 rounded-lg border border-[#171B22]/12 bg-white/70 backdrop-blur-xl text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 focus:bg-white transition-all text-[#171B22]"
                          >
                            <option value="air">Air · 3–7 days</option>
                            <option value="sea">Sea · 25–35 days</option>
                          </select>
                          <Plane
                            className={`w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none ${
                              shippingMode === "air" ? "text-[#F45B0B]" : "text-[#171B22]/30"
                            }`}
                          />
                        </div>
                      </label>

                      <label className="block">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                          Cargo
                        </span>
                        <select
                          value={cargoType}
                          onChange={(e) => setCargoType(e.target.value)}
                          className="w-full appearance-none px-3 py-2.5 pr-8 rounded-lg border border-[#171B22]/12 bg-white/70 backdrop-blur-xl text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 focus:bg-white transition-all text-[#171B22]"
                        >
                          <option value="general">General</option>
                          <option value="sensitive">Sensitive</option>
                        </select>
                      </label>
                    </div>

                    <div className="rounded-xl border border-[#171B22]/10 bg-white/70 backdrop-blur-xl p-5">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/45">
                            Estimated doorstep quote
                          </div>
                          <div className="mt-2 flex items-baseline gap-2">
                            <span className="text-3xl font-extrabold tracking-tight text-[#171B22]">
                              £{estimatedCost}
                            </span>
                            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#F45B0B] font-bold">
                              all-in
                            </span>
                          </div>
                          <div className="mt-1.5 text-[11px] text-[#171B22]/55 leading-snug max-w-xs">
                            Includes UK customs clearance, VAT/DDP and domestic courier.
                          </div>
                        </div>
                        <Link
                          to="/signup"
                          className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all shrink-0 shadow-[0_1px_0_rgba(255,255,255,0.25)_inset]"
                        >
                          Book shipment
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-lg border border-[#171B22]/10 bg-white/70 backdrop-blur-xl px-3 py-2.5 flex items-center gap-2">
                        <Plane className="w-3.5 h-3.5 text-[#F45B0B]" />
                        <div className="leading-tight">
                          <div className="text-[11px] font-bold text-[#171B22]">
                            Air Express
                          </div>
                          <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/45">
                            3–7 days · DDP
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-[#171B22]/10 bg-white/70 backdrop-blur-xl px-3 py-2.5 flex items-center gap-2">
                        <Ship className="w-3.5 h-3.5 text-[#F45B0B]" />
                        <div className="leading-tight">
                          <div className="text-[11px] font-bold text-[#171B22]">
                            Ocean Freight
                          </div>
                          <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/45">
                            25–35 days · DDP
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card footer */}
              <div className="px-6 py-4 border-t border-[#171B22]/8 bg-white/40 backdrop-blur-xl flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-[11px] text-[#171B22]/60">
                  <MapPin className="w-3.5 h-3.5 text-[#FFB000]" />
                  <span className="font-mono uppercase tracking-[0.12em]">
                    Free Shenzhen suite on signup
                  </span>
                </div>
                <Link
                  to="/signup"
                  className="font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-[#171B22] hover:text-[#F45B0B] underline underline-offset-4 decoration-[#FFB000] decoration-2 transition-colors"
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