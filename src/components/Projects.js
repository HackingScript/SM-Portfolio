import React from "react";
import TND from './images/tnd.jpg';
import STUDASH from './images/studDash.jpg';
import TODO from './images/todo.png';
import QUIZTIME from './images/quizTime.png';
import TRUECALLER from './images/truecaller.png';
import TEXTUT from './images/textUt.jpg';


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
              <a href = "https://github.com/FadeHack/The-Network-Den" class="btn btn-success" target="_blank" rel ="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={STUDASH} className="img-fluid-pro img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Stud Dash</h5>
                  <p className="card-text">
                  StudDash is a comprehensive web application that simplifies assessment management for educational institutions. It enables efficient creation of assessments, tracks student results, and provides insightful reports.
                  </p>
                  <a href = "https://github.com/FadeHack/StudDash" class="btn btn-success" target="_blank" rel ="noopener noreferrer">GitHub</a>
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
                <img src={TRUECALLER} className="img-fluid-pro img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Truecaller Data Fetcher</h5>
                  <p className="card-text">
                    Developed a Flask web app using Truecallerpy API that allows user login with phone number, receives OTP, and access bulk/single number search. Provides phone number owner details in a table.
                  </p>
                  <a href = "https://github.com/FadeHack/TDF" class="btn btn-success" target="_blank" rel ="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={QUIZTIME} className="img-fluid-pro img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Quiz TIme</h5>
                  <p className="card-text">
                  QuizTime is a Flask-based quiz application that allows users to create, take, and view quiz results. It includes features like quiz creation, result tracking, and rate limiting to prevent abuse. With an intuitive interface, it offers an interactive platform for quiz enthusiasts.
                  </p>
                  <a href = "https://github.com/FadeHack/QuizTime" class="btn btn-success" target="_blank" rel ="noopener noreferrer">GitHub</a>
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
                  <a href = "https://github.com/FadeHack/TextUtils-React" class="btn btn-success" target="_blank" rel ="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={TODO} className="img-fluid-pro img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">TO-DO-Heist</h5>
                  <p className="card-text">
                  ToDO Heist is a web-based task management system that allows users to create, manage, and track tasks. It features user authentication, role-based access control, and supports CRUD operations on tasks.
                  </p>
                  <a href = "https://github.com/FadeHack/To-Do-Heist" class="btn btn-success" target="_blank" rel ="noopener noreferrer">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        
    </div>
  );
}
