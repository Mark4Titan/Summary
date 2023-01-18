import { useInView } from "react-intersection-observer";
import View from "./View";

export const Experience = ({ theme, experience, preview }) => {
  const { ref, inView } = useInView(false);
  View({ experience: inView });
  return (
    <div
      key="experience"
      id="experience"
      ref={ref}
      className={`main_item main_item_${preview} main_about_${theme} experience experience_${theme} ${theme}`}
    >
      {experience.map((element) =>
        Object.keys(element).map(
          (key) =>
            key === "title" && (
              <h3
                id={`Item_${key}`}
                key={`Item_${key}`}
                className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${key}Items_${theme}_${preview}`}
              >
                {element[key]}
              </h3>
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
            (key) =>
              key !== "title" && (
                <li
                  key={`${element[key]}experienceLi`}
                  id={`${element[key]}experienceLi`}
                  className={`experienceElItems experienceEl_${theme}`}
                >
                  <div
                    id={`Item_${key}`}
                    key={`Item_${key}`}
                    className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${theme}`}
                  >
                    {element[key]}
                  </div>
                </li>
              )
          )
        )}
      </ul>
    </div>
  );
};
export default Experience;
