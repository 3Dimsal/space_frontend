import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Hubble = ({ ...props })=> {
  const group = useRef();
  const { nodes, materials } = useGLTF('/Hubble.gltf');
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.z = .25*Math.cos(t);
    group.current.rotation.x = -.1*Math.cos(t);
});
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes._root.geometry} material={materials.transparent}>
        <mesh
          geometry={nodes.alpha_tex01.geometry}
          material={materials.NASA_logo}
          position={[0.1, 5.58, 1.45]}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.35, 0.35, 0.35]}
        />
        <mesh
          geometry={nodes.AO_1.geometry}
          material={materials.AO_1}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[2.26, 2.68, 2.26]}
        />
        <mesh
          geometry={nodes.AO_light.geometry}
          material={materials.AO_light}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[2.26, 2.68, 2.26]}
        />
        <mesh
          geometry={nodes.foil_gold.geometry}
          material={nodes.foil_gold.material}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[1.06, 1.06, 1.06]}
        />
        <mesh
          geometry={nodes.foil_silver.geometry}
          material={materials.foil_silver}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[1.06, 1.06, 1.06]}
        />
        <mesh
          geometry={nodes.shiny_panel.geometry}
          material={materials.shiny_panel}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.35, 0.35, 0.35]}
        />
        <mesh
          geometry={nodes.shiny_panel_cylinder.geometry}
          material={materials.shiny_panel_cylinder}
          position={[0, -3.86, 0.72]}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[2.26, 2.68, 2.26]}
        />
        <mesh
          geometry={nodes.tex_01.geometry}
          material={materials.tex_01}
          rotation={[-Math.PI, 0, Math.PI / 2]}
          scale={[0.35, 0.35, 0.35]}
        />
        <mesh
          geometry={nodes.tex_02.geometry}
          material={materials.tex_02}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[1.06, 1.06, 1.06]}
        />
        <mesh
          geometry={nodes.tex_03.geometry}
          material={materials.tex_03}
          rotation={[-Math.PI, 0, -Math.PI]}
          scale={[2.26, 2.68, 2.26]}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/Hubble.gltf');

export default Hubble;
