// ColorRouter.tsx
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getCouples } from '../CouplesData';
import { getContrastColor, lovelinkTemp } from '../LovelinkTempInfo';

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
  const [tempName, setTempName] = useState<string>('')

  // Log the first part of the access path
  useEffect(() => {
    const tempPath = location.pathname.split('/').filter(segment => segment);
    if (tempPath.length > 0) {
      setTempName(tempPath[0])
    }
  }, [location.pathname]);


  // Extract colors from query parameters
  const urlBgColor = queryParams.get('bgcolor');
  const urlTextColor = queryParams.get('textcolor') || getContrastColor(urlBgColor || ''); // get color Contrast from the bg-color if text-color is not giving

  // If you have default values from CouplesData, you can use them here
  const Couples = getCouples() || {};

  const TempInfo = lovelinkTemp[tempName] || {};
//   || Couples?.weddingColor?.BgColor
//   || Couples?.weddingColor?.TextColor

  const BgColor = urlBgColor  || TempInfo.bgColor || '#fff';
  const TextColor = urlTextColor  || TempInfo.textColor || '#000';

  return (
    <ColorRouter.Provider value={{ bgColor: BgColor, textColor: TextColor }}>
      {children}
    </ColorRouter.Provider>
  );
}
