import React from "react";
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
      href={"/Galleries/Potrait"}
      />
      <Services 
      reverse={true}
      title={"Eventos"} 
      description={"Conoce el nivel visual de mis eventos cubiertos. El siguiente podría ser el tuyo."}
      image={EventExample}
      href={"/Galleries/Events"}
      />
      <Services 
      reverse={false}
      title={"Mi Visión"} 
      description={"Disfruta de mi estilo fotográfico a través de una colección de trabajos más personales."}
      image={MiVisionExample}
      href={"/Galleries/MyVision"}
      />
      <Footer 
      instagram={"https://www.instagram.com/renaniabild?igsh=MTJoN2Z6d24weGM3bg=="}
      gmail={"mailto:renaniabild@gmail.com?subject=Servicios Fotograficos&body=Hola, me gustaria saber mas sobre tus servicios fotograficos."}
      whatsapp={"https://api.whatsapp.com/send?phone=5636623458&text=Hola! me gustaria saber mas sobre tus servicios de fotografia"}
      />
    </>
  );
}
