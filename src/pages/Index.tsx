import {
  Header,
  HeroSection,
  BenefitsSection,
  StorySection,
  GiftKitSection,
  MethodSection,
  TechSpecsSection,
  TestimonialSection,
  FooterCTA,
  CookieConsent
} from "@/components/landing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main id="main-content">
        <HeroSection />
        <BenefitsSection />
        <StorySection />
        <GiftKitSection />
        <MethodSection />
        <TechSpecsSection />
        <TestimonialSection />
      </main>
      <FooterCTA />
      <CookieConsent />
    </div>
  );
};

export default Index;
