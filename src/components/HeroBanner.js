import React from "react";
import "./HeroBanner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PlayIcon from "../assets/playIcon.svg";

const HeroBanner = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>The cheap, fast way to send money abroad.</h1>
            <h5>
              Join over 8 Million people who get the real exchange rate with
              TranWise. We're upto <Link to="/"> 8x cheaper than banks</Link>{" "}
            </h5>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link to="/" className="btn-get-started scrollto">
                {" "}
                <img src={PlayIcon} className="playIcon" />
                See how we send money
              </Link>
            </div>
            <div className="row mt-5">
            <div className="col-md-3 col-sm-4">
              <div
                className="col-xs-6 text-xs-center "
                data-testid="savings"
              >
               <h1>m<i class="fa-duotone fa-lock"></i></h1>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="vr"></div>
            </div>
            <div className="col-md-4 col-sm-4">
            <div
                className="col-xs-6 text-xs-center bankSaving"
                data-testid="savings"
              >
                Should arrive <br></br>
                <strong className="h4">by Friday</strong>
              </div>
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------------- */}
          

         


          {/*------------------------------------------------------------------------------------------------------------------------  */}
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control currencyInput"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                {" "}
                USD
              </button>
            </div>

            <div className="row mt-1">
              <div className="col-md-12">
                <ul className="stepper stepper-vertical">
                  <li className="stepperLinesDot">
                  
                      <span className="circle"></span>
                      <span className="label">See calculation</span>
                  </li>
                  <div className="stepperLines" />
                  <li className="stepperLinesDot">
                      <span className="circle"></span>
                      <span className="label">9.02 USD Totalfees</span>
                  </li>
                  <div className="stepperLines" />
                  <li className="stepperLinesDot">
                      <span className="circle"></span>
                      <span className="label">
                        0.852360 Guaranteed rate (35 hrs )
                      </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control currencyInput"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />

              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <img src=""/>
                {" "}
                EUR
              </button>
            </div>
          <div className="row">
            <div className="col-md-3 col-sm-4">
              <div
                className="col-xs-6 text-xs-center bankSaving"
                data-testid="savings"
              >
                You could save vs banks <br></br>
                <strong className="h4">73.66 USD</strong>
              </div>
            </div>
            <div className="col-md-2 col-sm-4">
              <div className="vr"></div>
            </div>
            <div className="col-md-4 col-sm-4">
            <div
                className="col-xs-6 text-xs-center bankSaving"
                data-testid="savings"
              >
                Should arrive <br></br>
                <strong className="h4">by Friday</strong>
              </div>
              </div>
            </div>
              <div className="col-xs-12 col-12 col-lg-12 col-md-12">
              <Link to="/" className="btn btn-success btn-block getStartedCta"  target="_top">Get started</Link>
               
                </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
