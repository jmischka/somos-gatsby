import React from "react";
import 'normalize.css';
import SEO from "./SEO";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
        <SEO />
        <GlobalStyles />
        <Header />
        { children }
        <Footer />
    </div>
  ) 
}
