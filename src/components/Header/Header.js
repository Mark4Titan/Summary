import { useSelector } from "react-redux";
import { getTheme } from "../../redux/services/ThemeSlice";
import { IconContext } from "react-icons";
import Preview from "./Preview/Preview";
import Specifics from "./Specifics/Specifics";
import HeadersLeft from "./Specifics/HeadersLeft";
import "./Header.css";

export const Header = ({ preview }) => {
  const { theme } = useSelector(getTheme);

  return (
    <IconContext.Provider value={{ className: "react_icons" }}>
      <div
        key="headers"
        id="headers"
        className={`header header_${theme} header_${preview}`}
      >
        <HeadersLeft />
        <Preview />
        <Specifics />
      </div>
    </IconContext.Provider>
  );
};
export default Header;
