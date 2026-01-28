import { useState, useEffect } from 'react';
import { Heart, Award, Clock, CheckCircle, Star, Menu, X, MessageCircle, ChevronDown, Youtube, Facebook, Instagram, Phone, AlertCircle } from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { ExitIntentBanner } from './components/ExitIntentBanner';
import { PricingComparison } from './components/PricingComparison';
import { WhatsAppTestimonial } from './components/WhatsAppTestimonial';
import { updatePageMeta } from './lib/seo';

declare global {
  interface Window {
    wpShowReviews: (id: number, color: string) => void;
    wpShowRatedWAv3: (id: string, year: string) => void;
  }
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    updatePageMeta(
      'When the day is over, this is what stays.',
      'Wedding films that keep voices, moments and the people you love alive long after the day has passed.',
      'wedding videographer midlands, wedding videographer staffordshire, birmingham wedding videographer, west midlands wedding videographer, worcestershire wedding videographer, wedding filmmaker, cinematic wedding films, wedding cinematography, professional wedding videography, midlands wedding films, staffordshire wedding films, chrisjfilms, wedding video packages, affordable wedding videography, wedding film editing, wedding day coverage',
      'https://www.chrisjfilms.com/',
      'https://assets.chrisjfilms.com/Pictures/FAV.jpg'
    );
  }, []);

  useEffect(() => {
    const loadScriptsDeferred = () => {
      setTimeout(() => {
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
          badgeScript.addEventListener('load', () => {
            initBadgeWidget();
            const heroContainer = document.getElementById('wp-ratedWA-hero');
            if (heroContainer && window.wpShowRatedWAv3) {
              const heroBadge = document.createElement('a');
              heroBadge.href = 'https://www.hitched.co.uk/wedding-videographers/chrisjfilms-wedding-films_290272.htm';
              heroBadge.target = '_blank';
              heroBadge.rel = 'nofollow';
              heroBadge.title = 'ChrisJFilms: Wedding Films, 2026 Hitched Wedding Awards winner';

              const img = document.createElement('img');
              img.width = 110;
              img.height = 110;
              img.alt = 'ChrisJFilms: Wedding Films, 2026 Hitched Wedding Awards winner';
              img.src = 'https://cdn1.hitched.co.uk/img/badges/2026/badge-weddingawards_en_GB.jpg';
              img.className = 'hover:scale-105 transition-transform';

              heroBadge.appendChild(img);
              heroContainer.innerHTML = '';
              heroContainer.appendChild(heroBadge);
            }
          });
          document.body.appendChild(badgeScript);
        } else if (window.wpShowRatedWAv3) {
          initBadgeWidget();
        }

        let elfsightScript = document.querySelector('script[src*="elfsightcdn.com/platform.js"]');
        if (!elfsightScript) {
          elfsightScript = document.createElement('script');
          elfsightScript.src = 'https://elfsightcdn.com/platform.js';
          elfsightScript.async = true;
          document.body.appendChild(elfsightScript);
        }
      }, 500);
    };

    if (document.readyState === 'complete') {
      loadScriptsDeferred();
    } else {
      window.addEventListener('load', loadScriptsDeferred);
      return () => window.removeEventListener('load', loadScriptsDeferred);
    }
  }, []);

  return (
    <div className="min-h-screen bg-sand text-espresso font-sans">
      <nav className="fixed w-full bg-sand/95 backdrop-blur-sm z-50 border-b border-olive-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-script text-olive-600">ChrisJFilms</h1>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#films" className="text-espresso-600 hover:text-olive-600 transition font-medium">Films</a>
              <a href="#packages" className="text-espresso-600 hover:text-olive-600 transition font-medium">Packages</a>
              <a href="#testimonials" className="text-espresso-600 hover:text-olive-600 transition font-medium">Reviews</a>
              <a href="#faq" className="text-espresso-600 hover:text-olive-600 transition font-medium">Q&A</a>
              <a href="/meet-chris" className="text-espresso-600 hover:text-olive-600 transition font-medium">Meet Chris</a>
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-olive-600 to-olive-700 text-sand px-6 py-3 rounded-lg font-semibold hover:from-olive-500 hover:to-olive-600 transition shadow-lg shadow-olive-900/50"
              >
                See if your date is still free
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
              <a href="#films" onClick={() => setIsMenuOpen(false)} className="block py-2 text-espresso-600 hover:text-olive-600 transition font-medium">Films</a>
              <a href="#packages" onClick={() => setIsMenuOpen(false)} className="block py-2 text-espresso-600 hover:text-olive-600 transition font-medium">Packages</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block py-2 text-espresso-600 hover:text-olive-600 transition font-medium">Reviews</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block py-2 text-espresso-600 hover:text-olive-600 transition font-medium">Q&A</a>
              <a href="/meet-chris" onClick={() => setIsMenuOpen(false)} className="block py-2 text-espresso-600 hover:text-olive-600 transition font-medium">Meet Chris</a>
              <button
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-olive-600 to-olive-700 text-sand px-6 py-3 rounded-lg font-semibold hover:from-olive-500 hover:to-olive-600 transition"
              >
                See if your date is still free
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-32 pb-12 px-4 bg-gradient-to-b from-sand-100 via-sand to-sand-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-espresso mb-6 leading-tight">
              ChrisJFilms<br />
              Wedding Videography
            </h1>
            <p className="text-xl md:text-2xl text-espresso-700/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
              The Closest You'll Ever Get to That Day Again
            </p>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="rounded-xl overflow-hidden border-2 border-olive-300/50 shadow-2xl shadow-olive-900/20">
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
                  aria-label="Cinematic wedding videography showreel by ChrisJFilms - Midlands wedding filmmaker"
                  title="Professional wedding videography highlights from Staffordshire, Birmingham and West Midlands"
                >
                  <source src="https://assets.chrisjfilms.com/VIDEOS/CJF_Hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-espresso-600/80 mb-2 font-light">
                My name is Chris
              </p>
              <p className="text-lg md:text-xl text-espresso-600/80 mb-2 font-light">
                I've preserve memories for couples.
              </p>
              <p className="text-lg md:text-xl text-espresso-600/80 mb-6 font-light">
                Over 500 weddings shot since 2016
              </p>
              <p className="text-base md:text-lg text-espresso-600/70 font-light leading-relaxed">
                I only film a limited number of weddings each year so every couple gets proper time in editing. Dates are secured on a first-come basis.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center mb-8">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-clay-500 text-clay-500" />
                  ))}
                </div>
                <span className="text-espresso-600/80 text-sm">5.0 / 51 reviews</span>
              </div>
              <div className="h-6 w-px bg-olive-400/30 hidden sm:block"></div>
              <div className="text-espresso-600/80 text-sm">
                500+ weddings captured
              </div>
            </div>

            <div className="max-w-3xl mx-auto mb-8">
              <div className="elfsight-app-d19ce9aa-f331-44ce-9989-18390c94a309" data-elfsight-app-lazy>
                <div className="animate-pulse flex space-x-4 justify-center">
                  <div className="h-24 w-24 bg-olive-200/40 rounded"></div>
                  <div className="h-24 w-24 bg-olive-200/40 rounded"></div>
                  <div className="h-24 w-24 bg-olive-200/40 rounded"></div>
                  <div className="h-24 w-24 bg-olive-200/40 rounded"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 opacity-80 hover:opacity-100 transition-opacity">
              <div id="wp-ratedWA-hero">
                <a target="_blank" href="https://www.hitched.co.uk/wedding-videographers/chrisjfilms-wedding-films_290272.htm" rel="nofollow" title="ChrisJFilms: Wedding Films, 2026 Hitched Wedding Awards winner">
                  <img width="110" height="110" alt="ChrisJFilms: Wedding Films, 2026 Hitched Wedding Awards winner" src="https://cdn1.hitched.co.uk/img/badges/2026/badge-weddingawards_en_GB.jpg" className="hover:scale-105 transition-transform" loading="lazy" />
                </a>
              </div>
              <a href="https://bridebook.com/uk/wedding-videographers/chrisjfilms-wedding-videography-walsall-staffordshire-csog40yLDg" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://image.bridebook.com/assets/cms/badges/Featured_on_Badge_light_uk.png"
                  alt="Featured on Bridebook"
                  width="140"
                  height="auto"
                  className="hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </a>
            </div>

            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-clay-200/60 to-olive-200/60 border border-clay-400/50 rounded-full px-6 py-3 backdrop-blur-sm">
                <AlertCircle className="w-5 h-5 text-clay-600" />
                <span className="text-espresso text-sm font-medium">
                  8 dates remaining in 2026
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 px-4 bg-sand-100 border-y border-olive-300/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <a href="/meet-chris" className="inline-block group">
              <h2 className="text-5xl md:text-6xl font-script text-olive-600 mb-4 group-hover:text-olive-700 transition">
                Meet Chris
              </h2>
            </a>
            <p className="text-xl md:text-2xl font-display text-espresso-700/90 max-w-3xl mx-auto leading-relaxed">
              "The flowers will fade, the food will be eaten. But the only things that will remain are the rings, the photos, and the video."
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative mb-8">
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-olive-300/50 shadow-2xl shadow-olive-900/20">
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <iframe
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    src="https://galleries.vidflow.co/videos/wcher46x"
                    frameBorder="0"
                    allowFullScreen
                    loading="lazy"
                    title="Meet Chris - Award-winning Midlands wedding videographer introduction video"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-olive-400 to-olive-600 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-clay-400 to-clay-600 rounded-full opacity-15 blur-3xl"></div>
            </div>

            <div className="bg-sand-100/70 border border-olive-300/30 rounded-xl p-8 md:p-10 backdrop-blur-sm">
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed mb-6 font-light text-center">
                This isn't just filming to me. It's looking after something you don't get back.
              </p>
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed mb-6 font-light text-center">
                People change. Kids grow. Voices get older. And sometimes, people who were there won't be anymore. That's the hard part no one thinks about on the day. Memories do fade, even the good ones.
              </p>
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed mb-6 font-light text-center">
                That's why I focus on voices, reactions and the real interactions — not just how things looked.
              </p>
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed mb-6 font-light text-center">
                Photos stop a moment. Video brings the whole thing back — the way someone laughed, the way they hugged you, the sound of their voice saying your name.
              </p>
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed mb-6 font-light text-center">
                There's no redo for this. Once it's gone, it's gone. So I treat it carefully. I stay aware. I pay attention. I don't mess around with the parts that matter.
              </p>
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed font-light text-center">
                Years from now, when life looks different, this is how you see them again. How you hear them again. That's why I take being there seriously. You can trust me to hold onto it properly, even the bits you didn't notice at the time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-br from-olive-50 to-sand-50 border-y border-olive-200/30">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-olive-700 via-olive-800 to-olive-900 rounded-xl p-6 md:p-8 shadow-2xl shadow-olive-900/40 border border-olive-600/20">
            <div className="text-sand/30 text-5xl font-serif mb-3">"</div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-sand mb-4 leading-tight">
              Having a smaller wedding? That makes film more important — not less.
            </h3>
            <div className="space-y-3 text-base text-sand/90 leading-relaxed font-light">
              <p>Guest lists are getting tighter. That means the people there matter more.</p>
              <p>Smaller weddings aren't about scale. They're about closeness.<br />
              Film captures relationships, not just how things looked.</p>
              <p className="font-medium text-sand">That's why smaller weddings often create the most powerful films.</p>
              <p>The laugh from your best friend.<br />
              Your mum's voice during speeches.<br />
              The quiet reactions you didn't see happening.</p>
              <p className="font-medium text-sand">The more personal the day, the more powerful the film becomes.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="films" className="py-20 px-4 bg-sand-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              This Is Just the Highlights
            </h2>
            <p className="text-xl text-espresso-700/80">
              Two films. Two couples. One day each — cut down to the moments that matter.
            </p>
            <p className="text-sm text-espresso-600/70 mt-2">
              Little glimpses, not the full story.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-2xl relative group ring-1 ring-olive-300/40">
                <video
                  controls
                  playsInline
                  preload="none"
                  controlsList="nodownload"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  poster="https://assets.chrisjfilms.com/Pictures/TW"
                  className="w-full h-auto"
                  aria-label="Tasha and Will wedding film highlights - ChrisJFilms"
                  title="Cinematic wedding video highlights for Tasha and Will in the Midlands"
                >
                  <source src="https://assets.chrisjfilms.com/VIDEOS/WILLTTASH.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-espresso font-display">Tasha & Will</h3>
                <p className="text-espresso-600/70">Full Day Highlights</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-2xl relative group ring-1 ring-olive-300/40">
                <video
                  controls
                  playsInline
                  preload="none"
                  controlsList="nodownload"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  poster="https://assets.chrisjfilms.com/Pictures/CD"
                  className="w-full h-auto"
                  aria-label="Connie and David wedding film highlights - ChrisJFilms"
                  title="Professional wedding videography for Connie and David in Staffordshire"
                >
                  <source src="https://assets.chrisjfilms.com/VIDEOS/DAVCON.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-espresso font-display">Connie & David</h3>
                <p className="text-espresso-600/70">Full Day Highlights</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 px-4 bg-sand border-y border-olive-300/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Where Your Full Film Actually Lives
            </h2>
            <p className="text-xl text-espresso-700/80 max-w-3xl mx-auto font-light">
              The highlights are just a taste. Your real film — the full ceremony, speeches, all the parts that matter — lives in your private gallery.
            </p>
          </div>

          <div className="bg-sand-100 border border-olive-300/50 rounded-xl overflow-hidden shadow-2xl">
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
                src="https://galleries.vidflow.co/embed/d/alec_and_hannah"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                title="Alec and Hannah wedding film gallery - Example of ChrisJFilms private wedding video gallery"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-espresso-600/70 text-lg">
              Example gallery: Alec & Hannah
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-gradient-to-br from-clay-50 to-sand-50 border-y border-clay-200/30">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-clay-700 via-clay-800 to-clay-900 rounded-xl p-6 md:p-8 shadow-2xl shadow-clay-900/40 border border-clay-600/20">
            <div className="text-sand/30 text-5xl font-serif mb-3">"</div>
            <h3 className="text-xl md:text-2xl font-display font-bold text-sand mb-4 leading-tight">
              Not everything from a wedding stays. This does.
            </h3>
            <div className="space-y-3 text-base text-sand/90 leading-relaxed font-light">
              <p>A wedding has a lot of beautiful parts.<br />
              But most of them are gone within 24 hours.</p>
              <p>The flowers.<br />
              The food.<br />
              The decor.</p>
              <p>Film is one of the only parts of the day that still exists years later — with voices, movement and real moments intact.</p>
              <p className="font-medium text-sand">
                That's why couples don't regret having it.<br />
                They regret not having it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="py-20 px-4 bg-sand-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              How I Keep Your Wedding Day Safe
            </h2>
            <p className="text-xl text-espresso-700/80 max-w-3xl mx-auto font-light">
              Three ways to work together. Up to 10 hours coverage. Films delivered within 12 weeks.
            </p>
          </div>

          <PricingComparison scrollToContact={scrollToContact} />

          <div className="hidden">{/* Old pricing cards below */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-16">
            <div className="bg-warmBlack-light border border-gold-900/30 p-8 rounded-lg relative hover:border-gold-700/50 transition">
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-3 py-1 rounded text-sm font-bold shadow-lg">
                LIMITED TIME
              </div>
              <h3 className="text-2xl font-display font-bold text-softCream mb-2">Last-Minute Cinematic</h3>
              <div className="mb-4">
                <div className="text-4xl font-bold text-gold-400 mb-1">£1,050</div>
                <div className="text-gold-600 line-through text-lg">was £1,450</div>
                <div className="text-sm text-gold-300/70 mt-2">£200 deposit</div>
              </div>
              <p className="text-gold-300/70 text-sm mb-6">For weddings within 12 weeks</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Full day coverage</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Cinematic highlight film</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Professional editing</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>10 years of file storage</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Personalized gallery</span>
                </li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-warmBlack py-3 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-500 transition shadow-lg shadow-gold-900/30"
              >
                Book Now
              </button>
            </div>

            <div className="bg-warmBlack-light border border-gold-900/30 p-8 rounded-lg hover:border-gold-700/50 transition">
              <h3 className="text-2xl font-display font-bold text-softCream mb-2">Capture Only</h3>
              <div className="mb-4">
                <div className="text-4xl font-bold text-gold-400 mb-1">£850</div>
                <div className="text-sm text-gold-300/70">£200 deposit</div>
              </div>
              <p className="text-gold-300/70 text-sm mb-6">Everything filmed. No editing.</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Full day filming</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Raw footage delivery</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>No editing included</span>
                </li>
              </ul>
              <a
                href="https://lowbudgetweddingvideography.co.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-warmBlack border border-gold-900/50 text-gold-400 py-3 rounded-lg font-semibold hover:bg-warmBlack-light hover:border-gold-700/50 transition text-center"
              >
                Enquire
              </a>
            </div>

            <div className="bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600 p-8 rounded-lg relative shadow-2xl shadow-gold-900/60 ring-2 ring-gold-400/50">
              <div className="absolute -top-3 left-6 bg-warmBlack text-gold-400 px-3 py-1 rounded text-sm font-bold shadow-lg">
                MOST POPULAR
              </div>
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-3 py-1 rounded text-sm font-bold shadow-lg">
                VALENTINE'S OFFER
              </div>
              <h3 className="text-2xl font-display font-bold text-warmBlack mb-2">The Film</h3>
              <p className="text-sm text-warmBlack/80 mb-4 font-medium">Your wedding, shaped into a story</p>
              <div className="mb-4">
                <div className="text-4xl font-bold text-warmBlack mb-1">£1,620</div>
                <div className="text-warmBlack/70 line-through text-lg">was £1,800</div>
                <div className="text-sm text-warmBlack/80 mt-2">£200 deposit</div>
              </div>
              <p className="text-warmBlack/70 text-sm mb-6">Book before 14th Feb</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2 text-warmBlack/90 font-medium">
                  <CheckCircle className="w-5 h-5 text-warmBlack flex-shrink-0 mt-0.5" />
                  <span>Full day coverage</span>
                </li>
                <li className="flex items-start gap-2 text-warmBlack/90 font-medium">
                  <CheckCircle className="w-5 h-5 text-warmBlack flex-shrink-0 mt-0.5" />
                  <span>Full coverage & editing of speeches and ceremony</span>
                </li>
                <li className="flex items-start gap-2 text-warmBlack/90 font-medium">
                  <CheckCircle className="w-5 h-5 text-warmBlack flex-shrink-0 mt-0.5" />
                  <span>Cinematic trailer</span>
                </li>
                <li className="flex items-start gap-2 text-warmBlack/90 font-medium">
                  <CheckCircle className="w-5 h-5 text-warmBlack flex-shrink-0 mt-0.5" />
                  <span>Music-driven storytelling</span>
                </li>
                <li className="flex items-start gap-2 text-warmBlack/90 font-medium">
                  <CheckCircle className="w-5 h-5 text-warmBlack flex-shrink-0 mt-0.5" />
                  <span>10 years of file storage</span>
                </li>
                <li className="flex items-start gap-2 text-warmBlack/90 font-medium">
                  <CheckCircle className="w-5 h-5 text-warmBlack flex-shrink-0 mt-0.5" />
                  <span>Personalized gallery</span>
                </li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full bg-warmBlack text-gold-400 py-3 rounded-lg font-semibold hover:bg-warmBlack-light transition shadow-lg"
              >
                Book Now
              </button>
            </div>

            <div className="bg-warmBlack-light border border-gold-900/30 p-8 rounded-lg relative hover:border-gold-700/50 transition">
              <div className="absolute -top-3 left-6 bg-gradient-to-r from-rose-600 to-rose-700 text-white px-3 py-1 rounded text-sm font-bold shadow-lg">
                VALENTINE'S OFFER
              </div>
              <h3 className="text-2xl font-display font-bold text-softCream mb-2">The Record</h3>
              <p className="text-sm text-gold-300/70 mb-4">Film and photography together</p>
              <div className="mb-4">
                <div className="text-4xl font-bold text-gold-400 mb-1">£2,520</div>
                <div className="text-gold-600 line-through text-lg">was £2,800</div>
                <div className="text-sm text-gold-300/70 mt-2">£200 deposit</div>
              </div>
              <p className="text-gold-300/70 text-sm mb-6">Book before 14th Feb</p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Two videographers</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Photography included</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Complete coverage</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Premium editing</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>10 years of file storage</span>
                </li>
                <li className="flex items-start gap-2 text-gold-200/80">
                  <CheckCircle className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>Personalized gallery</span>
                </li>
              </ul>
              <button
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-warmBlack py-3 rounded-lg font-semibold hover:from-gold-400 hover:to-gold-500 transition shadow-lg shadow-gold-900/30"
              >
                Reserve Date
              </button>
            </div>
          </div>
          </div>{/* End hidden old pricing cards */}

          <div className="mt-16 max-w-4xl mx-auto space-y-8">
            <div className="bg-sand-100 border border-olive-300/50 p-8 rounded-lg">
              <h3 className="text-xl font-display font-bold text-espresso mb-2 text-center">If Your Date Qualifies</h3>
              <p className="text-espresso-600/70 text-sm mb-6 text-center">Some weddings are eligible for a reduced rate, depending on timing.</p>
              <div className="grid md:grid-cols-3 gap-4 text-espresso-700/80">
                <div className="text-center">
                  <div className="text-2xl font-bold text-olive-600 mb-1">£100 off</div>
                  <div className="text-sm">off-season weddings</div>
                  <div className="text-xs text-espresso-600/60 mt-1">(November – March)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-olive-600 mb-1">£100 off</div>
                  <div className="text-sm">mid-week weddings</div>
                  <div className="text-xs text-espresso-600/60 mt-1">(Monday–Thursday)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-olive-600 mb-1">£100 off</div>
                  <div className="text-sm">cash payment on the day</div>
                  <div className="text-xs text-espresso-600/60 mt-1">(remaining balance)</div>
                </div>
              </div>
            </div>

            <div className="bg-sand-100 border border-olive-300/50 p-8 rounded-lg">
              <h3 className="text-xl font-display font-bold text-espresso mb-6 text-center">Add-Ons</h3>
              <div className="grid md:grid-cols-3 gap-6 text-espresso-700/80">
                <div className="text-center">
                  <div className="text-2xl font-bold text-clay-600 mb-2">£350</div>
                  <div className="text-base font-semibold text-espresso mb-1">Additional Videographer</div>
                  <div className="text-xs text-espresso-600/60">Capture more angles and moments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-clay-600 mb-2">£250</div>
                  <div className="text-base font-semibold text-espresso mb-1">7-Day Express Delivery</div>
                  <div className="text-xs text-espresso-600/60">Get your film faster</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-clay-600 mb-2">On request</div>
                  <div className="text-base font-semibold text-espresso mb-1">Luxury Photo Album</div>
                  <div className="text-xs text-espresso-600/60">Premium printed keepsake</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12 space-y-4">
            <p className="text-espresso-600/70">Payment plans available · Clear service agreement · No surprises, no pressure</p>
            <p className="text-espresso-600/60 text-sm">
              Occasionally, I also have{' '}
              <a
                href="/last-minute-wedding-videographer"
                className="text-espresso-600/60 hover:text-olive-600 transition underline decoration-espresso-600/40"
              >
                last-minute wedding videography availability
              </a>
              {' '}for couples planning within a shorter timeframe.
            </p>
          </div>
        </div>
      </section>


      <section id="testimonials" className="py-20 px-4 bg-sand-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              From Past Couples
            </h2>
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-clay-500 text-clay-500" />
                ))}
              </div>
              <span className="text-xl text-espresso font-bold">5.0 / 51 reviews</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="elfsight-app-10ddc247-a999-41e4-a11a-2602f009ad9e" data-elfsight-app-lazy></div>
          </div>

          <div className="mt-16">
            <WhatsAppTestimonial
              name="Charlotte"
              message="Thank you so so much for yesterday both me and John really appreciate everything that you did and how amazing you were we had a brilliant time with you and I honestly can't thank you enough. You're a top bloke"
            />
          </div>

          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto bg-olive-100/40 border border-olive-300/40 rounded-xl p-8">
              <p className="text-lg md:text-xl text-espresso-700/90 leading-relaxed font-light">
                Most couples tell me afterwards this was one of the best decisions they made — because once the day is over, this is what brings people back.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section id="faq" className="py-20 px-4 bg-sand">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Common Questions
            </h2>
            <p className="text-espresso-700/80">What people usually ask</p>
          </div>

          <div className="space-y-4">
            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">Why have a wedding videographer at all?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  Because the day moves fast. You won't remember the voices, the little looks, the way people sounded. Video brings all that back in a way nothing else can.
                  <div className="mt-3">
                    <a href="/why-have-wedding-videographer" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">How far in advance should we book?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  As soon as you know you want me there. Dates go, especially summer ones, and once it's taken I can't redo it.
                  <div className="mt-3">
                    <a href="/how-far-in-advance-book-wedding-videographer" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">How long until we get the films?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  Up to 12 weeks. I take my time with it — this isn't something rushed.
                  <div className="mt-3">
                    <a href="/how-long-does-wedding-video-editing-take" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">Do you travel for weddings?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  Yep. I'm based in the Midlands but I go wherever the day is.
                  <div className="mt-3">
                    <a href="/do-you-travel-for-weddings" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">What's your filming style?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  Natural, close, but never in the way. I don't stage the day — I watch for the real stuff.
                  <div className="mt-3">
                    <a href="/wedding-videography-filming-style" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">Can we customise a package?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 5 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  Of course. Every wedding is different, and what matters to you might not be the same as the next couple.
                  <div className="mt-3">
                    <a href="/can-you-customise-wedding-videography-packages" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 6 ? null : 6)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">Do you need a meal?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 6 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 6 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  If I'm there all day, yes please. Keeps me human by the speeches.
                  <div className="mt-3">
                    <a href="/do-wedding-videographers-need-a-meal" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">What's the deposit to book?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 7 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 7 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  £200. That locks the date in the diary.
                  <div className="mt-3">
                    <a href="/wedding-videography-deposit" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 8 ? null : 8)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">Have you done many weddings?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 8 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 8 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  500+ over the years. And 100+ five-star reviews across Google, Hitched and Bridebook. Couples say the same thing — they're glad they had it, and glad it was me there.
                  <div className="mt-3">
                    <a href="/wedding-videography-experience" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 9 ? null : 9)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">Will we actually watch it years later?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 9 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 9 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  That's the point. It means more as time passes, not less.
                  <div className="mt-3">
                    <a href="/will-you-watch-wedding-video-later" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div className="border border-olive-300/50 rounded-lg bg-sand-100 hover:border-olive-400/60 transition">
              <button
                onClick={() => setOpenFaq(openFaq === 10 ? null : 10)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-lg font-semibold text-espresso">Do you offer any discounts?</span>
                <ChevronDown className={`w-5 h-5 text-olive-600 transition-transform ${openFaq === 10 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 10 && (
                <div className="px-6 pb-4 text-espresso-700/80 font-light">
                  Sometimes, yes. Certain dates and payment options can reduce the price.
                  <div className="mt-3">
                    <a href="/wedding-videography-discounts-off-season-midweek" className="text-olive-600 hover:text-olive-700 transition text-sm font-medium">
                      Read full answer →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-sand">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-6 leading-tight">
              If This Feels Important to You
            </h2>
            <p className="text-xl text-espresso-700/90 font-light leading-relaxed max-w-2xl mx-auto mb-8">
              Tell me about your day. I'll check the date and we'll take it from there.
            </p>
            <a
              href="https://wa.me/447710778846"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-olive-600 hover:text-olive-700 transition font-semibold text-lg border border-olive-400/50 px-8 py-4 rounded-lg hover:border-olive-500/60"
            >
              <MessageCircle className="w-6 h-6" />
              Message on WhatsApp
            </a>
          </div>

          <div className="bg-sand-100 border border-olive-300/50 p-8 rounded-lg shadow-xl shadow-olive-900/20">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-sand-100 border-t border-olive-300/30 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <h3 className="text-3xl font-script text-olive-600">ChrisJFilms</h3>
            </div>
            <p className="text-espresso-600/70 mb-4">
              Cinematic wedding films · 500+ couples · 12-week delivery
            </p>
            <div className="text-espresso-600/70 mb-6 space-y-1">
              <p>
                <a href="tel:+447710778846" className="hover:text-olive-600 transition">
                  07710 778846
                </a>
              </p>
              <p>
                <a href="mailto:chris@chrisjfilms.com" className="hover:text-olive-600 transition">
                  chris@chrisjfilms.com
                </a>
              </p>
            </div>
            <div className="flex justify-center gap-8 mb-6">
              <a href="#films" className="text-espresso-600/70 hover:text-olive-600 transition">Films</a>
              <a href="#packages" className="text-espresso-600/70 hover:text-olive-600 transition">Packages</a>
              <a href="#testimonials" className="text-espresso-600/70 hover:text-olive-600 transition">Reviews</a>
              <a href="#faq" className="text-espresso-600/70 hover:text-olive-600 transition">Q&A</a>
            </div>
            <div className="flex justify-center gap-6 mb-6">
              <a
                href="https://www.youtube.com/@chrisjfilmsUK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-espresso-600/70 hover:text-olive-600 transition"
                aria-label="YouTube"
              >
                <Youtube className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/ChrisJezierskiFilms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-espresso-600/70 hover:text-olive-600 transition"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/chrisjezierskifilms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-espresso-600/70 hover:text-olive-600 transition"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-espresso-700/60 text-sm mb-4">
              © 2026 ChrisJfilms · Staffordshire, Worcestershire, West Midlands & Warwickshire
            </p>
            <div className="text-espresso-600/60 text-xs space-x-3 mb-3">
              <a href="/staffordshire-wedding-videographer" className="hover:text-olive-600 transition">Staffordshire</a>
              <span>·</span>
              <a href="/west-midlands-wedding-videographer" className="hover:text-olive-600 transition">West Midlands</a>
              <span>·</span>
              <a href="/birmingham-wedding-videographer" className="hover:text-olive-600 transition">Birmingham</a>
              <span>·</span>
              <a href="/worcestershire-wedding-videographer" className="hover:text-olive-600 transition">Worcestershire</a>
            </div>
            <div className="text-espresso-600/60 text-xs">
              <a href="/privacy-policy" className="hover:text-olive-600 transition">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>

      <ExitIntentBanner />
    </div>
  );
}

export default App;
