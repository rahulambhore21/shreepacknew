import Link from 'next/link'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0084D1] to-[#009345] bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">Packers & Movers / Cargo Services</p>
          <p className="text-sm text-gray-500 mt-2">Last Updated: December 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website and services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-700 mb-3">a. Personal Information</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Pickup and delivery address</li>
                <li>Any information you share while booking a service</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">b. Usage Data</h3>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited on our website</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-700 mb-3">c. Payment Information</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>UPI, bank transfer, or other transaction details (We DO NOT store card details.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-600 mb-3">We use your information for:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Processing and confirming your bookings</li>
                <li>Providing pickup, delivery and customer support</li>
                <li>Sending booking updates via call/SMS/WhatsApp/email</li>
                <li>Improving our website and services</li>
                <li>Preventing fraud and ensuring service security</li>
                <li>Complying with legal requirements whenever needed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Sharing of Information</h2>
              <p className="text-gray-600 mb-3">We do not sell or trade your personal data.</p>
              <p className="text-gray-600 mb-3">We may share your information only with:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Verified service partners to complete your booking</li>
                <li>Payment service providers for secure transactions</li>
                <li>Authorities, if legally required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Data Storage & Protection</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Your information is stored securely with restricted access.</li>
                <li>We use industry-standard security measures to protect your data.</li>
                <li>No online transmission is 100% secure, so we cannot guarantee absolute security.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies & Tracking</h2>
              <p className="text-gray-600 mb-3">Our website may use cookies to:</p>
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                <li>Improve your browsing experience</li>
                <li>Analyze website performance</li>
                <li>Remember user preferences</li>
              </ul>
              <p className="text-gray-600">You may disable cookies in your browser settings.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Rights</h2>
              <p className="text-gray-600 mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Request a copy of your information</li>
                <li>Ask us to update or correct your data</li>
                <li>Request deletion of your personal information (unless required for service or legal reasons)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. External Links</h2>
              <p className="text-gray-600">
                Our website may contain links to third-party websites. We are not responsible for their content or privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-600">
                We may update this Privacy Policy at any time. The latest version will always be available on our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
              <p className="text-gray-600 mb-3">If you have any questions, contact us at:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> <a href="mailto:info@shreepackways.com" className="text-[#0084D1] hover:underline">info@shreepackways.com</a>
                </p>
                <p className="text-gray-600">
                  <strong>Phone:</strong> <a href="tel:+919953228020" className="text-[#0084D1] hover:underline">+91 995-322-8020</a>
                </p>
              </div>
            </section>
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

export default PrivacyPolicy

