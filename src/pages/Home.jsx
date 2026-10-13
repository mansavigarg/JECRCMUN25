import React from "react";

import { motion } from "framer-motion";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Navbar from "../components/Navbar";

import OutreachSection from "../components/Outreach";

import CountdownTimer from "../components/CountdownTimer";

import Footer from "../components/Footer.jsx";

import AfterMovie from "../components/Aftermovie.jsx";

// import SponserCard from "../components/SponserCard.jsx"

import { Link } from "react-router-dom";

import { mun4, mun5, mun3 } from "../assets/index.js";




const agendas = [

  {

    title: "The Return of Trade Wars",

    subtitle: "Protection of National Interests or a Threat to Globalisation?",

    tag: "UN COMMITTEE 1",

    image: "/agenda-unsc.jpg",

    bgColor: "bg-[#5231A4]",

  },

  {

    title: 'The "Protect Her" Paradox',

    subtitle: "Individual Burden or Society's Responsibility?",

    tag: "UN COMMITTEE 2",

    image: "/agenda-unhcr.png",

    bgColor: "bg-[#5231A4]",

  },

  {

    title: "The Trojan War",

    subtitle: "A War of Honour or a War of Deception?",

    tag: "SPECIAL COMMITTEE 1",

    image: "/agenda-uncsw.png",

    bgColor: "bg-[#5231A4]",

  },

  {

    title: "Stan Culture: Community or Obsession?",

    subtitle: "Does modern fandom create belonging or fuel unhealthy obsession?",

    tag: "SPECIAL COMMITTEE 2",

    image: "/agenda-unodc.jpg",

    bgColor: "bg-[#5231A4]",

  },

  {

    title: "The Concept of Cockroach Janta Party",

    subtitle: "Genuine Public Dissent or Performative Protest?",

    tag: "INDIAN COMMITTEE 1",

    image: "/agenda-loksabha.jpg",

    bgColor: "bg-[#5231A4]",

  },

  {

    title: "Hosting the Commonwealth Games 2030",

    subtitle: "A Global Opportunity or an Unnecessary Economic Burden?",

    tag: "INDIAN COMMITTEE 2",

    image: "/agenda-samvad.jpg",

    bgColor: "bg-[#5231A4]",

  },

  {

    title: "Freedom of Expression vs Threshold of Tolerance",

    subtitle: "Should Free Expression Have Limits?",

    tag: "INDIAN COMMITTEE 3",

    image: "/agenda-hcc.jpg",

    bgColor: "bg-[#5231A4]",

  },

  {

    title: "International Press",

    subtitle: "Reporters, Caricaturists and Photographers",

    tag: "PRESS",

    image: "/agenda-samvad.jpg",

    bgColor: "bg-[#5231A4]",

  },

];





const itemVariants = {

  hidden: { opacity: 0, y: 20 },

  visible: {

    opacity: 1,

    y: 0,

    transition: { duration: 0.7 },

  },

};



