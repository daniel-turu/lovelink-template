import React from 'react'
import { getBgColor, getTextColor } from '../../Utiles'
import { getCouples } from '../../CouplesData'

export const Location = () => {
    const couples = getCouples();
    const celebrations = couples.celebration || []; // Ensure celebration is defined and is an array

    return (
        <div className='flex flex-col items-center font-serif' id='events'>
            <div className='container my-10'>
                {couples.celebration ? <h1 className='text-center text-3xl font-mistletoe tracking-wider'>Location</h1> : ""}
                

                <div className='flex flex-col sm:flex-row justify-center items-center'>
                    {celebrations.map((celebration, index) => (
                        <div key={index} className='border border-slate-500 w-4/5 sm:w-2/5 text-center m-3'
                            style={{ borderColor: getBgColor() }}>
                            <h2 className='text-lg bg-slate-200'
                                style={{
                                    backgroundColor: getBgColor(),
                                    color: getTextColor()
                                }}>
                                {celebration.type || 'Event Type'}
                            </h2>
                            <p className='p-4'>
                                {celebration.address || 'Event Address'}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
