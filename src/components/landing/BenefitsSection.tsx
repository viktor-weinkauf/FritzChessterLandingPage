import { useEffect, useRef, useState } from "react";
import { Quote, Star } from "lucide-react";
import kidsPlaying from "@/assets/kids-playing.jpeg";
import { FeatureCard } from "./FeatureCard";
import { benefits } from "@/data/landingData";

export const BenefitsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState<boolean[]>(new Array(benefits.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stagger card animations
          benefits.forEach((_, index) => {
            setTimeout(() => {
              setCardsVisible(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, 600 + index * 150);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="benefits" className="sky-texture py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`parchment rounded-3xl p-8 md:p-12 max-w-5xl mx-auto shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-14">
            <h2
              className={`font-lobster text-3xl md:text-5xl mb-4 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span style={{ color: '#21368c' }}>Kids Chess That Wins the War on</span>{" "}
              <span style={{ color: '#e33913' }} className="relative inline-block">
                "Screen Time"
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                  <path d="M0 4C50 0 150 8 200 4" stroke="#e33913" strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
                </svg>
              </span>
            </h2>
            <p
              className={`font-fredoka-original text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Screen time usually means hours of mindless tapping and zombie-staring.
            </p>
            <p
              className={`font-fredoka-original text-lg max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <strong style={{ color: '#21368c' }}>Not anymore.</strong>
            </p>
            <p
              className={`font-fredoka-original text-lg text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Fritz & Chesster is the "Trojan Horse" of screen time. It looks like a video game. It plays like a cartoon movie. But inside?{" "}
              <strong style={{ color: '#21368c' }}>It's a rigorous mental workout.</strong>
            </p>
          </div>

          {/* Kids Playing Image */}
          <div
            className={`mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative max-w-2xl mx-auto group">
              <img
                src={kidsPlaying}
                alt="Two children happily playing Fritz and Chesster together on a tablet, engaged and smiling"
                className="w-full rounded-2xl shadow-xl border-4 border-parchment-dark/20 transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              {/* Decorative frame corners */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-4 border-l-4 border-yellow-500/50 rounded-tl-lg" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-t-4 border-r-4 border-yellow-500/50 rounded-tr-lg" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-4 border-l-4 border-yellow-500/50 rounded-bl-lg" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-4 border-r-4 border-yellow-500/50 rounded-br-lg" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className={`transition-all duration-700 ${
                  cardsVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              >
                <FeatureCard
                  icon={item.icon}
                  title={item.title}
                  description={item.desc}
                  iconColor={item.color}
                  titleColor={item.titleColor}
                />
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div
            className={`mt-14 text-center border-t-2 border-parchment-dark/20 pt-10 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0 delay-1000' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '1000ms' }}
          >
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <Quote className="w-8 h-8 mx-auto mb-3 text-blue-600/30" />
            <blockquote className="font-fredoka-original text-lg italic mb-3 max-w-xl mx-auto" style={{ color: '#21368c' }}>
              "It's the only video game I actually encourage my kids to play. Best investment I ever made."
            </blockquote>
            <cite className="font-fredoka-original text-muted-foreground text-sm flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-muted-foreground/30" />
              Michelle T., Mom of two
              <span className="w-8 h-px bg-muted-foreground/30" />
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};
