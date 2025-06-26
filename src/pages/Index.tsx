
import { useState } from 'react';
import { ProductForm } from '@/components/ProductForm';
import { ResultsDisplay } from '@/components/ResultsDisplay';

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [generatedContent, setGeneratedContent] = useState(null);

  const handleGenerate = (formData: any) => {
    console.log('Generating content for:', formData);
    
    // Mock generated content - in real app this would call your AI service
    const mockResults = {
      title: formData.title,
      shortDescription: formData.description,
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
      ],
      tone: formData.tone,
      brand: formData.brand
    };

    setGeneratedContent(mockResults);
    setShowResults(true);
  };

  const handleBack = () => {
    setShowResults(false);
    setGeneratedContent(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
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
          <ProductForm onGenerate={handleGenerate} />
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
