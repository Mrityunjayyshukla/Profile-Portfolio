'use client'
import React, { useState } from 'react'
import styles from '../components/styles.module.scss'
import Button from './Button'
import { AnimatePresence, motion } from 'framer-motion'
import Nav from './Nav'

const variants = {
    open: {
        width: 400,
        height: 650,
        top: "-25px",
        right: "-25px",
        transition: {duration: 0.75, ease: [0.76, 0, 0.24, 1]}
    },
    closed: {
        width: 100,
        height: 40,
        top: "0px",
        right: "0px",
        transition: {duration: 0.75, delay: 0.25, ease: [0.76, 0, 0.24, 1]}

    }
}
const Header = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={styles.header}>
            <motion.div
                className={styles.menu}
                variants={variants}
                animate={isActive ? "open" : "closed"}
                initial="closed"
            >
                <AnimatePresence>
                    {isActive && <Nav />}
                </AnimatePresence>
            </motion.div>
            <Button isActive={isActive} setIsActive={setIsActive} />
        </div>
    )
}

export default Header
