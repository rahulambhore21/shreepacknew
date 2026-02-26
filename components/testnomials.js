'use client'
import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react';

const ANIMATION_CONFIG = {
  SMOOTH_TAU: 0.25,
  MIN_COPIES: 2,
  COPY_HEADROOM: 2
};

const cx = (...parts) => parts.filter(Boolean).join(' ');

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback();
      window.addEventListener('resize', handleResize);
      callback();
      return () => window.removeEventListener('resize', handleResize);
    }

    const observers = elements.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });

    callback();
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, [callback, elements, dependencies]);
};

const useAnimationLoop = (trackRef, targetVelocity, seqWidth, isHovered, hoverSpeed) => {
  const rafRef = useRef(null);
  const lastTimestampRef = useRef(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (seqWidth > 0) {
      offsetRef.current = ((offsetRef.current % seqWidth) + seqWidth) % seqWidth;
      track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
    }

    if (prefersReduced) {
      track.style.transform = 'translate3d(0, 0, 0)';
      return () => {
        lastTimestampRef.current = null;
      };
    }

    const animate = timestamp => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }

      const deltaTime = Math.max(0, timestamp - lastTimestampRef.current) / 1000;
      lastTimestampRef.current = timestamp;

      const target = isHovered && hoverSpeed !== undefined ? hoverSpeed : targetVelocity;

      const easingFactor = 1 - Math.exp(-deltaTime / ANIMATION_CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easingFactor;

      if (seqWidth > 0) {
        let nextOffset = offsetRef.current + velocityRef.current * deltaTime;
        nextOffset = ((nextOffset % seqWidth) + seqWidth) % seqWidth;
        offsetRef.current = nextOffset;

        track.style.transform = `translate3d(${-offsetRef.current}px, 0, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTimestampRef.current = null;
    };
  }, [targetVelocity, seqWidth, isHovered, hoverSpeed, trackRef]);
};

const TestimonialLoop = memo(({
  testimonials,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  hoverSpeed = 0,
  className = '',
  gap = 32
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const seqRef = useRef(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(ANIMATION_CONFIG.MIN_COPIES);
  const [isHovered, setIsHovered] = useState(false);

  const effectiveHoverSpeed = useMemo(() => {
    if (hoverSpeed !== undefined) return hoverSpeed;
    if (pauseOnHover === true) return 0;
    if (pauseOnHover === false) return undefined;
    return 0;
  }, [hoverSpeed, pauseOnHover]);

  const targetVelocity = useMemo(() => {
    const magnitude = Math.abs(speed);
    const directionMultiplier = direction === 'left' ? 1 : -1;
    const speedMultiplier = speed < 0 ? -1 : 1;
    return magnitude * directionMultiplier * speedMultiplier;
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceRect = seqRef.current?.getBoundingClientRect?.();
    const sequenceWidth = sequenceRect?.width ?? 0;
    
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const copiesNeeded = Math.ceil(containerWidth / sequenceWidth) + ANIMATION_CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(ANIMATION_CONFIG.MIN_COPIES, copiesNeeded));
    }
  }, []);

  useResizeObserver(
    updateDimensions,
    [containerRef, seqRef],
    [testimonials, gap]
  );

  useAnimationLoop(
    trackRef,
    targetVelocity,
    seqWidth,
    isHovered,
    effectiveHoverSpeed
  );

  const handleMouseEnter = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(true);
  }, [effectiveHoverSpeed]);
  
  const handleMouseLeave = useCallback(() => {
    if (effectiveHoverSpeed !== undefined) setIsHovered(false);
  }, [effectiveHoverSpeed]);

  const renderTestimonialItem = useCallback((testimonial, key) => (
    <div
      key={key}
      className="flex-none w-96 mx-4"
      style={{ marginRight: `${gap}px` }}
    >
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
        {/* Stars Rating */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
          "{testimonial.text}"
        </p>
        
        {/* Customer Info */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-[#BB3212] to-black rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.location}</p>
            {testimonial.service && (
              <p className="text-[#BB3212] text-xs font-medium">{testimonial.service}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  ), [gap]);

  const testimonialLists = useMemo(() =>
    Array.from({ length: copyCount }, (_, copyIndex) => (
      <div
        className="flex items-stretch"
        key={`copy-${copyIndex}`}
        ref={copyIndex === 0 ? seqRef : undefined}
      >
        {testimonials.map((testimonial, itemIndex) => 
          renderTestimonialItem(testimonial, `${copyIndex}-${itemIndex}`)
        )}
      </div>
    )), [copyCount, testimonials, renderTestimonialItem]);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Our <span className="text-[#BB3212]">Customers</span> Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers who trust our services
          </p>
        </div>
      </div>
      
      <div
        ref={containerRef}
        className={cx(
          'relative overflow-x-hidden',
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Fade gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-blue-50 to-transparent" />
        
        <div
          className="flex will-change-transform select-none relative z-0"
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {testimonialLists}
        </div>
      </div>
    </section>
  );
});

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Mumbai to Delhi",
      service: "Home Shifting",
      rating: 5,
      text: "Excellent service! My household items were packed safely and delivered on time. The team was professional and kept me updated throughout the journey. Highly recommended!"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Bangalore to Chennai",
      service: "Office Relocation",
      rating: 5,
      text: "Outstanding experience with this service provider. They handled our office relocation with utmost care and the tracking system was very helpful. Will definitely use again."
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Pune to Hyderabad",
      service: "Packing & Unpacking",
      rating: 4,
      text: "Great service quality and very reasonable pricing. The staff is courteous and the delivery was prompt. Satisfied with their professional approach."
    },
    {
      id: 4,
      name: "Sneha Reddy",
      location: "Ahmedabad to Kolkata",
      service: "Home Shifting",
      rating: 5,
      text: "Fantastic service! They took great care of my furniture and belongings during shifting. No damage, delivered on schedule. Truly professional team."
    },
    {
      id: 5,
      name: "Vikram Singh",
      location: "Jaipur to Goa",
      service: "Office Relocation",
      rating: 5,
      text: "Impressed with their service quality. Real-time updates and professional handling made our office move stress-free. Highly recommended service provider."
    },
    {
      id: 6,
      name: "Kavya Nair",
      location: "Kochi to Coimbatore",
      service: "Storage Solutions",
      rating: 4,
      text: "Professional team with excellent customer service. The warehouse facilities are top-notch and the inventory management is very systematic."
    }
  ];

  return (
    <TestimonialLoop
      testimonials={testimonials}
      speed={60}
      direction="left"
      pauseOnHover={true}
      gap={32}
    />
  );
};

TestimonialLoop.displayName = 'TestimonialLoop';

export default Testimonials;
