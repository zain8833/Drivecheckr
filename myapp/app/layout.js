// app/layout.jsx
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // or FooterNavbar if you're using that version

export const metadata = {
  title: "Vehicle Inspection",
  description: "Professional Vehicle Inspection Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
