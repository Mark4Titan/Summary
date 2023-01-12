import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import Menu from "../Sidebar/Menu";

const Burger = ({ preview, theme }) => {
  const [value, setValue] = useState(false);

  useEffect(() => {
    preview === "Desktop" && setValue(false);
  }, [preview]);

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
            <Menu />
          </div>
        </>
      )}
    </>
  );
};
export default Burger;
