import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';

export function BookingAdvancePage() {
  useEffect(() => {
    updatePageMeta(
      'How Far in Advance to Book a Wedding Videographer? | Booking Guide',
      'When should you book a wedding videographer? Expert guide on booking timelines for wedding videography. Most couples book 12-18 months ahead for peak season. Learn the best time to secure your wedding videographer in Birmingham, Staffordshire & Midlands.',
      'when to book wedding videographer, how far in advance book videographer, wedding videographer booking timeline, when to hire wedding videographer, wedding planning timeline, book videographer in advance, midlands wedding videographer booking',
      'https://www.chrisjfilms.com/how-far-in-advance-book-wedding-videographer',
      'https://www.chrisjfilms.com/dsc06014.jpg'
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
            How Far in Advance Should You Book a Wedding Videographer?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                From my experience — earlier than you think.
              </p>

              <p>
                Couples usually start looking at venues first, then photographers, and video sometimes comes after. But dates don't wait. Good dates, especially summer Saturdays, can be gone 12–24 months ahead. I've had enquiries for the same day within hours of each other. Once it's booked, that's it. There's no second team of me.
              </p>

              <p>
                The thing people realise a bit later is this: you're not just booking "a service", you're booking a person. Someone you're comfortable having around all day, someone whose style you actually connect with. That takes a bit of time to find, and the ones you feel good about are usually the ones other couples feel good about too.
              </p>

              <p>
                If you already know you want a wedding film — something that keeps the voices, the atmosphere, the people as they were — then it makes sense to secure that sooner rather than later. You can figure out the finer details after. Packages, timelines, little extras… all that can be adjusted. The date can't.
              </p>

              <p>
                I've filmed weddings where couples booked two years ahead, and others who came to me last minute and got lucky because a date opened. But the calmer experience is always when it's sorted early. It's one less big thing sitting in the back of your mind.
              </p>

              <p>
                Simple rule from what I've seen over the years:<br />
                If the videographer feels right, and your date is set, don't wait around too long.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <h3 className="text-xl font-bold text-olive-600 mb-3">Related Articles</h3>
                <ul className="space-y-2 text-espresso-600/80 mb-6">
                  <li>• <a href="/last-minute-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Last-Minute Wedding Package</a> - For weddings within 12 weeks</li>
                  <li>• <a href="/cinematic-wedding-videographer" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">View Our Packages</a> - Standard, Budget & Ultimate options</li>
                  <li>• <a href="/wedding-videography-deposit" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Deposit Information</a> - Learn about securing your date</li>
                </ul>
                <p className="text-espresso-600/80">
                  If you'd like to check availability for your wedding date or discuss which package might suit you best, you can <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">get in touch here</a> or <a href="/#packages" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">view the packages</a>.
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
