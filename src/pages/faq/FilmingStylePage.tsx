import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';

export function FilmingStylePage() {
  useEffect(() => {
    updatePageMeta(
      'Wedding Videography Filming Style | Documentary & Cinematic Approach',
      'Natural, unobtrusive documentary wedding videography with cinematic editing. Learn about our filming approach: minimal direction, authentic moments, music-driven storytelling. Birmingham & Midlands wedding videographer.',
      'wedding videography filming style, documentary wedding video, cinematic wedding videography, unobtrusive wedding videographer, natural wedding filming, wedding video approach, candid wedding videography',
      'https://www.chrisjfilms.com/wedding-videography-filming-style'
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
            What's Your Wedding Videography Filming Style?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                Best way to say it — natural, close, but never in the way.
              </p>

              <p>
                I'm not there to stage your wedding or turn it into a production. Most of the day, I'm watching. Listening. Noticing the real stuff as it happens. The quick looks, the nerves before the ceremony, the way people laugh when they forget there's a camera around.
              </p>

              <p>
                That's the part that matters later.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                Real first, pretty second
              </h2>

              <p>
                My base is documentary. If something happens once, that's how it stays. I won't ask you to redo vows, repeat a hug, or recreate a moment that's already passed. Weddings don't have second takes, and I respect that.
              </p>

              <p>
                The cinematic side comes in with how I shoot and how I edit later. Framing, movement, sound, music — that's what turns real moments into a film you actually want to sit and watch, not just "footage of the day".
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                What I'm like on the day
              </h2>

              <p>
                Calm. Quiet. Aware.
              </p>

              <p>
                I move around without pulling attention. I work with what's happening instead of trying to control it. Most couples tell me afterwards they forgot I was even there half the time — which is ideal.
              </p>

              <p>
                During the ceremony, speeches, first dance — I'm locked in. No interruptions. No "can you just stand there again".
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                The only time I step in a bit
              </h2>

              <p>
                When you're already doing photos.
              </p>

              <p>
                During couple portraits or family/group photos, I might borrow you for a minute or two. Nothing staged, just small prompts — walking hand in hand, standing close, looking at each other. Sometimes I'll tell everyone to do a "fake laugh"… which usually turns into real laughing pretty fast. That's the stuff that looks great on video.
              </p>

              <p>
                Photos work with stillness. Video needs movement. So while the photographer is getting the posed shots, I grab those natural in-between bits that make the film feel alive.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                What I don't do
              </h2>

              <p>
                No interrupting important moments.<br />
                No turning your day into a performance.<br />
                No big lights in people's faces.
              </p>

              <p>
                Your wedding isn't a set. It's a day full of people you care about. I film it that way.
              </p>

              <p>
                At the end of it, the goal is simple — when you watch your film back, it feels like your day. Not a version of it. The real thing, just held onto properly.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <p className="text-espresso-600/80">
                  You can watch examples of my work on the <a href="/#films" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">films section</a> or <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">get in touch to discuss your wedding</a>.
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
