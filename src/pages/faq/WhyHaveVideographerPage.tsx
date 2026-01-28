import { useEffect } from 'react';
import { updatePageMeta } from '../../lib/seo';
import { WhatsAppTestimonial } from '../../components/WhatsAppTestimonial';

export function WhyHaveVideographerPage() {
  useEffect(() => {
    updatePageMeta(
      'Why Have a Wedding Videographer? | ChrisJFilms Wedding Films',
      'Why hire a wedding videographer? Photos capture moments, but video brings back voices, movement, and emotion. Discover why wedding videography is essential for preserving your day in Birmingham, Staffordshire & the Midlands.',
      'why wedding videographer, importance of wedding video, wedding video vs photos, wedding videography benefits, preserve wedding memories, wedding videographer midlands, wedding film importance',
      'https://www.chrisjfilms.com/why-have-wedding-videographer',
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
            Why Have a Wedding Videographer at All?
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-sand-100 border border-olive-900/30 rounded-xl p-8 md:p-12 space-y-6 text-espresso-700/90 leading-relaxed">
              <p className="text-lg">
                Because the day moves fast. You won't remember the voices, the little looks, the way people sounded. Video brings all that back in a way nothing else can.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                What Photos Can't Capture
              </h2>
              <p>
                Photography is essential. It freezes moments beautifully. But a photo can't capture your dad's voice during the father-daughter dance, the way your partner laughed during the vows, or the nervous excitement in your voice as you said "I do."
              </p>
              <p>
                Video captures movement and sound. It's the difference between seeing someone smile and hearing their laughter. Between reading about a moment and being there again.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                Memories Fade Faster Than You Think
              </h2>
              <p>
                On the day itself, you're living in a blur. You're nervous, excited, overwhelmed in the best way. The ceremony feels like it lasts five minutes. The speeches fly by. Before you know it, everyone's dancing and the day is nearly done.
              </p>
              <p>
                Months later, you'll struggle to remember specific details. What did your best friend say in their speech? What song was playing during your first dance entrance? How did you actually feel walking down the aisle?
              </p>
              <p>
                Video holds onto those details for you. It doesn't fade or blur like memory does.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                People Change
              </h2>
              <p>
                This is the part no one thinks about on the day, but it matters more as time passes. People age. Kids grow up. Voices change. Sometimes, the people who were there won't always be around.
              </p>
              <p>
                Video becomes a way to hear them again. To see how they moved, how they spoke, how they looked at you. That's not morbid—it's just life. And it's one of the most meaningful reasons to have your day filmed properly.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                It Gets More Valuable Over Time
              </h2>
              <p>
                Some couples worry they won't watch their wedding video. The opposite is usually true. You might not watch it every week, but you'll come back to it. On anniversaries. When you're showing your kids. When you just want to remember.
              </p>
              <p>
                And as years pass, it becomes more precious, not less. Because life changes. You change. But the video stays the same—a window back to that exact moment in time.
              </p>

              <h2 className="text-2xl font-display font-bold text-olive-600 mt-8 mb-4">
                It's Not Just for You
              </h2>
              <p>
                Your children will want to see it. Your grandchildren might, too. It becomes part of your family's story—proof of where it all began, how everyone looked, what it felt like.
              </p>
              <p>
                Photos tell part of that story. Video tells the whole thing.
              </p>

              <div className="border-t border-olive-900/30 pt-6 mt-8">
                <h3 className="text-xl font-bold text-olive-600 mb-3">Related Articles</h3>
                <ul className="space-y-2 text-espresso-600/80 mb-6">
                  <li>• <a href="/will-you-watch-wedding-video-later" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">Will We Actually Watch It Years Later?</a> - The value of wedding films over time</li>
                  <li>• <a href="/wedding-videography-filming-style" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">What's Your Filming Style?</a> - How I capture your day naturally</li>
                  <li>• <a href="/#packages" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">View Packages</a> - See what's included in each package</li>
                </ul>
                <p className="text-espresso-600/80">
                  If you'd like to discuss whether wedding videography is right for you, or want to check availability for your date, <a href="/#contact" className="text-espresso-600 hover:text-olive-600 transition underline decoration-espresso-600/40">get in touch</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-sand">
        <div className="max-w-4xl mx-auto">
          <WhatsAppTestimonial
            name="Recent Bride"
            message="Wow Chris they are amazing! Thank you so much for capturing the day so well literally giving us goosebumps watching with dinner!! Thanks again!.... We will drop you fantastic reviews on all the pages this weekend!"
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
