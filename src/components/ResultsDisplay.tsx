
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { ImageGallery } from './ImageGallery';
import { MarketingMaterials } from './MarketingMaterials';
import { Sources } from './Sources';
import { getProductById, getProductImages, getProductMarketingMaterials } from '@/data/demoProducts';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

interface ResultsDisplayProps {
  content: any;
  onBack: () => void;
}

export const ResultsDisplay = ({ content, onBack }: ResultsDisplayProps) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Content copied to clipboard",
    });
  };

  const downloadContent = () => {
    const contentText = `Product Title: ${content.title}\n\nShort Description:\n${content.shortDescription}\n\nLong Description:\n${content.longDescription}\n\nKey Features:\n${content.features.map((f: string) => `• ${f}`).join('\n')}`;
    
    const blob = new Blob([contentText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${content.title.replace(/[^a-zA-Z0-9]/g, '_')}_description.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "Content saved to your device",
    });
  };

  // Get rich content from centralized data
  const getRichContent = () => {
    const selectedProduct = getProductById(content.selectedDemo);
    
    const baseContent = {
      images: getProductImages(content.selectedDemo),
      marketingMaterials: getProductMarketingMaterials(content.selectedDemo),
      sources: {
        manufacturer: {
          name: selectedProduct ? `${selectedProduct.brand} Industries` : 'AudioTech Pro Industries',
          website: 'https://example.com',
          description: `Leading manufacturer of premium ${selectedProduct?.category.toLowerCase() || 'consumer'} products with over 15 years of experience in creating professional-grade consumer electronics.`,
          founded: '2008',
          headquarters: 'San Francisco, CA'
        },
        competitors: [
          {
            name: 'Sony',
            url: 'https://sony.com',
            socialPost: {
              platform: 'Instagram',
              content: 'Immerse yourself in crystal-clear audio with our latest wireless technology',
              engagement: '12.5K views',
              likes: '2.1K',
              url: 'https://instagram.com/sony/post/123',
              imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400'
            }
          },
          {
            name: 'Bose',
            url: 'https://bose.com',
            socialPost: {
              platform: 'Twitter',
              content: 'Silence the world, amplify your music. Our noise-cancelling technology sets the standard.',
              engagement: '8.2K views',
              likes: '1.8K',
              url: 'https://twitter.com/bose/status/123',
              imageUrl: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400'
            }
          }
        ],
        marketInsights: {
          searchVolume: '245K',
          trending: true,
          priceRange: '$150-$400'
        }
      }
    };

    return baseContent;
  }; 

  const richContent = getRichContent();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          onClick={onBack}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Form</span>
        </Button>
        
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => copyToClipboard(content.longDescription)}
            className="flex items-center space-x-2"
          >
            <Copy className="w-4 h-4" />
            <span>Copy Description</span>
          </Button>
          <Button
            onClick={downloadContent}
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Download className="w-4 h-4" />
            <span>Download All</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Description - Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Title & Info */}
          <Card className="backdrop-blur-sm bg-white/80 shadow-lg border-0">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-3xl text-gray-900 mb-3">
                    {content.title}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Badge variant="secondary" className="capitalize">
                      {content.tone} tone
                    </Badge>
                    {content.brand && (
                      <Badge variant="outline">
                        {content.brand}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            {content.shortDescription && (
              <CardContent>
                <p className="text-gray-600 text-m leading-relaxed">
                  {content.shortDescription}
                </p>
              </CardContent>
            )}
          </Card>

          {/* Long Description */}
          <Card className="backdrop-blur-sm bg-white/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Product Description</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(content.longDescription)}
                >
                  <Copy className="w-4 h-4" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm sm:prose lg:prose-lg prose-gray max-w-none text-gray-600">
                <ReactMarkdown
                  children={content.longDescription}
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeRaw]}
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image Gallery - Right Column */}
        <div className="space-y-6">
          <Card className="backdrop-blur-sm bg-white/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle>Product Images</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageGallery images={richContent.images} title={content.title} />
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="backdrop-blur-sm bg-white/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Tabbed Content */}
      <Card className="backdrop-blur-sm bg-white/80 shadow-lg border-0">
        <CardContent className="p-6">
          <Tabs defaultValue="marketing" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="marketing">Marketing Materials</TabsTrigger>
              <TabsTrigger value="sources">Research Sources</TabsTrigger>
              <TabsTrigger value="analytics">Market Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="marketing" className="mt-6">
              <MarketingMaterials 
                materials={richContent.marketingMaterials} 
                productTitle={content.title}
              />
            </TabsContent>
            
            <TabsContent value="sources" className="mt-6">
              <Sources 
                manufacturer={richContent.sources.manufacturer}
                competitors={richContent.sources.competitors}
                marketInsights={richContent.sources.marketInsights}
              />
            </TabsContent>
            
            <TabsContent value="analytics" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="text-center p-6">
                  <h3 className="text-2xl font-bold text-blue-600">245K</h3>
                  <p className="text-gray-600">Monthly Searches</p>
                </Card>
                <Card className="text-center p-6">
                  <h3 className="text-2xl font-bold text-green-600">$150-$400</h3>
                  <p className="text-gray-600">Price Range</p>
                </Card>
                <Card className="text-center p-6">
                  <h3 className="text-2xl font-bold text-purple-600">85%</h3>
                  <p className="text-gray-600">Customer Satisfaction</p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
