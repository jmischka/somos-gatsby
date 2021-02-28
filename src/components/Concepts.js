import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Pattern from '../assets/Patter_1817.png';
import styled from 'styled-components';

const SectionStyles = styled.section `
  div.section-container {
    z-index: 1;
    padding: 0 0 50px 0;
  }

  div.section-container .block {
    position: relative;
    width: calc((100%/12) * 5);
    height: auto;

    @media screen and (max-width: 1024px) {
      width: calc((100%/12) * 10);
    }
  }

  div.section-container .block:nth-child(2) {
    margin: 0 0 0 calc((100%/12) * 1);
    padding: 120px 50px 0 0;
  }

  div.section-container .block:nth-child(3) {
    margin: 0 0 0 0;
    padding: 120px 0 0 50px;

    @media screen and (max-width: 1024px) {
      margin: 0 0 0 calc((100%/12) * 1);
      width: calc((100%/12) * 10);
      padding: 50px 0 0 0;
    }
  }

  .gatsby-image-wrapper {
    display: block;
    position: relative;
    margin: 0 0 18px 0;
    width: 100%;
    height: 0;
    padding-bottom: 66.666%;
  }

  h3 {
    display: block;
    position: relative;
    margin: 0 0 9px 0;
    font-size: 2.4em;
    font-weight: 700;
    line-height: .8;
    text-transform: uppercase;
  }

  p {
    display: block;
    margin: 0 0 0 0;
    font-size: 1.8em;
    line-height: 1.3;
    font-weight: 300;
  }

  a {
    display: inline-block;
    margin: 16px 0 0 0;
    font-size: 1.6em;
    line-height: 1.3;
    font-weight: 700;
    text-transform: uppercase;
  }

  .pattern {
    position: absolute;
    left: 3%;
    top: 0;
    width: 20px;
    height: 100%;
    background-repeat: repeat-y;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
`
const backgroundStyle = {backgroundImage: 'url(' + Pattern + ')',};

export default function Concepts() {
  const data = useStaticQuery(graphql `
    query ConceptQuery {
      allSanityConceptSection {
        nodes {
          _type
          conceptTitle
          conceptImage {
            asset {
              fluid(maxWidth: 1500) {
                ...GatsbySanityImageFluid
              }
            }
          }
          conceptDescription {
            children {
              text
            }
          }
          conceptUrl
        }
      }
    }
  `)

  return (
    <SectionStyles>
      <div className="section-container">
      <h2 className="sr-only">{ data.allSanityConceptSection.nodes[0]._type }</h2>
        <div className="block">
          <Img fluid={data.allSanityConceptSection.nodes[0].conceptImage.asset.fluid} />
          <h3>{data.allSanityConceptSection.nodes[0].conceptTitle}</h3>
          <p>{data.allSanityConceptSection.nodes[0].conceptDescription[0].children[0].text}</p>
          <a target="_blank" rel="noreferrer" href={data.allSanityConceptSection.nodes[0].conceptUrl}>Discover More</a>
        </div>
        <div className="block">
          <Img fluid={data.allSanityConceptSection.nodes[1].conceptImage.asset.fluid} />
          <h3>{data.allSanityConceptSection.nodes[1].conceptTitle}</h3>
          <p>{data.allSanityConceptSection.nodes[1].conceptDescription[0].children[0].text}</p>
          <a target="_blank" rel="noreferrer" href={data.allSanityConceptSection.nodes[1].conceptUrl}>Discover More</a>
        </div>
        <div className="pattern" style={backgroundStyle}></div>
      </div>
    </SectionStyles>
  ) 
}
