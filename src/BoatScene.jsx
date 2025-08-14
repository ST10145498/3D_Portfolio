import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Scene3D from "./Scene"; // your earlier 3D island + boat code

export default function BoatScene() {
  return (
    <div className="w-full h-full">
      <Suspense fallback={<div className="h-full flex items-center justify-center">Loading 3D scene...</div>}>
        <Canvas shadows camera={{ position: [10, 6, 10], fov: 45 }}>
          <Scene3D />
        </Canvas>
      </Suspense>
    </div>
  );
}
