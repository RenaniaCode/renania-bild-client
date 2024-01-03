import React, { useState } from "react";
import "./Services.scss"
import BlackButton from "../../../../assets/Images/Icons/ButtonBlack.png";
import WhiteButton from "../../../../assets/Images/Icons/ButtonWhite.png";

export function Services(props) {
  const { description, title, image, href, reverse } = props;
  if (!reverse) {
    return (
      <div id="servicesBox">
          <div id="servicesInfo">
              <h2 className="serviceName">{title}</h2>
              <p className="serviceDescription">{description}</p>
              <div className="watchMoreButton">
                <a href={href}><h2 className="watchMoreButtonText">Ver Mas</h2></a>
                <a href={href}><img src={BlackButton} alt="Black Button" className="blackButton"/></a>
              </div>
          </div>
            <img src={image} alt={`${title} Example`} id="exampleImg"/>
      </div>
      );
    }
  return (
    <div id="servicesBoxreverse">
        <img src={image} alt={`${title} Example`} id="exampleImg"/>
        <div id="servicesInfo">
            <h2 className="serviceNameReverse">{title}</h2>
            <p className="serviceDescriptionReverse">{description}</p>
            <div className="watchMoreButtonReverse">
              <a href={href}><h2 className="watchMoreButtonTextReverse">Ver Mas</h2></a>
              <a href={href}><img src={WhiteButton} alt="Black Button" className="whiteButton"/></a>
            </div>
        </div>
    </div>
  );
};