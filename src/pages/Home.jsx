import React, { useEffect, useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaDiscord, FaYoutube } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import OutreachSection from "../components/Outreach";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


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
      <section
        className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 h-96 bg-white/50 bg-opacity-50"></div>

        {/* Motion Content */}
        <motion.div
          className="relative z-8 text-center px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-black">
            JECRC MUN 2025
          </h1>
          <p className="text-lg md:text-2xl text-black max-w-2xl mx-auto">
            Join Rajasthan’s largest MUN conference and be part of a
            transformative experience.
          </p>

          {/* Countdown Timer */}
          <div className="flex flex-wrap justify-center gap-4 mt-9">
            {[
              { label: "DAYS", value: timeLeft.days, color: "#991C1C" },
              { label: "HOURS", value: timeLeft.hours, color: "black" },
              { label: "MINUTES", value: timeLeft.minutes, color: "#007BFF" },
              { label: "SECONDS", value: timeLeft.seconds, color: "#EAB308" },
            ].map((unit, index) => (
              <div
                key={index}
                className="w-24 h-24 md:w-28 md:h-28 flex flex-col justify-center items-center text-center p-5 rounded-lg"
                style={{ backgroundColor: unit.color }}
              >
                <span className="text-3xl md:text-5xl font-bold text-white">
                  {unit.value}
                </span>
                <p className="text-white text-sm font-semibold mt-2">
                  {unit.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About MUN Section */}
      <section className="relative bg-white text-black py-20 px-9">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-bold text-[#991C1C] mb-6">
            Why Should You Join <span className="text-black">JECRCMUN?</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Explore Rajasthan’s largest MUN conference, with an outreach
            surpassing 18 lakh, engaging 350+ institutes, and welcoming over
            3000 delegates to date. Participating in JECRC MUN offers a unique
            opportunity for students to develop crucial skills and broaden their
            horizons. Through diplomatic simulations, delegates hone
            negotiation, public speaking, and research abilities while gaining
            insight into pressing global issues.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto mt-4">
            Engaging with peers from diverse backgrounds fosters cultural
            awareness and empathy, while leadership roles nurture
            decision-making and conflict resolution skills. Moreover, we provide
            a platform for networking with professionals in international
            relations and diplomacy, paving the way for future academic and
            career opportunities. By joining JECRC MUN, students embark on a
            transformative journey towards personal growth, intellectual
            development, and global citizenship.
          </p>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {/* Benefit Card */}
          {[
            {
              icon: "👥",
              title: "ELEVATE YOUR RESUME",
              text: "Hone your public speaking, writing, and analytical skills through hands-on experience.",
            },
            {
              icon: "⚙️",
              title: "RECOGNIZE GLOBAL ISSUES",
              text: "Understand global challenges and address them through diplomacy and collaboration.",
            },
            {
              icon: "🏳️",
              title: "NETWORK WITH KINDRED SPIRITS",
              text: "Meet talented individuals, explore new cultures, and gain diverse perspectives.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border"
            >
              <div className="text-[#F78C25] text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-[#991C1C]">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mt-2">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text Section */}

        <div className="md:w-5/12 text-left space-y-6">
          {/* Heading with Modern Layered Effect */}
          <h2 className="relative text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="absolute -top-3 -left-2 text-7xl text-gray-300 opacity-50 select-none">
              About
            </span>
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
          <h2 className="text-5xl font-bold text-gray-900 relative inline-block">
            Our <span className="text-[#991C1C] drop-shadow-lg">Agendas</span>
          </h2>
          <p className="text-gray-500 mt-2">
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
          <p className="text-lg md:text-xl text-red-600 font-semibold uppercase tracking-wide">
            Meet Our Experts
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#991C1C] mt-3 leading-tight">
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
      <section className="py-20 bg-white text-black relative">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold uppercase text-center">
            <span className="text-black">What People Say About</span>
            <span className="text-red-800"> JECRC MUN</span>
          </h2>

          {/* Flex Container for Alignment */}
          <div className="flex items-center justify-between mt-16">
            {/* Testimonial Card (Left) */}
            {/* Testimonial Card (Left) */}
            <div className="w-1/2 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="bg-white text-gray-700 rounded-xl p-6 shadow-lg max-w-lg border border-gray-200"
                >
                  {/* Quote Icon */}
                  <div className="text-3xl text-gray-400 mb-2">
                    <span>❝</span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-base leading-relaxed">
                    {testimonials[current].text}
                  </p>

                  {/* User Info */}
                  <div className="flex items-center mt-4">
                    <img
                      src={testimonials[current].image}
                      alt={testimonials[current].name}
                      className="w-10 h-10 rounded-full border border-gray-300 mr-3"
                    />
                    <h3 className="text-lg font-semibold text-red-800">
                      {testimonials[current].name}
                    </h3>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Rotating Image (Right) */}
            <div className="w-1/2 mb-90 flex justify-center relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                }}
                className="absolute w-[400px] h-[400px] flex justify-center items-center"
              >
                <img
                  src="/testi-image.png"
                  alt="Testimonial Circle"
                  className="opacity-80 w-[400px] h-[400px] object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-4 h-4 rounded-full transition-all transform ${
                  current === index ? "bg-red-800 scale-75" : "bg-gray-600 scale-75"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;