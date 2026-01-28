import { useEffect, useRef, useState } from 'react';
import { Camera, Film, Heart, Award, Users, Clock } from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { WhatsAppTestimonial } from '../components/WhatsAppTestimonial';
import { updatePageMeta } from '../lib/seo';

export function MeetChrisPage() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    updatePageMeta(
      'Meet Chris - Wedding Videographer Birmingham & Midlands | ChrisJFilms',
      'Meet Chris, award-winning wedding videographer serving Birmingham, Staffordshire, Worcestershire and the West Midlands since 2016. Over 500 weddings filmed and edited by hand. Professional, cinematic wedding films you\'ll return to. Packages from £850: Capture Only, The Film, and The Record.',
      'wedding videographer Birmingham, wedding videographer Midlands, wedding filmmaker Birmingham, cinematic wedding videography, professional wedding videographer, Birmingham wedding films, Staffordshire wedding videographer, West Midlands videographer, meet chris wedding videographer',
      'https://www.chrisjfilms.com/meet-chris',
      'https://www.chrisjfilms.com/dsc06014.jpg'
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
            Get in Touch
          </button>
        </div>
      </header>

      <section className="py-20 px-4 bg-gradient-to-b from-sand-100 to-sand">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-espresso mb-6 leading-tight">
              Meet Chris
            </h1>
          </div>

          <div className="mb-16">
            <div className="max-w-3xl mx-auto rounded-xl overflow-hidden border-2 border-olive-300/50 shadow-2xl shadow-olive-900/20">
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
                aria-label="Meet Chris - ChrisJFilms wedding videographer"
              >
                <source src="https://assets.chrisjfilms.com/VIDEOS/meetchris2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand border-y border-olive-900/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-sand-100/70 border border-olive-300/30 rounded-xl p-12">
            <div className="text-espresso-700/90 space-y-6 leading-relaxed text-lg">
              <p>
                I didn't plan this career. No film school, no perfect path — just a camera, a lot of bad early edits, and years figuring out how to capture things in a way that feels real.
              </p>
              <p>
                Somewhere along the way, weddings got to me.
              </p>
              <p>
                A dad trying not to cry (and failing).<br />
                A couple holding hands like, "this is it."<br />
                A room full of people saying things they don't usually say out loud.
              </p>
              <p>
                That energy never gets old.
              </p>
              <p>
                I'm Chris, a wedding videographer at ChrisJFilms, filming cinematic wedding stories across Staffordshire and beyond. My job isn't to stage your day — it's to witness it properly. The real bits. The quick looks. The background moments. The people who won't always be there years from now.
              </p>
              <p>
                It's a privilege being that close on a day like this. And I treat it that way.
              </p>
              <p>
                I move quietly, keep things calm, and step in only when it helps. Most couples say they forget I'm even there. Later, I sit with everything and shape your cinematic wedding film by hand — no templates, no outsourcing. Just your voices, your people, your story.
              </p>
              <p>
                And honestly, a lot of why this matters to me comes from home.
              </p>
              <p>
                I'm engaged to Patrycja, and we've got two kids, Mia and Kamil. They're the reason I understand how fast time moves. One minute they're tiny, the next they're not. Watching them grow has made me hold onto moments differently. It's why I care so much about preserving them for other families too.
              </p>
              <p>
                Because years from now, when life looks different, this won't just be a wedding video or photos. It'll be how you see them again. Hear them again. Feel what it was like to stand right there, at the start of everything.
              </p>
              <p>
                That's the responsibility.<br />
                And it means a lot that couples trust me with it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-sand">
        <div className="max-w-4xl mx-auto">
          <WhatsAppTestimonial
            name="Recent Bride"
            message="Hey Chris, oh my goodness, I just wanted to say thank you SO much for your incredible work on our wedding day. The footage you took of the wedding is just so beautiful, you captured it all, it is breathtaking. You are so talented. You were also so lovely to be around, never interfered with the day and so warm and when you stepped in to do the countdown for the cake when we had no idea what to do as our MC wasn't there, it just summed up how awesome you are."
          />
        </div>
      </section>

      <section className="py-20 px-4 bg-sand-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-8 text-center">
            Why Couples Choose ChrisJFilms
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-sand border border-olive-300/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-olive-600 mb-3">Experience That Shows</h3>
              <p className="text-espresso-700/80 leading-relaxed">
                500+ weddings filmed since 2016. I know the flow, the pressure points, and how to handle them without drama.
              </p>
            </div>
            <div className="bg-sand border border-olive-300/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-olive-600 mb-3">Honest, Natural Films</h3>
              <p className="text-espresso-700/80 leading-relaxed">
                No staging. No trends. Just your day as it actually happened.
              </p>
            </div>
            <div className="bg-sand border border-olive-300/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-olive-600 mb-3">Edited by Me — Always</h3>
              <p className="text-espresso-700/80 leading-relaxed">
                Every film is hand-edited, cut to music, and crafted with intention. I stand behind every frame.
              </p>
            </div>
            <div className="bg-sand border border-olive-300/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-olive-600 mb-3">Clear Communication</h3>
              <p className="text-espresso-700/80 leading-relaxed">
                You'll always know what's included, what's next, and when your film will be ready.
              </p>
            </div>
            <div className="bg-sand border border-olive-300/30 rounded-xl p-8">
              <h3 className="text-xl font-bold text-olive-600 mb-3">Local Knowledge, Calm Presence</h3>
              <p className="text-espresso-700/80 leading-relaxed">
                Based in the Midlands, familiar with venues across Birmingham, Staffordshire, Worcestershire, and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-sand border-y border-olive-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-6">
            Ready to Capture Your Story?
          </h2>
          <div className="text-espresso-700/90 space-y-4 leading-relaxed text-lg mb-12">
            <p>
              Every wedding is unique. I'd love to hear about yours and see if we're the right fit.
            </p>
          </div>
          <button
            onClick={scrollToContact}
            className="text-espresso-600 hover:text-olive-600 transition font-medium text-lg underline decoration-espresso-600/40"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <section ref={contactRef} id="contact" className="py-20 px-4 bg-sand-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
              Let's Talk About Your Wedding
            </h2>
            <p className="text-xl text-espresso-700/90 font-light leading-relaxed">
              Tell me about your wedding, and <span className="text-olive-600 font-medium">I (Chris) will personally</span> get back to you within 24 hours
            </p>
          </div>
          <div className="bg-sand border border-olive-300/30 p-8 rounded-lg shadow-xl shadow-olive-900/20">
            <ContactForm
              isOpen={isFormOpen}
              onClose={() => setIsFormOpen(false)}
            />
          </div>
        </div>
      </section>

      <footer className="bg-sand border-t border-olive-900/30 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-espresso-600/60 text-sm mb-3">
            © 2026 ChrisJFilms. Wedding Videographer in Birmingham, Staffordshire, West Midlands & Worcestershire.
          </p>
          <div className="text-espresso-600/60 text-xs">
            <a href="/privacy-policy" className="hover:text-olive-600 transition">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
