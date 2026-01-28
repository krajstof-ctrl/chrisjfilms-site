/*
  # Create File Storage Bucket

  1. New Storage Bucket
    - `wedding-uploads` - Public bucket for client file uploads
  
  2. Security
    - Enable RLS on storage.objects
    - Allow authenticated users to upload files
    - Allow public read access to uploaded files
    - Allow users to delete their own uploads
*/

-- Create the storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('wedding-uploads', 'wedding-uploads', true)
ON CONFLICT (id) DO NOTHING;

-- Allow authenticated users to upload files
CREATE POLICY "Authenticated users can upload files"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'wedding-uploads');

-- Allow anyone to view uploaded files (public bucket)
CREATE POLICY "Anyone can view uploaded files"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'wedding-uploads');

-- Allow authenticated users to delete their own uploads
CREATE POLICY "Users can delete their own uploads"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'wedding-uploads' AND auth.uid() = owner);

-- Allow authenticated users to update their own uploads
CREATE POLICY "Users can update their own uploads"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'wedding-uploads' AND auth.uid() = owner);