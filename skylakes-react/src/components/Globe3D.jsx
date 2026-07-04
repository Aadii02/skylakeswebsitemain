import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import ThreeGlobe from 'three-globe';
import countries from '../data/globe.json';

function Globe() {
  const groupRef = useRef();

  const globe = useMemo(() => {
    const g = new ThreeGlobe()
      .hexPolygonsData(countries.features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .hexPolygonColor(() => '#60A5FA')
      .showAtmosphere(true)
      .atmosphereColor('#3b82f6')
      .atmosphereAltitude(0.18);

    const material = g.globeMaterial();
    material.color = new THREE.Color('#0d2144');
    material.emissive = new THREE.Color('#132c5c');
    material.emissiveIntensity = 0.45;
    material.shininess = 0.9;
    return g;
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={groupRef} rotation={[0.25, 4.2, 0]}>
      <primitive object={globe} />
    </group>
  );
}

function SatelliteRing({ radius, tilt = [0, 0, 0], speed = 0.4, offset = 0, satCount = 2 }) {
  const satsRef = useRef([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    satsRef.current.forEach((sat, i) => {
      if (!sat) return;
      const angle = offset + t * speed + (i * Math.PI * 2) / satCount;
      sat.position.set(Math.cos(angle) * radius, 0, Math.sin(angle) * radius);
    });
  });

  return (
    <group rotation={tilt}>
      {/* orbit path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.3, 8, 180]} />
        <meshBasicMaterial color="#60A5FA" transparent opacity={0.22} />
      </mesh>
      {/* satellites */}
      {Array.from({ length: satCount }).map((_, i) => (
        <group key={i} ref={(el) => { satsRef.current[i] = el; }}>
          <mesh>
            <sphereGeometry args={[2.4, 16, 16]} />
            <meshBasicMaterial color="#ffffff" />
          </mesh>
          <mesh>
            <sphereGeometry args={[5, 16, 16]} />
            <meshBasicMaterial color="#60A5FA" transparent opacity={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function Globe3D() {
  return (
    <div className="globe-canvas">
      <Canvas camera={{ position: [0, 45, 375], fov: 50 }} dpr={[1, 2]}>
        <ambientLight intensity={2} />
        <directionalLight position={[200, 200, 200]} intensity={1.6} />
        <pointLight position={[-250, -100, -250]} intensity={0.8} color="#3b82f6" />
        <Globe />
        <SatelliteRing radius={135} tilt={[0.5, 0, -0.35]} speed={0.45} satCount={2} />
        <SatelliteRing radius={155} tilt={[-0.4, 0.3, 0.5]} speed={-0.3} offset={2} satCount={3} />
        <SatelliteRing radius={175} tilt={[1.15, 0, 0.15]} speed={0.22} offset={4} satCount={2} />
      </Canvas>
    </div>
  );
}
