import ThemeContext from "../../ThemeContext"
import { ConstantThemse } from "./Constant";

export const ThemeEditor = ({ setTheme }) => {
  // const ThemDef = Object.keys(ConstantThemse)[0];
  // const ThemeEd = localStorage.getItem("Themes");
  // if (!ThemeEd) localStorage.setItem("Themes", ThemDef);
  // setTheme(localStorage.getItem(ThemDef));
  const defou = ThemeContext.Provider.theme;

  const ThemeEditorClick = (e) => {
    const val = e.target.value;
    localStorage.setItem("Themes", val);
    ThemeContext.Provider.theme = val;
    setTheme(val);
    console.log(ThemeContext);
   
    // ThemeDefault
  };
//  console.log(ThemeContext);
  const arrOpt = [];
  Object.keys(ConstantThemse).map((opt) =>
    opt === defou ? arrOpt.unshift(opt) :
    arrOpt.push(opt)
  );

  return (
    <select onChange={ThemeEditorClick}>
      {arrOpt.map((opt) => (
        <option key={opt} value={opt}>
          {ConstantThemse[opt]}
        </option>
      ))}
    </select>
  );
};

export default ThemeEditor;
