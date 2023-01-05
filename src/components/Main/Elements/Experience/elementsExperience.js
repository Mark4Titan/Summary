import "./experience.css";

export const Experience = ({ theme, experience }) => {
  return (
    <div
      key="experience"
      id="experience"
      className={`experience experience_${theme} ${theme}`}
    >
      {experience.map((element) =>
        Object.keys(element).map((key) => (
          <div
            id={`${key}Item_${key} ${key}`}
            key={key}
            className={`${key}Items ${key}Items_${key} ${key}Items_${theme}`}
          >
            {element[key]}
          </div>
        ))
      )}
    </div>
  );
};
export default Experience;
