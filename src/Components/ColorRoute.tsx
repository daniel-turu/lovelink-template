import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getContrastColor, lovelinkTemp } from '../LovelinkTempInfo';
import { useCouples } from './CouplesProvider'; // Import the custom hook to access CouplesContext

// Create a context to hold both background and text colors
interface ColorContextType {
  bgColor: string;
  textColor: string;
}

const ColorRouter = createContext<ColorContextType | undefined>(undefined);

// Custom hook to use the color context
export function useColors() {
  const context = useContext(ColorRouter);
  if (context === undefined) {
    throw new Error('useColors must be used within a ColorProvider');
  }
  return context;
}

// Provider component
export function ColorProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [tempName, setTempName] = useState<string>('');

  // Access CouplesContext
  const couplesData = useCouples();

  // Log the first part of the access path
  useEffect(() => {
    const tempPath = location.pathname.split('/').filter(segment => segment);
    if (tempPath.length > 0) {
      setTempName(tempPath[0]);
    }
  }, [location.pathname]);

  // Extract colors from query parameters
  const urlBgColor = queryParams.get('bgcolor');
  const urlTextColor = queryParams.get('textcolor') || getContrastColor(urlBgColor || '');

  // Get temp information and fallback to CouplesContext colors
  const TempInfo = lovelinkTemp[tempName] || {};
  const BgColor =  urlBgColor || couplesData?.weddingColor?.BgColor || TempInfo.bgColor ||  '#fff';
  const TextColor =  urlTextColor || couplesData?.weddingColor?.TextColor || TempInfo.textColor ||  '#000';

  return (
    <ColorRouter.Provider value={{ bgColor: BgColor, textColor: TextColor }}>
      {children}
    </ColorRouter.Provider>
  );
}
