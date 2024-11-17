import { useAnimations, useGLTF, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useEffect, useRef } from "react"
import { Group } from "three"
useGLTF.preload('/insanity_in_motion.glb')
export default function Model() {
    const group = useRef<Group>(null)
    const { nodes, materials, animations, scene } = useGLTF('/insanity_in_motion.glb')
    const {actions, clips} = useAnimations(animations, scene)
    const scroll = useScroll()
    useEffect(() => {
        if (actions && actions['Take 001']) {
            actions['Take 001'].play().paused = false
        }
    }, [actions])
useFrame(() => {
    if (actions && actions['Take 001']) {
        actions['Take 001'].time = (actions['Take 001'].getClip().duration * scroll.offset) / 1
    }
})

    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}