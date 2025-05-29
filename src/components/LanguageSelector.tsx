
import React from 'react';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useLanguage, type Language } from '../hooks/useLanguage';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  const currentLangConfig = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <Select value={currentLanguage} onValueChange={(value: Language) => changeLanguage(value)}>
        <SelectTrigger className="glass border-white/20 bg-white/5 backdrop-blur-md text-white hover:bg-white/10 transition-colors duration-300 w-auto min-w-[120px]">
          <div className="flex items-center space-x-2">
            <Globe size={16} strokeWidth={1} className="text-white/70" />
            <SelectValue>
              <span className="text-sm font-light">
                {currentLangConfig?.nativeName || 'English'}
              </span>
            </SelectValue>
          </div>
        </SelectTrigger>
        <SelectContent className="bg-black/90 backdrop-blur-xl border-white/20 text-white">
          {languages.map((language) => (
            <SelectItem 
              key={language.code} 
              value={language.code}
              className="hover:bg-white/10 focus:bg-white/10 text-white cursor-pointer"
            >
              <div className="flex items-center space-x-2">
                <span className="text-sm font-light">{language.nativeName}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
