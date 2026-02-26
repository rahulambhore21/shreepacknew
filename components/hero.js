'use client'

import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/truckst.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo */}
      <div className="absolute top-8 left-8 z-20">
        <Image
          src="/img/logoname.webp" // Replace with your logo file path
          alt="Company Logo"
          width={150}
          height={60}
          className="h-auto"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-12 items-center justify-between min-h-screen py-20">
          
          {/* Left Side - Packers & Movers Content */}
          <div className="text-white space-y-6 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Reliable <span className="text-[#BB3212]">Packers & Movers</span>
            </h1>
            <h2 className="text-xl lg:text-2xl font-semibold text-gray-200">
              Safe Household Shifting & Relocation
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Safe household shifting, office relocation with 100% damage protection and on-time delivery guarantee. Professional packing and careful handling.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#BB3212] rounded-full"></div>
                <span className="text-gray-200">10+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#BB3212] rounded-full"></div>
                <span className="text-gray-200">5000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#BB3212] rounded-full"></div>
                <span className="text-gray-200">Insured & Verified Staff</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#BB3212] rounded-full"></div>
                <span className="text-gray-200">No Hidden Charges</span>
              </div>
            </div>

           
          </div>

          {/* Right Side - Contact Form */}
        <div className="flex justify-center lg:justify-end">
          <ContactForm />

        </div>
        </div>
      </div>
    </section>
  );
}
