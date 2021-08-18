import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import "../styles/Foot.css";

const Foot = () => {
  return (
    <MDBFooter
      backgroundColor="dark"
      className="foot bg-dark bg-gradient text-light text-center align-items-center align-content-center align-self-center justify-content-center text-lg-left pt-5 mt-5"
    >
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol>
            <h5 className="text-uppercase">Privacy Policy</h5>
            <p>
              Please read our full privacy policy. We respect your privacy and
              will not use any personally identifiable data to track your
              actions on our site.
            </p>
          </MDBCol>
          <MDBCol>
            <h5 className="title">Pages</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Packages</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Get Quote</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Privacy</a>
              </li>
            </ul>
          </MDBCol>
          <form action="">
            <MDBRow>
              <MDBCol size="auto" className="mb-4 mb-md-0">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" size="12" className="mb-4 mb-md-0">
                <MDBInput
                  type="text"
                  id="form5Example2"
                  label="Email address"
                />
              </MDBCol>

              <MDBCol size="auto" className="mb-4 mb-md-0">
                <MDBBtn>Subscribe</MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </MDBRow>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        &copy; {new Date().getFullYear()}{" "}
        <a className="text-light" href="#Home">
          BookingApp
        </a>
      </div>
    </MDBFooter>
  );
};

export default Foot;
