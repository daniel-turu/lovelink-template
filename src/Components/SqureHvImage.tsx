import React from 'react';
import { useColors } from './ColorRoute';

interface SqureHvImageProps {
  cicle_wh: number;
  backgroundImageUrl: string;
}

export const SqureHvImage: React.FC<SqureHvImageProps> = ({ cicle_wh, backgroundImageUrl }) => {
  const { bgColor } = useColors();

  return (
    <div
      className="rounded-tl-2xl rounded-br-2xl border-2 transition-transform duration-300 ease-in-out transform hover:scale-110 active:scale-125"
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
