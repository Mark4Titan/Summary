import Header from "./components/Header/Header";
import { getTheme } from "./redux/services/ThemeSlice";
import { useSelector } from "react-redux";
import { getPreview } from "./redux/services/PreviewSlice";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { createGlobalStyle } from "styled-components";
import { useState, useRef } from "react";

import {
  Paper,
  Container,
  useTheme,
  ThemeProvider,
  createTheme,
  Button,
} from "@mui/material";
import { useReactToPrint } from "react-to-print";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&family=Rubik:wght@400;700&family=Montserrat+Alternates:wght@400;700&display=swap');
  body {
    font-family: 'Ubuntu','Rubik','Montserrat Alternates', sans-serif;
  }
`;

function App() {
  const printRef = useRef(null);
  const [activ, setActiv] = useState({});
  const [ActPreview, setActPreview] = useState("Desktop");
  const { theme } = useSelector(getTheme);
  const { preview } = useSelector(getPreview);

  const themeMUI = useTheme();
  const newThemeMUI = createTheme(themeMUI, {
    typography: {
      h1: { fontSize: "3rem" },
      h2: { fontSize: "2rem" },
      h3: { fontSize: "1.5rem" },
      h4: { fontSize: "1.25rem" },
      h5: { fontSize: "1rem" },
      h6: { fontSize: "0.75rem" },
      body1: { fontSize: "1rem" },
      body2: { fontSize: "0.75rem" },
      subtitle1: { fontSize: "1rem" },
      subtitle2: { fontSize: "0.75rem" },
    },
    shadows: [
      ...themeMUI.shadows.slice(0, 24),
      "-4px 2px 3px 0px rgb(255 255 255 / 12%), 0px 3px 3px 0px rgb(255 255 255 / 45%), 4px 0px 3px 0px rgb(255 255 255 / 12%), 0px -7px 13px 0px rgb(255 255 255 / 12%)",
    ],
  });

  const autoActive = (inV, ActBlock) => {
    if (ActPreview === preview) {
      if (inV !== activ[ActBlock]) {
        setActiv((privState) => ({ ...privState, [ActBlock]: inV }));
      }
    } else {
      Object.keys(activ).find(
        (key) =>
          activ[key] === true && document.querySelector(`.aHref_${key}`).click()
      );
      setActPreview(preview);
    }
  };

  const printComponent = useReactToPrint({
    content: () => printRef.current,
  });

  const Print = () => {
    setTimeout(() => {
      printComponent();
    }, 0);
    setTimeout(() => {
      console.log("Print");
    }, 500);
  };

  return (
    <ThemeProvider theme={newThemeMUI}>
      <div key='app' className='App' id={theme}>
        <GlobalStyle />
        <Header preview={preview} theme={theme}>
          <Button variant='text' color='info' onClick={Print}>
            Скачяти PDF / друкувати
          </Button>
        </Header>
        <div key='content' className={`app_${preview}`} ref={printRef}>
          <Sidebar preview={preview} theme={theme} activ={activ} />
          <Main preview={preview} autoActive={autoActive} activ={activ} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
