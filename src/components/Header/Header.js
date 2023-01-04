import { useSelector } from "react-redux";
import { getTheme } from "../../redux/services/Theme";
import "./Header.css";
import { ThemeEditor } from "../Theme/Theme";
const header = {
  left: ["c"],
  center: ["a", "b", "c"],
  right: ["a", "b", "c"],
};

export const Header = () => {
  const { theme } = useSelector(getTheme);

  return (
    <div key="headers" id="headers" className={`header header_${theme}`}>
      <div className="left">
        <ThemeEditor />
        {header.left.map((key) => (
          <button id={key} key={key}>
            {key}
          </button>
        ))}
      </div>
      <div className="center">
        {header.center.map((key) => (
          <button id={key} key={key}>
            {key}
          </button>
        ))}
      </div>
      <div className="right">
        {header.right.map((key) => (
          <button id={key} key={key}>
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Header;
