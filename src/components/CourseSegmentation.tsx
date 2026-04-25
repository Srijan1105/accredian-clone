"use client";

import { useEffect, useRef, useState } from "react";

const segments = [
  {
    title: "Program Specific",
    subtitle: "Certificate, Executive, Post Graduate Certificate",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/project-management-v2.webp",
    icon: "🎓",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Industry Specific",
    subtitle: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/digital-transformation-v2.webp",
    icon: "🏭",
    color: "from-emerald-500 to-emerald-700",
  },
  {
    title: "Topic Specific",
    subtitle: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/data-science-v2.webp",
    icon: "🔬",
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "Level Specific",
    subtitle: "Senior Leadership, Mid-Career Professionals, Freshers",
    image:
      "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/senior-management-v2.webp",
    icon: "📈",
    color: "from-orange-500 to-orange-700",
  },
];

const audiences = [
  {
    icon: "💻",
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    bg: "bg-blue-50",
  },
  {
    icon: "📋",
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    bg: "bg-green-50",
  },
  {
    icon: "🚀",
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    bg: "bg-purple-50",
  },
  {
    icon: "🏆",
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    bg: "bg-amber-50",
  },
];

export default function CourseSegmentation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSegment, setActiveSegment] = useState(0);

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
    <section id="segmentation" ref={sectionRef} className="py-20 bg-gray-50">
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
            Tailored Course Segmentation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Explore Custom-fit Courses Designed for Every Professional Focus
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Whether by program type, industry, topic, or career level — we have the
            right learning path for your team.
          </p>
        </div>

        {/* Segment Tabs */}
        <div
          className="flex flex-wrap gap-3 justify-center mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        >
          {segments.map((seg, index) => (
            <button
              key={seg.title}
              onClick={() => setActiveSegment(index)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeSegment === index
                  ? "bg-[#1a237e] text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#1a237e] hover:text-[#1a237e]"
              }`}
            >
              <span>{seg.icon}</span>
              {seg.title}
            </button>
          ))}
        </div>

        {/* Active Segment Display */}
        <div
          className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        >
          <div className="grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                src={segments[activeSegment].image}
                alt={segments[activeSegment].title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${segments[activeSegment].color} opacity-40`}
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="text-4xl mb-4">{segments[activeSegment].icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {segments[activeSegment].title}
              </h3>
              <p className="text-gray-500 mb-6">{segments[activeSegment].subtitle}</p>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#1a237e] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#3949ab] transition-colors w-fit cursor-pointer"
              >
                Explore Programs →
              </button>
            </div>
          </div>
        </div>

        {/* Who Should Join */}
        <div
          className="text-center mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.4s",
          }}
        >
          <span className="inline-block bg-[#1a237e]/10 text-[#1a237e] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Who Should Join?
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Strategic Skill Enhancement
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className={`card-hover ${audience.bg} rounded-2xl p-6 text-center border border-gray-100`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${0.5 + index * 0.1}s`,
              }}
            >
              <div className="text-4xl mb-4">{audience.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{audience.title}</h3>
              <p className="text-gray-500 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
