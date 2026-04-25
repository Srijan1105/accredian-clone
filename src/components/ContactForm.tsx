"use client";

import { useEffect, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  teamSize: string;
  domain: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  teamSize: "",
  domain: "",
  message: "",
};

const teamSizes = ["1-10", "11-50", "51-200", "201-500", "500+"];
const domains = [
  "Product & Innovation",
  "Gen-AI & Machine Learning",
  "Leadership",
  "Tech & Data",
  "Operations",
  "Digital Transformation",
  "Fintech",
  "Other",
];

export default function ContactForm() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errors, setErrors] = useState<Partial<FormData>>({});

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

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!form.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\+?[\d\s\-()]{8,15}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!form.company.trim()) newErrors.company = "Company name is required";
    if (!form.teamSize) newErrors.teamSize = "Please select team size";
    if (!form.domain) newErrors.domain = "Please select a domain";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-[#0d1b6e] via-[#1a237e] to-[#283593] relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00bcd4]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Info */}
          <div
            className="text-white"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: "all 0.7s ease",
            }}
          >
            <span className="inline-block bg-[#00bcd4]/20 text-[#00bcd4] text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-[#00bcd4]/30">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Want to Learn More About Our Training Solutions?
            </h2>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Get Expert Guidance for Your Team&apos;s Success! Our enterprise solutions
              team will reach out within 24 hours.
            </p>

            <div className="space-y-5">
              {[
                {
                  icon: "📧",
                  label: "Email Us",
                  value: "enterprise@accredian.com",
                  href: "mailto:enterprise@accredian.com",
                },
                {
                  icon: "📍",
                  label: "Office Address",
                  value:
                    "4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana",
                  href: null,
                },
                {
                  icon: "⏰",
                  label: "Response Time",
                  value: "Within 24 business hours",
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-blue-200 text-xs font-medium mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-white hover:text-[#00bcd4] transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {[
                { href: "https://facebook.com/accredianlearn", icon: "f", label: "Facebook" },
                { href: "https://www.linkedin.com/company/accredianedu/", icon: "in", label: "LinkedIn" },
                { href: "https://twitter.com/accredianedu", icon: "𝕏", label: "Twitter" },
                { href: "https://www.instagram.com/accredian_edu", icon: "📷", label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white text-sm font-bold transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.7s ease 0.2s",
            }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              {status === "success" ? (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-500 mb-6">
                    We&apos;ve received your enquiry. Our team will reach out within 24
                    hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-[#1a237e] text-white px-6 py-2.5 rounded-full font-semibold hover:bg-[#3949ab] transition-colors cursor-pointer"
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Speak with our Advisor
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] transition-colors ${
                          errors.name ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] transition-colors ${
                          errors.email ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] transition-colors ${
                          errors.phone ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] transition-colors ${
                          errors.company ? "border-red-400" : "border-gray-200"
                        }`}
                      />
                      {errors.company && (
                        <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                      )}
                    </div>

                    {/* Team Size */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Team Size <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="teamSize"
                        value={form.teamSize}
                        onChange={handleChange}
                        className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] transition-colors bg-white ${
                          errors.teamSize ? "border-red-400" : "border-gray-200"
                        }`}
                      >
                        <option value="">Select team size</option>
                        {teamSizes.map((size) => (
                          <option key={size} value={size}>
                            {size} employees
                          </option>
                        ))}
                      </select>
                      {errors.teamSize && (
                        <p className="text-red-500 text-xs mt-1">{errors.teamSize}</p>
                      )}
                    </div>

                    {/* Domain */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Domain of Interest <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="domain"
                        value={form.domain}
                        onChange={handleChange}
                        className={`w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] transition-colors bg-white ${
                          errors.domain ? "border-red-400" : "border-gray-200"
                        }`}
                      >
                        <option value="">Select domain</option>
                        {domains.map((d) => (
                          <option key={d} value={d}>
                            {d}
                          </option>
                        ))}
                      </select>
                      {errors.domain && (
                        <p className="text-red-500 text-xs mt-1">{errors.domain}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Tell us about your training requirements..."
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a237e] transition-colors resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#1a237e] hover:bg-[#3949ab] disabled:bg-gray-400 text-white font-semibold py-3 rounded-full transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-3">
                    By submitting, you agree to our privacy policy. We&apos;ll never
                    share your data.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
