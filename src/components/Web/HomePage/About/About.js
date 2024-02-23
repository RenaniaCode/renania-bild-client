import React from "react";
import AboutMePicture from "../../../../assets/Images/Images/AboutMe.jpg";
import "./About.scss";

export function About() {
  return (
    <div id="aboutMeBox">
        <img src={AboutMePicture} id="aboutMePicture" oncontextmenu="return false"></img>
        <div id="aboutTextDiv">
            <span id="title">Sobre Mi</span>
            <span id="description">
            Mi nombre es Carlos Pérez y soy el creador de Renania Bild. Renania Bild es un proyecto fotográfico en el que busco representar mi visión y mi estilo en cada uno de los momentos capturados a través de mi cámara. Trae tus momentos más importantes y yo me encargaré de inmortalizarlos.
            </span>
        </div>
    </div>
  );
};