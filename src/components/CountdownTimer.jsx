import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, ChevronRight } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 19,
    hours: 5,
    minutes: 20,
    seconds: 26,
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const targetDate = new Date("April 25, 2025 00:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-red-800 rounded-full opacity-5"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-red-700 rounded-full opacity-5"
          animate={{
            x: [0, -150, 0],
            y: [0, -100, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-3 text-red-800"
            animate={{
              textShadow: [
                "0px 0px 0px rgba(153,27,27,0)",
                "0px 0px 15px rgba(153,27,27,0.3)",
                "0px 0px 0px rgba(153,27,27,0)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            JECRC MUN 2025
          </motion.h1>
          <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto font-medium">
            Join Rajasthan's largest MUN conference and be part of a
            transformative experience.
          </p>
        </motion.div>

        {/* Countdown Container - Single Row */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-3 md:gap-6 my-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {countdownUnits.map((unit, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.08 }}
              >
                {/* Background animation when hovered */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute inset-0 bg-red-700 rounded-2xl -z-10"
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1.1, opacity: 1 }}
                    exit={{ scale: 0.7, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <motion.div
                  className="bg-red-800 rounded-2xl shadow-xl h-36 w-36 md:h-44 md:w-44 flex flex-col items-center justify-center overflow-hidden"
                  animate={hoveredIndex === index ? { y: -5 } : { y: 0 }}
                >
                  {/* Pulsing circle behind number */}
                  {/* <motion.div 
                    className="absolute w-20 h-20 bg-red-600 rounded-full opacity-30"
                    animate={{ 
                      scale: [1, 1.3, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  /> */}

                  {/* Value */}
                  <motion.div
                    className="text-5xl md:text-6xl font-bold text-white relative z-10"
                    animate={
                      hoveredIndex === index
                        ? { scale: 1.1, y: -5 }
                        : {
                            scale: [1, 1.03, 1],
                            transition: {
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut",
                            },
                          }
                    }
                  >
                    {unit.value}
                  </motion.div>

                  {/* Label */}
                  <motion.div
                    className="text-white text-lg font-semibold tracking-wider uppercase mt-2"
                    animate={hoveredIndex === index ? { y: -3 } : { y: 0 }}
                  >
                    {unit.label}
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Divider */}
              {index < countdownUnits.length - 1 && (
                <motion.div
                  className="text-red-800 font-bold text-2xl hidden md:block"
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.9, 1.1, 0.9],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  :
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Register Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="bg-red-800 text-white px-10 py-4 rounded-xl font-bold text-xl tracking-wide shadow-lg flex items-center justify-center mx-auto gap-3"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#991b1b",
              boxShadow: "0 10px 25px -5px rgba(153, 27, 27, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              REGISTER NOW
            </motion.span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
              <ChevronRight size={20} />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Animated footer line */}
        <motion.div
          className="h-1 bg-red-800 max-w-lg mx-auto mt-16 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, delay: 1 }}
        />
      </div>
    </div>
  );
};

export default CountdownTimer;
