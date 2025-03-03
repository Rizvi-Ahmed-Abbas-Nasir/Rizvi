"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export const ModelViewer = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="mainPage1">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      <Canvas
        camera={{ position: [2, 2, 5], fov: 50 }}
        onCreated={() => setIsLoading(false)} // Hide loader when model is loaded
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[6,2, 2]} intensity={1.5} />
        <Environment preset="city" />
        <OrbitControls enableZoom={true} />
        <EthereumModel />
      </Canvas>
    </div>
  );
};

export const EthereumModel = () => {
  const myModel = useLoader(GLTFLoader, "/the_forgotten_knight.glb", () => {
    console.log("Model Loaded");
  });

  const modelRef = useRef(null);

  useFrame((_state, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={modelRef} scale={1.3}  position={[-1, -1.7, 0]} rotation={[-0.1, Math.PI * 3.8, 0]}>
      <primitive object={myModel.scene} />
    </group>
  
  );
};
