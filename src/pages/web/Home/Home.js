import React, { useState } from "react";
import { Navbar, FrontPage, Services, Footer } from "../../../components/Web/HomePage";
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
      href={"/Galleries/Retrato"}
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
      <Footer 
      instagram={"https://www.instagram.com/renaniabild?igsh=MTJoN2Z6d24weGM3bg=="}
      gmail={"renaniabild@gmail.com"}
      whatsapp={+525530687148}
      />
    </>
  );
}
