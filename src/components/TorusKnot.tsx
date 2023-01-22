import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import type { Mesh } from 'three'
import type { MeshProps } from '@react-three/fiber'
import type { ReactNode, HTMLAttributes } from 'react'

import AsciiRenderer from './AsciiRenderer'
import { useClickArrayCycle, useMousePosition, useTimeoutArrayCycle } from '../hooks'
import { useSpring } from '@react-spring/web'


export default (props: { className: HTMLAttributes<HTMLDivElement>["className"] }) => {
    return (
        <Canvas>
            <color attach="background" args={['black']} />
            <spotLight position={[16, 16, 16]} angle={0.15} penumbra={1} />
            <pointLight position={[-32, -32, -32]} intensity={2} />
            <Torusknot
                // position={new THREE.Vector3(4)}
                // scale={3}
                position={new THREE.Vector3(0, 0, -64)}
                scale={20}
            />
            {/* <Rig /> */}
            <AsciiRenderer characters=' juanrolon▀' resolution={window.innerWidth > 480 ? 0.15 : 0.2} className={props.className} />
        </Canvas>
    )
}

function Rig({ vec = new THREE.Vector3() }) {
    const { clientX, clientY } = useMousePosition()
    const x = (clientX - window.innerWidth / 2) / window.innerWidth
    const y = (clientY - window.innerHeight / 2) / window.innerHeight

    useFrame((state) => {
        state.camera.position.lerp(vec.set(x, y, 0), 0.01)
        state.camera.lookAt(0, 0, 0)
    })
    return <></>
}

const Pyramid = (props: MeshProps) => {
    const ref = useRef<Mesh>(null)
    useFrame((state, delta) => { if (ref.current) ref.current.rotation.x = ref.current.rotation.y -= delta / Math.PI })
    return <mesh {...props} ref={ref}>

        <tetrahedronGeometry args={[1]} />
        <meshStandardMaterial color='white' />
    </mesh>
}

const Torusknot = (props: MeshProps) => {
    const ref = useRef<Mesh>(null)
    const { clientXProgress: x, clientYProgress: y } = useMousePosition()

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta / 12
            ref.current.rotation.y += delta / 12
        }
    })

    return (
        <mesh
            ref={ref}
            {...props}
        >
            <torusKnotGeometry args={[2, 0.22, 128, 32]} />
            <meshStandardMaterial color="white" />
        </mesh>
    )
}
