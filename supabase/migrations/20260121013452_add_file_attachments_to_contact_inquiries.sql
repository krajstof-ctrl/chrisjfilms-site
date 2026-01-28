/*
  # Add File Attachments to Contact Inquiries

  1. Changes
    - Add `file_attachments` column to `contact_inquiries` table to store uploaded file URLs
  
  2. Details
    - Column type: jsonb array
    - Default: empty array
    - Allows clients to attach inspiration files, documents, or reference materials
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'contact_inquiries' AND column_name = 'file_attachments'
  ) THEN
    ALTER TABLE contact_inquiries ADD COLUMN file_attachments jsonb DEFAULT '[]'::jsonb;
  END IF;
END $$;