import { useGLTF } from "@react-three/drei";

export default function Boat(props) {
  const { scene } = useGLTF("/boat_model.glb");
  return (
    <primitive
      object={scene}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 2, 0]} // keep side view
      scale={1.2}
      {...props}
    />
  );
}

// Preload model so it loads faster
useGLTF.preload("/boat_model.glb");
