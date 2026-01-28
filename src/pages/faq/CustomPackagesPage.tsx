import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';

export function CustomPackagesPage() {
  useEffect(() => {
    updatePageMeta(
      'Can You Customize Wedding Videography Packages? | Custom Options',
      'Yes! Customize your wedding videography package to suit your needs. Adjust coverage time, add extras like second videographer, or create bespoke filming options. Flexible wedding video packages for Birmingham & Midlands.',
      'custom wedding videography package, bespoke wedding video, customizable wedding package, tailor made wedding videography, flexible wedding video options, personalized wedding filming',
      'https://www.chrisjfilms.com/can-you-customise-wedding-videography-packages'
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
            Can You Customise Wedding Videography Packages?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                Yeah, most of the time.
              </p>

              <p>
                The packages are there because after filming loads of weddings, you start to see what people usually need. But no two days run the same, and sometimes a couple needs things slightly different. That's normal.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                What we can usually tweak
              </h2>

              <p>
                Time is the big one. If your day starts early, runs late, or you want more of the evening, that can be added. Same if your plans are smaller and you don't need as long.
              </p>

              <p>
                Extras are easy too. Second shooter, extra films, longer edits, drone when possible — those bits can be bolted on without drama.
              </p>

              <p>
                Sometimes couples tell me, "Can you focus a bit more on family?" or "Speeches are really important to us." That's helpful to know. I'm already watching for those things, but it gives me a nudge on what matters most to you.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                What doesn't really change
              </h2>

              <p>
                The way I film.
              </p>

              <p>
                The calm, documentary approach. The way I edit. The feel of the films. That's the core of what I do and the reason people book me in the first place. If someone wants a totally different style, I'd rather be honest than pretend.
              </p>

              <p>
                Delivery time is also usually the same. I work to the same standard for every couple, so I don't rush one and not another.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                How it works in real life
              </h2>

              <p>
                Usually it's just a conversation. You tell me how your day looks and what matters most. I'll tell you what makes sense, based on experience, not upselling.
              </p>

              <p>
                Sometimes couples think they need loads of extras and actually don't. Other times, a small addition makes a big difference. I've seen both.
              </p>

              <p>
                At the end of the day, the goal isn't to build some massive package. It's to make sure your day is properly covered and the parts that matter to you are looked after. If that needs a small tweak, we do it. If the standard setup already fits, even better.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <h3 className="text-xl font-bold text-olive-600 mb-3">Related Articles</h3>
                <ul className="space-y-2 text-espresso-600/80 mb-6">
                  <li>• <a href="/cinematic-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">The Film</a> - Our most popular option</li>
                  <li>• <a href="/wedding-videographer-and-photographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">The Record</a> - Photography & videography combined</li>
                  <li>• <a href="/wedding-videography-filming-style" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Filming Style Guide</a> - Understand our approach</li>
                </ul>
                <p className="text-espresso-600/80">
                  To discuss customising a package for your wedding, <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">get in touch here</a> or take a look at the <a href="/#packages" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">standard packages</a> as a starting point.
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
