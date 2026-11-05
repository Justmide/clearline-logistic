import Hero from "../components/landing/HeroSection";
import UKShippingRates from "../components/landing/UKShippingRates";
import WhyChooseUs from "../components/landing/WhyChoseUs";
import CTA from "../components/landing/CTA";

const LandingPage = () => {
  return (
    <div className="w-full">
      <Hero />
      <UKShippingRates />
      <WhyChooseUs />
      <CTA />
    </div>
  );
};

export default LandingPage;
