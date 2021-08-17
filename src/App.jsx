import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
        <Herosection />
      </header>
    </div>
  );
};

export default App;
