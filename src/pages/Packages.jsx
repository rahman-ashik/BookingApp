import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";
import Foot from "../components/Foot";

const baseURL = "https://fake-hotel-api.herokuapp.com/api/hotels";

const Packages = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setLocation(response.data);
    });
  }, []);

  return (
    <>
      <div>
        <Navbar sticky="top" className="sticky-top" />
        <br />
        <h1 className="h1 text-center">Packages</h1>
        <h2 className="h2 text-center text-muted">
          Choose the package(s) you want.
        </h2>
        <br />
        <div className="container-fluid d-flex flex-wrap align-items-center align-self-center align-content-center justify-content-around">
          {location.map((place, i) => {
            return (
              <Gallery
                key={i}
                id={place.id}
                name={place.name}
                country={place.country}
                city={place.city}
                start={place.date_start}
                end={place.date_End}
                price={place.price}
                rating={place.rating}
              />
            );
          })}
        </div>
        <Foot />
      </div>
    </>
  );
};

export default Packages;
