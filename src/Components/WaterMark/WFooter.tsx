import React from 'react'

export const WFooter = () => {
    return (
        <div className='h-10 w-full text-white bg-black flex justify-center items-center text-xl'>
            <p className='px-2'>Design by </p>
            <a href="https://lovelink-web.vercel.app" target="_blank" rel="noreferrer" className='flex justify-center' >
                <img src="/logo.svg" width={25} alt="df" srcSet="" />
                <span className='text-[#FF6600] px-1'>CouplesInvite</span>
            </a>
        </div>
    )
}
