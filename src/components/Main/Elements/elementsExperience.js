
export const Experience = ({ theme, experience }) => {
  return (
    <div
      key="experience"
      id="experience"
      className={`main_item experience experience_${theme} ${theme}`}
    >
      {experience.map((element) => (
        <div
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
        </div>
      ))}
    </div>
  );
};
export default Experience;
