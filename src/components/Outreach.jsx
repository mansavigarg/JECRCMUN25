import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    number: 2600000,
    label: "Massive Outreach",
    color: "text-[#5231A4]",
    format: "lac",
  },
  { number: 3800, label: "Delegates", color: "text-[#060807]" },
  { number: 100, label: "International Delegates", suffix: "+", color: "text-[#5231A4]" },
  { number: 22, label: "Countries", color: "text-[#5231A4]" },
  { number: 360, label: "Participating Institutes", color: "text-[#5231A4]" },
  { number: 25, label: "States and UTs", suffix: "+", color: "text-[#5231A4]" },
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
          className="text-5xl font- text-[#5231A4] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-black">Our</span> Outreach
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full"
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
                  stat.format === "lac" ? (
                    <>
                      <CountUp
                        start={0}
                        end={stat.number / 100000}
                        duration={3}
                        decimals={0}
                      />
                      <span>Lac</span>
                    </>
                  ) : (
                    <>
                      <CountUp
                        start={0}
                        end={stat.number}
                        duration={3}
                        separator=","
                      />
                      {stat.suffix && <span>{stat.suffix}</span>}
                    </>
                  )
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
