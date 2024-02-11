import React from "react";
import ReactDOM from "react-dom/client";
import ColorGenerator from "./ColorGenerator";

const App = () => {
  return (
    <div>
      <ColorGenerator />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
