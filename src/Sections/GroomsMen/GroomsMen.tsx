import React from 'react';
import { SqureHvImage } from '../../Components/SqureHvImage';
import { useCouples } from '../../Components/CouplesProvider';



export const GroomsMen = () => {
    const couples = useCouples();
    const groomsMen = couples.groomsMen || []; // Ensure celebration is defined and is an array


    // If the groomsMen array is empty, return nothing (null)
    if (groomsMen.length === 0) {
        return null;
    }

    return (
        <div className='flex flex-col items-center font-serif bg-gray-100'>
            
            {couples.groomsMen?
             <div className='container my-10 text-center'>
             <h1 className='text-3xl font-mistletoe tracking-wider'>Grooms men</h1>

             <div className='flex flex-wrap justify-center my-6 space-x-4'>
                 {groomsMen.map((groomsmen, index) => (
                     <div key={index} className='flex flex-col items-center m-2'>
                         <SqureHvImage cicle_wh={110} backgroundImageUrl={groomsmen.image || ""} />
                         <div className='mt-1'>{groomsmen.name}</div>
                         <div className='text-sm'>{groomsmen.role}</div>
                        
                     </div>

                 ))}
             </div>
         </div>
         :""
         }

           
        </div>
    );
}
