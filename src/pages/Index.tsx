import {
  Header,
  HeroSection,
  BenefitsSection,
  StorySection,
  GiftKitSection,
  MethodSection,
  TechSpecsSection,
  TestimonialSection,
  FAQSection,
  FooterCTA,
  CookieConsent
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main id="main-content">
        <HeroSection />
        <BenefitsSection />
        <StorySection />
        <GiftKitSection />
        <MethodSection />
        <TechSpecsSection />
        <TestimonialSection />
        <FAQSection />
      </main>
      <FooterCTA />
      <CookieConsent />
    </div>
  );
};

export default Index;
