import React from "react";
import { Navbar, Footer, About } from "../../../components/Web/HomePage";

export function AboutMe() {
  return (
    <>
      <Navbar />
      <About />
      <Footer 
      instagram={"https://www.instagram.com/renaniabild?igsh=MTJoN2Z6d24weGM3bg=="}
      gmail={"mailto:renaniabild@gmail.com?subject=Servicios Fotograficos&body=Hola, me gustaria saber mas sobre tus servicios fotograficos."}
      whatsapp={"https://api.whatsapp.com/send?phone=5636623458&text=Hola! me gustaria saber mas sobre tus servicios de fotografia"}
      />
    </>
  );
}