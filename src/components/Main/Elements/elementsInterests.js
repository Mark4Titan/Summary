import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FMotion } from "./PatternFMotion/PatternFMotion";
import View from "./View";

export const Interests = ({ theme, interests, preview }) => {
  const { ref, inView } = useInView(false);
  View({ interests: inView });
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      key="interests"
      id="interests"
      ref={ref}
      className={`main_item main_item_${preview} main_about_${theme} interests interests_${theme} ${theme}`}
    >
      {interests.map((element) =>
        Object.keys(element).map((key, pos) =>
          key === "title" ? (
            <motion.h3
              custom={{ pos: 1, multiplier: 0.1, move: "y" }}
              variants={FMotion}
              key={key}
              className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${key}Items_${theme}_${preview}`}
            >
              {element[key]}
            </motion.h3>
          ) : (
            <motion.p
              custom={{ pos: pos + 1, multiplier: 0.3, move: "y" }}
              variants={FMotion}
              key={key}
              ref={ref}
              className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${theme}`}
            >
              {element[key]}
            </motion.p>
          )
        )
      )}
    </motion.div>
  );
};
export default Interests;
