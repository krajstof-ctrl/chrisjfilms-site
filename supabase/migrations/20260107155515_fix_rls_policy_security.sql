/*
  # Fix RLS Policy Security for Contact Inquiries

  1. Changes
    - Drop the overly permissive INSERT policy that uses WITH CHECK (true)
    - Create a new restrictive INSERT policy that validates data
    - Add rate limiting considerations through validation

  2. Security Improvements
    - Validates that name is not empty and has reasonable length
    - Validates that email is not empty and follows basic format
    - Validates that email has reasonable length to prevent spam
    - Ensures name contains actual characters (not just whitespace)
    - Limits message length to prevent abuse
    
  3. Notes
    - This still allows anonymous users to submit contact forms (required for functionality)
    - But adds validation to prevent malicious submissions
    - Consider implementing rate limiting at the application or Edge Function level
*/

-- Drop the insecure policy
DROP POLICY IF EXISTS "Anyone can submit contact inquiries" ON contact_inquiries;

-- Create a new, more restrictive policy with validation
CREATE POLICY "Allow validated contact form submissions"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (
    -- Ensure name is not empty and has reasonable length
    length(trim(name)) >= 2 AND
    length(name) <= 100 AND
    -- Ensure name contains actual characters, not just special characters
    name ~ '[A-Za-z]' AND
    -- Ensure email is not empty and has basic format validation
    length(trim(email)) >= 5 AND
    length(email) <= 255 AND
    email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' AND
    -- Ensure message is within reasonable length (if provided)
    length(message) <= 5000 AND
    -- Ensure phone is within reasonable length (if provided)
    length(phone) <= 50 AND
    -- Ensure status is set to 'new' (prevent status manipulation)
    (status = 'new' OR status IS NULL)
  );
