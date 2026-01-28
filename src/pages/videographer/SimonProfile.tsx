import { useEffect } from 'react';
import { Camera, Eye, Heart } from 'lucide-react';

export function SimonProfile() {
  useEffect(() => {
    document.title = 'Simon - Wedding Videographer | ChrisJFilms';
  }, []);

  return (
    <div className="min-h-screen bg-sand text-espresso">
      <header className="border-b border-olive-900/30 bg-sand/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <h1 className="text-2xl font-script text-olive-600">ChrisJFilms</h1>
          </a>
          <a
            href="/budget-wedding-videographer"
            className="text-espresso-600 hover:text-olive-600 transition font-semibold underline decoration-espresso-600/40"
          >
            Back to Capture Only
          </a>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-b from-sand to-sand-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-48 h-48 mx-auto mb-8 bg-sand-100 border-4 border-olive-900/30 rounded-full overflow-hidden">
              <img
                src="/dsc06014.jpg"
                alt="Simon - Wedding Videographer"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mb-4">
              Simon
            </h1>
            <p className="text-xl text-espresso-600/80">Wedding Videographer</p>
          </div>

          <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-olive-600" />
              <h2 className="text-3xl font-display font-bold text-espresso">About</h2>
            </div>
            <div className="text-espresso-700/90 space-y-4 leading-relaxed text-lg">
              <p>
                Simon is one of the wedding videographers I work with on Capture Only coverage across the Midlands. He brings experience, focus, and a composed presence to every wedding, ensuring the day is documented thoroughly and without disruption.
              </p>
              <p>
                He understands the rhythm of a wedding day and knows how to anticipate moments before they happen. His approach allows events to unfold naturally while making sure nothing important is missed.
              </p>
            </div>
          </div>

          <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-olive-600" />
              <h2 className="text-3xl font-display font-bold text-espresso">Filming Style</h2>
            </div>
            <div className="text-espresso-700/90 space-y-4 leading-relaxed text-lg">
              <p>
                Simon films with a clean, documentary-led approach, prioritising clarity and continuity over unnecessary movement or staged moments. His focus is on capturing weddings as they happen, with steady framing and an awareness of what matters most throughout the day.
              </p>
              <p>
                The footage he delivers is reliable, complete, and easy to watch — an accurate record of the wedding, captured with care and intention.
              </p>
              <p>
                This style works especially well for couples who want their day recorded properly, without being directed or interrupted.
              </p>
            </div>
          </div>

          <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-12">
            <div className="flex items-center gap-3 mb-6">
              <Camera className="w-6 h-6 text-olive-600" />
              <h2 className="text-3xl font-display font-bold text-espresso">Working Approach</h2>
            </div>
            <div className="text-espresso-700/90 space-y-4 leading-relaxed text-lg">
              <p>
                Simon works quietly and respectfully, blending into the background while remaining fully aware of the flow of the day. He doesn't interfere, doesn't over-direct, and doesn't draw attention to himself.
              </p>
              <p>
                Having worked closely with me for years and sharing the same expectations around coverage and professionalism, he understands the standard required on every booking. He approaches each wedding with consistency, focus, and genuine care for the responsibility he's been given.
              </p>
              <p>
                Couples can expect a calm presence, dependable coverage, and footage that reflects their wedding day clearly and honestly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-sand border-t border-olive-900/30 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-espresso-600/60 text-sm mb-3">
            © 2026 ChrisJFilms. Wedding Videographer in Birmingham, Staffordshire, West Midlands & Worcestershire.
          </p>
          <div className="text-espresso-700/60 text-xs">
            <a href="/privacy-policy" className="hover:text-olive-600 transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
