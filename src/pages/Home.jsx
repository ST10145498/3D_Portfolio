import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import { HomeInfo, Loader } from "../components";
import { Island, SimpleSky, SimpleBird, SimplePlane, Boat } from "../models";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.665, 0.665, 0.665]; // 5% smaller
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1.14, 1.14, 1.14]; // 5% smaller
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition];
  };

  const adjustBoatForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.8, 0]; // Lowered by 0.3 units
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4.5, -4]; // Lowered by 0.5 units
    }

    return [screenScale, screenPosition];
  };

  const [biplaneScale, biplanePosition] = adjustBiplaneForScreenSize();
  const [islandScale, islandPosition] = adjustIslandForScreenSize();
  const [boatScale, boatPosition] = adjustBoatForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      {/* Instructions */}
      <div className='absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10 text-center'>
        <p className='text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg text-sm'>
          🖱️ Drag to rotate the island • ⌨️ Use arrow keys • 🎵 Click sound icon
        </p>
      </div>

      <Canvas
        className={`w-full h-screen ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
        style={{ background: 'linear-gradient(to bottom, #1a1a2e, #16213e, #0f3460)' }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 5, 10]} intensity={1.5} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1.5}
          />
          <hemisphereLight
            skyColor='#2a2a5e'
            groundColor='#0f0f23'
            intensity={0.8}
          />

          <SimpleBird />
          <SimpleSky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Boat
            isRotating={isRotating}
            position={boatPosition}
            rotation={[0, 20.1, 0]}
            scale={boatScale}
          />

        </Suspense>
      </Canvas>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  );
};

export default Home;
