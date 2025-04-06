import React, { useState } from "react";
import { motion } from "framer-motion";
import SponserCard from "./SponserCard.jsx";

const MunTimeline = () => {
  const [activeDay, setActiveDay] = useState("day1");

  // Timeline data
  const timelineData = {
    day1: [
      {
        time: "9:00 am",
        event: "Check-In Opens",
        description: "Registration and credential collection.",
      },
      {
        time: "10:00 am",
        event: "Opening Ceremony",
        description: "Welcome address and introduction to the conference.",
      },
      {
        time: "10:30 am",
        event: "Commencement of Committee Sessions",
        description: "Delegates move to their assigned committees.",
      },
      {
        time: "1:00 pm",
        event: "Lunch",
        description: "Networking lunch for all delegates.",
      },
      {
        time: "5:00 pm",
        event: "High Tea",
        description: "Refreshments and informal discussions.",
      },
      {
        time: "5:45 pm",
        event: "Expert Talk",
        description: "Guest lecture on international relations.",
      },
      {
        time: "8:00 pm",
        event: "Dinner at HYAAT",
        description: "Formal dinner for all participants.",
      },
    ],
    day2: [
      {
        time: "9:30 am",
        event: "Committee Session Resumes",
        description: "Continuation of debates and discussions.",
      },
      {
        time: "1:00 pm",
        event: "Lunch",
        description: "Networking opportunity with delegates.",
      },
      {
        time: "2:00 pm",
        event: "Crisis Committee Update",
        description: "Special announcement for crisis committees.",
      },
      {
        time: "5:30 pm",
        event: "Closing Ceremony",
        description: "Awards and recognition of outstanding delegates.",
      },
      {
        time: "7:00 pm",
        event: "Gala Dinner",
        description: "Celebratory dinner and social event.",
      },
    ],
  };

  return (
    <div className="text-black min-h-screen p-6 flex justify-center items-center">
      <div className="relative bg-white/20 backdrop-blur-lg shadow-lg rounded-2xl p-8 max-w-4xl w-full border border-white/30">
        <div className="text-center mb-10">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600 inline-block mb-10"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Conference Timelines
          </motion.h1>
        </div>

        {/* Day Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {["day1", "day2"].map((day) => (
            <motion.button
              key={day}
              className={`px-6 py-2 rounded-full border transition-all ${
                activeDay === day
                  ? "bg-[#991C1C] border-[#991C1C]"
                  : "border-white/30 hover:border-white/50"
              }`}
              onClick={() => setActiveDay(day)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {day === "day1" ? "Day 1" : "Day 2"}
            </motion.button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative pl-12 md:pl-16 ml-4 md:ml-6">
          {/* Vertical Line */}
          <motion.div
            className="absolute  md:left-16 top-0 bottom-0 w-0.5 bg-black/30"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1 }}
          ></motion.div>

          {/* Timeline Events */}
          {timelineData[activeDay].map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-14"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 w-5 h-5 bg-[#991C1C] border-4 border-[#060807] rounded-full -translate-x-2.5"></div>

              {/* Content */}
              <div className="pl-6 md:pl-10">
                <div className="text-lg border w-25 flex justify-center bg-red-100 rounded-full p-1  md:text-xl text-black font-medium mb-2 semibold">
                  {item.time}
                </div>
                <div className="text-xl md:text-2xl font-bold mb-2">
                  {item.event}
                </div>
                <p className="text-black-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MunTimeline;
