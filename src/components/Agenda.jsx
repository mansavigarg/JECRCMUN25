import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Agenda = () => {
  const [selectedAgenda, setSelectedAgenda] = useState(null);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const agendas = [
    {
      id: 1,
      committee: "United Nations Security Council (UNSC)",
      title: "Humanitarian Corridors in Modern Asymmetric Warfare",
      subheading: "Evaluating the efficacy of peacekeeping mandates on the ground.",
      image: "/agenda-unsc.jpg",
      color: "bg-[#5231A4]",
    },
    {
      id: 2,
      committee: "United Nations High Commissioner for Refugees (UNHCR)",
      title: "Strengthening refugee self-reliance",
      subheading: "Transitioning from humanitarian aid to economic inclusion and livelihood security in host nations.",
      image: "/agenda-unhcr.png",
      color: "bg-[#5231A4]",
    },
    {
      id: 3,
      committee: "United Nations Commission on the Status of Women (UNCSW)",
      title: "Women-Led Revolutions and Global Change",
      subheading: "Evaluating the global impact of women-led revolutions on systemic policy, social hierarchies, and transnational feminist mobilization.",
      image: "/agenda-uncsw.jpg",
      color: "bg-[#5231A4]",
    },
    {
      id: 4,
      committee: "United Nations Office on Drugs and Crime (UNODC)",
      title: "Combating the Global Illicit Arms Trade",
      subheading: "Strengthening regulatory frameworks and dismantling black market networks.",
      image: "/agenda-unodc.jpg",
      color: "bg-[#5231A4]",
    },
    {
      id: 5,
      committee: "Lok Sabha",
      title: "Corporate Laws (Amendment) Bill, 2026",
      subheading: "Deliberation on decriminalizing offences and enhancing the ease of doing business in India.",
      image: "/agenda-loksabha.jpg",
      color: "bg-[#5231A4]",
    },
    {
      id: 6,
      committee: "Summit on Artistic Management, Valuation, and AI Discourse",
      title: "Artificial Intelligence and the Creative Economy",
      subheading: "Navigating authorship, ethical ownership, and the value of human expression.",
      image: "/agenda-samvad.jpg",
      color: "bg-[#5231A4]",
    },
    {
      id: 7,
      committee: "Historic Crisis Committee",
      title: "The 2008 Mumbai Attacks",
      subheading: "Analyzing intelligence failures, crisis management protocols, and the evolution of counter-terrorism frameworks.",
      image: "/agenda-hcc.jpg",
      color: "bg-[#5231A4]",
    },
  ];

  const handleAgendaClick = (id) => {
    setSelectedAgenda(selectedAgenda === id ? null : id);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 py-12"
      >
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="relative inline-block text-6xl font-bold mb-8">
            <span className="text-gray-100 absolute inset-0 z-0 opacity-60 select-none">
              AGENDAS
            </span>
            <span className="relative z-10">
              <span className="text-[#5231A4]">Our </span>
              <span className="text-[#5231A4]">AGENDAS</span>
            </span>
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Explore our comprehensive agendas spanning critical issues in
            politics, health, international relations, sports, and finance.
          </p>
        </motion.div>

        {/* Agendas Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8"
        >
          {agendas.map((agenda, index) => (
            <motion.div
              key={agenda.id}
              variants={fadeIn}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform ${index < 4 ? 'lg:col-span-3' : 'lg:col-span-4'}`}
            >
              <div className="relative overflow-hidden h-64">
                <div
                  className={`absolute top-4 left-4 ${agenda.color} text-white px-4 py-1 rounded-full z-10 font-semibold shadow-md`}
                >
                  {agenda.committee}
                </div>
                <motion.img
                  src={agenda.image}
                  alt={agenda.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 min-h-[4rem]">
                  {agenda.title}
                </h3>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleAgendaClick(agenda.id)}
                  className={`bg-[#5231A4] hover:bg-[#5231A4] text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center w-full mt-4`}
                >
                  Background Guide
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Expandable Content */}
              {selectedAgenda === agenda.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Background Information:
                    </h4>
                    <p className="text-gray-700">
                      {agenda.subheading}
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <a
            href="#"
            className="inline-block bg-[#5231A4] hover:bg-[#5231A4] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Agendas
          </a>
        </motion.div>

        {/* Footer */}
        {/* <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-20 pt-8 border-t border-gray-200 text-center text-gray-600"
            >
              <p>© 2025 Conference Agenda Portal. All rights reserved.</p>
            </motion.footer> */}
      </motion.div>

      {/* Floating back to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-[#5231A4] text-white p-3 rounded-full shadow-lg hover:bg-[#5231A4] transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </motion.button>
    </div>
  );
};

export default Agenda;
