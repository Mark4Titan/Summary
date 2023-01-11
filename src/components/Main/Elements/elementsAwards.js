

export const Awards = ({ theme, awards }) => {
  return (
    <div
      key="awards"
      id="awards"
      className={`main_item main_about_${theme} awards awards_${theme} ${theme}`}
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
