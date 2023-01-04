import * as css from "./Header.css";
import { ThemeEditor } from "../Theme/Theme";
const header = {
  left: ["a", "b", "c"],
  center: ["a", "b", "c"],
  right: ["a", "b", "c"],
};

export const Header = ({ theme, setTheme }) => {
  css.default === Object && console.log(css);

  return (
    <div key="headers" id="headers" className={`header_${theme}`}>
      <div className="left">
        {/* <button onClick={() => (setTheme("light"))}>key</button> */}
        <ThemeEditor setTheme={setTheme} />
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
