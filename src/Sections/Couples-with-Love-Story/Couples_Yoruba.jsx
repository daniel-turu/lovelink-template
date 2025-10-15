import { useState } from 'react';
import { useCouples } from '../../Components/CouplesProvider';
import { RoundImage } from '../../Components/RoundImage';
import { truncateText } from '../../Utiles';
import { LoveStoryDialog } from './LoveStoryDialog';
import 'twin.macro';

export const Couples_Yoruba = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCouple, setSelectedCouple] = useState(null);
  const couples = useCouples();

  const handleClick = (couple) => {
    setSelectedCouple(couple);
    setDialogOpen(true);
  };

  return (
    <div tw="flex flex-col items-center justify-center bg-red-600 p-5">
      <div tw="grid grid-cols-1 md:grid-cols-2 gap-5">
        {couples.map((couple) => (
          <div
            key={couple.id}
            tw="flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:scale-105"
            onClick={() => handleClick(couple)}
          >
            <RoundImage
              imageUrl={couple.imageUrl}
              tw="object-cover w-full h-64"
            />
            <div tw="p-4 text-center">
              <h2 tw="font-playfair text-2xl mb-2">{couple.name}</h2>
              <p tw="font-inter text-base text-gray-700">
                {truncateText(couple.story, 100)}
              </p>
              <button tw="mt-3 bg-gold-500 text-white rounded-full px-4 py-2 transition-colors duration-300 hover:bg-gold-700">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      {dialogOpen && (
        <LoveStoryDialog
          couple={selectedCouple}
          closeDialog={() => setDialogOpen(false)}
        />
      )}
    </div>
  );
};