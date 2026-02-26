import { useEffect, useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What age is Fritz & Chesster suitable for?",
    answer: "Fritz & Chesster is designed for children ages 4–12. Younger kids (4–6) enjoy the mini-games and puzzles with a parent’s help, while older children (7–12) can play independently and progress through the full chess curriculum at their own pace."
  },
  {
    question: "Does my child need to know chess already?",
    answer: "Not at all! Fritz & Chesster is designed for complete beginners. The game starts with the very basics — how pieces move, what the board looks like — and builds up to full chess games through fun adventures and mini-games. It’s the perfect way to introduce chess."
  },
  {
    question: "What devices can Fritz & Chesster run on?",
    answer: "Fritz & Chesster works on Windows PCs, Mac (via browser), iPads, Android tablets, and Chromebooks. It runs in any modern web browser — no downloads or installation needed."
  },
  {
    question: "How long does it take for kids to learn chess?",
    answer: "Most children start understanding basic moves within 15–20 minutes. The full curriculum spans roughly 10–15 hours of gameplay. Kids move at their own pace, and the game saves progress automatically so they can pick up right where they left off."
  },
  {
    question: "Is Fritz & Chesster available in my language?",
    answer: "Yes! Fritz & Chesster is available in 12 languages: English, German, Spanish, French, Italian, Portuguese, Dutch, Polish, Russian, Swedish, Danish, and Norwegian. Perfect for international families."
  },
  {
    question: "Is this a subscription or a one-time purchase?",
    answer: "Fritz & Chesster Volume 1 is a one-time purchase — no subscriptions, no in-app purchases, no ads. You buy it once and the child has unlimited access to the full game forever."
  },
  {
    question: "How does Fritz & Chesster compare to other chess apps for kids?",
    answer: "Unlike drill-based apps, Fritz & Chesster teaches chess through an adventure story with characters, mini-games, and puzzles. It’s award-winning, available in 12 languages, and has been trusted by parents for over 20 years. Children learn without realizing they’re being taught."
  },
  {
    question: "Can siblings share one purchase?",
    answer: "Each purchase supports multiple player profiles, so siblings can each have their own save game and progress at their own pace. If you’re buying for kids in different households, you’ll need separate purchases."
  }
];

const FAQItem = ({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-parchment-dark/15 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between py-5 px-2 text-left group"
      aria-expanded={isOpen}
    >
      <span className="font-fredoka-original font-semibold text-base pr-4" style={{ color: '#21368c' }}>
        {item.question}
      </span>
      <ChevronDown
        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : ''
        }`}
        style={{ color: '#e33913' }}
        aria-hidden="true"
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'
      }`}
    >
      <p className="font-fredoka-original text-sm text-muted-foreground leading-relaxed px-2">
        {item.answer}
      </p>
    </div>
  </div>
);

export const FAQSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="sky-texture py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div
          className={`parchment rounded-3xl p-8 md:p-12 max-w-3xl mx-auto shadow-2xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-gradient-to-br from-yellow-400/30 to-orange-400/30">
              <HelpCircle className="w-7 h-7 text-yellow-600" aria-hidden="true" />
            </div>
            <h2 className="font-lobster text-3xl md:text-4xl mb-3" style={{ color: '#21368c' }}>
              Chess for Kids — Frequently Asked Questions
            </h2>
            <p className="font-fredoka-original text-muted-foreground max-w-xl mx-auto">
              Everything parents ask before getting Fritz & Chesster for their children.
            </p>
          </div>

          <div className="divide-y-0">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
