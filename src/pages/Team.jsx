import React from "react";
import { motion } from "framer-motion";
import teamData from "../team.json";
import bannerImg from "../assets/banner2.jpg";
import TeamSection from "../components/ui/TeamSection.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
function Team() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="min-h-screen bg-white flex flex-col mt-24">
  <div
    className="w-full h-[30vh] sm:h-[38vh] flex flex-col items-center justify-center relative"
    style={{
      backgroundImage: `url(${bannerImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-[#991C1C]/80 to-white/50"></div>
    <div className="text-center mb-16 relative z-10">
      <motion.h1
        className="text-5xl md:text-7xl font-bold text-[#991c1c] mb-6 tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        JECRC MUN
      </motion.h1>
      <motion.div
        className="h-1 w-24 bg-[#991c1c] mx-auto mb-6"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      <motion.p
        className="text-4xl font-extrabold text-[#000000] max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Our Team
      </motion.p>
    </div>
  </div>

        <div className="flex flex-col items-center py-2 px-1 sm:py-4 sm:px-2">
          <TeamSection teamData={teamData} />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Team;
