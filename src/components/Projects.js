import React from "react";
import TND from './images/tnd.jpg';
import SPOTIFY from './images/spotify.jpg';
import TEXTUT from './images/textUt.jpg';
import BANK from './images/bank.jpg';


export default function Projects(props) {
  return (
    <div className="container text-center mt-lg-5" id="Projects">
    <div className="d-flex lan-flex"></div>
      <div className="d-flex"></div>
      <h1 className="head">PROJECTS</h1>

      <div className="d-flex lan-flex"></div>

      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={TND} className="img-fluid-pro img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">The Network Den (TND)</h5>
                  <p className="card-text">
                  TND is a GUI-based network analysis tool built with the kivy framework in Python. It offers three key functionalities for network analysis.
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={SPOTIFY} className="img-fluid-pro img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Spotify Clone</h5>
                  <p className="card-text">
                  This project is a replica of the popular music streaming platform, Spotify. It offers similar features and functionalities.
           
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="row">
        <div className="col">
          <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={TEXTUT} className="img-fluid-pro img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Text Utils (Text Utility React app)</h5>
                  <p className="card-text">
                  This is a React application for text manipulation, offering various text utilities such as text conversion, text analysis, etc.
           
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={BANK} className="img-fluid-pro img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Bank Management System</h5>
                  <p className="card-text">
                  This is a bank management system built in C++, offering features such as account creation, deposits, withdrawals, balance inquiry, etc.
          
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        
    </div>
  );
}
