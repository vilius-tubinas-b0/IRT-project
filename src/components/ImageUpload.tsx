
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, X, Image } from 'lucide-react';

interface ImageUploadProps {
  images: File[];
  onImagesChange: (images: File[]) => void;
  disabled?: boolean;
}

export const ImageUpload = ({ images, onImagesChange, disabled = false }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (disabled) return;
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files).filter(file => file.type.startsWith('image/'));
      onImagesChange([...images, ...files]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    
    if (e.target.files) {
      const files = Array.from(e.target.files).filter(file => file.type.startsWith('image/'));
      onImagesChange([...images, ...files]);
    }
  };

  const removeImage = (index: number) => {
    if (disabled) return;
    
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  return (
    <div className="space-y-4">
      <Card
        className={`border-2 border-dashed transition-colors ${
          dragActive ? 'border-blue-400 bg-blue-50' : 'border-gray-300'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-gray-400'}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center p-8 text-center">
          <Upload className="w-8 h-8 text-gray-400 mb-4" />
          <p className="text-gray-600 mb-2">
            {disabled ? 'Image upload disabled in demo mode' : 'Drag and drop images here, or click to select'}
          </p>
          <Button
            variant="outline"
            disabled={disabled}
            onClick={() => !disabled && document.getElementById('file-input')?.click()}
          >
            <Image className="w-4 h-4 mr-2" />
            Choose Images
          </Button>
          <input
            id="file-input"
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
            disabled={disabled}
          />
        </CardContent>
      </Card>

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={URL.createObjectURL(image)}
                alt={`Upload ${index + 1}`}
                className="w-full h-24 object-cover rounded-lg"
              />
              {!disabled && (
                <Button
                  variant="destructive"
                  size="sm"
                  className="absolute -top-2 -right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeImage(index)}
                >
                  <X className="w-3 h-3" />
                </Button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
