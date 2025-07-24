"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Drive Checkr</h1>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <a href="#services">Services</a>
          <a href="#faq">FAQs</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}
