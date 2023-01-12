import { useInView } from "react-intersection-observer";
import View from "./View";

export const Experience = ({ theme, experience, preview }) => {
  const { ref, inView } = useInView(false);
  View({ experience: inView });
  return (
    <div
      key="experience"
      id="experience"
      className={`main_item main_item_${preview} main_about_${theme} experience experience_${theme} ${theme}`}
    >
      <ul
        id={`experience`}
        key={"experience"}
        ref={ref}
        className={`ul_experience experience experience_${theme}`}
      >
        {experience.map((element) =>
          Object.keys(element).map((key) => (
            <li
              key={`${element[key]}experienceLi`}
              id={`${element[key]}experienceLi`}
              className={`experienceElItems experienceEl_${theme}`}
            >
              <div
                id={`Item_${key}`}
                key={`Item_${key}`}
                className={`${key}Items ${key}Items_${key} ${key}Items_${theme}`}
              >
                {element[key]}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
export default Experience;
