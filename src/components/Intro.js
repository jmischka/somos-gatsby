import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import styled from 'styled-components';
import backgroundpattern from '../assets/Pattern_lg.jpg'

const SectionStyles = styled.section `
div.section-container {
  z-index: 3;
}

.somos-branding {
  display: block;
  position: absolute;
  margin: 0 0 0 0;
  left: 0;
  bottom: 0;
  width: calc((100% / 12) * 4);
  height: auto;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

.somos-branding img {
  position: relative;
  margin: 0 0 0 0;
  width: 100%;
  height: auto;
}

div.section-textbox {
  position: absolute;
  margin: 0 0 0 0;
  left: calc((100%/12) * 1);
  top: 50%;
  width: calc((100%/12) * 7.5);
  padding: 0 25px 0 0;
  transform: translateY(-50%);

  @media screen and (max-width: 1024px) {
    width: calc((100%/12) * 10);
    padding: 0 0 0 0;
  }
}

p {
  display: inline;
  margin: 0 0 0 0;
  font-size: 7em;
  font-weight: 300;
  line-height: 1.1;
  letter-spacing: -1px;

  @media screen and (max-width: 1024px) {
    font-size: 6em;
  }

  @media screen and (max-width: 700px) {
    font-size: 4em;
  }
}

span {
  font-weight: 700;
  letter-spacing: -2px;
}

div.section-imagebox {
  position: absolute;
  display: block;
  margin: 0 0 0 0;
  left: calc((100% / 12) * 8.5);
  top: 50%;
  width: calc((100% / 12) * 3.5);
  transform: translateY(-50%);

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: row;
    left: calc((100% / 12) * 1);
    top: auto;
    bottom: 0;
    width: calc((100% / 12) * 10);
    transform: translateY(0);
  }
}

div.section-imagebox div:nth-child(1),
div.section-imagebox div:nth-child(3) {
  position: relative;
  display: block;
  margin: 0 0 0 0;
  width: 50%;
  height: 0;
  padding-bottom: 50%;

  @media screen and (max-width: 1024px) {
    display: inline-block;
    width: 33.333%;
    padding-bottom: 33.333%;
  }
}

div.section-imagebox div:nth-child(2) {
  position: relative;
  display: block;
  margin: 0 0 0 50%;
  width: 50%;
  height: 0;
  padding-bottom: 50%;

  @media screen and (max-width: 1024px) {
    display: inline-block;
    margin: 0 0 0 0;
    width: 33.333%;
    padding-bottom: 33.333%;
  }
}
`

export default function Intro() {
  const data = useStaticQuery(graphql `
    query IntroQuery {
      allSanityFrontpageSection {
        nodes {
          frontpageTitle
          frontpageIntroduction {
            _rawChildren
          }
          frontpageImages {
            asset {
              fluid(maxWidth: 700) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  `)
  
  return (
    <SectionStyles>
      <div className="section-container">
        <h1 className="sr-only">{data.allSanityFrontpageSection.nodes[0].frontpageTitle}</h1>
        <figure className="somos-branding">
          <img alt="Somos branding" src={backgroundpattern} />
        </figure>
        <div className="section-textbox">
          <p><span>{data.allSanityFrontpageSection.nodes[0].frontpageIntroduction[0]._rawChildren[0].text}</span> {data.allSanityFrontpageSection.nodes[0].frontpageIntroduction[0]._rawChildren[1].text}</p>
        </div>
        <div className="section-imagebox">
          <Img fluid={data.allSanityFrontpageSection.nodes[0].frontpageImages[1].asset.fluid} />
          <Img fluid={data.allSanityFrontpageSection.nodes[0].frontpageImages[0].asset.fluid} />
          <Img fluid={data.allSanityFrontpageSection.nodes[0].frontpageImages[2].asset.fluid} />
        </div>
      </div>
    </SectionStyles>
  ) 
}