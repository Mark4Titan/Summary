import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "./App.css";
import { getTheme } from "./redux/services/Theme";
import { useSelector } from "react-redux";


function App() {
  const { theme } = useSelector(getTheme);


  return (
      <div className="App" id={theme}>
        <Header theme={theme} />
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
  );
}

export default App;
