
import { useInView } from "react-intersection-observer";
import View from "./View";

export const Interests = ({ theme, interests, preview }) => {
  const { ref, inView } = useInView(false);
  View({ interests: inView });
  return (
    <div
      key="interests"
      id="interests"
      ref={ref}
      className={`main_item main_item_${preview} main_about_${theme} interests interests_${theme} ${theme}`}
    >
      {interests.map((element) =>
        Object.keys(element).map((key) =>
          key === "title" ? (
            <h3
              id={key}
              key={key}
              className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${key}Items_${theme}_${preview}`}
            >
              {element[key]}
            </h3>
          ) : (
            <p
              id={key}
              key={key}
              ref={ref}
              className={`${key}Items ${key}Items_${key} ${key}Items_${theme} ${theme}`}
            >
              {element[key]}
            </p>
          )
        )
      )}
    </div>
  );
};
export default Interests;
