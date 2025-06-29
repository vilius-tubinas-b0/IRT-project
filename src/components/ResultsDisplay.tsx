
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
      <div className="flex items-center justify-between py-4">
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
          {/* Combined Product Title & Description */}
          <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold text-gray-900 leading-tight">
                    {content.title}
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="capitalize text-sm px-3 py-1">
                      {content.tone} tone
                    </Badge>
                    {content.brand && (
                      <Badge variant="outline" className="text-sm px-3 py-1">
                        {content.brand}
                      </Badge>
                    )}
                  </div>
                  {content.shortDescription && (
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {content.shortDescription}
                    </p>
                  )}
                </div>

                <Separator className="my-6" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Product Description</h2>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(content.longDescription)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed">
                    <ReactMarkdown
                      children={content.longDescription}
                      remarkPlugins={[remarkGfm]}
                      rehypePlugins={[rehypeRaw]}
                      components={{
                        h1: ({node, ...props}) => <h3 className="text-lg font-semibold text-gray-900 mt-4 mb-2" {...props} />,
                        h2: ({node, ...props}) => <h4 className="text-base font-medium text-gray-900 mt-3 mb-2" {...props} />,
                        h3: ({node, ...props}) => <h5 className="text-sm font-medium text-gray-900 mt-2 mb-1" {...props} />,
                        p: ({node, ...props}) => <p className="mb-2 text-sm text-gray-700 leading-normal" {...props} />,
                        strong: ({node, ...props}) => <strong className="font-semibold text-gray-900" {...props} />,
                      }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Image Gallery & Features - Right Column */}
        <div className="space-y-4">
          <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
            <CardContent className="p-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Product Images</h3>
              <ImageGallery images={richContent.images} title={content.title} />
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
            <CardContent className="p-6">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Key Features</h3>
              <ul className="space-y-2 mb-6">
                {content.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Marketing Copy Card */}
              <div className="space-y-3">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="p-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Marketing Copy</h4>
                    <div className="space-y-2">
                      <MarketingMaterials 
                        materials={richContent.marketingMaterials.filter(m => !m.imageUrl && !m.videoUrl).slice(0, 2)} 
                        productTitle={content.title}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Market Analytics Card */}
                <Card className="bg-purple-50 border-purple-200">
                  <CardContent className="p-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Market Analytics</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="text-center p-3 bg-white rounded-md">
                        <p className="text-lg font-bold text-blue-700">245K</p>
                        <p className="text-xs text-gray-600">Monthly Searches</p>
                      </div>
                      <div className="text-center p-3 bg-white rounded-md">
                        <p className="text-lg font-bold text-green-700">$150-$400</p>
                        <p className="text-xs text-gray-600">Price Range</p>
                      </div>
                      <div className="text-center p-3 bg-white rounded-md">
                        <p className="text-lg font-bold text-purple-700">85%</p>
                        <p className="text-xs text-gray-600">Customer Satisfaction</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Research Sources Only */}
      <Card className="backdrop-blur-sm bg-white/90 shadow-xl border-0">
        <CardContent className="p-8">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-6">Research Sources</h3>
          <Sources 
            manufacturer={richContent.sources.manufacturer}
            competitors={richContent.sources.competitors}
            marketInsights={richContent.sources.marketInsights}
          />
        </CardContent>
      </Card>
    </div>
  );
};
