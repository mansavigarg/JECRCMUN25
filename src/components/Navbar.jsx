import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = ["Home", "About", "Team", "Events", "Registration", "Contact Us", "Preparation Guide"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 md:px-12 py-10 flex justify-between items-center z-50 transition-all duration-300 ${
        isScrolled ? "bg-opacity-85 bg-black/80 shadow-lg" : "bg-white/85 shadow-md"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <motion.img
          src="/mun.svg"
          alt="Logo"
          className="h-12 w-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      {/* nav links*/}
      <ul className="hidden md:flex space-x-12 text-xl font-semibold">
     {navItems.map((item) => (
    <motion.li
      key={item}
      className="relative group pb-2" // pb-2 ensures space for the underline
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Link
        to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
        className={`transition-all duration-300 ${
          active === item ? "text-[#991C1C]" : isScrolled ? "text-white" : "text-black"
        } hover:${isScrolled ? "text-gray-300" : "text-gray-600"}`}
        onClick={() => setActive(item)}
      >
        {item}
      </Link>

      {/* Underline Animation */}
      <motion.div
        className={`absolute bottom-0 left-0 h-[2px] ${
          isScrolled ? "bg-white" : "bg-black"
        }`}
        initial={{ width: "0%" }} // Start with no width
        animate={{ width: active === item ? "100%" : "0%" }} // Show only if active
        whileHover={{ width: "100%" }} // Expand on hover
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.li>
  ))}
   </ul>
     
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <Search className="h-5 w-5 text-gray-700 mr-4 cursor-pointer" />
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-700" />}
        </button>
      </div>

    {/* Mobile Menu (Animated) */}
    <AnimatePresence>
  {isOpen && (
    <>
      {/* Full-screen transparent overlay (closes sidebar on click) */}
      <motion.div
        className="fixed inset-0 bg-black/50 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)} // Clicking anywhere closes sidebar
      />

      {/* Sidebar Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="fixed top-0 right-0 h-screen w-2/4 bg-black shadow-lg flex flex-col items-center py-10 space-y-6 md:hidden z-50"
      >
        {navItems.map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-lg font-semibold text-white hover:text-gray-300 transition duration-300"
            onClick={() => {
              setActive(item);
              setIsOpen(false);
            }}
          >
            {item}
          </Link>
        ))}
      </motion.div>
    </>
  )}
</AnimatePresence>



    </nav>
  );
};

export default Navbar;
