import { createContext } from "react";
import { ConstantThemse } from "./components/Theme/Constant";

const ThemeContext = createContext(null);
const ThemDef = Object.keys(ConstantThemse)[0];
if (!localStorage.getItem("Themes")) localStorage.setItem("Themes", ThemDef);
const ThemeEd = localStorage.getItem("Themes");
// if (!ThemeEd) localStorage.setItem("Themes", ThemDef);


ThemeContext.Provider.theme = ThemeEd;
export default ThemeContext;