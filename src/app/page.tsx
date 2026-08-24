import ContactSection from "@/component/ContactSection";
import HeroSection from "@/component/HeroSection";
import WhyChooseQuickBot from "@/component/WhyChooseUs";
import PricingSection from "@/component/PricingSection";
import FAQSection from "@/component/FaqsSection";

export default function Home() {
  return (
   <>
    <HeroSection />
    <WhyChooseQuickBot />
    <PricingSection />
    <ContactSection />
    <FAQSection />
   </>
  );
}
