import { useSelector } from "react-redux";
import Resume from "../../Resume/Resume";
import { getTheme } from "../../redux/services/Theme";
import "./about.css";

const About = () => {
  const { theme } = useSelector(getTheme);

  return (
    <div className={`main main_${theme}`}>
      {/*  */}
      {Object.keys(Resume).map(
        (key) =>
          key === "about" &&
          Object.keys(Resume.about).map(
            (key) =>
              key !== "social" && (
                // console.log(Resume.about[key])
                <div
                  id={`abouttem_${key} ${key}`}
                  key={key}
                  className={`aboutItems aboutItems_${key} aboutItems_${theme} ${key}`}
                >
                  {Resume.about[key]}
                </div>
              )
          )
      )}
      {/*  */}
    </div>
  );
};
export default About;
