"use client";

import { useState, useEffect } from "react";

export default function Navigation() {

    // menu dropdown
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // handle scrolling effect
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
        };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <>
        <div className={`fixed top-0 left-0 w-full z-10
            ${isMenuOpen 
            ? "bg-[#f5f5f5] backdrop-blur-none" 
            : "bg-[#f5f5f5]/50 backdrop-blur-sm"}`}>

            {/* SCROLLING */}
            <div className="fixed top-0 left-0 w-full h-1 z-10">
                <div
                    className="h-full bg-[#333333] transition-all duration-250"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* TOGGLE */}
            <div className="flex items-center justify-between ml-5">
                <div className="flex items-center space-x-2">
                    <a href="#landing" className="font-bold text-lg">&lt;/ash&gt;</a>
                </div>

                {/* STATUS INDICATOR*/}
                <div className="absolute top-5 right-15 inline-flex items-center gap-2 bg-[#333333] text-white px-5 py-1 my-1 md:my-0 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <p className="text-sm md:text-base m-0">Open for opportunities</p>
                </div>

               

                <div className="flex justify-end p-5">
    
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-[#333333] text-2xl focus:outline-none cursor-pointer px-1.5"
                >
                    {isMenuOpen ? "✕" : 
                    "☰"}
                </button>
                </div>
            </div>

            {/* MENU */}
            {isMenuOpen && (
            <nav className="pb-4">
                <ul className="flex flex-col gap-4 w-full h-screen justify-center animation-slide-up gap-15">
                    <li><a href="#about" className="nav-link text-5xl md:text-7xl font-bold md:pl-5 m-5 mb-1 md:ml-100" onClick={() => setIsMenuOpen(false)}>ABOUT.</a></li>
                    <li><a href="#experience" className="nav-link text-5xl md:text-7xl font-bold md:pl-5 m-5 mb-10 md:ml-100" onClick={() => setIsMenuOpen(false)}>EXPERIENCE.</a></li>
                    <li><a href="#work" className="nav-link text-5xl md:text-7xl font-bold m-5 md:pl-5 mb-10 md:ml-100" onClick={() => setIsMenuOpen(false)}>PORTFOLIO.</a></li>
                    <div className="p-5 flex flex-row gap-10 md:ml-100">
                        <a href="https://github.com/ash-tran" className="underline-link text-lg">
                            <p className="text-2xl"> GitHub →</p>
                        </a>

                        <a href="https://www.linkedin.com/in/ash-tran/" className="underline-link text-lg">
                            <p className="text-2xl"> LinkedIn →</p>
                        </a>
                        </div>
                </ul>
            </nav>
            )}
        </div>
    </>
  );
}