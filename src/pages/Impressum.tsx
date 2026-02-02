import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Globe } from "lucide-react";

const Impressum = () => {
  return (
    <div className="min-h-screen parchment">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-fredoka text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <h1 className="font-lobster text-4xl md:text-5xl text-foreground mb-8">
          Legal Notice <span className="text-primary">(Impressum)</span>
        </h1>

        <div className="space-y-8 font-fredoka">
          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">Company Information</h2>
            <div className="text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground text-lg">ChessBase GmbH</p>
              <p>Osterbekstr. 90a</p>
              <p>22083 Hamburg</p>
              <p>Germany</p>
            </div>
          </section>

          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">Contact</h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span>(+49) 40 63 90 60-0</span>
              </p>
              <p className="flex items-center gap-3">
                <span className="w-5 h-5 text-primary text-center">Fax</span>
                <span>(+49) 40 630 12 82</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@chessbase.com" className="text-primary hover:underline">
                  info@chessbase.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary" />
                <a href="https://www.chessbase.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  www.chessbase.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">About ChessBase</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                ChessBase was established in 1986 by Matthias Wüllenweber, Frederic Friedel, and Gisbert Jacoby.
                The company is headquartered in Hamburg, Germany and currently employs 30 full-time staff members.
              </p>
              <p>
                ChessBase operates as the global market leader in chess software and services. The flagship product
                is ChessBase database software, which has become the industry standard for professional and amateur
                players worldwide.
              </p>
              <p className="italic text-foreground/70">
                "ChessBase is the greatest development for chess since the invention of the printing press."
                <span className="block mt-1 text-sm">— Garry Kasparov</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">Fritz & Chesster</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                Fritz & Chesster is an educational software developed by ChessBase in 2002.
                It has been translated into 17 languages and is credited with introducing approximately
                1.5 million new players to chess worldwide.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">Disclaimer</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">Liability for Content:</strong> The contents of our pages have been
                created with the utmost care. However, we cannot guarantee the accuracy, completeness, or timeliness
                of the content.
              </p>
              <p>
                <strong className="text-foreground">Liability for Links:</strong> Our website contains links to external
                websites of third parties, over whose contents we have no influence. Therefore, we cannot assume any
                liability for these external contents.
              </p>
              <p>
                <strong className="text-foreground">Copyright:</strong> The content and works on these pages created by
                the site operators are subject to German copyright law. Duplication, processing, distribution, or any
                form of commercialization of such material beyond the scope of the copyright law requires the prior
                written consent of its respective author or creator.
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-parchment-dark/20">
            <p className="text-sm text-muted-foreground text-center">
              For more information, visit{" "}
              <a
                href="https://de.chessbase.com/pages/content/en/legal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ChessBase Legal Notice
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
