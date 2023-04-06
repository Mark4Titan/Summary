import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FMotion } from "./PatternFMotion/PatternFMotion";
import View from "./View";

export const Experience = ({ theme, experience, preview }) => {
  const { ref, inView } = useInView(false);
  View({ experience: inView });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      key="experience"
      id="experience"
      ref={ref}
      className={`main_item main_item_${preview} main_about_${theme} experience experience_${theme} ${theme}`}
    >
      {experience.map((element) =>
        Object.keys(element).map(
          (key) =>
            key === "title" && (
              <motion.h3
                custom={{ pos: 1, multiplier: 0.1, move: "y" }}
                variants={FMotion}
                key={`Item_${key}`}
                className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${key}Items_${theme}_${preview}`}
              >
                {element[key]}
              </motion.h3>
            )
        )
      )}
      <ul
        id={`experience`}
        key={"experience"}
        className={`ul_experience experience experience_${theme}`}
      >
        {experience.map((element) =>
          Object.keys(element).map(
            (key, pos) =>
              key !== "title" && (
                <motion.li
                  custom={{ pos: pos, multiplier: 0.1, move: "y" }}
                  variants={FMotion}
                  key={`${element[key]}experienceLi`}
                  className={`experienceElItems experienceEl_${theme}`}
                >
                  <div
                    key={`Item_${key}`}
                    className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${theme}`}
                  >
                    {element[key]}
                  </div>
                </motion.li>
              )
          )
        )}
      </ul>
    </motion.div>
  );
};
export default Experience;
