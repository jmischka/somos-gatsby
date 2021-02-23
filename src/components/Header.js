import React from "react";
import SomosBranding from '../assets/SomosBranding.png';
import styled from 'styled-components';

const HeaderStyles = styled.header `
  img {
    position: relative;
    display: block;
    margin: 0 auto;
  }
`

export default function Header() {
  return (
    <HeaderStyles>
      <img alt="Somos Branding" src={SomosBranding} />
    </HeaderStyles>
  ) 
}
