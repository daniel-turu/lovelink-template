import React from 'react';
import { useColors } from '../../Components/ColorRoute';
import { useCouples } from '../../Components/CouplesProvider';
import 'tailwindcss/tailwind.css';

export const Location_Yoruba = () => {
  const couplesData = useCouples();
  const { bgColor, textColor } = useColors();
  const { celebration } = couplesData;

  if (!celebration) return null;

  return (
    <div className="flex flex-wrap justify-center py-10" style={{backgroundColor: bgColor, color: textColor}}>
      {celebration.map((event, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{event.type}</div>
            <p className="text-base">{event.address}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-red-200 rounded-full px-3 py-1 text-sm font-semibold text-red-700 mr-2 mb-2">#YorubaWedding</span>
            <span className="inline-block bg-gold-200 rounded-full px-3 py-1 text-sm font-semibold text-gold-700 mr-2 mb-2">#AsoOke</span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">#Gele</span>
          </div>
        </div>
      ))}
    </div>
  );
}
