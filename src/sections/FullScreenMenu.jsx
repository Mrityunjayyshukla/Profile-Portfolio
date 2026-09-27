'use client'
import React, { useState, useRef, useEffect } from 'react'
import styles from '../sections/styles.module.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import RevealLinks from '../components/RevealLinks'

const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/", label: "Work" },
    { path: "/", label: "About" },
    { path: "/", label: "Contact" },
    { path: "/", label: "Lab" },
]

const FullScreenMenu = () => {
    const container = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const tl = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    useGSAP(() => {
        gsap.set(`.${styles.menuLinkItemHolder}`, { yPercent: 100 });
        tl.current = gsap.timeline({ paused: true }).to(
            `.${styles.menuOverlay}`, {
            duration: 1.25,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power4.inOut"
        }
        )
            .to(`.${styles.menuLinkItemHolder}`, {
                yPercent: 0,
                duration: 0.8,
                stagger: 0.08,
                ease: "power4.inOut",
                delay: -0.75,
            })
    }, { scope: container })

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen])
    return (
        <div className={styles.menuContainer} ref={container}>
            <div className={styles.menuBar}>
                <div className={styles.menuLogo}>
                    <a href="/">Mrityunjay Shukla</a>
                </div>
                <div className={styles.menuOpen} onClick={toggleMenu}>
                    <p>Menu</p>
                </div>
            </div>
            <div className={styles.menuOverlay}>
                <div className={styles.menuOverlayBar}>
                    <div className={styles.menuLogo}>
                        <a href="/">Mrityunjay Shukla</a>
                    </div>
                    <div className={styles.menuClose} onClick={toggleMenu}>
                        <p>Close</p>
                    </div>
                </div>
                <div className={styles.menuCloseIcon}>
                    <p>&#x2715;</p>
                </div>
                <div className={styles.menuCopy}>
                    <div className={styles.menuLinks}>
                        {menuLinks.map((link, index) => (
                            <div className={styles.menuLinkItem} key={index}>
                                <div className={styles.menuLinkItemHolder} onClick={toggleMenu}>
                                    <RevealLinks href={link.path} onClick={(e) => {
                                        e.preventDefault();
                                        tl.current.reverse();
                                        tl.current.eventCallback("onReverseComplete", () => {
                                            window.location.href = link.path;
                                        })
                                    }}>
                                        {link.label}
                                        </RevealLinks>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.menuInfo}>
                        <div className={styles.menuInfoCol}>
                            <RevealLinks href="#">X &#8599;</RevealLinks>
                            <RevealLinks href="#">Instagram</RevealLinks>
                            <RevealLinks href="#">LinkedIn</RevealLinks>
                            <RevealLinks href="#">Behance</RevealLinks>
                            <RevealLinks href="#">Dribbble</RevealLinks>


                        </div>
                        <div className={styles.menuInfoCol}>
                            <p>xyz@abc.com</p>
                            <p>2342 232 343</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenMenu
