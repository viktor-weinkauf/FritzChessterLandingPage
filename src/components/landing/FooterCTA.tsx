import { useEffect, useRef, useState } from "react";
import { Gamepad2, Shield, CreditCard, Sparkles, Heart } from "lucide-react";
import { StarField } from "./StarField";
import { formatPrice, PRICE } from "@/data/landingData";
import logo from "@/assets/fritz-chesster-logo.png";

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

export const FooterCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
    <footer ref={sectionRef} className="hero-sky py-20 md:py-28 relative overflow-hidden">
      <StarField count={70} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="font-lobster text-4xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-lg">
              Start Their Chess{" "}
              <span className="gradient-text">Adventure Today</span>
              <Sparkles className="inline-block w-8 h-8 ml-2 text-yellow-300 animate-pulse" />
            </h2>
            <p className="font-fredoka-original text-xl text-white/80 mb-2">
              Give them the power of logic, strategy, and adventure.
            </p>
            <p className="font-fredoka-original text-base text-white/50 mb-10">
              Fritz & Chesster Vol 1: The Adventure Begins<br />
              <span className="text-yellow-400/80">Instant Digital Delivery</span>
            </p>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleBuyClick}
              className="btn-premium py-5 px-6 max-[390px]:px-4 max-[390px]:text-lg text-white font-sigmar text-xl md:text-2xl mb-6 mx-auto inline-flex items-center gap-3 max-[390px]:gap-2 whitespace-nowrap group"
              aria-label={`Buy Fritz and Chesster now for ${formatPrice()}`}
            >
              <Gamepad2 className="w-7 h-7 transition-transform group-hover:rotate-12 group-hover:scale-110" aria-hidden="true" />
              Buy Now – {formatPrice()}
              <Sparkles className="w-5 h-5 opacity-70 animate-pulse" />
            </a>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-16 text-white/50">
              <div className="flex items-center gap-2 text-sm font-fredoka-original">
                <Shield className="w-4 h-4 text-green-400" />
                Secure Payment
              </div>
              <div className="flex items-center gap-2 text-sm font-fredoka-original">
                <CreditCard className="w-4 h-4 text-blue-400" />
                PayPal, Credit Card, Apple Pay
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div
            className={`border-t border-white/10 pt-8 mb-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <nav className="flex flex-wrap justify-center gap-4 md:gap-6 font-fredoka-original text-sm text-white/40" aria-label="Legal links">
              <a href="impressum" className="hover:text-white/70 transition-colors animated-underline">
                Legal Notice (Impressum)
              </a>
              <span className="hidden md:inline" aria-hidden="true">·</span>
              <a href="privacy-policy" className="hover:text-white/70 transition-colors animated-underline">
                Privacy Policy
              </a>
            </nav>
          </div>

          <div
            className={`flex flex-col md:flex-row items-center justify-between gap-4 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="font-fredoka text-white/30 text-sm flex items-center gap-1">
              © 2026 ChessBase GmbH · Made with <Heart className="w-3 h-3 text-red-400 animate-pulse" /> in Hamburg
            </p>
            <img
              src={logo}
              alt="Learn to Play Chess with Fritz & Chesster"
              className="h-10 w-auto brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
