import Header from "./components/Header/Header";
import { getTheme } from "./redux/services/ThemeSlice";
import { useSelector } from "react-redux";
import { getPreview } from "./redux/services/PreviewSlice";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { createGlobalStyle } from "styled-components";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&family=Rubik:wght@400;700&family=Montserrat+Alternates:wght@400;700&display=swap');
  body {
    font-family: 'Ubuntu','Rubik','Montserrat Alternates', sans-serif;
  }
`;

function App() {
  const [activ, setActiv] = useState({});
  const [ActPreview, setActPreview] = useState("Desktop");
  const { theme } = useSelector(getTheme);
  const { preview } = useSelector(getPreview);

  const autoActive = (inV, ActBlock) => {
    if (ActPreview === preview) {
      if (inV !== activ[ActBlock]) {
        setActiv((privState) => ({ ...privState, [ActBlock]: inV }));
      }
    } else {   
      Object.keys(activ).find(key => activ[key] === true && document.querySelector(`.aHref_${key}`).click());
      setActPreview(preview);
    }
  };


  return (
    <div key="app" className="App" id={theme}>
      <GlobalStyle />
      <Header preview={preview} theme={theme} />
      <div key="content" className={`app_${preview}`}>
        <Sidebar
          preview={preview}
          theme={theme}
          activ={activ}
        />
        <Main preview={preview} autoActive={autoActive} activ={activ} />
      </div>
    </div>
  );
}

export default App;
