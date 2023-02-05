import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact,  faLinux, faGitAlt, faGithub, faPython, faBootstrap, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { faC, faDatabase, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Skills(props) {
  return (
    
    <div className="container text-center mt-lg-5" id="Skills">
      <div className="d-flex lan-flex"></div>
      <h1 className="head">SKILLS</h1>
      
      {/*   first row */}
      
      <div className="d-flex gap_clas" ></div>
      <div className="row">
        <div className="col">
          <FontAwesomeIcon icon={faHtml5} className='fa-3x' color='red'/>
          <FontAwesomeIcon icon={faCss3Alt} className='fa-3x' color='blue' />
          <p className="skills">HTML5 & CSS3 </p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="95"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-warning"
              style={{ width: "95%", color: "black" }}
            >
              95%
            </div>
          </div>
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faJs} className='fa-3x' color='gold' style={{backgroundColor:'black'}} />
          <p className="skills">JavaScript</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="90"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-warning"
              style={{ width: "90%", color: "black" }}
            >
              90%
            </div>
          </div>
        </div>
        <div className="col">
          <FontAwesomeIcon icon={faReact} className='fa-3x' color='aqua'/>
          <p className="skills">ReactJS</p>
          <div
            className="progress"
            role="progressbar"
            aria-label="Example with label"
            aria-valuenow="93"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-bar bg-warning"
              style={{ width: "93%", color: "black" }}
            >
              93%
            </div>
          </div>
        </div>
      </div>

    {/*  second row */}

    <div className="d-flex gap_clas" ></div>
      <div className="row">
      <div className="col">
      <FontAwesomeIcon icon={faC} className='fa-solid fa-3x' color='#0070ff'/>
        <p className="skills">C </p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="92"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: "92%", color: "black" }}
          >
            92%
          </div>
        </div>
      </div>
      <div className="col">
      <FontAwesomeIcon icon={faPython} className='fa-3x' color='#1e90ff'/>
        <p className="skills">Python</p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="90"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: "90%", color: "black" }}
          >
            90%
          </div>
        </div>
      </div>
      <div className="col">
      <FontAwesomeIcon icon={faC} className='fa-2x' color='#5d89ba'/>
      <FontAwesomeIcon icon={faPlus} className='fa-2x' color='#5d89ba'/>
      <FontAwesomeIcon icon={faPlus} className='fa-2x' color='#5d89ba'/>
        <p className="skills">C++</p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="90"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: "90%", color: "black" }}
          >
            90%
          </div>
        </div>
      </div>
    </div>


    {/* Third Row */}

    <div className="d-flex gap_clas" ></div>
    <div className="row">
      <div className="col">
      <FontAwesomeIcon icon={faDatabase} className='fa-3x' color='#fcc200'/>
        <p className="skills">MySQL </p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="95"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: "95%", color: "black" }}
          >
            95%
          </div>
        </div>
      </div>
      <div className="col">
      <FontAwesomeIcon icon={faGithub} className='fa-3x'/>
        <p className="skills">GitHub</p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="92"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: "92%", color: "black" }}
          >
            92%
          </div>
        </div>
      </div>
      <div className="col">
      <FontAwesomeIcon icon={faBootstrap} className='fa-3x' style={{color:'purple'}}/>
        <p className="skills">Bootstrap</p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="95"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: "95%", color: "black" }}
          >
            95%
          </div>
        </div>
      </div>
    </div>



    {/* Forth Row*/}

    <div className="d-flex gap_clas" ></div>
    <div className="row">
      <div className="col">
      <FontAwesomeIcon icon={faGitAlt} className='fa-3x' style={{color:'white' ,backgroundColor:'#f34f29'}}/>
        <p className="skills">GIT </p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="95"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: "95%", color: "black" }}
          >
            95%
          </div>
        </div>
      </div>
      <div className="col">
      <FontAwesomeIcon icon={faNodeJs} className='fa-3x' style={{color:'#3C873A'}}/>
        <p className="skills">NodeJS</p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="85"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: "85%", color: "black" }}
          >
            85%
          </div>
        </div>
      </div>
      <div className="col">
      <FontAwesomeIcon icon={faLinux} className='fa-3x'/>
        <p className="skills">Linux</p>
        <div
          className="progress"
          role="progressbar"
          aria-label="Example with label"
          aria-valuenow="90"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar bg-warning"
            style={{ width: "90%", color: "black" }}
          >
            90%
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
