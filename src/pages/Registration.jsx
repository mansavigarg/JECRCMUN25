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
    "Gym Culture in Gen Z: Healthy Lifestyle or Obsession?",
    "Gen Z Activism: Nepal’s Revolution vs. India’s Youth Awakening",
    "India’s Athletic Dreams: A Work in Progress or a Distant Reality?",
    "Identity or Absurdity: The Crisis of Genuine LGBTQ+ Representation",
    "American Foreign Intervention: Quest for Peace or Pursuit of Power?",
    "International Press: Reporters & Cinematography",
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

        <div className="max-w-7xl mx-auto relative z-10 pb-20">
          {" "}
          {/* Added pb-20 for spacing */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-[#991c1c] mb-6 tracking-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              ZERO HOUR SUMMIT 5.0
            </motion.h1>
            <motion.div
              className="h-1 w-24 bg-[#991c1c] mx-auto mb-6"
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
          {/* Registration Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-16">
            {/* Individual Registration Card */}
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
                        ZHS 5.0
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        Individual Registration
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">Registration Fee</p>
                      <p className="text-4xl font-extrabold text-white">
                        ₹150
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  {/* --- UPDATED PRICE SECTION --- */}
                  <div className="mb-6" style={{ minHeight: "80px" }}>
                    {" "}
                    {/* Added min-height for visual balance */}
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#991c1c]"></div>
                      <p className="text-gray-700 font-bold">
                        Fee: ₹150 per person
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Agendas :
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {agendas.map((agenda, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-[#991c1c] flex-shrink-0"
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
                            {agenda}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://forms.gle/JnU2JW7UD5fVs2G1A">
                    <motion.button
                      className="w-full py-3 px-6 rounded-lg font-bold text-white bg-[#b02626] hover:bg-[#991c1c]"
                      onClick={() =>
                        fbq("trackCustom", "RegisterButtonClick")
                      }
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

            {/* Team Registration Card */}
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
                        ZHS 5.0
                      </span>
                      <h3 className="text-2xl font-bold text-white">
                        Team Registration
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="text-white/80 text-sm">Regular Fee</p>
                      <p className="text-4xl font-extrabold text-white">
                        ₹400
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8">
                  {/* --- PRICE SECTION (BULLET STYLE) --- */}
                  <div className="mb-6" style={{ minHeight: "80px" }}>
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#991c1c]"></div>
                      <p className="text-gray-700 font-bold">
                        Early Bird (till 12th Nov): ₹300/team
                      </p>
                    </div>
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#991c1c]"></div>
                      <p className="text-gray-700 font-bold">
                        Regular (from 13th Nov): ₹400/team
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Agendas :
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {agendas.map((agenda, idx) => (
                        <div key={idx} className="flex items-center">
                          <svg
                            className="w-4 h-4 mr-2 text-[#991c1c] flex-shrink-0"
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
                            {agenda}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://forms.gle/JnU2JW7UD5fVs2G1A">
                    <motion.button
                      className="w-full py-3 px-6 rounded-lg font-bold text-white bg-[#b02626] hover:bg-[#991c1c]"
                      onClick={() =>
                        fbq("trackCustom", "RegisterButtonClick")
                      }
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