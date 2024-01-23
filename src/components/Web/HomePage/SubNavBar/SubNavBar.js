import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./SubNavBar.scss"

export function SubNavbar() {
  const location = useLocation().pathname;
    return (
      <nav id="subNav">
        <div id="subNavMenu">
          <a href="/Galleries/Potrait">
            <span className={location === "/Galleries/Potrait" ? "subNavOptions active" : "subNavOptions"}>Retrato</span>
          </a>
          <a href="/Galleries/Events">
            <span className={location === "/Galleries/Events" ? "subNavOptions active" : "subNavOptions"}>Eventos</span>
          </a>
          <a href="/Galleries/MyVision">
            <span className={location === "/Galleries/MyVision" ? "subNavOptions active" : "subNavOptions"}>Mi Vision</span>
          </a>
        </div>
      </nav>
    );
}