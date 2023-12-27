import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProfileCard from "./chapter_13/ProfileCard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProfileCard />
  </React.StrictMode>
);

reportWebVitals();
