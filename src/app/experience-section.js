'use client';
import JobCard from '@/job-card';

import React from 'react';

const ExperienceSection = () => {
    const WebContentAdministratorData = {
        title: "Web Content Administrator",
        employer: "Michigan State University — College of Engineering",
        date: "MAY 2024 — PRESENT",
      };
      const StudentFrontendWebAssistantData = {
        title: "Student Front-End Web Assistant",
        employer: "Michigan State University — College of Engineering",
        date: "MAY 2023 — MAY 2024",
      };
      const UndergraduateLearningAssistantData = {
        title: "Undergraduate Learning Assistant",
        employer: "Michigan State University — College of Engineering",
        date: "JAN 2024 — MAY 2024",
      };
      const InformationTechnologyInternData = {
        title: "Information Technology Intern",
        employer: "North American Lighting",
        date: "MAY 2022 — AUG 2022",
      };
      const CashierData = {
        title: "Cashier",
        employer: "Asia's Finest",
        date: "DEC 2019 — DEC 2023"
      }

      const jobs = [
        WebContentAdministratorData,
        UndergraduateLearningAssistantData,
        StudentFrontendWebAssistantData,
        InformationTechnologyInternData,
        CashierData
      ];

  return (

    <div className="min-h-screen grid place-items-center w-full">
      <div className="px-[12.5%] mb-10 w-full">
        <h2 id="experience" className="text-[2rem] md:text-[3.5rem] font-bold mb-5 mt-5 text-start">EXPERIENCE.</h2>
        <div>
          {jobs.map((job, index) => (
            <div key={index}>
              <JobCard
                title={job.title}
                employer={job.employer}
                date={job.date}
              />
      
              {index !== jobs.length - 1 && (
                <div className="mb-3 relative h-3 left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;