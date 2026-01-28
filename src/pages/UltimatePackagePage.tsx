import { useState, useRef, useEffect } from 'react';
import { CheckCircle, Star } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { updatePageMeta } from '../lib/seo';

export function UltimatePackagePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updatePageMeta(
      'The Record Wedding Package £2,800 | Photography & Videography Combined Midlands',
      'The Record - Complete wedding coverage combining professional photography and videography from £2,800. Includes full day videography, professional photographer, 500+ edited photos, cinematic highlight film, ceremony & speeches coverage, aerial footage, and online gallery. Premium all-in-one wedding package serving Birmingham, Staffordshire, West Midlands & Worcestershire. One team, seamless coverage.',
      'the record wedding package, wedding photography and videography combined, photo and video package, complete wedding coverage, wedding photographer videographer, luxury wedding package, premium wedding films, midlands wedding package, birmingham wedding photographer videographer, staffordshire wedding coverage, all-in-one wedding package, wedding photo video combo, comprehensive wedding documentation, wedding photography videography price',
      'https://www.chrisjfilms.com/wedding-videographer-and-photographer',
      'https://www.chrisjfilms.com/dsc06014.jpg',
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'The Record Wedding Photography & Videography Package',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'ChrisJFilms Wedding Films',
          'url': 'https://www.chrisjfilms.com'
        },
        'description': 'Complete wedding coverage combining professional photography and videography. Includes everything from The Film package plus professional wedding photographer and 500+ edited photos.',
        'areaServed': ['Birmingham', 'Staffordshire', 'West Midlands', 'Worcestershire'],
        'offers': {
          '@type': 'Offer',
          'price': '2800',
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
              <Star className="w-4 h-4 fill-olive-600" />
              <span className="text-sm font-bold uppercase tracking-wide">The Record</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-espresso mb-6 leading-tight">
              The Record
            </h1>
            <p className="text-2xl text-espresso-700/90 max-w-3xl mx-auto leading-relaxed mb-4">
              This one is about keeping the whole day, properly.
            </p>
            <p className="text-lg text-espresso-700/70 max-w-2xl mx-auto">
              Not photo over here and video over there. Not two suppliers doing their own thing. Just one small team, working the same way, paying attention to the same moments.
            </p>
            <p className="text-lg text-espresso-700/70 max-w-2xl mx-auto mt-4">
              The big stuff. The quiet stuff. The people in the background. All of it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 flex flex-col">
              <div className="text-5xl font-bold text-olive-600 mb-2">£2,800</div>
              <p className="text-espresso-700/70 mb-6">£200 deposit to secure your date</p>
              <button
                onClick={scrollToContact}
                className="w-full text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40 mb-6"
              >
                Learn More About This Package
              </button>
              <div className="mt-auto">
                <img
                  src="/bg.jpg"
                  alt="Wedding videographer filming couple"
                  className="w-full h-auto rounded-lg border border-olive-900/20"
                />
              </div>
            </div>

            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-display font-bold text-olive-600 mb-4">What's Included</h3>
              <ul className="space-y-3 text-espresso-700/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Everything in The Film package</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>1 professional wedding photographer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>500+ professionally edited photographs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Unified photo & video gallery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>One coordinated creative team</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-6 text-center">
              Example Video Gallery
            </h2>
            <p className="text-center text-espresso-700/80 mb-8 max-w-2xl mx-auto">
              Browse a complete example of photos and videos delivered together in one unified gallery
            </p>
            <div className="bg-espresso/5 rounded-xl p-4 border border-olive-900/20">
              <div style={{ position: 'relative', padding: '20px', height: '650px' }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '125%',
                    height: '125%',
                    zoom: 0.8,
                    transform: 'scale(0.8)',
                    transformOrigin: '0 0'
                  }}
                  src="https://galleries.vidflow.co/embed/d/lydia_and_sid"
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
            How we work
          </h2>
          <div className="text-espresso-700/90 space-y-6 leading-relaxed text-lg mb-16">
            <p>
              Photos are handled by <a href="/photographer/pete-davis" className="text-olive-600 hover:text-espresso-700 underline transition">Pete</a>. He's not random — we work together a lot, and we know how each other move on a wedding day. When I step in, he hangs back. When he's lining something up, I give space. No awkward overlap, no both of us shouting directions.
            </p>
            <p>
              We're mates outside of weddings too, which honestly helps more than couples realise. Same pace, same humour, same way of reading a room.
            </p>
            <p>
              It just feels smooth on the day. And that means you feel more relaxed too.
            </p>
          </div>

          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4 text-center">
              Sample Photos by Pete
            </h2>
            <p className="text-lg text-espresso-700/80 text-center mb-12 max-w-2xl mx-auto">
              Examples of Pete's documentary-style wedding photography.
            </p>

            <div className="bg-espresso/5 rounded-xl p-4 border border-olive-900/20">
              <div style={{ position: 'relative', paddingBottom: '75%', height: 0, overflow: 'hidden' }}>
                <iframe
                  src="https://associatephotographers65.pixieset.com/samples/"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  allowFullScreen
                  className="rounded-lg"
                  title="Pete's Sample Wedding Photography Gallery"
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <a
                href="/photographer/pete-davis"
                className="inline-block text-olive-600 hover:text-espresso-700 transition font-medium underline decoration-olive-600/40"
              >
                Learn more about Pete →
              </a>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-8 text-center mt-16">
            What this changes
          </h2>
          <div className="text-espresso-700/90 space-y-6 leading-relaxed text-lg">
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>No duplicated shots</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>No being pulled two ways</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>No "I thought you had that" moments</span>
              </li>
            </ul>
            <p className="pt-4">
              Photo and video back each other up instead of competing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-8 text-center">
            What you receive
          </h2>
          <div className="text-espresso-700/90 space-y-4 leading-relaxed text-lg mb-12">
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Everything from The Film package</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>A full professional photo gallery (500+ edited images)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>One shared photo & video gallery</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>One team covering the day together</span>
              </li>
            </ul>
            <p className="pt-4">
              This isn't "more". It's just better covered. More aware. More joined up. So later on, when you look back, it all feels like it belongs to the same day — because it does.
            </p>
          </div>

          <h3 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-8 text-center">
            Full Details
          </h3>

          <div className="space-y-6">
            <div className="bg-sand border border-olive-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-olive-600 mb-6">Everything from The Film Package</h3>
              <ul className="space-y-4 text-espresso-700/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Cinematic Highlight Film (typically 8-12 minutes)</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">The emotional story of your day beautifully edited with music</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Full Ceremony & Speeches Films</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Complete coverage of your ceremony and all speeches</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">First Dance Film</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Your first dance captured from multiple angles</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Short Social Media Trailer</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Perfect for sharing on Instagram and Facebook</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Aerial Footage</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Stunning drone shots (weather & permission dependent)</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Up to 10 Hours of Coverage</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Full day filming by Chris, filmed in 4K</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-sand border border-olive-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-olive-600 mb-6">Professional Photography by Pete</h3>
              <ul className="space-y-4 text-espresso-700/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">1 Professional Wedding Photographer</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Pete, working in coordination with Chris throughout the day</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">500+ Professionally Edited Photographs</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Full-day coverage with professional color correction and retouching</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">Unified Photo & Video Gallery</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">All your photos and films in one beautiful online gallery</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-sand border border-olive-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-olive-600 mb-6">The Complete Experience</h3>
              <ul className="space-y-4 text-espresso-700/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">One Coordinated Creative Team</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Chris and Pete working together seamlessly throughout your day</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">No Overlap, No Missed Moments</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">Complete coverage from experienced professionals who know how to work together</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-espresso">10 Years of Secure File Storage</strong>
                    <p className="text-espresso-700/70 text-sm mt-1">All your photos and films safely stored online</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-8 text-center">
            Who This Is For
          </h2>
          <div className="text-espresso-700/90 space-y-6 leading-relaxed text-lg mb-12">
            <p className="font-semibold text-espresso-700">Couples who:</p>
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Want both photo and video done properly</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Value calm, experienced professionals</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Don't want to manage multiple suppliers</span>
              </li>
            </ul>
            <p className="pt-4">
              If you care about flow and trust on the day, this is the cleanest way to do it.
            </p>
          </div>
        </div>
      </section>

      <section ref={contactRef} id="contact" className="py-20 px-4 bg-sand-100 border-t border-olive-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Enquire About The Record
            </h2>
            <p className="text-xl text-espresso-700/80">
              Tell me about your wedding and I'll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            defaultPackage="The Record"
          />
        </div>
      </section>

      <footer className="bg-sand border-t border-olive-900/30 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-espresso-700/60 text-sm mb-3">
            © 2026 ChrisJFilms. Professional Wedding Videographer and Photographer in Birmingham, Staffordshire, West Midlands & Worcestershire.
          </p>
          <div className="text-espresso-600/60 text-xs">
            <a href="/privacy-policy" className="hover:text-olive-600 transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
