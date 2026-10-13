import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Search, User, LogOut, Package, ArrowRight, Ship, LayoutDashboard, Plus, MapPin } from "lucide-react";
import logo from "../../assets/logo.jpeg";
import SearchModal from "../common/SearchModal";
import { getCurrentUser, logoutUser } from "../../utils/auth";

const marketingLinks = [
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Shipping Services", href: "/#services" },
  { name: "Why ClearLine", href: "/#why-us" },
  { name: "About Route", href: "/#about" },
];

const dashboardLinks = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Log Parcel", href: "/dashboard#pre-alert", icon: Plus },
  { name: "Address", href: "/dashboard#address", icon: MapPin },
  { name: "Track", href: "/track", icon: Search },
];

// Routes where the navbar is hidden entirely
const HIDDEN_ROUTES = ["/login", "/register", "/signup", "/onboard"];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(getCurrentUser());

    const handleAuthChange = (e) => {
      setCurrentUser(e.detail);
    };

    window.addEventListener("clearline:auth-change", handleAuthChange);
    return () => window.removeEventListener("clearline:auth-change", handleAuthChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 25);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (e, href) => {
    setIsOpen(false);

    if (href && href.includes("#")) {
      const [targetPath, targetHash] = href.split("#");
      const normalizedTargetPath = targetPath === "" ? "/" : targetPath;

      if (location.pathname === normalizedTargetPath) {
        e.preventDefault();
        const element = document.getElementById(targetHash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.pushState(null, "", `#${targetHash}`);
        }
      }
    }
  };

  const handleLogout = () => {
    logoutUser();
    setCurrentUser(null);
    setIsOpen(false);
    navigate("/");
  };

  // ── Hide navbar entirely on auth routes ─────────────────
  const shouldHide = HIDDEN_ROUTES.some(
    (route) => location.pathname === route || location.pathname.startsWith(`${route}/`)
  );
  if (shouldHide) return null;

  const isDashboard = !!currentUser;
  const links = isDashboard ? dashboardLinks : marketingLinks;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans bg-white ${
        isScrolled ? "shadow-[0_4px_25px_rgba(23,27,34,0.10)]" : ""
      }`}
      style={{ borderBottom: "1px solid rgba(255,176,0,0.35)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px] sm:h-[66px] lg:h-[72px] gap-4">
          {/* Logo */}
          <Link
            to={isDashboard ? "/dashboard" : "/"}
            className="flex items-center shrink-0 group"
          >
            <img
              src={logo}
              alt="ClearLine Express logo"
              loading="eager"
              decoding="async"
              className="h-[24px] sm:h-[26px] min-[990px]:h-[34px] lg:h-[36px] w-auto object-contain transition-all duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden min-[990px]:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
            {links.map((link) => {
              const active = isDashboard
                ? location.pathname === link.href
                : false;

              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`inline-flex items-center gap-1.5 font-mono text-[11px] uppercase font-semibold tracking-wider transition-colors whitespace-nowrap ${
                    active
                      ? "text-[#F45B0B]"
                      : "text-[#171B22]/80 hover:text-[#F45B0B]"
                  }`}
                >
                  {link.icon && <link.icon className="w-3.5 h-3.5" />}
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop right side */}
          <div className="hidden min-[990px]:flex items-center gap-2.5 shrink-0">
            {!isDashboard && (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-[#171B22]/80 hover:text-[#171B22] transition-colors border border-[#171B22]/15 hover:border-[#FFB000] bg-white text-xs font-mono uppercase tracking-wider rounded-lg whitespace-nowrap cursor-pointer"
                title="Track or Search (⌘K)"
              >
                <Search className="w-3.5 h-3.5 text-[#FFB000]" />
                <span className="text-[11px] font-medium">Track Parcel</span>
              </button>
            )}

            {currentUser ? (
              <div className="flex items-center gap-2 pl-2 border-l border-[#171B22]/10">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F4F5F7] hover:bg-[#FFB000]/15 transition-colors"
                >
                  <span className="w-6 h-6 rounded-full bg-[#171B22] text-[#FFB000] text-[10px] font-mono font-bold flex items-center justify-center">
                    {currentUser.name ? currentUser.name[0].toUpperCase() : "U"}
                  </span>
                  <div className="text-left leading-none">
                    <span className="block text-[11px] font-bold text-[#171B22]">
                      {currentUser.name ? currentUser.name.split(" ")[0] : "Account"}
                    </span>
                    <span className="block text-[9px] font-mono text-[#F45B0B]">
                      {currentUser.suiteId}
                    </span>
                  </div>
                </Link>

                <button
                  onClick={handleLogout}
                  className="p-2 text-[#171B22]/40 hover:text-[#F45B0B] transition-colors cursor-pointer"
                  title="Sign Out"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <Link
                to="/signup"
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm hover:shadow-md transition-all duration-200 shrink-0"
              >
                <Ship className="w-4 h-4" />
                <span>Start Shipping</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>

          {/* Mobile controls */}
          <div className="min-[990px]:hidden flex items-center gap-2 shrink-0 ml-auto">
            {!isDashboard && (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center justify-center w-9 h-9 border border-[#171B22]/15 bg-white text-[#171B22] rounded-lg cursor-pointer"
                aria-label="Search or track"
              >
                <Search className="w-4 h-4 text-[#FFB000]" />
              </button>
            )}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center justify-center w-9 h-9 border border-[#171B22]/15 bg-white text-[#171B22] rounded-lg cursor-pointer"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Right-side drawer ─────────────────────────────── */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`min-[990px]:hidden fixed inset-0 z-40 bg-[#171B22]/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`min-[990px]:hidden fixed top-0 right-0 z-50 h-[100dvh] w-[85%] max-w-[360px] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 h-[60px] sm:h-[66px] border-b border-[#171B22]/10 shrink-0">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#FFB000]/15 text-[#F45B0B] font-mono text-[10px] font-bold whitespace-nowrap">
            <Package className="w-3.5 h-3.5" />
            {isDashboard ? currentUser?.suiteId || "PORTAL" : "CHINA ➔ UK"}
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-9 h-9 border border-[#171B22]/15 bg-white text-[#171B22] rounded-lg cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
          {isDashboard && currentUser && (
            <Link
              to="/dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#F4F5F7] border border-[#171B22]/8 hover:bg-[#FFB000]/10 transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-[#171B22] text-[#FFB000] text-[12px] font-mono font-bold flex items-center justify-center shrink-0">
                {currentUser.name ? currentUser.name[0].toUpperCase() : "U"}
              </span>
              <div className="min-w-0">
                <div className="text-[12px] font-bold text-[#171B22] truncate">
                  {currentUser.name || "Account"}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#F45B0B] truncate">
                  {currentUser.suiteId}
                </div>
              </div>
            </Link>
          )}

          <nav className="space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center gap-2.5 px-3 py-3 rounded-lg text-xs font-mono uppercase font-semibold text-[#171B22]/85 hover:bg-[#FFB000]/10 hover:text-[#F45B0B] transition-colors"
              >
                {link.icon && <link.icon className="w-4 h-4 text-[#F45B0B]" />}
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#171B22]/10">
            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#171B22]/45">
              {isDashboard ? "100% DDP · TRACKED DELIVERY" : "100% DDP · DOOR TO DOOR"}
            </span>
          </div>
        </div>

        <div className="px-5 py-4 border-t border-[#171B22]/10 space-y-3 shrink-0">
          {currentUser ? (
            <button
              onClick={handleLogout}
              className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#171B22]/12 hover:border-[#F45B0B]/50 hover:bg-[#F45B0B]/[0.06] text-[#171B22] hover:text-[#F45B0B] font-mono text-[11px] font-bold uppercase tracking-[0.14em] transition-colors cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sign out
            </button>
          ) : (
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#FFB000] hover:bg-[#F45B0B] text-[#171B22] hover:text-white font-mono text-[11px] font-bold uppercase tracking-[0.14em] whitespace-nowrap transition-colors"
            >
              <Ship className="w-4 h-4" />
              <span>Start Shipping</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </aside>

      {!isDashboard && isSearchOpen && (
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      )}
    </header>
  );
}