
import { useState } from 'react';
import { ProductForm } from '@/components/ProductForm';
import { ResultsDisplay } from '@/components/ResultsDisplay';
import { DemoControls } from '@/components/DemoControls';
import { LoadingScreen } from '@/components/LoadingScreen';
import { getProductById } from '@/data/demoProducts';

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
    tone: 'professional',
    selectedDemo: ''
  });

  const handleDemoSelect = (productId: string, productData: any) => {
    setSelectedDemo(productId);
    setFormData(prev => ({
      ...prev,
      ...productData,
      selectedDemo: productId
    }));
  };

  const handleGenerate = (data: any) => {
    console.log('Generuojamas turinys:', data);
    setIsLoading(true);
  };

  const handleLoadingComplete = () => {
    const getEnhancedMockResults = () => {
      const selectedProduct = getProductById(formData.selectedDemo);
      
      if (selectedProduct) {
        return {
          title: selectedProduct.title,
          shortDescription: selectedProduct.description,
          longDescription: selectedProduct.longDescription,
          features: selectedProduct.features,
          tone: formData.tone,
          brand: selectedProduct.brand,
          selectedDemo: formData.selectedDemo
        };
      }

      return {
        title: formData.title,
        shortDescription: formData.description,
        longDescription: `Atraskite išskirtinį **${formData.title}**, aukščiausios kokybės produktą, kuris sujungia novatorišką dizainą su puikiu funkcionalumu.`,
        features: [
          'Aukščiausios kokybės medžiagos',
          'Šiuolaikiškas inžinerinis sprendimas',
          'Patogus naudoti sąsaja',
          'Tvirta konstrukcija',
          'Universalus naudojimas',
          'Profesionalaus lygio našumas'
        ],
        tone: formData.tone,
        brand: formData.brand,
        selectedDemo: formData.selectedDemo
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
      {showResults ? (
        <div className="container mx-auto px-4 py-8">
          <ResultsDisplay content={generatedContent} onBack={handleBack} />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-16 space-y-12">
          {/* Demo Controls */}
          <DemoControls 
            selectedDemo={selectedDemo}
            onDemoSelect={handleDemoSelect}
          />

          {/* Title + Form layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* LEFT: Sticky Info */}
            <div className="lg:sticky lg:top-20 self-start space-y-8">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Dirbtinio intelekto produkto aprašymo
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Generatorius
                </span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Paversk savo produktus įtraukiančiomis istorijomis su dirbtinio intelekto tyrimais, konkurentų analize ir optimizuotu reklamos turiniu.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Konkurentų analizė
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  SEO optimizuotas
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                  Reklamos medžiagos
                </span>
              </div>

              {/* HOW IT WORKS */}
              <div className="pt-8 space-y-4">
                <h3 className="text-md font-semibold text-gray-700">Kaip tai veikia</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Įvesk produkto informaciją</p>
                      <p className="text-sm text-gray-500">Užpildyk pavadinimą, aprašymą ir įkelk papildomas nuotraukas.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Spausk "Generuoti"</p>
                      <p className="text-sm text-gray-500">Mūsų dirbtinis intelektas renka įžvalgas ir sukuria optimizuotą turinį.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-md flex items-center justify-center">
                      <span className="text-lg font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">Gauk reklamos medžiagas</p>
                      <p className="text-sm text-gray-500">Paruošti tekstai, nuotraukos, reklamos ir daugiau — viskas vienoje vietoje.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div>
              <ProductForm 
                onGenerate={handleGenerate}
                selectedDemo={selectedDemo}
                formData={formData}
                onFormDataChange={setFormData}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
