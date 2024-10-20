import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

const Title =({ ...props }) => {
    const group = useRef();
    const { nodes, materials } = useGLTF('/last.gltf');
    
    useFrame((state) => {
      const t = state.clock.getElapsedTime()
      group.current.position.y = 2+.2*Math.sin(t)
    })
    return (
      <group ref={group} {...props} dispose={null}>
        {/* <mesh geometry={nodes.The_Space_Race.geometry} material={materials['Material.001']} rotation={[1.27, 0, 0]} /> */}
        <mesh geometry={nodes.Text.geometry} material={materials['Material.001']} rotation={[1.63, 0, 0]} />
      </group>
    )
  }
  
  useGLTF.preload('/last.gltf');

  export default Title;
  