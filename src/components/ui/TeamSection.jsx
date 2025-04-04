import React from "react";

const TeamSection = ({ teamData }) => {
  // Safely handle the case where teamData might be undefined
  const teams = teamData || [];
  
  // Custom theme colors
  const primaryColor = "#991C1C"; // Deep red
  const secondaryColor = "#ffffff"; // White
  const accentColor = "#060807"; // Near black

  return (
    <div className="w-full py-2 sm:py-10">
      {teams.map((team, teamIndex) => {
        const numMembers = team.members.length;
        
        // Determine grid layout and centering approach based on number of members
        let gridContainerClass = "max-w-7xl mx-auto";
        let gridClass = "";
        
        if (numMembers === 1) {
          // Single member - center it
          gridClass = "flex justify-center";
        } else if (numMembers === 2) {
          // Two members - center them with appropriate spacing
          gridClass = "grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5 px-1 place-items-center";
        } else {
          // For 3 or more members, use grid with adjusted last row
          gridClass = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-5 px-1";
          
          // If we have partial last row (not multiple of 3), add centering class
          if (numMembers % 3 !== 0) {
            gridContainerClass += " flex flex-col items-center";
          }
        }
          
        return (
          <div key={teamIndex} className="mb-8 sm:mb-12">
            {/* Team Title */}
            <div className="text-center mb-6 sm:mb-8">
              <h2 
                className="text-2xl sm:text-3xl font-bold inline-block pb-2 border-b-4"
                style={{ color: primaryColor, borderColor: primaryColor }}
              >
                {team.title}
              </h2>
            </div>

            {/* Team Members Container */}
            <div className={gridContainerClass}>
              <div className={gridClass}>
                {team.members.map((member, memberIndex) => {
                  // Apply special positioning for last row with remainder
                  let cardClass = "flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-[300px] lg:w-[350px] transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 mx-auto mb-4";
                  
                  // Special handling for the last row when it has 1 or 2 items
                  if (numMembers > 3 && numMembers % 3 !== 0) {
                    const remainingItems = numMembers % 3;
                    const lastRowStartIndex = numMembers - remainingItems;
                    
                    if (memberIndex >= lastRowStartIndex) {
                      if (remainingItems === 1 && memberIndex === lastRowStartIndex) {
                        // For a single item in the last row, center it
                        cardClass += " lg:col-start-2";
                      } 
                      else if (remainingItems === 2) {
                        if (memberIndex === lastRowStartIndex) {
                          // First item of last row with 2 items
                          cardClass += " lg:col-start-1 lg:justify-self-end";
                        } else {
                          // Second item of last row with 2 items
                          cardClass += " lg:col-start-2 lg:justify-self-start";
                        }
                      }
                    }
                  }
                  
                  return (
                    <div key={memberIndex} className={cardClass}>
                      {/* Member Image */}
                      <div className="w-[80%] sm:w-[225px] lg:w-[275px] bg-white mt-4">
                        <img
                          src={member.image}
                          alt={`${member.name}`}
                          className="w-full sm:w-[225px] lg:w-[275px] h-[247px] object-cover rounded-[1%]"
                        />
                      </div>
    
                      {/* Member Info */}
                      <div className="p-4 w-full">
                        {/* Name and LinkedIn in same row */}
                        <div className="flex justify-between items-center mb-1">
                          <h3
                            className="text-base sm:text-lg font-bold uppercase whitespace-nowrap text-ellipsis overflow-hidden"
                            style={{ color: primaryColor }}
                          >
                            {member.name}
                          </h3>
                          
                          {/* LinkedIn Link - On right side */}
                          {member.linkedin && (
                            <a
                              href={member.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center w-8 h-8 rounded-full ml-2 flex-shrink-0"
                              style={{ 
                                backgroundColor: primaryColor,
                                color: secondaryColor
                              }}
                              aria-label={`LinkedIn profile of ${member.name}`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                              </svg>
                            </a>
                          )}
                        </div>
                        
                        <p className="text-xs sm:text-sm mb-3" style={{ color: accentColor }}>
                          {member.designation}
                        </p>
                        
                        {/* Divider - Properly separated from name */}
                        <div className="w-12 h-1 mb-1 mt-2" style={{ backgroundColor: primaryColor }}></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamSection;