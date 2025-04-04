import React from 'react';
import { motion } from 'framer-motion';

const SponsorCard = ({ imgsrc, name, website, description, tier }) => {
  // Define different styles based on sponsor tier
  const getTierStyles = () => {
    switch(tier) {
      case 'title':
        return {
          cardClass: 'border-[#991C1C] shadow-xl',
          nameClass: 'text-2xl text-[#991C1C]',
          badgeColor: 'bg-[#991C1C]'
        };
      case 'powered':
        return {
          cardClass: 'border-[#991C1C] border-opacity-70 shadow-lg',
          nameClass: 'text-xl text-[#991C1C]',
          badgeColor: 'bg-[#991C1C] bg-opacity-80'
        };
      case 'gold':
        return {
          cardClass: 'border-yellow-600 shadow-md',
          nameClass: 'text-lg text-yellow-700',
          badgeColor: 'bg-yellow-600'
        };
      case 'silver':
        return {
          cardClass: 'border-gray-400 shadow-sm',
          nameClass: 'text-lg text-gray-600',
          badgeColor: 'bg-gray-400'
        };
      default:
        return {
          cardClass: 'border-gray-300',
          nameClass: 'text-lg text-gray-700',
          badgeColor: 'bg-gray-300'
        };
    }
  };

  const { cardClass, nameClass, badgeColor } = getTierStyles();

  return (
    <motion.div
      whileHover={{ 
        y: -5, 
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)' 
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative bg-white border-2 rounded-lg overflow-hidden ${cardClass}`}
    >
      {tier && (
        <div className={`absolute top-4 right-4 ${badgeColor} text-white text-xs font-bold py-1 px-2 rounded-full uppercase`}>
          {tier}
        </div>
      )}
      
      <div className="p-6">
        <div className="h-32 flex items-center justify-center mb-4 bg-gray-50 rounded overflow-hidden">
          <img 
            src={imgsrc} 
            alt={`${name} logo`} 
            className="max-h-24 max-w-full object-contain" 
          />
        </div>
        
        <h3 className={`font-bold mb-2 ${nameClass}`}>{name || "Sponsor Name"}</h3>
        
        {description && (
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        )}
        
        {website && (
          <a 
            href={website} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block mt-2 text-[#060807] hover:text-[#991C1C] font-medium text-sm transition-colors"
          >
            Visit Website →
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default SponsorCard;