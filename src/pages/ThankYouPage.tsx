import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export function ThankYouPage() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'inquiry');
    }
  }, []);

  return (
    <div className="min-h-screen bg-sand text-espresso font-sans flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-sand-100 border border-olive-900/30 p-12 rounded-xl shadow-2xl shadow-olive-900/20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-full mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-espresso mb-4">
            Thank You!
          </h1>

          <p className="text-xl text-espresso-600/90 mb-6 font-light leading-relaxed">
            Your inquiry has been received. I'll personally get back to you within 24 hours.
          </p>

          <p className="text-lg text-espresso-600/80 mb-8">
            I'm looking forward to discussing how I can capture your special day.
          </p>

          <a
            href="/"
            className="inline-block text-espresso-600 hover:text-olive-600 transition font-medium underline decoration-espresso-600/40"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
}
