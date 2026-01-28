import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';
import { WhatsAppTestimonial } from '../../components/WhatsAppTestimonial';
import { addStructuredData, createArticleStructuredData, createBreadcrumbStructuredData } from '../../lib/structuredData';

export function ExperiencePage() {
  useEffect(() => {
    updatePageMeta(
      'Wedding Videography Experience | 500+ Weddings Filmed | ChrisJFilms',
      'How many weddings has ChrisJFilms filmed? Over 500 weddings since 2016, with 100+ five-star reviews across Google, Hitched, and Bridebook. Experienced wedding videographer serving Birmingham, Staffordshire, and the Midlands.',
      'wedding videographer experience, how many weddings filmed, experienced wedding videographer, wedding videography reviews, midlands wedding videographer, professional wedding films, chrisjfilms reviews',
      'https://www.chrisjfilms.com/wedding-videography-experience',
      'https://www.chrisjfilms.com/dsc06014.jpg'
    );

    addStructuredData(createArticleStructuredData(
      'Have You Done Many Weddings?',
      '500+ weddings filmed since 2016 with 100+ five-star reviews. Learn what experience really means in wedding videography and why it matters for your big day.',
      'Chris Jezierski',
      '2026-01-27',
      '2026-01-27',
      'https://www.chrisjfilms.com/wedding-videography-experience',
      'https://www.chrisjfilms.com/dsc06014.jpg'
    ));

    addStructuredData(createBreadcrumbStructuredData([
      { name: 'Home', url: 'https://www.chrisjfilms.com' },
      { name: 'Wedding Videography Experience', url: 'https://www.chrisjfilms.com/wedding-videography-experience' }
    ]));
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
            Have You Done Many Weddings?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed text-lg">
              <p>
                Yeah — 500+ over the years. And 100+ five-star reviews across Google, Hitched and Bridebook.
              </p>

              <p>
                But the number only matters because of what it teaches you.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                What that experience actually means
              </h2>

              <p>
                It means I don't panic when timelines slip. Because they do.<br />
                It means I know where to stand in a ceremony without being in anyone's way.<br />
                It means I can feel when a moment is about to happen and be ready before it does.
              </p>

              <p>
                After this many weddings, you've seen a bit of everything. Weather plans changing last minute. Rooms running late. Mics not working. Family dynamics. Emotional moments no one expected. You learn to stay calm and just handle it.
              </p>

              <p>
                From your side, it should feel smooth. Even if behind the scenes, it isn't.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                Why the reviews matter more
              </h2>

              <p>
                Anyone can say they're "experienced". Reviews are couples saying it.
              </p>

              <p>
                Most of them don't talk about cameras or gear. They say things like:<br />
                "Didn't feel in the way."<br />
                "Captured things we didn't even notice."<br />
                "So glad we had this."
              </p>

              <p>
                That's the real job — being someone you're comfortable having around on a big, emotional day.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                What I've learned from doing this so much
              </h2>

              <p>
                The best moments aren't the posed ones.<br />
                The things couples worry about usually turn out fine.<br />
                And years later, the bits that matter most are the people and the voices.
              </p>

              <p>
                Experience just means I know how to move through the day quietly, notice things early, and not miss the important stuff while you're busy living it.
              </p>

              <p>
                It's not about showing off a number. It's about you feeling safe knowing the day's in steady hands.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <h3 className="text-xl font-bold text-olive-600 mb-3">Related Articles</h3>
                <ul className="space-y-2 text-espresso-600/80 mb-6">
                  <li>• <a href="/#testimonials" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Read Reviews</a> - See what past couples have said</li>
                  <li>• <a href="/wedding-videography-filming-style" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">What's Your Filming Style?</a> - How I work on the day</li>
                  <li>• <a href="/#films" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Watch Sample Films</a> - See examples of finished work</li>
                </ul>
                <p className="text-espresso-600/80">
                  If you'd like to discuss your wedding day and how I can help capture it, <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">get in touch</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-sand">
        <div className="max-w-4xl mx-auto">
          <WhatsAppTestimonial
            name="Recent Couple"
            date="September 2025"
            message="Chris you are phenomenal! Thank you so so much for your beautiful work! X"
          />
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
