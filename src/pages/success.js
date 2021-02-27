import React from "react";
import { Link } from 'gatsby';
import Layout from "../components/Layout";
import Somosicon from "../assets/Somos-icon_full.jpg"
import styled from 'styled-components';

const SuccessStyles = styled.div `
  div {
      position: relative;
      margin: 0 0 0 0;
      width: 100%;
      height: calc(100vh - 65px);
      padding: 160px 25px 50px;
  }

  img {
      display: block;
      width: 75px;
      height: 75px;
      margin: 0 auto 25px;
  }

  p {
    margin: 0 0 0 0;
    font-size: 3em;
    font-weight: 300;
    line-height: 1.1
    letter-spacing: -1px;
    text-align: center;
  }

  span {
    font-weight: 600;  
  }

  p:nth-child(4) {
      margin: 12px 0 0 0;
  }

  a {
    font-size: 20px;
  }
`

export default function Success() {
    return (
        <Layout>
            <SuccessStyles> 
                <div>          
                    <img alt="Somos branding icon" src={Somosicon} />
                    <p><span>Thank you!</span></p> 
                    <p>We have received your message and someone will get back to you shortly.</p>
                    <p><Link to="/">Return back to SOMOS Hospitality</Link></p>
                </div>
            </SuccessStyles>        
        </Layout>
    )
}