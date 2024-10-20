import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Ship = ({ ...props }) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/ship.gltf');

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
        group.current.rotation.y = t+Math.cos(0)+.75;
        group.current.rotation.z = Math.cos(t);
        group.current.position.x =  2.6*Math.sin(t);
        group.current.position.z =  2.6*Math.cos(t);
    });
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh
          geometry={nodes.Intergalactic_Spaceships_Version_2.geometry}
          material={materials['Material.001']}
          rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-1.07, -5.54, -0.26]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Circle.geometry}
              material={nodes.Circle.material}
              position={[0.05, -0.08, 0.26]}
              scale={[1, 1, 1.25]}
            />
            <mesh
              geometry={nodes.Torus001.geometry}
              material={nodes.Torus001.material}
              position={[0.05, -0.08, -2.68]}
              rotation={[0, 0, -2.51]}
              scale={[0.33, 0.33, 0.33]}
            />
            <mesh geometry={nodes.Torus004.geometry} material={nodes.Torus004.material} position={[0.05, -0.08, 0.26]} />
            <mesh
              name="Torus002"
              geometry={nodes.Torus002.geometry}
              material={nodes.Torus002.material}
              morphTargetDictionary={nodes.Torus002.morphTargetDictionary}
              morphTargetInfluences={nodes.Torus002.morphTargetInfluences}
              position={[0.05, -0.08, -1.7]}
              rotation={[0, 0, -2.51]}
              scale={1.08}
            />
            <mesh
              name="Torus003"
              geometry={nodes.Torus003.geometry}
              material={nodes.Torus003.material}
              morphTargetDictionary={nodes.Torus003.morphTargetDictionary}
              morphTargetInfluences={nodes.Torus003.morphTargetInfluences}
              position={[0.05, -0.08, -0.72]}
              rotation={[0, 0, -1.26]}
              scale={1.25}
            />
          </group>
          <group position={[1.15, -5.54, -0.25]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Circle001.geometry}
              material={nodes.Circle001.material}
              position={[-0.12, -0.08, 0.27]}
              scale={[1, 1, 1.25]}
            />
            <mesh
              name="Torus007"
              geometry={nodes.Torus007.geometry}
              material={nodes.Torus007.material}
              position={[-0.12, -0.08, -2.67]}
              rotation={[0, 0, -2.51]}
              scale={[0.33, 0.33, 0.33]}
            />
            <mesh
              name="Torus000"
              geometry={nodes.Torus000.geometry}
              material={nodes.Torus000.material}
              morphTargetDictionary={nodes.Torus000.morphTargetDictionary}
              morphTargetInfluences={nodes.Torus000.morphTargetInfluences}
              position={[-0.12, -0.08, -3.64]}
              rotation={[0, 0, -1.26]}
              scale={0.06}
            />
            <mesh
              name="Torus005"
              geometry={nodes.Torus005.geometry}
              material={nodes.Torus005.material}
              morphTargetDictionary={nodes.Torus005.morphTargetDictionary}
              morphTargetInfluences={nodes.Torus005.morphTargetInfluences}
              position={[-0.12, -0.08, -0.71]}
              rotation={[0, 0, -1.26]}
              scale={1.25}
            />
            <mesh
              name="Torus006"
              geometry={nodes.Torus006.geometry}
              material={nodes.Torus006.material}
              morphTargetDictionary={nodes.Torus006.morphTargetDictionary}
              morphTargetInfluences={nodes.Torus006.morphTargetInfluences}
              position={[-0.12, -0.08, -1.69]}
              rotation={[0, 0, -2.51]}
              scale={1.08}
            />
          </group>
        </mesh>
      </group>
    )
  }
  
  useGLTF.preload('/ship.gltf');

  export default Ship;