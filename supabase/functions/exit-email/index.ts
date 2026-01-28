import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ExitEmailData {
  email: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { email }: ExitEmailData = await req.json();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        {
          status: 400,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
          },
        },
      );
    }

    const RESEND_EXIT_API_KEY = Deno.env.get('RESEND_EXIT_API_KEY');

    if (!RESEND_EXIT_API_KEY) {
      throw new Error('RESEND_EXIT_API_KEY not configured');
    }

    const emailBody = {
      from: 'Chris <chris@chrisjfilms.com>',
      to: [email],
      subject: 'The moments couples don\'t realise they\'ll miss',
      text: `Most couples plan a wedding around the obvious things.

The ceremony.
The photos.
The parts that are meant to matter.

After filming well over 500 weddings, I've noticed something consistent.
When couples look back, the regret is almost never about coverage or quality.
It's about moments they didn't know were important at the time.

It's the quiet bits that sit in between.

The room before the ceremony, when everything is technically happening but nothing has started yet.
Parents hovering, fixing things, pretending they're fine.
Small, throwaway exchanges that aren't on any schedule but end up carrying the most weight.
Voices — not how people looked, but how they sounded when you hear them back years later.
The pace of the day, before it speeds up and never really slows down again.

Those moments don't announce themselves.
They only make sense afterwards.

Chris
Wedding Filmmaker
500+ weddings since 2016`,
    };

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_EXIT_API_KEY}`,
      },
      body: JSON.stringify(emailBody),
    });

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to send email: ${error}`);
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  } catch (error) {
    console.error('Error sending exit email:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
      },
    );
  }
});
