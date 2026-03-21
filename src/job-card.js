'use client';

import React from 'react';

const JobCard = ({ title, employer, date }) => {
  return (
    <div className="w-full mb-5">
      <div className="transition bg-white border border-gray-300 md:shadow-md p-5 flex flex-col md:flex-row justify-between md:h-[12.5vh]">

        <div className="flex flex-col justify-center">
          <h3 className="text-[1.50em] md:text-[1.75em] font-bold">{title}</h3>
          <div className="text-[1.25em] md:hidden">{employer}</div>
          <h4 className="text-[1em]">{date}</h4>
        </div>
        <div className="hidden md:flex items-center text-right">
          {employer}
        </div>
      </div>
    </div>
  );
};

export default JobCard;