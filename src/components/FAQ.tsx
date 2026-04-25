"use client";

import { useEffect, useRef, useState } from "react";

const faqCategories = [
  {
    label: "About the Course",
    faqs: [
      {
        question: "What types of corporate training programs does Accredian offer?",
        answer:
          "Accredian offers a wide range of corporate training programs including certificate courses, executive programs, and post-graduate certificates. Our programs span domains like Data Science, AI/ML, Product Management, Leadership, Digital Transformation, and more — all customizable to your organization's needs.",
      },
      {
        question: "What domain specializations are available?",
        answer:
          "We specialize in Product & Innovation, Generative AI, Leadership, Tech & Data, Operations Excellence, Digital Enterprise, and Fintech. Each domain has multiple programs at different levels — from foundational to advanced.",
      },
      {
        question: "Can programs be customized for our company?",
        answer:
          "Absolutely. Every program we deliver is tailored to your organization's specific goals, industry context, and workforce skill gaps. We start with a thorough skill gap analysis before designing the curriculum.",
      },
      {
        question: "Are the certifications recognized globally?",
        answer:
          "Yes. Accredian's certifications are recognized by leading industry bodies and partner institutions. Many programs are co-certified with global universities and technology companies.",
      },
    ],
  },
  {
    label: "About the Delivery",
    faqs: [
      {
        question: "What delivery formats are available?",
        answer:
          "We offer online (live + recorded), offline (on-site at your premises), and hybrid formats. The delivery mode is chosen based on your team's preferences and operational requirements.",
      },
      {
        question: "How long do the programs typically run?",
        answer:
          "Program duration varies from intensive 2-day workshops to 6-month comprehensive learning journeys. We work with you to design a schedule that minimizes disruption to daily operations.",
      },
      {
        question: "Who are the instructors?",
        answer:
          "Our faculty are industry practitioners with 10+ years of experience from companies like Google, Amazon, McKinsey, and leading Indian enterprises. They bring real-world case studies and hands-on projects to every session.",
      },
    ],
  },
  {
    label: "Miscellaneous",
    faqs: [
      {
        question: "How do you measure training effectiveness?",
        answer:
          "We use pre and post assessments, skill benchmarking, project evaluations, and manager feedback surveys. You receive detailed analytics reports showing ROI and skill improvement metrics.",
      },
      {
        question: "What is the minimum team size for corporate training?",
        answer:
          "We work with teams of all sizes — from small groups of 10 to large cohorts of 500+. Pricing and program design are adjusted based on team size and engagement scope.",
      },
      {
        question: "How do I get started?",
        answer:
          "Simply fill out the enquiry form on this page or email us at enterprise@accredian.com. Our enterprise solutions team will reach out within 24 hours to understand your needs and propose a customized plan.",
      },
    ],
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-gray-900 pr-4 text-sm">{question}</span>
        <span
          className={`flex-shrink-0 w-6 h-6 rounded-full bg-[#1a237e]/10 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            className="w-3 h-3 text-[#1a237e]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const currentFaqs = faqCategories[activeCategory].faqs;

  return (
    <section id="faq" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
          }}
        >
          <span className="inline-block bg-[#1a237e]/10 text-[#1a237e] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Got Questions? We&apos;ve Got Answers.
          </h2>
          <p className="text-gray-500">
            Everything you need to know about our enterprise training programs.
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className="flex flex-wrap gap-3 justify-center mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.2s",
          }}
        >
          {faqCategories.map((cat, index) => (
            <button
              key={cat.label}
              onClick={() => {
                setActiveCategory(index);
                setOpenIndex(0);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === index
                  ? "bg-[#1a237e] text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#1a237e] hover:text-[#1a237e]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div
          className="flex flex-col gap-3"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.3s",
          }}
        >
          {currentFaqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-10 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.5s",
          }}
        >
          <p className="text-gray-500 mb-4">Still have questions?</p>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-[#1a237e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#3949ab] transition-colors cursor-pointer"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
