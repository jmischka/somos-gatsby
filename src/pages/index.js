import React, { useEffect } from "react";
import Layout from "../components/Layout";
import Intro from "../components/Intro";
import Team from "../components/Team";
import Concepts from "../components/Concepts";
import Contact from "../components/Contact";
import useForm from "../utils/useForm";
import { navigate } from "gatsby-link";


export default function Home() {
  const [inputs, handleInputChange, resetForm] = useForm({name: '', email: '', message: ''});
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    let myForm = document.getElementById('contact-form');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => navigate("/success")).catch((error) => alert(error))
    resetForm();
  }
  
  return (
    <Layout>
      <Intro />
      <Team />
      <Concepts />
      <Contact name={inputs.name} email={inputs.email} message={inputs.message} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
    </Layout>
  ) 
}