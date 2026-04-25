"use client";

import { useEffect, useRef, useState } from "react";

const domains = [
  {
    icon: "💡",
    title: "Product & Innovation Hub",
    description: "Product management, design thinking, and innovation frameworks.",
    color: "bg-blue-50 border-blue-100",
    iconBg: "bg-blue-100",
    tag: "Popular",
  },
  {
    icon: "🤖",
    title: "Gen-AI Mastery",
    description: "Generative AI, LLMs, prompt engineering, and AI-driven workflows.",
    color: "bg-purple-50 border-purple-100",
    iconBg: "bg-purple-100",
    tag: "Trending",
  },
  {
    icon: "👑",
    title: "Leadership Elevation",
    description: "Executive leadership, strategic thinking, and team management.",
    color: "bg-amber-50 border-amber-100",
    iconBg: "bg-amber-100",
    tag: "",
  },
  {
    icon: "📊",
    title: "Tech & Data Insights",
    description: "Data science, analytics, machine learning, and cloud computing.",
    color: "bg-green-50 border-green-100",
    iconBg: "bg-green-100",
    tag: "Hot",
  },
  {
    icon: "⚙️",
    title: "Operations Excellence",
    description: "Process optimization, supply chain, and operational efficiency.",
    color: "bg-orange-50 border-orange-100",
    iconBg: "bg-orange-100",
    tag: "",
  },
  {
    icon: "🌐",
    title: "Digital Enterprise",
    description: "Digital transformation, cybersecurity, and enterprise architecture.",
    color: "bg-cyan-50 border-cyan-100",
    iconBg: "bg-cyan-100",
    tag: "",
  },
  {
    icon: "💳",
    title: "Fintech Innovation Lab",
    description: "Blockchain, digital payments, regulatory tech, and open banking.",
    color: "bg-rose-50 border-rose-100",
    iconBg: "bg-rose-100",
    tag: "New",
  },
];

export default function DomainExpertise() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
    <section id="domains" ref={sectionRef} className="py-20 bg-white">
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
            Our Domain Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Specialized Programs Designed to Fuel Innovation
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            From AI to leadership — comprehensive programs across every domain your
            enterprise needs to stay ahead.
          </p>
        </div>

        {/* Domain Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {domains.map((domain, index) => (
            <div
              key={domain.title}
              className={`card-hover relative border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${domain.color} ${
                activeIndex === index ? "ring-2 ring-[#1a237e]" : ""
              }`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.5s ease ${index * 0.08}s`,
              }}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              {domain.tag && (
                <span className="absolute top-3 right-3 bg-[#1a237e] text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                  {domain.tag}
                </span>
              )}
              <div
                className={`w-12 h-12 ${domain.iconBg} rounded-xl flex items-center justify-center text-2xl mb-4`}
              >
                {domain.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm leading-snug">
                {domain.title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                {domain.description}
              </p>
            </div>
          ))}

          {/* CTA Card */}
          <div
            className="card-hover bg-gradient-to-br from-[#1a237e] to-[#3949ab] rounded-2xl p-6 text-white flex flex-col justify-between cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.5s ease ${domains.length * 0.08}s`,
            }}
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <div>
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl mb-4">
                ✨
              </div>
              <h3 className="font-bold text-lg mb-2">Custom Domain?</h3>
              <p className="text-blue-100 text-xs leading-relaxed">
                Need a specialized program for your industry? We build custom curricula.
              </p>
            </div>
            <button className="mt-4 bg-white text-[#1a237e] text-xs font-semibold px-4 py-2 rounded-full hover:bg-blue-50 transition-colors w-fit">
              Talk to Us →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
