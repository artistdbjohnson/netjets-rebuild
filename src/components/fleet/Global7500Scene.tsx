"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense } from "react";
import { Global7500Model } from "./Global7500Model";

function SceneContent() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[8.2, 2.6, 7.8]} fov={33} />

      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 14, 8]}
        intensity={1.7}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.00015}
        shadow-camera-far={30}
        shadow-camera-left={-12}
        shadow-camera-right={12}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
        color="#fffaf4"
      />
      <directionalLight position={[-8, 6, -4]} intensity={0.5} color="#c8d6ea" />
      <directionalLight position={[0, 4, -12]} intensity={0.4} color="#eef2ff" />
      <hemisphereLight args={["#dce8f5", "#0e0e10", 0.28]} />

      <Global7500Model />

      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.58}
        scale={24}
        blur={2.9}
        far={9}
        color="#000000"
      />

      <Environment preset="city" environmentIntensity={0.5} />

      <OrbitControls
        makeDefault
        enablePan={false}
        enableDamping
        dampingFactor={0.045}
        minDistance={5.5}
        maxDistance={14}
        minPolarAngle={Math.PI * 0.22}
        maxPolarAngle={Math.PI * 0.45}
        target={[0, 0.25, -0.4]}
        autoRotate={false}
        rotateSpeed={0.65}
        zoomSpeed={0.8}
      />
    </>
  );
}

export default function Global7500Scene() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: 3,
        toneMappingExposure: 1.08,
      }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <SceneContent />
      </Suspense>
    </Canvas>
  );
}
