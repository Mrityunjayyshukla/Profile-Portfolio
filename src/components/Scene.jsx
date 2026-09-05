import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Environment } from '@react-three/drei'
import { motion, useMotionTemplate, useMotionValue, animate } from 'framer-motion'

const colors = ['#13FFAA','#1E67C6','#CE84CF','#DD335C'];
const Scene = () => {
    const color = useMotionValue(colors[0]);
    const backgroundImage = useMotionTemplate`radial-gradient(140% 140% at 50% 0%, #020617 50%, ${color})`;

    useEffect(()=> {
        animate(color, colors, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    })
    return (
        <motion.div
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: backgroundImage
            }}
        >
            <Canvas id="home">
                <directionalLight intensity={3} position={[0, 3, 2]} />
                <Environment preset='city' />
                <Model />
            </Canvas>
        </motion.div>

    )
}

export default Scene
