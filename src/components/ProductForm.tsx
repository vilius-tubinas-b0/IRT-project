
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ImageUpload } from './ImageUpload';
import { ToneSelector } from './ToneSelector';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';

interface ProductFormProps {
  onGenerate: (data: any) => void;
  selectedDemo: string;
  formData: any;
  onFormDataChange: (data: any) => void;
}

export const ProductForm = ({ onGenerate, selectedDemo, formData, onFormDataChange }: ProductFormProps) => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDemo) {
      toast({
        title: "Demo Version Only",
        description: "Please select a demo product from the controls at the bottom of the page.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.title.trim()) {
      toast({
        title: "Error",
        description: "Product title is required",
        variant: "destructive",
      });
      return;
    }

    // Take user directly to loading screen
    onGenerate({ ...formData, selectedDemo });
  };

  const updateFormData = (field: string, value: any) => {
    onFormDataChange({ ...formData, [field]: value });
  };

  return (
    <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-white/80 shadow-xl border-0">

      
      <CardHeader className="text-center pb-6">
                {selectedDemo && (
          <div className="inline-flex items-center px-3 py-3 rounded-sm bg-green-100 text-green-700 text-sm">
            Demo product selected: {formData.title}
          </div>
        )}
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Product Information
        </CardTitle>
        <p className="text-gray-600 mb-4">
          Enter your product details below
        </p>

      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Product Title - Required */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Product Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => updateFormData('title', e.target.value)}
              placeholder="Enter your product title"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              required
              disabled={!selectedDemo}
            />
          </div>

          {/* Product URL */}
          <div className="space-y-2">
            <Label htmlFor="productUrl" className="text-sm font-medium">
              Product URL <span className="text-gray-400">(optional)</span>
            </Label>
            <Input
              id="productUrl"
              type="url"
              value={formData.productUrl}
              onChange={(e) => updateFormData('productUrl', e.target.value)}
              placeholder="https://example.com/product"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              disabled={!selectedDemo}
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Product Images <span className="text-gray-400">(optional)</span>
            </Label>
            <ImageUpload
              images={formData.images}
              onImagesChange={(images) => updateFormData('images', images)}
              disabled={!selectedDemo}
            />
          </div>

          {/* Brand Information */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="brand" className="text-sm font-medium">
                Brand Name <span className="text-gray-400">(optional)</span>
              </Label>
              <Input
                id="brand"
                value={formData.brand}
                onChange={(e) => updateFormData('brand', e.target.value)}
                placeholder="Your Brand Name"
                className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                disabled={!selectedDemo}
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Switch
                id="includeBrand"
                checked={formData.includeBrand}
                onCheckedChange={(checked) => updateFormData('includeBrand', checked)}
                disabled={!selectedDemo}
              />
              <Label htmlFor="includeBrand" className="text-sm">
                Include brand information in description
              </Label>
            </div>
          </div>



          {/* Product Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Short Description <span className="text-gray-400">(optional)</span>
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => updateFormData('description', e.target.value)}
              placeholder="Brief description of your product..."
              rows={3}
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 resize-none"
              disabled={!selectedDemo}
            />
          </div>

          {/* Tone Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Writing Tone</Label>
            <ToneSelector
              selectedTone={formData.tone}
              onToneChange={(tone) => updateFormData('tone', tone)}
              disabled={!selectedDemo}
            />
          </div>

          {/* Generate Button */}
          <Button
            type="submit"
            disabled={!selectedDemo}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Generate Product Description
          </Button>

          {!selectedDemo && (
            <div className="text-center">
              <p className="text-sm text-amber-600 bg-amber-50 p-4 rounded-lg border border-amber-200">
                👇 Please select a demo product from the controls at the bottom of the page to get started.
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
