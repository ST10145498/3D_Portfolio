import React from "react";
import { useGLTF } from "@react-three/drei";

export default function BoatScene(props) {
  const { scene } = useGLTF("/boat_model.glb"); // file must be in public/
  return <primitive object={scene} {...props} />;
}
