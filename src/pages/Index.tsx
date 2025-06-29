
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

  const demoContentById: Record<string, { longDescription: string; features: string[] }> = {
   'stanley-tumbler': {
  longDescription: `
**Hydration that keeps up with your lifestyle.**

Whether you’re conquering a hike, navigating your morning commute, or powering through back-to-back meetings, the **Stanley IceFlow™ Flip Straw Tumbler 30oz** is designed to deliver ice-cold refreshment from sunrise to sundown — and beyond.

---

### 🧊 Built to Keep Things Ice-Cold — Literally

Thanks to **Stanley’s signature double-wall vacuum insulation**, this tumbler doesn’t just keep water cool — it **preserves chill for up to 12 hours**, and with ice, your drink stays cold for **up to 48 hours**. That’s two full days without ever needing a fridge. It’s your portable glacier.

---

### 💡 Designed with Real Life in Mind

From the **leak-resistant flip straw lid** to the **ergonomic built-in handle**, every detail is crafted for convenience:

- **One-handed sipping** for workouts, driving, or multitasking
- **30oz capacity** means fewer refills — perfect for all-day hydration
- **Fits most car cup holders** (yes, even the shallow ones)
- **Dishwasher safe** — no annoying hand-washing required
- **Durable stainless steel** that survives drops, dents, and daily chaos

No more plastic bottles. No more lukewarm water. Just crisp, cold hydration when you need it most.

---

### 🌍 Sustainable, Stylish, and Built to Last

Stanley’s not new to the game. With **over 100 years of experience in high-performance gear**, they’ve built a reputation for reliability and eco-conscious design.

- Made from **18/8 recycled stainless steel**
- **BPA-free and eco-safe**
- Comes in a range of modern matte colors to match your vibe
- Designed to last **a lifetime**, not a season

Buying a Stanley isn’t just about convenience — it’s a choice for better design, lower waste, and long-term performance.

---

### 🧳 Where It Goes, You Go

At 30oz, it’s big enough for serious hydration but still portable. Whether you’re:

- Hitting the gym or a long hike
- Working long shifts
- Heading to class or co-working
- Traveling, camping, or road-tripping

…the IceFlow goes with you. It’s made to **move**, not sit on a shelf.

---

### 🙋‍♀️ Still wondering?

**Will it leak in my bag?**  
Nope — the flip straw locks down securely.

**Will it fit in my cup holder?**  
Yep — even compact ones.

**Can I put smoothies or coffee in it?**  
Cold drinks only. (No hot liquids with the straw lid!)

**How heavy is it?**  
Light enough to carry comfortably — around 0.6kg when full.

**What if I drop it?**  
It’s Stanley. It can take it.

---

**Join millions who trust Stanley.**

The IceFlow Flip Straw Tumbler is more than just a trend — it’s a lifestyle upgrade. If you’re ready for a hydration companion that works as hard as you do, you just found it.

`,
  features: [
    '30oz capacity with leak-resistant flip straw lid',
    'Double-wall vacuum insulation (keeps drinks cold for 12–48 hours)',
    '18/8 recycled stainless steel construction',
    'Built-in handle and ergonomic design',
    'Fits most standard cup holders',
    'Dishwasher safe and BPA-free',
    'Available in a variety of matte finishes'
  ]
}
,

    'running-shoes': {
      longDescription: `Push your limits with the **${formData.title}**, ultra-lightweight shoes designed for serious runners. Advanced cushioning and breathable mesh keep you fast, supported, and cool — mile after mile.

**Why Runners Choose Them:**
• Feather-light responsive midsole  
• Breathable mesh upper  
• Reinforced heel stability  
• Shock-absorbing outsole  
• Optimized for both street and trail  
• Sleek aerodynamic profile`,
      features: [
        'Feather-light responsive midsole',
        'Breathable mesh upper',
        'Reinforced heel stability',
        'Shock-absorbing outsole',
        'Street and trail versatility',
        'Aerodynamic profile'
      ]
    },

    'smart-watch': {
      longDescription: `Meet the **${formData.title}** — your all-in-one wellness companion. Track fitness, monitor your heart, get GPS navigation and more in a sleek, waterproof design.

**Health Meets Tech:**
• Real-time heart rate monitoring  
• GPS navigation and workout tracking  
• Sleep & recovery analysis  
• 5-day battery life  
• Smart notifications & call alerts  
• Water-resistant up to 50m`,
      features: [
        'Real-time heart monitoring',
        'GPS and workout tracking',
        'Sleep & recovery analysis',
        '5-day battery life',
        'Smart notifications',
        '50m water resistance'
      ]
    },

    'coffee-maker': {
      longDescription: `Experience café-quality espresso at home with the **${formData.title}**. Commercial-grade power, now kitchen-friendly.

**Brewing Excellence:**

• 15-bar pump for rich crema  
• Dual boiler system  
• Programmable shot volumes  
• Stainless steel steam wand  
• Pre-infusion technology  
• Intuitive touchscreen controls`,
      features: [
        '15-bar espresso pump',
        'Dual boiler for steaming + brewing',
        'Programmable shot memory',
        'Professional-grade steam wand',
        'Pre-infusion for flavor',
        'Intuitive touchscreen UI'
      ]
    }
  };

  const content = demoContentById[formData.selectedDemo];


  if (content) {
    return {
      ...baseResults,
      longDescription: content.longDescription,
      features: content.features
    };
  }

  return {
    ...baseResults,
    longDescription: `Discover the exceptional **${formData.title}**, a premium product that combines innovative design with outstanding functionality.`,
    features: [
      'Premium materials',
      'Modern engineering',
      'User-friendly interface',
      'Durable construction',
      'Versatile use',
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
    {isLoading ? (
      <LoadingScreen onComplete={handleLoadingComplete} />
    ) : showResults ? (
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
              AI Product Description
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Generator
              </span>
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Transform your products into compelling stories with AI-powered research, competitive analysis, and optimized marketing content.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
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

            {/* HOW IT WORKS */}
            <div className="pt-8 space-y-4">
              <h3 className="text-md font-semibold text-gray-700">How it works</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-md flex items-center justify-center">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Enter product info</p>
                    <p className="text-sm text-gray-500">Fill in a title, description, and upload optional images.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-md flex items-center justify-center">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Click "Generate"</p>
                    <p className="text-sm text-gray-500">Our AI collects insights and builds optimized content.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 text-green-600 rounded-md flex items-center justify-center">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">Get marketing assets</p>
                    <p className="text-sm text-gray-500">Copy-ready texts, images, ads and more — all in one place.</p>
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
