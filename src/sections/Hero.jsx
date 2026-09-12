'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '../components/Magnetic';

export default function Hero() {
    // Initialize state immediately so it's never null
    const [dateTime, setDateTime] = useState(() => new Date().toLocaleString());

    // Refs for GSAP animation targets
    const heroRef = useRef(null);
    const headerRef = useRef(null);
    const greetingRef = useRef(null);
    const nameRef = useRef(null);
    const titleRef = useRef(null);
    const footerRef = useRef(null);
    const middleRightIconRef = useRef(null);

    // Timer only updates the clock text, independent of animations
    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // GSAP Entry Animation setup - Runs ONCE on initial mount
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: 'power4.out', duration: 1.2 }
            });

            // Initial state set via GSAP to prevent FOUC
            gsap.set(
                [
                    headerRef.current,
                    greetingRef.current,
                    nameRef.current,
                    titleRef.current,
                    middleRightIconRef.current,
                    footerRef.current,
                ],
                { autoAlpha: 0, y: 50 }
            );

            // Timeline choreography
            tl.to(headerRef.current, { autoAlpha: 1, y: 0, duration: 1 }, 0.2)
                .to(greetingRef.current, { autoAlpha: 1, y: 0 }, 0.4)
                .to(nameRef.current, { autoAlpha: 1, y: 0 }, 0.5)
                .to(titleRef.current, { autoAlpha: 1, y: 0 }, 0.6)
                .to(middleRightIconRef.current, { autoAlpha: 1, y: 0 }, 0.65)
                .to(footerRef.current, { autoAlpha: 1, y: 0 }, 0.7);
        }, heroRef);

        return () => ctx.revert();
    }, []); // <-- Empty array ensures it only plays once and never loops!

    return (
        <section
            ref={heroRef}
            className="relative w-full h-screen bg-black text-white flex flex-col justify-between selection:bg-white selection:text-black overflow-hidden px-6 md:px-12 py-8"
        >
            {/* Background Visual Element */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity pointer-events-none">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-neutral-800 via-black to-black" />
            </div>

            {/* Top Header / Navigation Bar */}
            <header ref={headerRef} className="relative z-10 flex items-center justify-between w-full tracking-widest text-xs uppercase font-mono">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-700 animate-pulse" />
                    <span>{dateTime}</span>
                </div>
            </header>

            {/* Center Main Hero Content */}
            <div className="relative z-10 my-auto max-w-7xl ">
                <div className="overflow-hidden">
                    <p ref={greetingRef} className="text-neutral-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-4">
                        Hello, There!
                    </p>
                </div>
                <div className="overflow-hidden py-2">
                    <h1 ref={nameRef} className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                        Mrityunjay Shukla
                    </h1>
                </div>
                <div className="overflow-hidden py-1">
                    <h2 ref={titleRef} className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tighter leading-none text-[#555555] mt-3">
                        Creative Developer & Designer
                    </h2>
                </div>
            </div>

            {/* Middle Right Absolute Floating Icon */}
            <div
                ref={middleRightIconRef}
                className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-12 items-center"
            >
                <Magnetic>
                    <svg id="layer_2" data-name="Layer 2" viewBox="0 0 16 16" className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', cursor: 'pointer' }}>
                        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" fill="currentColor" />
                    </svg>
                </Magnetic>
                <Magnetic>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                        <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', cursor: 'pointer' }}>
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="currentColor" />
                        </svg>
                    </a>
                </Magnetic>
            </div>

            {/* Bottom Footer Info Bar */}
            <div ref={footerRef} className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between w-full gap-6 border-t border-white/10 pt-6 font-mono text-xs">
                <div>
                    <p className="text-neutral-400">Location</p>
                    <p className="font-bold text-sm tracking-wide">NEW DELHI / INDIA</p>
                </div>

                <div>
                    <a
                        href="#tour"
                        className="group inline-flex items-center gap-2 text-sm uppercase tracking-wider font-bold border-b border-white pb-1 hover:text-neutral-300 transition-colors"
                    >
                        Scroll
                        <svg
                            className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rotate-135"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
