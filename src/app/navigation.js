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

            {/* NAVIGATION BAR */}
            <div className="flex items-center justify-between ml-[1.5em] py-[1em]">
                <div className="flex items-center">
                    <a href="#landing" className="font-bold text-lg">&lt;/ash&gt;</a>
                </div>

                <div className="flex justify-end px-[1.5em] gap-5">
                {/* STATUS INDICATOR*/}
                <div className="inline-flex items-center justify-center gap-2 bg-[#333333] text-white px-5 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <p className="text-sm md:text-base">Open for opportunities</p>
                </div>

                {/* TOGGLE */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-[#333333] text-2xl focus:outline-none cursor-pointer"
                >
                    {isMenuOpen ? "✕" : 
                    "☰"}
                </button>
                </div>
            </div>

            {/* MENU */}
            {isMenuOpen && (
            <nav>
                <ul className="flex flex-col w-full h-screen justify-center animation-slide-up gap-[5em]">
                    <li><a href="#about" className="nav-link text-5xl md:text-7xl font-bold ml-[25%]" onClick={() => setIsMenuOpen(false)}>ABOUT.</a></li>
                    <li><a href="#experience" className="nav-link text-5xl md:text-7xl font-bold ml-[25%]" onClick={() => setIsMenuOpen(false)}>EXPERIENCE.</a></li>
                    <li><a href="#work" className="nav-link text-5xl md:text-7xl font-bold ml-[25%]" onClick={() => setIsMenuOpen(false)}>PORTFOLIO.</a></li>
                    <div className="flex flex-row gap-10 ml-[25%]">
                        <a href="https://github.com/ash-tran" className="underline-link">
                            <p className="text-[1.50rem] md:text-[1.75rem]"> GitHub →</p>
                        </a>
                        <a href="https://www.linkedin.com/in/ash-tran/" className="underline-link">
                            <p className="text-[1.50rem] md:text-[1.75rem]"> LinkedIn →</p>
                        </a>
                        </div>
                </ul>
            </nav>
            )}
        </div>
    </>
  );
}