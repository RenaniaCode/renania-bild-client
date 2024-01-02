import React, { useState } from "react";
import { Navbar, Footer, Gallery } from "../../../components/Web/HomePage";

export function Galleries() {
  return (
    <>
      <Navbar />
      <Gallery/>
      <Footer 
      instagram={"https://www.instagram.com/renaniabild?igsh=MTJoN2Z6d24weGM3bg=="}
      gmail={"renaniabild@gmail.com"}
      whatsapp={+525530687148}
      />
    </>
  );
}

