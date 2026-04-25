"use client";

import { useEffect, useRef } from "react";

const badges = [
  { icon: "🎯", label: "Tailored Solutions" },
  { icon: "💡", label: "Industry Insights" },
  { icon: "🏆", label: "Expert Guidance" },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0d1b6e] via-[#1a237e] to-[#283593] pt-16"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00bcd4]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3949ab]/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: "0.1s" }}
            >
              <span className="inline-block bg-[#00bcd4]/20 text-[#00bcd4] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#00bcd4]/30">
                🚀 Enterprise Learning Solutions
              </span>
            </div>

            <h1
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ transitionDelay: "0.2s" }}
            >
              Next-Gen Expertise
              <br />
              <span className="text-[#00bcd4]">For Your Enterprise</span>
            </h1>

            <p
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 text-lg text-blue-100 mb-8 max-w-lg leading-relaxed"
              style={{ transitionDelay: "0.3s" }}
            >
              Cultivate high-performance teams through expert learning. Transform
              your workforce with industry-leading training programs designed for
              real-world impact.
            </p>

            {/* Badges */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-3 mb-10"
              style={{ transitionDelay: "0.4s" }}
            >
              {badges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div
              className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 flex flex-wrap gap-4"
              style={{ transitionDelay: "0.5s" }}
            >
              <button
                onClick={scrollToContact}
                className="bg-[#00bcd4] hover:bg-[#00acc1] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-[#00bcd4]/30 hover:-translate-y-0.5 cursor-pointer"
              >
                Enquire Now
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#track-record")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-full border border-white/30 transition-all duration-200 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right — Hero Image / Visual */}
          <div
            className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 relative"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="relative">
              {/* Main image card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
                <img
                  src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/corporate-big-hero-v4.webp"
                  alt="Enterprise Learning"
                  className="w-full rounded-xl object-cover"
                  style={{ maxHeight: "380px", objectFit: "cover" }}
                />
              </div>

              {/* Floating stat cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#1a237e]/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl">👥</span>
                </div>
                <div>
                  <p className="text-[#1a237e] font-bold text-lg leading-none">10K+</p>
                  <p className="text-gray-500 text-xs mt-0.5">Professionals Trained</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00bcd4]/10 rounded-lg flex items-center justify-center">
                  <span className="text-xl">⭐</span>
                </div>
                <div>
                  <p className="text-[#1a237e] font-bold text-lg leading-none">200+</p>
                  <p className="text-gray-500 text-xs mt-0.5">Sessions Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 72C120 64 240 48 360 40C480 32 600 32 720 37.3C840 43 960 53 1080 56C1200 59 1320 56 1380 54.7L1440 53V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
