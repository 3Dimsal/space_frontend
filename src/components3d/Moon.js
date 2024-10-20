import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Moon = ({ ...props }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/Moon.gltf')
    useFrame(() => {
      group.current.rotation.y -= 0.0075
    })
    return (
      <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Cube008.geometry} material={materials['Default OBJ.005']} />
      </group>
    )
  }
  
  useGLTF.preload('/Moon.gltf')

  export default Moon;