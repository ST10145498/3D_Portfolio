import { useRef } from "react";

// Simple plane component as fallback
export function SimplePlane({ isRotating, ...props }) {
  const planeRef = useRef();

  return (
    <mesh ref={planeRef} {...props}>
      {/* Simple plane geometry */}
      <boxGeometry args={[2, 0.5, 0.5]} />
      <meshStandardMaterial color="#C0C0C0" />
      {/* Wings */}
      <mesh position={[0, 0, 1]}>
        <boxGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
      <mesh position={[0, 0, -1]}>
        <boxGeometry args={[0.1, 0.1, 2]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
    </mesh>
  );
}

export function Plane({ isRotating, ...props }) {
  // For now, just use the SimplePlane since we don't have the plane.glb file
  return <SimplePlane isRotating={isRotating} {...props} />;
}

// Use SimplePlane as default export since we don't have the plane.glb file
export default SimplePlane;
