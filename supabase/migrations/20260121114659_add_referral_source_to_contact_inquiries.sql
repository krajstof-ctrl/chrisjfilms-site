/*
  # Add Referral Source Field to Contact Inquiries

  1. Changes
    - Add `referral_source` column to `contact_inquiries` table
    - Remove dependency on `message` and `file_attachments` fields (make them optional/nullable)
  
  2. Details
    - Column type: text
    - Stores where the client found the business
    - Options: Google Search, Bridebook, Hitched, Word of Mouth, AddToEvent, Somewhere Else
    - Required field for new form submissions
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'referral_source'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN referral_source text DEFAULT '';
  END IF;
END $$;