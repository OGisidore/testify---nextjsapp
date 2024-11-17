"use client";

import { Canvas, extend } from "@react-three/fiber";
import Model from "./Model";
import * as THREE from 'three';
import { Suspense } from "react";
import { ScrollControls } from "@react-three/drei";

extend({ Model });

export default function Scene() {
    return (
        <Canvas gl={{antialias : true}} dpr={[1,1.5]} className=" !absolute inset-0  h-full  " >
            {/* <Headers/> */}
       
            {/* Lunmiere */}
            <directionalLight position={[-5, -5, 5]} intensity={0.1} />

            {/* Objet */}
            <Suspense fallback={null}>
                <ScrollControls damping={1} pages={1}>
                    <Model />
                </ScrollControls>
            </Suspense>
            {/* <Model/> */}
            {/* Texte 3d */}
            {/* <OrbitControls/> */}

        </Canvas>
    )
}