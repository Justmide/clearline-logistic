import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, CheckCircle, ShieldCheck, Copy, Check, ArrowRight, Package, AlertCircle } from "lucide-react";
import { registerUser, getChinaWarehouseAddress } from "../utils/auth";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [newlyRegistered, setNewlyRegistered] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const user = registerUser(formData);
      setLoading(false);
      setNewlyRegistered(user);
    } catch (err) {
      setLoading(false);
      setError(err.message || "Failed to create account.");
    }
  };

  const copyAddress = () => {
    if (!newlyRegistered) return;
    const addr = getChinaWarehouseAddress(newlyRegistered.suiteId);
    const fullText = `${addr.recipientCn} / ${addr.recipientEn}\n${addr.phone}\n${addr.addressCn}\nPostcode: ${addr.postcode}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#171B22] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full opacity-[0.22] blur-[140px]"
        style={{ background: "radial-gradient(circle, #FFB00055, transparent 70%)" }}
      />

      <div className="relative sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
        {/* Back to home */}
        <div className="flex justify-center mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#171B22]/45 hover:text-[#F45B0B] transition-colors"
          >
            ← Back to home
          </Link>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#171B22]/10 bg-white">
          <span className="w-1 h-1 rounded-full bg-[#F45B0B]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/60">
            Instant China warehouse suite
          </span>
        </div>

        <h1 className="mt-5 text-[28px] sm:text-[34px] font-extrabold tracking-[-0.03em] leading-[1.05] text-[#171B22]">
          Create your account.
        </h1>
        <p className="mt-3 text-[13px] sm:text-sm text-[#171B22]/60 leading-relaxed max-w-sm mx-auto">
          Get your free personal China receiving suite and direct UK parcel forwarding.
        </p>
      </div>

      <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-xl px-4">
        {newlyRegistered ? (
          /* ── SUCCESS STATE ─────────────────────────────────── */
          <div className="bg-white rounded-2xl border border-[#171B22]/10 shadow-[0_20px_50px_-20px_rgba(23,27,34,0.15)] overflow-hidden">
            {/* Card header */}
            <div className="px-6 sm:px-8 py-5 border-b border-[#171B22]/8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/55">
                  Account created
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 font-mono text-[9px] uppercase tracking-[0.14em] font-bold text-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>

            <div className="px-6 sm:px-8 py-7 text-center">
              <h2 className="text-[22px] sm:text-[26px] font-extrabold tracking-[-0.02em] text-[#171B22]">
                Welcome, {newlyRegistered.name?.split(" ")[0]}.
              </h2>
              <p className="mt-2 text-[13px] text-[#171B22]/60">
                Your China receiving suite is now live.
              </p>

              {/* China address card */}
              <div className="mt-6 rounded-xl border border-[#171B22]/10 bg-[#F4F5F7] text-left overflow-hidden">
                {/* Header row */}
                <div className="px-4 py-3 flex items-center justify-between border-b border-[#171B22]/8 bg-white">
                  <div className="flex items-center gap-2">
                    <Package className="w-3.5 h-3.5 text-[#F45B0B]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] font-bold text-[#171B22]">
                      China warehouse address
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[#FFB000] text-[#171B22] font-mono text-[10px] font-bold uppercase tracking-wider">
                    {newlyRegistered.suiteId}
                  </span>
                </div>

                {/* Address body */}
                <div className="px-4 py-4 space-y-2.5">
                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#171B22]/45 mb-1">
                      Recipient
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#171B22] leading-snug">
                      {getChinaWarehouseAddress(newlyRegistered.suiteId).recipientCn}
                      <span className="text-[#171B22]/50 font-normal">
                        {" "}
                        ({getChinaWarehouseAddress(newlyRegistered.suiteId).recipientEn})
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#171B22]/45 mb-1">
                      Phone
                    </div>
                    <div className="font-mono text-[12px] text-[#171B22]">
                      {getChinaWarehouseAddress().phone}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#171B22]/45 mb-1">
                      Address (Chinese)
                    </div>
                    <div className="text-[12.5px] font-semibold text-[#171B22] leading-snug">
                      {getChinaWarehouseAddress(newlyRegistered.suiteId).addressCn}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#171B22]/45 mb-1">
                      Address (English)
                    </div>
                    <div className="text-[11.5px] text-[#171B22]/70 leading-snug">
                      {getChinaWarehouseAddress(newlyRegistered.suiteId).addressEn}
                    </div>
                  </div>
                </div>

                {/* Copy button */}
                <button
                  onClick={copyAddress}
                  className="group w-full px-4 py-3 border-t border-[#171B22]/8 bg-white hover:bg-[#FFB000]/[0.08] transition-colors flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#171B22] cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied to clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#F45B0B]" />
                      <span>Copy for Taobao / 1688</span>
                    </>
                  )}
                </button>
              </div>

              {/* Primary CTA */}
              <button
                onClick={() => navigate("/dashboard")}
                className="group mt-6 w-full py-3.5 px-4 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-[0_8px_30px_-8px_rgba(255,176,0,0.6)] hover:shadow-[0_12px_36px_-8px_rgba(244,91,11,0.6)] flex items-center justify-center gap-2 cursor-pointer"
              >
                Go to dashboard
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        ) : (
          /* ── FORM STATE ────────────────────────────────────── */
          <div className="bg-white rounded-2xl border border-[#171B22]/10 shadow-[0_20px_50px_-20px_rgba(23,27,34,0.15)] overflow-hidden">
            {/* Card header */}
            <div className="px-6 sm:px-8 py-5 border-b border-[#171B22]/8 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserPlus className="w-3.5 h-3.5 text-[#F45B0B]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/55">
                  New account
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 font-mono text-[9px] uppercase tracking-[0.14em] font-bold text-emerald-700">
                <ShieldCheck className="w-3 h-3" />
                Free
              </span>
            </div>

            <div className="px-6 sm:px-8 py-7">
              {error && (
                <div className="mb-5 px-3.5 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[12px] flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                  <span className="leading-snug">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                    Full name / business *
                  </span>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Alexander Wright"
                    className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] placeholder:text-[#171B22]/30"
                  />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                      Email *
                    </span>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@domain.co.uk"
                      className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] placeholder:text-[#171B22]/30"
                    />
                  </label>

                  <label className="block">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                      UK phone *
                    </span>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07700 900123"
                      className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] placeholder:text-[#171B22]/30"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                    UK delivery address *
                  </span>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House no · Street · City · Postcode"
                    className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] placeholder:text-[#171B22]/30"
                  />
                </label>

                <label className="block">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                    Password * (min. 6)
                  </span>
                  <input
                    type="password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] placeholder:text-[#171B22]/30"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full mt-2 py-3.5 px-4 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-[0_8px_30px_-8px_rgba(255,176,0,0.6)] hover:shadow-[0_12px_36px_-8px_rgba(244,91,11,0.6)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  {loading ? "Creating account…" : "Register & get address"}
                  {!loading && (
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  )}
                </button>
              </form>

              {/* Login link */}
              <div className="mt-6 pt-5 border-t border-[#171B22]/8 text-center">
                <p className="text-[12px] text-[#171B22]/60">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#171B22] hover:text-[#F45B0B] underline underline-offset-4 decoration-[#FFB000] decoration-2 transition-colors"
                  >
                    Log in →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Trust strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className="inline-flex items-center gap-1.5 text-[#171B22]/45">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-mono text-[9px] uppercase tracking-[0.16em]">
              100% free registration
            </span>
          </span>
          <span className="w-px h-3.5 bg-[#171B22]/15" />
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#171B22]/45">
            No subscription
          </span>
          <span className="w-px h-3.5 bg-[#171B22]/15" />
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#171B22]/45">
            Pay per shipment
          </span>
        </div>
      </div>
    </div>
  );
}