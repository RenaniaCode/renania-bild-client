import React, { useState } from "react";
import { Navbar, FrontPage, Services } from "../../../components/Web/HomePage";
import PortraitExample from "../../../assets/Images/Images/Portrait.jpg";
import EventExample from "../../../assets/Images/Images/Events.jpg";
import MiVisionExample from "../../../assets/Images/Images/MyVision.jpg";

export function Home() {
  return (
    <>
      <Navbar />
      <FrontPage />
      <Services 
      reverse={false}
      title={"Retrato"} 
      description={"Llevaré tu imagen al siguiente nivel. Conoce un poco de mis trabajos de retrato."}
      image={PortraitExample}
      href={"#"}
      />
      <Services 
      reverse={true}
      title={"Eventos"} 
      description={"Llevaré tu imagen al siguiente nivel. Conoce un poco de mis trabajos de retrato."}
      image={EventExample}
      href={"#"}
      />
      <Services 
      reverse={false}
      title={"Mi Visión"} 
      description={"Conoce mi estilo al inmortalizar los momentos a través de una colección mas personal"}
      image={MiVisionExample}
      href={"#"}
      />
    </>
  );
}
