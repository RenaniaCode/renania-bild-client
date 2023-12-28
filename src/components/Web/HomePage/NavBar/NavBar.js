import React, { useState } from "react";
import "./NavBar.scss"
import BlackVersionLogo from "../../../../assets/Images/Logo/BlackVersionNoBackground.png";

export function Navbar() {
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


