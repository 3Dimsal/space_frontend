import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import React from 'react';
import { Stars } from '@react-three/drei';
import { OrbitControls } from '@react-three/drei';
import Title from "./Title.js";
import Moon from "./Moon.js";
import Ship from "./Ship.js";
import Earth from "./Earth.js";
import Hubble from "./Hubble.js";
import Mars from "./Mars.js";
import { useSelector } from 'react-redux';

const ThreeScene = () => {
    const selected = useSelector(state=> state.toggle);
    return (
        <Canvas style={{ height:600 , width: '100%', background: `#312C44`  }}>
        <pointLight position={[10, 5, 10]} />
        <mesh>
        <Suspense fallback={null}>
            <Earth scale={0.003} position={[0, 0, 0]}/>
            <Title scale={0.7} position={[-2, 2, 0]}/>
            <Moon scale={0.0006} position={[-2, 1.5, 1.5]}/>
            <Ship scale={0.1} position={[2, 0, 2]}/>
            <Hubble scale={0.1} position={[3, -1, 2]}/>
            <Mars scale={0.001} position={[-13, -3, -7]}/>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        </Suspense>
        </mesh>
        {selected ? <OrbitControls /> : null}
      </Canvas>
    );
}

export default ThreeScene;