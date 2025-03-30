import React from "react";
import { motion } from "framer-motion";
import Card3DWave from "../components/ui/Card3DWave";
import teamData from "../teamData/team.json";
import bannerImg from "../assets/banner2.jpg";

function Team() {
  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.9,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div
        className="w-full h-[40vh] flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-[#991C1C] tracking-wide uppercase shadow-lg"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          JECRCMUN
        </motion.h1>
        <h2 className="text-4xl font-bold text-[#000000] mt-4">Our Team</h2>
      </div>

      <div className="flex flex-col items-center py-5 px-4">
  <div className="space-y-16 max-w-7xl w-full">
    {teamData.map((vertical, index) => (
      <div key={index} className="flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">{vertical.title}</h2>
        <div className="flex flex-wrap justify-center gap-15 w-full">
          {vertical.members.map((member, memberIndex) => (
            <motion.div
              key={memberIndex}
              custom={memberIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <Card3DWave member={member} cardColor="#060807" accentColor="#991C1C" />
            </motion.div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}

export default Team;