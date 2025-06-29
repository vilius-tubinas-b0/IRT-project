
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
        title: "Tik demonstracinė versija",
        description: "Prašome pasirinkti demonstracinį produktą puslapio apačioje esančiuose valdikliuose.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.title.trim()) {
      toast({
        title: "Klaida",
        description: "Produkto pavadinimas yra privalomas",
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
            Pasirinktas demo produktas: {formData.title}
          </div>
        )}
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Produkto informacija
        </CardTitle>
        <p className="text-gray-600 mb-4">
          Suveskite detales apie jūsų produktą
        </p>

      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Product Title - Required */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Produkto pavadinimas <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => updateFormData('title', e.target.value)}
              placeholder="Įveskite produkto pavadinimą"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              required
              disabled={!selectedDemo}
            />
          </div>

          {/* Product URL */}
          <div className="space-y-2">
            <Label htmlFor="productUrl" className="text-sm font-medium">
              Produkto nuoroda <span className="text-gray-400">(neprivaloma)</span>
            </Label>
            <Input
              id="productUrl"
              type="url"
              value={formData.productUrl}
              onChange={(e) => updateFormData('productUrl', e.target.value)}
              placeholder="https://pavyzdys.lt/product"
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
              disabled={!selectedDemo}
            />
          </div>

          {/* Image Upload */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">
              Produkto nuotraukos <span className="text-gray-400">(neprivaloma)</span>
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
                Prekinis ženklas <span className="text-gray-400">(neprivaloma)</span>
              </Label>
              <Input
                id="brand"
                value={formData.brand}
                onChange={(e) => updateFormData('brand', e.target.value)}
                placeholder="Prekinio ženklo pavadinimas"
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
                Įtraukti prekinio ženklo informaciją į aprašymą
              </Label>
            </div>
          </div>



          {/* Product Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Trumpas aprašymas <span className="text-gray-400">(neprivaloma)</span>
            </Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => updateFormData('description', e.target.value)}
              placeholder="Trumpas jūsų aprašymo aprašymas..."
              rows={3}
              className="transition-all duration-200 focus:ring-2 focus:ring-blue-500 resize-none"
              disabled={!selectedDemo}
            />
          </div>

          {/* Tone Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Rašymo tonas</Label>
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
            Kurti produkto aprašymą
          </Button>

          {!selectedDemo && (
            <div className="text-center">
              <p className="text-sm text-amber-600 bg-amber-50 p-4 rounded-lg border border-amber-200">
                👇 Pasirinkite demonstracinį produktą apačioje esančiuose valdikliuose, kad pradėtumėte.
              </p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
