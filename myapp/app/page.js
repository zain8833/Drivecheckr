"use client";
import Hero from "./components/Hero";
// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Faq from "./components/Faq";
import Content from "./components/Content";
import React from "react";
import Packages from "./components/packages";


export default function Home() {
  

  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Packages/>
      <Faq/>
      <Content/>
      {/* <Footer/> */}
    </div>
   
  );
}
