import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';

const SectionStyles = styled.section `
div.section-container {
  z-index: 0;
  padding: 0 0 25px 0;
}

h4 {
  position: relative;
  margin: 0 0 0 calc((100%/12) * 1);
  width: calc((100%/12) * 10);
  height: auto;
  font-size: 8em;
  font-weight: 700;
  line-height: .8;
  letter-spacing: -2px;
  padding: 120px 0 0 0;
  color: white;
}

.section-textbox {
  position: relative; 
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 50px 0 0 0;
  width: 100%;
  height: auto;
}

div.section-textbox div {
  position: relative;
  height: auto;
}

div.section-textbox div:nth-child(1) {
  margin: 0 0 0 calc((100%/12) * 1);
  width: calc((100%/12) * 3);
  padding: 25px 25px 25px 0;

  @media screen and (max-width: 1024px) {
    width: calc((100%/12) * 10);
    padding: 25px 0 0 0;
  }
}

div.section-textbox div:nth-child(2) {
  margin: 0 0 0 0;
  width: calc((100%/12) * 7);
  padding: 25px 0 25px 25px;

  @media screen and (max-width: 1024px) {
    margin: 0 0 0 calc((100%/12) * 1);
    width: calc((100%/12) * 10);
    padding: 50px 0 50px 0;
  }
}

div.section-textbox span {
  position: relative;
  display: block;
  font-size: 2em;
  font-weight: 300;
  line-height: 1.25;
  color: white;
}

div.section-textbox span:nth-child(1) {
  font-weight: 700;
}

figure {
  position: relative;
  display: block;
  margin: 50px 0 0 0;
  width: 100%;
  height: 0;
  padding-bottom: 100%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

label {
  font-size: 1.4em;
  font-weight: 700;
  line-height; 1.3;
  color: white;
}

input,
textarea {
  margin: 12px 0 25px 0;
  width: 100%;
  height: auto;
  font-size 2em;
  line-height: 1;
  border: none;
  outline: none;
  padding: 6px;
  color: #262626;
} 

button {
  position: relative;
  margin: 0 0 0 0;
  padding: 12px 16px;
  font-size: 1.4em;
  font-weight: 700;
  line-height: 1;
  outline: none;
  border: 1px dotted white;
  background-color: transparent;
  transition-duration: .3s;
  cursor: pointer;
  color: white;
}

button:hover {
  background-color: #F15D22;
  border: none;
}
`

export default function Contact() {
  const data = useStaticQuery(graphql `
    query ContactQuery {
      allSanityContactSection {
        nodes {
          _type
          contactName
          contactInformationA
          contactInformationB       
        }
      }
    }
  `)
  
  return (
    <SectionStyles>
      <div className="section-container dark-theme">
        <h2 className="sr-only">{ data.allSanityContactSection.nodes[0]._type }</h2>
        <h4>Contact Somos</h4>
        <div className="section-textbox">
          <div>
            <span>{data.allSanityContactSection.nodes[0].contactName}</span>
            <span>{data.allSanityContactSection.nodes[0].contactInformationA}</span>
            <span>{data.allSanityContactSection.nodes[0].contactInformationB}</span>
            <figure></figure>
          </div>
          <div>
            <form>            
              <label htmlFor="name">
                Name:
                <input id="name" name="name" required="" type="text" />
              </label>

              <label htmlFor="email">
                Email:
                <input id="email" name="email" required="" type="text" />
              </label>

              <label htmlFor="message">
                Message:
                <textarea rows="8" name="textarea" id="textarea" type="textarea" />
              </label>

              <button aria-label="submit" type="submit">Get In Touch</button>
            </form>
          </div>
        </div>
      </div>
    </SectionStyles>
  ) 
}
