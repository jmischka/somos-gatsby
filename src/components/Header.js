import React from "react";
import { Link } from 'gatsby';
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
      <Link to="/"><img alt="Somos Branding" src={SomosBranding} /></Link>
    </HeaderStyles>
  ) 
}
