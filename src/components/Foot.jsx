import React from "react";
import { MDBFooter, MDBContainer } from "mdb-react-ui-kit";

const Foot = () => {
  return (
    <MDBFooter
      backgroundColor="light"
      className="text-center text-lg-left pt-5 mt-5"
    >
      <MDBContainer className="p-4">
        <h5 className="text-uppercase">Privacy Policy</h5>
        <p>
          Please read our full privacy policy. We respect your privacy and will
          not use any personally identifiable data to track your actions on our
          site.
        </p>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <a className="text-dark" href="#Home">
          BookingApp
        </a>
      </div>
    </MDBFooter>
  );
};

export default Foot;
