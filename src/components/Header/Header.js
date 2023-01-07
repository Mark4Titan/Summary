import { IconContext } from "react-icons";
import Preview from "./Preview";
import Specifics from "./Specifics";
import HeadersLeft from "./HeadersLeft";

export const Header = ({ preview }) => {

  
  return (
    <IconContext.Provider value={{ className: "react_icons" }}>
      <div
        key="headers"
        id="headers"
        className={`header header_${preview}`}
      >
        <div
          key="headCon"
          id="headCon"
          className={`headCon headCon_${preview}`}
        >
          <Preview />
          <HeadersLeft />
          <Specifics />
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Header;
