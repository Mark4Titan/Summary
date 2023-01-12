import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import element from "../Main/Elements/Element";
import Converter from "../Converter/Converter";

const Burger = ({ preview, theme }) => {
  const [value, setValue] = useState(false);
  const { keys } = Converter();

  useEffect(() => {
    preview === "Desktop" && setValue(false);
  }, [preview]);

    const [state, setState] = useState({ about: true });    
    setInterval(() => {
      const el = {};
      Object.keys(element).filter(
        (key) => element[key] === true && (el[key] = element[key])
      );
      const [k] = Object.keys(state);
      const [y] = Object.keys(el);
      if (k !== y) {
        setState(el);
      }
    }, 10);

  return (
    <>
      <div
        key="burger"
        id="burger"
        className={`burger burger_${theme} burger_${preview}`}
        onClick={() => setValue(!value)}
      >
        {!value ? GiHamburgerMenu() : GrClose()}
      </div>
      {value && (
        <>
          <div
            key="burgerMenu"
            id="burgerMenu"
            className={`burgerMenu burgerMenu_${theme} burgerMenu_${preview}`}
          >
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
                        state[key] === true ? "activ" : `${key}_li`
                      } aHref aHref_${key} aHref_${theme} ${theme}`}
                    >
                      {keys[key]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Burger;
