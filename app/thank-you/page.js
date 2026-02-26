'use client'

import Link from 'next/link'
import { Suspense } from 'react'

function ThankYouContent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Animation */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto bg-gradient-to-r from-[#0084D1] to-[#009345] rounded-full flex items-center justify-center shadow-2xl animate-pulse">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-[#009345] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-4 left-8 w-2 h-2 bg-[#0084D1] rounded-full animate-ping opacity-60"></div>
            <div className="absolute top-12 right-6 w-1 h-1 bg-[#009345] rounded-full animate-pulse opacity-80"></div>
            <div className="absolute bottom-8 left-12 w-1 h-1 bg-[#0084D1] rounded-full animate-bounce opacity-60"></div>
            <div className="absolute bottom-4 right-8 w-2 h-2 bg-[#009345] rounded-full animate-ping opacity-70"></div>
          </div>
        </div>

        {/* Thank You Message */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Thank You! 🎉
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-6">
            Your quote request has been sent successfully
          </p>
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100 mb-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-[#0084D1] to-[#009345] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What happens next?</h3>
                <ul className="text-gray-600 space-y-2 text-sm lg:text-base">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#009345] rounded-full mr-3"></span>
                    Our team will review your request within 2-4 hours
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#009345] rounded-full mr-3"></span>
                    We&apos;ll contact you via phone/WhatsApp with a personalized quote
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#009345] rounded-full mr-3"></span>
                    Get your cargo moved safely and securely
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-[#BB3212]/10 to-black/10 rounded-2xl p-6 lg:p-8 mb-8 border border-white/30">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Need immediate assistance?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919810719930"
              className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-[#BB3212] font-medium px-6 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now</span>
            </a>
            <a 
              href="https://wa.me/919810719930?text=Hi! I just submitted a quote request and need assistance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-[#0084D1] to-[#009345] text-white font-medium rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Reference ID: #{Math.random().toString(36).substr(2, 8).toUpperCase()}
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Keep this reference for your records. Our team will mention this ID when contacting you.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0084D1]"></div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}