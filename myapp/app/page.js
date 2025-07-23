import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />

      <section className="bg-gray-100 text-center py-20">
        <h2 className="text-4xl font-bold">Reliable Vehicle Inspections</h2>
        <p className="mt-4 text-lg">Certified reports and trusted professionals.</p>
      </section>

      <section id="services" className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">Our Packages</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="border p-6 w-full md:w-1/3 shadow">
            <h4 className="text-xl font-bold">Basic Inspection</h4>
            <p className="my-2">Engine, brakes, lights & more.</p>
            <p className="font-semibold">$49.99</p>
            <Link href="/payment">
              <button className="bg-blue-600 text-white px-4 py-2 mt-4">Book Now</button>
            </Link>
          </div>
          <div className="border p-6 w-full md:w-1/3 shadow">
            <h4 className="text-xl font-bold">Full Diagnostic</h4>
            <p className="my-2">All basic + transmission & emissions.</p>
            <p className="font-semibold">$89.99</p>
            <Link href="/payment">
              <button className="bg-blue-600 text-white px-4 py-2 mt-4">Book Now</button>
            </Link>
          </div>
        </div>
      </section>

      <section id="faq" className="bg-gray-50 py-16 px-6 text-center">
        <h3 className="text-3xl font-bold mb-6">FAQs</h3>
        <div className="max-w-3xl mx-auto space-y-4 text-left">
          <div>
            <h4 className="font-semibold">How long does an inspection take?</h4>
            <p>Typically around 45–60 minutes depending on vehicle type.</p>
          </div>
          <div>
            <h4 className="font-semibold">Do you offer mobile inspections?</h4>
            <p>Yes, we offer mobile services within select areas.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white text-center">
        <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
        <Form />
      </section>

      <Footer />
    </div>
  );
}
