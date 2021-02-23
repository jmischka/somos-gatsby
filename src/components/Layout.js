import React from "react";
import 'normalize.css';
import GlobalStyles from "../styles/GlobalStyles";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
        <GlobalStyles />
        <Header />
        { children }
        <Footer />
    </div>
  ) 
}
