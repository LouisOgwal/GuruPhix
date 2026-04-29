import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"; // 👈 THIS IS THE MISSING PIECE

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);