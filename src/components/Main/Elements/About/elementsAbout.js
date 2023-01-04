import "./about.css";

export const About = ({ theme, about }) => {
  return (
    <div key="about" id="about" className="about">
      {Object.keys(about).map(
        (key) =>
          key !== "social" && (
            <div
              id={`${key}Item_${key} ${key}`}
              key={key}
              className={`${key}Items ${key}Items_${key} ${key}Items_${theme}`}
            >
              {about[key]}
            </div>
          )
      )}
    </div>
  );
};
export default About;
