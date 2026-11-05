import { Package } from "lucide-react";

export default function CargoPageLoader({ isVisible, label = "Connecting China ➔ UK Freight Corridor" }) {
  return (
    <div
      aria-hidden={!isVisible}
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0B1320] text-white transition-opacity duration-300 ease-out select-none ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="absolute w-[500px] h-[350px] rounded-full bg-gradient-to-tr from-[#FFB000]/15 via-[#F45B0B]/10 to-transparent blur-[120px] pointer-events-none"
      />

      <div className="relative flex flex-col items-center">
        {/* ── Circular Loading Ring with Cargo in Center ──────── */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
          {/* Background circle track */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="rgba(255, 255, 255, 0.08)"
              strokeWidth="3.5"
            />
            {/* Animated spinning cargo circle */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="url(#cargo-loader-gradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="264"
              strokeDashoffset="180"
              className="animate-spin origin-center"
              style={{ animationDuration: "1.15s" }}
            />
            <defs>
              <linearGradient id="cargo-loader-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB000" />
                <stop offset="60%" stopColor="#F45B0B" />
                <stop offset="100%" stopColor="#FFD166" />
              </linearGradient>
            </defs>
          </svg>

          {/* Central Cargo Tile */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md flex items-center justify-center shadow-lg shadow-black/40">
              {/* Subtle inner pulse badge */}
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FFB000] animate-ping opacity-75" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FFB000]" />
              
              {/* Cargo container graphic */}
              <Package className="w-7 h-7 sm:w-8 sm:h-8 text-[#FFB000] drop-shadow-[0_2px_8px_rgba(255,176,0,0.5)] transition-transform animate-pulse" />
            </div>
          </div>
        </div>

        {/* ── Brand & Progress Feedback ─────────────────────── */}
        <div className="mt-7 text-center">
          <div className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-[0.24em] text-white flex items-center justify-center gap-2">
            <span>CLEARLINE EXPRESS</span>
          </div>

          <p className="mt-1.5 font-mono text-[11px] text-slate-400 tracking-wider">
            {label}
          </p>

          {/* Micro progress line */}
          <div className="mt-4 w-36 h-0.5 bg-white/10 rounded-full overflow-hidden mx-auto">
            <div
              className="h-full bg-gradient-to-r from-[#FFB000] via-[#F45B0B] to-[#FFD166] rounded-full animate-pulse"
              style={{
                width: "100%",
                animation: "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
