import React from "react";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Foot from "../components/Foot";
import { location } from "../pack-location";

const Packages = () => {
  return (
    <div>
      <Navbar sticky="top" className="sticky-top" />
      <br />
      <h1 className="h1 text-center">Packages</h1>
      <h2 className="h2 text-center text-muted">
        Choose the package(s) you want.
      </h2>
      <br />
      <Gallery
        id={location[0].id}
        name={location[0].name}
        country={location[0].country}
        city={location[0].city}
        totalDays={location[0].totalDays}
        price={location[0].price}
        rating={location[0].rating}
      />
      <Foot />
    </div>
  );
};

export default Packages;
