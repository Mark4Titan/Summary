import { IconContext } from "react-icons";
import Preview from "./Preview";
import Specifics from "./Specifics";
import { ThemeEditor } from "../Theme/Theme";
import Language from "../Language/Language";

export const Header = ({ preview, theme }) => {
  return (
    <IconContext.Provider value={{ className: "react_icons" }}>
      <div
        key="headers"
        id="headers"
        className={`header header_${theme} header_${preview}`}
      >
        <div
          key="headCon"
          id="headCon"
          className={`headCon headCon_${theme} headCon_${preview}`}
        >
          <Specifics elements={{ ThemeEditor }} />
          <Preview preview={preview} theme={theme} />
          <Specifics elements={{ Language }} />
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Header;
