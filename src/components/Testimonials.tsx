"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
    company: "ADP",
    quote:
      "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.",
    author: "Learning & Development Head",
    rating: 5,
  },
  {
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
    company: "Bayer",
    quote:
      "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
    author: "HR Director",
    rating: 5,
  },
  {
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
    company: "Reliance",
    quote:
      "Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.",
    author: "Talent Development Manager",
    rating: 5,
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span className="inline-block bg-[#1a237e]/10 text-[#1a237e] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials from Our Partners
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            What Our Clients Are Saying
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Real feedback from enterprises that have transformed their workforce with
            Accredian.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          {/* Main Card */}
          <div className="bg-gradient-to-br from-[#f8f9ff] to-[#eef0ff] rounded-3xl p-8 md:p-12 border border-[#1a237e]/10 shadow-lg">
            <div className="flex flex-col items-center text-center">
              {/* Quote icon */}
              <div className="text-6xl text-[#1a237e]/20 font-serif leading-none mb-4">
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mb-8 italic">
                {testimonials[activeIndex].quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Company Logo */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].logo}
                  alt={testimonials[activeIndex].company}
                  className="h-10 object-contain"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {testimonials[activeIndex].author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index
                    ? "w-8 h-2.5 bg-[#1a237e]"
                    : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={() =>
              setActiveIndex(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1a237e] hover:bg-[#1a237e] hover:text-white transition-colors cursor-pointer hidden md:flex"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            onClick={() =>
              setActiveIndex((prev) => (prev + 1) % testimonials.length)
            }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#1a237e] hover:bg-[#1a237e] hover:text-white transition-colors cursor-pointer hidden md:flex"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
