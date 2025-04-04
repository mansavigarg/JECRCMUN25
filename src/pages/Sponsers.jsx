import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SponsorCard from '../components/SponserCard';

// Use placeholders since we can't access actual images
const placeholderLogo = "/api/placeholder/200/100";

const Sponsors = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Sample sponsor data - replace with your actual data
  const sponsors = {
    title: [
      { id: 1, name: "Nike", logo: placeholderLogo, website: "https://nike.com", description: "Global sports apparel and equipment" },
      { id: 2, name: "Adidas", logo: placeholderLogo, website: "https://adidas.com", description: "Leading sportswear manufacturer" }
    ],
    powered: [
      { id: 3, name: "Apple", logo: placeholderLogo, website: "https://apple.com", description: "Technology and software giant" },
      { id: 4, name: "Microsoft", logo: placeholderLogo, website: "https://microsoft.com", description: "Software and cloud computing" },
      { id: 5, name: "Google", logo: placeholderLogo, website: "https://google.com", description: "Search and web services" }
    ],
    gold: [
      { id: 6, name: "Amazon", logo: placeholderLogo, website: "https://amazon.com", description: "E-commerce and cloud services" },
      { id: 7, name: "IBM", logo: placeholderLogo, website: "https://ibm.com", description: "Enterprise computing solutions" },
      { id: 8, name: "Oracle", logo: placeholderLogo, website: "https://oracle.com", description: "Database and cloud systems" }
    ],
    silver: [
      { id: 9, name: "Intel", logo: placeholderLogo, website: "https://intel.com", description: "Semiconductor manufacturer" },
      { id: 10, name: "AMD", logo: placeholderLogo, website: "https://amd.com", description: "Semiconductor company" },
      { id: 11, name: "Nvidia", logo: placeholderLogo, website: "https://nvidia.com", description: "GPU and AI computing" }
    ]
  };
  
  // Get all sponsors for "All" tab
  const allSponsors = [
    ...sponsors.title,
    ...sponsors.powered,
    ...sponsors.gold,
    ...sponsors.silver
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // Helper to determine which sponsors to display
  const getDisplayedSponsors = () => {
    if (activeTab === 'all') return allSponsors;
    return sponsors[activeTab] || [];
  };

  return (
    <div className="relative my-20 min-h-screen p-6 flex flex-col items-center bg-white">
      {/* Background design element */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-white to-gray-100 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-t from-[#991C1C] to-transparent opacity-10 rounded-full blur-3xl -z-10"></div>
      
      {/* Hero section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center max-w-2xl"
      >
        <h1 className="text-5xl font-bold mb-4 text-[#060807]">
          OUR <span className="text-[#991C1C]">SPONSORS</span>
        </h1>
        <p className="text-gray-700 text-lg">
          We're grateful to these amazing organizations for their continued support and partnership.
        </p>
      </motion.div>
      
      {/* Tab navigation */}
      <div className="flex flex-wrap justify-center mb-12 gap-2">
        {['all', 'title', 'powered', 'gold', 'silver'].map((tab) => (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full capitalize font-medium transition-all ${
              activeTab === tab 
              ? 'bg-[#991C1C] text-white shadow-lg' 
              : 'bg-gray-200 text-[#060807] hover:bg-gray-300'
            }`}
          >
            {tab === 'all' ? 'All Sponsors' : `${tab} Sponsors`}
          </motion.button>
        ))}
      </div>
      
      {/* Title sponsors section - always visible when "all" or "title" is selected */}
      {(activeTab === 'title' || activeTab === 'all') && (
        <div className="w-full max-w-6xl mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 pb-2 border-b-2 border-[#991C1C] inline-block">
              Title Sponsors
            </h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap justify-center gap-10"
            >
              {sponsors.title.map((sponsor) => (
                <motion.div 
                  key={sponsor.id}
                  variants={itemVariants}
                  className="w-full md:w-5/12"
                >
                  <SponsorCard 
                    imgsrc={sponsor.logo} 
                    name={sponsor.name}
                    website={sponsor.website}
                    description={sponsor.description}
                    tier="title"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}
      
      {/* Powered by section */}
      {(activeTab === 'powered' || activeTab === 'all') && (
        <div className="w-full max-w-6xl mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 pb-2 border-b-2 border-[#991C1C] inline-block">
              Powered By
            </h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {sponsors.powered.map((sponsor) => (
                <motion.div key={sponsor.id} variants={itemVariants}>
                  <SponsorCard 
                    imgsrc={sponsor.logo} 
                    name={sponsor.name}
                    website={sponsor.website}
                    description={sponsor.description}
                    tier="powered"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}
      
      {/* Gold sponsors section */}
      {(activeTab === 'gold' || activeTab === 'all') && (
        <div className="w-full max-w-6xl mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 pb-2 border-b-2 border-[#991C1C] inline-block">
              Gold Sponsors
            </h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {sponsors.gold.map((sponsor) => (
                <motion.div key={sponsor.id} variants={itemVariants}>
                  <SponsorCard 
                    imgsrc={sponsor.logo} 
                    name={sponsor.name}
                    website={sponsor.website}
                    description={sponsor.description}
                    tier="gold"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}
      
      {/* Silver sponsors section */}
      {(activeTab === 'silver' || activeTab === 'all') && (
        <div className="w-full max-w-6xl mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 pb-2 border-b-2 border-[#991C1C] inline-block">
              Silver Sponsors
            </h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {sponsors.silver.map((sponsor) => (
                <motion.div key={sponsor.id} variants={itemVariants}>
                  <SponsorCard 
                    imgsrc={sponsor.logo} 
                    name={sponsor.name}
                    website={sponsor.website}
                    description={sponsor.description}
                    tier="silver"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}
      
    </div>
  );
};

export default Sponsors;