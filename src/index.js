import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PersistGate persistor={store}>
      <Provider store={store}>
        <App/>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
