

export const About = ({ theme, about }) => {
  return (
    <div
      key="about"
      id="about"
      className={`main_item about about_${theme} ${theme}`}
    >
      <div
        key="aboutEl"
        id="aboutEl"
        className={`aboutEl aboutEl_${theme} ${theme}`}
      >
        {about.map((element) =>
          Object.keys(element).map(
            (key) =>
              element[key] !== "about" && (
                <div
                  id={`${key}`}
                  key={key}
                  className={`${key}Items about ${key}Items_${key} ${key}Items_${theme}`}
                >
                  {element[key]}
                </div>
              )
          )
        )}
      </div>
    </div>
  );
};
export default About;
