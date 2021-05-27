import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Pattern from '../assets/Patter_1817.png';
import styled from 'styled-components';

const SectionStyles = styled.section`
  div.section-container {
    z-index: 2;

    @media screen and (max-width: 1024px) {
      padding: 120px 0 50px 0;
    }
  }

  p {
    display: block;
    margin: 0 0 0 0;
    font-size: 1.8em;
    line-height: 1.4;
    font-weight: 300;

    @media screen and (max-width: 1024px) {
      display: inline;
    }
  }

  span {
    font-size: 3.2em;
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
    margin: 16px 0 0 0;
    font-size: 1.6em;
    line-height: 1.3;
    font-weight: 700;
    text-transform: uppercase;

    @media screen and (max-width: 700px) {
      margin: 16px 0 0 0;
    }
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

  const JuanSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    width: 100%;
    height: auto;

    .gatsby-image-wrapper {
      position: relative;
      margin: 0 0 0 0;
      width: calc((100% / 12) * 6);
      height: 100vh;
      order: 2;
      padding: 0 0 0 0;
  
      @media screen and (max-width: 1024px) {
        margin: 0 0 0 calc((100% / 12) * 1);
        width: calc((100% / 12) * 10);
        height: auto;
        order: 1;
      }
    }

    .section-textbox {
      position: relative;
      margin: 0 0 0 calc((100% / 12) * 1);
      width: calc((100% / 12) * 5);
      order: 1;
      padding: 120px 50px 0 0;
  
      @media screen and (max-width: 1024px) {
        margin: 0 0 0 calc((100% / 12) * 1);
        width: calc((100% / 12) * 10);
        order: 2;
        padding: 25px 0 0 0;
      }
    }
  `

  const LeahSection = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    width: 100%;
    height: auto;
    
    .gatsby-image-wrapper {
      position: relative;
      margin: 0 0 0 calc((100% / 12) * 1);
      width: calc((100% / 12) * 5);
      height: 100vh;
      padding: 0 25px 0 0;

      @media screen and (max-width: 1024px) {
        margin: 50px 0 0 calc((100% / 12) * 1);
        width: calc((100% / 12) * 10);
        height: auto;
      }
    }

    .section-textbox {
      position: relative;
      margin: 0 0 0 0;
      width: calc((100% / 12) * 5);
      padding: 120px 0 0 50px;

      @media screen and (max-width: 1024px) {
        margin: 0 0 0 calc((100% / 12) * 1);
        width: calc((100% / 12) * 10);
        padding: 25px 0 0 0;
      }
    }
  `
const backgroundStyle = {backgroundImage: 'url(' + Pattern + ')',};

export default function Team() {
  const data = useStaticQuery(graphql`
    query TeamQuery {
      juan:allSanityTeamSection(filter: {id: {eq: "-9bfb46ef-ef70-56b1-88f3-2b6065f71168"}}) {
        nodes {
          id
          _type
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
          teamMemberName
          teamMemberUrl
        }
      }
      leah:allSanityTeamSection(filter: {id: {eq: "-4e506adc-7c4c-5c3c-b814-6bc28c7208c1"}}) {
        nodes {
          id
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
          teamMemberName
          teamMemberUrl
        }
      }
    }
  `)
  return (
    <SectionStyles>
      <div className="section-container">
        <JuanSection>
          <h2 className="sr-only">{ data.juan.nodes[0]._type }</h2>
          <Img fluid={data.juan.nodes[0].teamMemberImage.asset.fluid} alt={data.juan.nodes[0].teamMemberName} />
          <div className="section-textbox">
            <p><span>{data.juan.nodes[0].teamMemberBio[0].children[0].text}</span> {data.juan.nodes[0].teamMemberBio[0].children[1].text}</p>
            <a target="blank" href={data.juan.nodes[0].teamMemberUrl}>Discover More</a>
          </div>
        </JuanSection> 

        <LeahSection>
          <h2 className="sr-only">{ data.leah.nodes[0]._type }</h2>
          <Img fluid={data.leah.nodes[0].teamMemberImage.asset.fluid} alt={data.leah.nodes[0].teamMemberName} />
          <div className="section-textbox">
            <p><span>{data.leah.nodes[0].teamMemberBio[0].children[0].text}</span> {data.leah.nodes[0].teamMemberBio[0].children[1].text}</p>
            <a target="blank" href={data.leah.nodes[0].teamMemberUrl}>Discover More</a>
          </div>
        </LeahSection>    
        <div className="pattern" style={backgroundStyle}></div>
      </div>
    </SectionStyles>
  ) 
}