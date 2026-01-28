import { useState, useEffect } from 'react';
import { Heart, Award, Clock, CheckCircle, Star, Menu, X, MessageCircle, ChevronDown, Youtube, Facebook, Instagram, Phone } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { ExitIntentBanner } from '../components/ExitIntentBanner';
import { PricingComparison } from '../components/PricingComparison';

declare global {
  interface Window {
    wpShowReviews: (id: number, color: string) => void;
    wpShowRatedWAv3: (id: string, year: string) => void;
  }
}

interface LocationPageProps {
  location: string;
  title: string;
  description: string;
  heroText: string;
  aboutText: string;
}

export function LocationPage({ location, title, description, heroText, aboutText }: LocationPageProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const initReviewsWidget = () => {
      if (window.wpShowReviews) {
        window.wpShowReviews(290272, "black");
      }
    };

    const initBadgeWidget = () => {
      if (window.wpShowRatedWAv3) {
        window.wpShowRatedWAv3('290272', '2026');
      }
    };

    const reviewsScript = document.querySelector('script[src*="wp-widget.js"]');
    if (reviewsScript) {
      reviewsScript.addEventListener('load', initReviewsWidget);
      if (window.wpShowReviews) {
        initReviewsWidget();
      }
    }

    let badgeScript = document.querySelector('script[src*="wp-rated.js"]');
    if (!badgeScript) {
      badgeScript = document.createElement('script');
      badgeScript.src = 'https://cdn1.hitched.co.uk/_js/wp-rated.js?v=4';
      badgeScript.async = true;
      badgeScript.addEventListener('load', initBadgeWidget);
      document.body.appendChild(badgeScript);
    } else if (window.wpShowRatedWAv3) {
      initBadgeWidget();
    }

    return () => {
      if (reviewsScript) {
        reviewsScript.removeEventListener('load', initReviewsWidget);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-sand text-espresso font-sans">
      <nav className="fixed w-full bg-sand/95 backdrop-blur-sm z-50 border-b border-olive-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-3 group">
                <h1 className="text-2xl font-script text-olive-600">ChrisJFilms</h1>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="/#films" className="text-espresso-700 hover:text-olive-600 transition font-medium">Films</a>
              <a href="/#packages" className="text-espresso-700 hover:text-olive-600 transition font-medium">Packages</a>
              <a href="/#testimonials" className="text-espresso-700 hover:text-olive-600 transition font-medium">Reviews</a>
              <button
                onClick={scrollToContact}
                className="text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
              >
                Check Availability
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-olive-600"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-sand border-t border-olive-900/30">
            <div className="px-4 py-4 space-y-3">
              <a href="/#films" onClick={() => setIsMenuOpen(false)} className="block py-2 text-espresso-700 hover:text-olive-600 transition font-medium">Films</a>
              <a href="/#packages" onClick={() => setIsMenuOpen(false)} className="block py-2 text-espresso-700 hover:text-olive-600 transition font-medium">Packages</a>
              <a href="/#testimonials" onClick={() => setIsMenuOpen(false)} className="block py-2 text-espresso-700 hover:text-olive-600 transition font-medium">Reviews</a>
              <button
                onClick={scrollToContact}
                className="w-full text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
              >
                Check Availability
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-sand-100 via-sand to-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-espresso mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-espresso-700/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              {heroText}
            </p>

            <div className="w-full max-w-5xl mx-auto mb-12 rounded-xl overflow-hidden shadow-2xl ring-1 ring-olive-900/20">
              <video
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload"
                disablePictureInPicture
                onContextMenu={(e) => e.preventDefault()}
                className="w-full h-auto"
              >
                <source src="https://www.dropbox.com/scl/fi/o4frab5bqse42ph6puoko/hero_video.mp4?rlkey=gthn9twbza5seeqcyc1862lec&dl=1" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-espresso-700/80 mb-8 font-light">
                {aboutText}
              </p>
            </div>

            <div className="text-sm text-olive-600/70 mb-4 font-medium">
              Only 8 dates left for 2026
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={scrollToContact}
                className="text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
              >
                Check Availability
              </button>

              <a
                href="tel:+447710778846"
                className="border-2 border-olive-600 text-olive-600 px-12 py-5 rounded-lg font-bold text-xl hover:bg-olive-600 hover:text-sand transition flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                Call Now
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-olive-600 text-olive-600" />
                  ))}
                </div>
                <span className="text-espresso-700/80 text-sm">5.0 / 51 reviews</span>
              </div>
              <div className="h-6 w-px bg-olive-900/30 hidden sm:block"></div>
              <div className="text-espresso-700/80 text-sm">
                500+ weddings captured
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 opacity-80 hover:opacity-100 transition-opacity">
              <div id="wp-ratedWA">
                <a target="_blank" href="https://www.hitched.co.uk/wedding-videographers/chrisjfilms-wedding-films_290272.htm" rel="nofollow" title="ChrisJFilms: Wedding Films, 2026 Hitched Wedding Awards winner">
                  <img width="100" height="100" alt="ChrisJFilms: Wedding Films, 2026 Hitched Wedding Awards winner" id="wp-ratedWA-img-2026" src="https://cdn1.hitched.co.uk/img/badges/2026/badge-weddingawards_en_GB.jpg" className="hover:scale-105 transition-transform" />
                </a>
              </div>
              <a href="https://bridebook.com/uk/wedding-videographers/chrisjfilms-wedding-videography-walsall-staffordshire-csog40yLDg" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://image.bridebook.com/assets/cms/badges/Featured_on_Badge_light_uk.png"
                  alt="Featured on Bridebook"
                  width="160"
                  height="auto"
                  className="hover:scale-105 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand border-y border-olive-900/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-script text-olive-600 mb-4">
              Meet Chris
            </h2>
            <p className="text-xl md:text-2xl font-display text-espresso-700/90 max-w-3xl mx-auto leading-relaxed">
              "Your wedding will be over in a day.<br />Your film will last forever."
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative mb-8">
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-olive-900/30 shadow-2xl shadow-olive-900/30">
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src="https://galleries.vidflow.co/videos/wcher46x"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-olive-600 to-olive-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-olive-600 to-olive-900 rounded-full opacity-10 blur-3xl"></div>
            </div>

            <div className="bg-sand-100/50 border border-olive-900/20 rounded-xl p-8 md:p-10 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed mb-6 font-light text-center">
                I've been filming weddings since 2016, capturing over 500 ceremonies across the Midlands. What started as a job became something I genuinely love — the raw emotion, the unscripted moments, the way two people commit to forever.
              </p>
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed mb-6 font-light text-center">
                The best moments aren't on the schedule. They're your mum fixing your veil, that first look, a speech that makes everyone laugh and cry. Those are the moments I protect.
              </p>
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed font-light text-center">
                My style blends documentary and guided storytelling. I'm not a ghost in the corner, but never a director either. I chat, I blend in, and everyone feels natural. No awkward posing. Just your day, honestly captured.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="films" className="py-20 px-4 bg-sand-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              See The Difference
            </h2>
            <p className="text-xl text-espresso-700/80">
              Real weddings. Real emotion. No filler.
            </p>
          </div>

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
                <p className="text-espresso-700/70">Full Day Highlights</p>
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
                <p className="text-espresso-700/70">Full Day Highlights</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={scrollToContact}
              className="text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
            >
              View Packages
            </button>
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 px-4 bg-sand">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-olive-600 to-olive-900 text-sand px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg shadow-olive-900/50">
              <Clock className="w-4 h-4" />
              Limited availability — Book now to secure your date
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Investment Packages
            </h2>
            <p className="text-xl text-espresso-700/80 max-w-3xl mx-auto font-light">
              All packages include up to 10 hours of coverage, with delivery within 12 weeks.
            </p>
          </div>

          <PricingComparison scrollToContact={scrollToContact} />

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="bg-sand-100 border border-olive-900/30 p-8 rounded-lg">
              <h3 className="text-xl font-display font-bold text-espresso mb-4 text-center">Available Discounts</h3>
              <p className="text-espresso-700/80 mb-4 text-center">On Standard & Ultimate packages:</p>
              <div className="grid md:grid-cols-2 gap-4 text-espresso-700/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-olive-600" />
                  <span>10% off off-season weddings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-olive-600" />
                  <span>10% off mid-week weddings</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-olive-600" />
                  <span>10% off cash balance payment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-olive-600" />
                  <span>£50 review voucher</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-espresso-700/70">Payment plans available · Clear service agreement · No surprises, no pressure</p>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Trusted By 500+ Couples
            </h2>
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-olive-600 text-olive-600" />
                ))}
              </div>
              <span className="text-xl text-espresso font-bold">5.0 / 51 reviews</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div id="wp-widget-reviews" className="bg-sand border border-olive-900/30 p-8 rounded-xl">
              <div id="wp-widget-preview" className="text-center text-espresso-700/80">
                Read <a href="https://www.hitched.co.uk/wedding-videographers/reviews/chrisjfilms-wedding-films_290272.htm" rel="nofollow" className="text-olive-600 hover:text-espresso-700 transition">my reviews</a> on{' '}
                <a href='https://www.hitched.co.uk' rel="nofollow" className="inline-flex items-center gap-1 text-olive-600 hover:text-espresso-700 transition">
                  <img src="https://cdn1.hitched.co.uk/assets/img/logos/gen_logoHeader.svg" alt="Hitched" className="h-5 inline" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button
              onClick={scrollToContact}
              className="text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
            >
              See If Your Date Is Available
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-sand">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Let's Chat About Your Day
            </h2>
            <p className="text-xl text-espresso-700/90 font-light leading-relaxed">
              Tell me about your wedding, and <span className="text-olive-600 font-medium">I (Chris) will personally</span> get back to you within 24 hours to discuss how I can create something beautiful for you
            </p>
          </div>

          <div className="bg-sand-100 border border-olive-900/30 p-8 rounded-lg shadow-xl shadow-olive-900/20">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-sand border-t border-olive-900/30 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <button
              onClick={scrollToContact}
              className="text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40 mb-8"
            >
              Get in Touch
            </button>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <a href="/" className="flex items-center gap-3 group">
                <h1 className="text-2xl font-script text-olive-600">ChrisJFilms</h1>
              </a>
            </div>
            <p className="text-espresso-700/70 mb-6">
              Cinematic wedding films · 500+ couples · 12-week delivery
            </p>
            <div className="flex justify-center gap-8 mb-6">
              <a href="/#films" className="text-espresso-700/70 hover:text-olive-600 transition">Films</a>
              <a href="/#packages" className="text-espresso-700/70 hover:text-olive-600 transition">Packages</a>
              <a href="/#testimonials" className="text-espresso-700/70 hover:text-olive-600 transition">Reviews</a>
            </div>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://www.youtube.com/@chrisjfilmsUK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-espresso-700/70 hover:text-olive-600 transition"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/ChrisJezierskiFilms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-espresso-700/70 hover:text-olive-600 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/chrisjezierskifilms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-espresso-700/70 hover:text-olive-600 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-espresso-600 text-sm mb-3">
              © 2026 ChrisJfilms · Staffordshire, Worcestershire, West Midlands & Warwickshire
            </p>
            <div className="text-espresso-600/60 text-xs">
              <a href="/privacy-policy" className="hover:text-olive-600 transition">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <ExitIntentBanner onContactClick={scrollToContact} />
    </div>
  );
}
