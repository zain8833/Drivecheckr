import React from "react"
import Link from "next/link"

export default function ServicesPage() {
  return (
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
            <Link href="/paybacis">
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
            <Link href="/paypremium"> 
              <button className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800">Book Now</button>
            </Link>
            
          </div>
        </div>
      </section>
  );
}
