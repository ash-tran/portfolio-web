'use client';

import Navigation from "./navigation";
import AboutSection from "./about-section";
import LandingSection from "./landing-section";
import ExperienceSection from "./experience-section";
import Footer from '@/footer';
import CustomCursor from "@/custom-cursor";
import ProjectCard from "@/project-card";
import { useState, useEffect } from "react";

export default function Home() {

  
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {

    // simulate loading delay
    const animationTimer = setTimeout(() => {
      setAnimation(true);
    }, 2000);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(timer);
    };
  }, []);

  if (loading) {
    return (
      <div
      className={`fixed top-0 left-0 w-full h-screen bg-[#66615C] transition-transform duration-1000 ease-in-out ${
        animation ? "translate-y-[-100%]" : "translate-y-0"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-6xl font-extrabold font-mono text-white typing-text">
          &lt;/ash&gt;
        </h1>
      </div>
    </div>
    );
  }

  const AbyssToolkitData = {
    title: "Abyss Toolkit",
    date: "MARCH 2026",
    type: "WEB",
    url: "https://abysstoolkit.vercel.app",
    specialties: ["TYPESCRIPT", "REACT", "VITE"],
    description: "Track underwater inventory and browse detailed game information."
  };

  const FondrData = {
    title: "Fondr",
    date: "AUGUST 2025",
    type: "MOBILE",
     url: "https://fondr.app",
    specialties: ["TYPESCRIPT", "REACT NATIVE", "EXPO", "SUPABASE"],
    description: "Help couples organize and share memorable experiences together."
  };

  const VisionaryPhotoboothData = {
    title: "Visionary Photobooths",
    date: "AUGUST 2024",
    type: "UX/UI",
    url: "https://visionarymi.com",
    specialties: ["PAGECLOUD CMS"],
    description: "A clear and user-friendly web presence for a local business."
  };
  const AuditBuddyData = {
    title: "Audit Buddy",
    date: "JANUARY 2024",
    type: "WEB",
    url: "https://capstone.cse.msu.edu/2024-01/projects/urban-science/",
    specialties: ["JAVASCRIPT", "REACT", "FLASK", "FIREBASE", "OPENCV", "YOLOv3"],
    description: "Streamline car dealership audits with automated analysis."
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
     <div className="fixed inset-0 pointer-events-none cursor-none z-[9999]">
      <CustomCursor></CustomCursor>
     </div>
  
  
      <main>

        <Navigation />
      
        {/* EXTERNAL LINKS */}
        <div className="hidden md:flex fixed top-1/2 right-5 flex-col gap-5 z-50">
              <a href="https://github.com/ash-tran">
                <img src="/github-mark.png" alt="GitHub Icon" className="w-7 h-7 transition-transform duration-250 hover:scale-150" />
              </a>

               <a href="https://www.linkedin.com/in/ash-tran/">
                <img src="/linkedin.png" alt="LinkedIn Icon" className="w-7 h-7 transition-transform duration-250 hover:scale-150" />
              </a>
        </div>

        {/* LANDING SECTION */}
        <LandingSection/>

        {/* ABOUT SECTION */}
        <AboutSection/>
        
        {/* EXPERIENCE SECTION*/}
        <ExperienceSection/>

        {/* PORTFOLIO SECTION*/}
        <div className="min-h-screen grid place-items-center w-full">
          <div className="px-10 md:px-15 mb-10 w-full">
          <h2 id="work" className="text-[2rem] md:text-[3.5rem] font-bold mb-5 text-start">PORTFOLIO.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2">

            <ProjectCard 
              title={AbyssToolkitData.title}
              date={AbyssToolkitData.date}
              type={AbyssToolkitData.type}
              url={AbyssToolkitData.url}
              specialties={AbyssToolkitData.specialties}
              description={AbyssToolkitData.description}
            />

            <ProjectCard 
              title={FondrData.title}
              date={FondrData.date}
              type={FondrData.type}
              url={FondrData.url}
              specialties={FondrData.specialties}
              description={FondrData.description}
            />
             
             <ProjectCard 
              title={VisionaryPhotoboothData.title}
              date={VisionaryPhotoboothData.date}
              type={VisionaryPhotoboothData.type}
              url={VisionaryPhotoboothData.url}
              specialties={VisionaryPhotoboothData.specialties}
              description={VisionaryPhotoboothData.description}
            />
            
          <ProjectCard 
              title={AuditBuddyData.title}
              date={AuditBuddyData.date}
              type={AuditBuddyData.type}
              url={AuditBuddyData.url}
              specialties={AuditBuddyData.specialties}
              description={AuditBuddyData.description}
            />
            </div>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  );
}
