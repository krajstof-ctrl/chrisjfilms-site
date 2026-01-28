/*
  # Fix Package Constraint to Allow New Package Names

  1. Changes
    - Drop old restrictive constraint
    - Add new constraint that allows both old and new package names for compatibility
  
  2. Notes
    - This ensures both old data and new submissions will work
    - Allows: 'Budget', 'Standard', 'Ultimate', 'Capture Only', 'The Film', 'The Record', 'Last Minute'
*/

-- Drop the old constraint if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'valid_package'
  ) THEN
    ALTER TABLE contact_inquiries DROP CONSTRAINT valid_package;
  END IF;
END $$;

-- Add new constraint that allows both old and new package names
ALTER TABLE contact_inquiries
ADD CONSTRAINT valid_package CHECK (
  package IN (
    'Budget', 
    'Standard', 
    'Ultimate', 
    'Capture Only', 
    'The Film', 
    'The Record', 
    'Last Minute'
  )
);