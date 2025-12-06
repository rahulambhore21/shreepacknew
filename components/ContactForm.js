'use client'

import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromCity: '',
    toCity: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="relative bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/30 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-3xl before:pointer-events-none">
        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center drop-shadow-lg">
            Get Quote
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20"
                required
              />
            </div>
            
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20"
                required
              />
            </div>
            
            {/* Enhanced City Selection with Visual Flow */}
            <div className="relative bg-white/5 rounded-2xl p-3 lg:p-4 border border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                {/* From City */}
                <div className="flex-1 w-full">
                  <label className="block text-white/80 text-sm font-medium mb-2 pl-2">
                    📍 From
                  </label>
                  <input
                    type="text"
                    name="fromCity"
                    placeholder="From City"
                    value={formData.fromCity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20"
                    required
                  />
                </div>

                {/* Arrow Icon */}
                <div className="flex flex-col items-center justify-center px-2 pt-0 sm:pt-6">
                  <div className="bg-gradient-to-r from-[#0084D1] to-[#009345] p-2 rounded-full shadow-lg rotate-90 sm:rotate-0">
                    <svg 
                      className="w-4 h-4 lg:w-5 lg:h-5 text-white" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 8l4 4m0 0l-4 4m4-4H3" 
                      />
                    </svg>
                  </div>
                </div>

                {/* To City */}
                <div className="flex-1 w-full">
                  <label className="block text-white/80 text-sm font-medium mb-2 pl-2">
                    📍 To
                  </label>
                  <input
                    type="text"
                    name="toCity"
                    placeholder="To City"
                    value={formData.toCity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20"
                    required
                  />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                name="message"
                placeholder="Additional Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-sm border border-white/40 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20 resize-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="relative w-full bg-gradient-to-r from-[#0084D1] to-[#009345] hover:from-[#0070B8] hover:to-[#007A3A] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20 hover:border-white/40 overflow-hidden group"
            >
              <span className="relative z-10">Get Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;