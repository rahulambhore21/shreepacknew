'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function OurServices() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const titleRef = useRef(null)

  const services = [
    {
      id: 1,
      title: "Home Shifting",
      description: "Safe and smooth relocation of household goods with professional packing. We handle your belongings with care.",
      icon: "🏠",
      image: "/img/service1.jpg"
    },
    {
      id: 2,
      title: "Office Relocation",
      description: "Fast and organized office shifting with minimal downtime. Let us handle the logistics while you focus on business.",
      icon: "🏢",
      image: "/img/service2.jpg"
    },
    {
      id: 3,
      title: "Packing & Unpacking",
      description: "High-quality packing materials and careful handling to ensure zero damage during transit.",
      icon: "📦",
      image: "/img/service3.jpg"
    },
    {
      id: 4,
      title: "Storage Solutions",
      description: "Secure warehouse facilities with modern inventory management systems for short and long-term storage.",
      icon: "🏪",
      image: "/img/service4.jpg"
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide all cards with enhanced transforms
      gsap.set(cardsRef.current, {
        opacity: 0,
        scale: 0.3,
        rotationY: 45,
        rotationX: 15,
        z: -200
      })

      gsap.set(titleRef.current, {
        opacity: 0,
        y: -50
      })

      // Title animation
      gsap.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      })

      // Enhanced cards animation with 3D entrance
      gsap.to(cardsRef.current, {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        z: 0,
        duration: 1.5,
        ease: "back.out(1.7)",
        stagger: {
          amount: 1,
          from: "random"
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        }
      })

      // Enhanced hover animations for dramatic pop-out effect
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const handleMouseEnter = () => {
            gsap.to(card, {
              scale: 1.08,
              rotationY: 8,
              rotationX: 5,
              z: 100,
              duration: 0.4,
              ease: "power2.out"
            })
          }

          const handleMouseLeave = () => {
            gsap.to(card, {
              scale: 1,
              rotationY: 0,
              rotationX: 0,
              z: 0,
              duration: 0.4,
              ease: "power2.out"
            })
          }

          card.addEventListener('mouseenter', handleMouseEnter)
          card.addEventListener('mouseleave', handleMouseLeave)

          return () => {
            card.removeEventListener('mouseenter', handleMouseEnter)
            card.removeEventListener('mouseleave', handleMouseLeave)
          }
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '2000px' }}
    >
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/container.png" // Replace with your background image
          alt="Services Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-2xl">
            Our <span className="text-[#BB3212]">Services</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
            Complete relocation solutions designed to meet all your moving and packing needs
          </p>
        </div>

        {/* Enhanced Services Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => cardsRef.current[index] = el}
              className="group relative transform-gpu"
              style={{ 
                perspective: '1500px',
                transformStyle: 'preserve-3d'
              }}
            >
              {/* Enhanced Card with Multiple Shadow Layers */}
              <div className="relative bg-white/15 backdrop-blur-2xl rounded-2xl md:rounded-3xl p-4 md:p-8 h-64 md:h-80 border border-white/30 transition-all duration-500 hover:bg-white/20 hover:border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_20px_60px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.4),0_30px_80px_rgba(187,50,18,0.2),0_40px_100px_rgba(0,0,0,0.2),0_0_0_1px_rgba(255,255,255,0.2)]">
                
                {/* Shimmer Overlay Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/20 via-transparent to-transparent animate-shimmer pointer-events-none"></div>
                
                {/* Enhanced Service Icon with Floating Effect */}
                <div className="text-4xl md:text-7xl mb-3 md:mb-6 text-center transform group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-500 drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                  {service.icon}
                </div>
                
                {/* Enhanced Service Title */}
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-4 text-center group-hover:text-[#BB3212] transition-all duration-300 drop-shadow-lg group-hover:drop-shadow-2xl transform group-hover:-translate-y-1">
                  {service.title}
                </h3>
                
                {/* Enhanced Service Description */}
                <p className="text-gray-200 text-center leading-relaxed group-hover:text-white transition-all duration-300 drop-shadow-md text-xs md:text-sm group-hover:transform group-hover:-translate-y-1">
                  {service.description}
                </p>

                {/* Enhanced Multi-layer Gradient Border Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#BB3212]/30 via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute inset-[-1px] rounded-3xl bg-gradient-to-br from-[#BB3212]/50 via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-sm"></div>
                
                {/* Enhanced Bottom Accent with Glow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#BB3212] to-black group-hover:w-full transition-all duration-700 rounded-full shadow-lg group-hover:shadow-[0_0_20px_rgba(187,50,18,0.6)]"></div>
                
                {/* Corner Highlight Effect */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-br from-white/40 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg"></div>
                
                {/* Floating Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>

              {/* Card Shadow Base for Extra Depth */}
              <div className="absolute inset-2 rounded-3xl bg-black/20 -z-10 blur-xl opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 transform translate-y-4"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#BB3212] rounded-full opacity-60 animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-black rounded-full opacity-60 animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  )
}

export default OurServices