import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';

export function EditingTimelinePage() {
  useEffect(() => {
    updatePageMeta(
      'How Long Does Wedding Video Editing Take? | 12-Week Delivery Timeline',
      'Wedding film editing typically takes 12 weeks for delivery. Learn about the wedding videography editing process, turnaround times, peak season considerations, and why quality editing requires time.',
      'wedding video editing timeline, how long wedding video editing, wedding film delivery time, wedding videography turnaround, 12 weeks wedding video, video editing process wedding',
      'https://www.chrisjfilms.com/how-long-does-wedding-video-editing-take'
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
            How Long Does Wedding Video Editing Take?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                For me, it's up to 12 weeks.
              </p>

              <p>
                I know waiting isn't easy, especially when the day flies by and you just want to see it again. But editing a wedding film isn't something I rush, and honestly, it shouldn't be.
              </p>

              <p>
                After a wedding, I sit down with hours of footage. Not just the obvious bits — everything. The small reactions, background moments, the stuff you didn't see happening. I watch it all back, properly. That takes time on its own.
              </p>

              <p>
                Then it's shaping it. Choosing the right moments, the right pace, matching it to music, letting certain parts breathe instead of cutting too fast. Every wedding feels different, so each film is built from scratch. No templates, no "copy and paste" structure.
              </p>

              <p>
                During peak season I'm filming most weekends, so there's a queue of real weddings, real people, real stories waiting to be edited. I work through them carefully, one by one. I'd rather deliver something that still hits you years from now than send something quick that feels thrown together.
              </p>

              <p>
                Quieter months can sometimes be a bit faster, but I always tell couples to plan around the 12-week mark so expectations are clear from the start.
              </p>

              <p>
                From what I've seen, when couples finally sit down and watch it, the wait makes sense. It's not just a video of the day — it's the closest you'll get to stepping back into it. And that deserves the time it takes.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <h3 className="text-xl font-bold text-olive-600 mb-3">Related Articles</h3>
                <ul className="space-y-2 text-espresso-600/80 mb-6">
                  <li>• <a href="/cinematic-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">The Film</a> - 12-week delivery included</li>
                  <li>• <a href="/last-minute-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Last-Minute Package</a> - Quick turnaround options</li>
                  <li>• <a href="/how-far-in-advance-book-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">When to Book</a> - Planning timeline</li>
                </ul>
                <p className="text-espresso-600/80">
                  If you'd like to know more about what's included in each package or discuss your wedding plans, you can <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">send an enquiry here</a>.
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
