import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactFormProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultPackage?: string;
}

export function ContactForm({ defaultPackage = 'The Film' }: ContactFormProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    wedding_date: '',
    package: defaultPackage,
    venue: '',
    referral_source: 'Google Search'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([formData]);

      if (error) throw error;

      // Send email notification
      try {
        const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-contact-email`;
        await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      } catch (emailError) {
        console.error('Error sending email notification:', emailError);
        // Don't fail the form submission if email fails
      }

      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-espresso-700 mb-1">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-sand border border-olive-400/50 text-espresso rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent transition placeholder:text-espresso-500"
          placeholder="John & Jane"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-espresso-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-sand border border-olive-400/50 text-espresso rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent transition placeholder:text-espresso-500"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-espresso-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-sand border border-olive-400/50 text-espresso rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent transition placeholder:text-espresso-500"
          placeholder="+44 7700 900000"
        />
      </div>

      <div>
        <label htmlFor="wedding_date" className="block text-sm font-medium text-espresso-700 mb-1">
          Wedding Date *
        </label>
        <input
          type="date"
          id="wedding_date"
          name="wedding_date"
          required
          value={formData.wedding_date}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-sand border border-olive-400/50 text-espresso rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label htmlFor="package" className="block text-sm font-medium text-espresso-700 mb-1">
          Package of Interest *
        </label>
        <select
          id="package"
          name="package"
          required
          value={formData.package}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-sand border border-olive-400/50 text-espresso rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent transition cursor-pointer"
        >
          <option value="Capture Only">Capture Only</option>
          <option value="The Film">The Film</option>
          <option value="The Record">The Record</option>
          <option value="Last Minute">Last Minute</option>
        </select>
      </div>

      <div>
        <label htmlFor="venue" className="block text-sm font-medium text-espresso-700 mb-1">
          Wedding Venue *
        </label>
        <input
          type="text"
          id="venue"
          name="venue"
          required
          value={formData.venue}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-sand border border-olive-400/50 text-espresso rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent transition placeholder:text-espresso-500"
          placeholder="e.g., Alrewas Hayes, Burton upon Trent"
        />
      </div>

      <div>
        <label htmlFor="referral_source" className="block text-sm font-medium text-espresso-700 mb-1">
          Where did you find me? *
        </label>
        <select
          id="referral_source"
          name="referral_source"
          required
          value={formData.referral_source}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-sand border border-olive-400/50 text-espresso rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent transition cursor-pointer"
        >
          <option value="Google Search">Google Search</option>
          <option value="Bridebook">Bridebook</option>
          <option value="Hitched">Hitched</option>
          <option value="Word of Mouth">Word of Mouth</option>
          <option value="AddToEvent">AddToEvent</option>
          <option value="Somewhere Else">Somewhere Else</option>
        </select>
      </div>

      {submitStatus === 'error' && (
        <div className="p-4 bg-rose-950 border border-rose-700/50 rounded-lg text-rose-200">
          Something went wrong. Please try again or message me directly.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-olive-600 to-olive-700 text-sand py-4 px-8 rounded-lg font-semibold hover:from-olive-500 hover:to-olive-600 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg shadow-lg shadow-olive-900/50"
      >
        {isSubmitting ? 'Sending...' : 'Check Availability'}
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
}
