import { useGLTF, Text, MeshTransmissionMaterial } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'

const Model = () => {
    const mesh = useRef();
    const { nodes } = useGLTF("/models/torrus.glb")
    const { viewport } = useThree();
    useFrame(() => {
        mesh.current.rotation.x += 0.02
    })

    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true,
    };
  return (
    <group scale={viewport.width / 3.5}>
        <Text fontSize={0.4} font="fonts/amiamie/otf/Amiamie-BlackItalicRound.otf" position={[0,0,-.5]}>
            Mrityunjay Shukla
        </Text>
        <Text fontSize={0.2} font="fonts/amiamie/otf/Amiamie-ItalicRound.otf" position={[0, -0.35, -0.5]} color="#555555">
            Creative Developer & Designer
        </Text>
        <mesh ref={mesh} {...nodes.Torus002}>
            <MeshTransmissionMaterial {...materialProps}/>
        </mesh>
    </group>
  )
}

export default Model
