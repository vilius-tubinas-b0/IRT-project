
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, TrendingUp, Users, Building, Heart, Eye } from 'lucide-react';

interface SocialPost {
  platform: string;
  content: string;
  engagement: string;
  likes: string;
  url: string;
  imageUrl?: string;
}

interface Competitor {
  name: string;
  url: string;
  imageUrl?: string;
  socialPost?: SocialPost;
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
              <span>Gamintojo informacija</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold text-gray-900">{manufacturer.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{manufacturer.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {manufacturer.founded && (
                <Badge variant="outline">Įkurta {manufacturer.founded}</Badge>
              )}
              {manufacturer.headquarters && (
                <Badge variant="outline">{manufacturer.headquarters}</Badge>
              )}
            </div>

            <Button variant="outline" size="sm" asChild>
              <a href={manufacturer.website} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Žiūrėti svetainę
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

      {/* Competitor Analysis with Images */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Users className="w-5 h-5 text-purple-600" />
            <span>Varžovų analizė</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {competitors.map((competitor, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                {competitor.socialPost?.imageUrl && (
                  <div className="relative">
                    <img
                      src={competitor.socialPost.imageUrl}
                      alt={`${competitor.name} social media post`}
                      className="w-full aspect-square object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-white/90">
                        {competitor.socialPost.platform}
                      </Badge>
                    </div>
                  </div>
                )}

                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{competitor.name}</h4>
                    <Button variant="outline" size="sm" asChild>
                      <a href={competitor.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>

                  {competitor.socialPost && (
                    <div className="space-y-3">
                      <p className="text-sm text-gray-700">
                        "{competitor.socialPost.content}"
                      </p>

                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{competitor.socialPost.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{competitor.socialPost.engagement}</span>
                        </div>
                      </div>


                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
