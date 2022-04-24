import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
  rootElement
);
