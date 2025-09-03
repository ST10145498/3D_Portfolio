import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Simple fallback sky component
export function SimpleSky({ isRotating }) {
  const skyRef = useRef();

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.25 * delta;
    }
  });

  return (
    <mesh ref={skyRef}>
      <sphereGeometry args={[50, 32, 32]} />
      <meshBasicMaterial color="#87CEEB" side={2} />
    </mesh>
  );
}

// Export as Sky as well for compatibility
export const Sky = SimpleSky;

export default SimpleSky;
