import React from "react";
import Searchlay from "../components/Searchlay";
import "../styles/Herosection.css";

const Herosection = () => {
  return (
    <div
      className="container-fluid vh-100 text-white position-relative shadow-2xl"
      id="hero"
    >
      <div
        id="heroInner"
        className="container position-absolute px-5 p-4 top-50 start-50 translate-middle d-inline-flex flex-container justify-content-evenly align-items-center align-self-center align-content-center"
      >
        <div className="hero-md">
          <img
            className="img-responsive img-fluid heroIMG"
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
            alt="Planning for the weekend"
          />
        </div>
        <div>
          <div className="m-5">
            <Searchlay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
