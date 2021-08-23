import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Cards from "../components/Cards";
import Foot from "../components/Foot";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-bd">
      <Navbar
        position="relative"
        sticky="top"
        className="sticky-top position-relative zindex-sticky"
      />
      <Herosection position="absolute" className="position-absolute" />
        <Cards />
      <Foot />
    </div>
  );
};

export default Home;
