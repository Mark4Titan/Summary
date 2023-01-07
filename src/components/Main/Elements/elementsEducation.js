
export const Education = ({ theme, education }) => {
  return (
    <div
      key="education"
      id="education"
      className={`education education_${theme} ${theme}`}
    >
      {education.map((element) =>
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
export default Education;
