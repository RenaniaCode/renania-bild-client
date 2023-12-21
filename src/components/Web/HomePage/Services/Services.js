import React, { useState } from "react";
import "./Services.scss"
import BlackVersionLogo from "../../../../assets/Images/Images/Portrait.jpg";

export function Services() {
  return (
    <div id="servicesBox">
        <div id="servicesInfo">
            <h2 className="serviceName">Retrato</h2>
            <p>Llevare tu imagen al siguiente nivel. Conoce un poco de mis trabajos de retrato.</p>
            <div></div>
        </div>
        <img src={BlackVersionLogo} alt="renaniaBildLogo" id="navLogo"/>
    </div>
  );
}
