'use client'
import Lenis from "lenis"
import Header from "./components/Header"
import Hero from "./sections/Hero"
import { useProgress } from '@react-three/drei'
import { useState, useEffect } from "react"

const App = () => {
    useEffect(() => {
        const lenis = new Lenis();
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }, []);
    return (
        <main>
            <Hero/>
            <Header />
            <section className="h-screen bg-amber-200">Hello World</section>
        </main>


    )
}

export default App
