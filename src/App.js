/* eslint-disable react-hooks/exhaustive-deps */
import ThemeContext from "./ThemeContext";
import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(ThemeContext.Provider.theme);

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
