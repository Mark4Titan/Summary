import { useSelector } from "react-redux";
import { getTheme } from "../../redux/services/ThemeSlice";
import Converter from "../Converter/Converter";
import About from "./Elements/elementsAbout";
import Experience from "./Elements/elementsExperience";
import Education from "./Elements/elementsEducation";
import Skills from "./Elements/elementsSkills";
import Interests from "./Elements/elementsInterests";
import Awards from "./Elements/elementsAwards";


const Main = ({ preview }) => {
  const { theme } = useSelector(getTheme);
  const { Summary } = Converter();

  return (
    <div key="main" className={`main main_${theme} main_${preview}`}>
      {/*  */}
      <About about={Summary.about} theme={theme} />
      <Experience experience={Summary.experience} theme={theme} />
      <Education education={Summary.education} theme={theme} />
      <Skills skills={Summary.skills} theme={theme} />
      <Interests interests={Summary.interests} theme={theme} />
      <Awards awards={Summary.awards} theme={theme} />
    </div>
  );
};

export default Main;
