import React from 'react';
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import { IconContext } from "react-icons";
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from "./components/Loader/Loader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <IconContext.Provider value={{ className: "react_icons" }}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
      </IconContext.Provider>
    </Provider>
  </React.StrictMode>
);


