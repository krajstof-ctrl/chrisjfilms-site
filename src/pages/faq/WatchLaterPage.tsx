import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';
import { addStructuredData, createArticleStructuredData, createBreadcrumbStructuredData } from '../../lib/structuredData';

export function WatchLaterPage() {
  useEffect(() => {
    updatePageMeta(
      'Will You Actually Watch Your Wedding Video Years Later? | ChrisJFilms',
      'Do people really watch wedding videos years later? Yes. Wedding films become more valuable as time passes. Discover why couples watch their wedding videos more than they expect, and how it becomes a cherished family heirloom.',
      'watch wedding video later, wedding video value over time, will i watch wedding film, wedding video worth it, wedding videography importance, preserve wedding memories, midlands wedding videographer',
      'https://www.chrisjfilms.com/will-you-watch-wedding-video-later',
      'https://www.chrisjfilms.com/dsc06014.jpg'
    );

    addStructuredData(createArticleStructuredData(
      'Will We Actually Watch Our Wedding Film Years Later?',
      'Wedding films become more valuable over time. Learn why couples watch their wedding videos years later and how they become cherished family memories.',
      'Chris Jezierski',
      '2026-01-27',
      '2026-01-27',
      'https://www.chrisjfilms.com/will-you-watch-wedding-video-later',
      'https://www.chrisjfilms.com/dsc06014.jpg'
    ));

    addStructuredData(createBreadcrumbStructuredData([
      { name: 'Home', url: 'https://www.chrisjfilms.com' },
      { name: 'Will You Watch Your Wedding Video Later', url: 'https://www.chrisjfilms.com/will-you-watch-wedding-video-later' }
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
            Will We Actually Watch It Years Later?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                That's kind of the whole point.
              </p>

              <p>
                Right after the wedding, you'll watch it a lot. You'll spot things you missed, hear bits of speeches you didn't catch, see how the day looked from the outside.
              </p>

              <p>
                Then life gets busy. Work, kids, normal stuff. You won't watch it every month — and you don't need to.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                When it really starts to matter
              </h2>

              <p>
                A few years go by and you put it on again. Maybe on an anniversary, maybe just because. And it hits differently. You notice people more. The way they looked. The way they sounded.
              </p>

              <p>
                If you've got kids by then, they'll want to see it. They'll ask who everyone is. They'll laugh at how you looked. It becomes part of your family story without you even planning it.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                Later on
              </h2>

              <p>
                This is the bit couples don't think about at the start.
              </p>

              <p>
                People change. Some people who were there won't always be. Voices you heard every week become voices you can't hear anymore — except here.
              </p>

              <p>
                Photos show you how things looked. Video lets you hear them, see them move, feel the room again. That's the difference.
              </p>

              <p>
                I've had couples message years later just to say thanks. Not because they watch it all the time, but because when they do, they're glad it exists.
              </p>

              <p>
                You don't book this to watch it constantly. You book it so that when the time comes and you do press play, it still means everything.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <h3 className="text-xl font-bold text-olive-600 mb-3">Related Articles</h3>
                <ul className="space-y-2 text-espresso-600/80 mb-6">
                  <li>• <a href="/why-have-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Why Have a Wedding Videographer at All?</a> - Understanding the importance of wedding video</li>
                  <li>• <a href="/how-long-does-wedding-video-editing-take" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">How Long Until We Get the Films?</a> - Timeline for delivery</li>
                  <li>• <a href="/#packages" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">View Packages</a> - See what's included</li>
                </ul>
                <p className="text-espresso-600/80">
                  If you'd like to discuss whether wedding videography is right for you, <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">get in touch</a>.
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
