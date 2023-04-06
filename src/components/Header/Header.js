import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import Preview from "./Preview";
import Specifics from "./Specifics";
import { ThemeEditor } from "../Theme/Theme";
import Language from "../Language/Language";
import { FMotion } from "../Main/Elements/PatternFMotion/PatternFMotion";

export const Header = ({ preview, theme }) => {
  return (
    <IconContext.Provider value={{ className: "react_icons" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        key="headers"
        id="headers"
        className={`header header_${theme} header_${preview}`}
      >
        <motion.div
          custom={{ pos: 3, multiplier: 0.1, move: "y" }}
          variants={FMotion}
          key="headCon"
          id="headCon"
          className={`headCon headCon_${theme} headCon_${preview}`}
        >
          <Specifics elements={{ ThemeEditor }} />
          <Preview preview={preview} theme={theme} />
          <Specifics elements={{ Language }} />
        </motion.div>
      </motion.div>
    </IconContext.Provider>
  );
};
export default Header;
