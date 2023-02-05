import React, {useState} from 'react'
import Homem from './images/shivam.png';

export default function Landing(props){
  const [isHoverkm, setIsHoverkm] = useState(false);
  const [isHovercv, setIsHovercv] = useState(false);

  const handleKnowMoreClick = () => {
    props.showAlert("Thank You For Showing Intrest", "danger");
    document.querySelector(`#About`).scrollIntoView({
      behavior: 'smooth'
    });
  };
  
  const handleDownloadCVClick = () => {
    const link = document.createElement("a");
    link.href = "documents/shivam_cv.pdf";
    link.download = "shivam_cv.pdf";
    link.click();
    props.showAlert("CV Downloaded", "success");
    // You can add the code for downloading the CV file here.
  };

  return(
    <div className="container" id='Home'>
      <div className="row">
        <div className="col">
            <img src={Homem} className="img-fluid" alt="..." />
        </div>
        <div className="col">
            <div className ='conatiner con'> 
              <h1 id='hi-landing'>Hi, I'm</h1>
              <h1 className = 'animated-text'>
                  Shivam Maheshwari
              </h1>
              <p id='softLanding'>SOFTWARE DEVELOPER</p>
              <p><small className="disabled"> I am an aspiring software developer with a passion 
              for creating beautiful and functional applications.  
              I'm perscuing my bachelor's degree 
              in Computer Science & enginnering and have worked on various projects ranging from web development to mobile app development.
                  </small></p>
                  <div className="d-grid gap-2 d-md-block">
              <button 
                className={`btn ${isHoverkm ? 'btn-light' : 'btn-dark'} m-4`} 
                type="button"
                onMouseEnter={() => setIsHoverkm(true)}
                onMouseLeave={() => setIsHoverkm(false)}
                onClick={handleKnowMoreClick}
              >Know More</button>
              <button 
                className={`btn ${isHovercv ? 'btn-success' : 'btn-dark'} m-4`} 
                type="button"
                onMouseEnter={() => setIsHovercv(true)}
                onMouseLeave={() => setIsHovercv(false)}
                onClick={handleDownloadCVClick}
              >Download CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
