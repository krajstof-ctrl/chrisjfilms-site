import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';

export function MealRequirementPage() {
  useEffect(() => {
    updatePageMeta(
      'Do Wedding Videographers Need a Meal? | Vendor Meal Etiquette Guide',
      'Wedding videographer meal requirements explained. While not mandatory, vendor meals are appreciated for full-day coverage. Learn about wedding supplier feeding etiquette and best practices.',
      'wedding videographer meal requirement, do wedding videographers need food, vendor meal wedding, wedding supplier feeding, videographer meal etiquette, wedding vendor meals',
      'https://www.chrisjfilms.com/do-wedding-videographers-need-a-meal'
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
            Do Wedding Videographers Need a Meal?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                If I'm with you all day — yeah, a meal is really appreciated.
              </p>

              <p>
                Not in a fancy way. Just practically. Wedding days are long, and once things get going there's usually no chance to disappear and grab food somewhere else.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                Why it actually matters
              </h2>

              <p>
                I'm on my feet most of the day, carrying gear, staying switched on, listening for moments. By the time you're sitting down to eat, that's usually the only natural window for me to pause too — and it's just before speeches, which I need to be fully focused for.
              </p>

              <p>
                Food = energy = still sharp by the evening.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                What normally happens
              </h2>

              <p>
                Most venues offer "supplier meals" for photographers and videographers. It's usually a simpler version of the guest meal, served in a side room or quiet area. That's completely fine. I don't need a seat at a guest table — I'm working, not attending.
              </p>

              <p>
                I'll eat while guests are eating, so I'm not missing anything important.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                If it's not possible
              </h2>

              <p>
                It's not a dealbreaker. I'll just plan ahead and bring something with me. It just helps to know in advance so I can be prepared.
              </p>

              <p>
                Couples sometimes worry about this more than they need to. From my side, it's just about staying human and having the energy to do the job properly right through to the evening.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <p className="text-espresso-600/80">
                  If you have any other questions about what to expect on your wedding day, <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">feel free to get in touch</a>.
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
