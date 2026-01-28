import { useEffect } from 'react';
import { Camera, Eye, Heart } from 'lucide-react';

export function CalebProfile() {
  useEffect(() => {
    document.title = 'Caleb - Wedding Videographer | ChrisJFilms';
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
                src="/screenshot_2026-01-24_163717.png"
                alt="Caleb - Wedding Videographer"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mb-4">
              Caleb
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
                Caleb is a trusted wedding videographer I work with on Capture Only coverage across the Midlands. He is experienced, professional, and highly consistent, delivering reliable footage that forms a strong foundation for the final films.
              </p>
              <p>
                He works calmly and discreetly throughout the day, allowing moments to unfold naturally while ensuring nothing important is missed. His approach suits couples who value thorough, unobtrusive documentation of their wedding.
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
                Caleb films weddings with a documentary-first mindset. His focus is on clarity, structure, and completeness — capturing events as they happen, framed cleanly and recorded properly.
              </p>
              <p>
                He avoids unnecessary direction or stylised intervention. Instead, he prioritises accuracy and continuity, producing footage that reflects the day honestly and is easy to revisit years later.
              </p>
              <p>
                This style is particularly well suited to couples who want their wedding recorded fully, without disruption or performance.
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
                Caleb moves through a wedding day with quiet confidence and clear intent. He understands where to be, when to step back, and how to work alongside other suppliers without drawing attention.
              </p>
              <p>
                Having been trained and working to the same standards I expect across all bookings, he delivers a consistent level of professionalism and care. Each wedding is approached with the same focus, regardless of scale or setting.
              </p>
              <p>
                Couples can expect dependable coverage, a calm presence, and footage that is captured properly from start to finish.
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
