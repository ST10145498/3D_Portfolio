// src/components/SailingScene.jsx
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import Boat from "./Boat.jsx";

export default function SailingScene() {
  const [pos, setPos] = useState(0);

  // simple wave plane
  function Water() {
    const ref = useRef();
    useFrame(({ clock }) => {
      if (ref.current) {
        ref.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.05; // bobbing
      }
    });
    return (
      <mesh ref={ref} position={[0, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20, 20, 20]} />
        <meshStandardMaterial color="#1E90FF" wireframe={false} />
      </mesh>
    );
  }

  return (
    <div className="w-full h-screen bg-sky-200">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 5]} intensity={1.2} />

        <Suspense fallback={null}>
          <Boat position={[pos, 0, 0]} />
          <Water />
        </Suspense>
      </Canvas>

      {/* controls */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setPos((p) => p - 1)}
        >
          ⬅ Sail Left
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setPos((p) => p + 1)}
        >
          Sail Right ➡
        </button>
      </div>
    </div>
  );
}
