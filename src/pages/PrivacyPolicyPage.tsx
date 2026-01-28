import { ExternalLink } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-sand text-espresso">
      <header className="border-b border-olive-900/30 bg-sand/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <h1 className="text-2xl font-script text-olive-600">ChrisJFilms</h1>
          </a>
          <a
            href="/"
            className="text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
          >
            Back to Home
          </a>
        </div>
      </header>

      <section className="py-16 px-4 bg-gradient-to-b from-sand to-sand-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Privacy Policy
            </h1>
            <p className="text-espresso-600/80">
              Last updated: 21 January 2026
            </p>
          </div>

          <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-8">
            <div>
              <p className="text-espresso-700/90 leading-relaxed">
                This Privacy Policy explains how ChrisJFilms ("I", "me", "my") collects, uses, and protects your personal data when you visit or interact with <a href="https://www.chrisjfilms.com" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">www.chrisjfilms.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">1. Who I am</h2>
              <p className="text-espresso-700/90 leading-relaxed mb-4">
                ChrisJFilms is a wedding videography service operating in the United Kingdom.
                For data protection purposes, I am the Data Controller.
              </p>
              <div className="bg-sand border border-olive-900/30 rounded-lg p-4 space-y-2">
                <p className="text-espresso-700/90"><strong className="text-espresso">Contact:</strong></p>
                <p className="text-espresso-700/90">Email: <a href="mailto:chris@chrisjfilms.com" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">chris@chrisjfilms.com</a></p>
                <p className="text-espresso-700/90">Website: <a href="https://www.chrisjfilms.com" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">www.chrisjfilms.com</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">2. What data I collect</h2>
              <p className="text-espresso-700/90 leading-relaxed mb-4">
                I may collect and process the following personal data:
              </p>
              <ul className="space-y-2 text-espresso-700/90 ml-6">
                <li className="list-disc">Name</li>
                <li className="list-disc">Email address</li>
                <li className="list-disc">Phone number</li>
                <li className="list-disc">Wedding details (date, venue, location, preferences)</li>
                <li className="list-disc">Messages sent via contact forms, email, or social platforms</li>
                <li className="list-disc">Technical data: IP address, browser type, device, pages visited</li>
                <li className="list-disc">Marketing and analytics data (via cookies and tracking tools)</li>
              </ul>
              <p className="text-espresso-700/90 leading-relaxed mt-4">
                I do not knowingly collect data from children.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">3. How your data is collected</h2>
              <ul className="space-y-2 text-espresso-700/90 ml-6">
                <li className="list-disc">Contact forms on the website</li>
                <li className="list-disc">Direct email or messaging (WhatsApp, social media, etc.)</li>
                <li className="list-disc">Booking inquiries via third-party platforms (e.g. Bridebook, Hitched)</li>
                <li className="list-disc">Cookies and analytics tools</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">4. How your data is used</h2>
              <p className="text-espresso-700/90 leading-relaxed mb-4">
                Your data is used only when there is a lawful basis to do so, including:
              </p>
              <ul className="space-y-2 text-espresso-700/90 ml-6">
                <li className="list-disc">Responding to inquiries</li>
                <li className="list-disc">Providing quotes and services</li>
                <li className="list-disc">Managing bookings, contracts, and payments</li>
                <li className="list-disc">Delivering films and galleries</li>
                <li className="list-disc">Improving website performance and user experience</li>
                <li className="list-disc">Legal, accounting, and tax obligations</li>
              </ul>
              <p className="text-espresso-700/90 leading-relaxed mt-4 font-semibold">
                Your data is never sold.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">5. Legal basis for processing</h2>
              <p className="text-espresso-700/90 leading-relaxed mb-4">
                Under UK GDPR, data is processed based on:
              </p>
              <ul className="space-y-2 text-espresso-700/90 ml-6">
                <li className="list-disc"><strong className="text-espresso">Consent</strong> – when you contact me or opt into communication</li>
                <li className="list-disc"><strong className="text-espresso">Contract</strong> – to deliver agreed services</li>
                <li className="list-disc"><strong className="text-espresso">Legal obligation</strong> – invoicing, tax, record-keeping</li>
                <li className="list-disc"><strong className="text-espresso">Legitimate interest</strong> – running and improving my business</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">6. Data Sharing</h2>
              <p className="text-espresso-700/90 leading-relaxed mb-4">
                Your data may be shared only when necessary and strictly for the purpose of delivering my services. This may include sharing relevant information with:
              </p>
              <ul className="space-y-2 text-espresso-700/90 ml-6 mb-4">
                <li className="list-disc">Associated videographers working on your wedding day</li>
                <li className="list-disc">Photographers collaborating on joint photo/video coverage</li>
                <li className="list-disc">Wedding venues where coordination or access arrangements are required</li>
                <li className="list-disc">Online gallery providers (e.g. Vidflow, Pixieset)</li>
                <li className="list-disc">Accounting, invoicing, and payment providers</li>
                <li className="list-disc">Website hosting, analytics, and cloud storage services</li>
              </ul>
              <div className="bg-sand border border-olive-900/30 rounded-lg p-4 space-y-2">
                <p className="text-espresso-700/90 leading-relaxed">
                  Only the minimum required information is shared.
                  All parties are expected to handle your data securely, lawfully, and in line with UK GDPR requirements.
                  Your data is never sold or shared for marketing purposes outside your booking.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">7. Data storage and security</h2>
              <ul className="space-y-2 text-espresso-700/90 ml-6">
                <li className="list-disc">Data is stored securely using reputable, industry-standard services</li>
                <li className="list-disc">Access is limited to me only</li>
                <li className="list-disc">Reasonable technical and organisational measures are in place to prevent loss, misuse, or unauthorised access</li>
                <li className="list-disc">No system is 100% secure, but care is taken to minimise risk</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">8. How long data is kept</h2>
              <ul className="space-y-2 text-espresso-700/90 ml-6">
                <li className="list-disc"><strong className="text-espresso">Inquiry data:</strong> up to 24 months if no booking is made</li>
                <li className="list-disc"><strong className="text-espresso">Client data:</strong> up to 10 years (to match film storage and legal requirements)</li>
                <li className="list-disc"><strong className="text-espresso">Financial records:</strong> as required by UK law</li>
              </ul>
              <p className="text-espresso-700/90 leading-relaxed mt-4">
                Data is deleted when no longer necessary.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">9. Your rights</h2>
              <p className="text-espresso-700/90 leading-relaxed mb-4">
                Under UK GDPR, you have the right to:
              </p>
              <ul className="space-y-2 text-espresso-700/90 ml-6">
                <li className="list-disc">Access your personal data</li>
                <li className="list-disc">Request correction of inaccurate data</li>
                <li className="list-disc">Request deletion of your data</li>
                <li className="list-disc">Restrict or object to processing</li>
                <li className="list-disc">Request data portability</li>
                <li className="list-disc">Withdraw consent at any time</li>
              </ul>
              <p className="text-espresso-700/90 leading-relaxed mt-4">
                To exercise your rights, contact me at <a href="mailto:chris@chrisjfilms.com" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">chris@chrisjfilms.com</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">10. Cookies</h2>
              <p className="text-espresso-700/90 leading-relaxed mb-4">
                This website uses cookies to:
              </p>
              <ul className="space-y-2 text-espresso-700/90 ml-6">
                <li className="list-disc">Ensure basic functionality</li>
                <li className="list-disc">Analyse traffic and performance</li>
                <li className="list-disc">Improve user experience</li>
              </ul>
              <p className="text-espresso-700/90 leading-relaxed mt-4">
                You can control or disable cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">11. External links</h2>
              <p className="text-espresso-700/90 leading-relaxed">
                This website may contain links to external websites. I am not responsible for their privacy policies or practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-display font-bold text-olive-600 mb-4">12. Changes to this policy</h2>
              <p className="text-espresso-700/90 leading-relaxed">
                This Privacy Policy may be updated from time to time.
                The latest version will always be published on this page.
              </p>
            </div>

            <div className="border-t border-olive-900/30 pt-8">
              <p className="text-espresso-700/90 leading-relaxed">
                If you have any questions about this Privacy Policy or how your data is handled, contact me directly at <a href="mailto:chris@chrisjfilms.com" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">chris@chrisjfilms.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-sand border-t border-olive-900/30 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-espresso-600/60 text-sm">
            © 2026 ChrisJFilms. Professional Wedding Videographer in Birmingham, Staffordshire, West Midlands & Worcestershire.
          </p>
        </div>
      </footer>
    </div>
  );
}
