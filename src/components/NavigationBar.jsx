import React from "react";

const NavigationBar = () => {
    return ( 
    <div>
        <nav class="navbar navbar-expand-md navbar-light">

        <a class="navbar-brand" href="#">
        <img
        src={require("../sm-logo.png")}
        className="d-inline-block align-top small-logo"
        alt="TEST"
      />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#about">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">PROJECTS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>

      </nav>

        </div>     
)
};

export default NavigationBar;