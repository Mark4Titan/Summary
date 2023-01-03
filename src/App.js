import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "./App.css";
import { createContext, useState } from "react";
import { ConstantThemse } from "./components/Theme/Constant";

export const ThemeContext = createContext(null);

function App() {
  const ThemDef = Object.keys(ConstantThemse)[0];
  const ThemeDefault = localStorage.getItem("Themes");
  if (!ThemeDefault) localStorage.setItem("Themes", ThemDef);

  const [theme, setTheme] = useState(
    !ThemeDefault ? localStorage.getItem("Themes") : ThemeDefault
  );
  

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className="App" id={theme}>
        <Header theme={theme} setTheme={setTheme} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
