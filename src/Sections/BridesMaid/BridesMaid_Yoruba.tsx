import { useColors } from "../../Components/ColorRoute";
import { useCouples } from "../../Components/CouplesProvider";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

export const BridesMaid_Yoruba = () => {
    const couplesData = useCouples();
    const { bgColor, textColor } = useColors();

    const bridesmaids = couplesData?.bridesMaid;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section className="bg-gradient-to-r from-red-500 via-gold-500 to-white-500 text-center py-12 px-4" style={{backgroundColor: bgColor, color: textColor}}>
            <h2 className="font-serif text-4xl mb-6">Our Bridesmaids</h2>
            <motion.div className="flex flex-wrap justify-center items-start" variants={containerVariants} initial="hidden" animate="visible">
                {bridesmaids?.map((bridesmaid, index) => (
                    <motion.div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 px-2" variants={itemVariants}>
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <img className="w-full h-56 object-cover" src={bridesmaid.image} alt={bridesmaid.name} />
                            <div className="p-4">
                                <h3 className="font-serif text-xl">{bridesmaid.name}</h3>
                                <p className="text-sm">{bridesmaid.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};