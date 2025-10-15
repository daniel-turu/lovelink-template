import { Link } from 'react-scroll';
import { useColors } from "../../Components/ColorRoute";
import { useCouples } from "../../Components/CouplesProvider";
import { motion } from "framer-motion";
// import './Nav_Yoruba.css';

const Nav_Yoruba = () => {
  const { bgColor, textColor } = useColors();
  const couples = useCouples();
  const { brideName, groomName } = couples;

  const bgVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', duration: 1 } }
  }

  return (
    <motion.div className="nav-yoruba-container py-5 px-10 flex justify-between items-center"
      style={{ backgroundColor: bgColor, color: textColor }}
      // variants={bgVariants}
      initial='hidden'
      animate='visible'
    >
      <div className="logo font-playfair">
        <h1>{`${brideName} & ${groomName}`}</h1>
      </div>

      <div className="nav-items font-inter">
        <ul className="flex space-x-5">
          <li><Link to="home" smooth={true} duration={1000}>Home</Link></li>
          <li><Link to="about" smooth={true} duration={1000}>About Us</Link></li>
          <li><Link to="wedding" smooth={true} duration={1000}>Wedding</Link></li>
          <li><Link to="gallery" smooth={true} duration={1000}>Gallery</Link></li>
          <li><Link to="rsvp" smooth={true} duration={1000}>RSVP</Link></li>
        </ul>
      </div>
    </motion.div>
  )
};

export default Nav_Yoruba;