import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FMotion } from "./PatternFMotion/PatternFMotion";
import View from "./View";

export const Education = ({ theme, education, preview }) => {
  const { ref, inView } = useInView(false);
  View({ education: inView });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      key="education"
      id="education"
      ref={ref}
      className={`main_item main_item_${preview} main_about_${theme} education education_${theme} ${theme}`}
    >
      {education.map((element) =>
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
            <motion.div
              custom={{ pos: pos, multiplier: 0.1, move: "y" }}
              variants={FMotion}
              key={key}
              ref={ref}
              className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${theme}`}
            >
              {element[key]}
            </motion.div>
          )
        )
      )}
    </motion.div>
  );
};
export default Education;
