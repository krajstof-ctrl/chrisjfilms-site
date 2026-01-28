import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';
import { addStructuredData, createArticleStructuredData, createBreadcrumbStructuredData } from '../../lib/structuredData';

export function DiscountsPage() {
  useEffect(() => {
    updatePageMeta(
      'Wedding Videography Discounts | Off-Season & Midweek Savings | ChrisJFilms',
      'Save £100 on wedding videography packages: off-season weddings (Nov-Mar), midweek dates (Mon-Thu), or cash payment discounts. Professional Midlands wedding videographer with flexible pricing options.',
      'wedding videography discounts, off season wedding video pricing, midweek wedding videographer discount, wedding video cash discount, affordable wedding videography midlands, reduced rate wedding films',
      'https://www.chrisjfilms.com/wedding-videography-discounts-off-season-midweek'
    );

    addStructuredData(createArticleStructuredData(
      'Do You Offer Wedding Videography Discounts?',
      'Learn about wedding videography discount opportunities for off-season weddings, midweek dates, and cash payments. Save £100 on professional wedding film packages.',
      'Chris Jezierski',
      '2026-01-27',
      '2026-01-27',
      'https://www.chrisjfilms.com/wedding-videography-discounts-off-season-midweek'
    ));

    addStructuredData(createBreadcrumbStructuredData([
      { name: 'Home', url: 'https://www.chrisjfilms.com' },
      { name: 'Wedding Videography Discounts', url: 'https://www.chrisjfilms.com/wedding-videography-discounts-off-season-midweek' }
    ]));
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
            Do You Offer Wedding Videography Discounts?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                Yeah, in some situations I do.
              </p>

              <p>
                Not big flashy "sales", just small adjustments when the timing makes sense from my side.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                When a lower rate can apply
              </h2>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-espresso mb-1">Off-season weddings (November–March)</p>
                  <p>
                    These months are naturally quieter for weddings, so I sometimes offer £100 off packages booked in this period.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-espresso mb-1">Mid-week weddings (Monday–Thursday)</p>
                  <p>
                    Weekdays don't block peak weekend dates, so they can also qualify for £100 off.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-espresso mb-1">Cash payment on the day (remaining balance)</p>
                  <p>
                    If the final balance is paid in cash on the wedding day, I offer £100 off as well.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                Why this works
              </h2>

              <p>
                Weddings are very seasonal. Summer Saturdays go first, sometimes years ahead. Quieter dates are easier for me to take on, so I pass a bit of that flexibility back to couples when I can.
              </p>

              <p>
                It's not always automatic, but if your date fits one of these, just mention it when you enquire and I'll confirm.
              </p>

              <p>
                At the end of the day, the filming, care, and delivery stay exactly the same — this only changes the price, not how your wedding is covered.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <h3 className="text-xl font-bold text-olive-600 mb-3">Related Articles</h3>
                <ul className="space-y-2 text-espresso-600/80 mb-6">
                  <li>• <a href="/#packages" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">View Packages</a> - See pricing and what's included</li>
                  <li>• <a href="/wedding-videography-deposit" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Deposit Information</a> - Booking process</li>
                  <li>• <a href="/how-far-in-advance-book-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">When to Book</a> - Booking timeline guidance</li>
                </ul>
                <p className="text-espresso-600/80">
                  If you'd like to check whether your date qualifies for a discount, <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">get in touch</a>.
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
