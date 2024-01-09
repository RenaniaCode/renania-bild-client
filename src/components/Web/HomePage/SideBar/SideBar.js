import React from "react";
import "./SideBar.scss";

export function SideBar(props) {
  return (
    <div onClick={props.handleClick} className={`initial ${props.clicked ? "active" : ''}`}>
    </div>
  );
}