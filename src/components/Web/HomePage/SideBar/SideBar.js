import React from "react";
import "./SideBar.scss";
import BlackVersionLogo from "../../../../assets/Images/Logo/BlackVersionNoBackground.png";
import { useLocation } from "react-router-dom";

export function SideBar(props) {
  const {active, toggle} = props
  const location = useLocation().pathname;
  return (
    <nav id="navSidebar">
        <div id="navSideMenu">
          <a href="/Galleries/Potrait" ><span className="navSideOptions">Servicios</span></a>
          <a href="/AboutMe"><span className="navSideOptions" >Sobre Mi</span></a>
        </div>
    </nav>
  );
}