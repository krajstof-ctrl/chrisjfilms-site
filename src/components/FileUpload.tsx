import { useState } from 'react';
import { Upload, X, FileIcon, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FileUploadProps {
  onUploadComplete?: (url: string) => void;
  maxFiles?: number;
  acceptedTypes?: string;
}

interface UploadedFile {
  name: string;
  url: string;
  size: number;
}

export function FileUpload({
  onUploadComplete,
  maxFiles = 5,
  acceptedTypes = "image/*,video/*,.pdf,.doc,.docx"
}: FileUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const uploadFile = async (file: File) => {
    try {
      setUploading(true);
      setError(null);

      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = fileName;

      const { data, error: uploadError } = await supabase.storage
        .from('wedding-uploads')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        throw uploadError;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('wedding-uploads')
        .getPublicUrl(filePath);

      const newFile: UploadedFile = {
        name: file.name,
        url: publicUrl,
        size: file.size
      };

      setUploadedFiles(prev => [...prev, newFile]);

      if (onUploadComplete) {
        onUploadComplete(publicUrl);
      }

      return publicUrl;
    } catch (err: any) {
      setError(err.message || 'Failed to upload file');
      throw err;
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    if (uploadedFiles.length + files.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    try {
      for (let i = 0; i < files.length; i++) {
        await uploadFile(files[i]);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    }

    e.target.value = '';
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (!files || files.length === 0) return;

    if (uploadedFiles.length + files.length > maxFiles) {
      setError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    try {
      for (let i = 0; i < files.length; i++) {
        await uploadFile(files[i]);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? 'border-gold-400 bg-gold-400/5'
            : 'border-gold-900/30 hover:border-gold-700/50'
        } ${uploading ? 'opacity-50 pointer-events-none' : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          id="file-upload"
          className="hidden"
          onChange={handleFileChange}
          accept={acceptedTypes}
          multiple={maxFiles > 1}
          disabled={uploading || uploadedFiles.length >= maxFiles}
        />

        {uploading ? (
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="w-12 h-12 text-gold-400 animate-spin" />
            <p className="text-gold-300/80">Uploading...</p>
          </div>
        ) : (
          <label htmlFor="file-upload" className="cursor-pointer">
            <Upload className="w-12 h-12 text-gold-400 mx-auto mb-4" />
            <p className="text-gold-200 mb-2 font-medium">
              Drop files here or click to browse
            </p>
            <p className="text-gold-300/60 text-sm">
              {acceptedTypes.includes('image') && 'Images, '}
              {acceptedTypes.includes('video') && 'Videos, '}
              {acceptedTypes.includes('pdf') && 'PDFs, '}
              Documents
            </p>
            <p className="text-gold-300/60 text-sm mt-1">
              Max {maxFiles} file{maxFiles > 1 ? 's' : ''}
            </p>
          </label>
        )}
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400 text-sm">{error}</p>
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="mt-4 space-y-2">
          <p className="text-gold-300/80 text-sm font-medium">
            Uploaded Files ({uploadedFiles.length}/{maxFiles})
          </p>
          {uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-3 bg-warmBlack-light border border-gold-900/30 rounded-lg"
            >
              <FileIcon className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-gold-200 text-sm truncate">{file.name}</p>
                <p className="text-gold-300/60 text-xs">{formatFileSize(file.size)}</p>
              </div>
              <button
                onClick={() => removeFile(index)}
                className="text-gold-400 hover:text-gold-300 transition flex-shrink-0"
                aria-label="Remove file"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
