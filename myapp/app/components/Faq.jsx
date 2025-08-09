import React from 'react'

function Faq() {
  return (
    <div>
      <section id="faq" className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto text-left space-y-6">
          <div>
            <h4 className="font-semibold text-lg">⏱ How long does an inspection take?</h4>
            <p className="text-gray-700">Usually Basic Ones take 3 to 4 Hours and Full Diagnostic takes 1 to 2 Hours.</p>
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
    </div>
    
  )
}

export default Faq