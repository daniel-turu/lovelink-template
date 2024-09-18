import React, { useEffect, useState } from 'react';
import { transparentize } from 'polished';
import { useColors } from '../../Components/ColorRoute';
import { useCouples } from '../../Components/CouplesProvider';


interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export const CountDown = () => {
    const couples = useCouples()
    const { bgColor, textColor } = useColors();


    const weddingDate = new Date(couples.weddingDate);
    const now = new Date();

    const calculateTimeLeft = () => {
        const difference = +weddingDate - +new Date();
        let timeLeft: TimeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatTime = (time: number) => (time < 10 ? `0${time}` : `${time}`);

    const renderCountdownText = () => {
        if (now < weddingDate) {
            return (
                <>
                    <h3 className='text-sm mt-14'>We Are Waiting For.....</h3>
                    <h1 className='text-2xl mt-5'>The Big Day</h1>
                </>
            );
        } else if (now > weddingDate) {
            return (
                <>
                    <h3 className='text-sm mt-14'>We Celebrate</h3>
                    <h1 className='text-2xl mt-5'>The Big Day</h1>
                </>
            );
        } else {
            return (
                <>
                    <h3 className='text-sm mt-14'>It's</h3>
                    <h1 className='text-2xl mt-5'>{weddingDate.toDateString()} {weddingDate.toLocaleTimeString()}</h1>
                </>
            );
        }
    };


    const transBgC50 = transparentize(0.5, bgColor); // 50% transparent

    return (
        <div className='flex flex-col items-center'>
            <div
                className="container text-center pb-[36px] font-serif bg-fixed bg-cover bg-center relative"
                style={{
                    color: textColor,
                    backgroundImage: `url(${couples.couplesImageTog2})`,
                }}
            >
                <div className="absolute w-full h-full z-10 bg-black opacity-50"></div>

                <div className="relative z-20">
                    {renderCountdownText()}

                    <div className='flex flex-col items-center font-mistletoe'>
                        {now > weddingDate ? (
                            <div
                                className='w-full m-5 flex flex-col justify-center'
                                style={{ backgroundColor: transBgC50, color: textColor }}
                            >
                                <span className='text-5xl'>{weddingDate.toDateString()} <br /> {weddingDate.toLocaleTimeString()}</span>
                            </div>
                        ) : (
                            <>
                                <div
                                    className='w-4/5 h-28 bg-slate-700 m-3 flex flex-col justify-center'
                                    style={{ backgroundColor: transBgC50 }}
                                >
                                    <span className='text-6xl'>{formatTime(timeLeft.days)}</span>
                                    <span>DAYS</span>
                                </div>
                                <div
                                    className='w-4/5 h-28 bg-slate-700 m-3 flex flex-col justify-center'
                                    style={{ backgroundColor: transBgC50 }}
                                >
                                    <span className='text-6xl'>{formatTime(timeLeft.hours)}</span>
                                    <span>HOURS</span>
                                </div>
                                <div
                                    className='w-4/5 h-28 bg-slate-700 m-3 flex flex-col justify-center'
                                    style={{ backgroundColor: transBgC50 }}
                                >
                                    <span className='text-6xl'>{formatTime(timeLeft.minutes)}</span>
                                    <span>MINS</span>
                                </div>
                                <div
                                    className='w-4/5 h-28 bg-slate-700 m-3 flex flex-col justify-center'
                                    style={{ backgroundColor: transBgC50 }}
                                >
                                    <span className='text-6xl'>{formatTime(timeLeft.seconds)}</span>
                                    <span>SECS</span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>

    );
};