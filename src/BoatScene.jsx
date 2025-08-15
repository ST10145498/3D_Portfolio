import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Scene3D from "./Scene3D.jsx";

export default function BoatScene() {
  return (
    <div className="w-full h-[65vh] bg-black">
      <Canvas camera={{ position: [5, 2, 8], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.2} />

        {/* Load model */}
        <Suspense fallback={null}>
          <Scene3D />
          <Environment preset="sunset" />
        </Suspense>

        <OrbitControls enableDamping />
      </Canvas>
    </div>
  );
}
