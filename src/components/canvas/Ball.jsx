import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Memoizing the Ball component
const Ball = React.memo(({ imgUrl }) => {
  const [decal] = useTexture([imgUrl.src]);

  return (
    <mesh castShadow receiveShadow scale={2.75}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color='#fff8eb'
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
      />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
    </mesh>
  );
});

const BallCanvas = React.memo(({ icon }) => {
  return (
    <Canvas
      frameloop='demand' // Prevents constant re-rendering
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls with zoom and damping disabled */}
        <OrbitControls enableZoom={false} enableDamping={false} />

        {/* Memoized Ball component */}
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
});

export default BallCanvas;
