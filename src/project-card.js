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
          <div className="grid grid-cols-1 md:grid-cols-2">
            <h2 className="text-2xl font-bold">{title}</h2>
            <h3 className="text-[1.25rem] md:text-right">{type}</h3>
          </div>
          <h4 className="text-sm">{date}</h4>  
                 
          <div className="text-xs font-medium py-5">
            {specialties.join(', ')}
          </div>
          <p>
            {description}
          </p>
        </div>
        <span className="absolute bottom-3 right-4 text-sm text-[#66615C] md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          View Project →
        </span>
      </a>
    </div>

    
  );
};

export default ProjectCard;