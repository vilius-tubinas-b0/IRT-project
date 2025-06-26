
import { useState } from 'react';
import { ProductForm } from '@/components/ProductForm';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import { DemoControls } from '@/components/DemoControls';

const Index = () => {
  const [showResults, setShowResults] = useState(false);
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
    
    // Enhanced mock generated content with richer data based on demo selection
    const getEnhancedMockResults = () => {
      const baseResults = {
        title: data.title,
        shortDescription: data.description,
        tone: data.tone,
        brand: data.brand,
        selectedDemo: data.selectedDemo
      };

      if (data.selectedDemo === 'wireless-headphones') {
        return {
          ...baseResults,
          longDescription: `Discover the exceptional ${data.title}, a premium audio solution that combines innovative noise-cancelling technology with outstanding sound quality. This remarkable device represents the perfect blend of comfort, durability, and cutting-edge engineering, making it an ideal choice for audiophiles and everyday music lovers alike.

Built with meticulous attention to detail, these headphones offer unparalleled audio performance and all-day comfort. The sophisticated design not only enhances functionality but also adds a touch of elegance to your daily routine. Whether you're commuting, working, or relaxing at home, these headphones deliver exceptional audio clarity and immersive sound experience.

Advanced features include premium drivers, adaptive noise cancellation, and intuitive touch controls that make them stand out in the competitive audio market. The product has been thoroughly tested to ensure it meets the highest standards of audio quality and build durability, giving you confidence in your purchase.

Perfect for both professional and personal use, the ${data.title} represents exceptional value and long-term satisfaction. The versatile design makes them suitable for various listening scenarios, while robust construction ensures years of reliable performance.`,
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
        longDescription: `Discover the exceptional ${data.title}, a premium product that combines innovative design with outstanding functionality. This remarkable item represents the perfect blend of quality craftsmanship and modern technology, making it an ideal choice for discerning customers who demand excellence.

Built with meticulous attention to detail, the ${data.title} offers unparalleled performance and reliability. Its sophisticated design not only enhances functionality but also adds a touch of elegance to any setting. Whether you're looking for professional-grade performance or everyday reliability, this product delivers on all fronts.

Key features include advanced materials, precision engineering, and user-friendly design elements that make it stand out in its category. The product has been thoroughly tested to ensure it meets the highest standards of quality and durability, giving you confidence in your purchase.

Perfect for both personal and professional use, the ${data.title} represents exceptional value and long-term satisfaction. Its versatile design makes it suitable for a wide range of applications, while its robust construction ensures years of reliable service.`,
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
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setGeneratedContent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <DemoControls 
        selectedDemo={selectedDemo}
        onDemoSelect={handleDemoSelect}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Product Description Generator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create compelling product descriptions and generate marketing content with AI-powered research and optimization
          </p>
        </div>

        {!showResults ? (
          <ProductForm 
            onGenerate={handleGenerate}
            selectedDemo={selectedDemo}
            formData={formData}
            onFormDataChange={setFormData}
          />
        ) : (
          <ResultsDisplay 
            content={generatedContent} 
            onBack={handleBack}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
