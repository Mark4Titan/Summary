import { ConstantThemse } from "./Constant";

export const ThemeEditor = ({ setTheme }) => {
  const ThemDef = Object.keys(ConstantThemse)[0];
  const ThemeEd = localStorage.getItem("Themes");
  if (!ThemeEd) localStorage.setItem("Themes", ThemDef);
  setTheme(localStorage.getItem("Themes"));

  const ThemeEditorClick = (e) => {
    const val = e.target.value;
    localStorage.setItem("Themes", val);
    setTheme(localStorage.getItem(val));
  };

  const arrOpt = [];
  Object.keys(ConstantThemse).map((opt) =>
    opt === ThemeEd ? arrOpt.unshift(opt) : arrOpt.push(opt)
  );

  return (
    <select onChange={ThemeEditorClick}>
      {arrOpt.map((opt) => (
        <option id={opt} key={opt} value={opt}>
          {ConstantThemse[opt]}
        </option>
      ))}
    </select>
  );
};

export default ThemeEditor;
