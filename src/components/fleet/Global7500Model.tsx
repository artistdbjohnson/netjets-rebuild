"use client";

import { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

/**
 * LOCKED — Elite procedural Bombardier Global 7500
 * Official proportions (Bombardier factsheet / brochure):
 *   Length 111 ft (33.8 m) · Wingspan 104 ft (31.7 m) · Height 27 ft (8.2 m)
 *   Fuselage Ø ~9 ft 2 in · 2× GE Passport rear-mounted · T-tail · canted winglets
 *   Windows: 4 living zones × 3/side + galley/crew ≈ 14/side
 *   Cabin ~54.5 ft of the 111 ft length
 */
export function Global7500Model() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.014;
  });

  const L = 11.0;
  const span = L * (104 / 111);
  const height = L * (27 / 111);
  const fuseR = L * (2.8 / 33.8) * 0.5;

  const mat = useMemo(
    () => ({
      body: new THREE.MeshStandardMaterial({
        color: "#f7f7f9",
        metalness: 0.68,
        roughness: 0.14,
        envMapIntensity: 1.2,
      }),
      dark: new THREE.MeshStandardMaterial({
        color: "#0a0a0c",
        metalness: 0.45,
        roughness: 0.28,
      }),
      glass: new THREE.MeshPhysicalMaterial({
        color: "#040910",
        metalness: 0.0,
        roughness: 0.02,
        transmission: 0.45,
        transparent: true,
        opacity: 0.85,
        thickness: 0.55,
      }),
      engine: new THREE.MeshStandardMaterial({
        color: "#141416",
        metalness: 0.97,
        roughness: 0.1,
        envMapIntensity: 1.5,
      }),
      metal: new THREE.MeshStandardMaterial({
        color: "#b4b4bc",
        metalness: 0.92,
        roughness: 0.16,
      }),
      nozzle: new THREE.MeshStandardMaterial({
        color: "#222226",
        metalness: 0.85,
        roughness: 0.3,
      }),
      frame: new THREE.MeshStandardMaterial({
        color: "#161618",
        metalness: 0.3,
        roughness: 0.45,
      }),
    }),
    []
  );

  const windows = useMemo(() => {
    const cabinStart = -L * 0.32;
    const cabinEnd = L * 0.28;
    const zs: number[] = [];
    for (let i = 0; i < 14; i++) {
      zs.push(cabinStart + (i / 13) * (cabinEnd - cabinStart));
    }
    return zs;
  }, [L]);

  const halfSpan = span / 2;
  const wingY = -fuseR * 0.35;
  const wingZ = -L * 0.04;
  const engZ = -L * 0.38;
  const engX = fuseR * 1.45;
  const tailH = height * 0.72;

  return (
    <group
      ref={group}
      position={[0, 0.05, 0]}
      scale={1.0}
      rotation={[0, Math.PI * 0.06, 0]}
    >
      <mesh castShadow receiveShadow rotation={[Math.PI / 2, 0, 0]} material={mat.body}>
        <cylinderGeometry args={[fuseR * 0.98, fuseR, L * 0.78, 64]} />
      </mesh>

      <mesh castShadow position={[0, 0, L * 0.42]} rotation={[Math.PI / 2, 0, 0]} material={mat.body}>
        <coneGeometry args={[fuseR * 0.98, L * 0.14, 40]} />
      </mesh>
      <mesh position={[0, 0, L * 0.355]} rotation={[Math.PI / 2, 0, 0]} material={mat.body}>
        <cylinderGeometry args={[fuseR * 0.99, fuseR * 0.98, L * 0.04, 48]} />
      </mesh>
      <mesh position={[0, -fuseR * 0.15, L * 0.49]} rotation={[Math.PI / 2, 0, 0]} material={mat.metal}>
        <cylinderGeometry args={[0.012, 0.012, L * 0.03, 8]} />
      </mesh>

      <mesh position={[0, fuseR * 0.45, L * 0.38]} material={mat.glass}>
        <boxGeometry args={[fuseR * 1.15, fuseR * 0.5, L * 0.08]} />
      </mesh>
      <mesh position={[-fuseR * 0.58, fuseR * 0.45, L * 0.38]} material={mat.frame}>
        <boxGeometry args={[0.016, fuseR * 0.48, L * 0.078]} />
      </mesh>
      <mesh position={[fuseR * 0.58, fuseR * 0.45, L * 0.38]} material={mat.frame}>
        <boxGeometry args={[0.016, fuseR * 0.48, L * 0.078]} />
      </mesh>

      <mesh castShadow position={[0, 0, -L * 0.42]} rotation={[-Math.PI / 2, 0, 0]} material={mat.body}>
        <coneGeometry args={[fuseR * 0.95, L * 0.12, 40]} />
      </mesh>

      {windows.map((z, i) => (
        <group key={i}>
          <mesh position={[-fuseR * 0.98, fuseR * 0.2, z]} material={mat.frame}>
            <boxGeometry args={[0.035, fuseR * 0.32, L * 0.028]} />
          </mesh>
          <mesh position={[-fuseR * 1.01, fuseR * 0.2, z]} material={mat.dark}>
            <boxGeometry args={[0.015, fuseR * 0.26, L * 0.022]} />
          </mesh>
          <mesh position={[fuseR * 0.98, fuseR * 0.2, z]} material={mat.frame}>
            <boxGeometry args={[0.035, fuseR * 0.32, L * 0.028]} />
          </mesh>
          <mesh position={[fuseR * 1.01, fuseR * 0.2, z]} material={mat.dark}>
            <boxGeometry args={[0.015, fuseR * 0.26, L * 0.022]} />
          </mesh>
        </group>
      ))}

      <mesh castShadow position={[-halfSpan * 0.48, wingY, wingZ]} rotation={[0, 0, 0.035]} material={mat.body}>
        <boxGeometry args={[halfSpan * 0.92, 0.048, L * 0.12]} />
      </mesh>
      <mesh castShadow position={[halfSpan * 0.48, wingY, wingZ]} rotation={[0, 0, -0.035]} material={mat.body}>
        <boxGeometry args={[halfSpan * 0.92, 0.048, L * 0.12]} />
      </mesh>
      <mesh position={[-halfSpan * 0.88, wingY + 0.04, wingZ - L * 0.03]} rotation={[0, 0.28, 0.035]} material={mat.body}>
        <boxGeometry args={[halfSpan * 0.18, 0.04, L * 0.09]} />
      </mesh>
      <mesh position={[halfSpan * 0.88, wingY + 0.04, wingZ - L * 0.03]} rotation={[0, -0.28, -0.035]} material={mat.body}>
        <boxGeometry args={[halfSpan * 0.18, 0.04, L * 0.09]} />
      </mesh>
      <mesh castShadow position={[-halfSpan * 0.96, wingY + 0.28, wingZ - L * 0.04]} rotation={[0, 0.28, 0.55]} material={mat.body}>
        <boxGeometry args={[0.035, height * 0.18, L * 0.045]} />
      </mesh>
      <mesh castShadow position={[halfSpan * 0.96, wingY + 0.28, wingZ - L * 0.04]} rotation={[0, -0.28, -0.55]} material={mat.body}>
        <boxGeometry args={[0.035, height * 0.18, L * 0.045]} />
      </mesh>
      <mesh position={[0, wingY + 0.03, wingZ]} material={mat.metal}>
        <boxGeometry args={[fuseR * 2.8, 0.08, L * 0.13]} />
      </mesh>

      <mesh castShadow position={[-engX, fuseR * 0.15, engZ]} rotation={[0, 0, Math.PI / 2]} material={mat.engine}>
        <cylinderGeometry args={[fuseR * 0.48, fuseR * 0.55, L * 0.13, 32]} />
      </mesh>
      <mesh castShadow position={[engX, fuseR * 0.15, engZ]} rotation={[0, 0, Math.PI / 2]} material={mat.engine}>
        <cylinderGeometry args={[fuseR * 0.48, fuseR * 0.55, L * 0.13, 32]} />
      </mesh>
      <mesh position={[-engX * 0.75, fuseR * 0.08, engZ + L * 0.03]} material={mat.metal}>
        <boxGeometry args={[fuseR * 0.7, 0.06, L * 0.045]} />
      </mesh>
      <mesh position={[engX * 0.75, fuseR * 0.08, engZ + L * 0.03]} material={mat.metal}>
        <boxGeometry args={[fuseR * 0.7, 0.06, L * 0.045]} />
      </mesh>
      <mesh position={[-engX, fuseR * 0.15, engZ + L * 0.07]} rotation={[Math.PI / 2, 0, 0]} material={mat.dark}>
        <torusGeometry args={[fuseR * 0.5, 0.022, 12, 32]} />
      </mesh>
      <mesh position={[engX, fuseR * 0.15, engZ + L * 0.07]} rotation={[Math.PI / 2, 0, 0]} material={mat.dark}>
        <torusGeometry args={[fuseR * 0.5, 0.022, 12, 32]} />
      </mesh>
      <mesh position={[-engX, fuseR * 0.15, engZ - L * 0.08]} rotation={[0, 0, Math.PI / 2]} material={mat.nozzle}>
        <cylinderGeometry args={[fuseR * 0.4, fuseR * 0.48, L * 0.028, 24]} />
      </mesh>
      <mesh position={[engX, fuseR * 0.15, engZ - L * 0.08]} rotation={[0, 0, Math.PI / 2]} material={mat.nozzle}>
        <cylinderGeometry args={[fuseR * 0.4, fuseR * 0.48, L * 0.028, 24]} />
      </mesh>

      <mesh castShadow position={[0, tailH * 0.55, -L * 0.4]} material={mat.body}>
        <boxGeometry args={[0.048, tailH, L * 0.12]} />
      </mesh>
      <mesh castShadow position={[0, tailH * 1.05, -L * 0.42]} material={mat.body}>
        <boxGeometry args={[span * 0.32, 0.042, L * 0.075]} />
      </mesh>
      <mesh position={[-span * 0.14, tailH * 1.05, -L * 0.43]} rotation={[0, 0.1, 0]} material={mat.body}>
        <boxGeometry args={[span * 0.04, 0.038, L * 0.06]} />
      </mesh>
      <mesh position={[span * 0.14, tailH * 1.05, -L * 0.43]} rotation={[0, -0.1, 0]} material={mat.body}>
        <boxGeometry args={[span * 0.04, 0.038, L * 0.06]} />
      </mesh>
      <mesh position={[0, tailH * 0.55, -L * 0.35]} material={mat.dark}>
        <boxGeometry args={[0.038, tailH * 0.85, 0.055]} />
      </mesh>

      <mesh position={[0, fuseR * 1.05, L * 0.15]} material={mat.dark}>
        <boxGeometry args={[0.08, 0.06, L * 0.03]} />
      </mesh>

      <mesh position={[0, -fuseR * 0.75, L * 0.12]} material={mat.dark}>
        <boxGeometry args={[fuseR * 0.5, 0.09, L * 0.05]} />
      </mesh>
      <mesh position={[-fuseR * 2.4, -fuseR * 0.65, -L * 0.02]} material={mat.dark}>
        <boxGeometry args={[fuseR * 0.35, 0.07, L * 0.04]} />
      </mesh>
      <mesh position={[fuseR * 2.4, -fuseR * 0.65, -L * 0.02]} material={mat.dark}>
        <boxGeometry args={[fuseR * 0.35, 0.07, L * 0.04]} />
      </mesh>
    </group>
  );
}
