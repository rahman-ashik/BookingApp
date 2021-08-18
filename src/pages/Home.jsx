import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Cards from "../components/Cards";
import Foot from "../components/Foot";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-bd">
      <Navbar sticky="top" className="sticky-top" />
      <Herosection />
      <br />
      <p className="pt-5">
        <Cards />
      </p>
      <Foot />
    </div>
  );
};

export default Home;
