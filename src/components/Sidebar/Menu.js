import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useMedia from "use-media";
import Converter from "../Converter/Converter";
import { getPreview } from "../../redux/services/PreviewSlice";
import { getBurger } from "../../redux/services/BurgerSlice";
import { FMotion } from "../Main/Elements/PatternFMotion/PatternFMotion";

const Menu = ({ theme, activ }) => {
  const isWide = useMedia({ maxWidth: 1280 });
 
  const { keys } = Converter();
  const { preview } = useSelector(getPreview);
  const { burger } = useSelector(getBurger);


  const trogle = () => {
    if (!isWide) {
      if (!burger && preview !== "Desktop") return "close";
      if (burger && preview !== "Desktop") return "activ";
      if (preview === "Desktop") return "redy";
    } else {
      if (burger && preview === "Desktop") return "activ";
      if (!burger && preview === "Desktop") return "close";
      if (preview === "Desktop") return "redy";
    }
    // console.log(
    //   "preview =",
    //   preview,
    //   "| burger =",
    //   burger,
    //   "| isWide = ",
    //   isWide
    // );
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      className={`listSideBar listSideBar_${trogle()} listSideBar_${theme} listSideBar_${trogle()}_${theme}`}
    >      
      <ul className={`ulSideBar ulSideBar_${theme}`}>
        {Object.keys(keys).map((key, pos) => (
          <motion.li
            custom={{ pos: pos, multiplier: 0.03, move: "y" }}
            variants={FMotion}
            key={key}
            className={`sidebarItems sidebarItems_${key} sidebarItems_${theme}`}
          >    
            <a
              key={key}
              href={`#${key}`}
              aria-label={`link ${key}`}
              className={`${activ[key] === true ? `activ activ_${theme}` : key} aHref aHref_${key} aHref_${theme} ${theme}`}
            >
              {keys[key]}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
export default Menu;
