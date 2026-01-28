import { useEffect } from 'react';
import { Camera, Eye, Heart } from 'lucide-react';

export function PeteDavisProfile() {
  useEffect(() => {
    document.title = 'Pete - Wedding Photographer | ChrisJFilms';
  }, []);

  return (
    <div className="min-h-screen bg-sand text-espresso">
      <header className="border-b border-olive-900/30 bg-sand/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <h1 className="text-2xl font-script text-olive-600">ChrisJFilms</h1>
          </a>
          <a
            href="/wedding-videographer-and-photographer"
            className="text-espresso-600 hover:text-olive-600 transition font-semibold underline decoration-espresso-600/40"
          >
            Back to The Record
          </a>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-b from-sand to-sand-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-48 h-48 mx-auto mb-8 bg-sand-100 border-4 border-olive-900/30 rounded-full overflow-hidden">
              <img
                src="/whatsapp_image_2026-01-24_at_18.01.30 copy.jpeg"
                alt="Pete - Wedding Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mb-4">
              Pete
            </h1>
            <p className="text-xl text-espresso-600/80">Wedding Photographer</p>
          </div>

          <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-olive-600" />
              <h2 className="text-3xl font-display font-bold text-espresso">Overview</h2>
            </div>
            <div className="text-espresso-700/90 space-y-4 leading-relaxed text-lg">
              <p>
                Pete is the photographer I work with on The Record package. He's calm under pressure, exceptionally organised, and one of the most reliable people you could have alongside you on a wedding day.
              </p>
              <p>
                He has a direct but unobtrusive way of working — confident when guidance is needed, invisible when it isn't. Couples feel at ease around him quickly, helped along by a steady sense of humour and plenty of easy-going banter throughout the day.
              </p>
              <p>
                He's also the most punctual person I know. If something is scheduled for a certain time, Pete will be there before it happens — not after.
              </p>
            </div>
          </div>

          <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-12 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Eye className="w-6 h-6 text-olive-600" />
              <h2 className="text-3xl font-display font-bold text-espresso">Photography Style</h2>
            </div>
            <div className="text-espresso-700/90 space-y-4 leading-relaxed text-lg">
              <p>
                Pete's photography style is clean, intentional, and well-timed. He has a strong instinct for moments and knows exactly when to step in and when to let things unfold naturally.
              </p>
              <p>
                During couple sessions, he gives clear, relaxed direction that never feels forced. He keeps things moving, keeps it light, and gets what's needed without dragging the moment out. The result is photography that feels natural, composed, and genuinely reflective of the couple.
              </p>
              <p>
                Across the rest of the day, his approach is discreet and observational, allowing real moments to happen while making sure nothing important is missed.
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
                Pete works with precision and calm, even when the day gets busy. He reads timelines instinctively, manages time effortlessly, and keeps things running smoothly without adding pressure.
              </p>
              <p>
                He's also very good with people. Clients, guests, suppliers — everyone relaxes around him. There's always room for a bit of humour, a quick joke, and a laugh when it helps take the edge off.
              </p>
              <p>
                Somewhere during the day, you'll probably spot him enjoying a well-earned break with a large mug of tea before quietly getting back to it — exactly on time.
              </p>
              <p>
                Couples can expect clear direction when it matters, space when it doesn't, and photography that's handled properly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-sand border-t border-olive-900/30 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-espresso-600/60 text-sm mb-3">
            © 2026 ChrisJFilms. Wedding Videographer & Photographer in Birmingham, Staffordshire, West Midlands & Worcestershire.
          </p>
          <div className="text-espresso-700/60 text-xs">
            <a href="/privacy-policy" className="hover:text-olive-600 transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
