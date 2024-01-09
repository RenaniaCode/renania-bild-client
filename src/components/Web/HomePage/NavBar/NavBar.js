import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./NavBar.scss";
import BlackVersionLogo from "../../../../assets/Images/Logo/BlackVersionNoBackground.png";
import WhiteVersionLogo from "../../../../assets/Images/Logo/WhiteVersionNoBackground.png";
import { SubNavbar } from "../../HomePage";
import {BurgerButton} from "../BurgerButton"
import {SideBar} from "../SideBar";
import Modal from "../../Modal/Modal";

export function Navbar() {
  const location = useLocation().pathname;
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  if(location === "/" || location === "/AboutMe") {
    return (
      <>
      <nav id="nav">
        <div id="navMenu">
          <a href="/">
            <img src={BlackVersionLogo} alt="renaniaBildLogo" id="navLogo"/>
          </a>
          <a href={location !== "/" ? "/Galleries/Potrait" : "#servicesBox"} ><span className="navOptions">Servicios</span></a>
          <a href="/AboutMe"><span className="navOptions">Sobre Mi</span></a>
          <a href="#footerBox"><span className="navOptions">Contacto</span></a>
        </div>
        <div id="burgerButton">
        <BurgerButton active={active} onClick={toggle}/>
        </div>
      </nav>
      <Modal active={active} toggle={toggle}>
        <SideBar active={active} toggle={toggle}/>
      </Modal>
      </>
    );
  } 
  if(location === "/Galleries/Potrait" || location === "/Galleries/Events" || location === "/Galleries/MyVision" ) {
    return (
      <nav id="nav">
        <div id="navMenu">
          <a href="/">
            <img src={BlackVersionLogo} alt="renaniaBildLogo" id="navLogo"/>
          </a>
          <a href="/AboutMe"><span className="navOptions">Sobre Mi</span></a>
          <a href="#footerBox"><span className="navOptions">Contacto</span></a>
        </div>
        <div id="burgerButton">
        <BurgerButton active={active} toggle={toggle}/>
        </div>
        <SubNavbar />
      </nav>
    );
  }
}

