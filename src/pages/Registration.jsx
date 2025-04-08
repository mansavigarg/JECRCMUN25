import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Registration = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Framer motion variants
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

  // Simplified card variants with consistent scaling
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

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-[#ffffff] via-[#ffff] to-[#ffffff] py-16 px-4 relative overflow-hidden mt-12">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#991c1c]"
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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-[#991c1c] mb-6 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Choose Your Role
            </motion.h1>
            <motion.div
              className="h-1 w-24 bg-[#991c1c] mx-auto mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            ></motion.div>
            <motion.p
              className="text-2xl font-medium text-[#000000] max-w-2xl mx-auto capitalize"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Select the role that best fits your profile
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-16">
            {/* Executive Board Card */}
            <motion.div
              className="w-full max-w-md"
              initial="default"
              animate={activeIndex === 0 ? "active" : "default"}
              variants={cardVariants}
              onHoverStart={() => setActiveIndex(0)}
              onHoverEnd={() => setActiveIndex(null)}
              layout
            >
              <div
                className={`rounded-xl overflow-hidden shadow-2xl bg-white ${
                  activeIndex === 0 ? "shadow-[#991c1c]" : ""
                }`}
              >
                {/* Card Header */}
                <div className="p-8 bg-gradient-to-r from-[#991c1c] to-[#7a1717]">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm mb-4">
                        JECRC MUN 2025
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        Executive Board
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">
                        {/* Delegation Fee */}
                      </p>
                      <p className="text-4xl font-extrabold text-white">
                        {/* ₹3000 */}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="mb-6">
                    {/* Executive Board has no special details in the original code */}
                  </div>

                  <div className="border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Committees :
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "UNSC",
                        "ECOFIN",
                        "UNHCR",
                        "COPUOS",
                        "AIPPM",
                        "SICCC",
                        "CBFC",
                        "IP",
                      ].map((committee, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-[#991c1c]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-gray-700 text-sm">
                            {committee}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSciZD1UVgm9Nuk2C-BeJ9iEFsiY0k8L0W1lkchmhKMAXqLxhA/viewform">
                    <motion.button
                      className="w-full py-3 px-6 rounded-lg font-bold text-white bg-[#b02626] hover:bg-[#991c1c]"
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

            {/* Delegate Card */}
            <motion.div
              className="w-full max-w-md"
              initial="default"
              animate={activeIndex === 1 ? "active" : "default"}
              variants={cardVariants}
              onHoverStart={() => setActiveIndex(1)}
              onHoverEnd={() => setActiveIndex(null)}
              layout
            >
              <div
                className={`rounded-xl overflow-hidden shadow-2xl bg-white ${
                  activeIndex === 1 ? "shadow-[#991c1c]" : ""
                }`}
              >
                {/* Card Header */}
                <div className="p-8 bg-gradient-to-r from-[#7a1717] to-[#b02626]">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm mb-4">
                        JECRC MUN 2025
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        Delegate
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">Delegation Fee</p>
                      <p className="text-4xl font-extrabold text-white">
                        ₹3000
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#991c1c]"></div>
                      <p className="text-gray-700 font-bold">
                        Priority Round 1 till 15th April: ₹ 2500/-
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#991c1c]"></div>
                      <p className="text-gray-700 font-bold">
                        Priority Round 2: ₹ 2750/-
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Committees :
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "UNSC",
                        "ECOFIN",
                        "UNHCR",
                        "COPUOS",
                        "AIPPM",
                        "SICCC",
                        "CBFC",
                      ].map((committee, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-[#991c1c]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span className="text-gray-700 text-sm">
                            {committee}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://docs.google.com/forms/d/1C91naJzBI6XcewO0djrsnhsrDeb0TzalyMVWu12VOjY/viewform?edit_requested=true">
                    <motion.button
                      className="w-full py-3 px-6 rounded-lg font-bold text-white bg-[#b02626] hover:bg-[#991c1c]"
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

            {/* International Press Card */}
            <motion.div
              className="w-full max-w-md"
              initial="default"
              animate={activeIndex === 2 ? "active" : "default"}
              variants={cardVariants}
              onHoverStart={() => setActiveIndex(2)}
              onHoverEnd={() => setActiveIndex(null)}
              layout
            >
              <div
                className={`rounded-xl overflow-hidden shadow-2xl bg-white ${
                  activeIndex === 2 ? "shadow-[#991c1c]" : ""
                }`}
              >
                {/* Card Header */}
                <div className="p-4 bg-gradient-to-r from-[#b02626] to-[#991c1c]">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm mb-4">
                        JECRC MUN 2025
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        International <br />
                        Press
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">Delegation Fee</p>
                      <p className="text-4xl font-extrabold text-white">
                        ₹3000
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#991c1c]"></div>
                      <p className="text-gray-700 font-bold">
                        Priority Round 1 till 15th April: ₹ 2500/-
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#991c1c]"></div>
                      <p className="text-gray-700 font-bold">
                        Priority Round 2: ₹ 2750/-
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      International Press:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Reporter", "Photographer", "Caricaturist"].map(
                        (committee, idx) => (
                          <div key={idx} className="flex items-center">
                            <svg
                              className="w-4 h-4 mr-2 text-[#991c1c]"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            <span className="text-gray-700 text-sm">
                              {committee}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <a href="https://docs.google.com/forms/d/1ejeSyU65Cfc6Z5y-_haE2dhneVbzebc5rOwSsV8ZhnI/viewform?edit_requested=true">
                    <motion.button
                      className="w-full py-3 px-6 rounded-lg font-bold text-white bg-[#b02626] hover:bg-[#991c1c]"
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

          {/* Bottom Wave */}
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
