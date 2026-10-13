import Hero from "../components/landing/HeroSection";
import WhatWeDo from "../components/landing/WhatWeDo";
import Projects from "../components/landing/Projects";
import WhyChooseUs from "../components/landing/WhyChoseUs";
import AboutUs from "../components/landing/AboutUs";
import CTA from "../components/landing/CTA";

const LandingPage = () => {
  return (
    <div className="w-full">
      <Hero />
      <WhatWeDo />
      <Projects />
      <WhyChooseUs />
      <AboutUs />
      <CTA />
    </div>
  );
};

export default LandingPage;