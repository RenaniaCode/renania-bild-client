import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.scss";
import BlackVersionLogo from "../../../../assets/Images/Logo/BlackVersionNoBackground.png";
import { SubNavbar } from "../../HomePage";
import {BurgerButton} from "../BurgerButton"
import {SideBar} from "../SideBar";

export function Navbar() {
  const location = useLocation().pathname;
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked)
  }
  if(location === "/" || location === "/AboutMe") {
    return (
      <nav id="nav">
        <div id="navMenu">
          <a href="/">
            <img src={BlackVersionLogo} alt="renaniaBildLogo" id="navLogo"/>
          </a>
          <a href={location !== "/" ? "/Galleries/Potrait" : "#servicesBox"} ><span className={`navOptions ${clicked ? "active" : ''}`}>Servicios</span></a>
          <a href="/AboutMe"><span className={`navOptions ${clicked ? "active" : ''}`}>Sobre Mi</span></a>
          <a href="#footerBox"><span className={`navOptions ${clicked ? "active" : ''}`}>Contacto</span></a>
        </div>
        <div id="burgerButton">
        <BurgerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <SideBar clicked={clicked} />
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
          <a href="/AboutMe"><span className={`navOptions ${clicked ? "active" : ''}`}>Sobre Mi</span></a>
          <a href="#footerBox"><span className={`navOptions ${clicked ? "active" : ''}`}>Contacto</span></a>
        </div>
        <div id="burgerButton">
        <BurgerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        <SubNavbar />
      </nav>
    );
  }
}


