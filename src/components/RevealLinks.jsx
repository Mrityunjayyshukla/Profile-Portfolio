import React from 'react'
import { motion } from "framer-motion";

const duration = 0.25;
const stagger = 0.025;
export const FlipLink = ({ children, href="#", onclick, className=""}) => {
    return <motion.a initial="initial" whileHover="hovered" href={href} onClick={onclick} className={`relative block overflow-hidden whitespace-nowrap font-bold uppercase ${className}`}
    >
        <div>{children.split("").map((l, i) => {
            return <motion.span
            variants={{
                initial: {y:0},
                hovered: {y:"-100%"}
            }}
            transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger*i,
            }}
            className='inline-block'
            key={i}>{l}</motion.span>
        })}</div>
        <div className='absolute inset-0'>{children.split("").map((l, i) => {
            return <motion.span
            variants={{
                initial: {y:"100%"},
                hovered: {y:0}
            }}
            transition={{
                duration: duration,
                ease: "easeInOut",
                delay: stagger*i,
            }}
            className='inline-block'
            key={i}>{l}</motion.span>
        })}</div>
    </motion.a>

}

export default FlipLink;
