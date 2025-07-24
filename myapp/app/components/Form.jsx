"use client";
import { useState } from "react";
// import emailjs from "emailjs-com";

const Form = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [loading, setLoading] = useState(false); // 🔄 loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: fullName,
      from_email: email,
      phone: phone,
      message: registrationNumber,
    };

    try {
      await emailjs.send(
        'service_xd6n37r',
        'template_cu7vlfe',
        templateParams,
        'k3B55Mf9wXRT4wOU2'
      );
      alert('Message sent successfully!');
      setFullName('');
      setEmail('');
      setPhone('');
      setRegistrationNumber('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <input name="name" placeholder="Your Name" className="border p-2 w-full" required />
      <input name="email" placeholder="Email" className="border p-2 w-full" required />
      <textarea name="message" placeholder="Your Message" className="border p-2 w-full" required />
      <button className="bg-blue-700 text-white px-4 py-2">Send</button>
      <p>{status}</p>
    </form>
  );
}
