import React from "react";
import "./BurgerButton.scss";

export function BurgerButton(props) {
  return (
    <div onClick={props.onClick} class={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
