
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Users, Building } from 'lucide-react';

interface Competitor {
  name: string;
  url: string;
  socialPost?: {
    platform: string;
    content: string;
    engagement: string;
    url: string;
  };
}

interface Manufacturer {
  name: string;
  website: string;
  description: string;
  founded?: string;
  headquarters?: string;
}

interface SourcesProps {
  manufacturer?: Manufacturer;
  competitors: Competitor[];
  marketInsights?: {
    searchVolume: string;
    trending: boolean;
    priceRange: string;
  };
}

export const Sources = ({ manufacturer, competitors, marketInsights }: SourcesProps) => {
  return (
    <div className="space-y-6">
      {/* Manufacturer Information */}
      {manufacturer && (
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Building className="w-5 h-5 text-green-600" />
              <span>Manufacturer Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900">{manufacturer.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{manufacturer.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {manufacturer.founded && (
                <Badge variant="outline">Founded {manufacturer.founded}</Badge>
              )}
              {manufacturer.headquarters && (
                <Badge variant="outline">{manufacturer.headquarters}</Badge>
              )}
            </div>
            
            <Button variant="outline" size="sm" asChild>
              <a href={manufacturer.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Visit Website
              </a>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Market Insights */}
      {marketInsights && (
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              <span>Market Insights</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">{marketInsights.searchVolume}</p>
                <p className="text-sm text-gray-600">Monthly Searches</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">{marketInsights.priceRange}</p>
                <p className="text-sm text-gray-600">Price Range</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center">
                  {marketInsights.trending ? (
                    <Badge className="bg-green-100 text-green-800">Trending ↗</Badge>
                  ) : (
                    <Badge variant="outline">Stable</Badge>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-1">Market Status</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Competitor Analysis */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-purple-600" />
            <span>Competitor Analysis</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {competitors.map((competitor, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-gray-900">{competitor.name}</h4>
                <Button variant="outline" size="sm" asChild>
                  <a href={competitor.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
              
              {competitor.socialPost && (
                <Card className="bg-gray-50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{competitor.socialPost.platform}</Badge>
                      <Badge className="bg-green-100 text-green-800">
                        {competitor.socialPost.engagement}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">"{competitor.socialPost.content}"</p>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={competitor.socialPost.url} target="_blank" rel="noopener noreferrer">
                        View Post <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
