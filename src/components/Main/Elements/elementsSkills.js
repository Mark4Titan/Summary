// import "./skills.css";

export const Skills = ({ theme, skills }) => {
  return (
    <div
      key="skills"
      id="skills"
      className={`main_item skills skills_${theme} ${theme}`}
    >
      {skills.map((element) =>
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
export default Skills;
