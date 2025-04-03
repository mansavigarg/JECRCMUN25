import React, { useState,useRef, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { MenuIcon, ChevronRight, ChevronDown, ChevronUp, House, Users, Calendar1, CircleUserRound, BookOpen} from 'lucide-react';
import logo from '../assets/mun-orange.png';
import { Drawer, Collapse } from '@mui/material';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);

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
    }, 200); // 300ms delay before hiding the dropdown
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
    <div className="py-5 top-0 sticky bg-white border-b-2 z-10 sm:px-8 px-6 flex w-full justify-between items-center space-x-7">
      {/* LOGO BELOW */}
      <Link to={`/`} className="flex justify-center items-center space-x-3 text-sm">
        <div className="w-15 h-15 rounded-full">
          <img src={logo} alt="MUN LOGO" className="w-full h-full rounded-full" />
        </div>
      </Link>

      {/* Desktop Navigation */}
      <div className="flex-1 hidden sm:flex justify-center items-center text-md space-x-4 font-semibold relative">
        <Link to="/" className={`pb-[0.2rem] hover:text-[#991C1C] ${isActive("/") ? "border-b-2 text-[#991C1C]" : ""} font-semibold px-2`}>Home</Link>
        <Link to="/about" className={`pb-[0.2rem] hover:text-[#991C1C] ${isActive("/about") ? "border-b-2 text-[#991C1C]" : ""} font-semibold px-2`}>About</Link>
        <Link to="/team" className={`pb-[0.2rem] hover:text-[#991C1C] ${isActive("/team") ? "border-b-2 text-[#991C1C]" : ""} font-semibold px-2`}>Team</Link>
        
        {/* Events Dropdown */}
        <div className="relative"  ref={dropdownRef}
          onMouseEnter={handleDropdownEnter} 
          onMouseLeave={handleDropdownLeave}>
          <button className="pb-[0.2rem] flex items-center hover:text-[#991C1C] font-semibold px-2">
            Events <ChevronDown className="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out ${showDropdown ? 'rotate-180' : ''}" />
          </button>
          <div className={`absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md border overflow-hidden transition-all duration-300 ease-in-out ${showDropdown ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <Link to="/aboutmun" className="block px-4 py-2 hover:bg-gray-100">MUN Conference</Link>
            <Link to="/aboutzhs" className="block px-4 py-2 hover:bg-gray-100">Zero Hour Summit</Link>
          </div>
        </div>
        
        <Link to="/contact" className={`pb-[0.2rem] hover:text-[#991C1C] ${isActive("/contact") ? "border-b-2 text-[#991C1C]" : ""} font-semibold px-2`}>Contact Us</Link>
        <Link to="/prepguide" className={`pb-[0.2rem] hover:text-[#991C1C] ${isActive("/prepguide") ? "border-b-2 text-[#991C1C]" : ""} font-semibold px-2`}>Prep Guide</Link>
        
      </div>
      <button className="px-6 py-2 bg-[#991C1C] rounded-lg text-white font-semibold transition-all duration-700 ease-in-out bg-gradient-to-r from-[#991C1C] to-orange-700 hover:from-orange-700 hover:to-[#991C1C] md:block hidden">
        REGISTER NOW
      </button>

      {/* Drawer Button */}
      <div className="sm:hidden">
        <Button variant="text" onClick={handleDrawerToggle}>
          <MenuIcon className="h-4 w-4 text-[#991C1C]" />
        </Button>
      </div>

      {/* Drawer */}
      <Drawer anchor="right" open={showDrawer} onClose={handleDrawerToggle}>
        <div className="w-72 p-6 h-full flex flex-col space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full">
                <img src={logo || "/placeholder.svg"} alt="MUN logo" className="w-full h-full rounded-full" />
              </div>
              <p className="text-xl font-semibold">JECRC MUN</p>
            </div>
            <Button variant="text" onClick={handleDrawerToggle}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="w-full mt-2 flex flex-col space-y-3">
            <Link to="/" onClick={handleDrawerToggle} className="p-2 font-semibold text-lg">
            <div className='flex items-center gap-2'>
            <House className='h-5 w-5'/>
            <span>Home</span>
            </div>

            </Link>
            <Link to="/about" onClick={handleDrawerToggle} className="p-2 font-semibold text-lg">
            <div className='flex items-center gap-2'>
            <Users className='h-5 w-5'/>
            <span>About</span>
            </div>
            </Link>


            <Link to="/team" onClick={handleDrawerToggle} className="p-2 font-semibold text-lg">
            <div className='flex items-center gap-2'>
            <Users className='h-5 w-5'/>
            <span>Team</span>
            </div></Link>
            
            {/* Mobile Dropdown */}
            <button onClick={() => setShowMobileDropdown(!showMobileDropdown)} className="p-2 flex items-center justify-between font-semibold text-lg">
            <div className='flex items-center gap-2'>
            <Calendar1 className='h-5 w-5'/>
            <span>Events</span>
            </div> <span>{showMobileDropdown ? <ChevronUp /> : <ChevronDown />}</span>
            </button>
            <Collapse in={showMobileDropdown} timeout={300}>
              <Link to="/aboutmun" onClick={handleDrawerToggle} className="block pl-6 py-2 text-md">MUN Conference</Link>
              <Link to="/aboutzhs" onClick={handleDrawerToggle} className="block pl-6 py-2 text-md">Zero Hour Summit</Link>
            </Collapse>

            <Link to="/contact" onClick={handleDrawerToggle} className="p-2 font-semibold text-lg">
            <div className='flex items-center gap-2'>
            <CircleUserRound className='h-5 w-5'/>
            <span>Contact Us</span>
            </div></Link>
            <Link to="/prepguide" onClick={handleDrawerToggle} className="p-2 font-semibold text-lg">
            <div className='flex items-center gap-2'>
            <BookOpen className='h-5 w-5'/>
            <span>Prep Guide</span>
            </div></Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
