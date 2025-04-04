import React from "react";
import { motion } from "framer-motion";
import teamData from "../team.json";
import bannerImg from "../assets/banner2.jpg";
import TeamSection from "../components/ui/TeamSection.jsx";
function Team() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div
        className="w-full h-[30vh] sm:h-[28vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#991C1C] tracking-wide uppercase shadow-lg"
        >
          JECRCMUN
        </motion.h1>
        <h2 className="text-2xl sm:text-4xl font-bold text-[#000000] mt-2 sm:mt-4">Our Team</h2>
      </div>

      <div className="flex flex-col items-center py-2 px-1 sm:py-4 sm:px-2">
        <TeamSection teamData={teamData} />
      </div>
    </div>
  );
}

export default Team;