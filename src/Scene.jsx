import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Scene3D() {
 
  const { scene } = useGLTF("/boat_model.glb"); 
  return <primitive object={scene} scale={1.5} />;
}
