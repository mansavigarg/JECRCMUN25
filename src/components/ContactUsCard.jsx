import React from "react";

const ContactUsCard = ({
  title,
  description1,
  description2,
  lucidIcon: LucidIcon,
}) => {
  return (
    <div>
      <div className="p-6 md:p-10 bg-white shadow-lg flex flex-col items-center text-center space-y-2">
        <div className="bg-[#991C1C] w-16 h-16 rounded-full text-4xl flex items-center justify-center">
          <LucidIcon className="w-10 h-10 text-[#991C1C] fill-white" />
        </div>
        <h3 className=" text-[#991C1C] text-lg font-semibold">{title}</h3>
        <div>
          <p className="text-gray-600">{description1}</p>
          <p className="text-gray-600">{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
