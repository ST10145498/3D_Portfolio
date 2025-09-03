import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Simple bird component as fallback
export function SimpleBird() {
  const birdRef = useRef();

  // Use a sine wave to simulate bird-like movement
  useFrame(({ clock }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the island
    if (birdRef.current.position.x > 10) {
      // Change direction to fly back towards the island
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < -10) {
      // Change direction to fly away from the island
      birdRef.current.rotation.y = 0;
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Flying towards positive X
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      // Flying towards negative X
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      {/* Simple bird geometry */}
      <coneGeometry args={[1, 2, 3]} />
      <meshStandardMaterial color="#8B4513" />
    </mesh>
  );
}

export function Bird() {
  // For now, just use the SimpleBird since we don't have the bird.glb file
  return <SimpleBird />;
}

// Use SimpleBird as default export since we don't have the bird.glb file
export default SimpleBird;
