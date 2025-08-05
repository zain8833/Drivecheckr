'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Home() {
  const formRef = useRef(null);
  const [showPayment, setShowPayment] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_uvlb4sv',
        'template_j0iwhrm',
        formRef.current,
        'f-OZlQIt2bm7DnrmH'
      )
      .then(
        (result) => {
          alert('Email sent successfully!');
          console.log('Success:', result.text);
          e.target.reset();
          setShowPayment(true); // Show payment button
        },
        (error) => {
          alert('Email sending failed.');
          console.error('Failed:', error.text);
        }
      );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Section */}
          <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
              <h2 className="text-xl font-bold mb-4">Fill The Form To Proceed.....</h2>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
               <input
  name="full_name"
  type="text"
  placeholder="Full Name"
  required
  className="w-full p-3 border rounded"
/>
<input
  name="email"
  type="email"
  placeholder="Email Address"
  required
  className="w-full p-3 border rounded"
/>
<input
  name="phone"
  type="tel"
  placeholder="Phone Number"
  required
  className="w-full p-3 border rounded"
/>
<input
  name="vin"
  type="text"
  placeholder="VIN / Registration"
  required
  className="w-full p-3 border rounded"
/>
<input
  name="address"
  type="text"
  placeholder="Address"
  required
  className="w-full p-3 border rounded"
/>
<input
  name="zip"
  type="text"
  placeholder="Zip Code"
  required
  className="w-full p-3 border rounded"
/>

<select
  name="country"
  required
  className="w-full p-3 border rounded bg-white text-gray-700"
>
  <option value="">Select Country</option>
  {[
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas",
    "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin",
    "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei",
    "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon",
    "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia",
    "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba",
    "Cyprus", "Czech Republic", "Democratic Republic of the Congo", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)",
    "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany",
    "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia",
    "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru",
    "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
    "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan",
    "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga",
    "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda",
    "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay",
    "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen",
    "Zambia", "Zimbabwe"
  ].map((country) => (
    <option key={country} value={country}>
      {country}
    </option>
  ))}
</select>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                  Get Report
                </button>
              </form>

              {/* 🎯 Pioneer Payment Button (Shown after email sent) */}
              {showPayment && (
                <div className="mt-6 text-center">
                  <a
                    href="https://www.paypal.com/ncp/payment/WZA8UH8UZ75LQ" // 🔁 Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-red-600 text-white px-6 py-2 rounded hover:bg-redx-700"
                  >
                    Proceed to Payment
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Right Section remains unchanged */}
          <div className="md:w-2/5">
            <div className="bg-white p-6 border rounded">
              <h3 className="text-lg mb-4">With Drive Checkr you may get</h3>

              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {[
                  'Mileage check',
                  'Road Tax History',
                  'Technical Specs',
                  'NCT/CRW/MOT History',
                  'Stolen Vehicle Check',
                  'Previous Usage Check',
                  'Vehical Valuation',
                  'Owner History',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-green-600 mr-1">✔</span>
                    <span className="text-sm">{item}</span>
                  </div>
                ))}

                <div className="border w-100 rounded-2xl">
                  <div className="flex items-center mb-4 mt-4 ml-4">
                    {/* <input type="checkbox" id="checkbox" className="mr-2 h-5 w-5" /> */}
                    {/* <label htmlFor="checkbox" className="font-medium">Check Report</label> */}
                  </div>

                  <div className="mb-2 mt-4 ml-4">
                    <span className="text-2xl font-bold">$39.99</span>
                    <span className="text-1xl font-bold"> report</span>
                  </div>

                  <div className="text-sm mb-1 mt-2 ml-4">
                    You pay $39.99 <span className="line-through">$50.00</span>
                  </div>

                  <div className="bg-red-300 text-red-700 w-16 text-center py-1 mb-4 mt-2 ml-4 rounded">
                    -31.77%
                  </div>

                  <div className="border-t pt-4 flex items-center text-sm text-gray-600">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-1 ml-4 mb-3">✔</span>
                      <div className="mb-3 ml-2">You'll get report</div>
                    </div>
                    <div className="ml-auto bg-gray-200 rounded-full h-5 w-5 mb-3 mr-3 flex items-center justify-center text-gray-400">
                      i
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="mt-4 flex justify-center">
              <button className="bg-red-400 hover:bg-red-500 text-black px-6 py-2 rounded font-medium">
                Get Report
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
