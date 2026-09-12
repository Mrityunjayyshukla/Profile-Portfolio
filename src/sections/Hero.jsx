'use client';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

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
                    footerRef.current,
                ],
                { autoAlpha: 0, y: 50 }
            );

            // Timeline choreography
            tl.to(headerRef.current, { autoAlpha: 1, y: 0, duration: 1 }, 0.2)
              .to(greetingRef.current, { autoAlpha: 1, y: 0 }, 0.4)
              .to(nameRef.current, { autoAlpha: 1, y: 0 }, 0.5)
              .to(titleRef.current, { autoAlpha: 1, y: 0 }, 0.6)
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
            <div className="relative z-10 my-auto max-w-7xl">
                <div className="overflow-hidden">
                    <p ref={greetingRef} className="text-neutral-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-4">
                        Hello, There!
                    </p>
                </div>
                <div className="overflow-hidden py-2">
                    <h1 ref={nameRef} className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                        Mrityunjay Shukla
                    </h1>
                </div>
                <div className="overflow-hidden py-1">
                    <h2 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tighter leading-none text-[#555555] mt-3">
                        Creative Developer & Designer
                    </h2>
                </div>
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
