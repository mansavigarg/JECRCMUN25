import React from "react";

const TeamSection = ({ teamData }) => {
  // Safely handle the case where teamData might be undefined
  const teams = teamData || [];

  // Custom theme colors
  const primaryColor = "#991C1C"; // Deep red
  const secondaryColor = "#ffffff"; // White
  const accentColor = "#060807"; // Near black

  // Fixed card width to ensure all cards have the same width
  const cardWidth = "280px";

  return (
    <div className="w-full py-2 sm:py-10">
      {teams.map((team, teamIndex) => (
        <div key={teamIndex} className="mb-5 sm:mb-12">
          {/* Team Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h2
              className="text-2xl sm:text-3xl font-bold inline-block pb-2 border-b-4"
              style={{ color: primaryColor, borderColor: primaryColor }}
            >
              {team.title}
            </h2>
          </div>

          {/* Team Members Container - Using flex with wrap and center justify */}
          <div className="max-w-5xl mx-auto px-2">
            <div className="flex flex-wrap justify-center gap-20">
              {team.members.map((member, memberIndex) => (
                <div
                  key={memberIndex}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 mb-2"
                  style={{ width: cardWidth }} // Fixed width applied to all cards
                >
                  {/* Member Image - Consistent size */}
                  <div className="w-full">
                    <img
                      src={member.image}
                      alt={`${member.name}`}
                      className="w-full h-60 object-cover"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="p-3 w-full">
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
                            color: secondaryColor,
                          }}
                          aria-label={`LinkedIn profile of ${member.name}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                        </a>
                      )}
                    </div>

                    <p
                      className="text-xs sm:text-sm mb-3"
                      style={{ color: accentColor }}
                    >
                      {member.designation}
                    </p>

                    {/* Divider - Properly separated from name */}
                    <div
                      className="w-12 h-1 mb-1 mt-2"
                      style={{ backgroundColor: primaryColor }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamSection;
