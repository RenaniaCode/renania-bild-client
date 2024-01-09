import React from "react";
import "./SideBar.scss";
import BlackVersionLogo from "../../../../assets/Images/Logo/BlackVersionNoBackground.png";
import { useLocation } from "react-router-dom";

export function SideBar(props) {
  const {active, toggle} = props
  const location = useLocation().pathname;
  return (
        <div id="navMenu">
          <a href={location !== "/" ? "/Galleries/Potrait" : "#servicesBox"} ><span className="navOptions">Servicios</span></a>
          <a href="/AboutMe"><span className="navOptions" >Sobre Mi</span></a>
          <a href="#footerBox"><span className="navOptions">Contacto</span></a>
        </div>
  );
}