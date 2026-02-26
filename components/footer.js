'use client'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(187,50,18,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.3),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#BB3212] to-black bg-clip-text text-transparent">
                  Reliable Packers & Movers
                </h3>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Safe household shifting, office relocation & vehicle transport with 100% damage protection and on-time delivery guarantee.
                </p>
              </div>
              
              {/* Quick Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
                <div className="flex flex-col space-y-2">
                  <Link 
                    href="/privacy-policy" 
                    className="text-gray-300 hover:text-[#BB3212] transition-colors duration-300 text-sm"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    href="/t&c" 
                    className="text-gray-300 hover:text-[#BB3212] transition-colors duration-300 text-sm"
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
                  <div className="w-10 h-10 bg-gradient-to-r from-[#BB3212] to-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">24/7 Support</p>
                    <a href="tel:+919810719930" className="text-white font-medium hover:text-[#BB3212] transition-colors">
                      +91 98107 19930
                    </a>
                    <br />
                    <a href="tel:+919810831930" className="text-white font-medium hover:text-[#BB3212] transition-colors">
                      +91-9810831930
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#BB3212] to-black rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:reliablepackers1@gmail.com" className="text-white font-medium hover:text-[#BB3212] transition-colors">
                      reliablepackers1@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Addresses Section */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-white">Our Locations</h4>
                <div className="space-y-6">
                  {/* Head Office */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#BB3212] to-black rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Head Office:</p>
                      <p className="text-white text-sm">Plot No. 359, Pocket-C, Sector-3, Greater Noida West, DISTT. G.B NAGAR NOIDA 201306</p>
                    </div>
                  </div>

                  {/* Delhi Branch */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#BB3212] to-black rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Delhi Branch:</p>
                      <p className="text-white text-sm">J-1, Mohan Garden, Dwarka More, Metro Station, Delhi -110059</p>
                    </div>
                  </div>

                  {/* Registered Branch */}
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#BB3212] to-black rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm font-medium">Regd Branch:</p>
                      <p className="text-white text-sm">C-21/7, 1st Floor, Shivaji Park, Punjabi Bagh, New Delhi -110026</p>
                    </div>
                  </div>
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
                © {currentYear} Reliable Packers & Movers. All rights reserved.
              </div>
              
              <div className="text-gray-400 text-sm">
                Developed and marketed by{' '}
                <a 
                  href="https://admarktech.in" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#BB3212] hover:text-black transition-colors duration-300 font-medium"
                >
                  admarktech
                </a>
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
