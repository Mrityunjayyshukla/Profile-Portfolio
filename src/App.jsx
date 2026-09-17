'use client'
import Lenis from "lenis"
import Header from "./components/Header"
import Hero from "./sections/Hero"
import { useProgress } from '@react-three/drei'
import { useState, useEffect } from "react"
import RevealLinks from "./components/RevealLinks"

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
            <section className="grid h-screen place-content-center gap-2 bg-green-300 px-8 text-black">
                <RevealLinks href="#">Twitter</RevealLinks>
                <RevealLinks href="#">Linkedin</RevealLinks>
                <RevealLinks href="#">Facebook</RevealLinks>
                <RevealLinks href="#">Instagram</RevealLinks>
            </section>
        </main>


    )
}

export default App
