import { useDispatch, useSelector } from "react-redux";
import { getTheme, setThemeActions } from "../../redux/services/Theme";
// import ThemeContext from "../../ThemeContext";
import { ConstantThemse } from "./Constant";

export const ThemeEditor = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(getTheme);

  const ThemeEditorClick = (e) => {
    const { value } = e.target;
    dispatch(setThemeActions(value));
  };
  //  console.log(ThemeContext);
  const arrOpt = [];
  Object.keys(ConstantThemse).map((opt) =>
    opt === theme ? arrOpt.unshift(opt) : arrOpt.push(opt)
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
