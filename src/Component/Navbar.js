import React from "react";
import pic from "../pic.jpg";
import "../App.css";
///font aswome//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars} from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<div className="container">
        <a className="navbar-brand" href="#"><img className="logo" src={pic} alt="pic..."/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

        <FontAwesomeIcon icon={faBars} style={{color:"#fff"}} />

        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">How work</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfilio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            
       
          </ul>
          
        </div>
        </div>
      </nav>
    
    )
}

export default Navbar
