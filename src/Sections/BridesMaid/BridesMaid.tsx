import React from 'react';
import { RoundImage } from '../../Components/RoundImage';
import { getCouples } from '../../CouplesData';



export const BridesMaid = () => {
    const couples = getCouples();
    const bridesMaids = couples.bridesMaid || []; // Ensure celebration is defined and is an array

    return (
        <div className='flex flex-col items-center font-serif bg-gray-100' id='fiends'>
            
            {couples.bridesMaid?
             <div className='container my-10 text-center'>
             <h1 className='text-3xl font-mistletoe tracking-wider'>Brides Maid</h1>

             <div className='flex flex-wrap justify-center my-6 space-x-4'>
                 {bridesMaids.map((bridesmaid, index) => (
                     <div key={index} className='flex flex-col items-center m-2'>
                         <RoundImage cicle_wh={110} backgroundImageUrl={bridesmaid.imageUrl || ""} />
                         <div className='mt-1'>{bridesmaid.name}</div>
                         <div className='text-sm'>{bridesmaid.role}</div>
                     </div>
                 ))}
             </div>
         </div>
         :""
         }

           
        </div>
    );
}
