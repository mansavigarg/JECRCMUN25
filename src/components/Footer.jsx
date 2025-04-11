import logo from "../assets/logo.svg";
import { ChevronRight, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const quickLinks = [
  {
    name: "MUN Conference",
    path: "/aboutmun",
  },
  {
    name: "ZHS",
    path: "/aboutzhs",
  },
  {
    name: "Team",
    path: "/team",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#991C1C] text-white pt-8 md:pt-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mb-8">
          {/* Left Section */}
          <div className="mb-4 sm:mb-0">
            <div className="bg-white inline-block p-1 rounded mb-3">
              <img src={logo} alt="JECRC MUN" className="h-15 md:h-20" />
            </div>
            <p className="text-sm md:text-base">
              JECRC MUN is a community established with the aim of creating a
              society for youth to discuss, debate, and deliberate present-day
              crises, contributing towards solutions for global imbalance.
            </p>
            <div className="flex space-x-4 mt-3 rounded-full">
              <a
                href="https://www.instagram.com/jecrcmun/"
                className="hover:opacity-75 transition-opacity"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/jecrc-mun/"
                className="hover:opacity-75 transition-opacity"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Middle Section */}
          <div className="mb-4 sm:mb-0">
            <h3 className="text-lg md:text-xl mb-3 font-bold">Quick Links</h3>
            <div className="space-y-1">
              {quickLinks.map((item, index) => (
                <Link key={index} to={item.path} className="font-medium block">
                  <div className="flex items-center group">
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                    <div className="my-1 hover:translate-x-1 transition-transform">
                      {item.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-3">Get In Touch</h3>
            <p className="text-sm md:text-base">
              JECRC College, Shri Ram Ki Nangal, via Sitapura RIICO, Tonk Road,
              Jaipur <br />
              Pincode – 302 022
            </p>
            <div className="mt-3 flex items-start gap-2">
              <div className="mt-1">
                <Phone className="h-6 w-6 md:h-8 md:w-8" />
              </div>
              <div>
                <p className="font-semibold text-base md:text-xl">
                  Sarthak Jain - 7728858711
                </p>
                <p className="font-semibold text-base md:text-xl">
                  Aditya Sharma - 9829368698
                </p>
                <p className="text-sm md:text-base">For information</p>
              </div>
            </div>

            <div className="flex items-center mt-3 gap-2">
              <Mail className="h-6 w-6 md:h-8 md:w-8" />
              <p className="text-base md:text-xl font-semibold">
                mun@jecrc.ac.in
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm md:text-base border-t border-white/20 py-4 md:py-6">
        This site is maintained and developed by JECRC Technical Team
      </div>
    </footer>
  );
}
