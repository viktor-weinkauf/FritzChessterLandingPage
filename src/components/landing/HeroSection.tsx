import { Brain, Sparkles, Rocket, Globe, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import castleScene from "@/assets/Castle.webp";
import fredTheRat from "@/assets/fred-the-rat.png";
import { formatPrice, PRICE } from "@/data/landingData";

const CHECKOUT_URL = "https://shop.chessbase.com/en/products/fritz_and_chesster_online?ref=RF369-PIM5TCD2PX";
const DEMO_URL = "https://chess-for-children.chessbase.com/";

// Track purchase intent when clicking buy button
const handleBuyClick = () => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    (window as any).fbq("track", "Purchase", {
      value: parseFloat(PRICE),
      currency: "EUR",
      content_name: "Fritz & Chesster Vol 1",
      content_type: "product",
    });
  }
};

const featurePills = [
  { icon: Brain, text: "Award-Winning Chess Game", delay: "delay-100" },
  { icon: Globe, text: "Available in 12 Languages", delay: "delay-200" },
  { icon: Sparkles, text: "Guilt-Free Screen Time", delay: "delay-300" },
  { icon: Rocket, text: "Plays Everywhere", delay: "delay-400" },
];

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-sky relative min-h-screen flex items-center justify-center pt-20 overflow-x-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col landscape:lg:flex-row items-center gap-10 landscape:lg:gap-16">
          {/* Left Content - contains title, subtitle, pills, and CTA */}
          <div className="flex-1 w-full text-center landscape:lg:text-left flex flex-col">
            {/* Title - order 1 always */}
            <h1
              className={`font-lobster text-4xl md:text-5xl lg:text-6xl text-white mb-6 pb-2 leading-[1.4] overflow-visible order-1 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span style={{ color: '#e33913' }}>Fritz</span> <span style={{ color: '#5a7fee' }}>&</span> <span style={{ color: '#e33913' }}>Chesster</span> — The Game That Builds{" "}
              <span
                className="gradient-text inline-block"
                style={{ whiteSpace: 'nowrap' }}
              >
                Strategic Minds
                <Sparkles className="inline-block w-8 h-8 ml-2 text-yellow-300 animate-pulse" />
              </span>
            </h1>

            {/* Castle Card - order 2 in portrait (appears after title), hidden in landscape */}
            <div
              className={`order-2 landscape:lg:hidden max-w-xl mx-auto mb-10 relative transition-all duration-1000 delay-300 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="game-card shadow-2xl card-hover-lift overflow-hidden">
                <img
                  src={castleScene}
                  alt="A magical medieval castle with towers, representing the Fritz and Chesster chess kingdom adventure"
                  className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
                  fetchPriority="high"
                />
              </div>
              {/* Fred the Rat - Mascot */}
              <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 z-20">
                <img
                  src={fredTheRat}
                  alt="Fred the Rat, your friendly sewer-dwelling chess coach character"
                  className="w-28 h-28 md:w-40 md:h-40 object-contain drop-shadow-lg animate-float"
                />
              </div>
            </div>

            {/* Subtitle - order 3 in portrait */}
            <div
              className={`order-3 transition-all duration-1000 delay-200 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="font-fredoka-original text-xl text-white/90 mb-2 font-medium">
                The award-winning adventure game that teaches chess so naturally,
              </p>
              <p className="font-fredoka-original text-lg text-white/60 mb-10 max-w-xl mx-auto landscape:lg:mx-0">
                children don't even realize they're learning.
              </p>
            </div>

            {/* Feature Pills - order 4 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-xl mx-auto landscape:lg:mx-0 order-4">
              {featurePills.map((pill, index) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={index}
                    className={`glass-card rounded-xl px-4 py-3 flex items-center gap-3 border border-white/20
                      magnetic-hover cursor-default transition-all duration-700 ${pill.delay} ${
                      isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-400/30 to-orange-400/30">
                      <Icon className="w-5 h-5 text-yellow-300" aria-hidden="true" />
                    </div>
                    <span className="font-fredoka-original font-semibold text-white text-sm">{pill.text}</span>
                  </div>
                );
              })}
            </div>

            {/* CTA - order 5 */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto landscape:lg:mx-0 order-5 transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '800ms' }}
            >
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-button py-4 px-6 text-white font-sigmar text-lg rounded-xl flex items-center justify-center gap-2 h-14 ripple group"
                aria-label="Play the free demo"
              >
                Play Demo
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <div className="flex flex-col items-center gap-2">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBuyClick}
                  className="btn-premium py-4 px-6 text-white font-sigmar text-lg flex items-center gap-2 whitespace-nowrap w-full justify-center h-14 group"
                  aria-label={`Buy Fritz and Chesster now for ${formatPrice()}`}
                >
                  <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" aria-hidden="true" />
                  Buy Now – {formatPrice()}
                </a>
                <p className="text-white/80 text-sm font-fredoka-original flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  Instant delivery via email
                </p>
              </div>
            </div>
          </div>

          {/* Right - Castle Card (only visible in landscape lg+) */}
          <div
            className={`hidden landscape:lg:block flex-1 max-w-xl relative transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="game-card shadow-2xl card-hover-lift overflow-hidden">
              <img
                src={castleScene}
                alt="A magical medieval castle with towers, representing the Fritz and Chesster chess kingdom adventure"
                className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
                fetchPriority="high"
              />
            </div>
            {/* Fred the Rat - Mascot */}
            <div className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 z-20 animate-breathing">
              <img
                src={fredTheRat}
                alt="Fred the Rat, your friendly sewer-dwelling chess coach character"
                className="w-28 h-28 md:w-40 md:h-40 object-contain drop-shadow-2xl animate-float"
                fetchPriority="high"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400/30 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 left-1/2 w-12 h-12 bg-blue-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>
      </div>

    </section>
  );
};
