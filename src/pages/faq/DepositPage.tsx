import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';

export function DepositPage() {
  useEffect(() => {
    updatePageMeta(
      'Wedding Videography Deposit Guide | £200 Booking Fee Explained',
      'Learn about wedding videographer deposits: typically £200 to secure your date. Understand payment terms, balance schedules, and booking process for wedding videography in Birmingham & Midlands.',
      'wedding videographer deposit, wedding video booking fee, how much deposit wedding videographer, secure wedding date, wedding videography payment terms, wedding video balance payment',
      'https://www.chrisjfilms.com/wedding-videography-deposit'
    );
  }, []);

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
          <h1 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-6">
            What Is the Wedding Videography Deposit?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                For me, it's £200. Same for every package.
              </p>

              <p>
                That's what locks your date in my diary.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                Why there's a deposit at all
              </h2>

              <p>
                I can only film one wedding per day. Once you book me, that date's gone — I turn other couples away for it. The deposit is what makes it official on both sides. It says, "this is happening".
              </p>

              <p>
                It's not an extra charge. It just comes off your total package price.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                When the rest is paid
              </h2>

              <p>
                The remaining balance is due before the wedding. That way, everything's sorted before the day arrives and you're not thinking about payments while getting ready.
              </p>

              <p>
                I'll remind you — you won't have to remember it out of nowhere.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                What happens after you pay it
              </h2>

              <p>
                You get a contract, you send the deposit, and your date is secured. From there, we stay in touch as the wedding gets closer and go over the plan for the day.
              </p>

              <p>
                Simple as that.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                If plans change
              </h2>

              <p>
                Deposits are non-refundable because once the date's held, I've likely turned other work away. If your date moves and I'm free on the new one, I'll always try to transfer it over. Just depends on availability.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                How you can pay
              </h2>

              <p>
                Bank transfer is the usual. If you choose to pay the remaining balance in cash, I offer 10% off the balance — just something I do to keep it straightforward.
              </p>

              <p>
                At the end of the day, the deposit isn't about paperwork. It's just the step that moves things from "we're thinking about it" to "you're there, on the day, filming it."
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <h3 className="text-xl font-bold text-olive-600 mb-3">Related Articles</h3>
                <ul className="space-y-2 text-espresso-600/80 mb-6">
                  <li>• <a href="/how-far-in-advance-book-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">When to Book</a> - Booking timeline guidance</li>
                  <li>• <a href="/cinematic-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">View Packages</a> - See pricing and what's included</li>
                  <li>• <a href="/can-you-customise-wedding-videography-packages" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Custom Packages</a> - Tailor your booking</li>
                </ul>
                <p className="text-espresso-600/80">
                  If you'd like to check availability or get a quote for your wedding, <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">you can enquire here</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-sand border-t border-olive-900/30 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-espresso-600/60 text-sm mb-3">
            © 2026 ChrisJFilms. Professional Wedding Videographer in Birmingham, Staffordshire, West Midlands & Worcestershire.
          </p>
          <div className="text-espresso-700/60 text-xs">
            <a href="/privacy-policy" className="hover:text-olive-600 transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
