import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.scss"
import BlackVersionLogo from "../../../../assets/Images/Logo/BlackVersionNoBackground.png";
import { SubNavbar } from "../../HomePage"

export function Navbar() {
  const location = useLocation().pathname;
  if(location === "/") {
    return (
      <nav id="nav">
        <div id="navMenu">
          <a href="/">
            <img src={BlackVersionLogo} alt="renaniaBildLogo" id="navLogo"/>
          </a>
          <a href="#servicesBox"><span className="navOptions">Servicios</span></a>
          <a><span className="navOptions">Sobre Mi</span></a>
          <a href="#footerBox"><span className="navOptions">Contacto</span></a>
        </div>
      </nav>
    );
  } 
  if(location === "/Galleries/Potrait" || location === "/Galleries/Events" || location === "/Galleries/MyVision" ) {
    return (
      <nav id="nav">
        <div id="navMenu">
          <a href="/">
            <img src={BlackVersionLogo} alt="renaniaBildLogo" id="navLogo"/>
          </a>
          <a><span className="navOptions">Sobre Mi</span></a>
          <a href="#footerBox"><span className="navOptions">Contacto</span></a>
        </div>
        <SubNavbar />
      </nav>
    );
  }
}


