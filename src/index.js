import React from 'react';
import { store, persistor } from "./redux/store";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from "./components/Loader/Loader";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>      
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
    </Provider>
  </React.StrictMode>
);


