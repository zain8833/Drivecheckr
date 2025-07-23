"use client";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    router.push("/payment"); // You can change to `/form` page if you build one separately
  };

  return (
    <div>
      <Navbar />

      {/* Hero Section */}
     <section
  className="bg-cover bg-center text-white py-32 px-6 text-center"
  style={{ backgroundImage: "url('/bg.jpg')" }} // Replace with your actual image path
>
  <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl mx-auto">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Professional Vehicle Inspection Services
    </h1>
    <p className="text-lg mb-6">
      Get a detailed and certified vehicle check with just a few clicks.
    </p>
    <form
      onSubmit={handleEmailSubmit}
      className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email to get started"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded text-black w-full md:w-2/3"
      />
      <button
        type="submit"
        className="bg-white text-blue-700 font-bold px-6 py-3 rounded hover:bg-blue-100 transition"
      >
        Start Now
      </button>
    </form>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Inspection Packages</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          <div className="bg-gray-100 shadow hover:shadow-lg p-8 rounded-lg w-full md:w-1/3 transition">
            <h3 className="text-xl font-semibold mb-2">🚗 Basic Inspection</h3>
            <p className="mb-4 text-gray-700">Covers engine, lights, brakes, and essential safety checks.</p>
            <p className="text-lg font-bold mb-4">$49.99</p>
            <Link href="/payment">
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">Book Now</button>
            </Link>
          </div>
          <div className="bg-gray-100 shadow hover:shadow-lg p-8 rounded-lg w-full md:w-1/3 transition">
            <h3 className="text-xl font-semibold mb-2">🔧 Full Diagnostic</h3>
            <p className="mb-4 text-gray-700">Includes everything in Basic + transmission & emissions check.</p>
            <p className="text-lg font-bold mb-4">$89.99</p>
            <Link href="/payment">
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">Book Now</button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <div>
            <h4 className="font-semibold text-lg">⏱ How long does an inspection take?</h4>
            <p className="text-gray-700">Usually 45–60 minutes depending on the type of vehicle.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">🛻 Do you provide mobile inspections?</h4>
            <p className="text-gray-700">Yes, we offer mobile services in select areas. Contact us to confirm availability.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg">📄 Will I get a report?</h4>
            <p className="text-gray-700">Absolutely. We provide a certified digital inspection report after every service.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">📬 Contact Us</h2>
        <p className="text-gray-600 mb-6">We're here to help! Fill out the form below for any queries or appointment requests.</p>
        <Form />
      </section>

      <Footer />
    </div>
  );
}
