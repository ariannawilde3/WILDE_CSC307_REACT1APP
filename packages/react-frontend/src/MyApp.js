// src/index.js
import React from "react";
import ReactDOMClient from "react-dom/client";
import MyApp from "./MyApp";
import "./index.css";

const container = document.getElementById("root");

// Create a root
const root = ReactDOMClient.createRoot(container);

// Initial render:
root.render(<MyApp />);
// src/MyApp.js
import React from "react";

// src/MyApp.js
import React from "react";
import Table from "./Table";

function MyApp() {
  return (
    <div className="container">
      <Table />
    </div>
  );
}

export default MyApp;