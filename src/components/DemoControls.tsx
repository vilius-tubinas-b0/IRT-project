
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Settings } from 'lucide-react';

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

interface DemoControlsProps {
  selectedDemo: string;
  onDemoSelect: (productId: string, productData: any) => void;
}

export const DemoControls = ({ selectedDemo, onDemoSelect }: DemoControlsProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
    <div className="fixed top-4 right-4 z-50 max-w-sm">
      <Card className="bg-amber-50 border-amber-200 shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4 text-amber-600" />
              <CardTitle className="text-sm font-medium text-amber-800">
                Demo Controls
              </CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="h-6 w-6 p-0 text-amber-600 hover:bg-amber-100"
            >
              {isCollapsed ? <Settings className="w-3 h-3" /> : <X className="w-3 h-3" />}
            </Button>
          </div>
          {!isCollapsed && (
            <p className="text-xs text-amber-700">
              Select a demo product to test the AI generator
            </p>
          )}
        </CardHeader>
        
        {!isCollapsed && (
          <CardContent className="space-y-3">
            {demoProducts.map((product) => (
              <Card
                key={product.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-sm ${
                  selectedDemo === product.id
                    ? 'ring-2 ring-amber-400 bg-amber-100 border-amber-300'
                    : 'hover:border-amber-300 bg-white'
                }`}
                onClick={() => handleDemoSelect(product.id)}
              >
                <CardContent className="p-3">
                  <div className="space-y-1">
                    <div className="flex items-start justify-between">
                      <h3 className="font-medium text-gray-900 text-xs leading-tight">
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
            
            <div className="pt-2 border-t border-amber-200">
              <p className="text-xs text-amber-700 italic">
                Custom inputs are disabled in this prototype
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
};
