
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ImageUpload } from './ImageUpload';
import { ToneSelector } from './ToneSelector';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

interface ProductFormProps {
  onGenerate: (data: any) => void;
}

const demoProducts = [
  {
    id: 'wireless-headphones',
    title: 'Premium Wireless Noise-Cancelling Headphones',
    description: 'High-quality audio with active noise cancellation',
    brand: 'AudioTech Pro',
    category: 'Electronics'
  },
  {
    id: 'running-shoes',
    title: 'Ultra-Lightweight Running Shoes',
    description: 'Performance athletic footwear with advanced cushioning',
    brand: 'SportMax',
    category: 'Footwear'
  },
  {
    id: 'smart-watch',
    title: 'Fitness Tracking Smart Watch',
    description: 'Advanced health monitoring with GPS and heart rate tracking',
    brand: 'TechWear',
    category: 'Wearables'
  },
  {
    id: 'coffee-maker',
    title: 'Professional Espresso Coffee Machine',
    description: 'Commercial-grade espresso maker for home use',
    brand: 'BrewMaster',
    category: 'Appliances'
  }
];

export const ProductForm = ({ onGenerate }: ProductFormProps) => {
  const { toast } = useToast();
  const [selectedDemo, setSelectedDemo] = useState('');
  const [useCustom, setUseCustom] = useState(false);
  const [formData, setFormData] = useState({
    productUrl: '',
    images: [] as File[],
    brand: '',
    includeBrand: false,
    title: '',
    description: '',
    tone: 'professional'
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleDemoSelect = (productId: string) => {
    const product = demoProducts.find(p => p.id === productId);
    if (product) {
      setSelectedDemo(productId);
      setFormData(prev => ({
        ...prev,
        title: product.title,
        description: product.description,
        brand: product.brand,
        includeBrand: true
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (useCustom && !selectedDemo) {
      toast({
        title: "Demo Version Only",
        description: "This is a prototype. Please select one of the demo products to see the AI in action.",
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

    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      onGenerate({ ...formData, selectedDemo });
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Product description generated successfully!",
      });
    }, 3000);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="max-w-4xl mx-auto backdrop-blur-sm bg-white/80 shadow-xl border-0">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl font-semibold text-gray-800">
          Product Information
        </CardTitle>
        <p className="text-gray-600">
          Try our demo products or enter your own (prototype mode)
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Demo Products Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-lg font-medium">Choose Demo Product</Label>
              <div className="flex items-center space-x-2">
                <Label htmlFor="useCustom" className="text-sm">Use custom input</Label>
                <Switch
                  id="useCustom"
                  checked={useCustom}
                  onCheckedChange={setUseCustom}
                />
              </div>
            </div>
            
            {!useCustom && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {demoProducts.map((product) => (
                  <Card
                    key={product.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                      selectedDemo === product.id
                        ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200'
                        : 'hover:border-gray-300'
                    }`}
                    onClick={() => handleDemoSelect(product.id)}
                  >
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h3 className="font-semibold text-gray-900 text-sm">{product.title}</h3>
                          <Badge variant="outline" className="text-xs">{product.category}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">{product.description}</p>
                        <p className="text-xs text-blue-600 font-medium">{product.brand}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {useCustom && (
            <>
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
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    id="includeBrand"
                    checked={formData.includeBrand}
                    onCheckedChange={(checked) => updateFormData('includeBrand', checked)}
                  />
                  <Label htmlFor="includeBrand" className="text-sm">
                    Include brand information in description
                  </Label>
                </div>
              </div>

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
                />
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
                />
              </div>
            </>
          )}

          {/* Tone Selection */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Writing Tone</Label>
            <ToneSelector
              selectedTone={formData.tone}
              onToneChange={(tone) => updateFormData('tone', tone)}
            />
          </div>

          {/* Generate Button */}
          <Button
            type="submit"
            disabled={isLoading || (!selectedDemo && !useCustom)}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Analyzing & Generating...</span>
              </div>
            ) : (
              'Generate Product Description'
            )}
          </Button>

          {useCustom && !selectedDemo && (
            <p className="text-center text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
              ⚠️ Custom inputs are not available in this prototype. Please select a demo product above.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};
