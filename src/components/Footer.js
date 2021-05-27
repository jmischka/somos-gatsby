import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IconContext } from "react-icons";
import styled from 'styled-components';

const FooterStyles = styled.footer `
  a {
    position: relative;
    display: inline-block;
    margin: 0 9px;
    width: 35px;
    height: 35px;
    text-decoration: none;
    border-radius: 6px;
    background-color: #262626;
    transition-duration: .35s;
  }

  a:hover {
    background-color: #F15D22;
  }

  .footer-social-link {
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 2.3em;
    fill: white;
    transform: translate(-50%,-50%);
  }  
`

export default function Footer() {
  return (
    <FooterStyles>
      <a target="_blank" rel="noreferrer" aria-label="Facebook" href="https://www.facebook.com/SomosHospitality"><IconContext.Provider value={{ className: "footer-social-link" }}><IoLogoFacebook /></IconContext.Provider></a>
      <a target="_blank" rel="noreferrer" aria-label="Instagram" href="https://www.instagram.com/somoshospitality/"><IconContext.Provider value={{ className: "footer-social-link" }}><AiFillInstagram /></IconContext.Provider></a>
    </FooterStyles>
  ) 
}
