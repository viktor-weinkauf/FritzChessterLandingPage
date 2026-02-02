import { useState, useEffect } from "react";
import { X } from "lucide-react";

const COOKIE_CONSENT_KEY = "fritz-chesster-cookie-consent";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent banner from flashing on page load
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
    // Enable tracking after consent
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("consent", "grant");
    }
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-consent-description"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl border border-parchment-dark/20 p-5 md:p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="flex-1">
            <h3 className="font-fredoka font-bold text-foreground mb-2">
              We value your privacy
            </h3>
            <p id="cookie-consent-description" className="font-fredoka text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience and analyze site traffic.
              By clicking "Accept All", you consent to our use of cookies.
              Read our{" "}
              <a
                href="privacy-policy"
                className="text-primary hover:underline"
              >
                Privacy Policy
              </a>
              {" "}for more information.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 md:flex-none px-5 py-2.5 rounded-lg border-2 border-parchment-dark/30 font-fredoka font-semibold text-sm text-foreground hover:bg-parchment-dark/10 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 md:flex-none px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-fredoka font-semibold text-sm hover:bg-primary/90 transition-colors"
            >
              Accept All
            </button>
          </div>
          <button
            onClick={handleDecline}
            className="absolute top-3 right-3 md:static p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Close cookie banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};




