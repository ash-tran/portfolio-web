'use client';

import React from 'react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [time, setTime] = useState("");

  // timezone
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
        <footer id="footer" className="bg-[#f5f5f5] pt-5 pb-5 px-[12.5%] grid w-full">
          {/* LINKS */}
          <div className="grid grid-cols-1 md:grid-cols-3 justify-items-start w-full">
            <div className="mt-5 md:mt-0 mb-5 md:mb-0">
              <p className="text-[1.50rem] md:text-[1.75rem]"><strong>CONTACT.</strong></p>
              <p>MICHIGAN {time} EST</p>
              <p>
                <a href="mailto:iashleytran@gmail.com" className="text-[1.50rem] md:text-[1.75rem] underline-link">
                iashleytran@gmail.com
                </a>
              </p>
              <p className="text-[1.50rem] md:text-[1.75rem]">+1 (517) 974-9992</p>
            </div>
            <div className="mt-5 md:mt-0">
              <p className="text-[1.50rem] md:text-[1.75rem]"><strong>NAVIGATION.</strong></p>
              <p><a className="text-[1.50rem] md:text-[1.75rem] underline-link" href="#about">About</a></p>
              <p><a className="text-[1.50rem] md:text-[1.75rem] underline-link" href="#experience">Experience</a></p>
              <p><a className="text-[1.50rem] md:text-[1.75rem] underline-link" href="#work">Portfolio</a></p>
            </div>
            <div className="mt-5 md:mt-0">
              <p className="text-[1.50rem] md:text-[1.75rem]"><strong>CONNECT.</strong></p>
              <p>
                <a href="https://github.com/ash-tran" className="text-[1.50rem] md:text-[1.75rem] underline-link">
                GitHub →
                </a>
              </p>
              <p>
                <a href="https://linkedin.com/in/ash-tran" className="text-[1.50rem] md:text-[1.75rem] underline-link">
                LinkedIn →
                </a>
              </p>
            </div>
            
          </div>


          <p className="text-[3.5em] md:text-[7.5em] font-bold">ASHLEY TRAN.</p>
          <p className="text-[1em]">© 2026 ASHLEY TRAN</p>
        </footer>
    </>
  );
}