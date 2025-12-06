'use client'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(0,132,209,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,147,69,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#0084D1] to-[#009345] bg-clip-text text-transparent">
                  Shree Pack
                </h3>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Your trusted partner for safe, secure, and timely transportation services across India.
                </p>
              </div>
              
              {/* Quick Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                <div className="flex flex-col space-y-2">
                  <Link 
                    href="/privacy-policy" 
                    className="text-gray-300 hover:text-[#0084D1] transition-colors duration-300 text-sm"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/t&c" 
                    className="text-gray-300 hover:text-[#0084D1] transition-colors duration-300 text-sm"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-semibold mb-6 text-white">Contact Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0084D1] to-[#009345] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+919953228020" className="text-white font-medium hover:text-[#0084D1] transition-colors">
                      +91 995-322-8020
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0084D1] to-[#009345] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:info@shreepackways.com" className="text-white font-medium hover:text-[#0084D1] transition-colors">
                      info@shreepackways.com
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#0084D1] to-[#009345] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Business Hours</p>
                    <p className="text-white font-medium">Mon - Fri : 08.00 - 17.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Information Section */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-4 text-white">Legal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-300">
                <div>
                  <span className="font-medium text-gray-200">GST:</span>
                  <span className="ml-2">06ABDCS1472K1Z8</span>
                </div>
                <div>
                  <span className="font-medium text-gray-200">PAN:</span>
                  <span className="ml-2">ABDCS1472K</span>
                </div>
                <div>
                  <span className="font-medium text-gray-200">TAN:</span>
                  <span className="ml-2">RTKS30644F</span>
                </div>
                <div>
                  <span className="font-medium text-gray-200">CIN:</span>
                  <span className="ml-2">U60200HR2019PTC084381</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {currentYear} Shree Pack Ways. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 text-sm">Made with</span>
                <span className="text-red-500 animate-pulse">❤️</span>
                <span className="text-gray-400 text-sm">in India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
