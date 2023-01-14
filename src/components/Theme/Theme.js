import { useDispatch, useSelector } from "react-redux";
import { getTheme, setThemeActions } from "../../redux/services/ThemeSlice";
import { ConstantThemse } from "./Constant";

export const ThemeEditor = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(getTheme);


  const ThemeEditorClick = (e) => {
    const { value } = e.target;
    dispatch(setThemeActions(value));
  };
  
  const arrOpt = [];
  Object.keys(ConstantThemse).map((opt) =>
    opt === theme ? arrOpt.unshift(opt) : arrOpt.push(opt)
  );

  return (
    <select className={`select select_${theme}`} onChange={ThemeEditorClick}>
      {arrOpt.map((opt) => (
        <option key={opt} value={opt}>
          {ConstantThemse[opt]}
        </option>
      ))}
    </select>
  );
};

export default ThemeEditor;
