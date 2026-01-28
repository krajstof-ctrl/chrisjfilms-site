import { CheckCircle } from 'lucide-react';

interface PricingComparisonProps {
  scrollToContact: () => void;
}

export function PricingComparison({ scrollToContact }: PricingComparisonProps) {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-sand-100 border border-olive-300/50 rounded-xl overflow-hidden hover:border-olive-400/60 transition">
          <div className="p-8">
            <h3 className="text-2xl font-display font-bold text-espresso mb-2">Capture Only</h3>
            <p className="text-espresso-700 text-base font-semibold mb-2">Everything Captured. Nothing Shaped.</p>
            <p className="text-espresso-600/70 text-sm mb-2">This is the day, recorded as it happened — safely kept, untouched.</p>
            <p className="text-espresso-600/60 text-xs mb-4">For couples who want every moment preserved, but don't need a finished film. No edits, no creative interpretation. Just your wedding day, fully documented and handed over.</p>
            <div className="mb-6">
              <div className="text-5xl font-bold text-olive-600 mb-1">£850</div>
              <div className="text-sm text-espresso-600/70">£200 deposit</div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-espresso-700 mb-3 uppercase tracking-wide">What's Included</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Up to 10 hours of coverage</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>1 videographer (Chris or trusted associate)</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Filmed in 4K for long-term quality</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Dual-camera coverage for full safeguarding of key moments</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Professional audio recording of the important parts</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>All raw footage delivered on a dedicated SSD</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Files prepared for easy viewing and future editing</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-olive-600 flex-shrink-0 mt-0.5" />
                  <span>Delivered within 14 days</span>
                </li>
              </ul>
              <p className="text-espresso-700/60 text-xs mt-4 italic">Editing is not included — this package is purely about preserving everything exactly as it was.</p>
            </div>

            <div className="space-y-2">
              <button
                onClick={scrollToContact}
                className="w-full bg-sand border border-olive-400/50 text-olive-600 py-3 rounded-lg font-semibold hover:bg-sand-50 hover:border-olive-500/60 transition"
              >
                See if your date is still free
              </button>
              <a
                href="/budget-wedding-videographer"
                className="block w-full text-olive-600/70 hover:text-olive-600 text-sm text-center transition"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-olive-500 via-olive-600 to-olive-700 rounded-xl overflow-visible relative shadow-2xl shadow-olive-900/60 ring-4 ring-olive-400/50 transform scale-105">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sand text-olive-700 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg whitespace-nowrap z-10">
            ⭐ RECOMMENDED
          </div>

          <div className="p-8 pt-12">
            <h3 className="text-2xl font-display font-bold text-sand mb-2">The Film</h3>
            <p className="text-sand/95 text-base font-semibold mb-2">Your wedding, shaped into a story you'll return to.</p>
            <p className="text-sand/85 text-sm mb-4 font-medium">This is where the day is fully kept safe, then put together in a way that brings it back properly. Not just how it looked, but how it felt to stand there. The voices, the people, the little bits you didn't even see happening.</p>
            <div className="mb-6">
              <div className="text-5xl font-bold text-sand mb-1">£1,800</div>
              <div className="text-sm text-sand/90 mt-2">£200 deposit</div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-sand mb-3 uppercase tracking-wide">What's Included</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>Up to 10 hours of coverage</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>1 videographer (Chris) there to quietly safeguard the important moments</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>Filmed in 4K for lasting quality</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>Cinematic highlight film (8–12 minutes) that brings the day back to life</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>Full ceremony film — every word, vow and reaction preserved</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>Full speeches film — voices and stories you won't want to lose</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>First dance film</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>Short social media trailer</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>Aerial footage (weather & permission dependent)</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>Personalised online gallery for easy watching and sharing</span>
                </li>
                <li className="flex items-start gap-2 text-sand/95 font-medium">
                  <CheckCircle className="w-4 h-4 text-sand flex-shrink-0 mt-0.5" />
                  <span>10 years of secure file storage, keeping everything safe long-term</span>
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <button
                onClick={scrollToContact}
                className="w-full bg-sand text-olive-700 py-3 rounded-lg font-bold hover:bg-sand-50 transition shadow-xl"
              >
                See if your date is still free
              </button>
              <a
                href="/cinematic-wedding-videographer"
                className="block w-full text-sand/80 hover:text-sand text-sm text-center transition font-semibold"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>

        <div className="bg-sand-100 border border-olive-300/50 rounded-xl overflow-visible hover:border-olive-400/60 transition relative">
          <div className="p-8">
            <h3 className="text-2xl font-display font-bold text-espresso mb-2">The Record</h3>
            <p className="text-espresso-700 text-base font-semibold mb-2">Film and photography captured together</p>
            <p className="text-espresso-600/70 text-sm mb-4">Days like this don't stay the same for long. People change, kids grow, some faces you see here won't always be around. This package is about keeping all of it before time quietly takes its share.</p>
            <div className="mb-6">
              <div className="text-5xl font-bold text-clay-600 mb-1">£2,800</div>
              <div className="text-sm text-espresso-600/70 mt-2">£200 deposit</div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-espresso-700 mb-3 uppercase tracking-wide">What's Included</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-clay-600 flex-shrink-0 mt-0.5" />
                  <span>Everything from The Film package</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-clay-600 flex-shrink-0 mt-0.5" />
                  <span>1 professional wedding photographer</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-clay-600 flex-shrink-0 mt-0.5" />
                  <span>500+ edited photographs</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-clay-600 flex-shrink-0 mt-0.5" />
                  <span>Photo & video galleries</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-clay-600 flex-shrink-0 mt-0.5" />
                  <span>One team working side by side all day</span>
                </li>
                <li className="flex items-start gap-2 text-espresso-700/80">
                  <CheckCircle className="w-4 h-4 text-clay-600 flex-shrink-0 mt-0.5" />
                  <span>No overlap, no moments slipping past</span>
                </li>
              </ul>
              <p className="text-espresso-600/70 text-sm mt-4 italic">So later, when life looks different, you don't just try to remember. You can actually see it. Hear it. The way it really was, people and all.</p>
            </div>

            <div className="space-y-2">
              <button
                onClick={scrollToContact}
                className="w-full bg-gradient-to-r from-clay-600 to-clay-700 text-sand py-3 rounded-lg font-bold hover:from-clay-500 hover:to-clay-600 transition shadow-lg shadow-clay-900/30"
              >
                See if your date is still free
              </button>
              <a
                href="/wedding-videographer-and-photographer"
                className="block w-full text-clay-600/70 hover:text-clay-600 text-sm text-center transition"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-espresso-700/70 text-sm max-w-2xl mx-auto leading-relaxed">
          These are the moments couples tell me matter most years later.
        </p>
      </div>
    </div>
  );
}
