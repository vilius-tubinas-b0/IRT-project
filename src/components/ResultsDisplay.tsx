
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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

  return (
    <div className="max-w-5xl mx-auto space-y-6">
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

      {/* Results Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Title & Info */}
          <Card className="backdrop-blur-sm bg-white/80 shadow-lg border-0">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">
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
                <p className="text-gray-600 text-lg leading-relaxed">
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
              <div className="prose prose-gray max-w-none">
                {content.longDescription.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Key Features */}
          <Card className="backdrop-blur-sm bg-white/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {content.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Sample Marketing Content */}
          <Card className="backdrop-blur-sm bg-white/80 shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-lg">Marketing Ideas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Social Media Caption</h4>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  "✨ Introducing the {content.title} - where innovation meets excellence! 
                  Perfect for those who demand the best. #Quality #Innovation #Excellence"
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Subject</h4>
                <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                  "🎉 New Arrival: {content.title} - Limited Time Offer!"
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
