import React from "react";
import AboutMePicture from "../../../../assets/Images/Images/AboutMe.jpg";
import "./About.scss";

export function About() {
  return (
    <div id="aboutMeBox">
        <img src={AboutMePicture} id="aboutMePicture"></img>
        <div id="aboutTextDiv">
            <span id="title">Sobre Mi</span>
            <span id="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </span>
        </div>
    </div>
  );
};