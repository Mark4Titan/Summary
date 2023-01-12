import { IconContext } from "react-icons";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiSass,
  SiCsswizardry,
  SiRedux,
} from "react-icons/si";
import { FaLess, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoNpm } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import View from "./View";


export const Skills = ({ theme, skills, preview }) => {
  
  const { ref, inView } = useInView(false);
  View({ skills: inView });

  const iconsSkills = {
    html5: SiHtml5,
    css3: SiCss3,
    javaScript: SiJavascript,
    sass: SiSass,
    css: SiCsswizardry,
    less: FaLess,
    npm: IoLogoNpm,
    reactI: FaReact,
    redux: SiRedux,
    nodejs: FaNodeJs,
  };
  // IconsSoCial[key]()
  //  console.log(FaGithub());
  return (
    <IconContext.Provider value={{ className: "skills_react_icons" }}>
      <div
        key="skills"
        id="skills"
        
        className={`main_item main_item_${preview} main_about_${theme} skills skills_${theme} ${theme}`}
      >
        {skills.map((element) =>
          Object.keys(element).map((key) => {
            const elem = [];
            const liItems = [];
            key === "tools" &&
              element[key].map((keys) =>
                liItems.push(
                  <li
                    id={keys}
                    key={keys}
                    className={`${keys}Ico icoSkills ${keys}Ico_${theme}`}
                  >
                    {iconsSkills[keys]()}
                  </li>
                )
              );
            elem.push(
              <ul
                id="ulSkills"
                key="ulSkills"
                className={`${key}Ul ulSkills ${key}Ul_${theme}`}
              >
                {liItems}
              </ul>
            );
            key !== "tools" &&
              elem.push(
                <div
                  id={key}
                  key={key}
                  ref={ref}
                  className={`${key}Items ${key}Items_${key} ${key}Items_${theme}`}
                >
                  {element[key]}
                </div>
              );
            return elem;
          })
        )}
      </div>
    </IconContext.Provider>
  );
};
export default Skills;
