import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Team from "../components/Team";
import Concepts from "../components/Concepts";
import Contact from "../components/Contact";


export default function Home() {
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  function handleScroll(e) {
    let distanceScrolled = window.pageYOffset;
    const sections = Array.from(document.getElementsByTagName('SECTION'));
    sections.forEach((section, index) => {
      if (!section.classList.contains('scrolled') && distanceScrolled > section.offsetTop) {
        section.firstElementChild.style.position = 'relative';
        section.classList.add('scrolled');
      } else if (section.classList.contains('scrolled') && distanceScrolled < section.offsetTop) {
        section.firstElementChild.style.position = 'fixed';
        section.classList.remove('scrolled');
      }
    });
  };
  
  return (
    <Layout>
      <Intro />
      <Team />
      <Concepts />
      <Contact />
    </Layout>
  ) 
}