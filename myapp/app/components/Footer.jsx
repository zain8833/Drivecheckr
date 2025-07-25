
import Link from "next/link";

export default function FooterNavbar() {
  return (
    <footer className="bg-blue-600 text-white text-center py-6">
      {/* Top links row */}
      <div className="flex flex-wrap justify-center space-x-6 text-sm mb-4">
        <Link href="/privacy" className="hover:underline">Privacy</Link>
        <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
        <Link href="/security" className="hover:underline">Security</Link>
        <Link href="/remove-data" className="hover:underline">Remove Your Data</Link>
        <Link href="/refund" className="hover:underline">Refund Policy</Link>
      </div>

      {/* Horizontal line */}
      <hr className="border-black mx-auto max-w-sm" />

      {/* Copyright */}
      <p className="text-sm mt-4 text-black">
        © 2025 Vehicles Inspectify. All Rights Reserved.
      </p>
    </footer>
  );
}
