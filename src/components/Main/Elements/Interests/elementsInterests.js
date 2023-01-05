import "./interests.css";

export const Interests = ({ theme, interests }) => {
  return (
    <div
      key="interests"
      id="interests"
      className={`interests interests_${theme} ${theme}`}
    >
      {interests.map((element) =>
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
export default Interests;
