import Link from 'next/link'

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0084D1] to-[#009345] bg-clip-text text-transparent mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">Packers & Movers / Cargo Services</p>
          <p className="text-sm text-gray-500 mt-2">Last Updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Service Confirmation</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All bookings are considered final only after confirmation through call/WhatsApp by our team.</li>
                <li>No service will be scheduled without confirmation.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Pricing & Charges</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Prices depend on vehicle type, distance, volume of goods, and pickup/drop location.</li>
                <li>Additional charges may apply if there is no lift, extra luggage, or last-minute changes.</li>
                <li>Toll, parking and border taxes are to be paid by the customer.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Payment Terms</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>An advance payment is required to confirm the booking.</li>
                <li>The remaining amount must be paid at the time of delivery or upon completion of the service.</li>
                <li>We accept payments via UPI, bank transfer, and cash.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Goods Safety & Liability</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Our team packs and handles goods professionally with full care.</li>
                <li>We are not responsible for damage caused due to improper packing provided by the customer or pre-damaged items.</li>
                <li>The company is not liable for delays or damages due to natural calamities, accidents, or uncontrolled situations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Cancellation Policy</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Advance payment is non-refundable if cancellation is made less than 24 hours before the scheduled time.</li>
                <li>Full charges apply for same-day cancellations.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Delay & Rescheduling</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Delivery time may vary due to traffic, weather, or route issues.</li>
                <li>Rescheduling is subject to available slots.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Prohibited Items</h2>
              <p className="text-gray-600 mb-3">We do not transport the following items:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Hazardous chemicals</li>
                <li>Flammable items</li>
                <li>Illegal goods</li>
                <li>Jewellery or highly valuable personal items</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Website Usage Terms</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>All prices shown on the website are estimated and subject to change.</li>
                <li>By using our website, you agree to our Terms & Conditions and Privacy Policy.</li>
                <li>The company reserves the right to modify these terms at any time.</li>
              </ul>
            </section>

            <div className="bg-blue-50 border-l-4 border-[#0084D1] p-6 mt-8">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-[#0084D1]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-[#0084D1]">Important Notice</h3>
                  <div className="mt-2 text-sm text-gray-700">
                    <p>By booking our services, you acknowledge that you have read, understood, and agree to these Terms & Conditions. If you have any questions or concerns, please contact us before proceeding with your booking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <Link href="/" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0084D1] to-[#009345] text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
