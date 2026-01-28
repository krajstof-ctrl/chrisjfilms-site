import { useState, useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { updatePageMeta } from '../lib/seo';
import { addStructuredData, createBreadcrumbStructuredData } from '../lib/structuredData';

export function LastMinutePackagePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updatePageMeta(
      'Last-Minute Wedding Videography £1,500 | Short Notice Midlands Videographer',
      'Last-minute wedding videography from £1,500. Short-notice availability for weddings within 16 weeks. Professional cinematic coverage when plans change. Same quality filming, tighter timeline. Serving Birmingham, Staffordshire & West Midlands.',
      'last minute wedding videographer, short notice wedding video, emergency wedding videographer, quick wedding booking, last minute wedding midlands, birmingham last minute videographer, staffordshire urgent wedding video, 16 weeks wedding videographer',
      'https://www.chrisjfilms.com/last-minute-wedding-videographer',
      'https://www.chrisjfilms.com/dsc06014.jpg',
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Last-Minute Wedding Videography',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'ChrisJFilms Wedding Films',
          'url': 'https://www.chrisjfilms.com'
        },
        'description': 'Professional wedding videography for last-minute bookings and short-notice weddings within 16 weeks. Same quality filming with discounts available for off-season, midweek, or cash payments.',
        'areaServed': ['Birmingham', 'Staffordshire', 'West Midlands', 'Worcestershire'],
        'offers': {
          '@type': 'Offer',
          'price': '1500',
          'priceCurrency': 'GBP',
          'availability': 'https://schema.org/LimitedAvailability',
          'priceValidUntil': '2026-12-31'
        }
      }
    );

    addStructuredData(createBreadcrumbStructuredData([
      { name: 'Home', url: 'https://www.chrisjfilms.com' },
      { name: 'Last-Minute Wedding Videography', url: 'https://www.chrisjfilms.com/last-minute-wedding-videographer' }
    ]));
  }, []);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-sand text-espresso">
      <header className="border-b border-olive-900/30 bg-sand/95 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 group">
            <h1 className="text-2xl font-script text-olive-600">ChrisJFilms</h1>
          </a>
          <button
            onClick={scrollToContact}
            className="border-2 border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-sand px-6 py-2.5 rounded-lg font-semibold transition"
          >
            Check Availability
          </button>
        </div>
      </header>

      <section className="py-16 px-4 bg-sand">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 rounded-xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              controlsList="nodownload"
              disablePictureInPicture
              className="w-full"
              aria-label="Last-minute wedding videography sample"
            >
              <source src="https://assets.chrisjfilms.com/VIDEOS/lastminute.mp4" type="video/mp4" />
            </video>
          </div>

          <h1 className="text-5xl md:text-6xl font-display font-bold text-espresso mb-8 leading-tight">
            Last-Minute Wedding Videographer
          </h1>

          <div className="prose prose-invert prose-lg max-w-none mb-16 space-y-6 text-espresso-700/90 leading-relaxed text-xl">
            <p>
              Sometimes weddings come together fast.<br />
              Sometimes plans change.<br />
              Sometimes you realise late on that you don't want the day to just… disappear after it's over.
            </p>

            <p>
              I occasionally have short-notice availability for couples looking for a last-minute wedding videographer. When that happens, I open a simple, ready-to-go filming option for weddings happening soon.
            </p>

            <p>
              It's not a "budget" version and it's not rushed work. It's the same care on the day — just a tighter setup for couples who need to move quickly.
            </p>

            <p>
              Because even if the booking is last minute, the day itself still only happens once. And once it's gone, memories do what memories do… they fade around the edges.
            </p>

            <p className="font-semibold text-espresso">
              This is the safety net for that.
            </p>
          </div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-12">
            What's Included
          </h2>

          <div className="bg-sand-100 border border-olive-900/30 rounded-xl overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-display font-bold text-olive-600 mb-2">Last-Minute Availability</h3>
              <div className="mb-6">
                <div className="text-5xl font-bold text-olive-600 mb-1">£1,500</div>
                <div className="text-sm text-espresso-600/70">£200 deposit</div>
              </div>

              <div className="mb-8">
                <ul className="space-y-3 text-espresso-700/80">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                    <span>Up to 10 hours of coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                    <span>1 videographer (Chris)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                    <span>Filmed in 4K</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                    <span>Cinematic highlight film</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                    <span>Full ceremony film</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                    <span>Full speeches film</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                    <span>First dance film</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                    <span>Online delivery of finished films</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-olive-900/30 pt-6 mb-8">
                <ul className="space-y-2 text-espresso-600/50 text-sm">
                  <li>– Limited availability</li>
                  <li>– Fixed scope</li>
                  <li>– Short-notice bookings only (not more than 16 weeks in advance)</li>
                </ul>
              </div>

              <div className="space-y-3">
                <button
                  onClick={scrollToContact}
                  className="w-full border-2 border-olive-600 text-olive-600 hover:bg-olive-600 hover:text-sand py-3 rounded-lg font-semibold transition"
                >
                  Check Availability
                </button>
                <p className="text-espresso-600/60 text-sm text-center">
                  Availability is limited and depends on date and location.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-sand-100 border border-olive-900/30 rounded-xl">
            <h3 className="text-2xl font-display font-bold text-olive-600 mb-6">
              When a lower rate can apply
            </h3>

            <div className="space-y-6 text-espresso-700/90 leading-relaxed">
              <div>
                <p className="font-semibold text-espresso mb-2">Off-season weddings (November–March)</p>
                <p>
                  These months are naturally quieter for weddings, so I sometimes offer £100 off packages booked in this period.
                </p>
              </div>

              <div>
                <p className="font-semibold text-espresso mb-2">Mid-week weddings (Monday–Thursday)</p>
                <p>
                  Weekdays don't block peak weekend dates, so they can also qualify for £100 off.
                </p>
              </div>

              <div>
                <p className="font-semibold text-espresso mb-2">Cash payment on the day (remaining balance)</p>
                <p>
                  If the final balance is paid in cash on the wedding day, I offer £100 off as well.
                </p>
              </div>

              <p className="mt-6 text-espresso-700/70 text-sm border-t border-olive-900/20 pt-6">
                The filming, care, and delivery stay exactly the same — this only changes the price, not how your wedding is covered.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-sand-100/50 border border-olive-900/20 rounded-lg">
            <p className="text-espresso-700/70 leading-relaxed">
              This option exists for couples who realise, even close to the date, that having the day properly filmed matters. The planning might be rushed — the filming isn't.
            </p>
            <p className="text-espresso-700/70 leading-relaxed mt-4">
              Availability depends fully on date and location. When a slot opens, it usually goes quickly.
            </p>
          </div>
        </div>
      </section>

      <section ref={contactRef} id="contact" className="py-20 px-4 bg-sand-100 border-t border-olive-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-espresso-600/80">
              Fill out the form below and I'll respond within 24 hours.
            </p>
          </div>
          <ContactForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            defaultPackage="Last-Minute"
          />
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
