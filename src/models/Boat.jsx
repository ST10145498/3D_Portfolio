import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import { a } from "@react-spring/three";

export function Boat({ isRotating, ...props }) {
  const boatRef = useRef();
  const { scene, animations } = useGLTF("/boat_model.glb");
  const { actions } = useAnimations(animations, boatRef);

  // Control boat animation based on island rotation
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const animationName = Object.keys(actions)[0]; // Get first available animation

      if (isRotating) {
        actions[animationName]?.play();
      } else {
        actions[animationName]?.stop();
      }
    }
  }, [actions, isRotating]);

  return (
    <a.group ref={boatRef} {...props} dispose={null}>
      <primitive object={scene} />
    </a.group>
  );
}

useGLTF.preload("/boat_model.glb");

export default Boat;
