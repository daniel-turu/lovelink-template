import React from 'react'
import { getBgColor, getTextColor } from '../../Utiles'
import { transparentize } from 'polished';
import { getCouples } from '../../CouplesData';

export const Footer = () => {
  const couples = getCouples();

    const transparentColor = transparentize(0.6, getBgColor()); // 60% transparent
    const transBgC50 = transparentize(0.5, getBgColor()); // 50% transparent

    return (
        <div className='flex flex-col items-center  bg-cover bg-center relative'
            style={{ color: getTextColor(), backgroundImage: `url(${couples.couplesImageTog3}` }}
        >
            <div className="absolute w-full h-full z-10 bg-black opacity-50"></div>

            <div className='container my-10 sm:my-40 z-10'>

                <div className='w-full flex justify-center items-center '>

                    <div className="relative inline-block">
                        <div className="absolute inset-10 border rounded-full animate-ping"
                            style={{
                                backgroundColor: transparentColor,
                                background: `radial-gradient(circle, ${transBgC50} 0%, ${transBgC50} 60%,${getBgColor()} 100%)`
                            }}>
                        </div>

                        <div className='relative rounded-full w-[240px] h-[240px] sm:w-[400px] sm:h-[400px]  flex flex-col items-center justify-center text-white'
                            style={{ backgroundColor: transparentColor }}
                        >
                            <div className='font-bold text-2xl sm:text-4xl sm:mb-4 font-mistletoe tracking-wider'>Wilson & Deborah</div>
                            <div className='font-extrabold text-3xl sm:text-6xl sm:mb-4 text-center font-mistletoe tracking-wider'>Forever</div>
                            <div className='font-bold sm:font-normal sm:text-2xl'>Thank you</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
