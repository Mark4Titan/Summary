import { useSelector } from "react-redux";
import useMedia from "use-media";
import Converter from "../Converter/Converter";
import React, { useState } from "react";
import { getPreview } from "../../redux/services/PreviewSlice";
import { getBurger } from "../../redux/services/BurgerSlice";
import element from "../Main/Elements/Element";

const Menu = ({ theme }) => {
  const isWide = useMedia({ maxWidth: 1280 });
  const [state, setState] = useState({ about: true });
  const { keys } = Converter();
  const { preview } = useSelector(getPreview);
  const { burger } = useSelector(getBurger);

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
  }, 600);

  const trogle = () => {
    if (!isWide) {
      if (!burger && preview !== "Desktop") return "close";
      if (burger && preview !== "Desktop") return "activ";
      if (preview === "Desktop") return "redy";
    } else { 
      if (burger && preview === "Desktop") return "activ";
      if (!burger && preview === "Desktop") return "close";
      if (preview === "Desktop") return "redy";
    }
    console.log(
      "preview =",
      preview,
      "| burger =",
      burger,
      "| isWide = ",
      isWide
    );
    
  };

  return (
    <div
      className={`listSideBar listSideBar_${trogle()} listSideBar_${theme} listSideBar_${trogle()}_${theme}`}
    >
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
                state[key] === true ? `activ activ_${theme}` : key
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
