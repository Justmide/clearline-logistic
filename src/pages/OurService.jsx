import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const services = [
  {
    index: "01",
    title: "Fix-and-Flip Project Management",
    href: "/services/fix-and-flip",
    flagship: true,
    description:
      "Our flagship service. We manage the full renovation lifecycle for investor clients: scope development, budget creation, subcontractor procurement, permit acquisition, on-site supervision, inspections, punch lists, and delivery. Clients retain ownership while we manage execution.",
    fee: "10% to 15% of total project cost",
  },
  {
    index: "02",
    title: "New Construction Management",
    href: "/services/new-construction",
    description:
      "Ground-up residential construction for investors and buyers. We manage architects, engineers, and all trades from lot development through certificate of occupancy, specializing in infill lots and teardown-rebuilds in established neighborhoods.",
    fee: "8% to 12% of total hard costs",
  },
  {
    index: "03",
    title: "Design and Pre-Construction Services",
    href: "/services/design-pre-construction",
    description:
      "Feasibility studies, renovation scope analysis, design selection, permit drawings coordination, and ARV-optimized design packages built to maximize resale value on a defined budget.",
    fee: "$2,500 to $10,000, credited if PM is engaged",
  },
  {
    index: "04",
    title: "Proprietary Investment and Construction",
    href: "/services/proprietary-investment",
    description:
      "On select projects, the company co-invests alongside clients or acquires properties independently, self-managing construction to capture both the investor margin and the construction management fee.",
    fee: "Equity split plus PM fee, negotiated per deal",
  },
  {
    index: "05",
    title: "Portfolio Management Services",
    href: "/services/portfolio-management",
    description:
      "For institutional and multi-property investors, ongoing portfolio-level project management: vendor relationships, procurement leverage, unified reporting, and cost benchmarking across all active assets.",
    fee: "$5,000 to $15,000 per month",
  },
];

const tiers = [
  { name: "Cosmetic Refresh", budget: "$25K to $75K", timeline: "4 to 8 Weeks" },
  { name: "Mid-Level Renovation", budget: "$75K to $175K", timeline: "8 to 16 Weeks" },
  { name: "Full Gut Renovation", budget: "$175K to $350K+", timeline: "16 to 26 Weeks" },
  { name: "New Construction", budget: "$350K to $800K+", timeline: "6 to 14 Months" },
];

const projectTypes = [
  "Cosmetic Refresh",
  "Mid-Level Renovation",
  "Full Gut Renovation",
  "New Construction",
  "Not Sure Yet",
];

const StartAProjectSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: projectTypes[0],
    message: "",
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nProperty Address: ${form.address}\nProject Type: ${form.projectType}\n\n${form.message}`
    );
    window.location.href = `mailto:info@hatchandforge.com?subject=Project Inquiry&body=${body}`;
  };

  return (
    <section className="relative bg-[#10181F] py-20 sm:py-28 text-center text-[#F3EFE6] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://ucarecdn.com/ac2b2113-e390-4fe3-9e4f-b92978ecda2c/-/format/auto/-/quality/smart/-/progressive/yes/-/preview/1200x800/')",
          filter: "blur(8px)",
        }}
      />
      <div className="absolute inset-0 bg-[#10181F]/90" />
      <div className="relative max-w-3xl mx-auto px-4">
        <h2 className="hf-display text-3xl sm:text-4xl text-[#F3EFE6] uppercase leading-tight mb-4" data-aos="fade-up" data-aos-delay="700">
          Start Your Project Today
        </h2>
        <p className="text-base text-[#F3EFE6]/80 mb-8 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="750">
          Share a few details and we'll walk your property, analyze the numbers,
          and give you a clear go/no-go recommendation no commitment required.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left" data-aos="fade-up" data-aos-delay="800">
          <div>
            <label className="hf-mono text-[10px] uppercase text-[#8CA0AC] block mb-1">Project Type</label>
            <select 
              value={form.projectType}
              onChange={handleChange("projectType")}
              className="w-full bg-[#16304D] border border-[#C9A64A]/30 text-[#F3EFE6] px-4 py-3 text-sm focus:outline-none focus:border-[#C9A64A] transition-colors rounded"
            >
              {projectTypes.map((type) => (
                <option key={type} value={type} className="bg-[#16304D] text-[#F3EFE6]">{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="hf-mono text-[10px] uppercase text-[#8CA0AC] block mb-1">Name</label>
            <input
              type="text"
              placeholder="Jane Doe"
              value={form.name}
              onChange={handleChange("name")}
              required
              className="w-full bg-[#16304D] border border-[#C9A64A]/30 text-[#F3EFE6] px-4 py-3 text-sm placeholder:text-[#8CA0AC]/50 focus:outline-none focus:border-[#C9A64A] transition-colors rounded"
            />
          </div>

          <div>
            <label className="hf-mono text-[10px] uppercase text-[#8CA0AC] block mb-1">Email</label>
            <input
              type="email"
              placeholder="jane@email.com"
              value={form.email}
              onChange={handleChange("email")}
              required
              className="w-full bg-[#16304D] border border-[#C9A64A]/30 text-[#F3EFE6] px-4 py-3 text-sm placeholder:text-[#8CA0AC]/50 focus:outline-none focus:border-[#C9A64A] transition-colors rounded"
            />
          </div>

          <div>
            <label className="hf-mono text-[10px] uppercase text-[#8CA0AC] block mb-1">Phone</label>
            <input
              type="tel"
              placeholder="(202) 555-0199"
              value={form.phone}
              onChange={handleChange("phone")}
              className="w-full bg-[#16304D] border border-[#C9A64A]/30 text-[#F3EFE6] px-4 py-3 text-sm placeholder:text-[#8CA0AC]/50 focus:outline-none focus:border-[#C9A64A] transition-colors rounded"
            />
          </div>

          <div>
            <label className="hf-mono text-[10px] uppercase text-[#8CA0AC] block mb-1">Property Address</label>
            <input
              type="text"
              placeholder="123 Main St, Washington, DC"
              value={form.address}
              onChange={handleChange("address")}
              className="w-full bg-[#16304D] border border-[#C9A64A]/30 text-[#F3EFE6] px-4 py-3 text-sm placeholder:text-[#8CA0AC]/50 focus:outline-none focus:border-[#C9A64A] transition-colors rounded"
            />
          </div>

          <div>
            <label className="hf-mono text-[10px] uppercase text-[#8CA0AC] block mb-1">Project Details</label>
            <textarea
              placeholder="Tell us about the project..."
              rows={3}
              value={form.message}
              onChange={handleChange("message")}
              className="w-full bg-[#16304D] border border-[#C9A64A]/30 text-[#F3EFE6] px-4 py-3 text-sm placeholder:text-[#8CA0AC]/50 focus:outline-none focus:border-[#C9A64A] transition-colors rounded resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#C9A64A] hover:bg-[#F3EFE6] text-[#10181F] text-xs hf-mono uppercase tracking-wider font-semibold transition-colors rounded shadow-md"
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

const ServicesPage = () => {
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

      <section className="relative bg-[#10181F] pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="hf-mono text-[10px] uppercase text-[#C9A64A] hf-hero-anim hf-hero-d1">
            Our Services
          </span>
          <h1 className="hf-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F3EFE6] uppercase leading-[1.1] mt-4 sm:mt-5 max-w-3xl hf-hero-anim hf-hero-d2">
            Every Phase, One
            <br />
            Point of Accountability.
          </h1>
          <p className="mt-6 max-w-xl text-[15px] sm:text-base leading-relaxed text-[#F3EFE6]/85 hf-hero-anim hf-hero-d3">
            From acquisition analysis through pre-sale coordination, each
            service line is built for investors who need execution, not just
            a contractor.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 sm:space-y-12" data-aos="fade-up" data-aos-delay="250">
            {services.map((service, index) => (
              <div
                key={service.index}
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pt-10 ${
                  service.flagship ? "border-t-2 border-[#C9A64A]" : "border-t border-[#10181F]/10"
                }`}
                data-aos="fade-up"
                data-aos-delay={300 + index * 100}
              >
                <div className="md:col-span-1" data-aos="fade-up" data-aos-delay={325 + index * 100}>
                  <span className="hf-mono text-[10px] uppercase text-[#C9A64A]">
                    {service.index}
                  </span>
                </div>
                <div className="md:col-span-7" data-aos="fade-up" data-aos-delay={350 + index * 100}>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Link to={service.href} className="group-hover:text-[#A8822B] transition-colors">
                      <h2 className="hf-display text-xl sm:text-2xl text-[#10181F] hover:text-[#A8822B] uppercase transition-colors">
                        {service.title}
                      </h2>
                    </Link>
                    {service.flagship && (
                      <span className="hf-mono text-[8px] uppercase text-[#C9A64A] border border-[#C9A64A]/30 px-2 py-1">
                        Flagship Service
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#10181F]/75 max-w-2xl" data-aos="fade-up" data-aos-delay={375 + index * 100}>
                    {service.description}
                  </p>
                  <div className="mt-4" data-aos="fade-up" data-aos-delay={390 + index * 100}>
                    <Link
                      to={service.href}
                      className="inline-flex items-center gap-1.5 text-xs hf-mono uppercase text-[#A8822B] hover:text-[#10181F] font-semibold tracking-wider transition-colors"
                    >
                      Explore Service Details →
                    </Link>
                  </div>
                </div>
                <div className="md:col-span-4 md:text-right" data-aos="fade-up" data-aos-delay={400 + index * 100}>
                  <p className="hf-mono text-[9px] uppercase text-[#8CA0AC]">Fee</p>
                  <p className="hf-display text-lg text-[#10181F] mt-1">{service.fee}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3EFE6] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl" data-aos="fade-up" data-aos-delay="450">
            <span className="hf-mono text-[10px] uppercase text-[#C9A64A]">
              Project Scope Tiers
            </span>
            <h2 className="hf-display text-3xl sm:text-4xl text-[#10181F] uppercase leading-[1.05] mt-4">
              Sized to Fit
              <br />
              Your Investment.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6" data-aos="fade-up" data-aos-delay="500">
            {tiers.map((tier, i) => (
              <div key={tier.name} className="bg-white border border-[#10181F]/10 px-6 py-7" data-aos="fade-up" data-aos-delay={525 + i * 100}>
                <span className="hf-mono text-[9px] uppercase text-[#C9A64A]">
                  Tier {i + 1}
                </span>
                <h3 className="hf-display text-lg text-[#10181F] uppercase mt-2 leading-snug">
                  {tier.name}
                </h3>
                <div className="mt-5 pt-4 border-t border-[#10181F]/10" data-aos="fade-up" data-aos-delay={550 + i * 100}>
                  <p className="hf-mono text-[10px] uppercase text-[#10181F]/75">{tier.budget}</p>
                  <p className="hf-mono mt-1 text-[9px] uppercase text-[#8CA0AC]">{tier.timeline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StartAProjectSection />
    </main>
  );
};

export default ServicesPage;