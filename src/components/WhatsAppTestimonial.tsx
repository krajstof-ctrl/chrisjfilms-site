import { MessageCircle } from 'lucide-react';

interface WhatsAppTestimonialProps {
  name: string;
  message: string;
  date?: string;
}

export function WhatsAppTestimonial({ name, message, date }: WhatsAppTestimonialProps) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-[#1f2c33] to-[#0d1418] rounded-2xl p-6 md:p-8 shadow-2xl border border-olive-600/30">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-olive-600 rounded-full p-2">
            <MessageCircle className="w-5 h-5 text-sand" />
          </div>
          <div>
            <div className="text-sand font-semibold text-lg">{name}</div>
            {date && <div className="text-sand/60 text-xs">{date}</div>}
          </div>
        </div>
        <div className="bg-[#005c4b] rounded-xl p-4 md:p-5">
          <p className="text-sand leading-relaxed text-base md:text-lg">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
