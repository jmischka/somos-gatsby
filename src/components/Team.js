import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Pattern from '../assets/Patter_1817.png';
import styled from 'styled-components';

const SectionStyles = styled.section `
  div.section-container {
    z-index: 2;

    @media screen and (max-width: 1024px) {
      padding: 120px 0 0 0;
    }
  }

  .gatsby-image-wrapper {
    position: relative;
    margin: 0 0 0 0;
    width: calc((100% / 12) * 7);
    order: 2;
    padding: 0 0 0 25px;

    @media screen and (max-width: 1024px) {
      margin: 0 0 0 calc((100% / 12) * 1);
      width: calc((100% / 12) * 10);
      order: 1;
    }
  }

  .gatsby-image-wrapper:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(242,159,5,.3);
  }

  div.section-textbox {
    position: relative;
    margin: 0 0 0 calc((100% / 12) * 1);
    width: calc((100% / 12) * 4);
    order: 1;
    padding: 120px 25px 0 0;

    @media screen and (max-width: 1024px) {
      margin: 0 0 0 calc((100% / 12) * 1);
      width: calc((100% / 12) * 10);
      order: 2;
      padding: 25px 0 0 0;
    }
  }

  h2 {
    display: block;
    margin: 0 0 6px 0;
    position: relative;
    font-size: 8em;
    font-weight: 700;
    line-height: .8;
    letter-spacing: -2px;

    @media screen and (max-width: 1024px) {
      display: inline;
      margin: 0 0 0 0;
      font-size: 5em;
    }
  }

  p {
    display: block;
    margin: 0 0 0 0;
    font-size: 1.8em;
    line-height: 1.35;
    font-weight: 300;

    @media screen and (max-width: 1024px) {
      display: inline;
    }
  }

  a {
    display: block;
    margin: 16px 0 50px 0;
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

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
  `

  const SubboxStyles = styled.div `
  .gatsby-image-wrapper {
    position: relative;
    margin: 0 0 16px 0;
    width: 100px;
    height: 100px;
  }

  .gatsby-image-wrapper:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(217,82,4,.3);
  }

  p {
    display: block;
    margin: 0 0 0 0;
    font-size: 1.6em;
    line-height: 1.35;
    font-weight: 300;
    padding: 0 0 50px 0;
  }

  span {
    font-weight: 700;
  }
`
const backgroundStyle = {backgroundImage: 'url(' + Pattern + ')',};

export default function Team() {
  const data = useStaticQuery(graphql `
    query TeamQuery {
      allSanityTeamSection {
        edges {
          node {
            teamMemberName
            teamMemberBio {
              children {
                text
              }
            }
            teamMemberImage {
              asset {
                fluid(maxWidth: 2000) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            imageAltText
            teamMemberUrl
          }
        }
      }
    }
  `)

  return (
    <SectionStyles>
      <div className="section-container">
        <Img fluid={data.allSanityTeamSection.edges[0].node.teamMemberImage.asset.fluid} />
        <div className="section-textbox">
          <h2>{ data.allSanityTeamSection.edges[0].node.teamMemberBio[0].children[0].text }</h2>
          <p>{ data.allSanityTeamSection.edges[0].node.teamMemberBio[0].children[1].text }</p>
          <a target="blank" href={ data.allSanityTeamSection.edges[0].node.teamMemberUrl }>Discover More</a>
          
          <SubboxStyles>
            <Img fluid={data.allSanityTeamSection.edges[1].node.teamMemberImage.asset.fluid} />
            <p><span>{ data.allSanityTeamSection.edges[1].node.teamMemberBio[0].children[0].text }</span> { data.allSanityTeamSection.edges[1].node.teamMemberBio[0].children[1].text }</p>
          </SubboxStyles>
        </div>
        <div className="pattern" style={backgroundStyle}></div>
      </div>
    </SectionStyles>
  ) 
}