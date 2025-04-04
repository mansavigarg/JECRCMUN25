import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Gallary from "../components/Gallary";
import { testimonial } from "../assets";
import Agenda from "../components/Agenda";
import CommonRegister from "../components/CommonRegister";

const Mun = () => {
  useEffect(() => {
    // Initialize AOS-like animation on scroll functionality
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            entry.target.style.opacity = 1;
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".scroll-animate").forEach((element) => {
      element.style.opacity = 0;
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll(".scroll-animate").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="">
      <div className="w-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Background world map */}
        <img
          src={testimonial}
          className=" w-full h-auto absolute object-cover"
        />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-40 h-40 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600 mb-4 inline-block">
              MUN Conference
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
              JECRCMUN
            </h2>
          </motion.div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Left column with feature cards - 2 cols */}
            <div className="lg:col-span-2 space-y-6">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-amber-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-amber-100 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-amber-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-900 mb-2">
                      Our Vision
                    </h3>
                    <p className="text-gray-700">
                      To empower youth through inclusive dialogue for impactful
                      change.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-orange-100 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-orange-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-900 mb-2">
                      A Mesmerizing Experience
                    </h3>
                    <p className="text-gray-700">
                      JECRC MUN takes you out from the world of textbooks and
                      lectures and encourages learning through hands-on
                      experience.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Ideas Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-red-100 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-red-900 mb-2">
                      Exchange Of Ideas
                    </h3>
                    <p className="text-gray-700">
                      Where minds meet, ideas collide, and diplomacy ignites at
                      the heart of every MUN event.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right column with main content - 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="lg:col-span-3 lg:pl-8 bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-gray-700 space-y-5">
                <div className="scroll-animate transition-all duration-700">
                  <p className="text-lg leading-relaxed">
                    JECRC Model United Nations (MUN) in Jaipur stands as a
                    dynamic platform merging intellect and diplomacy, nurturing
                    tomorrow's leaders. Staying true to the UN's spirit, we
                    facilitate constructive dialogue on diverse, complex issues,
                    fostering responsibility among young adults.
                  </p>
                </div>

                <div className="scroll-animate transition-all duration-700 delay-200">
                  <p className="text-lg leading-relaxed">
                    Located in Rajasthan's vibrant capital, we hold the
                    distinction of being the largest MUN in the state, with a
                    rich history dating back to its inception. Through our
                    flagship JECRC MUN conference, strategic partnerships, and
                    collaborative efforts, we inspire, challenge, and equip
                    youth with a deeper global understanding.
                  </p>
                </div>

                <div className="scroll-animate transition-all duration-700 delay-400">
                  <p className="text-lg leading-relaxed">
                    Since our establishment in 2012, we've embarked on a journey
                    of growth, continually elevating our standards and impacting
                    thousands annually. Attendees affirm our MUN's
                    transformative impact, enhancing personal growth over two
                    days of discussion.
                  </p>
                </div>

                <div className="mt-8 scroll-animate transition-all duration-700 delay-600">
                  <blockquote className="pl-4 border-l-4 border-orange-500 italic text-gray-600">
                    JECRC MUN is a celebration of ideas and a platform for
                    personal and academic growth, where students refine skills
                    to contribute to a better world.
                  </blockquote>

                  <div className="mt-8 flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 bg-gradient-to-r from-red-800 to-red-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Join Us Today!
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-red-800 text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-red-800 text-4xl font-bold mb-2">5,000+</div>
              <div className="text-gray-600">Students Impacted</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-red-800 text-4xl font-bold mb-2">20+</div>
              <div className="text-gray-600">Countries Represented</div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Gallary Section */}
      <div>
        <Gallary />
      </div>


      {/* Agenda */}
      {/* <div>
        <Agenda />
      </div> */}

      {/* Register */}
      <div>
        <CommonRegister />
      </div>

    </div>
  );
};

export default Mun;
