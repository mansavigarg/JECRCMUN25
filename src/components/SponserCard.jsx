import React from "react";
import { motion } from "framer-motion";
import Sponser_1 from "../assets/sponser_1.jpg";
import Sponser_2 from "../assets/sponser_2.jpg";

// SponsorCard component included in the same file
const SponsorCard = ({ imgsrc, name, tier }) => {
  // Define different styles based on sponsor tier
  const getTierStyles = () => {
    switch (tier) {
      case "sustainability":
        return {
          cardClass: "border-[#991C1C] shadow-xl",
          nameClass: "text-2xl text-[#991C1C]",
          badgeColor: "bg-[#991C1C]",
        };
      case "photo-sharing":
        return {
          cardClass: "border-[#991C1C] border-opacity-70 shadow-lg",
          nameClass: "text-xl text-[#991C1C]",
          badgeColor: "bg-[#991C1C] bg-opacity-80",
        };
      default:
        return {
          cardClass: "border-gray-300",
          nameClass: "text-lg text-gray-700",
          badgeColor: "bg-gray-300",
        };
    }
  };

  const { cardClass, nameClass, badgeColor } = getTierStyles();

  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative bg-white border-2 rounded-lg overflow-hidden ${cardClass} h-64`}
    >
      {tier && (
        <div
          className={`absolute top-4 right-4 ${badgeColor} text-white text-xs font-bold py-1 px-2 rounded-full uppercase`}
        >
          {tier}
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        <div className="h-32 flex items-center justify-center mb-4 bg-gray-50 rounded overflow-hidden">
          <img
            src={imgsrc}
            alt={`${name} logo`}
            className="max-h-24 max-w-full object-contain"
          />
        </div>

        <h3 className={`font-bold mb-2 ${nameClass} line-clamp-2 overflow-hidden`}>
          {name || "Sponsor Name"}
        </h3>
      </div>
    </motion.div>
  );
};

// Main Sponsors component
const Sponsors = () => {
  // Placeholder for images
  const placeholderLogo = "/api/placeholder/200/100";

  // Sponsor data for the two partners
  const sponsors = {
    photography: {
      id: 1,
      name: "Kwikpic",
      logo: Sponser_1,
      tier: "photo-sharing"
    },
    sustainability: {
      id: 2,
      name: "Greenhub Systems Private Limited",
      logo: Sponser_2,
      tier: "sustainability"
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div className="w-full py-12 px-4 flex flex-col items-center bg-white">
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-10 text-center max-w-2xl"
      >
         <motion.h2
                 className="text-5xl font- text-[#991C1C] mb-12"
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 1 }}
               >
                 <span className="text-black">Our</span> Sponsers
               </motion.h2>
      </motion.div>

      {/* Sponsors grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-4xl flex flex-col md:flex-row justify-center gap-8"
      >
        {/* Photography Partner */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2"
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-semibold text-center pb-2 border-b-2 border-[#991C1C] inline-block">
              Photo-Sharing Partner
            </h3>
          </div>
          <SponsorCard
            imgsrc={sponsors.photography.logo}
            name={sponsors.photography.name}
            tier={sponsors.photography.tier}
          />
        </motion.div>

        {/* Sustainability Partner */}
        <motion.div
          variants={itemVariants}
          className="w-full md:w-1/2"
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-semibold text-center pb-2 border-b-2 border-[#991C1C] inline-block">
              Sustainability Partner
            </h3>
          </div>
          <SponsorCard
            imgsrc={sponsors.sustainability.logo}
            name={sponsors.sustainability.name}
            tier={sponsors.sustainability.tier}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Sponsors;