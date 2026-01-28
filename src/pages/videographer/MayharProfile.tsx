import { useEffect } from 'react';
import { Camera, Eye, Heart } from 'lucide-react';

export function MayharProfile() {
  useEffect(() => {
    document.title = 'Mahyar - Wedding Videographer | ChrisJFilms';
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
                src="/469902775_1046653897215255_5126695765329927438_n.jpg"
                alt="Mahyar - Wedding Videographer"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mb-4">
              Mahyar
            </h1>
            <p className="text-xl text-espresso-600/80">Wedding Videographer</p>
          </div>

          <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-olive-600" />
              <h2 className="text-3xl font-display font-bold text-espresso">Overview</h2>
            </div>
            <div className="text-espresso-700/90 space-y-4 leading-relaxed text-lg">
              <p>
                Mahyar is a wedding videographer I work with on Capture Only coverage across the Midlands. He is composed, highly attentive, and exceptionally unobtrusive, making him well suited to weddings where couples want moments captured naturally, without interference.
              </p>
              <p>
                He has a strong instinct for timing and positioning, allowing him to document key moments without altering the flow of the day. His presence is quiet and controlled, ensuring events unfold exactly as they should.
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
                Mahyar works with a purely documentary approach. His focus is on completeness, clarity, and accuracy — capturing what happens as it happens, without direction or staging.
              </p>
              <p>
                He avoids unnecessary movement or creative intervention. Instead, he prioritises clean framing, stable shots, and full coverage of important events. This allows the footage to reflect the day honestly, without distraction or performance.
              </p>
              <p>
                His style is ideal for couples who value authenticity and want their wedding recorded without being guided, posed, or interrupted.
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
                Mahyar approaches each wedding with professionalism and restraint. He observes carefully, moves quietly, and positions himself in a way that allows moments to happen naturally.
              </p>
              <p>
                Having been trained to work to the same standards expected across all bookings, he understands the importance of consistency, preparation, and awareness throughout the day. He adapts smoothly to changes in timing or structure while maintaining thorough coverage.
              </p>
              <p>
                Couples can expect a calm presence, discreet filming, and footage that captures what matters most — without altering the moments themselves.
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
