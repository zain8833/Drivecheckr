// app/components/Form.jsx

"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Form() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        e.target,
        "your_user_id"
      )
      .then(
        () => setStatus("Message sent successfully!"),
        () => setStatus("Failed to send message.")
      );
    e.target.reset();
  };

  return (
    <form onSubmit={sendEmail} className="space-y-4 max-w-lg mx-auto">
      <input name="name" placeholder="Your Name" className="border p-2 w-full" required />
      <input name="text" placeholder="VIN Number" className="border p-2 w-full" required />
      <textarea name="message" placeholder="Your Message" className="border p-2 w-full" required />
      <button className="bg-blue-700 text-white px-4 py-2">Send</button>
      <p>{status}</p>
    </form>
  );
}
