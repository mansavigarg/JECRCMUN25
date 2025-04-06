import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Users, Calendar, Globe, MessageCircle } from 'lucide-react';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);
  
  const faqData = [
    {
      question: "What does the G20 stand for?",
      answer: "The G20 stands for 'Group of Twenty,' which is a forum of 19 countries plus the European Union that together represent the world's major developed and emerging economies. The G20 members account for more than 80% of the world's GDP, 75% of global trade, and 60% of the world's population.",
      icon: <Users size={24} className="text-[#991C1C]" />
    },
    {
      question: "What is the G20 Summit?",
      answer: "The G20 Summit is an annual international forum that brings together the leaders of the world's major economies to discuss global economic issues, financial stability, climate change, sustainable development, and other pressing international challenges. The presidency of the G20 rotates among its members each year.",
      icon: <Globe size={24} className="text-[#991C1C]" />
    },
    {
      question: "Why was the G20 Leaders' Summit established?",
      answer: "The G20 Leaders' Summit was established in 2008 in response to the global financial crisis. While the G20 had existed at the ministerial level since 1999, the severity of the financial crisis prompted the elevation of the forum to the leaders' level to better coordinate global economic policies and prevent future financial crises.",
      icon: <HelpCircle size={24} className="text-[#991C1C]" />
    },
    {
      question: "Which countries and international organisations participate in the G20?",
      answer: "The G20 consists of Argentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, Mexico, Russia, Saudi Arabia, South Africa, South Korea, Turkey, the United Kingdom, the United States, and the European Union. Additionally, international organizations such as the IMF, World Bank, UN, WHO, WTO, ILO, and OECD regularly participate as observers.",
      icon: <Globe size={24} className="text-[#991C1C]" />
    },
    {
      question: "How often are G20 meetings held?",
      answer: "The G20 holds annual Leaders' Summits, as well as ministerial meetings, working groups, and other events throughout the year. The frequency of meetings increases during the host country's presidency year.",
      icon: <Calendar size={24} className="text-[#991C1C]" />
    }
  ];
  
  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqData.length);
  }, [faqData]);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with  graphics */}
      <header className="relative bg-gradient-to-r from-[#991C1C] to-[#7a1717] text-white py-16 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">FAQs</h1>
          <div className="flex justify-center items-center gap-2 text-sm opacity-80">           
          </div>
        </div>

        {/*  decorative elements */}
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
              <rect x="10" y="10" width="80" height="80" stroke="white" strokeWidth="2" />
              <rect x="20" y="20" width="60" height="60" stroke="white" strokeWidth="2" />
              <rect x="30" y="30" width="40" height="40" stroke="white" strokeWidth="2" />
            </svg>
          </div>
          <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 opacity-5">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" fill="white" />
            </svg>
          </div>
        </div>
      </header>


      {/* FAQ Content*/}
      <main className="max-w-4xl mx-auto py-12 px-4">
        {/* Decorative background elements */}
        <div className="absolute left-0 right-0 top-1/3 -z-10 opacity-5">
          <svg width="100%" height="300" preserveAspectRatio="none" viewBox="0 0 1440 300" fill="none">
            <path d="M0,100 C320,150 420,0 880,100 C1160,170 1320,30 1440,80 V300 H0 V100Z" fill="#991C1C" />
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
                    activeIndex === index ? 'bg-[#991C1C] text-white' : 'bg-white text-[#060807]'
                  } transition-all duration-300`}
                  aria-expanded={activeIndex === index}
                  aria-controls={`content-${index}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`rounded-full p-2 ${activeIndex === index ? 'bg-white' : 'bg-gray-100'}`}>
                      {faq.icon}
                    </div>
                    <span className="font-medium text-lg">{faq.question}</span>
                  </div>
                  <span className={`transition-transform duration-300 ease-in-out rounded-full ${activeIndex === index ? 'bg-white text-[#991C1C]' : 'bg-gray-100'} p-2`}>
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
                    activeIndex === index ? 'opacity-100' : 'opacity-0 h-0'
                  }`}
                  style={{
                    height: activeIndex === index ? contentRefs.current[index]?.scrollHeight + 'px' : 0,
                    overflow: 'hidden',
                  }}
                >
                  <div 
                    ref={el => contentRefs.current[index] = el}
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
            <h1 className="text-3xl font-bold text-[#060807]">Still Confused?</h1>
          </div>
          <button className="px-6 py-3 bg-[#991C1C] rounded-lg text-white font-semibold transition-all duration-700 ease-in-out bg-gradient-to-r from-[#991C1C] to-orange-700 hover:from-orange-700 hover:to-[#991C1C] md:block shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;