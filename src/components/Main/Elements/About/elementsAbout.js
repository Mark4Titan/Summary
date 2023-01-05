import "./about.css";

export const About = ({ theme, about }) => {
  return (
    <div key="about" id="about" className={`about about_${theme} ${theme}`}>
      {about.map((element) =>
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
export default About;
