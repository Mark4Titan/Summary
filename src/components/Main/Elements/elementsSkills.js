import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiCsswizardry,
  SiRedux,
  SiTypescript,
  SiMongodb,
  SiExpressvpn,
  SiDocker,
  SiPostman,
  SiGithub,
  SiReact,
  SiStylelint,
  SiMaterialdesign,
  SiTrello,
  SiJirasoftware,
} from "react-icons/si";
import { FaLess, FaNode, FaNpm } from "react-icons/fa";
import { CiGrid31 } from "react-icons/ci";
import { FiFramer } from "react-icons/fi";
import { ImCheckmark } from "react-icons/im";
import { useInView } from "react-intersection-observer";
import View from "./View";
import { FMotion } from "./PatternFMotion/PatternFMotion";

const iconsSkills = {
  html5: SiHtml5,
  css3: SiCss3,
  javaScript: SiJavascript,
  sass: SiSass,
  css: SiCsswizardry,
  less: FaLess,
  npm: FaNpm,
  react: SiReact,
  redux: SiRedux,
  nodejs: FaNode,
  typeScript: SiTypescript,
  mongodb: SiMongodb,
  express: SiExpressvpn,
  docker: SiDocker,
  postman: SiPostman,
  gitHub: SiGithub,
  grid: CiGrid31,
  emotionUi: SiStylelint,
  muiMaterial: SiMaterialdesign,
  framerMotion: FiFramer,
  jira: SiJirasoftware,
  trello: SiTrello,
};

export const Skills = ({ theme, skills, preview }) => {
  const { ref, inView } = useInView(false);
  View({ skills: inView });

  const Element = (element, classN, vari) => {
    const liItems = [];
    element.map((keys, pos) => {
      vari === "ico" &&
        liItems.push(
          <motion.li
            custom={{ pos: pos, multiplier: 0.03, move: "y" }}
            variants={FMotion}
            key={keys}
            id={keys}
            className={`${classN.li} ${keys}_${classN.li}_${theme} ${classN.li}_${theme}`}
          >
            {iconsSkills[keys]()}
          </motion.li>
        );
      vari === "text" &&
        liItems.push(
          <motion.li
            custom={{ pos: pos, multiplier: 0.2, move: "y" }}
            variants={FMotion}
            key={`${classN.li}_${pos}`}
            className={`${classN.li} ${classN.li}_${pos}_${theme} ${theme}`}
          >
            {<span>{ImCheckmark()}</span>}
            {keys}
          </motion.li>
        );
      return [];
    });

    return liItems;
  };

  return (
    <IconContext.Provider value={{ className: "skills_react_icons" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        key="skills"
        id="skills"
        ref={ref}
        className={`main_item main_item_${preview} main_about_${theme} skills skills_${theme} ${theme}`}
      >
        {skills.map((element) =>
          Object.keys(element).map((key) => {
            const elem = [];

            key === "title" &&
              elem.push(
                <motion.h3
                  custom={{ pos: 1, multiplier: 0.1, move: "y" }}
                  variants={FMotion}
                  key={key}
                  className={`${key}Items titleItems_${theme} ${key}_Items_${theme}_${preview} ${key}_Items_${theme}`}
                >
                  {element[key]}
                </motion.h3>
              );

            key === "Title" &&
              elem.push(
                <h3 key={key} className={`Title_${key} ${key}_Title_${theme}`}>
                  {element[key]}
                </h3>
              );

            key === "tools" &&
              elem.push(
                <ul
                  key="ulSkills"
                  className={`${key}Ul ulSkills ${key}Ul_${theme}`}
                >
                  {Element(element[key], { li: "icoSkills" }, "ico")}
                </ul>
              );
            key === "workflow" &&
              elem.push(
                <h3
                  key={`title_${key}`}
                  className={`title_${key} ${key}_title_${theme}`}
                >
                  {key}
                </h3>,
                <ul
                  key={key}
                  className={`${key}Items ${key}Items_${key} ${key}Items_${theme}`}
                >
                  {Element(element[key], { li: "Items" }, "text")}
                </ul>
              );

            return elem;
          })
        )}
      </motion.div>
    </IconContext.Provider>
  );
};
export default Skills;
