import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { LinksProvider } from "./state/links-contex";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <LinksProvider>
      <App />
    </LinksProvider>
  </Router>,
  document.getElementById("root")
);
