
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronUp, ChevronDown, Cog } from 'lucide-react';

const demoProducts = [
  {
    id: 'stanley-tumbler',
    title: 'Stanley IceFlow™ Flip Straw Tumbler 30oz',
    description: 'Durable, stylish water bottle with built-in straw and double-wall vacuum insulation',
    brand: 'Stanley',
    category: 'Drinkware'
  },
  {
    id: 'the-ordinary-niacinamide',
    title: 'Niacinamide 10% + Zinc 1% Serum',
    description: 'Clinical-strength serum designed to visibly reduce blemishes and balance sebum activity',
    brand: 'The Ordinary',
    category: 'Skincare'
  },
  {
    id: 'baltic-candle',
    title: 'Baltic Sea Scented Candle — Hand-Poured in Klaipėda',
    description: 'Locally crafted soy wax candle inspired by sea breeze, pine, and amber resin',
    brand: 'Klaipėda Home',
    category: 'Home Fragrance'
  },
  {
    id: 'keyboard-slime',
    title: 'Anti-Stress Keyboard Cleaner Slime — Blueberry Scented',
    description: 'Novelty slime toy that cleans dust from keyboards while relieving stress',
    brand: 'ZenGadget',
    category: 'Accessories'
  }
];


interface DemoControlsProps {
  selectedDemo: string;
  onDemoSelect: (productId: string, productData: any) => void;
}

export const DemoControls = ({ selectedDemo, onDemoSelect }: DemoControlsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDemoSelect = (productId: string) => {
    const product = demoProducts.find(p => p.id === productId);
    if (product) {
      onDemoSelect(productId, {
        title: product.title,
        description: product.description,
        brand: product.brand,
        includeBrand: true
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <Card className="bg-amber-50 border-amber-200 shadow-2xl rounded-t-lg rounded-b-none border-b-0">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Cog className="w-4 h-4 text-amber-600" />
              <CardTitle className="text-sm font-medium text-amber-800">
                Demo Controls - Select a Product to Test
              </CardTitle>
              {selectedDemo && (
                <Badge variant="secondary" className="bg-green-100 text-green-700 text-xs">
                  {demoProducts.find(p => p.id === selectedDemo)?.title}
                </Badge>
              )}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="h-8 w-8 p-0 text-amber-600 hover:bg-amber-100"
            >
              {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
            </Button>
          </div>
        </CardHeader>
        
        {isExpanded && (
          <CardContent className="pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
              {demoProducts.map((product) => (
                <Card
                  key={product.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                    selectedDemo === product.id
                      ? 'ring-2 ring-amber-400 bg-amber-100 border-amber-300'
                      : 'hover:border-amber-300 bg-white'
                  }`}
                  onClick={() => handleDemoSelect(product.id)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-start justify-between">
                        <h3 className="font-medium text-gray-900 text-sm leading-tight">
                          {product.title}
                        </h3>
                        <Badge variant="outline" className="text-xs ml-2 flex-shrink-0">
                          {product.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                      <p className="text-xs text-amber-600 font-medium">{product.brand}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-xs text-amber-700 italic">
                This is a prototype - custom product inputs are disabled
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
