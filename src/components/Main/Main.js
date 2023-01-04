import { useSelector } from "react-redux";
import Resume from "../../Resume/Resume";
import { getTheme } from "../../redux/services/Theme";
import About from "./Elements/About/elementsAbout";
import Experience from "./Elements/Experience/elementsExperience";
import Education from "./Elements/Education/elementsEducation";
import Skills from "./Elements/Skills/elementsSkills";
import Interests from "./Elements/Interests/elementsInterests";
import Awards from "./Elements/Awards/elementsAwards";
import "./Main.css";

const Main = () => {
  const { theme } = useSelector(getTheme);

  return (
    <div key="main" className={`main main_${theme}`}>
      {/*  */}
      <About about={Resume.about} theme={theme} />
      <Experience experience={Resume.experience} theme={theme} />
      <Education education={Resume.education} theme={theme} />
      <Skills skills={Resume.skills} theme={theme} />
      <Interests interests={Resume.interests} theme={theme} />
      <Awards awards={Resume.awards} theme={theme} />
    </div>
  );
};

export default Main;
