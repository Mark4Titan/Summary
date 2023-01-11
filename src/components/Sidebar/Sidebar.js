import { useSelector } from "react-redux";
import { getTheme } from "../../redux/services/ThemeSlice";
import Converter from "../Converter/Converter";
import {
  // useState,
  useRef
} from "react";


const Sidebar = ({ preview }) => {
  const { theme } = useSelector(getTheme);
  const { avatar, keys } = Converter();
  const itemRef = useRef();

  // const [value, setValue] = useState(null);

  // console.log(isNavExpanded);
  const Activ = (e) => {
  // const item = e.target.text;
  // const allChildren = itemRef.current.children;
  // value &&
  //   Object.keys(allChildren).filter(
  //     (el) => item === `a_${allChildren[el].id}` && setValue(el)
  //   );
  // const getItem = allChildren[`a_${item}`];
  // getItem.className = `${getItem.className} activ`;

  // e.target.classList.push("Activ");
  // e.target.id.push("activ");
  // console.log(itemRef.current.ul);
  // console.log(getItem);
  // console.log(e.target.classList);
  };
  // console.log(value);

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
        <div className={`listSideBar listSideBar_${theme}`}>
          <ul ref={itemRef} className={`ulSideBar ulSideBar_${theme}`}>
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
                  onClick={Activ}
                  className={`aHref aHref_${key} aHref_${theme} ${theme}`}
                >
                  {keys[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
