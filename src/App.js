// import logo from "./logo.svg";
import Header from "./components/Header/Header";
import "./App.css";
import { getTheme } from "./redux/services/Theme";
import { useSelector } from "react-redux";
import  Sidebar  from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  const { theme } = useSelector(getTheme);

  return (
    <div className="App" id={theme}>
      <Header />
      <Sidebar />
      <Main />     
    </div>
  );
}

export default App;
