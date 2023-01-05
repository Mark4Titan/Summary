import "./awards.css";

export const Awards = ({ theme, awards }) => {
  return (
    <div key="awards" id="awards" className={`awards awards_${theme} ${theme}`}>
      {awards.map((element) =>
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
export default Awards;
