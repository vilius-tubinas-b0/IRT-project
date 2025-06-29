
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Copy, Download, Mail, MessageSquare, Tag, Image, Play } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MarketingMaterial {
  type: string;
  content?: string;
  platform?: string;
  size?: string;
  imageUrl?: string;
  videoUrl?: string;
  items?: string[];
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
      title: "Nukopijuota!",
      description: `${type} nukopijuotas į iškarpinę`,
    });
  };

  const downloadAsset = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Atsisiųsta!",
      description: "Failas išsaugotas jūsų įrenginyje",
    });
  };

  const categories = [
    { id: 'all', name: 'Visos medžiagos', icon: null },
    { id: 'copy', name: 'Reklamos tekstas', icon: Mail },
    { id: 'social', name: 'Socialiniai tinklai', icon: MessageSquare },
    { id: 'visuals', name: 'Vizualinės medžiagos', icon: Image }
  ];

  const getCategoryMaterials = (category: string) => {
    if (category === 'all') return materials;
    
    switch (category) {
      case 'copy':
        return materials.filter(m => !m.imageUrl && !m.videoUrl);
      case 'social':
        return materials.filter(m => m.platform && ['Instagram', 'Facebook', 'Twitter', 'LinkedIn'].includes(m.platform));
      case 'visuals':
        return materials.filter(m => m.imageUrl || m.videoUrl);
      default:
        return materials;
    }
  };

  const copyMaterials = getCategoryMaterials(selectedCategory).filter(m => !m.imageUrl && !m.videoUrl);
  const visualMaterials = getCategoryMaterials(selectedCategory).filter(m => m.imageUrl || m.videoUrl);

  return (
    <div className="space-y-6">
      {/* Marketing Copy with Chips */}
      {copyMaterials.length > 0 && (
        <div className="space-y-4">
          <div className="space-y-6">
            {copyMaterials.map((material, index) => (
              <Card key={index} className="border-l-4 border-l-blue-500">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base flex items-center space-x-2">
                      <span>{material.type}</span>
                      {material.platform && (
                        <Badge variant="secondary">{material.platform}</Badge>
                      )}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  {material.items ? (
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 mb-3">Spausk bet kurią parinktį, kad nukopijuotum:</p>
                      <div className="flex flex-wrap gap-2">
                        {material.items.map((item, itemIndex) => (
                          <Button
                            key={itemIndex}
                            variant="outline"
                            size="sm"
                            onClick={() => copyToClipboard(item, material.type)}
                            className="flex items-center space-x-2 h-auto p-3 text-left justify-start max-w-full"
                          >
                            <Copy className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </Button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 whitespace-pre-wrap text-sm">
                          {material.content}
                        </p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyToClipboard(material.content, material.type)}
                        className="flex items-center space-x-2"
                      >
                        <Copy className="w-4 h-4" />
                        <span>Kopijuoti</span>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Visual Marketing Assets Grid */}
      {visualMaterials.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Vizualinės reklamos medžiagos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {visualMaterials.map((material, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative group">
                  {material.videoUrl ? (
                    <div className="relative bg-gray-900">
                      <video
                        src={material.videoUrl}
                        className="w-full aspect-square object-cover"
                        poster={material.imageUrl}
                        muted
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3">
                          <Play className="w-6 h-6 text-gray-900" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={material.imageUrl}
                      alt={`${material.type} skirtas ${productTitle}`}
                      className="w-full aspect-square object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200">
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-white/90 hover:bg-white"
                        onClick={() => downloadAsset(
                          material.imageUrl || material.videoUrl!,
                          `${productTitle}_${material.type.replace(/\s+/g, '_')}.${material.videoUrl ? 'mp4' : 'jpg'}`
                        )}
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4 space-y-3">
                  {material.content && (
                    <p className="text-base font-medium text-gray-900 leading-snug">
                      {material.content}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {material.platform && (
                      <Badge variant="secondary" className="text-xs capitalize">
                        {material.platform}
                      </Badge>
                    )}
                    {material.type && (
                      <Badge variant="outline" className="text-xs lowercase">
                        {material.type}
                      </Badge>
                    )}
                    {material.size && (
                      <Badge variant="outline" className="text-xs">
                        {material.size}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {getCategoryMaterials(selectedCategory).length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">Šiai kategorijai medžiagų nerasta.</p>
        </div>
      )}
    </div>
  );
};
