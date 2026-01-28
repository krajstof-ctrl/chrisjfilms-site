import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';

export function TravelPage() {
  useEffect(() => {
    updatePageMeta(
      'Wedding Videographer Travel | Serving Birmingham, Midlands & Beyond',
      'Wedding videographer serving Birmingham, Staffordshire, West Midlands, Worcestershire, and Warwickshire. Available for destination weddings UK-wide and abroad. Travel coverage areas explained.',
      'wedding videographer travel, destination wedding videographer, midlands wedding videographer, birmingham wedding video, wedding videographer coverage area, travel for weddings',
      'https://www.chrisjfilms.com/do-you-travel-for-weddings'
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
            Do You Travel for Weddings?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                Yeah, I do.
              </p>

              <p>
                I'm based around the Midlands — Staffordshire, Birmingham, Worcestershire, West Midlands — and I know those areas well. If your wedding's around here, travel is usually simple and already factored in.
              </p>

              <p>
                But I'm not tied to a postcode. If your day is somewhere else and you like my work, location isn't the thing that stops it.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                Weddings further away
              </h2>

              <p>
                I've filmed weddings in all sorts of places — barns, city venues, middle-of-nowhere countryside spots. The job stays the same: be there, stay aware, capture it properly.
              </p>

              <p>
                If your venue's further out, there can be extra costs, just to keep things realistic:
              </p>

              <ul className="list-none space-y-2 pl-6">
                <li>• Fuel and travel time</li>
                <li>• Parking if the venue charges</li>
                <li>• Accommodation if it's too far to safely drive back the same night</li>
              </ul>

              <p>
                All of that's talked through before booking. No surprise add-ons later.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                Busy season & long distance
              </h2>

              <p>
                One thing couples don't always see from this side — if a wedding is a long way from home during peak season, that travel can block the day before or after. Time I'd normally be filming another wedding.
              </p>

              <p>
                So sometimes, for far locations in busy months, the price can be a bit higher to cover that lost time. Not always, but it can happen. I'd always explain it clearly if it applies.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                On the day
              </h2>

              <p>
                I plan to arrive early. I build in buffer time. Traffic, roadworks, random delays — I factor all that in so you're not worrying about where I am.
              </p>

              <p>
                From your side, nothing changes. I show up calm and ready, same as any local wedding.
              </p>

              <p>
                At the end of the day, couples usually choose based on the work and how they feel about the person behind the camera. If that part feels right, a bit of travel is just logistics.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <p className="text-espresso-600/80">
                  If you'd like to check whether I can cover your wedding location, <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">send a quick enquiry here</a> with your date and venue.
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
