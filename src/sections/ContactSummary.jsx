import { useRef } from "react"
import Marquee from "../components/Marquee";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ParagraphPop from '../components/ParagraphPop'

const paragraphVal = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at it's layout."

const ContactSummary = () => {
    const containerRef = useRef(null);
    const items = ["Innovation", "Precision", "Trust", "Collaboration", "Excellence"]
    const items2 = ["Contact Us","Contact Us","Contact Us","Contact Us","Contact Us",];
    useGSAP(() => {gsap.to(containerRef.current, {
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'center center',
            end: "+=800 center",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
        }
    })}, [])
    return <section ref={containerRef} className="flex flex-col items-center justify-between min-h-screen gap-12 mt-16">
        {/* Marquee */}
        <Marquee items={items}/>
        <ParagraphPop value={paragraphVal}/>
        <Marquee items={items2} reverse={true} className="text-black bg-transparent border-y-2" iconClassName="stroke-gold stroke-2 text-primary" icon="material-symbols-light:square"/>
    </section>
}

export default ContactSummary
