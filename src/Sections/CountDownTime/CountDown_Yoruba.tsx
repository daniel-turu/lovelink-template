import React, { useEffect, useState } from 'react';
import { useCouples } from "../../Components/CouplesProvider";
import { useColors } from "../../Components/ColorRoute";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import { JSX } from 'react/jsx-runtime';

type TimeLeft = {
    Days: number;
    Hours: number;
    Minutes: number;
    Seconds: number;
    [key: string]: number; // allows indexing with strings
};


export const CountDown_Yoruba = () => {
    const couplesData = useCouples();
    const { bgColor, textColor } = useColors();
    const weddingDate = new Date(couplesData.weddingDate);

    type TimeLeft = {
        Days: number;
        Hours: number;
        Minutes: number;
        Seconds: number;
    };

    const calculateTimeLeft = (): TimeLeft => {
        let difference = +weddingDate - +new Date();
        let timeLeft: TimeLeft = {
            Days: 0,
            Hours: 0,
            Minutes: 0,
            Seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutes: Math.floor((difference / 1000 / 60) % 60),
                Seconds: Math.floor((difference / 1000) % 60),
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

    const timerComponents: React.ReactNode[] = [];

    (Object.keys(timeLeft) as (keyof TimeLeft)[]).forEach((interval) => {
        timerComponents.push(
            <span key={interval}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });



    return (
        <div className="bg-[#00000083] w-full h-full p-10 rounded-lg flex flex-col items-center justify-center text-center" style={{ backgroundImage: `url(${couplesData.couplesImageTog1})`, color: textColor, background: bgColor }}>
            <h2 className="text-4xl font-semibold mb-4">Wedding Countdown</h2>
            <AnimatePresence>
                <motion.div className="flex space-x-4 text-2xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};