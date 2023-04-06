import { useInView } from "react-intersection-observer";
import View from "./View";


export const Education = ({ theme, education, preview }) => {
  const { ref, inView } = useInView(false);
  View({ education: inView });
  
  return (
    <div
      key="education"
      id="education"
      ref={ref}
      className={`main_item main_item_${preview} main_about_${theme} education education_${theme} ${theme}`}
    >
      {education.map((element) =>
        Object.keys(element).map((key) =>
          key === "title" ? (
            <h3
              id={`${key}Item_${key} ${key}`}
              key={key}
              className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${key}Items_${theme}_${preview}`}
            >
              {element[key]}
            </h3>
          ) : (
            <div
              id={`${key}Item_${key} ${key}`}
              key={key}
              ref={ref}
              className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${theme}`}
            >
              {element[key]}
            </div>
          )
        )
      )}
    </div>
  );
};
export default Education;
