
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Download } from 'lucide-react';
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

  const textMaterials = materials.filter(m => !m.imageUrl);
  const imageMaterials = materials.filter(m => m.imageUrl);

  return (
    <div className="space-y-6">
      {/* Text-based Marketing Materials */}
      {textMaterials.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Marketing Copy</h3>
          <div className="grid gap-4">
            {textMaterials.map((material, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-base">{material.type}</CardTitle>
                      {material.platform && (
                        <Badge variant="secondary">{material.platform}</Badge>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(material.content, material.type)}
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 whitespace-pre-wrap">{material.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Image-based Marketing Materials */}
      {imageMaterials.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Marketing Visuals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {imageMaterials.map((material, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative">
                  <img
                    src={material.imageUrl}
                    alt={`${material.type} for ${productTitle}`}
                    className="w-full h-48 object-cover"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={() => downloadImage(
                      material.imageUrl!,
                      `${productTitle}_${material.type.replace(/\s+/g, '_')}.jpg`
                    )}
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">{material.type}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        {material.platform && (
                          <Badge variant="outline" className="text-xs">{material.platform}</Badge>
                        )}
                        {material.size && (
                          <Badge variant="secondary" className="text-xs">{material.size}</Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  {material.content && (
                    <p className="text-sm text-gray-600 mt-2">{material.content}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
