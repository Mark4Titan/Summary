export const Experience = ({ theme, experience }) => {
  return (
    <div
      key="experience"
      id="experience"
      className={`main_item experience experience_${theme} ${theme}`}
    >
      <ul
        id={`experience`}
        key={experience}
        className={`experience experience_${theme}`}
      >
        {experience.map((element) => (
          <li
            id={`experienceEl`}
            className={`experienceElItems experienceEl_${theme}`}
          >
            {Object.keys(element).map((key) => (
              <div
                id={`Item_${key}`}
                key={key}
                className={`${key}Items ${key}Items_${key} ${key}Items_${theme}`}
              >
                {element[key]}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Experience;
