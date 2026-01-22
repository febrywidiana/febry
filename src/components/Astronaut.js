import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";

function AstronautMesh() {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(clock.getElapsedTime()) * 0.1;
      meshRef.current.rotation.y += 0.002;
    }
  });

  const texture = new THREE.TextureLoader().load(
    "/assets/img/astronaut.png"
  );

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2.5, 3.5]} />
      <meshStandardMaterial
        map={texture}
        transparent
      />
    </mesh>
  );
}

export default function Astronaut() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />

      <AstronautMesh />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
