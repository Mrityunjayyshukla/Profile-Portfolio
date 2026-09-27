'use client'

import { useEffect } from "react"
import Lenis from "lenis"

import Header from "./components/Header"
import RevealLinks from "./components/RevealLinks"
import Word from "./components/Word"
import Landing from "./sections/Landing"
import FullScreenMenu from "./sections/FullScreenMenu"

const paragraph =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."

const App = () => {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const animationFrame = requestAnimationFrame(raf)

        return () => {
            cancelAnimationFrame(animationFrame)
            lenis.destroy()
        }
    }, [])

    return (
        <main>
            {/* <Header /> */}
            <FullScreenMenu />
            <Landing />

            <Word value={paragraph} />

            <section className="grid h-screen place-content-center gap-2 px-8 text-white">
                <RevealLinks href="#">Twitter</RevealLinks>
                <RevealLinks href="#">Linkedin</RevealLinks>
                <RevealLinks href="#">Facebook</RevealLinks>
                <RevealLinks href="#">Instagram</RevealLinks>
            </section>
        </main>
    )
}

export default App
