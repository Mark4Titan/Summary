import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useEffect } from "react";
import { getBurger, setBurgerActions } from "../../redux/services/BurgerSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPreview } from "../../redux/services/PreviewSlice";

const Burger = ({ theme }) => {
  const dispatch = useDispatch();
  const { preview } = useSelector(getPreview);

  const { burger } = useSelector(getBurger);
  useEffect(() => {
    preview === "Desktop" && dispatch(setBurgerActions(false));
  }, [dispatch, preview]);
  return (
    <>
      <div
        key="burger"
        id="burger"
        className={`burger burger_${theme} burger_${burger}_${theme} burger_${preview}`}
        onClick={() => dispatch(setBurgerActions(!burger))}
      >
        {burger ? GrClose() : GiHamburgerMenu()}
      </div>

      <div
        key="burgerMenu"
        id="burgerMenu"
        className={`burgerMenu_${theme} ${
          burger
            ? `burgerMenu_visual burgerMenu_visual_${theme}`
            : `burgerMenu_close burgerMenu_close_${theme}`
        } burgerMenu_${preview}`}
      />
    </>
  );
};
export default Burger;
