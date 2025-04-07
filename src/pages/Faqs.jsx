import React, { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Users,
  GraduationCap,
  Building,
  Globe,
  ClipboardList,
  PiggyBank,
  UserPlus,
  Flag,
  BookOpen,
  CircleUser,
  Clock,
  Award,
  Car,
  Coffee,
  FileText,
  Languages,
  MessageCircle,
} from "lucide-react";

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const faqData = [
    {
      question: "Who can participate in JECRC MUN?",
      answer:
        "High school and college students interested in debating, diplomacy, or global affairs.",
      icon: <Users size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Do I need prior MUN experience?",
      answer: "No! Both beginners and experienced delegates are welcome.",
      icon: <GraduationCap size={24} className="text-[#991C1C]" />,
    },
    {
      question: "What committees will be simulated?",
      answer:
        "We have 8 exciting committees! Check the Agenda section on our website for details.",
      icon: <Building size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Can I participate in a bilingual committee?",
      answer:
        "Yes! Three of our committees are bilingual. Check the Agenda for details.",
      icon: <Languages size={24} className="text-[#991C1C]" />,
    },
    {
      question: "How do I register?",
      answer:
        "Register online at [...LINK...] Hurry up before the slots fill up!",
      icon: <ClipboardList size={24} className="text-[#991C1C]" />,
    },
    {
      question: "What is the registration fee?",
      answer:
        "The standard registration fee is ₹3000, which includes participation, study materials, meals, and a certificate. However, we have early bird offers available: Priority Round 1 (till 15th April): ₹2500/- Priority Round 2: ₹2750/- Grab your slot early to enjoy the discounted rates!",
      icon: <PiggyBank size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Can I register as a team?",
      answer: "No. Delegates represent individual countries or personalities.",
      icon: <UserPlus size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Can I request a specific country or portfolio?",
      answer:
        "Yes, but allocations are based on availability and first-come, first-served registration.",
      icon: <Flag size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Will there be any training sessions for beginners?",
      answer:
        "Yes! We'll conduct pre-conference training sessions to help first-timers understand MUN procedures.",
      icon: <BookOpen size={24} className="text-[#991C1C]" />,
    },
    {
      question: "How are country and committee allocations done?",
      answer:
        "First come, first served! Early registration increases your chances of getting your preferred portfolio.",
      icon: <Globe size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Will I get a study guide?",
      answer:
        "Yes! Every delegate receives a detailed study guide for preparation.",
      icon: <FileText size={24} className="text-[#991C1C]" />,
    },
    {
      question: "What is the dress code?",
      answer:
        "Day 1: Western Formal (suits, blazers, dress shirts, skirts, etc.) Day 2: Indian Formals (kurta, suits, etc.)",
      icon: <CircleUser size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Will it be a late-night event?",
      answer:
        "The event will conclude by 10 PM on Day 1 and by evening on Day 2.",
      icon: <Clock size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Are there awards or incentives?",
      answer:
        "Yes! Categories include: 🏆 Best Delegate, 🥈 High Commendation, 🏅 Special Mention",
      icon: <Award size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Will transportation be provided?",
      answer: "Yes, within Jaipur. Details will be shared before the event.",
      icon: <Car size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Will meals be provided?",
      answer: "Yes, meals and refreshments are included in the fee.",
      icon: <Coffee size={24} className="text-[#991C1C]" />,
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes! All participants receive an official JECRC MUN Participation Certificate.",
      icon: <FileText size={24} className="text-[#991C1C]" />,
    },
  ];

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqData.length);
  }, [faqData]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with enhanced graphics */}
      <header className="relative bg-gradient-to-r from-[#991C1C] to-[#7a1717] text-white py-16 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-center font-medium">JECRC MUN 2025</p>
          <div className="flex justify-center items-center gap-2 text-sm opacity-80"></div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-8 left-8 opacity-10">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="2" />
              <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="2" />
              <circle cx="50" cy="50" r="20" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute bottom-8 right-8 opacity-10">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <rect
                x="10"
                y="10"
                width="80"
                height="80"
                stroke="white"
                strokeWidth="2"
              />
              <rect
                x="20"
                y="20"
                width="60"
                height="60"
                stroke="white"
                strokeWidth="2"
              />
              <rect
                x="30"
                y="30"
                width="40"
                height="40"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </div>
          <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 opacity-5">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" fill="white" />
            </svg>
          </div>
        </div>
      </header>

      {/* World map pattern - decorative element */}
      <div className="h-16 bg-gray-100 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <svg
            viewBox="0 0 1000 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,100 Q250,20 500,100 T1000,100"
              stroke="#991C1C"
              strokeWidth="4"
              fill="none"
            />
            <path
              d="M0,80 Q250,0 500,80 T1000,80"
              stroke="#060807"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0,60 Q250,-20 500,60 T1000,60"
              stroke="#991C1C"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="text-lg font-medium text-[#060807] z-10 flex items-center gap-2">
          <Globe size={20} className="text-[#991C1C]" />
          <span>Find answers to all your queries about JECRC MUN 2025</span>
        </div>
      </div>

      {/* FAQ Content with enhanced design */}
      <main className="max-w-4xl mx-auto py-12 px-4">
        {/* Decorative background elements */}
        <div className="absolute left-0 right-0 top-1/3 -z-10 opacity-5">
          <svg
            width="100%"
            height="300"
            preserveAspectRatio="none"
            viewBox="0 0 1440 300"
            fill="none"
          >
            <path
              d="M0,100 C320,150 420,0 880,100 C1160,170 1320,30 1440,80 V300 H0 V100Z"
              fill="#991C1C"
            />
          </svg>
        </div>

        <div className="w-full relative">
          {faqData.map((faq, index) => {
            return (
              <div
                key={index}
                className="mb-6 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full p-5 text-left flex justify-between items-center ${
                    activeIndex === index
                      ? "bg-[#991C1C] text-white"
                      : "bg-white text-[#060807]"
                  } transition-all duration-300`}
                  aria-expanded={activeIndex === index}
                  aria-controls={`content-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`rounded-full p-2 ${
                        activeIndex === index ? "bg-white" : "bg-gray-100"
                      }`}
                    >
                      {faq.icon}
                    </div>
                    <span className="font-medium text-lg">{faq.question}</span>
                  </div>
                  <span
                    className={`transition-transform duration-300 ease-in-out rounded-full ${
                      activeIndex === index
                        ? "bg-white text-[#991C1C]"
                        : "bg-gray-100"
                    } p-2`}
                  >
                    {activeIndex === index ? (
                      <ChevronUp size={18} className="animate-pulse" />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </span>
                </button>
                <div
                  id={`content-${index}`}
                  className={`transition-all duration-500 ease-in-out ${
                    activeIndex === index ? "opacity-100" : "opacity-0 h-0"
                  }`}
                  style={{
                    height:
                      activeIndex === index
                        ? contentRefs.current[index]?.scrollHeight + "px"
                        : 0,
                    overflow: "hidden",
                  }}
                >
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="p-5 bg-white text-[#060807] border-t border-gray-200"
                  >
                    <p className="leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <div className="relative mx-auto max-w-4xl px-4 mb-10">
        <hr className="border-t border-gray-200" />
      </div>

      {/* Contact Us with enhanced design */}
      <div className="bg-gray-50 py-8 rounded-lg max-w-4xl mx-auto mb-10 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -right-10 -bottom-10 opacity-5">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="100" fill="#991C1C" />
          </svg>
        </div>
        <div className="absolute -left-10 -top-10 opacity-5">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="100" fill="#991C1C" />
          </svg>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-4 relative z-10">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[#991C1C] p-3 text-white">
              <MessageCircle size={24} />
            </div>
            <h1 className="text-3xl font-bold text-[#060807]">
              Still Have Questions?
            </h1>
          </div>
          <button className="px-6 py-3 bg-[#991C1C] rounded-lg text-white font-semibold transition-all duration-700 ease-in-out bg-gradient-to-r from-[#991C1C] to-orange-700 hover:from-orange-700 hover:to-[#991C1C] shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
