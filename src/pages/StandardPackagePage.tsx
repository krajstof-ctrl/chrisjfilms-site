import { useState, useRef, useEffect } from 'react';
import { CheckCircle, Film, Play } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { updatePageMeta } from '../lib/seo';

export function StandardPackagePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updatePageMeta(
      'The Film Wedding Videography Package £1,800 | Cinematic Wedding Films Midlands',
      'The Film - Our most popular wedding videography package from £1,800. Includes 8-12 min cinematic highlight film, full ceremony & speeches coverage, aerial drone footage, social media trailer, and 10 years secure storage. Professional 4K wedding cinematography serving Birmingham, Staffordshire, West Midlands & Worcestershire. Up to 10 hours coverage.',
      'the film wedding videography, cinematic wedding film package, wedding video editing, professional wedding videographer, drone wedding footage, wedding highlight film, midlands wedding videography, birmingham wedding video, staffordshire wedding film, complete wedding coverage, edited wedding film, 4k wedding video, ceremony filming, speeches recording, wedding cinematography package, affordable wedding videography, wedding video price',
      'https://www.chrisjfilms.com/cinematic-wedding-videographer',
      'https://www.chrisjfilms.com/dsc06014.jpg',
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'The Film Wedding Videography Package',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'ChrisJFilms Wedding Films',
          'url': 'https://www.chrisjfilms.com'
        },
        'description': 'Professional cinematic wedding videography with highlight film, ceremony & speeches coverage, drone footage, and online gallery.',
        'areaServed': ['Birmingham', 'Staffordshire', 'West Midlands', 'Worcestershire'],
        'offers': {
          '@type': 'Offer',
          'price': '1800',
          'priceCurrency': 'GBP',
          'availability': 'https://schema.org/InStock',
          'priceValidUntil': '2026-12-31'
        }
      }
    );
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
            className="text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
          >
            Book Now
          </button>
        </div>
      </header>

      <section className="py-16 px-4 bg-gradient-to-b from-sand to-sand-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-olive-600/20 text-olive-600 px-4 py-2 rounded-full mb-6 border border-olive-600/30">
              <Film className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">The Film - Most Popular</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-espresso mb-6 leading-tight">
              The Film
            </h1>
            <p className="text-2xl text-espresso-700/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Your wedding, shaped into a story you'll return to.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 flex flex-col">
              <div className="mb-4">
                <img
                  src="/whatsapp_imarge_2026-01-26_at_19.37.39 copy.jpeg"
                  alt="Client testimonial"
                  className="w-full rounded-lg border border-olive-900/20"
                />
              </div>
              <div className="text-5xl font-bold text-olive-600 mb-2">£1,800</div>
              <p className="text-espresso-700/70 mb-6">£200 deposit to secure your date</p>
              <button
                onClick={scrollToContact}
                className="w-full text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
              >
                Learn More About This Package
              </button>
            </div>

            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-display font-bold text-olive-600 mb-4">What's Included</h3>
              <ul className="space-y-3 text-espresso-700/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Up to 10 hours of coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Cinematic highlight film (8-12 min)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Full ceremony & speeches films</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Aerial footage & social media trailer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>10 years secure file storage</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-6 text-center">
              Example Wedding Film
            </h2>
            <p className="text-center text-espresso-700/80 mb-8 max-w-2xl mx-auto">
              Watch a full example of what you'll receive with The Film package
            </p>
            <div className="bg-espresso/5 rounded-xl p-4 border border-olive-900/20">
              <div style={{ position: 'relative', padding: '0 0 56.25% 0', height: 0 }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://galleries.vidflow.co/videos/87d6c6f0"
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand border-y border-olive-900/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-8 text-center">
            This is the one most couples choose. And there's a reason.
          </h2>
          <div className="text-espresso-700/90 space-y-6 leading-relaxed text-lg">
            <p>
              Your wedding day doesn't feel like a list of events when you're in it. It feels like flashes. Nerves. Noise. People hugging you. Someone laughing behind you. Someone squeezing your hand when no one else noticed.
            </p>
            <p>
              This package is about turning all of that back into something you can sit down and feel again.
            </p>
            <p>
              Not just what happened — but what it was like to be there.
            </p>
            <p>
              I'm there with you for the day, but I'm not running the day. I move quietly, I watch, I wait. I've filmed enough weddings to know when something small is about to matter. A look. A pause. A parent in the background just watching.
            </p>
            <p>
              That's the difference here. Not more cameras. Not more "stuff". Just knowing what to pay attention to.
            </p>
            <p>
              Then afterwards, I take my time with it. I don't batch these. I don't hand them off. I sit with your day and build it carefully, in order, letting moments land where they should. Your voices, your people, your atmosphere — held together in a way that feels natural, not forced.
            </p>
            <p>
              So years from now, when life looks different and people look different, this isn't just a video you scroll past.
            </p>
            <p>
              It's the way you hear them again.<br />
              See them again.<br />
              Remember how it felt at the start of everything.
            </p>
            <p>
              That's why this package costs what it does. It's not about coverage. It's about care, time, and doing this properly.
            </p>
            <p>
              And honestly, it's the work I care about most.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-8 text-center">
            What You Receive
          </h2>
          <div className="text-espresso-700/90 space-y-4 leading-relaxed text-lg mb-12">
            <p className="font-semibold text-espresso-700">A complete set of wedding films:</p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>A cinematic highlight that carries the story</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Full ceremony and speeches, preserved properly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>A short trailer for sharing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Clean audio, careful pacing, and consistent visual tone</span>
              </li>
            </ul>
            <p className="pt-4">
              This isn't content.<br />
              It's something you'll come back to.
            </p>
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-8 text-center">
            Full Details
          </h3>

          <div className="space-y-6">
            <div className="bg-sand border border-olive-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-olive-600 mb-6">Your Wedding Films</h3>
              <ul className="space-y-4 text-espresso-700/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Cinematic Highlight Film (typically 8-12 minutes)</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">The emotional story of your day beautifully edited with music, featuring the best moments from start to finish</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Full Ceremony Film</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Your complete ceremony from processional to recessional, beautifully presented</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Full Speeches Film</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Every word from every speech, perfectly captured with professional audio</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">First Dance Film</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Your magical first dance captured from multiple angles</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Short Social Media Trailer</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Perfect for Instagram, Facebook, and sharing with friends</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-sand border border-olive-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-olive-600 mb-6">Coverage & Filming</h3>
              <ul className="space-y-4 text-espresso-700/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Up to 10 Hours of Coverage</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Full day coverage from preparations through to evening celebrations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">1 Videographer (Chris)</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Your day filmed by Chris personally with dedicated attention</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Filmed in 4K</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Professional quality footage with stunning clarity and detail</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Aerial Footage</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Stunning drone shots of your venue (weather & permission dependent)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-sand border border-olive-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-olive-600 mb-6">Delivery & Storage</h3>
              <ul className="space-y-4 text-espresso-700/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Personalised Online Gallery</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Beautiful private gallery to watch, download, and share all your films</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">10 Years of Secure File Storage</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">All your films safely stored and accessible online</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-12 text-center">
            See The Film in Action
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-2xl relative group ring-1 ring-olive-900/20" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://galleries.vidflow.co/videos/e0f24ddf"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-espresso font-display">Tasha & Will</h3>
                <p className="text-espresso-700/70">The Film Example</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-2xl relative group ring-1 ring-olive-900/20" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src="https://galleries.vidflow.co/videos/cc0505d5"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-espresso font-display">Connie & David</h3>
                <p className="text-espresso-700/70">The Film Example</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 px-4 bg-sand-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-8 text-center">
            Who This Is For
          </h2>
          <div className="text-espresso-700/90 space-y-6 leading-relaxed text-lg mb-12">
            <p className="font-semibold text-espresso-700">Couples who:</p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Want to feel their wedding again, not just remember it</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Care about atmosphere, timing, and emotional flow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Want their wedding turned into a film, not a montage</span>
              </li>
            </ul>
            <p className="pt-4">
              This is the package most couples choose — and the one I'm most proud to deliver.
            </p>
          </div>
        </div>
      </section>

      <section ref={contactRef} id="contact" className="py-20 px-4 bg-sand border-t border-olive-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Enquire About The Film
            </h2>
            <p className="text-xl text-espresso-700/80">
              Tell me about your wedding and I'll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            defaultPackage="The Film"
          />
        </div>
      </section>

      <footer className="bg-sand border-t border-olive-900/30 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-espresso-700/60 text-sm mb-3">
            © 2026 ChrisJFilms. Professional Cinematic Wedding Videographer in Birmingham, Staffordshire, West Midlands & Worcestershire.
          </p>
          <div className="text-espresso-600/60 text-xs">
            <a href="/privacy-policy" className="hover:text-olive-600 transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
