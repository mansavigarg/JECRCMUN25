import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const AfterMovie = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [activeTab, setActiveTab] = useState("JECRCMUN2024");
  const [isPlaying, setIsPlaying] = useState(false);

  // Updated color theme with light background
  const colors = {
    primary: "#991C1C", // Primary accent color
    text: "#2A2A2A", // Text color for light background
    dark: "#060807", // Dark color for contrasts
    background: "#FFFFFF", // Light background color
    neutral: "#555555", // Neutral dark shade
    border: "#DDDDDD", // Border color
  };

  // Event data with video sources added
  const events = {
    JECRCMUN2024: {
      title: "JECRC MUN 2024",
      subtitle: "A Preview Of Diplomatic Excellence",
      tagline: "EMPOWERING DELIBERATIONS",
      description: "SHAPING THE WORLD",
      thumbnailAlt: "JECRC MUN 2024 Aftermovie Thumbnail",
      infoText:
        "Join us for the prestigious Model United Nations conference and be part of the global change-makers community.",
      videoSrc: "/video/munclips.mp4",
      thumbnailSrc: "/templates/ReelTemplate.png",
    },
    ZHS: {
      title: "ZERO HOUR SUMMIT 4.0",
      subtitle: "AFTERMOVIE",
      tagline: "GLOBAL PERSPECTIVES",
      description: "INNOVATIVE SOLUTIONS",
      thumbnailAlt: "Zero Hour Summit Aftermovie Thumbnail",
      infoText:
        "Experience the convergence of international diplomacy and innovative problem-solving in this landmark event.",
      videoSrc: "/video/zhsclips.mp4",
      thumbnailSrc: "/templates/ZHS.png",
    },
    VicharVimarsh: {
      title: "VICHAR VIMARSH",
      subtitle: "Intellectual Discourse Forum",
      tagline: "EXCHANGE OF IDEAS",
      description: "FOSTERING CRITICAL THINKING",
      thumbnailAlt: "Vichar Vimarsh Discussion Forum Thumbnail",
      infoText:
        "An open platform for intellectual dialogue and debate on contemporary socio-political issues that shape our society and future.",
      videoSrc: "/video/VVclips.mp4",
      thumbnailSrc: "/templates/VV.png",
    },
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const tabVariants = {
    inactive: {
      opacity: 0.8,
      fontWeight: 500,
    },
    active: {
      opacity: 1,
      fontWeight: 600,
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      backgroundColor: "#B22323",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  // Function to handle play button click
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setIsPlaying(false); // Reset video playback when changing tabs
  };

  return (
    <section
      className="relative w-full overflow-hidden py-10 sm:py-12 lg:py-16"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
    >
      <motion.div
        ref={containerRef}
        className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8"
        style={{
          // boxShadow:
          //   "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          // border: `1px solid ${colors.border}`,
          borderRadius: "8px",
          padding: "24px",
          marginTop: "12px",
          marginBottom: "12px",
          backgroundColor: colors.background,
        }}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/*circle */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div
            className="absolute -right-40 -top-40 w-80 h-80 rounded-full"
            style={{ background: colors.primary }}
          ></div>
          <div
            className="absolute -left-20 bottom-1/4 w-64 h-64 rounded-full"
            style={{ background: colors.primary }}
          ></div>
        </div>

        {/* Top section with join text */}
        {/* <motion.div
          variants={itemVariants}
          className="text-center mb-4 sm:mb-6"
        >
            <span className=" px-6 py-2 rounded-full text-sm md:text-base font-medium inline-flex items-center shadow-lg border relative overflow-hidden group">
              <span className="absolute inset-0  transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
              <span className="w-2 h-2 bg-red-600 rounded-full mr-2 relative z-10"></span>
              <span className="relative z-10">Join JECRC MUN 2025</span>
            </span>
        </motion.div> */}

        {/* Tabs - Updated with Vichar Vimarsh */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-5 sm:mb-3"
        >
          <div className="inline-flex rounded-full shadow-md bg-gray-100 p-1">
            {Object.keys(events).map((eventKey) => (
              <motion.button
                key={eventKey}
                onClick={() => handleTabChange(eventKey)}
                className={`relative px-6 py-2 text-xs sm:text-sm font-bold rounded-full transition-all
                  ${activeTab === eventKey ? "text-white" : "text-gray-700"}`}
                variants={tabVariants}
                animate={activeTab === eventKey ? "active" : "inactive"}
                whileHover={{ opacity: 1 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor:
                    activeTab === eventKey ? colors.primary : "transparent",
                }}
              >
                {activeTab === eventKey && (
                  <motion.span
                    className="absolute inset-0 rounded-full"
                    layoutId="tabHighlight"
                    style={{ backgroundColor: colors.primary }}
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {eventKey === "VicharVimarsh" ? "Vichar Vimarsh" : eventKey}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Dynamic content based on active tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full"
          >
            {/* Main title text */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-5 sm:mb-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight">
                {events[activeTab].title}
              </h2>
              <p
                className="text-lg capitalize sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-1 sm:mt-2"
                style={{ color: colors.primary }}
              >
                {events[activeTab].subtitle}
              </p>
            </motion.div>

            {/* Video container with border and enhanced shadow */}
            <motion.div
  variants={itemVariants}
  className="relative rounded-lg overflow-hidden mx-auto max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-3xl xl:max-w-4xl"
  style={{
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)",
    border: `1px solid ${colors.border}`,
  }}
  whileHover={{ scale: 1.01 }}
  transition={{ duration: 0.3 }}
>
  {/* Conditional rendering: Video player or Thumbnail */}
  <div className="relative aspect-video bg-gray-100">
    {isPlaying ? (
      <video
        src={events[activeTab].videoSrc}
        className="w-full h-full object-cover"
        controls
        autoPlay
        onEnded={() => setIsPlaying(false)}
      />
    ) : (
      <>
        <img
          src={events[activeTab].thumbnailSrc}
          alt={events[activeTab].thumbnailAlt}
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center cursor-pointer"
            style={{
              backgroundColor: colors.primary,
              boxShadow:
                "0 10px 15px -3px rgba(153, 28, 28, 0.3), 0 4px 6px -2px rgba(153, 28, 28, 0.15)",
            }}
            whileHover={{ scale: 1.1, backgroundColor: "#B22323" }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            onClick={handlePlayVideo}
          >
            <svg
              className="w-5 h-5 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white ml-0.5 sm:ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </motion.div>
        </div>

        {/* Bottom info bar */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between">
            <div>
              <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-wide text-white">
                {events[activeTab].tagline}
              </h3>
              <p className="text-sm lg:text-base text-white opacity-90 mt-1">
                {events[activeTab].description}
              </p>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
</motion.div>

            {/* Bottom section with extra info and button */}
            <Link to="/registration">
              <motion.div
                variants={itemVariants}
                className="mt-6 sm:mt-8 lg:mt-10 text-center"
              >
                <p className="text-xs sm:text-sm lg:text-base max-w-md sm:max-w-lg lg:max-w-xl mx-auto opacity-90">
                  {events[activeTab].infoText}
                </p>

                <motion.div
                  className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 justify-center items-center"
                  variants={itemVariants}
                >
                  <motion.button
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                    className="w-full sm:w-auto px-8 sm:px-10 py-3 text-sm sm:text-base rounded-md font-medium text-white"
                    style={{
                      backgroundColor: colors.primary,
                      boxShadow:
                        "0 4px 6px -1px rgba(153, 28, 28, 0.3), 0 2px 4px -1px rgba(153, 28, 28, 0.15)",
                    }}
                  >
                    Register for MUN 2025
                  </motion.button>
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default AfterMovie;
