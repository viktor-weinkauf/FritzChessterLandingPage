import { useEffect, useRef, useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { giftSteps, PRICE, formatPrice } from "@/data/landingData";

const CHECKOUT_URL = "https://shop.chessbase.com/en/products/fritz_and_chesster_online?ref=RF369-PIM5TCD2PX";

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

export const GiftKitSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [stepsVisible, setStepsVisible] = useState<boolean[]>(new Array(giftSteps.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger step animations
          giftSteps.forEach((_, index) => {
            setTimeout(() => {
              setStepsVisible(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, 300 + index * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{ backgroundColor: '#e33913' }}
    >
      {/* Animated decorative pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-20 w-48 h-48 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center text-primary-foreground mb-14 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-lobster text-3xl md:text-5xl mb-4 drop-shadow-lg">
            Start Learning Chess in Minutes
            <Sparkles className="inline-block w-8 h-8 ml-3 animate-pulse" />
          </h2>
          <p className="font-fredoka-original text-xl opacity-90 max-w-xl mx-auto">
            No waiting, no shipping. <strong className="text-yellow-200">Instant digital delivery</strong> means the adventure starts today.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-5 max-w-4xl mx-auto mb-14 relative">
          {/* Connection line between steps (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-1 bg-white/20 -translate-y-1/2 z-0 rounded-full" />

          {giftSteps.map((item, index) => (
            <div key={item.step} className="relative">
              {/* Arrow between steps (desktop) */}
              {index < giftSteps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 text-white/40 z-10" />
              )}

              <div
                className={`parchment rounded-2xl p-6 text-center relative z-10
                  hover:shadow-2xl hover:-translate-y-2 transition-all duration-500
                  ${stepsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {/* Step number badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-10 text-primary-foreground rounded-full flex items-center justify-center font-fredoka-original font-bold text-lg shadow-lg"
                  style={{ backgroundColor: '#e33913' }}>
                  {item.step}
                </div>

                <div className="mt-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg
                    hover:scale-110 hover:rotate-6 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-secondary" aria-hidden="true" />
                  </div>
                  <h3 className="font-fredoka-original font-bold mb-2 text-lg" style={{ color: '#21368c' }}>{item.title}</h3>
                  <p className="font-fredoka-original text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-fredoka-original text-2xl text-primary-foreground/90 mb-8 italic max-w-lg mx-auto">
            It's not just a code. It's their invitation to the Kingdom.
          </p>
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleBuyClick}
            className="gold-button py-4 px-10 rounded-2xl font-sigmar text-xl inline-flex items-center gap-3
              animate-pulse-glow-gold hover:scale-105 transition-transform duration-300 shadow-2xl group"
            aria-label={`Buy Fritz and Chesster now for ${formatPrice()}`}
          >
            <Sparkles className="w-6 h-6 transition-transform group-hover:rotate-12" aria-hidden="true" />
            Buy Now – {formatPrice()}
            <Sparkles className="w-5 h-5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
};
