// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import './components/css/Landing.css';
import './components/css/Skills.css';
import "./components/css/Navbar.css";
import './components/css/Projects.css';
import './components/css/Contact.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Landing from './components/Landing';
import Skills from './components/Skills';
import './App.css';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const email = 'shiva101fb@gmail.com';
  const phone = '+91 7982578104';
  return (
          <>
          <Navbar />
          <Alert alert={alert}/>
          <Landing showAlert={showAlert}/>
          <Skills />
          <Projects />
          <About />
          <Contact email={email} phoneNumber={phone}/>
          <Footer />
          </>
  );
}

export default App;
