import React from 'react';
import ReactDOM from 'react-dom/client';
import store from "./store";
import { Provider } from "react-redux"; // Use 'Provider' with a capital 'P'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
