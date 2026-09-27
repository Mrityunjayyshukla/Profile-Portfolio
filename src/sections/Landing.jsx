'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../sections/styles.module.scss'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import CustomEase from 'gsap/CustomEase'
import Magnetic from '../components/Magnetic'
import RevealLinks from '../components/RevealLinks'

gsap.registerPlugin(CustomEase, SplitText)

CustomEase.create('hop', '0.9, 0, 0.1, 1')
CustomEase.create('glide', '0.8, 0, 0.2, 1')

const Landing = () => {
    const mainRef = useRef(null)
    const [dateTime, setDateTime] = useState(
        () => new Date().toLocaleString()
    )
    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        const ctx = gsap.context(() => {
            const introImages = gsap.utils.toArray(`.${styles.introimg}`)
            const heroHeader = mainRef.current.querySelector(`.${styles.heroHeader}`)
            const heroImageOverlay = mainRef.current.querySelector(`.${styles.heroImageOverlay}`)
            const greeting = mainRef.current.querySelector(`.${styles.greeting}`)
            const heroName = mainRef.current.querySelector(`.${styles.heroName}`)
            const heroTitle = mainRef.current.querySelector(`.${styles.heroTitle}`)
            const heroSocial = mainRef.current.querySelector(`.${styles.heroSocial}`)
            const heroFooter = mainRef.current.querySelector(`.${styles.heroFooter}`)

            const introImgScale = 0.2
            const introImgGap = 40

            const introImgRotations = [-15, 5, -7.5, 10, -2.5]
            const introImgScaledWidth = window.innerWidth * introImgScale
            const introImgRowWidth = introImgScaledWidth * 5 + introImgGap * 4
            const introImgCenteredX = (window.innerWidth - introImgRowWidth) / 2

            introImages.forEach((img, i) => {
                const centeredX = introImgCenteredX + i * (introImgScaledWidth + introImgGap) + introImgScaledWidth / 2 - window.innerWidth / 2
                const offScreenX = -window.innerWidth * 1.3 + centeredX
                gsap.set(img, {
                    scale: introImgScale,
                    x: offScreenX,
                    rotation: introImgRotations[i],
                    borderRadius: '2.5rem',
                })
                img.dataset.centeredX = centeredX
            })
            gsap.set(
                [heroHeader, greeting, heroName, heroTitle, heroSocial, heroFooter],
                { autoAlpha: 0, y: 50 }
            )
            const tl = gsap.timeline({ delay: 1 })

            const preloader = mainRef.current.querySelector(`.${styles.preloader}`)
            const preloaderOverlay = mainRef.current.querySelector(`.${styles.preloaderoverlay}`)

            tl.to(preloader, {
                scaleX: 1,
                duration: 1.5,
                ease: 'glide',

                onComplete: () => {
                    gsap.set(preloader, { transformOrigin: 'right' })
                },
            })

            tl.to(preloader, {
                scaleX: 0,
                duration: 1.25,
                ease: 'hop',
            })
            tl.to(preloaderOverlay, {
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
                duration: 1,
                ease: 'hop',
            }, '<0.75')

            introImages.forEach((img) => {
                tl.to(img, {
                    x: parseFloat(img.dataset.centeredX),
                    duration: 1.5,
                    ease: 'glide',
                }, '<0.025')
            })

            tl.to(
                [introImages[0], introImages[1]], {
                x: '-100vw',
                duration: 1.5,
                ease: 'glide',
            }, 'spread')

            tl.to(
                [introImages[3], introImages[4]], {
                x: '100vw',
                duration: 1.5,
                ease: 'glide',
            }, 'spread')

            tl.to(introImages[2], {
                scale: 1,
                x: 0,
                rotation: 0,
                borderRadius: 0,
                duration: 1.5,
                ease: 'glide',
            }, '<')

            tl.to(heroImageOverlay, {
                backgroundColor: 'rgba(0, 0, 0, 0.55)',
                duration: 1.5,
                ease: 'glide',
            }, '<')

            tl.to(heroHeader, { autoAlpha: 1, y: 0, duration: 1, ease: 'power4.out' }, '<')
            tl.to(greeting, { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '<0.2')
            tl.to(heroName, { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '<0.1')
            tl.to(heroTitle, { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '<0.1')
            tl.to(heroSocial, { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '<0.05')
            tl.to(heroFooter, { autoAlpha: 1, y: 0, duration: 1.2, ease: 'power4.out' }, '<0.05')
        }, mainRef)
        return () => ctx.revert()
    }, [])

    return (
        <main ref={mainRef}>
            <div className={styles.preloaderoverlay}>
                <div className={styles.preloader}></div>
            </div>
            <section className={styles.hero}>
                <div className={styles.introimg}>
                    <img src="./images/img-3.webp" alt=""/>
                </div>
                <div className={styles.introimg}>
                    <img src="./images/img-2.webp" alt=""/>
                </div>
                <div className={`${styles.introimg} ${styles.heroimg}`}>
                    <img src="./images/img-5.webp" alt=""/>
                    <div className={styles.heroImageOverlay} />
                </div>
                <div className={styles.introimg}>
                    <img src="./images/img-4.webp" alt=""/>
                </div>
                <div className={styles.introimg}>
                    <img src="./images/img-3.webp" alt=""/>
                </div>

                <div className={styles.heroContent}>
                    <header ref={(el) => {
                            if (el) {
                                el.classList.add(styles.heroHeader)
                            }
                        }}
                        className={styles.topHeader}
                    >
                        <div className={styles.dateTime}>
                            <span className={styles.statusDot}/>
                            <span>{dateTime}</span>
                        </div>
                    </header>
                    <div className={styles.heroMain}>
                        <div>
                            <p className={styles.greeting}>Hello, There!</p>
                        </div>
                        <div>
                            <h1 className={styles.heroName}>
                                Mrityunjay Shukla
                            </h1>
                        </div>
                        <div>
                            <h2 className={styles.heroTitle}> Creative Developer & Designer</h2>
                        </div>
                    </div>
                    <div className={styles.heroSocial}>
                        <Magnetic>
                            <svg viewBox="0 0 16 16" className={styles.socialIcon} xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                                    fill="currentColor"
                                />
                            </svg>
                        </Magnetic>
                        <Magnetic>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
                                <svg className={styles.socialIcon} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </a>
                        </Magnetic>
                    </div>
                    <div className={styles.heroFooter}>
                        <div>
                            <p className={styles.footerLabel}>Location</p>
                            <p className={styles.footerLocation}>NEW DELHI / INDIA</p>
                        </div>
                        <div>
                            <a href="#tour" className={styles.scrollLink}>Scroll
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M7 17L17 7M17 7H7M17 7v10"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Landing
