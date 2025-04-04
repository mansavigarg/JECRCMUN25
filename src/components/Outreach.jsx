import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { number: 180000, label: "Massive Outreach", color: "text-red-700" },
  { number: 3000, label: "Delegates", color: "text-black" },
  { number: 100, label: "International Delegates", color: "text-blue-700" },
  { number: 350, label: "Participating Institutes", color: "text-yellow-600" },
  { number: 15, label: "States and UTs", color: "text-green-700" },
];

const OutreachSection = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="outreach-section"
      ref={sectionRef}
      className="w-full bg-white py-16"
    >
      <div className="max-w-7xl mx-auto text-center px-4">
        <motion.h2
          className="text-5xl font- text-[#991C1C] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-black">Our</span> Outreach
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white shadow-lg rounded-xl flex flex-col items-center transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
            >
              <h2 className={`text-4xl md:text-5xl font- ${stat.color}`}>
                {startCount ? (
                  <CountUp start={0} end={stat.number} duration={3} separator="," />
                ) : (
                  "0"
                )}
              </h2>
              <p className="text-gray-700 mt-2 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OutreachSection;

