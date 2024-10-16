import React from 'react';
import { useColors } from './ColorRoute';

interface RoundImageProps {
  cicle_wh: number;
  backgroundImageUrl: string;
}

export const RoundImage: React.FC<RoundImageProps> = ({ cicle_wh, backgroundImageUrl }) => {
  const { bgColor } = useColors();

  return (
    <div
      className="rounded-full border-2 transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-125 mx-2"
      style={{
        width: `${cicle_wh}px`,
        height: `${cicle_wh}px`,
        backgroundImage: `url('${backgroundImageUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderColor: bgColor
      }}
    >
    </div>
  );
};
