
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Copy, Download, Mail, MessageSquare, Tag, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MarketingMaterial {
  type: string;
  content: string;
  platform?: string;
  size?: string;
  imageUrl?: string;
}

interface MarketingMaterialsProps {
  materials: MarketingMaterial[];
  productTitle: string;
}

export const MarketingMaterials = ({ materials, productTitle }: MarketingMaterialsProps) => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const downloadImage = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Downloaded!",
      description: "Marketing material saved to your device",
    });
  };

  const categories = [
    { id: 'all', name: 'All Materials', icon: null },
    { id: 'email', name: 'Email Marketing', icon: Mail },
    { id: 'social', name: 'Social Media', icon: MessageSquare },
    { id: 'seo', name: 'SEO & Tags', icon: Tag },
    { id: 'visuals', name: 'Visual Assets', icon: Image }
  ];

  const getCategoryMaterials = (category: string) => {
    if (category === 'all') return materials;
    
    switch (category) {
      case 'email':
        return materials.filter(m => m.type.toLowerCase().includes('email'));
      case 'social':
        return materials.filter(m => m.platform && ['Instagram', 'Facebook', 'Twitter'].includes(m.platform));
      case 'seo':
        return materials.filter(m => m.type.toLowerCase().includes('tag'));
      case 'visuals':
        return materials.filter(m => m.imageUrl);
      default:
        return materials;
    }
  };

  const textMaterials = getCategoryMaterials(selectedCategory).filter(m => !m.imageUrl);
  const imageMaterials = getCategoryMaterials(selectedCategory).filter(m => m.imageUrl);

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className="flex items-center space-x-2"
            >
              {Icon && <Icon className="w-4 h-4" />}
              <span>{category.name}</span>
              <Badge variant="secondary" className="ml-1 text-xs">
                {getCategoryMaterials(category.id).length}
              </Badge>
            </Button>
          );
        })}
      </div>

      {/* Text-based Marketing Materials */}
      {textMaterials.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Marketing Copy</h3>
          <div className="grid gap-4">
            {textMaterials.map((material, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500 hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-base">{material.type}</CardTitle>
                      {material.platform && (
                        <Badge variant="secondary">{material.platform}</Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(material.content, material.type)}
                        className="flex items-center space-x-1"
                      >
                        <Copy className="w-4 h-4" />
                        <span className="hidden sm:inline">Copy</span>
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700 whitespace-pre-wrap font-mono text-sm">
                      {material.content}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Image-based Marketing Materials */}
      {imageMaterials.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Visual Marketing Assets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {imageMaterials.map((material, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative group">
                  <img
                    src={material.imageUrl}
                    alt={`${material.type} for ${productTitle}`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200">
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/90 hover:bg-white"
                        onClick={() => downloadImage(
                          material.imageUrl!,
                          `${productTitle}_${material.type.replace(/\s+/g, '_')}.jpg`
                        )}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{material.type}</h4>
                    <div className="flex items-center space-x-2">
                      {material.platform && (
                        <Badge variant="outline" className="text-xs">{material.platform}</Badge>
                      )}
                      {material.size && (
                        <Badge variant="secondary" className="text-xs">{material.size}</Badge>
                      )}
                    </div>
                  </div>
                  {material.content && (
                    <p className="text-sm text-gray-600 mb-3">{material.content}</p>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => downloadImage(
                      material.imageUrl!,
                      `${productTitle}_${material.type.replace(/\s+/g, '_')}.jpg`
                    )}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Asset
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {getCategoryMaterials(selectedCategory).length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">No materials found for this category.</p>
        </div>
      )}
    </div>
  );
};
