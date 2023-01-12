import { useInView } from "react-intersection-observer";
import View from "./View";

export const Awards = ({ theme, awards, preview }) => {
  const { ref, inView } = useInView(false);
  View({ awards: inView });

  return (
    <div
      key="awards"
      id="awards"
      ref={ref}
      className={`main_item main_item_${preview} main_about_${theme} awards awards_${theme} ${theme}`}
    >
      {awards.map((element) =>
        Object.keys(element).map((key) => (
          <div
            id={key}
            key={key}
            className={`element_${element[key]} ${key}Items ${key}Items_${key} ${key}Items_${theme}`}
          >
            {element[key]}
          </div>
        ))
      )}
    </div>
  );
};
export default Awards;
