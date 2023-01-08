export const Experience = ({ theme, experience }) => {
  return (
    <div
      key="experience"
      id="experience"
      className={`main_item experience experience_${theme} ${theme}`}
    >
      <ul
        id={`experience`}
        key={"experience"}
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
