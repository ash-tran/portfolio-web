'use client';

import React from 'react';

const AboutSection = () => {
  return (
    <div id="about" className="min-h-screen grid place-items-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-10 md:mt-0 px-10 md:px-15 mb-10 w-full">

        {/* BIO */}
        <div className="order-2 md:order-1">
            <h2 className="text-[2rem] md:text-[3.5rem] font-bold mb-5 mt-5 text-start">ABOUT.</h2>
            {/* SUBHEADING */}
            <h3 className="text-[1.50rem] mb-[1rem] md:text-[1.75rem] font-bold text-[#66615C]"> A developer who focuses on design, usability, and clean code.</h3>
         
            {/* LOCATION */}
            <div className="inline-flex items-center gap-2 bg-[#333333] text-white px-5 py-1 my-1 md:my-0 rounded-full">
              <span className="inline-block animate-pulse text-white">⌂</span>
              <p className="text-sm md:text-base m-0">Waverly, MI</p>
            </div>

            <p className="text-justify text-[1rem] mt-5">
            I’m originally from Lansing, MI, and graduated from <b>Michigan State University</b> in Spring 2024 with a degree in Computer Science and a minor in Business. 
            I'm enthusiastic about applying my skills and knowledge to create meaningful online experiences. 
            With a solid foundation in coding and a passion for design, I'm eager to contribute to innovative projects and continue learning from experienced professionals.
            </p>
          
            <br/>
            <p className="text-justify text-[1rem]">
            Outside of coding, I enjoy horror movies, thrifting, and sharing everyday life with my partner, our cat, and our hamsters.
            </p>

            {/* LINKS*/}
            <div className="mt-5">
               <div className="flex flex-row gap-10">
                        <a href="https://github.com/ash-tran" className="underline-link">
                            <p className="text-[1.50rem] md:text-[1.75rem]">GitHub →</p>
                        </a>

                        <a href="https://www.linkedin.com/in/ash-tran/" className="underline-link">
                            <p className="text-[1.50rem] md:text-[1.75rem]">LinkedIn →</p>
                        </a>
                    </div>
            </div>
        </div>


        {/* IMG */}
        <div className="relative img-background w-full h-[35vh] md:w-[55vh] md:h-[55vh] mb-10 mt-5 md:mr-5 md:my-0 order-1 md:order-2 justify-self-end">
          <div className="absolute -top-5 -left-5 w-25 h-25 border-t-3 border-l-3 border-solid border-[#66615C]"></div>
          <img
            src="/roblox-headshot.png"
            alt="A ROBLOX character version of Ashley."
            className="absolute w-full h-full object-cover"
          />
          <div className="absolute -bottom-5 -right-5 w-25 h-25 border-b-3 border-r-3 border-solid border-[#66615C]"></div>
        </div>
      </div>
    </div>

    
  );
};

export default AboutSection;