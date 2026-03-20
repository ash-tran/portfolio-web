'use client';

import React from 'react';

const JobCard = ({ title, employer, date }) => {
  return (
    <div className="w-full mb-5">
      <div className="transition bg-white border border-gray-300 md:shadow-md py-3 px-5 flex flex-col md:flex-row justify-between text-centermd:text-left md:h-[10vh]">

        <div>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <div className="text-[1.25rem] md:hidden">{employer}</div>
          <h4 className="text-sm">{date}</h4>
        </div>

        <div className="hidden md:flex items-center text-base text-right ml-auto">
          {employer}
        </div>
      </div>
    </div>
  );
};

export default JobCard;