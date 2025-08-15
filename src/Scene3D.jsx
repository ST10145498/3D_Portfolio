import { useGLTF } from "@react-three/drei";

/**
 * Loads the boat model from /public.
 * Place your file at: public/boat_model.glb
 * Then load it here with the absolute path "/boat_model.glb".
 */
export default function Scene3D(props) {
  const { scene } = useGLTF("/boat_model.glb");

  // Adjust position/scale/rotation for your specific model
  return (
    <primitive
      object={scene}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 2, 0]}
      scale={1.2}
      {...props}
    />
  );
}

// Preload so it’s cached before render
useGLTF.preload("/boat_model.glb");
