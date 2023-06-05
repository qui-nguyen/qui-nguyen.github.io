import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // const computer = useGLTF("./desktop_pc/scene.gltf");
  const computer = useGLTF("./coffeemat/scene.gltf");


  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[0, 50, 40]}
        angle={1.5}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      // position={[-20, 50, 10]}
      // angle={0.12}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.6}
        position={isMobile ? [0, -120, -2.2] : [0, -120, -1.5]}
      // scale={isMobile ? 0.005 : 0.01}
      // position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
      // rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    // const mediaQuery = window.matchMedia("(max-width: 500px)");
    const mediaQuery = window.matchMedia("(max-width: 820px)");


    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      // camera={{ position: [20, 3, 5], fov: 25 }}
      camera={{ position: [850, 200, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 3}
          minPolarAngle={Math.PI / 3}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;