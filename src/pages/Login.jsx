import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn, ArrowRight, ShieldCheck, Package, AlertCircle, Sparkles } from "lucide-react";
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

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!identifier.trim()) {
      setError("Please enter your email or Suite ID.");
      return;
    }

    setLoading(true);
    try {
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
            Client shipping portal
          </span>
        </div>

        <h1 className="mt-5 text-[28px] sm:text-[34px] font-extrabold tracking-[-0.03em] leading-[1.05] text-[#171B22]">
          Welcome back.
        </h1>
        <p className="mt-3 text-[13px] sm:text-sm text-[#171B22]/60 leading-relaxed max-w-sm mx-auto">
          Log in to manage your China warehouse suite, incoming parcels, and UK deliveries.
        </p>
      </div>

      <div className="relative mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 sm:px-8 rounded-2xl border border-[#171B22]/10 shadow-[0_20px_50px_-20px_rgba(23,27,34,0.15)]">
          {/* Card header */}
          <div className="flex items-center justify-between mb-6 pb-5 border-b border-[#171B22]/8">
            <div className="flex items-center gap-2">
              <Package className="w-3.5 h-3.5 text-[#F45B0B]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#171B22]/55">
                Sign in
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-emerald-50 border border-emerald-200 font-mono text-[9px] uppercase tracking-[0.14em] font-bold text-emerald-700">
              <ShieldCheck className="w-3 h-3" />
              Secure
            </span>
          </div>

          {error && (
            <div className="mb-5 px-3.5 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-[12px] flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-600 mt-0.5" />
              <span className="leading-snug">{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <label className="block">
              <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold mb-1.5">
                Email or China suite ID
              </span>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="name@domain.com  ·  CL-UK-8842"
                className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] placeholder:text-[#171B22]/30"
              />
            </label>

            <label className="block">
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#171B22]/55 font-bold">
                  Password
                </span>
                <button
                  type="button"
                  onClick={() =>
                    alert(
                      "For this demonstration, use any password or click the demo fill button below."
                    )
                  }
                  className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#171B22]/55 hover:text-[#F45B0B] transition-colors"
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
                className="w-full px-3.5 py-3 rounded-lg border border-[#171B22]/12 bg-white text-[13px] font-mono outline-none focus:border-[#FFB000] focus:ring-4 focus:ring-[#FFB000]/15 transition-all text-[#171B22] placeholder:text-[#171B22]/30"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="group w-full py-3.5 px-4 rounded-xl bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-all duration-200 shadow-[0_8px_30px_-8px_rgba(255,176,0,0.6)] hover:shadow-[0_12px_36px_-8px_rgba(244,91,11,0.6)] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
            >
              <LogIn className="w-4 h-4" />
              {loading ? "Signing in…" : "Sign in"}
              {!loading && (
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              )}
            </button>
          </form>

          {/* Demo quick fill */}
          <div className="mt-6 pt-5 border-t border-[#171B22]/8 flex justify-center">
            <button
              type="button"
              onClick={handleDemoFill}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4F5F7] border border-[#171B22]/10 hover:border-[#FFB000]/50 hover:bg-[#FFB000]/10 font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#171B22]/65 hover:text-[#171B22] transition-all"
            >
              <Sparkles className="w-3 h-3 text-[#F45B0B]" />
              Fill demo credentials
            </button>
          </div>

          {/* Register link */}
          <div className="mt-6 pt-5 border-t border-[#171B22]/8 text-center">
            <p className="text-[12px] text-[#171B22]/60">
              New to China → UK forwarding?{" "}
              <Link
                to="/register"
                className="font-mono text-[10px] uppercase tracking-[0.14em] font-bold text-[#171B22] hover:text-[#F45B0B] underline underline-offset-4 decoration-[#FFB000] decoration-2 transition-colors"
              >
                Create account →
              </Link>
            </p>
          </div>
        </div>

        {/* Security badges */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-[#171B22]/45">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-mono text-[9px] uppercase tracking-[0.16em]">
              256-bit SSL encrypted
            </span>
          </span>
          <span className="w-px h-3.5 bg-[#171B22]/15" />
          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#171B22]/45">
            HMRC DDP compliant
          </span>
        </div>
      </div>
    </div>
  );
}