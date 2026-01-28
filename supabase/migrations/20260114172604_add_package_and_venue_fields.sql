/*
  # Add Package and Venue Fields to Contact Inquiries

  1. Changes
    - Add `package` column to store selected package (Budget, Standard, Ultimate, Last Minute)
    - Add `venue` column to store wedding venue information
    - Both fields are required (NOT NULL)
  
  2. Notes
    - Using CHECK constraint to ensure valid package values
    - Venue is stored as text for flexibility
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'package'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN package text NOT NULL DEFAULT 'Standard';
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'venue'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN venue text NOT NULL DEFAULT '';
  END IF;
END $$;

-- Add check constraint for valid package values
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'valid_package'
  ) THEN
    ALTER TABLE contact_inquiries
    ADD CONSTRAINT valid_package CHECK (package IN ('Budget', 'Standard', 'Ultimate', 'Last Minute'));
  END IF;
END $$;