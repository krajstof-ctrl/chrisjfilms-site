import { useState, useRef, useEffect } from 'react';
import { CheckCircle, DollarSign } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { updatePageMeta } from '../lib/seo';

export function BudgetPackagePage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updatePageMeta(
      'Capture Only Wedding Videography £850 | Raw Footage Package Midlands',
      'Capture Only wedding videography from £850. Professional 4K filming with raw footage delivery. Everything filmed, no editing added. Perfect for couples wanting quality coverage without editing. Serving Birmingham, Staffordshire & West Midlands.',
      'capture only wedding videographer, raw footage wedding video, unedited wedding footage, wedding filming only, budget wedding videographer, affordable wedding video, wedding videographer under 1000, midlands wedding videographer, birmingham wedding filming, staffordshire raw footage',
      'https://www.chrisjfilms.com/budget-wedding-videographer',
      'https://www.chrisjfilms.com/dsc06014.jpg',
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Capture Only Wedding Videography Package',
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'ChrisJFilms Wedding Films',
          'url': 'https://www.chrisjfilms.com'
        },
        'description': 'Professional wedding videography coverage with raw footage delivery. No editing, just quality filming.',
        'areaServed': ['Birmingham', 'Staffordshire', 'West Midlands', 'Worcestershire'],
        'offers': {
          '@type': 'Offer',
          'price': '850',
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
            Get Quote
          </button>
        </div>
      </header>

      <section className="py-16 px-4 bg-gradient-to-b from-sand to-sand-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-olive-600/20 text-olive-600 px-4 py-2 rounded-full mb-6 border border-olive-600/30">
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-bold uppercase tracking-wide">Capture Only</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-espresso mb-6 leading-tight">
              Capture Only
            </h1>
            <p className="text-2xl text-espresso-700/90 max-w-3xl mx-auto leading-relaxed mb-4">
              This one's simple.
            </p>
            <p className="text-lg text-espresso-700/70 max-w-2xl mx-auto">
              Your wedding day, properly filmed and safely kept — but not turned into a finished film.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 flex flex-col">
              <div className="text-5xl font-bold text-olive-600 mb-2">£850</div>
              <p className="text-espresso-700/70 mb-6">£200 deposit to secure your date</p>
              <div className="flex-1 mb-6">
                <div className="rounded-xl overflow-hidden border border-olive-300/50 shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    controlsList="nodownload"
                    disablePictureInPicture
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full h-auto"
                    aria-label="Capture Only wedding videography example"
                  >
                    <source src="https://assets.chrisjfilms.com/VIDEOS/captureonly.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              <button
                onClick={scrollToContact}
                className="w-full text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
              >
                Learn More About This Package
              </button>
            </div>

            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8">
              <h3 className="text-2xl font-display font-bold text-olive-600 mb-4">What You Get</h3>
              <ul className="space-y-3 text-espresso-700/90">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Up to 10 hours coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Filmed in 4K</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Dual-camera coverage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Professional audio recording</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Filmed by Chris or <a href="/videographer/simon" className="text-olive-600 hover:text-espresso-700 underline transition">Simon</a>, <a href="/videographer/mayhar" className="text-olive-600 hover:text-espresso-700 underline transition">Mayhar</a>, or <a href="/videographer/caleb" className="text-olive-600 hover:text-espresso-700 underline transition">Caleb</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>All raw footage included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Delivered on a dedicated SSD you keep</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Footage organised for easy viewing or editing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Delivered within 14 days</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand border-y border-olive-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-espresso-700/90 space-y-6 leading-relaxed text-lg mb-16">
            <p>
              Your wedding day, properly filmed and safely kept — but not turned into a finished film. No music, no story edit, no creative touches added after. Just the day as it actually happened.
            </p>
            <p>
              Over the years I've learned what really needs to be recorded. Not just the obvious bits, but the reactions, the background moments, the people you don't realise you'll miss one day. The guys I work with know this too. <a href="/videographer/simon" className="text-olive-600 hover:text-espresso-700 underline transition">Simon</a>, <a href="/videographer/mayhar" className="text-olive-600 hover:text-espresso-700 underline transition">Mayhar</a> and <a href="/videographer/caleb" className="text-olive-600 hover:text-espresso-700 underline transition">Caleb</a> film the same way I do — calm, aware, and never in the way. Nothing random, no guesswork.
            </p>
            <p>
              Think of this like the raw ingredient. Nothing added, nothing dressed up. Just the pure capture of the day. Treated properly later, it can become something amazing — but here, it's about keeping the essence safe.
            </p>
            <p>
              The care and professionalism is exactly the same as my film packages. Same standards. Same focus on you and the day. The only difference is what happens after — and in this case, nothing does.
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-8 text-center">
            What You Get
          </h2>
          <div className="text-espresso-700/90 space-y-6 leading-relaxed text-lg mb-12">
            <ul className="space-y-3 pl-6">
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Up to 10 hours coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Filmed in 4K</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Dual-camera coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Professional audio recording</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Filmed by Chris or <a href="/videographer/simon" className="text-olive-600 hover:text-espresso-700 underline transition">Simon</a>, <a href="/videographer/mayhar" className="text-olive-600 hover:text-espresso-700 underline transition">Mayhar</a>, or <a href="/videographer/caleb" className="text-olive-600 hover:text-espresso-700 underline transition">Caleb</a></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>All raw footage included</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Delivered on a dedicated SSD you keep</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Footage organised for easy viewing or editing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Delivered within 14 days</span>
              </li>
            </ul>
            <p className="pt-4">
              No shortcuts. No missed bits. Just your day, properly recorded and handed over.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <p className="text-center text-espresso-700/80 mb-8">
              Your complete wedding footage, professionally organized and ready to view or edit
            </p>
            <div className="bg-espresso/5 rounded-xl p-4 border border-olive-900/20">
              <img
                src="/screenshot_2026-01-25_212735.png"
                alt="Organized wedding footage file structure"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-6 text-center">
            Important to Know
          </h2>
          <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 space-y-4 text-espresso-700/90">
            <p className="leading-relaxed">
              <strong className="text-olive-600">This package does not include editing.</strong> You'll receive all the raw footage exactly as it was filmed. This means no music, no color correction, no transitions, and no cinematic effects.
            </p>
            <p className="leading-relaxed">
              The footage is perfect if you have someone who can edit, or if you simply want the authentic, unprocessed memories of your day. Many couples choose this package and later upgrade to have the footage professionally edited.
            </p>
            <p className="leading-relaxed">
              <strong className="text-olive-600">Want editing added later?</strong> You can upgrade anytime after your wedding. I keep your footage and can create a professional highlight film for an additional fee. Check out <a href="/cinematic-wedding-videographer" className="text-olive-600 hover:text-espresso-700 underline transition">The Film</a> to see what's possible with professional editing.
            </p>
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
                <span>Want everything documented, without cinematic editing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Are planning to edit the footage themselves or archive it as-is</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-olive-600 mt-1">•</span>
                <span>Value professionalism and coverage over storytelling</span>
              </li>
            </ul>
            <p className="pt-4">
              This is not a "cheap" option.<br />
              It's a stripped-back, no-interpretation service, done properly.
            </p>
          </div>
        </div>
      </section>

      <section ref={contactRef} id="contact" className="py-20 px-4 bg-sand border-t border-olive-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Enquire About Capture Only
            </h2>
            <p className="text-xl text-espresso-700/80">
              Tell me about your wedding and I'll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm
            isOpen={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            defaultPackage="Capture Only"
          />
        </div>
      </section>

      <footer className="bg-sand border-t border-olive-900/30 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-espresso-700/60 text-sm mb-3">
            © 2026 ChrisJFilms. Affordable Budget Wedding Videographer in Birmingham, Staffordshire, West Midlands & Worcestershire.
          </p>
          <div className="text-espresso-600/60 text-xs">
            <a href="/privacy-policy" className="hover:text-olive-600 transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
