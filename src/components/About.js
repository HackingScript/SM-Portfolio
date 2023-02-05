import React from "react";

function About() {
  return (
    <section id="About" className="container my-5">
      <div className="d-flex lan-flex"></div>
      <h1 className="text-center head">About Me</h1>

      <div className="row my-5">
        <div className="col-md-6">
          <div className="card bg-light mb-3">
            <div className="card-header">Education</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">


                <div className="d-flex align-items-center justify-content-center">
                  <div className="flex-shrink-0">
                 <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Logo-jiit.png/225px-Logo-jiit.png"
                  alt="JIIT Noida logo"
                  fluid='true'
                  height={"100px"}
                  width={"auto"}
                />
                  </div>
                </div>


               
                <li className="list-group-item">
                  <strong>Degree:</strong> Bachelor's in Computer Science & Enginnering
                </li>
                <li className="list-group-item">
                  <strong>School:</strong> Jaypee Institute of Information
                  Technology, Noida
                </li>
                <li className="list-group-item">
                  <strong>Graduating In: </strong> 2024
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card bg-light mb-3">
            <div className="card-header">Personal Information</div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>City: </strong> Delhi
                </li>
                <li className="list-group-item">
                  <strong>Gender:</strong> Male
                </li>
                <li className="list-group-item">
                  <strong>Date of Birth:</strong> January 22, 2002
                </li>
                <li className="list-group-item">
                  <strong>Nationality:</strong> Indian
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
