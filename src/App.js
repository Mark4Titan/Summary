import Header from "./components/Header/Header";
import { getTheme } from "./redux/services/ThemeSlice";
import { useSelector } from "react-redux";
import { getPreview } from "./redux/services/PreviewSlice";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import element from "./components/Main/Elements/Element";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&family=Rubik:wght@400;700&family=Montserrat+Alternates:wght@400;700&display=swap');
  body {
    font-family: 'Ubuntu','Rubik','Montserrat Alternates', sans-serif;
  }
`;

function App() {
  const { theme } = useSelector(getTheme);
  const { preview } = useSelector(getPreview);

  return (
    <div key="app" className="App" id={theme}>
      <GlobalStyle />
      <Header preview={preview} theme={theme} />
      <div key="content" className={`app_${preview}`}>
        <Sidebar preview={preview} theme={theme} element={element} />
        <Main preview={preview} />
      </div>
    </div>
  );
}

export default App;
