'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

function ContactForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fromCity: '',
    toCity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return 'Name is required';
    if (name.trim().length < 2) return 'Name must be at least 2 characters';
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return 'Name can only contain letters and spaces';
    return '';
  };

  const validatePhone = (phone) => {
    if (!phone.trim()) return 'Phone number is required';
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) return 'Please enter a valid 10-digit Indian mobile number';
    return '';
  };

  const validateCity = (city, fieldName) => {
    if (!city.trim()) return `${fieldName} city is required`;
    if (city.trim().length < 2) return `${fieldName} city must be at least 2 characters`;
    if (!/^[a-zA-Z\s]+$/.test(city.trim())) return `${fieldName} city can only contain letters and spaces`;
    return '';
  };

  const validateForm = () => {
    const newErrors = {};
    
    newErrors.name = validateName(formData.name);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.fromCity = validateCity(formData.fromCity, 'From');
    newErrors.toCity = validateCity(formData.toCity, 'To');
    
    // Check if from and to cities are the same
    if (formData.fromCity.trim() && formData.toCity.trim() && 
        formData.fromCity.trim().toLowerCase() === formData.toCity.trim().toLowerCase()) {
      newErrors.toCity = 'Destination city must be different from origin city';
    }

    // Filter out empty error messages
    const filteredErrors = Object.fromEntries(
      Object.entries(newErrors).filter(([_, value]) => value !== '')
    );

    setErrors(filteredErrors);
    return Object.keys(filteredErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Real-time validation
    if (errors[name]) {
      const newErrors = { ...errors };
      switch (name) {
        case 'name':
          newErrors.name = validateName(value);
          break;
        case 'phone':
          newErrors.phone = validatePhone(value);
          break;
        case 'fromCity':
          newErrors.fromCity = validateCity(value, 'From');
          break;
        case 'toCity':
          newErrors.toCity = validateCity(value, 'To');
          break;
      }
      
      if (newErrors[name] === '') {
        delete newErrors[name];
      }
      
      setErrors(newErrors);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateForm()) {
      try {
        const response = await fetch('https://shreepackways-smtp.vercel.app/api/moving-quote', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});


        const data = await response.json();

        if (response.ok) {
          // Success - redirect to thank you page
          router.push('/thank-you');
        } else {
          // Error from API
          alert(`Failed to send quote request: ${data.error || 'Please try again later'}`);
        }
      } catch (error) {
        console.error('Submission error:', error);
        alert('Failed to send quote request. Please check your nternet connection and try again.');
      }
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-md mx-auto lg:ml-auto lg:w-150">
      <div className="relative bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-4 lg:p-8 shadow-2xl border border-white/30 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-2xl lg:before:rounded-3xl before:pointer-events-none">
        <div className="relative z-10">
          <h3 className="text-xl lg:text-2xl font-bold text-black mb-4 lg:mb-6 text-center drop-shadow-lg">
            Get Free Moving Quote<br />
            <span className="text-base lg:text-lg font-medium">in 5 Minutes</span>
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-5">
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl bg-white/15 backdrop-blur-sm border ${
                  errors.name ? 'border-red-400/60' : 'border-white/40'
                } text-black placeholder-black focus:outline-none focus:ring-2 ${
                  errors.name ? 'focus:ring-red-400/50' : 'focus:ring-white/50'
                } focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20 text-sm lg:text-base`}
                required
              />
              {errors.name && (
                <p className="text-red-300 text-xs lg:text-sm mt-1 pl-2 drop-shadow-sm">
                  {errors.name}
                </p>
              )}
            </div>
            
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl bg-white/15 backdrop-blur-sm border ${
                  errors.phone ? 'border-red-400/60' : 'border-white/40'
                } text-black placeholder-black focus:outline-none focus:ring-2 ${
                  errors.phone ? 'focus:ring-red-400/50' : 'focus:ring-white/50'
                } focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20 text-sm lg:text-base`}
                required
              />
              {errors.phone && (
                <p className="text-red-300 text-xs lg:text-sm mt-1 pl-2 drop-shadow-sm">
                  {errors.phone}
                </p>
              )}
            </div>
            
            {/* Enhanced City Selection with Visual Flow */}
            <div className="relative bg-white/5 rounded-xl lg:rounded-2xl p-2 lg:p-4 border border-white/20">
              <div className="flex items-center justify-between gap-2 lg:gap-3">
                {/* From City */}
                <div className="flex-1">
                  <label className="block text-black/80 text-xs lg:text-sm font-medium mb-1 lg:mb-2 pl-1 lg:pl-2">
                     Moving From
                  </label>
                  <input
                    type="text"
                    name="fromCity"
                    placeholder="Moving From"
                    value={formData.fromCity}
                    onChange={handleInputChange}
                    className={`w-full px-2 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl bg-white/15 backdrop-blur-sm border ${
                      errors.fromCity ? 'border-red-400/60' : 'border-white/40'
                    } text-black placeholder-black focus:outline-none focus:ring-2 ${
                      errors.fromCity ? 'focus:ring-red-400/50' : 'focus:ring-white/50'
                    } focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20 text-sm lg:text-base`}
                    required
                  />
                </div>

                {/* Arrow Icon */}
                <div className="flex flex-col items-center justify-center px-1 lg:px-2 pt-3 lg:pt-6">
                  <div className="bg-gradient-to-r bg-white p-1 lg:p-2 rounded-full shadow-lg">
                    <svg 
                      className="w-3 h-3 lg:w-5 lg:h-5 text-black" 
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
                <div className="flex-1">
                  <label className="block text-black/80 text-xs lg:text-sm font-medium mb-1 lg:mb-2 pl-1 lg:pl-2">
                     Moving To
                  </label>
                  <input
                    type="text"
                    name="toCity"
                    placeholder="Moving To"
                    value={formData.toCity}
                    onChange={handleInputChange}
                    className={`w-full px-2 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl bg-white/15 backdrop-blur-sm border ${
                      errors.toCity ? 'border-red-400/60' : 'border-white/40'
                    } text-black placeholder-black focus:outline-none focus:ring-2 ${
                      errors.toCity ? 'focus:ring-red-400/50' : 'focus:ring-white/50'
                    } focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20 text-sm lg:text-base`}
                    required
                  />
                </div>
              </div>
              {(errors.fromCity || errors.toCity) && (
                <div className="mt-2 space-y-1">
                  {errors.fromCity && (
                    <p className="text-red-300 text-xs lg:text-sm pl-2 drop-shadow-sm">
                      Moving From: {errors.fromCity}
                    </p>
                  )}
                  {errors.toCity && (
                    <p className="text-red-300 text-xs lg:text-sm pl-2 drop-shadow-sm">
                      Moving To: {errors.toCity}
                    </p>
                  )}
                </div>
              )}
            </div>
            
            <div className="relative">
              <textarea
                name="message"
                placeholder="Additional Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-3 lg:px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl bg-white/15 backdrop-blur-sm border border-white/40 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/60 transition-all duration-300 shadow-lg hover:bg-white/20 resize-none text-sm lg:text-base"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || Object.keys(errors).length > 0}
              className={`relative w-full ${
                isSubmitting || Object.keys(errors).length > 0
                  ? 'bg-gradient-to-r from-gray-500/60 to-gray-600/60 cursor-not-allowed'
                  : ''
              } text-white bg-[#BB3212] font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-lg lg:rounded-xl shadow-lg transition-all duration-300 backdrop-blur-sm border border-white/30 text-sm lg:text-base overflow-hidden`}
            >
              {/* Button Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full transition-transform duration-1000 group-hover:translate-x-full"></div>
              
              <span className="relative z-10 flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Get Quote Now</span>
                  </>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;