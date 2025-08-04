"use client";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
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
      {/* <Navbar /> */}

      {/* Hero Section */}
     <section
  className="bg-cover bg-center text-white py-32 px-9 text-center"
  style={{ backgroundImage: "url('/bg2.jpg')" }} // Replace with your actual image path
>
  <div className="bg-black/70 bg-opacity-50 p-9 rounded-lg max-w-2xl mx-auto">
    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Professional Vehicle Inspection Services
    </h1>
    <p className="text-lg mb-7">
      Get a detailed and certified vehicle check with just a few clicks.
    </p>
    <form
      onSubmit={handleEmailSubmit}
      className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto"
    >
      <input
        type="text"
        name="email"
        required
        placeholder="Enter VIN number"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-3 rounded border-1 text-white w-full md:w-2/3"
      />
      <button
        type="submit"
        className="bg-white text-blue-700 font-bold px-7 py-4 rounded hover:bg-blue-100 transition"
      >
        Start Now
      </button>
    </form>
  </div>
</section>
<section className="py-12 bg-white">
  <h2 className="text-3xl font-bold text-center mb-10">Discover What's Included in Your Vehicle Record</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16">
    
    {/* Box 1 */}
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
      <img src="/path-to-icons/insight.png" alt="Vehicle Insight" className="mx-auto mb-4 h-16" />
      <h3 className="text-xl font-semibold mb-2">Vehicle Insight & History</h3>
      <p className="text-gray-700">
        Discover the full story of your vehicle with a comprehensive VIN Check report. Get detailed information about the car’s specifications, including its make, model, year, body style, color, and country of assembly. Dive into its history with records on odometer readings, smog checks, fuel type, and engine size.
      </p>
    </div>

    {/* Box 2 */}
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
      <img src="/path-to-icons/repair.png" alt="Accident Records" className="mx-auto mb-4 h-16" />
      <h3 className="text-xl font-semibold mb-2">Accident & Repair Records</h3>
      <p className="text-gray-700">
        Uncover the past of any vehicle with our VIN lookup tool. Access detailed reports on accidents, major repairs, and service history. Stay informed with data on manufacturer recalls, lien records, salvage information, and more, ensuring you're aware of any potential red flags.
      </p>
    </div>

    {/* Box 3 */}
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
      <img src="/path-to-icons/fraud.png" alt="Ownership Protection" className="mx-auto mb-4 h-16" />
      <h3 className="text-xl font-semibold mb-2">Ownership & Fraud Protection</h3>
      <p className="text-gray-700">
        Safeguard your investment with a deep dive into the vehicle’s title records and ownership history. Learn about previous owners, registration details, mileage records, and any branded title alerts. Plus, ensure peace of mind with theft and fraud detection checks.
      </p>
    </div>

  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Our Inspection Packages</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
          <div className="bg-gray-100 shadow hover:shadow-lg p-8 rounded-lg w-full md:w-1/3 transition">
            <h3 className="text-xl font-semibold mb-2">🚗 Basic Inspection</h3>
            <ul className="text-left text-sm space-y-3 text-black">
                  {[
                    "Vehicle Overview",
                    "Market Value",
                    "Vehicle Specifications",
                    "Sales Listing",
                    "Accident Record",
                    "Theft Record",
                    "Open Recalls",
                    "Impounds",
                    "HQ Car Images",
                    "Active & Expired Warranties",
                    "Installed Options and Packages"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <img
                        src="images/tick1.png"
                        alt="check"
                        className="w-5 h-5 mt-1"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
            <p className="text-lg font-bold mb-4">$39.99</p>
            <Link href="/payment">
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">Book Now</button>
            </Link>
          </div>
          <div className="bg-gray-100 shadow hover:shadow-lg p-8 rounded-lg w-full md:w-1/3 transition">
            <h3 className="text-xl font-semibold mb-2">🔧 Full Diagnostic</h3>
             <ul className="text-left text-sm space-y-3 text-black">
                  {[
                     "Vehicle Specifications",
                    "Market Value",
                    "Accident Record",
                    "Salvage",
                    "Theft Record",
                    "Vehicle Overview",
                    "Impounds",
                    "Open Recalls",
                    "Exports",
                    "Sales Listing",
                    "Active & Expired Warranties",
                    "Installed Options and Packages",
                    "Title Record",
                    "Title Brand" 
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <img
                        src="images/tick1.png"
                        alt="check"
                        className="w-5 h-5 mt-1"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
            <p className="text-lg font-bold mb-4">$59.99</p>
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

      {/* <Footer /> */}
    </div>
  );
}
