"use client";

import { useEffect, useRef, useState } from "react";

const edgePoints = [
  {
    icon: "🎯",
    title: "Customized Learning Paths",
    description:
      "Tailored programs designed around your organization's specific goals, industry, and workforce skill gaps.",
  },
  {
    icon: "🏅",
    title: "Industry-Certified Programs",
    description:
      "Globally recognized certifications that add real value to your employees' professional profiles.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Faculty",
    description:
      "Learn from practitioners with 10+ years of industry experience across top global companies.",
  },
  {
    icon: "📊",
    title: "Data-Driven Outcomes",
    description:
      "Measurable ROI through skill assessments, progress tracking, and performance analytics.",
  },
  {
    icon: "🔄",
    title: "Flexible Delivery",
    description:
      "Online, offline, or hybrid formats that fit your team's schedule without disrupting operations.",
  },
  {
    icon: "🤝",
    title: "Dedicated Support",
    description:
      "A dedicated account manager and learning success team to ensure seamless program execution.",
  },
];

export default function AccredianEdge() {
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
    <section id="edge" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            The Accredian Edge
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Key Aspects of Our Strategic Training
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            What sets Accredian apart — a combination of expertise, flexibility, and
            measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: SVG / Visual */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <div className="relative">
              <img
                src="https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/accredian-edge-usp-v3.svg"
                alt="Accredian Edge"
                className="w-full max-w-lg mx-auto"
              />
            </div>
          </div>

          {/* Right: Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {edgePoints.map((point, index) => (
              <div
                key={point.title}
                className="card-hover bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `all 0.5s ease ${0.1 + index * 0.1}s`,
                }}
              >
                <div className="text-2xl mb-3">{point.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1.5 text-sm">
                  {point.title}
                </h3>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
