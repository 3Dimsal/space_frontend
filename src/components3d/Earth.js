import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Earth = ({ ...props }) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/Earth.gltf');
  
    useFrame(() => {
      group.current.rotation.y += 0.0075
    });
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Default OBJ']} />
      </group>
    )
  }
  
  useGLTF.preload('/Earth.gltf');

  export default Earth;