import React, { useEffect, useState,useRef } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDiscord, FaYoutube } from "react-icons/fa";
import Navbar from "../components/Navbar";
import OutreachSection from "../components/Outreach";
import { FaQuoteLeft, FaStar  } from "react-icons/fa";


const images = ["/bg1.jpg", "/bg 2.jpg", "/bg3.jpg"];

const agendas = [
  {
    title: "Addressing Discrimination Against Refugees",
    subtitle: "With Special Emphasis On The Syrian Refugee Crisis",
    tag: "UNHCR",
    image: "/bg8.jpg",
    bgColor: "bg-red-600",
  },
  {
    title: "Governance & Environmental Conservation In Ladakh",
    subtitle: "Demands For Statehood, Tribal Status & Protection",
    tag: "LOK SABHA",
    image: "/bg9.jpg",
    bgColor: "bg-yellow-600",
  },
  {
    title: "De-Dollarization & Global Financial Stability",
    subtitle: "Impact of Reducing Reliance on US Dollar",
    tag: "IMF",
    image: "/bg10.jpg",
    bgColor: "bg-orange-600",
  },
  {
    title: "Ceasefire in Gaza & Hostage Crisis",
    subtitle: "Ensuring Permanent Ceasefire & Addressing Hostages",
    tag: "UNSC",
    image: "/bg11.jpg",
    bgColor: "bg-blue-600",
  },
  {
    title: "The Suez Canal Crisis (1956)",
    subtitle: "Historical Committee Discussion",
    tag: "HCC",
    image: "/bg13.jpg",
    bgColor: "bg-gray-500",
  },
  {
    title: "International Press",
    subtitle: "Reporter | Photographer | Caricaturist",
    tag: "IP",
    image: "/bg12.jpg",
    bgColor: "bg-purple-600",
  },
];

const speakers = [
  { id: 1, name: "Shivshankar Menon", role: "Former National Security Advisor", image: "/ssm.webp" },
  { id: 2, name: "Shri Kailash Satyarthi", role: "Nobel Peace Prize 2014 Awardee", image: "/ks.webp" },
  { id: 3, name: "Mr. Ramanan Ramanathan", role: "Former Additional Secretary of NITI Aayog", image: "/rr.jpeg" },
  { id: 4, name: "Mr. Murthy", role: "Global Head Academic, Microsoft", image: "/mm.jpg" },
  { id: 5, name: "Dr.Pratibha Patil", role: "Former President of India", image: "/pp.avif" },
  { id: 6, name: "Dr.Munish Jindal", role: "Founder & CEO of Hover Robotix", image: "/mj.jpeg" },
];

const testimonials = [
  {
    name: "Vishakha Mulani",
    text: "Participating in JECRC MUN was a whirlwind of political problem-solving and strategic diplomacy. Representing a country rather than myself added complexity, pushing me to find common ground amidst diverse perspectives.",
    image: "/images/vishakha.jpg",
  },
  {
    name: "Rohan Sharma",
    text: "JECRC MUN helped me build confidence, diplomacy, and networking skills. The experience was eye-opening and helped me grow immensely.",
    image: "/images/rohan.jpg",
  },
  {
    name: "Ananya Gupta",
    text: "A phenomenal experience! The debates, networking, and competitive environment helped me sharpen my critical thinking skills.",
    image: "/images/ananya.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7 }
  }
};


const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [current, setCurrent] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-change every 5 seconds
    return () => clearInterval(interval);
  }, []);


