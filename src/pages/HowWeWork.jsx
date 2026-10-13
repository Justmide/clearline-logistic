import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

/**
 * How We Work — dedicated page (route: /how-we-work).
 * Clear, structured 7-phase project lifecycle and operational controls.
 */

const phases = [
  {
    index: "01",
    title: "Acquisition Analysis",
    activities:
      "Walk the property, assess structural and mechanical condition, develop preliminary scope and budget, model ARV and investor ROI, provide a clear go/no-go recommendation.",
  },
  {
    index: "02",
    title: "Pre-Construction",
    activities:
      "Finalize scope of work, complete design selections, assemble bid packages, solicit and level subcontractor bids, obtain municipal permits.",
  },
  {
    index: "03",
    title: "Contract and Mobilization",
    activities:
      "Execute contracts, verify insurance and licenses, order long-lead materials, establish the project master schedule, set up the real-time reporting portal.",
  },
  {
    index: "04",
    title: "Construction Execution",
    activities:
      "Daily on-site supervision, trade contractor coordination, milestone progress documentation, RFI and change order management, weekly client budget reports.",
  },
  {
    index: "05",
    title: "Quality Control",
    activities:
      "Phase-by-phase trade inspections, pre-drywall audits, municipal code sign-offs, photo documentation at every milestone.",
  },
  {
    index: "06",
    title: "Project Closeout",
    activities:
      "Final executive walkthrough, comprehensive punch list completion, Certificate of Occupancy, warranty documentation, and lien releases.",
  },
  {
    index: "07",
    title: "Pre-Sale Coordination",
    activities:
      "Staging consultation, final detail cleaning, professional photography coordination, and agent briefing on capital improvements for the MLS listing.",
  },
];

const HowWeWorkPage = () => {
  return (
    <main className="hf-font">
      <style>{`
        .hf-font { font-family: 'Inter', sans-serif; }
        .hf-display {
          font-family: 'Big Shoulders Display', sans-serif;
          font-weight: 800;
        }
        .hf-mono {
          font-family: 'IBM Plex Mono', monospace;
          letter-spacing: 0.14em;
        }
      `}</style>

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="hf-mono text-xs uppercase text-[#C9A64A] font-semibold tracking-widest bg-[#C9A64A]/10 px-3.5 py-1.5 rounded-full border border-[#C9A64A]/30 inline-block hf-hero-anim hf-hero-d1">
            Our Methodology
          </span>
          <h1 className="hf-display text-3xl sm:text-5xl lg:text-6xl text-[#10181F] uppercase leading-[1.08] mt-5 max-w-3xl hf-hero-anim hf-hero-d2">
            A Standardized
            <br />
            Seven-Phase Process.
          </h1>
          <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-[#10181F]/70 hf-hero-anim hf-hero-d3">
            Every Hatch&amp;Forge project follows the same disciplined lifecycle from initial deal walk to Certificate of Occupancy. Standardized accountability, live budget reporting, and zero surprises.
          </p>
        </div>
      </section>

      {/* Seven-phase timeline */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12">
            {phases.map((phase, i) => (
              <div
                key={phase.index}
                className="flex gap-5 sm:gap-8 group"
                data-aos="fade-up"
                data-aos-delay={Math.min(i * 50, 250)}
              >
                {/* Step badge & vertical connector */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#16304D] text-[#C9A64A] flex items-center justify-center font-mono font-bold text-sm sm:text-base border border-[#C9A64A]/40 shadow-sm group-hover:scale-105 transition-transform duration-200">
                    {phase.index}
                  </div>
                  {i < phases.length - 1 && (
                    <div className="w-0.5 grow bg-slate-200 my-3" />
                  )}
                </div>

                {/* Content card */}
                <div className="pb-8 pt-1">
                  <span className="hf-mono text-[10px] uppercase tracking-widest text-[#C9A64A] font-bold block mb-1">
                    Phase {phase.index}
                  </span>
                  <h2 className="hf-display text-2xl sm:text-3xl text-[#10181F] uppercase tracking-tight">
                    {phase.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#10181F]/75 max-w-2xl">
                    {phase.activities}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="bg-[#F8F9FA] py-20 sm:py-28 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <span className="hf-mono text-xs uppercase text-[#C9A64A] font-bold tracking-widest block">
              Operational Backbone
            </span>
            <h2 className="hf-display text-3xl sm:text-4xl lg:text-5xl text-[#10181F] uppercase tracking-tight mt-2">
              Systems, Sourcing &amp; Quality Control.
            </h2>
            <p className="mt-3 text-base text-[#10181F]/70 leading-relaxed">
              Institutional-grade project controls designed to eliminate cost overruns, enforce contractor accountability, and keep stakeholders synchronized.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <span className="hf-mono text-[10px] uppercase text-[#C9A64A] font-bold tracking-widest block mb-2">
                PM Technology
              </span>
              <h3 className="hf-display text-2xl uppercase text-[#10181F] font-bold mb-4">
                Real-Time Systems
              </h3>
              <ul className="space-y-3 text-sm text-[#10181F]/75">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Project scheduling via Buildertrend &amp; CoConstruct</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Live cost vs. budget tracking shared directly with investors</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Milestone-based high-res photo documentation reports</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Rigid change order sign-off protocol before any scope work</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Weekly written progress digests delivered to all partners</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
              <span className="hf-mono text-[10px] uppercase text-[#C9A64A] font-bold tracking-widest block mb-2">
                Procurement
              </span>
              <h3 className="hf-display text-2xl uppercase text-[#10181F] font-bold mb-4">
                Subcontractor Network
              </h3>
              <ul className="space-y-3 text-sm text-[#10181F]/75">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Hybrid GC/CM model managing vetted licensed trade specialists</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Minimum 3 qualified subs per trade for competitive bid leveling</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Volume commercial purchasing agreements for lumber and fixtures</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Preferred sub program: priority scheduling &amp; net terms</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Annual contractor reviews and insurance compliance audits</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#16304D] text-[#F3EFE6] p-8 rounded-2xl border border-[#C9A64A]/30 shadow-sm">
              <span className="hf-mono text-[10px] uppercase text-[#C9A64A] font-bold tracking-widest block mb-2">
                Standards
              </span>
              <h3 className="hf-display text-2xl uppercase text-[#F3EFE6] font-bold mb-4">
                Quality Assurance
              </h3>
              <ul className="space-y-3 text-sm text-white/85">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span><strong>Pre-drywall inspection:</strong> framing, rough MEP &amp; insulation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span><strong>Third-party inspection</strong> on projects over $150K scope</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span>Exceeds DC municipal codes — zero code-minimum mindset</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A64A] shrink-0 mt-0.5" />
                  <span><strong>Buyer-ready finish standard:</strong> crafted for top-dollar retail sales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      {/* Bridge CTA */}
      <section className="bg-white py-16 sm:py-24 text-center border-t border-gray-100" data-aos="fade-up">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="hf-display text-3xl sm:text-4xl text-[#10181F] uppercase">
            Ready to Walk Your Property?
          </h2>
          <p className="text-base text-[#10181F]/70 mt-3 max-w-lg mx-auto">
            We'll analyze structural conditions, run ARV numbers, and deliver an investor feasibility recommendation.
          </p>
          <div className="mt-8">
            <Link
              to="/start-project"
              className="hf-mono inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-wider font-semibold text-[#10181F] bg-[#C9A64A] hover:bg-[#16304D] hover:text-[#F3EFE6] transition-all duration-300 shadow-md"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowWeWorkPage;