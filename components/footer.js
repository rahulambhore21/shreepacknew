'use client'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Car Transportation', href: '#services' },
    { name: 'Logistics Solutions', href: '#services' },
    { name: 'Express Delivery', href: '#services' },
    { name: 'Warehouse Storage', href: '#services' },
    { name: 'Freight Services', href: '#services' },
    { name: 'Moving Services', href: '#services' }
  ]

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Track Package', href: '#track' },
    { name: 'Get Quote', href: '#quote' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Terms & Conditions', href: '#terms' }
  ]

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://facebook.com/shreepack',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://instagram.com/shreepack',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.151 14.81 3.662 13.659 3.662 12.362c0-1.297.49-2.448 1.297-3.323.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.875.875 1.297 2.026 1.297 3.323 0 1.297-.422 2.551-1.297 3.323-.875.875-2.026 1.365-3.323 1.365zm7.83 0c-1.297 0-2.448-.49-3.323-1.297-.875-.772-1.297-2.026-1.297-3.323 0-1.297.422-2.448 1.297-3.323.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.875.875 1.297 2.026 1.297 3.323 0 1.297-.422 2.551-1.297 3.323-.875.875-2.026 1.365-3.323 1.365z"/>
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/shreepack',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/shreepack',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ]

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#0084D1] to-[#009345] bg-clip-text text-transparent">
                  Shree Pack
                </h3>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  Your trusted partner for safe, secure, and timely transportation services. 
                  We handle your cargo with the utmost care and professionalism.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0084D1] to-[#009345] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0084D1] to-[#009345] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-medium">info@shreepack.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#0084D1] to-[#009345] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-medium leading-relaxed">
                      123 Transport Street,<br />
                      Logistics City, LC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="text-gray-300 hover:text-[#0084D1] transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#009345] rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-[#0084D1] transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-[#009345] rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">Stay Connected</h4>
              
              {/* Newsletter */}
              <div className="mb-6">
                <p className="text-gray-300 mb-4 text-sm">
                  Subscribe to get updates on our latest offers and services.
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0084D1] focus:border-transparent backdrop-blur-sm"
                  />
                  <button className="px-6 py-2 bg-gradient-to-r from-[#0084D1] to-[#009345] rounded-lg font-medium hover:from-[#0070B8] hover:to-[#007A3A] transition-all duration-300 transform hover:scale-105">
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-gray-300 mb-4 text-sm">Follow us on social media</p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-[#0084D1] hover:to-[#009345] transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </Link>
                  ))}
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
                © {currentYear} Shree Pack. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link href="#privacy" className="text-gray-400 hover:text-[#0084D1] transition-colors duration-300">
                  Privacy Policy
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#terms" className="text-gray-400 hover:text-[#0084D1] transition-colors duration-300">
                  Terms of Service
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="#cookies" className="text-gray-400 hover:text-[#0084D1] transition-colors duration-300">
                  Cookie Policy
                </Link>
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