const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);


  {/* Countdown */}
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Auto-change every 5s

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative w-auto h-auto bg-white">
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Image Slider */}
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1200}
        pagination={{ clickable: true }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="absolute top-0 nset-0 bg-gradient-to-b from-transparent to-white left-0 w-full h-full"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url('${img}')` }}
            >
              {/* Sidebar Social Media Icons */}
              <div className="absolute left-5 top-1/3 space-y-4">
                {[
                  FaFacebookF,
                  FaInstagram,
                  FaLinkedinIn,
                  FaDiscord,
                  FaYoutube,
                ].map((Icon, idx) => (
                  <motion.div
                    key={idx}
                    className="p-4 bg-[#991C1C] rounded-md shadow-md flex items-center justify-center cursor-pointer hover:bg-opacity-80"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="text-white text-xl" />
                  </motion.div>
                ))}
              </div>

              {/* Right-Side Vertical Buttons */}
              <div className="fixed right-5 top-2/5  flex flex-col items-center space-y-6 z-50">
                {/* FAQs Button */}
                <motion.button
                  className="relative flex items-center justify-center px-5 py-4 w-30 text-lg font-semibold
               bg-[#991C1C] text-white rounded-full shadow-lg backdrop-blur-lg bg-opacity-90
               transition-all hover:bg-opacity-100 hover:shadow-2xl hover:scale-105"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  FAQs
                </motion.button>

                {/* Calendar Button */}
                <motion.button
                  className="relative flex items-center justify-center px-5 py-4 w-30 text-lg font-semibold
             bg-[#991C1C] text-white rounded-full shadow-lg backdrop-blur-lg bg-opacity-90
              transition-all hover:bg-opacity-100 hover:shadow-2xl hover:scale-105"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Calendar
                </motion.button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

   
      {/* Hero Section */}
<section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center px-4 md:px-8">
  {/* Overlay for contrast */}
  <div className="absolute inset-0 bg-white"></div>

  {/* Content */}
  <motion.div
    className="relative z-10 text-center max-w-3xl"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
      JECRC MUN 2025
    </h1>
    <p className="text-lg md:text-2xl text-black font-light mx-auto">
      Join Rajasthan’s largest MUN conference and be part of a transformative experience.
    </p>

    {/* Countdown Timer */}
    <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-8 animate-fadeIn">
      {[
        { label: "DAYS", value: timeLeft.days, color: "#991C1C" },
        { label: "HOURS", value: timeLeft.hours, color: "black" },
        { label: "MINUTES", value: timeLeft.minutes, color: "#007BFF" },
        { label: "SECONDS", value: timeLeft.seconds, color: "#EAB308" },
      ].map((unit, index) => (
        <motion.div
          key={index}
          className="w-20 h-20 md:w-32 md:h-32 flex flex-col justify-center items-center text-center p-4 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          style={{ backgroundColor: unit.color }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <motion.span
            className="text-2xl md:text-4xl font-bold text-white"
           
            transition={{ repeat: Infinity, duration: 1.2, ease: "" }}
          >
            {unit.value}
          </motion.span>
          <p className="text-white text-sm md:text-base font-semibold uppercase mt-2 tracking-wider">
            {unit.label}
          </p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

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
          { title: "ELEVATE YOUR RESUME", desc: "Hone your public speaking, writing, and analytical skills through hands-on experience.", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
          { title: "NETWORK WITH KINDRED SPIRITS", desc: "Meet talented individuals, discover new cultures, and gain different perspectives.", icon: "M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" },
          { title: "RECOGNIZE GLOBAL ISSUES", desc: "Address global challenges through diplomacy and collaboration.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
        ].map((card, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg p-6 shadow-md border-l-4 border-black transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl flex items-start"
          >
            <div className="mr-4 flex-shrink-0">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#991C1C] mb-2">{card.title}</h3>
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
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="text-[#991C1C]">Why Should You</span><br />
          <span className="text-black">Join MUN?</span>
        </h2>
        
        <div className="text-base md:text-lg text-gray-700 space-y-4 leading-relaxed">
          <p>
            Explore Rajasthan's largest MUN conference, engaging 350+ institutes and welcoming over 3000 delegates to date. JECRC MUN offers a platform for students to develop crucial skills through diplomatic simulations, negotiation, public speaking, and research.
          </p>
          <p>
            Interacting with peers from diverse backgrounds enhances cultural awareness and leadership skills. Gain exposure to professionals in international relations and diplomacy, paving the way for academic and career growth.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}

        <div className="md:w-5/12 text-left space-y-6">
          {/* Heading with Modern Layered Effect */}
          <h2 className="relative text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="relative bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text drop-shadow-lg">
              JECRC MUN
            </span>
          </h2>

          {/* Description Paragraphs */}
          <motion.p
            className="text-lg text-gray-700 leading-relaxed opacity-95"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            JECRC MUN is a thriving community dedicated to empowering youth in
            discussing, debating, and tackling global crises, fostering
            groundbreaking solutions for international imbalances.
          </motion.p>

          <motion.p
            className="text-lg text-gray-700 leading-relaxed opacity-95"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Established in 2012 by Shri Kulbhushan Kothari, JECRC pioneered
            Model UN in Jaipur, becoming Rajasthan's second institution to
            introduce this prestigious platform for leadership and diplomacy.
          </motion.p>

          {/* Call-to-Action Button */}
          <motion.button
            className="mt-6 px-6 py-3 bg-red-700 text-white font-medium rounded-lg shadow-md hover:bg-red-800 hover:scale-105 transform transition-all duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Learn More
          </motion.button>
        </div>

        {/* Right Image Section */}
        <div className="md:w-6/12 grid grid-cols-2 gap-4 mt-12 md:mt-0 animate-fadeIn">
          <div className="relative group">
            <img
              src="/bg4.jpg"
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
              src="/bg5.jpg"
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
              src="/bg6.jpg"
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
            Our <span className="text-[#991C1C] drop-shadow-lg">Agendas</span>
          </h2>
          <p className="text-gray-500 text-xl mt-5">
            Explore our latest Model UN topics.
          </p>
        </div>

        {/* Agendas Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {agendas.map((agenda, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition"
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
                  className={`absolute top-4 right-4 text-xs font-semibold text-white px-3 py-1 rounded-full ${agenda.bgColor}`}
                >
                  {agenda.tag}
                </span>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {agenda.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2">{agenda.subtitle}</p>

                {/* Button */}
                <button className="mt-4 px-5 py-2 bg-[#991C1C] text-white font-medium rounded-lg hover:bg-red-800 transition">
                  Background Guide →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative bg-white py-24 px-6 flex flex-col items-center overflow-hidden">
        {/* Background Circle Design */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[90%] h-[90%] bg-[url('/images/circle-bg.png')] bg-contain bg-no-repeat opacity-10"></div>
        </div>

        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center z-10"
        >
          <p className="text-lg md:text-2xl text-black font tracking-wide">
            Meet Our Experts
          </p>
          <h2 className="text-4xl md:text-5xl font text-[#991C1C] mt-3 leading-tight">
            Featured <span className="text-black">Speakers</span>
          </h2>
        </motion.div>

        {/* Speakers Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 mt-16 z-10">
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-xl border border-gray-300 shadow-lg bg-white transition duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Speaker Image */}
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-60 h-72 object-cover transition duration-300 group-hover:brightness-75"
              />

              {/* Speaker Details Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{speaker.name}</h3>
                <p className="text-sm text-gray-300">{speaker.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-24 bg-gradient-to-b from-white to-white text-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-5xl font mt-5 mb-8 text-gray-800 relative inline-block"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What People Say About{" "}
          <span className="text-[#991C1C]">JECRC MUN</span>
        </motion.h2>


        {/* Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="relative bg-white text-gray-700 rounded-2xl p-8 shadow-lg border border-gray-200 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-red-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            >
              {/* Profile Image with Hover Effect */}
              <motion.div
                className="flex justify-center -mt-16 relative"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg transition-all duration-500"
                />
              </motion.div>

        

              {/* Testimonial Text */}
              <p className="text-lg italic leading-relaxed mt-6">
                "{testimonial.text}"
              </p>

              {/* User Info */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-red-800">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        className="absolute top-1/3 left-0 w-24 h-24 bg-red-500 opacity-20 rounded-full blur-3xl"
        animate={{ x: [0, 30, -30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      <motion.div
        className="absolute bottom-10 right-0 w-16 h-16 bg-blue-500 opacity-20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 30, 0], y: [0, -20, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
    </section>
   
    </div>
  );
};

export default Home;