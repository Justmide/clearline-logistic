import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus, CheckCircle, ShieldCheck, Copy, Check, ArrowRight, Package, AlertCircle, Loader2 } from "lucide-react";
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

  const handleSubmit = async (e) => {
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
      // Provide instant loading animation visual feedback
      await new Promise((r) => setTimeout(r, 500));
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
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="relative sm:mx-auto sm:w-full sm:max-w-md text-center px-4">
        {/* Back to home */}
        <div className="flex justify-center mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider font-bold text-slate-600 hover:text-[#F45B0B] transition-colors"
          >
            ← Back to Homepage
          </Link>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-slate-300 bg-white shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#F45B0B]" />
          <span className="font-mono text-xs uppercase tracking-wider text-slate-700 font-bold">
            Instant China Warehouse Suite
          </span>
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1320]">
          Create Your Account
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm mx-auto">
          Get your personal Shenzhen receiving suite and direct UK DDP door-to-door delivery.
        </p>
      </div>

      <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-xl px-4">
        {newlyRegistered ? (
          /* ── SUCCESS STATE ─────────────────────────────────── */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            {/* Card header */}
            <div className="px-6 sm:px-8 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-slate-800">
                  Account Active &amp; Verified
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-100 border border-emerald-300 font-mono text-xs uppercase tracking-wider font-bold text-emerald-800">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                Live
              </span>
            </div>

            <div className="px-6 sm:px-8 py-7 text-center">
              <h2 className="text-2xl font-extrabold text-[#0B1320]">
                Welcome, {newlyRegistered.name?.split(" ")[0]}.
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Your China receiving suite address is ready to receive packages.
              </p>

              {/* China address card */}
              <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 text-left overflow-hidden">
                {/* Header row */}
                <div className="px-5 py-3.5 flex items-center justify-between border-b border-slate-200 bg-white">
                  <div className="flex items-center gap-2">
                    <Package className="w-4 h-4 text-[#F45B0B]" />
                    <span className="font-mono text-xs uppercase tracking-wider font-bold text-slate-900">
                      China Warehouse Address
                    </span>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#FFB000] text-[#0B1320] font-mono text-xs font-bold uppercase tracking-wider">
                    {newlyRegistered.suiteId}
                  </span>
                </div>

                {/* Address body */}
                <div className="px-5 py-4 space-y-3">
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                      Recipient
                    </div>
                    <div className="text-sm font-bold text-slate-900">
                      {getChinaWarehouseAddress(newlyRegistered.suiteId).recipientCn}
                      <span className="text-slate-600 font-normal">
                        {" "}
                        ({getChinaWarehouseAddress(newlyRegistered.suiteId).recipientEn})
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                      Phone Number
                    </div>
                    <div className="font-mono text-sm font-bold text-slate-900">
                      {getChinaWarehouseAddress().phone}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                      Address (Chinese - For Suppliers)
                    </div>
                    <div className="text-sm font-bold text-slate-900 leading-snug">
                      {getChinaWarehouseAddress(newlyRegistered.suiteId).addressCn}
                    </div>
                  </div>

                  <div>
                    <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-bold mb-0.5">
                      Address (English)
                    </div>
                    <div className="text-xs text-slate-700 leading-snug font-mono">
                      {getChinaWarehouseAddress(newlyRegistered.suiteId).addressEn}
                    </div>
                  </div>
                </div>

                {/* Copy button */}
                <button
                  onClick={copyAddress}
                  className="group w-full px-4 py-3.5 border-t border-slate-200 bg-white hover:bg-[#FFB000]/10 transition-colors flex items-center justify-center gap-2 font-mono text-xs uppercase tracking-wider font-bold text-slate-900 cursor-pointer active:scale-[0.98]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#F45B0B]" />
                      <span>Copy Chinese Address For Supplier</span>
                    </>
                  )}
                </button>
              </div>

              {/* Primary CTA */}
              <button
                onClick={() => navigate("/dashboard")}
                className="group mt-6 w-full py-3.5 px-5 rounded-xl bg-[#0B1320] hover:bg-slate-800 active:scale-[0.98] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                Go to Client Dashboard
                <ArrowRight className="w-4 h-4 text-[#FFB000] transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        ) : (
          /* ── FORM STATE ────────────────────────────────────── */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            {/* Card header */}
            <div className="px-6 sm:px-8 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserPlus className="w-4 h-4 text-[#F45B0B]" />
                <span className="font-mono text-xs uppercase tracking-wider font-bold text-slate-800">
                  New Client Registration
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-300 font-mono text-xs uppercase tracking-wider font-bold text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Free
              </span>
            </div>

            <div className="px-6 sm:px-8 py-7">
              {error && (
                <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
                  <span className="leading-snug font-medium">{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <span className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Full Name or Business Name <span className="text-[#F45B0B]">*</span>
                  </span>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alexander Wright"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base text-slate-900 font-medium outline-none focus:border-[#F45B0B] focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400"
                  />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="block text-sm font-semibold text-slate-800 mb-1.5">
                      Email Address <span className="text-[#F45B0B]">*</span>
                    </span>
                    <input
                      type="email"
                      required
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@domain.co.uk"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base text-slate-900 font-medium outline-none focus:border-[#F45B0B] focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400"
                    />
                  </label>

                  <label className="block">
                    <span className="block text-sm font-semibold text-slate-800 mb-1.5">
                      UK Phone Number <span className="text-[#F45B0B]">*</span>
                    </span>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="07700 900123"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base text-slate-900 font-medium outline-none focus:border-[#F45B0B] focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="block text-sm font-semibold text-slate-800 mb-1.5">
                    UK Delivery Destination Address <span className="text-[#F45B0B]">*</span>
                  </span>
                  <input
                    type="text"
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House number, Street, City, Postcode"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base text-slate-900 font-medium outline-none focus:border-[#F45B0B] focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400"
                  />
                </label>

                <label className="block">
                  <span className="block text-sm font-semibold text-slate-800 mb-1.5">
                    Account Password (min. 6 characters) <span className="text-[#F45B0B]">*</span>
                  </span>
                  <input
                    type="password"
                    required
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Create a secure password"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base text-slate-900 font-medium outline-none focus:border-[#F45B0B] focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400"
                  />
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full mt-3 py-3.5 px-5 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] active:scale-[0.98] text-[#0B1320] hover:text-white font-mono text-sm font-bold uppercase tracking-wider transition-all duration-150 shadow-md disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#0B1320]" />
                      <span>Assigning Personal China Suite…</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="w-4 h-4" />
                      <span>Register &amp; Get China Address</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </form>

              {/* Login link */}
              <div className="mt-6 pt-5 border-t border-slate-200 text-center">
                <p className="text-sm text-slate-600 font-medium">
                  Already have a China Suite?{" "}
                  <Link
                    to="/login"
                    className="font-bold text-[#0B1320] hover:text-[#F45B0B] underline underline-offset-4 decoration-[#FFB000] decoration-2 transition-colors ml-1"
                  >
                    Log In to Portal →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Trust strip */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono font-bold text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Free Registration</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>No Monthly Subscription</span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>HMRC DDP Handled</span>
        </div>
      </div>
    </div>
  );
}