const Home = () => {



  return (

    <div className="relative w-auto h-auto bg-white">

      {/* Navbar */}

      <div>

        <Navbar />

      </div>



      {/* New Hero Section with Text Box */}

      <div className="relative w-full h-screen">

  {/* Background Image with Gradient Overlay */}

  <div className="absolute inset-0 overflow-hidden">

    <video

      className="absolute min-w-full min-h-full object-cover"

      autoPlay

      muted

      loop

      playsInline

    >

      <source src="/video/Short.webm" type="video/webm" />

    </video>

    {/* Top Gradient */}

    <div className="absolute inset-0 bg-gradient-to-b from-[#5231A4]/70 via-[#5231A4]/20 to-transparent z-10 pointer-events-none"></div>

    {/* Bottom Gradient */}

    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-[#5231A4]/20 to-transparent z-10 pointer-events-none"></div>

  </div>



  {/* Content Container */}

  <div className="flex flex-col items-center justify-center h-screen w-full px-2 sm:px-4 pt-24 sm:pt-28 relative">



    {/* Zero Hour Submit homepage title */}

    <div className="flex flex-col items-center justify-center mb-8 z-20 text-center w-full px-2">

      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-tight tracking-tight flex flex-col items-center w-full text-white">

        <span className="block text-white opacity-100">ZERO HOUR</span>

        <span className="block text-white opacity-100">SUBMIT</span>

        <span className="block text-white opacity-100">2026</span>

      </h1>

      <div className="font-black text-white uppercase mt-2 tracking-widest drop-shadow-md text-center text-lg sm:text-2xl md:text-3xl">

        6th Edition

      </div>

    </div>







    {/* Priority Round Text */}

    {/* <div className="text-center mb-1 z-20">

      <p className="text-white font-bold text-lg md:text-xl ">

        <span className="bg-[#5231A4]/100 text-white px-4 py-1 rounded-md">

          Priority Round 1 till 15th April: ₹ 2500/-

        </span>

      </p>

    </div> */}



    {/* Register Now Button */}

    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="z-20">

      <a 

        href="https://docs.google.com/forms/d/e/1FAIpQLSdIf8D5fG8sKkgDPfVKaF81co8KC6ZRXOuud1Yakh4C2j-7NQ/viewform?usp=dialog" 

        target="_blank" 

        rel="noopener noreferrer"

      >

        <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white text-xl font-bold py-3 px-10 rounded-xl shadow-[0_8px_32px_0_rgba(255,255,255,0.2)] transition-all duration-300 hover:bg-white/30 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.4)]"

        onClick={() => {

          if (typeof fbq === 'function') fbq("trackCustom", "RegisterButtonClick");

        }}

        >



          Register Now

        </button>

      </a>

    </motion.div>

  </div>



  {/* Sidebar Social Media Icons - Hidden on small screens */}

  <div className="absolute left-4 md:left-5 top-1/2 space-y-3 md:space-y-4 z-10 hidden sm:block">

    {[

      { Icon: FaInstagram, url: "https://www.instagram.com/jecrcmun/" },

      {

        Icon: FaLinkedinIn,

        url: "https://www.linkedin.com/company/jecrc-mun/",

      },

    ].map(({ Icon, url }, idx) => (

      <motion.a

        key={idx}

        href={url}

        target="_blank"

        rel="noopener noreferrer"

        className="p-3 md:p-4 bg-[#5231A4] rounded-md shadow-md flex items-center justify-center cursor-pointer hover:bg-opacity-80"

        whileHover={{ scale: 1.2, rotate: 5 }}

        whileTap={{ scale: 0.9 }}

        transition={{ type: "spring", stiffness: 300 }}

      >

        <Icon className="text-white text-lg md:text-xl" />

      </motion.a>

    ))}

  </div>



  {/* Mobile Social Icons Row */}

  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-50 sm:hidden">

    {[

      { Icon: FaInstagram, url: "https://www.instagram.com/jecrcmun/" },

      {

        Icon: FaLinkedinIn,

        url: "https://www.linkedin.com/company/jecrc-mun/",

      },

    ].map(({ Icon, url }, idx) => (

      <motion.a

        key={idx}

        href={url}

        target="_blank"

        rel="noopener noreferrer"

        className="p-2 bg-[#5231A4] rounded-md shadow-md flex items-center justify-center cursor-pointer hover:bg-opacity-80"

        whileHover={{ scale: 1.1 }}

        whileTap={{ scale: 0.9 }}

      >

        <Icon className="text-white text-sm" />

      </motion.a>

    ))}

    <Link to="/faqs">

      <motion.button

        className="relative flex items-center justify-center px-3 py-2 md:px-4 md:py-3 text-sm md:text-lg font-semibold bg-[#5231A4] text-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 transition-all hover:bg-opacity-100 hover:shadow-2xl"

        whileHover={{ scale: 1.15, y: -3 }}

        whileTap={{ scale: 0.95 }}

      >

        FAQs

      </motion.button>

    </Link>



    {/* <motion.button

      className="relative flex items-center justify-center px-3 py-2 md:px-4 md:py-3 text-sm md:text-lg font-semibold bg-[#5231A4] text-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 transition-all hover:bg-opacity-100 hover:shadow-2xl"

      whileHover={{ scale: 1.15, y: -3 }}

      whileTap={{ scale: 0.95 }}

      onClick={() => {

        const section = document.getElementById("timeline");

        section?.scrollIntoView({ behavior: "smooth" });

      }}

    >

      Itinerary

    </motion.button> */}

  </div>



  {/* Desktop FAQs and Itinerary Buttons */}

  <div className="hidden md:flex absolute right-4 md:right-5 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-4 md:space-y-6 z-50">

    {/* FAQs Button */}

    <Link to="/faqs">

      <motion.button

        className="relative flex items-center justify-center px-3 py-2 md:px-4 md:py-3 text-sm md:text-lg font-semibold bg-[#5231A4] text-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 transition-all hover:bg-opacity-100 hover:shadow-2xl"

        whileHover={{ scale: 1.15, y: -3 }}

        whileTap={{ scale: 0.95 }}

      >

        FAQs

      </motion.button>

    </Link>



    {/* itinerary Button */}

    {/* <motion.button

      className="relative flex items-center justify-center px-3 py-2 md:px-4 md:py-3 text-sm md:text-lg font-semibold bg-[#5231A4] text-white rounded-xl shadow-lg backdrop-blur-lg bg-opacity-90 transition-all hover:bg-opacity-100 hover:shadow-2xl"

      whileHover={{ scale: 1.15, y: -3 }}

      whileTap={{ scale: 0.95 }}

      onClick={() => {

        const section = document.getElementById("timeline");

        section?.scrollIntoView({ behavior: "smooth" });

      }}

    >

      Itinerary

    </motion.button> */}

  </div>

      </div>







      {/* Counter by Mansavi */}

      <div>

        <CountdownTimer />

      </div>



      {/* About MUN Section */}

      <section className="relative bg-white py-14 md:py-20 px-6 md:px-12">

        {/* Background pattern */}

        <div className="absolute inset-0 opacity-5 z-0 bg-[url('/path-to-world-map.png')] bg-no-repeat bg-cover"></div>



        <div className="relative z-10 container mx-auto">

          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left: Info Cards */}

            <motion.div

              className="w-full lg:w-1/2 space-y-6"

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true, amount: 0.2 }}

            >

              {[

                {

                  title: "ELEVATE YOUR RESUME",

                  desc: "Hone your public speaking, writing, and analytical skills through hands-on experience.",

                  icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",

                },

                {

                  title: "NETWORK WITH KINDRED SPIRITS",

                  desc: "Meet talented individuals, discover new cultures, and gain different perspectives.",

                  icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9",

                },

                {

                  title: "RECOGNIZE GLOBAL ISSUES",

                  desc: "Address global challenges through diplomacy and collaboration.",

                  icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",

                },

              ].map((card, index) => (

                <motion.div

                  key={index}

                  className="bg-white rounded-lg p-6 shadow-md border-l-4 border-black transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl flex items-start"

                >

                  <div className="mr-4 flex-shrink-0">

                    <div className="bg-orange-100 p-3 rounded-full">

                      <svg

                        xmlns="http://www.w3.org/2000/svg"

                        className="h-6 w-6 text-black"

                        fill="none"

                        viewBox="0 0 24 24"

                        stroke="currentColor"

                      >

                        <path

                          strokeLinecap="round"

                          strokeLinejoin="round"

                          strokeWidth={2}

                          d={card.icon}

                        />

                      </svg>

                    </div>

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-[#5231A4] mb-2">

                      {card.title}

                    </h3>

                    <p className="text-gray-600">{card.desc}</p>

                  </div>

                </motion.div>

              ))}

            </motion.div>



            {/* Right: Description */}

            <motion.div

              className="w-full lg:w-1/2 text-center lg:text-left"

              initial={{ opacity: 0, x: 30 }}

              whileInView={{ opacity: 1, x: 0 }}

              transition={{ duration: 0.8 }}

              viewport={{ once: true, amount: 0.2 }}

            >

              <h2 className="text-3xl md:text-5xl font-bold mb-6 justify-content">

                <span className="text-[#5231A4]">Why Should You</span>

                <br />

                <span className="text-black">Participate in JECRC MUN?</span>

              </h2>



              <div className="text-base md:text-md text-gray-700 space-y-4 leading-relaxed justify-content">

                <p>

                  Participating in JECRC MUN offers students a valuable

                  opportunity to develop essential skills while gaining a deeper

                  understanding of global affairs. Through diplomatic

                  simulations, delegates enhance their abilities in negotiation,

                  public speaking, research, and critical thinking while

                  exploring important international issues and the functioning

                  of real-world diplomacy.

                </p>

                <p>

                  Interacting with participants from diverse backgrounds fosters

                  cultural awareness, collaboration, and empathy, while

                  leadership roles help build confidence, strengthen

                  decision-making, and improve conflict-resolution skills.

                  Overall, JECRC MUN provides a platform for networking with

                  individuals interested in international relations and

                  diplomacy, encouraging personal growth, global awareness, and

                  intellectual development.

                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </section>



      <section

        id="about-mun"

        className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between"

      >

        {/* Left Text Section */}



        <div className="md:w-5/12 text-left space-y-6">

          {/* Heading with Mobile-Centered, Desktop-Left Text Alignment */}

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">

            <span className="text-[#5231A4]">About</span>

            <br />

            <span className="text-black">JECRC MUN</span>

          </h2>



          {/* Description Paragraphs */}

          <motion.p

            className="text-lg text-center md:text-left text-gray-700 leading-relaxed opacity-95"

            initial={{ opacity: 0, y: 10 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 0.2 }}

          >

            JECRC MUN is a thriving community dedicated to empowering youth in

            discussing, debating, and tackling global crises, fostering

            groundbreaking solutions for international imbalances.

          </motion.p>



          <motion.p

            className="text-lg text-center md:text-left text-gray-700 leading-relaxed opacity-95"

            initial={{ opacity: 0, y: 10 }}

            whileInView={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8, delay: 0.4 }}

          >

            Established in 2012 by Shri Kulbhushan Kothari, JECRC pioneered

            Model UN in Jaipur, becoming Rajasthan's second institution to

            introduce this prestigious platform for leadership and diplomacy.

          </motion.p>



          {/* Call-to-Action Button */}

          <div className="flex justify-center md:justify-start">

            <Link to="/aboutmun">

              <motion.button

                className="mt-6 px-6 py-3 bg-[#5231A4] text-white font-medium rounded-lg shadow-md hover:bg-[#5231A4] hover:scale-105 transform transition-all duration-300 ease-in-out"

                initial={{ opacity: 0, scale: 0.9 }}

                whileInView={{ opacity: 1, scale: 1 }}

                transition={{ duration: 0.5, delay: 0.6 }}

              >

                Learn More

              </motion.button>

            </Link>

          </div>

        </div>



        {/* Right Image Section */}

        <div className="md:w-6/12 grid grid-cols-2 gap-4 mt-12 md:mt-0 animate-fadeIn">

          <div className="relative group">

            <img

              src={mun5}

              alt="Speaker at JECRC MUN"

              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105 duration-300"

            />

            <div className="absolute inset-0 bg-black/50 bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

              <span className="text-white text-lg font-semibold">

                Inspiring Speeches

              </span>

            </div>

          </div>

          <div className="relative group">

            <img

              src={mun3}

              alt="Delegates at JECRC MUN"

              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105 duration-300"

            />

            <div className="absolute inset-0 bg-black/50 bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

              <span className="text-white text-lg font-semibold">

                Engaged Delegates

              </span>

            </div>

          </div>

          <div className="relative group col-span-2">

            <img

              src={mun4}

              alt="Conference at JECRC MUN"

              className="w-full h-64 object-cover rounded-lg shadow-lg transition-transform transform group-hover:scale-105 duration-300"

            />

            <div className="absolute inset-0 bg-black/50 bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

              <span className="text-white text-lg font-semibold">

                Global Discussions

              </span>

            </div>

          </div>

        </div>

      </section>

      <OutreachSection />



      <section className="bg-white py-16 px-6 md:px-16">

        {/* Section Heading */}

        <div className="text-center mb-12">

          <h2 className="text-5xl font text-gray-900 relative inline-block">

            Our <span className="text-[#5231A4] drop-shadow-lg">Agendas</span>

          </h2>

          <p className="text-gray-500 text-xl mt-5">

            Explore our latest Model UN topics.

          </p>

        </div>



        {/* Agendas Grid */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">

          {agendas.map((agenda, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 50 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5, delay: index * 0.1 }}

              whileHover={{ scale: 1.05 }}

              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition ${index < 4 ? 'lg:col-span-3' : 'lg:col-span-4'}`}

            >

              {/* Image */}

              <div className="h-48 overflow-hidden">

                <img

                  src={agenda.image}

                  alt={agenda.title}

                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"

                />

              </div>



              <div className="p-6">

                {/* Tag */}



                <span

                  className={`absolute top-3 right-3 font-semibold text-white px-3 py-1 rounded-xl ${agenda.bgColor}`}

                >

                  {agenda.tag}

                </span>







                {/* Title & Description */}

                <h3 className="text-xl font-semibold text-gray-900 capitalize">

                  {agenda.title}

                </h3>

                <p className="text-gray-500 text-sm mt-2">{agenda.subtitle}</p>



                {/* Button */}

                {/* <button className="bottom-0 mt-4 px-5 py-2 bg-[#5231A4] text-white font-medium rounded-lg hover:bg-red-800 transition">

                  Background Guide →

                </button> */}

              </div>

            </motion.div>

          ))}

        </div>

      </section>



      {/* <section id='timeline'>

        <MunTimeline />

      </section> */}



           {/* Speakers section temporarily hidden until speaker details are ready */}



      <section>

        <AfterMovie />

      </section>

      {/* Testimonials temporarily hidden until updated reviews are added */}



      {/* Floating Animation Elements */}

      <motion.div

        className="absolute top-1/3 left-0 w-24 h-24 bg-[#5231A4] opacity-20 rounded-full blur-3xl"

        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}

        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}

      ></motion.div>



      <motion.div

        className="absolute bottom-10 right-0 w-16 h-16 bg-[#5231A4] opacity-20 rounded-full blur-3xl"

        animate={{ x: [0, -30, 30, 0], y: [0, -20, 20, 0] }}

        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}

      ></motion.div>



      {/* <div>

        <SponserCard/>

      </div> */}



      <div>

        <Footer />

      </div>

    </div>

  );

};



export default Home;

