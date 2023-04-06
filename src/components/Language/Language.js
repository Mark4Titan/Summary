import { useDispatch, useSelector } from "react-redux";
import Converter from "../Converter/Converter";
import {
  setLanguageActions,
  getLanguage,
} from "../../redux/services/languageSlice";
import { getTheme } from "../../redux/services/ThemeSlice";

export const Language = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(getTheme);

  const { language } = useSelector(getLanguage);
  const { lenDefaultLeng } = Converter();

  const LangOptionsClick = (e) => {
    dispatch(setLanguageActions(e.target.value));
  };

  const arrOpt = [];
  Object.keys(lenDefaultLeng).map((opt) =>
    opt === language ? arrOpt.unshift(opt) : arrOpt.push(opt)
  );

  return (
    <select
      className={`select select_${theme} selectlang`}
      onChange={LangOptionsClick}
    >
      {arrOpt.map((opt) => (
        <option key={opt} value={opt}>
          {lenDefaultLeng[opt]}
        </option>
      ))}
    </select>
  );
};

export default Language;
