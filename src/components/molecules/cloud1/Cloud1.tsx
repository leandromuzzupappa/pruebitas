/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/cloud1/model.glb
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { IModelProps } from "@/data/interfaces";

export const Cloud1 = (props: IModelProps) => {
  const { nodes, materials } = useGLTF("/cloud1/model.glb") as any;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.cloudball001.geometry}
        material={nodes.cloudball001.material}
      />
    </group>
  );
};

useGLTF.preload("/cloud1/model.glb");