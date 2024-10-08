import React, { Suspense, useEffect, useState, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Memoizing the Drone component
const Drone = React.memo(({ isMobile }) => {
  const drone = useGLTF("./fpv_drone/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.85} skyColor='white' groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={drone.scene}
        scale={isMobile ? 5 : 8.55}
        position={isMobile ? [0, -2, 0] : [0, -3.25, 0]}
        rotation={[0.05, 0.33 * Math.PI, 0]}
      />
    </mesh>
  );
});

const DroneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set initial state
    setIsMobile(mediaQuery.matches);

    // Define event listener callback function
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Attach the event listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // Memoizing the Canvas setup
  const canvasProps = useMemo(() => ({
    frameloop: 'demand',
    shadows: true,
    dpr: [1, 2],
    camera: { position: [20, 3, 5], fov: 25 },
    gl: { preserveDrawingBuffer: true },
  }), []);

  return (
    <Canvas {...canvasProps}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Drone isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

// Memoize the entire DroneCanvas component
export default React.memo(DroneCanvas);
