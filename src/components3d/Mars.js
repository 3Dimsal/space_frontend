import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Mars = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Mars.gltf');
  useFrame(() => {
    group.current.rotation.y += 0.005
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} />
    </group>
  )
}

useGLTF.preload('/Mars.gltf');

export default Mars;
