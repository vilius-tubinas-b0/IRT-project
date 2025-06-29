
import { Card } from '@/components/ui/card';

interface ToneSelectorProps {
  selectedTone: string;
  onToneChange: (tone: string) => void;
  disabled?: boolean;
}
const tones = [
  {
    id: 'professional',
    name: 'Profesionalus',
    description: 'Oficiali, verslui skirta kalba',
    example: 'Šis aukščiausios kokybės produktas užtikrina išskirtinį našumą...'
  },
  {
    id: 'casual',
    name: 'Neformalus',
    description: 'Draugiškas, pokalbio stiliaus tonas',
    example: 'Jums patiks, kaip šis nuostabus produktas palengvina gyvenimą...'
  },
  {
    id: 'luxury',
    name: 'Prabangus',
    description: 'Rafinuota, aukštos kokybės kalba',
    example: 'Patirkite neprilygstamą eleganciją su šiuo išskirtiniu produktu...'
  },
  {
    id: 'playful',
    name: 'Žaismingas',
    description: 'Linksmas, energingas ir įtraukiantis',
    example: 'Pasiruoškite įsimylėti šį nepaprastą produktą...'
  },
  {
    id: 'technical',
    name: 'Techninis',
    description: 'Išsamus, technines specifikacijas akcentuojantis',
    example: 'Sukurtas naudojant pažangią inžineriją ir precizišką gamybą...'
  },
  {
    id: 'minimalist',
    name: 'Minimalistinis',
    description: 'Švari, paprasta ir aiški kalba',
    example: 'Esminis. Funkcionalus. Tobulas.'
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
