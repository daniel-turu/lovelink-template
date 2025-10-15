import React, { useState, useEffect } from 'react';
import { useCouples } from '../../../Components/CouplesProvider';
import { useColors } from '../../../Components/ColorRoute';
import { formatWeddingDate } from '../../../Utiles';
import { Transition } from '@headlessui/react';


function ImageCard_Yoruba() {
  const couplesData = useCouples();
  const { bgColor, textColor } = useColors();

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowImage(true);
  }, []);

  return (
    <Transition
      show={showImage}
      enter="transition-opacity duration-1000 transform"
      enterFrom="opacity-0 -translate-y-10"
      enterTo="opacity-100 translate-y-0"
    >
      <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
        <img
          src={couplesData.weddingCard}
          alt="Wedding Card"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-red-600 to-transparent"
          style={{ backgroundImage: 'url(/path/to/your/adire_texture.png)' }}
        />
        <div className="absolute bottom-0 w-full p-4 text-white">
          <h2 className="font-serif text-2xl">Save the Date</h2>
          <p className="font-sans">
            {(() => {
              const { dayOfWeek, day, month, time } = formatWeddingDate(couplesData.weddingDate);
              return `${dayOfWeek}, ${month} ${day} at ${time}`;
            })()}
          </p>
        </div>
      </div>
    </Transition>
  );
}

export default ImageCard_Yoruba;