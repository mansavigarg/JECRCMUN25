import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactUsCard from "../components/ContactUsCard";
import worldImg from "../assets/testimonial-1.png";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const items = [
  {
    title: "JECRC Foundation",
    desc1: "JECRC College, Shri Ram Ki Nangal,",
    desc2: "via Sitapura RIICO, Tonk Road, Jaipur",
    icon: MapPin,
  },
  {
    title: "Registration Info",
    desc1: "Sarthak Jain: +917728858711",
    desc2: "Email Address: mun@jecrc.ac.in",
    icon: Phone,
  },
  {
    title: "MUN Conference Schedule",
    desc1: "26th - 27th April",
    desc2: "from 7:30 AM to 6 PM.",
    icon: Mail,
  },
];

const ContactPage = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8 mt-20"
        style={{
          backgroundImage: `url(${worldImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-center mb-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How Can We Help?
          </motion.h1>
          <motion.div
            className="h-1 w-24 bg-[#991c1c] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          ></motion.div>
          {/* <motion.p
            className="text-xl text-[#000000] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Select the registration option that best fits your participation
          </motion.p> */}
        </div>

        {/* 
      <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600   inline-block mb-10">
              How Can We HELP?
            </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20 w-full max-w-7xl">
          <ContactUsCard
            title={items[0].title}
            description1={items[0].desc1}
            description2={items[0].desc2}
            lucidIcon={items[0].icon}
          />

          <ContactUsCard
            title={items[1].title}
            description1={items[1].desc1}
            description2={items[1].desc2}
            lucidIcon={items[1].icon}
          />

          <ContactUsCard
            title={items[2].title}
            description1={items[2].desc1}
            description2={items[2].desc2}
            lucidIcon={items[2].icon}
          />
        </div>
        <div className="space-y-6 md:flex gap-6 w-full max-w-7xl">
          <form className="rounded-2xl flex flex-col w-full">
            <input
              type="text"
              placeholder="First Name"
              className="p-3 border border-gray-300 rounded-md mb-4 bg-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-gray-300 rounded-md mb-4 bg-white"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-3 border border-gray-300 rounded-md mb-4 bg-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border border-gray-300 rounded-md mb-4 bg-white"
            />
            <textarea
              placeholder="Enter a message"
              className="p-3 border border-gray-300 rounded-md mb-4 bg-white h-32"
            ></textarea>
            <button className=" text-white py-3 rounded-md bg-gradient-to-r from-red-800 to-red-600 transition">
              Send Message
            </button>
          </form>

          <div className="rounded-2xl">
            <iframe
              className="w-full h-100 md:w-100 md:h-full "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.825855186854!2d75.81833451496024!3d26.7818204831841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc977c6898ab9%3A0x8010b7bf0b1f29c9!2sJECRC%20Foundation!5e0!3m2!1sen!2sin!4v1579948771763!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
