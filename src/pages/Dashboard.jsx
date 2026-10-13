import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Package,
  Copy,
  Check,
  Plus,
  ArrowRight,
  LogOut,
  MapPin,
  Clock,
  Truck,
  Plane,
  Ship,
  ShieldCheck,
  Search,
  X,
} from "lucide-react";
import {
  getCurrentUser,
  logoutUser,
  getChinaWarehouseAddress,
  DEMO_SHIPMENTS,
} from "../utils/auth";

export default function DashboardPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);
  const [shipments, setShipments] = useState(DEMO_SHIPMENTS);
  const [showPreAlertModal, setShowPreAlertModal] = useState(false);
  const [preAlertForm, setPreAlertForm] = useState({
    carrier: "SF Express (顺丰速运)",
    domesticTracking: "",
    itemDescription: "",
    declaredValue: "",
  });
  const [preAlertSuccess, setPreAlertSuccess] = useState(false);

  useEffect(() => {
    const cur = getCurrentUser();
    if (!cur) {
      navigate("/login");
    } else {
      setUser(cur);
    }
  }, [navigate]);

  if (!user) return null;

  const chinaAddr = getChinaWarehouseAddress(user.suiteId);

  const copyFullChinaAddress = () => {
    const fullText = `${chinaAddr.recipientCn} / ${chinaAddr.recipientEn}\n${chinaAddr.phone}\n${chinaAddr.addressCn}\nPostcode: ${chinaAddr.postcode}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const handlePreAlertSubmit = (e) => {
    e.preventDefault();
    if (!preAlertForm.domesticTracking.trim()) return;

    const newShipment = {
      trackingNo: `CLE-${Math.floor(10000 + Math.random() * 90000)}-UK`,
      status: "Pre-Alert Logged",
      statusStage: 1,
      service: "Air Courier Express (DDP)",
      origin: "Shenzhen Transit Hub, CN",
      destination: user.address || "United Kingdom",
      weight: "Pending Arrival",
      packagesCount: 1,
      contents: preAlertForm.itemDescription || "General Goods",
      estimatedDelivery: "Calculated upon arrival",
      lastLocation: `Awaiting delivery from Chinese courier: ${preAlertForm.domesticTracking}`,
      timeline: [
        {
          date: "Just now",
          text: `Pre-alert registered. Awaiting parcel arrival at Shenzhen Hub.`,
          active: true,
        },
      ],
    };

    setShipments([newShipment, ...shipments]);
    setPreAlertSuccess(true);
    setTimeout(() => {
      setShowPreAlertModal(false);
      setPreAlertSuccess(false);
      setPreAlertForm({
        carrier: "SF Express (顺丰速运)",
        domesticTracking: "",
        itemDescription: "",
        declaredValue: "",
      });
    }, 1500);
  };

  const getStatusStyle = (status) => {
    if (status.includes("Delivered")) return "bg-emerald-50 border-emerald-200 text-emerald-700";
    if (status.includes("Customs")) return "bg-blue-50 border-blue-200 text-blue-700";
    return "bg-[#FFB000]/15 border-[#FFB000]/40 text-[#825E12]";
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#171B22] pt-24 sm:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header card ─────────────────────────────────────── */}
        <div className="bg-white border border-[#171B22]/10 rounded-2xl p-6 sm:p-7 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-12 h-12 rounded-xl bg-[#171B22] text-[#FFB000] flex items-center justify-center font-mono font-bold text-sm shrink-0">
              {user.name ? user.name.slice(0, 2).toUpperCase() : "CL"}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-[20px] sm:text-[22px] font-extrabold tracking-[-0.02em] text-[#171B22] truncate">
                  Welcome, {user.name}
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#FFB000]/15 border border-[#FFB000]/30 font-mono text-[10px] uppercase tracking-wider font-bold text-[#825E12] shrink-0">
                  {user.suiteId}
                </span>
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#171B22]/45 truncate">
                {user.email} · {user.address}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => setShowPreAlertModal(true)}
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-[0_6px_20px_-6px_rgba(255,176,0,0.5)] hover:shadow-[0_10px_28px_-8px_rgba(244,91,11,0.6)] cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              Log incoming parcel
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#171B22]/12 hover:border-[#171B22]/25 bg-white hover:bg-[#171B22]/[0.03] text-[#171B22] font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5 text-[#171B22]/50" />
              Sign out
            </button>
          </div>
        </div>

        {/* ── Main grid ───────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ── LEFT: China address card + tips ────────────── */}
          <div className="lg:col-span-5 space-y-6">
            {/* China address card — dark to stand out, matches hero/CTA */}
            <div className="relative rounded-2xl bg-[#171B22] text-white overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-24 right-0 w-[400px] h-[300px] rounded-full opacity-25 blur-[120px] pointer-events-none"
                style={{ background: "radial-gradient(circle, #FFB00055, transparent 70%)" }}
              />

              <div className="relative">
                {/* Card header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#FFB000]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/70">
                      Your China address
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#FFB000] text-[#171B22] font-mono text-[10px] font-bold uppercase tracking-wider">
                    {user.suiteId}
                  </span>
                </div>

                {/* Address fields */}
                <div className="px-6 py-5 space-y-4">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 mb-1">
                      Recipient · 收件人
                    </div>
                    <div className="text-[13px] font-semibold text-white leading-snug">
                      {chinaAddr.recipientCn}
                      <span className="text-white/50 font-normal"> / {chinaAddr.recipientEn}</span>
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 mb-1">
                      Warehouse phone · 电话
                    </div>
                    <div className="font-mono text-[12px] text-white">
                      {chinaAddr.phone}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 mb-1">
                      Address in Chinese · 中文地址
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5 text-[12.5px] text-white/90 leading-snug">
                      {chinaAddr.addressCn}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/40 mb-1">
                      Address in English
                    </div>
                    <div className="font-mono text-[11px] text-white/65 leading-snug">
                      {chinaAddr.addressEn}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/40">
                      Postcode · 邮编
                    </span>
                    <span className="font-mono text-[11px] text-white">
                      {chinaAddr.postcode}
                    </span>
                  </div>
                </div>

                {/* Copy button as footer row */}
                <button
                  onClick={copyFullChinaAddress}
                  className="group w-full px-6 py-4 border-t border-white/10 bg-white/[0.02] hover:bg-[#FFB000]/[0.1] transition-colors flex items-center justify-between cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-white">
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        Copied to clipboard
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#FFB000]" />
                        Copy for Taobao / 1688
                      </>
                    )}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFB000] transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            {/* How consolidation works */}
            <div className="bg-white border border-[#171B22]/10 rounded-2xl overflow-hidden">
              <div className="px-6 py-4 border-b border-[#171B22]/8 flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/60">
                  How consolidation works
                </span>
              </div>

              <ol className="divide-y divide-[#171B22]/8">
                {[
                  {
                    n: "01",
                    text: "Order from any Chinese platform (Taobao, 1688, Weidian, JD, or factory) to your suite address above.",
                  },
                  {
                    n: "02",
                    text: "We inspect every incoming package, take HD photos, and verify weight — free of charge.",
                  },
                  {
                    n: "03",
                    text: "Multiple merchant boxes are combined into one compact carton to cut air freight fees by up to 60%.",
                  },
                ].map((step) => (
                  <li key={step.n} className="px-6 py-4 flex items-start gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#F4F5F7] border border-[#171B22]/10 font-mono text-[10px] font-bold text-[#171B22]/50 shrink-0 mt-0.5">
                      {step.n}
                    </span>
                    <span className="text-[12.5px] text-[#171B22]/70 leading-relaxed">
                      {step.text}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* ── RIGHT: Shipments ────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#171B22]/10 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="px-6 py-5 border-b border-[#171B22]/8 flex items-center justify-between gap-3">
                <div>
                  <h2 className="text-[15px] font-bold tracking-tight text-[#171B22]">
                    China → UK shipments
                  </h2>
                  <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#171B22]/45">
                    Live status from the transit pipeline
                  </p>
                </div>
                <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#F4F5F7] border border-[#171B22]/10 font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#171B22]/60 whitespace-nowrap">
                  {shipments.length} active
                </span>
              </div>

              {/* Shipment list */}
              <ul className="divide-y divide-[#171B22]/8">
                {shipments.map((shipment) => (
                  <li
                    key={shipment.trackingNo}
                    className="px-6 py-5 hover:bg-[#F4F5F7]/60 transition-colors"
                  >
                    {/* Row 1: tracking + status */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2 min-w-0 flex-wrap">
                        {shipment.service.includes("Air") ? (
                          <Plane className="w-3.5 h-3.5 text-[#F45B0B] shrink-0" />
                        ) : (
                          <Ship className="w-3.5 h-3.5 text-[#F45B0B] shrink-0" />
                        )}
                        <span className="font-mono font-bold text-[13px] text-[#171B22]">
                          {shipment.trackingNo}
                        </span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/45">
                          {shipment.service}
                        </span>
                      </div>

                      <span
                        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border font-mono text-[9px] uppercase tracking-[0.14em] font-bold shrink-0 ${getStatusStyle(
                          shipment.status
                        )}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {shipment.status}
                      </span>
                    </div>

                    {/* Row 2: meta grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-3 mb-4">
                      {[
                        { label: "Origin", value: shipment.origin },
                        { label: "Destination", value: shipment.destination },
                        {
                          label: "Weight / boxes",
                          value: `${shipment.weight} · ${shipment.packagesCount} pcs`,
                        },
                        {
                          label: "ETA",
                          value: shipment.estimatedDelivery,
                          accent: true,
                        },
                      ].map((m, i) => (
                        <div key={i} className="min-w-0">
                          <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#171B22]/40 mb-1">
                            {m.label}
                          </div>
                          <div
                            className={`text-[12px] leading-snug truncate ${
                              m.accent
                                ? "font-mono font-bold text-[#825E12]"
                                : "font-medium text-[#171B22]/75"
                            }`}
                          >
                            {m.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Row 3: latest checkpoint */}
                    <div className="flex items-start gap-2.5 rounded-lg border border-[#171B22]/8 bg-[#F4F5F7] px-3.5 py-2.5">
                      <Clock className="w-3.5 h-3.5 text-[#171B22]/40 shrink-0 mt-0.5" />
                      <div className="min-w-0">
                        <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#171B22]/40 mb-0.5">
                          Latest checkpoint
                        </div>
                        <div className="text-[12px] text-[#171B22]/75 leading-snug">
                          {shipment.lastLocation}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Pre-Alert Modal ─────────────────────────────────── */}
      {showPreAlertModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#171B22]/60 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-[#171B22]/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#171B22]/8">
              <div className="flex items-center gap-2">
                <Package className="w-3.5 h-3.5 text-[#F45B0B]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/60">
                  Pre-alert parcel
                </span>
              </div>
              <button
                onClick={() => setShowPreAlertModal(false)}
                className="flex items-center justify-center w-8 h-8 rounded-lg border border-[#171B22]/10 hover:border-[#171B22]/25 bg-white hover:bg-[#171B22]/[0.03] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-[#171B22]" />
              </button>
            </div>

            <div className="px-6 py-6">
              <h3 className="text-[17px] font-bold tracking-tight text-[#171B22]">
                Log an incoming package
              </h3>
              <p className="mt-1 text-[12px] text-[#171B22]/55 leading-relaxed">
                Enter the domestic courier tracking code from your Chinese seller so our Shenzhen
                team tags your parcel the moment it arrives.
              </p>

              {preAlertSuccess ? (
                <div className="mt-6 py-8 flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200">
                    <Check className="w-7 h-7 text-emerald-500" />
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-emerald-700">
                    Parcel logged
                  </div>
                  <p className="text-[12px] text-[#171B22]/55 text-center max-w-xs">
                    Added to your dashboard. We'll notify you when it arrives in Shenzhen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePreAlertSubmit} className="mt-6 space-y-4">
                  <label className="block">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                      Chinese domestic courier
                    </span>
                    <select
                      value={preAlertForm.carrier}
                      onChange={(e) =>
                        setPreAlertForm({ ...preAlertForm, carrier: e.target.value })
                      }
                      className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] cursor-pointer"
                    >
                      <option>SF Express (顺丰速运)</option>
                      <option>ZTO Express (中通快递)</option>
                      <option>YTO Express (圆通速递)</option>
                      <option>J&amp;T Express (极兔速递)</option>
                      <option>STOCourier (申通快递)</option>
                      <option>China Post (EMS)</option>
                      <option>Other / Factory Delivery</option>
                    </select>
                  </label>

                  <label className="block">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                      China domestic tracking *
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="SF18492049102"
                      value={preAlertForm.domesticTracking}
                      onChange={(e) =>
                        setPreAlertForm({ ...preAlertForm, domesticTracking: e.target.value })
                      }
                      className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] placeholder:text-[#171B22]/30"
                    />
                  </label>

                  <label className="block">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                      Item description
                    </span>
                    <input
                      type="text"
                      placeholder="e.g. 5x cotton t-shirts"
                      value={preAlertForm.itemDescription}
                      onChange={(e) =>
                        setPreAlertForm({ ...preAlertForm, itemDescription: e.target.value })
                      }
                      className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] placeholder:text-[#171B22]/30"
                    />
                  </label>

                  <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#171B22]/8 mt-2">
                    <button
                      type="button"
                      onClick={() => setShowPreAlertModal(false)}
                      className="px-4 py-2.5 rounded-lg font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#171B22]/55 hover:text-[#171B22] transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[10px] uppercase tracking-[0.14em] font-bold transition-all duration-200 cursor-pointer"
                    >
                      Confirm pre-alert
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}