"use client";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Form from "./components/Form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  

  return (
    
    <div>
      <div>
        
      </div>
      {/* <Navbar /> */}

      {/* Hero Section */}


      {/* Services Section */}
      
      {/* FAQ Section */}
      

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">📬 Contact Us</h2>
        <p className="text-gray-600 mb-6">We're here to help! Fill out the form below for any queries or appointment requests.</p>
        <Form />
      </section>

      {/* <Footer /> */}
    </div>
  );
}
