import { useSelector } from "react-redux";
import { getTheme } from "../../redux/services/ThemeSlice";
import Converter from "../Converter/Converter";
import element from "../Main/Elements/Element";
import React, { useState } from "react";

const Menu = () => {
  const [state, setState] = useState({ about: true });
  const { keys } = Converter();
  const { theme } = useSelector(getTheme);
  setInterval(() => {
    const el = {};
    Object.keys(element).filter(
      (key) => element[key] === true && (el[key] = element[key])
    );
    const [s] = Object.keys(state);
    const [e] = Object.keys(el);
    if (s !== e) {
      setState(el);
    }
  }, 10);

  // console.log(Object.keys(state));

  return (
    <div className={`listSideBar listSideBar_${theme}`}>
      <ul className={`ulSideBar ulSideBar_${theme}`}>
        {Object.keys(keys).map((key) => (
          <li
            id={`liItem_${key}`}
            key={key}
            className={`sidebarItems sidebarItems_${key} sidebarItems_${theme}`}
          >
            <a
              id={`a_${key}`}
              key={key}
              href={`#${key}`}
              className={`${
                state[key] === true ? "activ" : key
              } aHref aHref_${key} aHref_${theme} ${theme}`}
            >
              {keys[key]}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Menu;
