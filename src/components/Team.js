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

  span {
    font-size: 4.8em;
    font-weight: 700;
    letter-spacing: -2px;
    line-height: .8;

    @media screen and (max-width: 1024px) {
      display: inline;
      margin: 0 0 0 0;
      font-size: 2.3em;
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

  span.teammember {
    font-size: 1em;
    font-weight: 700;
    letter-spacing: 0;
  }
`
const backgroundStyle = {backgroundImage: 'url(' + Pattern + ')',};

export default function Team() {
  const data = useStaticQuery(graphql `
    query TeamQuery {
      allSanityTeamSection {
        edges {
          node {
            _type
            teamMemberName
            teamMemberBio {
              children {
                text
              }
            }
            teamMemberImage {
              asset {
                fixed(width: 100, height: 100) {
                  ...GatsbySanityImageFixed
                }
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
  console.log(data);  
  return (
    <SectionStyles>
      <div className="section-container">
        <h2 className="sr-only">{ data.allSanityTeamSection.edges[0].node._type }</h2>
        <Img fluid={data.allSanityTeamSection.edges[0].node.teamMemberImage.asset.fluid} />
        <div className="section-textbox">
          <p><span>{data.allSanityTeamSection.edges[0].node.teamMemberBio[0].children[0].text}</span> {data.allSanityTeamSection.edges[0].node.teamMemberBio[0].children[1].text}</p>
          <a target="blank" href={ data.allSanityTeamSection.edges[0].node.teamMemberUrl }>Discover More</a>
          
          <SubboxStyles>
            <Img fluid={data.allSanityTeamSection.edges[1].node.teamMemberImage.asset.fixed} />
            <p><span className="teammember">{ data.allSanityTeamSection.edges[1].node.teamMemberBio[0].children[0].text }</span> { data.allSanityTeamSection.edges[1].node.teamMemberBio[0].children[1].text }</p>
          </SubboxStyles>
        </div>
        <div className="pattern" style={backgroundStyle}></div>
      </div>
    </SectionStyles>
  ) 
}