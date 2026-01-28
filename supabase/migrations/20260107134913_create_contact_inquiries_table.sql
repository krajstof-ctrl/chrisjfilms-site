/*
  # Create Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key) - Unique identifier for each inquiry
      - `name` (text) - Full name of the person inquiring
      - `email` (text) - Email address for follow-up
      - `phone` (text) - Phone number (optional)
      - `wedding_date` (date) - Date of the wedding event
      - `message` (text) - Additional message or questions
      - `created_at` (timestamptz) - Timestamp when inquiry was submitted
      - `status` (text) - Status of the inquiry (new, contacted, booked, declined)
  
  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policy for inserting inquiries (public access for form submissions)
    - Add policy for admin viewing all inquiries (authenticated users only)
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  wedding_date date,
  message text DEFAULT '',
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);