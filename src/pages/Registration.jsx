import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Registration = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Framer motion variants (Unchanged)
  const backgroundElementVariants = {
    animate: (i) => ({
      y: [0, -20, 0, 20, 0],
      x: [0, 10, 20, 10, 0],
      transition: {
        duration: Math.random() * 15 + 10,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: Math.random() * 5,
      },
    }),
  };

  // Simplified card variants with consistent scaling (Unchanged)
  const cardVariants = {
    default: {
      scale: 1,
      opacity: 0.9,
      zIndex: 10,
      transition: { duration: 0.3 },
    },
    active: {
      scale: 1.05,
      opacity: 1,
      zIndex: 20,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.3 },
    },
  };

  // New Agenda List
  const agendas = [
    "UNSC: Assessing how effective humanitarian corridors and peacekeeping mandates are in modern asymmetric warfare.",
    "UNHCR: Exploring ways to shift refugees from aid dependency to sustainable economic self-reliance in host countries.",
    "UNCSW: Analyzing the global influence of women-led revolutions on policies, social structures, and feminist movements.",
    "UNODC: Tackling the global illicit arms trade through stronger regulations and disruption of black market networks.",
    "Lok Sabha: Debating corporate law reforms to decriminalize offences and improve ease of doing business in India.",
    "Summit on Artistic Management, Valuation, and AI Discourse: Examining the impact of AI on creativity, authorship, ethics, and the value of human expression.",
    "Historic Crisis Committee: Reviewing the 2008 Mumbai attacks to understand intelligence gaps and improve counter-terrorism strategies."
  ];

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-[#ffffff] via-[#ffff] to-[#ffffff] py-16 px-4 relative overflow-hidden mt-12">
        {/* Animated Background Elements (Unchanged) */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#5231A4]"
              custom={i}
              variants={backgroundElementVariants}
              animate="animate"
              style={{
                width: `${Math.random() * 20 + 5}px`,
                height: `${Math.random() * 20 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            ></motion.div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10 pb-20">
          {" "}
          {/* Added pb-20 for spacing */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-[#5231A4] mb-6 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              JECRC MUN 2026
            </motion.h1>
            <motion.div
              className="h-1 w-24 bg-[#5231A4] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <motion.p
              className="text-2xl font-medium text-[#000000] max-w-3xl mx-auto mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Get ready to bring your ideas, creativity, and debating spirit to
              life!
            </motion.p>
          </div>
          {/* Registration Cards - 3 Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 items-center max-w-6xl mx-auto">

            {/* Left Card - International Press (IP) */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                {/* Card Header */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#5231A4]/10 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#5231A4]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">International Press</h3>
                    <p className="text-gray-400 text-sm">(IP)</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <p className="text-xs font-semibold text-[#5231A4] uppercase tracking-wider mb-1">Priority Round 1</p>
                      <p className="text-3xl font-extrabold text-gray-900">₹2,000<span className="text-base font-normal text-gray-400">/-</span></p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Priority Round 2</p>
                      <p className="text-3xl font-extrabold text-gray-900">₹2,300<span className="text-base font-normal text-gray-400">/-</span></p>
                    </div>
                  </div>

                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIf8D5fG8sKkgDPfVKaF81co8KC6ZRXOuud1Yakh4C2j-7NQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="w-full py-3 px-6 rounded-xl font-semibold text-lg border-2 border-[#5231A4] text-[#5231A4] hover:bg-[#5231A4] hover:text-white transition-all duration-300"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      Register Now
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Middle Card - Priority Round 1 (Featured) */}
            <motion.div
              className="w-full md:scale-105 z-10"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#5231A4] hover:shadow-[0_20px_60px_-12px_rgba(82,49,164,0.5)] transition-all duration-300 relative">
                {/* Popular Badge */}
                <div className="absolute top-0 right-0 bg-yellow-400 text-[#5231A4] text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
                  Most Popular
                </div>

                {/* Card Header */}
                <div className="p-6 border-b border-white/10">
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm mb-3">
                      JECRC MUN
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">Priority Round 1</h3>
                    <p className="text-white/60 text-sm">Till 3rd April, 2026</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex justify-between items-center">
                        <p className="text-white font-medium text-sm">Single Delegation</p>
                        <p className="text-2xl font-extrabold text-white">₹2,400<span className="text-sm font-normal text-white/50">/-</span></p>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium text-sm">Double Delegation</p>
                          <p className="text-white/50 text-xs">(Only UNSC)</p>
                        </div>
                        <p className="text-2xl font-extrabold text-white">₹3,800<span className="text-sm font-normal text-white/50">/-</span></p>
                      </div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-white font-medium text-sm">International Press</p>
                          <p className="text-white/50 text-xs">(IP)</p>
                        </div>
                        <p className="text-2xl font-extrabold text-white">₹2,000<span className="text-sm font-normal text-white/50">/-</span></p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-4 mb-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <p className="text-xs font-semibold text-yellow-300 uppercase tracking-wider mb-2 text-center">Priority Round 2</p>
                      <div className="flex justify-between items-center">
                        <p className="text-white font-medium text-sm">Single Delegation</p>
                        <p className="text-2xl font-extrabold text-white">₹2,700<span className="text-sm font-normal text-white/50">/-</span></p>
                      </div>
                    </div>
                  </div>

                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIf8D5fG8sKkgDPfVKaF81co8KC6ZRXOuud1Yakh4C2j-7NQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="w-full py-3 px-6 rounded-xl font-bold text-lg bg-white text-[#5231A4] hover:bg-gray-100 transition-all duration-300 shadow-lg"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      Register Now
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Card - Double Delegation (Only UNSC) */}
            <motion.div
              className="w-full"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all duration-300">
                {/* Card Header */}
                <div className="p-6 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#5231A4]/10 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#5231A4]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Double Delegation</h3>
                    <p className="text-gray-400 text-sm">(Only UNSC)</p>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <p className="text-xs font-semibold text-[#5231A4] uppercase tracking-wider mb-1">Priority Round 1</p>
                      <p className="text-3xl font-extrabold text-gray-900">₹3,800<span className="text-base font-normal text-gray-400">/-</span></p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 text-center">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">Priority Round 2</p>
                      <p className="text-3xl font-extrabold text-gray-900">₹4,100<span className="text-base font-normal text-gray-400">/-</span></p>
                    </div>
                  </div>

                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdIf8D5fG8sKkgDPfVKaF81co8KC6ZRXOuud1Yakh4C2j-7NQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="w-full py-3 px-6 rounded-xl font-semibold text-lg border-2 border-[#5231A4] text-[#5231A4] hover:bg-[#5231A4] hover:text-white transition-all duration-300"
                      variants={buttonVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      Register Now
                    </motion.button>
                  </a>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Agendas Section */}
          <motion.div
            className="max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200">
              <div className="p-6 bg-gradient-to-r from-[#5231A4] to-[#5231A4]">
                <h3 className="text-2xl font-bold text-white text-center">Committee Agendas</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {agendas.map((agenda, idx) => (
                    <div key={idx} className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <svg
                        className="w-5 h-5 mr-3 text-[#5231A4] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-gray-700 text-sm leading-snug">
                        <span className="font-bold">{agenda.split(': ')[0]}: </span>
                        {agenda.split(': ')[1]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Wave (Unchanged) */}
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="rgba(255,255,255,0.1)"
                fillOpacity="1"
                d="M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,234.7C672,235,768,213,864,213.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ></path>
            </svg>
          </motion.div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Registration;