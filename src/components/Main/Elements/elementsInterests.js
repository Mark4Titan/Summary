
export const Interests = ({ theme, interests, preview }) => {
  return (
    <div
      key="interests"
      id="interests"
      className={`main_item main_item_${preview} main_about_${theme} interests interests_${theme} ${theme}`}
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
