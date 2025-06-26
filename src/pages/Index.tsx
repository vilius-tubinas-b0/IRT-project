
import { useState } from 'react';
import { ProductForm } from '@/components/ProductForm';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import { DemoControls } from '@/components/DemoControls';
import { LoadingScreen } from '@/components/LoadingScreen';

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);
  const [selectedDemo, setSelectedDemo] = useState('');
  const [formData, setFormData] = useState({
    productUrl: '',
    images: [] as File[],
    brand: '',
    includeBrand: false,
    title: '',
    description: '',
    tone: 'professional'
  });

  const handleDemoSelect = (productId: string, productData: any) => {
    setSelectedDemo(productId);
    setFormData(prev => ({
      ...prev,
      ...productData
    }));
  };

  const handleGenerate = (data: any) => {
    console.log('Generating content for:', data);
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    // Enhanced mock generated content with richer data based on demo selection
    const getEnhancedMockResults = () => {
      const baseResults = {
        title: formData.title,
        shortDescription: formData.description,
        tone: formData.tone,
        brand: formData.brand,
        selectedDemo: formData.selectedDemo
      };

      if (selectedDemo === 'wireless-headphones') {
        return {
          ...baseResults,
          longDescription: `Discover the exceptional ${formData.title}, a premium audio solution that combines innovative noise-cancelling technology with outstanding sound quality. This remarkable device represents the perfect blend of comfort, durability, and cutting-edge engineering, making it an ideal choice for audiophiles and everyday music lovers alike.

Built with meticulous attention to detail, these headphones offer unparalleled audio performance and all-day comfort. The sophisticated design not only enhances functionality but also adds a touch of elegance to your daily routine. Whether you're commuting, working, or relaxing at home, these headphones deliver exceptional audio clarity and immersive sound experience.

Advanced features include premium drivers, adaptive noise cancellation, and intuitive touch controls that make them stand out in the competitive audio market. The product has been thoroughly tested to ensure it meets the highest standards of audio quality and build durability, giving you confidence in your purchase.

Perfect for both professional and personal use, the ${formData.title} represents exceptional value and long-term satisfaction. The versatile design makes them suitable for various listening scenarios, while robust construction ensures years of reliable performance.`,
          features: [
            'Active noise cancellation technology',
            'Premium 40mm drivers for rich sound',
            '30-hour battery life with quick charge',
            'Comfortable over-ear design',
            'Touch controls and voice assistant',
            'Foldable design for portability'
          ]
        };
      }

      // Default enhanced description for other products
      return {
        ...baseResults,
        longDescription: `Discover the exceptional ${formData.title}, a premium product that combines innovative design with outstanding functionality. This remarkable item represents the perfect blend of quality craftsmanship and modern technology, making it an ideal choice for discerning customers who demand excellence.

Built with meticulous attention to detail, the ${formData.title} offers unparalleled performance and reliability. Its sophisticated design not only enhances functionality but also adds a touch of elegance to any setting. Whether you're looking for professional-grade performance or everyday reliability, this product delivers on all fronts.

Key features include advanced materials, precision engineering, and user-friendly design elements that make it stand out in its category. The product has been thoroughly tested to ensure it meets the highest standards of quality and durability, giving you confidence in your purchase.

Perfect for both personal and professional use, the ${formData.title} represents exceptional value and long-term satisfaction. Its versatile design makes it suitable for a wide range of applications, while its robust construction ensures years of reliable service.`,
        features: [
          'Premium quality materials',
          'Advanced engineering design', 
          'User-friendly interface',
          'Durable construction',
          'Versatile functionality',
          'Professional-grade performance'
        ]
      };
    };

    const mockResults = getEnhancedMockResults();
    setGeneratedContent(mockResults);
    setIsLoading(false);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setGeneratedContent(null);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <DemoControls 
        selectedDemo={selectedDemo}
        onDemoSelect={handleDemoSelect}
      />
      
      {!showResults ? (
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                AI Product Description
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Generator
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Transform your products into compelling stories with AI-powered research, 
                competitive analysis, and optimized marketing content
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Competitor Analysis
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  SEO Optimized
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Marketing Materials
                </span>
              </div>
            </div>
          </div>

          <ProductForm 
            onGenerate={handleGenerate}
            selectedDemo={selectedDemo}
            formData={formData}
            onFormDataChange={setFormData}
          />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <ResultsDisplay 
            content={generatedContent} 
            onBack={handleBack}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
