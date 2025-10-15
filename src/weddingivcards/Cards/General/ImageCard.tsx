import React, { useState, useEffect } from 'react';
import { useCouples } from '../../../Components/CouplesProvider';
import { formatWeddingDate } from '../../../Utiles';

function ImageCard() {
    const Couples = useCouples();
    const bg =Couples.weddingCard;

    
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
            <div className='bg-[#F6F7F8] flex flex-col items-center justify-center'>
                <img className={`w-[100vh] transform transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} src={bg} alt="card-image" />
            </div>
        </div>
    );
}

export default ImageCard;
