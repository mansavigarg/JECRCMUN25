import React, { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  MenuIcon,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  House,
  Users,
  Calendar1,
  CircleUserRound,
  BookOpen,
} from "lucide-react";
import logo from "../assets/logo.svg";
import { Drawer, Collapse } from "@mui/material";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  const location = useLocation();
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const drawerRef = useRef(null);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if page is scrolled down at all
      setScrolled(currentScrollY > 10);

      // Hide navbar when scrolling down and show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Only process if drawer is open
      if (showDrawer) return;

      // Check if click is outside the drawer content
      // Use the MUI Drawer Paper element which contains the actual drawer content
      const drawerPaper = document.querySelector(".MuiDrawer-paper");

      if (
        drawerPaper &&
        !drawerPaper.contains(event.target) &&
        // Also make sure we're not clicking the menu button itself
        !event.target.closest('button[aria-label="open drawer"]')
      ) {
        setShowDrawer(false);
      }
    };

    // Add the event listener to the document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when component unmounts or showDrawer changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDrawer]);

  const handleDrawerToggle = () => {
    setShowDrawer(!showDrawer);
  };

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    // Use a timeout to delay the hiding of the dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // 200ms delay before hiding the dropdown
  };

  // Clean up the timeout when component unmounts
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <div
      className={`py-2 fixed w-full -top-1 z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "shadow-md bg-white/95 backdrop-blur-sm py-3"
          : "bg-white py-5"
      } ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto sm:px-8 px-6 flex justify-between items-center space-x-7">
        {/* LOGO */}
        <Link
          to={`/`}
          className="flex justify-center items-center space-x-3 text-sm transition-transform duration-300 hover:scale-105"
        >
          <div className="w-14 h-14">
            <img src={logo} alt="MUN LOGO" className="w-full h-full" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex-1 hidden sm:flex justify-center items-center text-md space-x-4 font-semibold relative">
          <Link
            to="/"
            className={`pb-[0.2rem] hover:text-[#991C1C] transition-colors duration-300 ${
              isActive("/") ? "border-b-2 border-[#991C1C] text-[#991C1C]" : ""
            } font-semibold px-2`}
          >
            Home
          </Link>

          {/* Events Dropdown */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`pb-[0.2rem] flex items-center hover:text-[#991C1C] transition-colors duration-300 ${
                isActive("/aboutmun") || isActive("/aboutzhs")
                  ? "border-b-2 border-[#991C1C] text-[#991C1C]"
                  : ""
              } font-semibold px-2`}
            >
              Events
              <ChevronDown
                className={`ml-2 h-5 w-5 transition-transform duration-300 ease-in-out ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md border overflow-hidden transition-all duration-300 ease-in-out ${
                showDropdown
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
            >
              <Link
                to="/aboutmun"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200 hover:text-[#991C1C]"
              >
                MUN Conference
              </Link>
              <Link
                to="/aboutzhs"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-200 hover:text-[#991C1C]"
              >
                Zero Hour Summit
              </Link>
            </div>
          </div>

          <Link
            to="/team"
            className={`pb-[0.2rem] hover:text-[#991C1C] transition-colors duration-300 ${
              isActive("/team")
                ? "border-b-2 border-[#991C1C] text-[#991C1C]"
                : ""
            } font-semibold px-2`}
          >
            Team
          </Link>

          <Link
            to="/registration"
            className={`pb-[0.2rem] hover:text-[#991C1C] transition-colors duration-300 ${
              isActive("/registration")
                ? "border-b-2 border-[#991C1C] text-[#991C1C]"
                : ""
            } font-semibold px-2`}
          >
            Registration
          </Link>

          <Link
            to="/contact"
            className={`pb-[0.2rem] hover:text-[#991C1C] transition-colors duration-300 ${
              isActive("/contact")
                ? "border-b-2 border-[#991C1C] text-[#991C1C]"
                : ""
            } font-semibold px-2`}
          >
            Contact Us
          </Link>
        </div>

        {/* Register Button */}
        <Link to="/registration">
          <button
            className="px-6 py-2 bg-[#991C1C] rounded-lg text-white font-semibold transition-all duration-500 ease-in-out bg-gradient-to-r from-[#991C1C] to-orange-700 hover:from-orange-700 hover:to-[#991C1C] md:block hidden hover:shadow-lg hover:scale-105"
            onClick={() => fbq("trackCustom", "RegisterButtonClick")}
          >
            REGISTER NOW
          </button>
        </Link>

        {/* Hamburger Menu */}
        <div className="sm:hidden">
          <Button
            variant="text"
            onClick={handleDrawerToggle}
            className="focus:outline-none"
            aria-label="open drawer"
          >
            <MenuIcon className="h-6 w-6 text-[#991C1C]" />
          </Button>
        </div>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={showDrawer}
          onClose={handleDrawerToggle}
          ref={drawerRef}
          SlideProps={{
            // Improve accessibility and click detection
            role: "dialog",
            tabIndex: -1,
          }}
        >
          <div className="w-72 p-6 h-full flex flex-col space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full">
                  <img
                    src={logo}
                    alt="MUN logo"
                    className="w-full h-full rounded-full"
                  />
                </div>
                <p className="text-xl font-semibold text-[#991C1C]">
                  JECRC MUN
                </p>
              </div>
              <Button
                variant="text"
                onClick={handleDrawerToggle}
                className="focus:outline-none"
              >
                <ChevronRight className="h-6 w-6 text-[#991C1C]" />
              </Button>
            </div>

            <div className="w-full mt-4 flex flex-col space-y-3">
              <Link
                to="/"
                onClick={handleDrawerToggle}
                className={`p-2 font-semibold text-lg transition-colors duration-200 rounded-md hover:bg-gray-100 ${
                  isActive("/") ? "text-[#991C1C]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <House className="h-5 w-5" />
                  <span>Home</span>
                </div>
              </Link>

              {/* Mobile Dropdown */}
              <button
                onClick={() => setShowMobileDropdown(!showMobileDropdown)}
                className={`p-2 flex items-center justify-between font-semibold text-lg transition-colors duration-200 rounded-md hover:bg-gray-100 ${
                  isActive("/aboutmun") || isActive("/aboutzhs")
                    ? "text-[#991C1C]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Calendar1 className="h-5 w-5" />
                  <span>Events</span>
                </div>
                <span>
                  {showMobileDropdown ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>

              <Collapse in={showMobileDropdown} timeout={300}>
                <div className="py-1">
                  <Link
                    to="/aboutmun"
                    onClick={handleDrawerToggle}
                    className={`block pl-10 py-2 text-md transition-colors duration-200 hover:bg-gray-100 ${
                      isActive("/aboutmun") ? "text-[#991C1C]" : ""
                    }`}
                  >
                    MUN Conference
                  </Link>
                  <Link
                    to="/aboutzhs"
                    onClick={handleDrawerToggle}
                    className={`block pl-10 py-2 text-md transition-colors duration-200 hover:bg-gray-100 ${
                      isActive("/aboutzhs") ? "text-[#991C1C]" : ""
                    }`}
                  >
                    Zero Hour Summit
                  </Link>
                </div>
              </Collapse>

              <Link
                to="/team"
                onClick={handleDrawerToggle}
                className={`p-2 font-semibold text-lg transition-colors duration-200 rounded-md hover:bg-gray-100 ${
                  isActive("/team") ? "text-[#991C1C]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5" />
                  <span>Team</span>
                </div>
              </Link>

              <Link
                to="/contact"
                onClick={handleDrawerToggle}
                className={`p-2 font-semibold text-lg transition-colors duration-200 rounded-md hover:bg-gray-100 ${
                  isActive("/contact") ? "text-[#991C1C]" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <CircleUserRound className="h-5 w-5" />
                  <span>Contact Us</span>
                </div>
              </Link>

              {/* Mobile Register Button */}
              <Link to="/registration">
                <button
                  className="mt-4 w-full px-6 py-3 bg-[#991C1C] rounded-lg text-white font-semibold transition-all duration-500 ease-in-out bg-gradient-to-r from-[#991C1C] to-orange-700 hover:from-orange-700 hover:to-[#991C1C] shadow-md"
                  onClick={() => fbq("trackCustom", "RegisterButtonClick")}
                >
                  REGISTER NOW
                </button>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
