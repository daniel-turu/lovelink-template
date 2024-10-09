import React, { useState, useEffect } from 'react';
import { useCouples } from '../../../Components/CouplesProvider';
import { formatWeddingDate } from '../../../Utiles';

function Card1() {
  const Couples = useCouples();
  const bg = '/images/tools/flower.png';

  // State to control animation visibility
  const [isVisible, setIsVisible] = useState(false);
  const { dayOfWeek, day, month, time } = formatWeddingDate(Couples.weddingDate);

  // Trigger animation on load
  useEffect(() => {
    // Timeout used to ensure rendering is complete before animation triggers
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 100); // slight delay to ensure everything renders

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='w-full'>
      <div className='bg-[#F6F7F8] h-[100vh] flex flex-col items-center justify-center'>
        <div
          className={`relative overflow-hidden h-[100vh] w-[350px] bg-white flex flex-col justify-center items-center text-center transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Decorative background images */}
          <div
            className="w-[80%] h-[80%] bg-center absolute -top-32 -left-20 bg-contain bg-no-repeat -rotate-6 z-0"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div
            className="w-[80%] h-[80%] bg-center absolute -top-32 -right-20 bg-contain bg-no-repeat rotate-[180deg] z-0 scale-y-[-1] opacity-30"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div
            className="w-[80%] h-[80%] bg-center absolute -bottom-32 -right-20 bg-contain bg-no-repeat -rotate-[180deg] z-0"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
          <div
            className="w-[80%] h-[80%] bg-center absolute -bottom-32 -left-20 bg-contain bg-no-repeat -rotate-6 z-0 scale-y-[-1] opacity-30"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>

          {/* Card content */}
          <div className='z-10'>
            <div className='font-adinekirnberg text-5xl pb-6'>Wedding Invetation</div>
            <div className='w-[250px] pb-6 text-sm'>
              We invite your pleasure to come to the wedding reception ceremony of
            </div>
            <div className='font-adinekirnberg text-5xl'>{Couples.brideName}</div>
            <div className='font-adinekirnberg text-4xl'>&</div>
            <div className='font-adinekirnberg text-5xl'>{Couples.groomName}</div>

            {/* Date and Time Section */}
            <div className='py-5'>
              <div className='flex flex-row font-arimo'>
                <div className='border-t border-black'>{dayOfWeek.toUpperCase()}</div>
                <div className='border-b border-black'>
                  <div className='font-bold text-2xl'>{day}</div>
                  <div>{month.toUpperCase()}</div>
                </div>
                <div className='border-t border-black'>AT {time.toUpperCase()}</div>
              </div>
            </div>

            <div className='w-[17rem]'>
              {/* Check if celebration exists and has at least one item */}
              {Couples.celebration && Couples.celebration.length > 0 && Couples.celebration[0].address ? (
                <div>
                  {Couples.celebration[0].address}
                </div>
              ) : (
                <div>  </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
