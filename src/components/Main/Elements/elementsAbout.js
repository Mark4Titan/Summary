import { IconContext } from "react-icons";
import {
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaFacebookSquare,
  FaYoutube,
  FaTelegramPlane,
  FaViber,
  FaInstagram,
} from "react-icons/fa";
import { SiSignal } from "react-icons/si";

import { useInView } from "react-intersection-observer";
import View from "./View";

export const About = ({ theme, about, preview }) => {
  const { ref, inView } = useInView(true);
  View({about:inView});

  const iconsSoCial = {
    linkedinIn: FaLinkedinIn,
    github: FaGithub,
    twitter: FaTwitter,
    facebook: FaFacebookSquare,
    youtube: FaYoutube,
    telegram: FaTelegramPlane,
    viber: FaViber,
    signal: SiSignal,
    instagram: FaInstagram,
  };
  // IconsSoCial[key]()
  //  console.log(FaGithub());

  return (
    <IconContext.Provider value={{ className: "about_react_icons" }}>
      <div
        key="about"
        id="about"
        className={`main_item main_item_${preview} about main_about_${theme} about_${theme} ${theme}`}
      >
        <div
          key="aboutEl"
          id="aboutEl"
          ref={ref}
          className={`aboutEl aboutEl_${theme} ${theme}`}
        >
          {about.map((element) =>
            Object.keys(element).map((key) => {
              const el = [];
              const elsocial = [];
              key === "fullName" &&
                Object.keys(element[key]).map((keys) =>
                  el.push(
                    <div
                      id={keys}
                      key={keys}
                      className={`${keys}Items about ${keys}Items_${theme}`}
                    >
                      {element[key][keys]}
                    </div>
                  )
                );
              key === "social" &&
                elsocial.push(
                  Object.keys(element[key]).map((keys) => (
                    <a
                      id={keys}
                      key={keys}
                      href={element[key][keys]}
                      rel="external"
                      target={`_blank`}
                      className={`${keys}Items icoBt icoBt_${theme} ${keys}Items_${theme}`}
                    >
                      {iconsSoCial[keys]()}
                      {/* {console.log(element[key][keys])} */}
                    </a>
                  ))
                );
              el.push(
                <div
                  id="elsocial"
                  key="elsocial"
                  className={`elsocial elsocial_${theme}`}
                >
                  {elsocial}
                </div>
              );
              key !== "title" &&
                key !== "avatar" &&
                key !== "fullName" &&
                key !== "social" &&
                el.push(
                  <div
                    id={`${key}`}
                    key={key}
                    className={`${key}Items about ${key}Items_${theme}`}
                  >
                    {element[key]}
                  </div>
                );
              return el;
            })
          )}
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default About;
