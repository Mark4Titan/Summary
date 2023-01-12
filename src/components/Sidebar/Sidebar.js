import { useSelector } from "react-redux";
import { getTheme } from "../../redux/services/ThemeSlice";
import Converter from "../Converter/Converter";
import Menu from "./Menu";

const Sidebar = ({ preview }) => {
  const { avatar } = Converter();
  const { theme } = useSelector(getTheme);

  return (
    <div
      key="sidebar"
      className={`sidebar sidebar_${theme} sidebar_${preview}`}
    >
      <div
        key="sidContent"
        className={`sidContent sidContent_${theme} sidContent_${preview}`}
      >
        <span className={`spanImg spanImg_${theme}`}>
          <img
            className={`avatar avatar_${theme}`}
            src={avatar.avatar}
            alt="avatar"
          ></img>
        </span>
        <Menu />
      </div>
    </div>
  );
};

export default Sidebar;
