"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    icon: "🔍",
    title: "Skill Gap Analysis",
    description:
      "Assess team skill gaps and developmental needs through comprehensive evaluations and benchmarking against industry standards.",
    color: "bg-blue-50 border-blue-200",
    numberColor: "text-blue-600",
  },
  {
    number: "02",
    icon: "🗺️",
    title: "Customized Training Plan",
    description:
      "Create a tailored roadmap addressing organizational goals, aligning learning objectives with business outcomes.",
    color: "bg-purple-50 border-purple-200",
    numberColor: "text-purple-600",
  },
  {
    number: "03",
    icon: "🚀",
    title: "Flexible Program Delivery",
    description:
      "Deliver adaptable programs aligned with industry and organizational needs through online, offline, or hybrid formats.",
    color: "bg-emerald-50 border-emerald-200",
    numberColor: "text-emerald-600",
  },
];

export default function CATFramework() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section id="process" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CAT Framework */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span className="inline-block bg-[#1a237e]/10 text-[#1a237e] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            The CAT Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Our Proven Approach to Learning Excellence
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            A structured methodology that ensures every training program delivers
            measurable, lasting impact.
          </p>
        </div>

        {/* CAT SVG */}
        <div
          className="flex justify-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.2s",
          }}
        >
          <img
            src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/catV2.svg"
            alt="CAT Framework"
            className="max-w-lg w-full"
          />
        </div>

        {/* Process Steps */}
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        >
          <span className="inline-block bg-[#1a237e]/10 text-[#1a237e] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            How We Deliver Results
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            A Structured Three-Step Approach to Skill Development
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-emerald-200 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative z-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.6s ease ${0.4 + index * 0.15}s`,
              }}
            >
              <div className={`card-hover border-2 ${step.color} rounded-2xl p-7`}>
                {/* Step number */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                    <span className={`font-bold text-lg ${step.numberColor}`}>
                      {step.number}
                    </span>
                  </div>
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
