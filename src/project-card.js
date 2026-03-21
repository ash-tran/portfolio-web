'use client';

import React from 'react';

const ProjectCard = ({ title, date, type, url, specialties, description }) => {
  return (
    <div className="p-1 relative group grid">
       <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card md:h-[100%] bg-white border border-gray-300 p-5 justify-center text-left relative overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-[1.50rem] md:text-[1.75rem] font-bold">{title}</h3>
            <div className="inline-flex bg-[#333333] text-white px-5 py-1 rounded-full">
              <h4>{type}</h4>
            </div>
          </div>
          <h4 className="text-sm">{date}</h4>  
                 
          <div className="text-xs font-medium py-5">
            <p>{specialties.join(', ')}</p>
          </div>
          <p>
            {description}
          </p>
        </div>
        <span className="flex justify-end text-sm text-[#66615C] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Project →
        </span>
      </a>
    </div>

    
  );
};

export default ProjectCard;