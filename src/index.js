import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AttendanceBook from "./chapter_10/AttendanceBook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AttendanceBook />
  </React.StrictMode>
);

reportWebVitals();
