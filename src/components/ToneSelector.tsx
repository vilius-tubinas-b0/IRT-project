
import { Card } from '@/components/ui/card';

interface ToneSelectorProps {
  selectedTone: string;
  onToneChange: (tone: string) => void;
  disabled?: boolean;
}

const tones = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'Formal, business-oriented language',
    example: 'This premium product delivers exceptional performance...'
  },
  {
    id: 'casual',
    name: 'Casual',
    description: 'Friendly, conversational tone',
    example: "You'll love how this amazing product makes life easier..."
  },
  {
    id: 'luxury',
    name: 'Luxury',
    description: 'Sophisticated, premium language',
    example: 'Experience unparalleled elegance with this exquisite...'
  },
  {
    id: 'playful',
    name: 'Playful',
    description: 'Fun, energetic, and engaging',
    example: 'Get ready to fall in love with this incredible...'
  },
  {
    id: 'technical',
    name: 'Technical',
    description: 'Detailed, specification-focused',
    example: 'Featuring advanced engineering and precision manufacturing...'
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Clean, simple, direct language',
    example: 'Essential. Functional. Perfect.'
  }
];

export const ToneSelector = ({ selectedTone, onToneChange, disabled = false }: ToneSelectorProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tones.map((tone) => (
        <Card
          key={tone.id}
          className={`p-4 transition-all duration-200 ${
            disabled 
              ? 'opacity-50 cursor-not-allowed' 
              : 'cursor-pointer hover:shadow-md'
          } ${
            selectedTone === tone.id
              ? 'ring-2 ring-blue-500 bg-blue-50 border-blue-200'
              : 'hover:border-gray-300'
          }`}
          onClick={() => !disabled && onToneChange(tone.id)}
        >
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">{tone.name}</h3>
            <p className="text-sm text-gray-600">{tone.description}</p>
            <p className="text-xs text-gray-500 italic border-l-2 border-gray-200 pl-2">
              "{tone.example}"
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};
