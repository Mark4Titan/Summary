import { useSelector } from "react-redux";
import { getTheme } from "../../redux/services/ThemeSlice";
import Converter from "../Converter/Converter";
import About from "./Elements/elementsAbout";
import Experience from "./Elements/elementsExperience";
import Education from "./Elements/elementsEducation";
import Skills from "./Elements/elementsSkills";
import Interests from "./Elements/elementsInterests";
import Awards from "./Elements/elementsAwards";
import Projects from "../Projects/Projects";

const Main = ({ preview }) => {
  const { theme } = useSelector(getTheme);
  const { Summary } = Converter();
  

  return (
    <>
      <div
        key="main"
        id="main"
        className={`main main_${theme} main_${preview}`}
      >
        {/*  */}
        <About about={Summary.about} theme={theme} preview={preview} />
        <Experience
          experience={Summary.experience}
          theme={theme}
          preview={preview}
        />
        <Education
          education={Summary.education}
          theme={theme}
          preview={preview}
        />
        <Skills skills={Summary.skills} theme={theme} preview={preview} />
        <Interests
          interests={Summary.interests}
          theme={theme}
          preview={preview}
        />
        <Projects projects={Summary.projects} theme={theme} preview={preview} />
        <Awards awards={Summary.awards} theme={theme} preview={preview} />
      </div>
    </>
  );
};

export default Main;
