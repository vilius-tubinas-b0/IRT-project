
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Search, Globe, ImageIcon, PenTool, CheckCircle } from 'lucide-react';

const loadingSteps = [
  {
    id: 'search',
    title: 'Searching for manufacturer information',
    description: 'Finding official product pages and specifications',
    icon: Search,
    duration: 800
  },
  {
    id: 'competitors',
    title: 'Analyzing competitor landscape',
    description: 'Discovering similar products and market positioning',
    icon: Globe,
    duration: 1000
  },
  {
    id: 'social',
    title: 'Collecting social media insights',
    description: 'Finding trending posts and engagement data',
    icon: ImageIcon,
    duration: 700
  },
  {
    id: 'images',
    title: 'Generating product images',
    description: 'Creating high-quality marketing visuals',
    icon: ImageIcon,
    duration: 1900
  },
  {
    id: 'content',
    title: 'Writing product descriptions',
    description: 'Crafting compelling copy and marketing materials',
    icon: PenTool,
    duration: 600
  }
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

useEffect(() => {
  let isCancelled = false;

  const runSteps = async () => {
    let progressSoFar = 0;

    for (let i = 0; i < loadingSteps.length; i++) {
      if (isCancelled) return;

      const step = loadingSteps[i];
      setCurrentStep(i);

      const incrementCount = 10;
      const interval = step.duration / incrementCount;

      for (let j = 0; j < incrementCount; j++) {
        await new Promise(res => setTimeout(res, interval));
        if (isCancelled) return;

        progressSoFar += (100 / loadingSteps.length) / incrementCount;
        setProgress(Math.min(progressSoFar, 100));
      }

      setCompletedSteps(prev => new Set([...prev, step.id]));
    }

    await new Promise(res => setTimeout(res, 500));
    if (!isCancelled) onComplete();
  };

  runSteps();

  return () => {
    isCancelled = true;
  };
}, [onComplete]);


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl p-8 space-y-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Generating Your Product Content
            </h2>
            <p className="text-gray-600">
              Our AI is working hard to create the perfect description for your product
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Overall Progress</span>
                <span className="font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3 border border-gray-300 bg-white shadow-sm" />

            </div>

            <div className="space-y-4">
              {loadingSteps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = completedSteps.has(step.id);
                
                return (
                  <div
                    key={step.id}
className={`flex items-start space-x-4 p-4 rounded-lg border transition-all duration-300 ${
  isActive 
    ? 'bg-blue-50 border-blue-300' 
    : isCompleted 
      ? 'bg-green-50 border-green-300'
      : 'bg-gray-50 border-gray-200'
}`}
                  >
                    <div className={`flex-shrink-0 p-2 rounded-full ${
                      isActive 
                        ? 'bg-blue-100 text-blue-600' 
                        : isCompleted 
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-100 text-gray-400'
                    }`}>
                      {isCompleted ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Icon className={`w-5 h-5 ${isActive ? 'animate-pulse' : ''}`} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-medium ${
                        isActive ? 'text-blue-900' : isCompleted ? 'text-green-900' : 'text-gray-600'
                      }`}>
                        {step.title}
                      </h3>
                      <p className={`text-sm ${
                        isActive ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-500'
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
    </div>
  );
};
