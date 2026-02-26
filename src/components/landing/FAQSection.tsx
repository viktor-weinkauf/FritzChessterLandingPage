import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: ReactNode;
}

const B = ({ children, color = '#21368c' }: { children: ReactNode; color?: string }) => (
  <strong style={{ color }}>{children}</strong>
);

const faqItems: FAQItem[] = [
  {
    question: "What age is Fritz & Chesster suitable for?",
    answer: <>Fritz & Chesster is designed for <B>children ages 4–12</B>. Younger kids (4–6) enjoy the mini-games and puzzles with a parent's help, while older children (7–12) can <B>play independently</B> and progress through the full chess curriculum at their own pace.</>
  },
  {
    question: "Does my child need to know chess already?",
    answer: <><B color="#e33913">Not at all!</B> Fritz & Chesster is designed for <B>complete beginners</B>. The game starts with the very basics — how pieces move, what the board looks like — and builds up to full chess games through fun adventures and mini-games. It's the <B>perfect way to introduce chess</B>.</>
  },
  {
    question: "What devices can Fritz & Chesster run on?",
    answer: <>Fritz & Chesster works on <B>Windows PCs, Mac (via browser), iPads, Android tablets, and Chromebooks</B>. It runs in <B>any modern web browser</B> — no downloads or installation needed.</>
  },
  {
    question: "How long does it take for kids to learn chess?",
    answer: <>Most children start understanding basic moves within <B>15–20 minutes</B>. The full curriculum spans roughly 10–15 hours of gameplay. Kids move at their own pace, and the game <B>saves progress automatically</B> so they can pick up right where they left off.</>
  },
  {
    question: "Is Fritz & Chesster available in my language?",
    answer: <>Yes! Fritz & Chesster is available in <B color="#e33913">12 languages</B>: English, German, Spanish, French, Italian, Portuguese, Dutch, Polish, Russian, Swedish, Danish, and Norwegian. <B>Perfect for international families.</B></>
  },
  {
    question: "Is this a subscription or a one-time purchase?",
    answer: <>Fritz & Chesster Volume 1 is a <B color="#e33913">one-time purchase</B> — no subscriptions, no in-app purchases, no ads. You buy it once and the child has <B>unlimited access to the full game forever</B>.</>
  },
  {
    question: "How does Fritz & Chesster compare to other chess apps for kids?",
    answer: <>Unlike drill-based apps, Fritz & Chesster teaches chess through an <B>adventure story</B> with characters, mini-games, and puzzles. It's <B color="#e33913">award-winning</B>, available in 12 languages, and has been <B>trusted by parents for over 20 years</B>. Children learn without realizing they're being taught.</>
  },
  {
    question: "Can siblings share one purchase?",
    answer: <>Each purchase supports <B>multiple player profiles</B>, so siblings can each have their own save game and progress at their own pace. If you're buying for kids in different households, you'll need separate purchases.</>
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
      <div className="font-fredoka-original text-sm text-muted-foreground leading-relaxed px-2">
        {item.answer}
      </div>
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
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-gradient-to-br from-yellow-400/30 to-orange-400/30
              hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-default">
              <HelpCircle className="w-7 h-7" style={{ color: '#e33913' }} aria-hidden="true" />
            </div>
            <h2 className="font-lobster text-3xl md:text-4xl mb-3" style={{ color: '#21368c' }}>
              <span style={{ color: '#e33913' }}>Chess for Kids</span> — Frequently Asked Questions
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
