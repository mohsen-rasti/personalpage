import React from "react";
import Typed from "react-typed";


function Heades() {
    return (
      <div className="header-weaper">
            <div className="main-info">
            <h1>Wellcome to mye web site Mohsen Rasti</h1>
            <Typed
            className="typed-text"
            strings={["Web desingn","Computer Enginer","Robotic & Electronic"]}
            typeSpeed={60}
            backSpeed={50}
loop
            />
            <a href="#" className="btn-main-offer">Contact Me</a>

        </div>
      </div>
    )
}

export default Heades
