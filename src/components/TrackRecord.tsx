"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "Professionals Trained",
    description: "For Exceptional Career Success",
    icon: "👥",
    color: "from-[#1a237e] to-[#3949ab]",
  },
  {
    value: 200,
    suffix: "+",
    label: "Sessions Delivered",
    description: "With Unmatched Learning Excellence",
    icon: "🎓",
    color: "from-[#00838f] to-[#00bcd4]",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Active Learners",
    description: "Engaged In Dynamic Courses",
    icon: "📚",
    color: "from-[#6a1b9a] to-[#ab47bc]",
  },
];

function useCountUp(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);

  return count;
}

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: (typeof stats)[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(stat.value, 2000, isVisible);

  const formatCount = (n: number) => {
    if (n >= 1000) return `${(n / 1000).toFixed(0)}K`;
    return n.toString();
  };

  return (
    <div
      className="card-hover bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `all 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div
        className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5 shadow-lg`}
      >
        {stat.icon}
      </div>
      <div className="text-4xl font-bold text-[#1a237e] mb-1">
        {formatCount(count)}
        {stat.suffix}
      </div>
      <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
      <div className="text-sm text-gray-500">{stat.description}</div>
    </div>
  );
}

export default function TrackRecord() {
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="track-record" ref={sectionRef} className="py-20 bg-gray-50">
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
            Our Track Record
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            The Numbers Behind Our Success
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Proven results that speak for themselves — from professionals trained to
            sessions delivered with excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
