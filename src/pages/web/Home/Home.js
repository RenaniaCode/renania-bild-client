import React, { useState } from "react";
import { Navbar, FrontPage, Services } from "../../../components/Web/HomePage";

export function Home() {
  return (
    <>
      <Navbar />
      <FrontPage />
      <Services />
    </>
  );
}
