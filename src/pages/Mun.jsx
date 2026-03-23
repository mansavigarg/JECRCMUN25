import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Gallary from "../components/Gallary";
import { testimonial } from "../assets";
import Agenda from "../components/Agenda";
import CommonRegister from "../components/CommonRegister";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Registration from "./Registration";

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
      <div>
        <Navbar />
      </div>
      <div className="w-full py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 mt-12">
        {/* Background world map */}
        <img
          src={testimonial}
          className=" w-full h-auto absolute object-cover"
        />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-40 h-40 bg-[#5231A4] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div
          className="absolute bottom-20 left-10 w-40 h-40 bg-[#5231A4] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#5231A4] to-[#5231A4] mb-4 inline-block">
              MUN Conference
            </h1>
            <div className="w-24 h-1 bg-[#5231A4] mx-auto mb-4"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#5231A4]">
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
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#5231A4]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#5231A4]"
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
                    <h3 className="text-2xl font-bold text-[#5231A4] mb-2">
                      Our Vision
                    </h3>
                    <p className="text-gray-700">
                      To ignite youth empowerment through inclusive dialogue,
                      driving tangible global change.
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
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#5231A4]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#5231A4]"
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
                    <h3 className="text-2xl font-bold text-[#5231A4] mb-2">
                      Beyond the Classroom
                    </h3>
                    <p className="text-gray-700">
                      JECRC MUN provides an immersive experience, fostering
                      practical learning beyond traditional academic boundaries.
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
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#5231A4]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[#5231A4]"
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
                    <h3 className="text-2xl font-bold text-[#5231A4] mb-2">
                      Where Ideas Meet
                    </h3>
                    <p className="text-gray-700">
                      A hub for intellectual exchange and diplomatic engagement.
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
                    Unorthodox to the MUN culture in Jaipur, JECRC MUN was established in 2012 with a clear vision, 
i.e. to nurture future leaders through meaningful dialogue and diplomacy. As the city’s first 
academic institution to host a Model United Nations conference, we took on the responsibility of 
creating a platform where young minds could develop skills in international relations, public 
speaking, and critical thinking. With the guidance of our founding patron, Shri Kulbhushan Kothari, 
this vision has steadily grown into a strong and inspiring legacy.
                  </p>
                </div>

                <div className="scroll-animate transition-all duration-700 delay-200">
                  <p className="text-lg leading-relaxed">
                  Over 14 incredible years, JECRC MUN has evolved into one of Rajasthan’s most respected and large
scale debating platforms. Now celebrating its 15th edition, the conference has empowered more 
than 3,500 delegates, consistently growing in impact and reach. Even during challenging times like 
the pandemic, we adapted to virtual formats to ensure that the spirit of debate and diplomacy 
continued. This journey reflects our commitment to learning, growth, and creating opportunities no 
matter the circumstances.
                  </p>
                </div>

                <div className="mt-8 scroll-animate transition-all duration-700 delay-600">
                  <blockquote className="pl-4 border-l-4 border-[#5231A4] italic text-gray-600">
                    JECRC MUN is a celebration of ideas and a platform for
                    personal and academic growth, where students refine skills
                    to contribute to a better world.
                  </blockquote>

                  <div className="mt-8 flex justify-center">
                    <Link to="/registration">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-[#5231A4] to-[#5231A4] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() =>
                          fbq("trackCustom", "RegisterButtonClick")
                        }
                      >
                        Register Now!
                      </motion.button>
                    </Link>
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
              <div className="text-[#5231A4] text-4xl font-bold mb-2">14+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-[#5231A4] text-4xl font-bold mb-2">3,800</div>
              <div className="text-gray-600">Students Impacted</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <div className="text-[#5231A4] text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-600">Committees Represented</div>
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

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Mun;
