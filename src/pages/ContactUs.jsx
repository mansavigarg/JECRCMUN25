import React from "react";
import {MapPin, Phone, Mail} from "lucide-react"
import ContactUsCard from "../components/ContactUsCard";
import worldImg from "../assets/testimonial-1.png"

const items = [
  {
    title:"JECRC Foundation",
    desc1: "JECRC College, Shri Ram Ki Nangal,",
    desc2: "via Sitapura RIICO, Tonk Road, Jaipur",
    icon: MapPin
  },
  {
    title:"Registration Info",
    desc1: "Sapan Mittal - 8764364947 ",
    desc2: "Email Address: mun@jecrc.ac.in",
    icon: Phone
  },
  {
    title:"MUN Conference Schedule",
    desc1: "11th - 12th May",
    desc2: "from 7:30 AM to 6 PM.",
    icon: Mail
  }
]

const ContactPage = () => {
  return (
    <>
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8"
     style={{ backgroundImage: `url(${worldImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-600   inline-block mb-10">
              How Can We HELP?
            </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-20 w-full max-w-7xl">

       <ContactUsCard title={items[0].title} description1={items[0].desc1} description2={items[0].desc2} lucidIcon={items[0].icon}/>

       <ContactUsCard title={items[1].title} description1={items[1].desc1} description2={items[1].desc2} lucidIcon={items[1].icon}/>

       <ContactUsCard title={items[2].title} description1={items[2].desc1} description2={items[2].desc2} lucidIcon={items[2].icon}/>
       
       
      </div>
      <div className="space-y-6 md:flex gap-6 w-full max-w-7xl">
        <form className="rounded-2xl flex flex-col w-full">
          <input type="text" placeholder="First Name" className="p-3 border border-gray-300 rounded-md mb-4 bg-white" />
          <input type="email" placeholder="Email" className="p-3 border border-gray-300 rounded-md mb-4 bg-white" />
          <input type="text" placeholder="Phone" className="p-3 border border-gray-300 rounded-md mb-4 bg-white" />
          <input type="text" placeholder="Subject" className="p-3 border border-gray-300 rounded-md mb-4 bg-white" />
          <textarea placeholder="Enter a message" className="p-3 border border-gray-300 rounded-md mb-4 bg-white h-32"></textarea>
          <button className="bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition">Send Message</button>
        </form>

    
        <div className="rounded-2xl">
          <iframe
            className="w-full h-100 md:w-100 md:h-full "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5724749144663!2d75.80208807547272!3d26.81415537674808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d5af022dd5%3A0xb3b099f9fcf5af41!2sJECRC%20Foundation!5e0!3m2!1sen!2sin!4v1711912395765!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
