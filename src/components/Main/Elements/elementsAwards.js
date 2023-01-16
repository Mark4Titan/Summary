import { useInView } from "react-intersection-observer";
import View from "./View";
import { GiTrophyCup } from "react-icons/gi";

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
        Object.keys(element).map((key) => {
          const elementLi = [];
          const elementDiv = [];

          key === "title" &&
            elementDiv.push(
              <h3
                id={`awards_${key}`}
                key={`awards_${key}`}
                className={`titleItems element_${key} titleItems_${theme} awards_titleItems_${theme} titleItems_${preview}`}
              >
                {element.expansion}
              </h3>
            );

          key === "content" &&
            element[key].map((keys, pos) =>
              elementLi.push(
                <li
                  id={`${key}_${pos}`}
                  key={`${key}_${pos}`}
                  className={`element_${key}  ${key}_${pos}_${theme} ${theme}`}
                >
                  <span className={theme}>{GiTrophyCup()}</span>
                  <p className={theme} key={`${key}_${pos}`}>
                    {keys}
                  </p>
                </li>
              )
            );
          return key === "content" ? (
            <ul
              id={key}
              key={key}
              className={`ul_element_${key} ${key}_${theme}`}
            >
              {elementLi}
            </ul>
          ) : (
            elementDiv
          );
        })
      )}
    </div>
  );
};
export default Awards;
