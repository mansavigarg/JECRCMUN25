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
          {/* Registration Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-16">
            {/* MUN Delegate Registration Card */}
            <motion.div
              className="w-full max-w-2xl"
              initial="default"
              animate={activeIndex === 0 ? "active" : "default"}
              variants={cardVariants}
              onHoverStart={() => setActiveIndex(0)}
              onHoverEnd={() => setActiveIndex(null)}
              layout
            >
              <div
                className={`rounded-xl overflow-hidden shadow-2xl bg-white ${
                  activeIndex === 0 ? "shadow-[#5231A4]" : ""
                }`}
              >
                {/* Card Header */}
                <div className="p-6 bg-gradient-to-r from-[#5231A4] to-[#5231A4]">
                  <div className="flex justify-between items-start flex-col sm:flex-row gap-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm mb-4">
                        JECRC MUN
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Participate as a MUN Delegate
                      </h3>
                    </div>
                    <div className="text-left sm:text-right">
                      <p className="text-white/80 text-sm">Registration Fee</p>
                      <p className="text-4xl font-extrabold text-white">
                        ₹2400
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 rounded-full mr-2 bg-[#5231A4]"></div>
                      <p className="text-gray-700 font-bold">
                        Fee: ₹2400 per person
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                      Agendas :
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {agendas.map((agenda, idx) => (
                        <div key={idx} className="flex items-start">
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
                          <span className="text-gray-700 text-xs md:text-sm leading-snug">
                            <span className="font-bold">{agenda.split(': ')[0]}: </span>
                            {agenda.split(': ')[1]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://forms.gle/JnU2JW7UD5fVs2G1A">
                    <motion.button
                      className="w-full py-4 px-6 rounded-lg font-bold text-lg text-white bg-[#5231A4] hover:bg-black"
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