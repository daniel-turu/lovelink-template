import "./style.css";
import { transparentize } from 'polished';
import { formatDate} from '../../Utiles';
import MyParticles from './MyParticles';
import { useColors } from "../../Components/ColorRoute";
import { useCouples } from "../../Components/CouplesProvider";

export const Hero = () => {
    const Couples = useCouples()
    const { bgColor } = useColors();

    const transparentColor = transparentize(0.6, bgColor); // 60% transparent
    const transBgC50 = transparentize(0.5, bgColor); // 50% transparent

    const bg = Couples.couplesImageTog1
    const date = formatDate(Couples.weddingDate)

    return (
        <div className='flex flex-col items-center'>

            <div className=" h-[500px] sm:h-screen w-full bg-cover bg-center flex items-center justify-center relative "
            style={{ backgroundImage: `url(${bg})`, }} >
                <div className="absolute bg-[#00000083] w-full h-full"></div>
                   <MyParticles />
                <div className="relative  inline-block">
                    <div className="absolute inset-10 border rounded-full animate-ping"
                        style={{
                            backgroundColor: transparentColor,
                            background: `radial-gradient(circle, ${transBgC50} 0%, ${transBgC50} 60%,${bgColor} 100%)`
                        }}>
                    </div>

                    <div className='relative rounded-full w-[240px] h-[240px] sm:w-[400px] sm:h-[400px] bg-[rgba(133,170,186,0.6)] flex flex-col items-center justify-center text-white'
                        style={{ backgroundColor: transparentColor }}
                    >
                        <div className='font-bold sm:text-2xl sm:mb-4'>WE'RE GETTING MARRIED</div>
                        <div className='font-extrabold text-3xl sm:text-6xl sm:mb-4 text-center font-mistletoe tracking-wider'>Save Our Date</div>
                        <div className='font-bold sm:font-normal sm:text-2xl'> {date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
