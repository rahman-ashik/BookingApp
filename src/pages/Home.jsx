import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Cards from "../components/Cards";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-bd">
      <header>
        <Navbar />
        <Herosection />
      </header>
      <body>
        <p className="pt-5">
          <Cards />
        </p>
      </body>
    </div>
  );
};

export default Home;
