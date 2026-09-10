import React from 'react'
import { Links } from '../constants/data';
import styles from '../components/styles.module.scss'
import { delay, motion } from 'framer-motion'
import { transition } from 'three/examples/jsm/tsl/display/TransitionNode.js';

const perspective = {
    initial: {
        opacity: 0,
        rotateX: 90,
    },
    enter: (i) => ({
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 0.65,
            opacity: {duration: 0.35},
            delay: 0.5 + (i * 0.1),
            ease: [.215, .61, .355, 1]
        }
    }),
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
            ease: [0.76, 0, 0.24, 1]
        }
    }
}
const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.body}>
                {
                    Links.map((link, i) => {
                        return (
                            <div key={i} className={styles.linkContainer}>
                                <motion.div
                                    custom={i}
                                    variants={perspective}
                                    animate="enter"
                                    exit="exit"
                                    initial="initial"
                                >
                                    <a href={link.href}>{link.title}</a>
                                </motion.div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Nav
