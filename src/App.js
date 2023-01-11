// import logo from "./logo.svg";
import Header from "./components/Header/Header";
import { getTheme } from "./redux/services/ThemeSlice";
import { useSelector } from "react-redux";
import { getPreview } from "./redux/services/PreviewSlice";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";

function App() {
  const { theme } = useSelector(getTheme);
  const { preview } = useSelector(getPreview);

  return (
    <div key="app" className="App" id={theme}>
      <Header preview={preview} />
      <div key="content" className={`app_${preview}`}>
        <Sidebar preview={preview} />
        <Main preview={preview} />
      </div>
    </div>
  );
}

export default App;
