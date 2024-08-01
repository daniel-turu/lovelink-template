import React from 'react';
import { getCouples } from '../../CouplesData';
import { SqureHvImage } from '../../Components/SqureHvImage';



export const GroomsMen = () => {
    const couples = getCouples();
    const groomsMen = couples.groomsMen || []; // Ensure celebration is defined and is an array

    return (
        <div className='flex flex-col items-center font-serif bg-gray-100'>
            
            {couples.groomsMen?
             <div className='container my-10 text-center'>
             <h1 className='text-3xl font-mistletoe tracking-wider'>Brides Maid</h1>

             <div className='flex flex-wrap justify-center my-6 space-x-4'>
                 {groomsMen.map((groomsmen, index) => (
                     <div key={index} className='flex flex-col items-center m-2'>
                         <SqureHvImage cicle_wh={110} backgroundImageUrl={groomsmen.imageUrl || ""} />
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
