import React from "react";
import { useGLTF } from "@react-three/drei";

export default function BoatModel(props) {
  const { scene } = useGLTF("/boat_model.glb");
  return <primitive object={scene} {...props} />;
}
