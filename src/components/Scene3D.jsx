// import React, { Suspense } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import BoatScene from "./BoatScene";

// export default function Scene3D() {
//   return (
//     <Canvas camera={{ position: [0, 2, 5], fov: 60 }}>
//       <ambientLight intensity={0.5} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <Suspense fallback={null}>
//         <BoatScene />
//       </Suspense>
//       <OrbitControls />
//     </Canvas>
//   );
// }
// src/components/Boat.js
import { useGLTF } from "@react-three/drei";

export default function Boat(props) {
  const { scene } = useGLTF("/boat_model.glb");
  return (
    <primitive
      object={scene}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 2, 0]} // side view
      scale={1.2}
      {...props}
    />
  );
}

useGLTF.preload("/boat_model.glb");
