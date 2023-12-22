import React, { useState } from "react";
import "./Footer.scss"
import AlgorithmLogo from "../../../../assets/Images/Logo/Algorithm.png";
import RenaniaLogo from "../../../../assets/Images/Logo/BlackVersionNoBackground.png";
import InstagramIcon from "../../../../assets/Images/Icons/instagram_icon.png";
import EmailIcon from "../../../../assets/Images/Icons/email_icon.png";
import WhatsappIcon from "../../../../assets/Images/Icons/whatsapp_icon.png";

export function Footer(props) {
  const { instagram, gmail, whatsapp } = props;
  return (
    <div id="footerBox">
        <div id="brands">
            <a>
            <img src={AlgorithmLogo} alt="10001 Algorithm Logo" id="algorithmLogo"/>
            </a>
            <a>
            <img src={RenaniaLogo} alt="Renania Bild Logo" id="renaniaLogo"/>
            </a>
        </div>
        <div id="socialMedia">
            <a>
            <img src={InstagramIcon} alt="InstagramIcon" className="socialIcon"/>
            </a>
            <a>
            <img src={EmailIcon} alt="EmailIcon" className="socialIcon"/>
            </a>
            <a>
            <img src={WhatsappIcon} alt="WhatsappIcon" className="socialIcon"/>
            </a>
        </div>
    </div>
  );
};