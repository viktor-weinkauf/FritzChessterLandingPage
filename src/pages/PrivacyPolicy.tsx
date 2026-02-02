import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Cookie, Eye, Lock, Mail } from "lucide-react";

const PrivacyPolicy = () => {
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
          Privacy <span className="text-primary">Policy</span>
        </h1>

        <div className="space-y-8 font-fredoka">
          {/* Data Controller */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <h2 className="font-lobster text-2xl text-foreground">1. Data Controller</h2>
            </div>
            <div className="text-muted-foreground space-y-2">
              <p className="font-semibold text-foreground">ChessBase GmbH</p>
              <p>Osterbekstr. 90a</p>
              <p>22083 Hamburg, Germany</p>
              <p className="mt-3">
                <Mail className="w-4 h-4 inline mr-2 text-primary" />
                <a href="mailto:info@chessbase.com" className="text-primary hover:underline">
                  info@chessbase.com
                </a>
              </p>
              <p>Phone: (+49) 40 63 90 60-0</p>
            </div>
          </section>

          {/* Data Protection Framework */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="font-lobster text-2xl text-foreground">2. Data Protection Framework</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                We process your data in accordance with the General Data Protection Regulation (GDPR) and
                applicable German data protection laws. Personal data includes any information that can be
                used to identify you, such as your name, email address, or IP address.
              </p>
            </div>
          </section>

          {/* Data Collection */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="font-lobster text-2xl text-foreground">3. Data Collection</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">Website Visits:</strong> When you visit our website,
                IP addresses are temporarily logged for security purposes and then overwritten. We do not
                use this data to draw conclusions about you as a person.
              </p>
              <p>
                <strong className="text-foreground">Contact Forms:</strong> Data collected through contact
                inquiries is used solely to respond to your request and is deleted after resolution.
              </p>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-primary" />
              <h2 className="font-lobster text-2xl text-foreground">4. Cookies</h2>
            </div>
            <div className="text-muted-foreground space-y-4">
              <p>This website uses the following types of cookies:</p>

              <div className="bg-white/50 rounded-xl p-4 space-y-3">
                <div>
                  <p className="font-semibold text-foreground">Technically Necessary Cookies</p>
                  <p className="text-sm">Enable basic site functionality such as navigation and access to secure areas.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Analysis Cookies</p>
                  <p className="text-sm">Help us understand how visitors interact with our website to improve usability. We use Google Analytics for this purpose.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Marketing Cookies</p>
                  <p className="text-sm">Used to track visitors across websites for advertising purposes. This includes Meta Pixel (Facebook) for measuring advertising effectiveness.</p>
                </div>
              </div>

              <p>
                You can manage your cookie preferences through our cookie consent banner. Marketing and
                analysis cookies are only activated after you provide consent.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">5. Third-Party Services</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                <strong className="text-foreground">Google Analytics:</strong> We use Google Analytics to
                analyze website usage patterns. This service may transfer data to Google servers. You can
                opt out via our cookie consent settings.
              </p>
              <p>
                <strong className="text-foreground">Meta Pixel (Facebook):</strong> We use Meta Pixel to
                measure the effectiveness of our advertising campaigns and to provide relevant content.
                This is only activated with your consent.
              </p>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">6. Data Security</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                We employ SSL encryption (Secure Socket Layer) with the highest level of encoding
                (256-bit or 128-bit v3) to protect your data during transmission.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">7. Your Rights Under GDPR</h2>
            <div className="text-muted-foreground">
              <p className="mb-4">Under the General Data Protection Regulation, you have the following rights:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Right to Access</strong> (Art. 15) - Request information about your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Right to Rectification</strong> (Art. 16) - Correct inaccurate personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Right to Erasure</strong> (Art. 17) - Request deletion of your personal data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Right to Restrict Processing</strong> (Art. 18) - Limit how we use your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Right to Data Portability</strong> (Art. 20) - Receive your data in a structured format</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Right to Withdraw Consent</strong> (Art. 7(3)) - Withdraw consent at any time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Right to Object</strong> (Art. 21) - Object to processing based on legitimate interests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span><strong className="text-foreground">Right to Lodge Complaints</strong> (Art. 77) - File complaints with supervisory authorities</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Contact for Privacy */}
          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">8. Contact for Privacy Inquiries</h2>
            <div className="text-muted-foreground space-y-4">
              <p>
                For any questions regarding your personal data or to exercise your rights, please contact us at:
              </p>
              <div className="bg-white/50 rounded-xl p-4">
                <p className="font-semibold text-foreground">ChessBase GmbH</p>
                <p>Osterbekstr. 90a, 22083 Hamburg, Germany</p>
                <p>Email: <a href="mailto:info@chessbase.com" className="text-primary hover:underline">info@chessbase.com</a></p>
                <p>Phone: (+49) 40 63 90 60-0</p>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="font-lobster text-2xl text-foreground mb-4">9. Policy Updates</h2>
            <div className="text-muted-foreground">
              <p>
                We may update this privacy policy from time to time. Any changes will be posted on this page.
                We encourage you to review this policy periodically.
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-parchment-dark/20">
            <p className="text-sm text-muted-foreground text-center">
              For the complete ChessBase privacy policy, visit{" "}
              <a
                href="https://de.chessbase.com/pages/content/en/security"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ChessBase Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
