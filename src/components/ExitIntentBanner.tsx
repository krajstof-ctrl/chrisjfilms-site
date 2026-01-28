import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function ExitIntentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    const sessionShown = sessionStorage.getItem('exitIntentShown');
    if (sessionShown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (hasShown) return;

      if (e.clientY <= 0 && !isVisible) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/exit-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-espresso/90 backdrop-blur-md z-[100] flex items-start justify-center pt-20 px-4 animate-fadeIn">
      <div className="bg-sand border-2 border-olive-400 rounded-2xl p-8 md:p-10 max-w-2xl w-full shadow-2xl shadow-espresso/50 animate-slideDown relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-espresso-600 hover:text-espresso transition"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          {!isSuccess ? (
            <>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-espresso mb-6">
                One Thing Couples Regret After the Wedding
              </h2>

              <p className="text-lg md:text-xl text-espresso-700/90 mb-8 font-light max-w-xl mx-auto leading-relaxed">
                It's not the dress.<br />
                It's not the flowers.<br />
                <br />
                It's the moments they didn't realise mattered until it was too late.
              </p>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg bg-sand-100 border border-olive-400/50 text-espresso placeholder:text-espresso-500 focus:outline-none focus:ring-2 focus:ring-olive-500 focus:border-transparent mb-4 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-olive-600 to-olive-700 text-sand px-8 py-4 rounded-lg font-bold text-lg hover:from-olive-500 hover:to-olive-600 transition shadow-xl shadow-olive-900/50 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send It to Me'}
                </button>
                <p className="text-espresso-600/60 text-xs mt-3">
                  Your email is not stored or added to any mailing list.
                </p>
              </form>
            </>
          ) : (
            <div className="py-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-olive-600 mb-4">
                Sent. Check your inbox.
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
