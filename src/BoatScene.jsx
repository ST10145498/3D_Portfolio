import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import BoatModel from "./BoatModel";

export default function BoatScene() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <Suspense fallback={<span>Loading boat...</span>}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          <BoatModel scale={0.5} />
          <Environment preset="sunset" />
          <OrbitControls enableZoom={true} />
        </Suspense>
      </Canvas>
    </div>
  );
}
