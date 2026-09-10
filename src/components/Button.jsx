import React from 'react'
import styles from '../components/styles.module.scss'
import { motion } from 'framer-motion';

const Button = ({ isActive, setIsActive }) => {
    return (
        <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
            <motion.div
            className={styles.slider}
            animate = {{top: isActive ? "-100%":"0"}}
            transition={{duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
            >
                <div className={styles.el}>
                    <PerspectiveText label="Menu"/>
                </div>
                <div className={styles.el}>
                    <PerspectiveText label="Close"/>
                </div>

            </motion.div>

        </div>
    )
}

function PerspectiveText({label}) {
    return (
        <div className={styles.perspectiveText}>
            <p>{label}</p>
            <p>{label}</p>
        </div>
    )
}
export default Button
