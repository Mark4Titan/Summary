import { useSelector } from "react-redux";
import { getTheme } from "../../redux/services/Theme";
import Resume from "../../Resume/Resume";
import "./Sidebar.css";

const Sidebar = () => {
    const { theme } = useSelector(getTheme);

  return (
    <div className={`sidebar sidebar_${theme}`}>
      <span className={`spanImg spanImg_${theme}`}>
        <img
          className={`avatar avatar_${theme}`}
          src={Resume.about.avatar}
          alt="avatar"
        ></img>
      </span>
      <div className={`listSideBar listSideBar_${theme}`}>
        <ul className={`ulSideBar ulSideBar_${theme}`}>
          {Object.keys(Resume).map((key) => (
            <li
              id={`liItem liItem_${key} liItem_${theme}`}
              key={key}
              className={`sidebarItems sidebarItems_${key} sidebarItems_${theme}`}
            >
              <a
                id={`a_${key}`}
                key={key}
                href={`#${key}`}
                className={`aHref aHref_${key} aHref_${theme}`}
              >
                {key}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
