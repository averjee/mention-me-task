import { StrictMode } from "react";

import ReactDOM from "react-dom";

import App from "./App";

import { LoginProvider } from '../src/context/LoginProvider'

ReactDOM.render(
  <StrictMode>
    <LoginProvider>
      <App />
    </LoginProvider>
  </StrictMode>,
  document.getElementById("root")
);
