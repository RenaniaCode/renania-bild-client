import React from "react";
import "./SideBar.scss";
import { useLocation } from "react-router-dom";

export function SideBar(props) {
  const { toggle } = props
  const location = useLocation().pathname;
  return (
    <nav id="navSidebar">
        <div id="navSideMenu">
          <a href="/" onClick={toggle}><span className="navSideOptions">Home</span></a>
          <a href={location !== "/" ? "/Galleries/Potrait" : "#servicesBox"} onClick={toggle}><span className="navSideOptions">Servicios</span></a>
          <a href="/AboutMe" onClick={toggle}><span className="navSideOptions" >Sobre Mi</span></a>
          <a href="#footerBox" onClick={toggle}><span className="navSideOptions">Contacto</span></a>
        </div>
    </nav>
  );
}