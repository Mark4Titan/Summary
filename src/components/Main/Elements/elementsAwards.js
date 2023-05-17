import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FMotion, visibleMotion } from "./PatternFMotion/PatternFMotion";
import { useEffect } from "react";

export const Awards = ({ theme, awards, preview, activ, autoActive }) => {
  const { ref, inView } = useInView(false);

  useEffect(() => {
    if (inView !== activ.awards) {
      autoActive(inView, "awards");
    }
  }, [activ.awards, autoActive, inView]);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      key="awards"
      id="awards"
      ref={ref}
      className={`main_item main_item_${preview} main_about_${theme} awards awards_${theme} ${theme}`}
    >
      {awards.map((element) =>
        Object.keys(element).map((key) => {
          const elementLi = [];
          const elementDiv = [];

          key === "title" &&
            elementDiv.push(
              <motion.h3
                custom={{ pos: 1, multiplier: 0.1, move: "y" }}
                variants={FMotion}
                key={`awards_${key}`}
                className={`titleItems element_${key} titleItems_${theme} awards_titleItems_${theme} titleItems_${preview}`}
              >
                {element.expansion}
              </motion.h3>
            );

          key === "content" &&
            element[key].map((keys, pos) =>
              elementLi.push(
                <motion.li
                  custom={{ pos: pos, multiplier: 0.3 }}
                  variants={visibleMotion}
                  key={`${key}_${pos}`}
                  className={`element_${key} ${key}_${pos}_${theme} ${theme}`}
                >
                  <img
                    key={`${key}_${pos}`}
                    src={keys}
                    alt="certificate"
                    className={`img_${key}_${pos}_${theme}`}
                  />
                </motion.li>
              )
            );
          return key === "content" ? (
            <ul
              id={key}
              key={key}
              className={`ul_element_${key} ${key}_${theme}`}
            >
              {elementLi}
            </ul>
          ) : (
            elementDiv
          );
        })
      )}
    </motion.div>
  );
};
export default Awards;
