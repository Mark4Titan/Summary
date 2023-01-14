import Header from "./components/Header/Header";
import { getTheme } from "./redux/services/ThemeSlice";
import { useSelector } from "react-redux";
import { getPreview } from "./redux/services/PreviewSlice";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import element from "./components/Main/Elements/Element";

function App() {
  const { theme } = useSelector(getTheme);
  const { preview } = useSelector(getPreview);

  return (
    <div key="app" className="App" id={theme}>
      <Header preview={preview} theme={theme} />
      <div key="content" className={`app_${preview}`}>
        <Sidebar preview={preview} theme={theme} element={element} />
        <Main preview={preview} />
      </div>
    </div>
  );
}

export default App;
