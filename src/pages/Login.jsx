import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, ArrowRight, ShieldCheck, Package, AlertCircle, Sparkles, Loader2 } from "lucide-react";
import { loginUser, getCurrentUser } from "../utils/auth";

export default function LoginPage() {
  const navigate = useNavigate();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If already logged in, redirect to dashboard
  const user = getCurrentUser();
  if (user && !error) {
    // Optionally allow staying or redirect
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!identifier.trim()) {
      setError("Please enter your email or Suite ID.");
      return;
    }

    setLoading(true);
    try {
      // Provide instant loading animation visual feedback
      await new Promise((r) => setTimeout(r, 450));
      loginUser(identifier, password);
      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Failed to log in.");
    }
  };

  const handleDemoFill = () => {
    setIdentifier("alex.wright@example.co.uk");
    setPassword("password123");
    setError("");
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
            Client Shipping Portal
          </span>
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0B1320]">
          Welcome Back
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-sm mx-auto">
          Log in to manage your China warehouse suite, incoming parcels, and UK deliveries.
        </p>
      </div>

      <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 sm:px-8 rounded-2xl border border-slate-200 shadow-md">
          {/* Card header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200 bg-slate-50 -mx-6 sm:-mx-8 -mt-8 px-6 sm:px-8 pt-5 rounded-t-2xl">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-[#F45B0B]" />
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-slate-800">
                Client Sign In
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-300 font-mono text-xs uppercase tracking-wider font-bold text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secure 256-Bit
            </span>
          </div>

          {error && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
              <span className="leading-snug font-medium">{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <label className="block">
              <span className="block text-sm font-semibold text-slate-800 mb-1.5">
                Email Address or China Suite ID <span className="text-[#F45B0B]">*</span>
              </span>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="name@domain.com or CL-UK-8842"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base text-slate-900 font-medium outline-none focus:border-[#F45B0B] focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400"
              />
            </label>

            <label className="block">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-semibold text-slate-800">
                  Password <span className="text-[#F45B0B]">*</span>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "For this demonstration, use any password or click the demo fill button below."
                    )
                  }
                  className="font-mono text-xs font-bold text-slate-500 hover:text-[#F45B0B] transition-colors"
                >
                  Forgot?
                </button>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-base text-slate-900 font-medium outline-none focus:border-[#F45B0B] focus:ring-4 focus:ring-orange-500/10 transition-all placeholder:text-slate-400"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="group w-full mt-2 py-3.5 px-5 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] active:scale-[0.98] text-[#0B1320] hover:text-white font-mono text-sm font-bold uppercase tracking-wider transition-all duration-150 shadow-md disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#0B1320]" />
                  <span>Signing in to China Suite…</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </form>

          {/* Demo quick fill */}
          <div className="mt-6 pt-5 border-t border-slate-200 flex justify-center">
            <button
              type="button"
              onClick={handleDemoFill}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 border border-slate-300 font-mono text-xs uppercase tracking-wider font-bold text-slate-800 transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#F45B0B]" />
              Fill Demo Credentials
            </button>
          </div>

          {/* Register link */}
          <div className="mt-6 pt-5 border-t border-slate-200 text-center">
            <p className="text-sm text-slate-600 font-medium">
              New to China → UK forwarding?{" "}
              <Link
                to="/register"
                className="font-bold text-[#0B1320] hover:text-[#F45B0B] underline underline-offset-4 decoration-[#FFB000] decoration-2 transition-colors ml-1"
              >
                Create Account →
              </Link>
            </p>
          </div>
        </div>

        {/* Security badges */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs font-mono font-bold text-slate-600">
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>256-Bit SSL Encrypted Session</span>
          </span>
        </div>
      </div>
    </div>
  );
}
