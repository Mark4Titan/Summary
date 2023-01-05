import { useSelector } from "react-redux";
import { getTheme } from "../../redux/services/ThemeSlice";
import Converter from "../Converter/Converter";
import "./Sidebar.css";

const Sidebar = () => {
  const { theme } = useSelector(getTheme);

  const { avatar, keys } = Converter();

  return (
    <div key="sidebar" className={`sidebar sidebar_${theme}`}>
      <span className={`spanImg spanImg_${theme}`}>
        <img
          className={`avatar avatar_${theme}`}
          src={avatar.avatar}
          alt="avatar"
        ></img>
      </span>
      <div className={`listSideBar listSideBar_${theme}`}>
        <ul className={`ulSideBar ulSideBar_${theme}`}>
          {Object.keys(keys).map((key) => (
            <li
              id={`liItem liItem_${key} liItem_${theme}`}
              key={key}
              className={`sidebarItems sidebarItems_${key} sidebarItems_${theme}`}
            >
              <a
                id={`a_${key}`}
                key={key}
                href={`#${key}`}
                className={`aHref aHref_${key} aHref_${theme} ${theme}`}
              >
                {keys[key]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
