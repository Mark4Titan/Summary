import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import View from "../Main/Elements/View";
import { AiFillApi } from "react-icons/ai";
import { FMotion } from "../Main/Elements/PatternFMotion/PatternFMotion";

const Projects = ({ projects, theme, preview }) => {
  const { ref, inView } = useInView(false);
  View({ projects: inView });

  const Element = (element, key, pos) => {
    const key0 = Object.keys(element)[0];
    const key1 = Object.keys(element)[1];
    const key2 = Object.keys(element)[2];
    return (
      <motion.div
        custom={{ pos: pos + 1, multiplier: 0.1, move: "y" }}
        variants={FMotion}
        key={`key_${key0}`}
        className={`${key0}_box_item ${key0}_box_item_${theme}`}
      >
        <a
          href={element.link}
          target={`_blank`}
          aria-label={`link ${key1}`}
          className={`${key1}_Item ${key1}Item_${theme} ${key1}Item_${theme}_${preview} ${theme}`}
        >
          <p
            className={`${key0}_Item ${key0}Item_${theme} ${key0}Item_${theme}_${preview}`}
          >
            {element[key]}
          </p>
          <div className={`Ico_project_box Ico_project_box${theme}`}>
            <AiFillApi className={`Ico_project Ico_project_${theme}`} />
          </div>
          <span
            ref={ref}
            className={`${key2}Item ${key2}Item_${theme} ${key2}Item_${theme}_${preview}`}
          >
            {element.comit}
          </span>
        </a>
      </motion.div>
    );
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2 }}
      key="projects"
      id="projects"
      ref={ref}
      className={`main_item main_item_${preview} main_about_${theme} projects projects_${theme} ${theme}`}
    >
      {projects.map((element, pos) =>
        Object.keys(element).map((key) => {
          const item = [];
          key === "project" && item.push(Element(element, key, pos));
          key === "title" &&
            item.push(
              <motion.h3
                custom={{ pos: 1, multiplier: 0.1, move: "y" }}
                variants={FMotion}
                key={key}
                className={`${key}Items ${key}Items_${theme} ${key}Items_${theme}_${preview}`}
              >
                {element[key]}
              </motion.h3>
            );
          return item;
        })
      )}
    </motion.div>
  );
};
export default Projects;
