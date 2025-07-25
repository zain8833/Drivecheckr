"use client";
import { useState } from "react";
import emailjs from "emailjs-com";


export default function PaymentPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        e.target,
        "your_user_id"
      )
      .then(
        (result) => setStatus("Payment form submitted successfully!"),
        (error) => setStatus("There was an error submitting the form.")
      );
    e.target.reset();
  };

  return (
    
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
       
      <h2 className="text-2xl font-bold mb-6">Payment Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <input name="name" placeholder="Full Name" className="border p-2 w-full" required />
        <input name="VIN number" placeholder="VIN Number" className="border p-2 w-full" required />
        <input name="package" placeholder="Selected Package" className="border p-2 w-full" required />
        <input name="card" placeholder="Card Info (demo)" className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 w-full">Submit Payment</button>
        <p>{status}</p>
      </form>
    </div>
  );
}
