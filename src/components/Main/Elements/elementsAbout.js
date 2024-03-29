import { motion } from "framer-motion";
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
import { useSelector } from "react-redux";
import { getLanguage } from "../../../redux/services/languageSlice";

import { useInView } from "react-intersection-observer";
import { FMotion, visibleMotion } from "./PatternFMotion/PatternFMotion";
import { useEffect } from "react";

export const About = ({ theme, about, preview, activ, autoActive }) => {
  const { language } = useSelector(getLanguage);
  const { ref, inView } = useInView(true);
  // View({ about: inView });

  useEffect(() => {
    if (inView !== activ.about) {
      autoActive(inView, "about");
    }
  }, [activ.about, autoActive, inView]);

  const iconsSoCial = {
    linkedIn: FaLinkedinIn,
    github: FaGithub,
    twitter: FaTwitter,
    facebook: FaFacebookSquare,
    youtube: FaYoutube,
    telegram: FaTelegramPlane,
    viber: FaViber,
    signal: SiSignal,
    instagram: FaInstagram,
  };

  return (
    <IconContext.Provider value={{ className: "about_react_icons" }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        key="about"
        id="about"
        ref={ref}
        className={`main_item main_item_${preview} about main_about_${theme} about_${theme} ${theme}`}
      >
        <div key="aboutEl" className={`aboutEl aboutEl_${theme} ${theme}`}>
          {about.map((element) =>
            Object.keys(element).map((key) => {
              const el = [];
              const elsocial = [];
              const fullname = [];
              key === "fullName" &&
                Object.keys(element[key]).map((keys) =>
                  fullname.push(
                    <motion.h2
                      custom={{ pos: 1, multiplier: 0.2, move: "x" }}
                      variants={FMotion}
                      key={keys}
                      data-content={element[key][keys]}
                      className={`${keys}Items about ${keys}Items_${theme} ${keys}Items_${theme}_${language}`}
                    >
                      {element[key][keys]}
                    </motion.h2>
                  )
                );
              el.push(
                <div
                  key={`full_${key}`}
                  className={`full_${key}Items full_${key}Items_${theme} full_${key}Items_${theme}_${preview}`}
                >
                  {fullname}
                </div>
              );
              key === "social" &&
                elsocial.push(
                  Object.keys(element[key]).map((keys, pos) => (
                    <motion.li
                      custom={{ pos: pos, multiplier: 0.1, move: "y" }}
                      variants={FMotion}
                      key={keys}
                      id={keys}
                      className={`lis_${keys}_Items lis lis_${theme} ${keys}_lis_${theme}`}
                    >
                      <a
                        key={`a_${keys}`}
                        href={element[key][keys]}
                        target={`_blank`}
                        aria-label={`link ${keys}`}
                        className={`${keys}Items icoBt icoBt_${theme} ${keys}Items_${theme}`}
                      >
                        {iconsSoCial[keys]()}
                      </a>
                    </motion.li>
                  ))
                );
              el.push(
                <div
                  key="elsocial"
                  className={`elsocial div_elsocial_${theme} elsocial_${theme}`}
                >
                  <ul
                    key="ul_social"
                    className={`ul_social ul_social_${theme} ul_social_${theme}`}
                  >
                    {elsocial}
                  </ul>
                </div>
              );

              key === "mail" &&
                el.push(
                  <motion.a
                    custom={{ pos: 3, multiplier: 0.2, move: "x" }}
                    variants={FMotion}
                    key={key}
                    href={`mailto:${element[key]}`}
                    aria-label={`link ${key}`}
                    className={`${key}Items about ${key}Items_${theme}`}
                  >
                    {element[key]}
                  </motion.a>
                );
              key === "phone" &&
                el.push(
                  <motion.a
                    custom={{ pos: 2, multiplier: 0.2, move: "x" }}
                    variants={FMotion}
                    key={key}
                    href={`tel:${element[key]}`}
                    aria-label={`link ${key}`}
                    className={`${key}Items about ${key}Items_${theme}`}
                  >
                    {element[key]}
                  </motion.a>
                );

              key !== "title" &&
                key !== "avatar" &&
                key !== "fullName" &&
                key !== "social" &&
                key !== "mail" &&
                key !== "phone" &&
                el.push(
                  <motion.div
                    custom={{ pos: 1, multiplier: 0.3 }}
                    variants={visibleMotion}
                    key={key}
                    className={`${key}Items about ${key}Items_${theme} ${theme}`}
                  >
                    {element[key]}
                  </motion.div>
                );
              return el;
            })
          )}
        </div>
      </motion.div>
    </IconContext.Provider>
  );
};
export default About;
