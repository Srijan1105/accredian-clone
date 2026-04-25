"use client";

import { useEffect, useRef, useState } from "react";

const clients = [
  {
    name: "Reliance",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/rel.png",
  },
  {
    name: "HCL",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/hcl.png",
  },
  {
    name: "IBM",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/ibm.png",
  },
  {
    name: "CRIF",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/crif.png",
  },
  {
    name: "ADP",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/adp.svg",
  },
  {
    name: "Bayer",
    logo: "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/bayer.svg",
  },
];

// Duplicate for seamless loop
const allClients = [...clients, ...clients];

export default function ClientLogos() {
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
    <section id="clients" ref={sectionRef} className="py-20 bg-white">
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
            Our Proven Partnerships
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Successful Collaborations With the Industry&apos;s Best
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Trusted by leading enterprises across industries to deliver transformative
            learning experiences.
          </p>
        </div>

        {/* Marquee */}
        <div
          className="overflow-hidden"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.8s ease 0.3s",
          }}
        >
          <div className="flex marquee-track gap-12 items-center">
            {allClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center bg-gray-50 hover:bg-[#1a237e]/5 border border-gray-100 rounded-xl px-8 py-5 transition-all duration-300 cursor-pointer group"
                style={{ minWidth: "160px", height: "80px" }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-10 max-w-28 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Static grid for accessibility / no-JS */}
        <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-4 md:hidden">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center bg-gray-50 border border-gray-100 rounded-xl p-4"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-8 max-w-full object-contain filter grayscale opacity-60"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
