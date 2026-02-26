import { Gamepad2 } from "lucide-react";
import { formatPrice, PRICE } from "@/data/landingData";
import trophy from "@/assets/Trophy.png";
import kids from "@/assets/Kids.png";

const CHECKOUT_URL = "https://shop.chessbase.com/en/products/fritz_and_chesster_online?ref=RF369-PIM5TCD2PX";

const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

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

export const Header = () => (
  <header className="fixed top-0 left-0 right-0 z-50 parchment border-b-2 border-parchment-dark/50" role="banner">
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[999] focus:p-3 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
    >
      Skip to main content
    </a>
    <div className="container mx-auto px-4 py-2 flex items-center gap-4 md:gap-6 lg:gap-8">
      <a href="/" className="flex-shrink-0 max-[490px]:flex-1 flex items-center gap-3 relative min-w-0">
        <span className="font-spumoni text-3xl md:text-4xl lg:text-5xl mt-2 whitespace-nowrap">
          <span style={{ color: '#e33913' }}>Fritz</span>
          <span style={{ color: '#21368c' }}> & </span>
          <span style={{ color: '#e33913' }}>Chesster</span>
        </span>
        {/* Kids - Priority 2: always visible */}
        <div className="flex ml-4 md:ml-8 mr-6 max-[490px]:mr-0 max-[490px]:ml-0 max-[490px]:flex-[0.75] max-[490px]:justify-end max-[490px]:min-w-fit h-full items-end">
          <img
            src={kids}
            alt="Happy kids"
            className="h-12 md:h-14 lg:h-16 w-auto object-contain self-end flex-shrink-0"
            style={{ position: 'relative', bottom: '-0.5rem' }}
          />
        </div>
      </a>
      {/* Nav links - Priority 5 (lowest): hidden below xl */}
      <nav className="hidden xl:flex items-center gap-6 font-fredoka font-medium text-xl mt-2" aria-label="Main navigation">
        <a
          href="#story"
          onClick={(e) => scrollToSection(e, "story")}
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          The Story
        </a>
        <a
          href="#method"
          onClick={(e) => scrollToSection(e, "method")}
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          The Games
        </a>
        <a
          href="#benefits"
          onClick={(e) => scrollToSection(e, "benefits")}
          className="text-foreground/70 hover:text-foreground transition-colors"
        >
          Parents Love It
        </a>
      </nav>
      {/* Spacer - only shows between 680px and xl to center trophy */}
      <div className="hidden min-[680px]:block min-[680px]:flex-1 xl:hidden" />
      {/* Trophy - hidden between 490px and 680px */}
      <a href="/">
        <img
          src={trophy}
          alt="Trophy"
          className="hidden min-[430px]:block min-[490px]:hidden min-[680px]:block h-12 md:h-14 lg:h-20 w-auto object-contain -my-2 xl:ml-4"
        />
      </a>
      {/* Spacer - only shows between 680px and xl to center trophy */}
      <div className="hidden min-[680px]:block min-[680px]:flex-1 xl:hidden" />
      {/* Buy Now - Hidden below 490px */}
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleBuyClick}
        className="hidden min-[490px]:flex arrow-banner py-2 lg:py-3 px-4 lg:px-6 text-primary-foreground font-sigmar text-sm lg:text-base items-center gap-2 whitespace-nowrap ml-auto"
        aria-label={`Buy Fritz and Chesster game for ${formatPrice()}`}
      >
        <Gamepad2 className="w-4 h-4" aria-hidden="true" />
        <span className="hidden min-[850px]:inline">Buy Now – {formatPrice()}</span>
      </a>
    </div>
  </header>
);

