import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function CarModel({ activeCarIndex }: { activeCarIndex: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();
  
  // Load the glTF model
  const { scene } = useGLTF('/Jeep Gladiator.glb');

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    
    // Rotate car slowly on its own continuously
    groupRef.current.rotation.y += delta * 0.1;
    
    const offset = scroll.offset; // goes from 0 to 1 across 4 pages
    const page = 1 / 4; 
    
    let targetX = 0;
    let targetZ = 0;
    let targetRotZ = 0;

    if (activeCarIndex === 0) {
      if (offset < page) {
        // Page 1 -> 2 transition (Moving to left side for Features)
        const progress = offset / page;
        targetX = THREE.MathUtils.lerp(0, -2.5, progress);
        targetZ = THREE.MathUtils.lerp(0, 4, progress);
        targetRotZ = THREE.MathUtils.lerp(0, -0.1, progress);
      } else if (offset < page * 2) {
        // Page 2 -> 3 transition (Moving to center for Call to Action)
        const progress = (offset - page) / page;
        targetX = THREE.MathUtils.lerp(-2.5, 0, progress);
        targetZ = THREE.MathUtils.lerp(4, 5, progress);
        targetRotZ = THREE.MathUtils.lerp(-0.1, 0, progress);
      } else if (offset < page * 3) {
        // Page 3 -> 4 transition (Pushing back for 4-Card Section)
        const progress = (offset - page * 2) / page;
        targetX = 0;
        targetZ = THREE.MathUtils.lerp(5, -2, progress);
        targetRotZ = 0;
      } else {
        // Page 4 and beyond
        targetX = 0;
        targetZ = -2;
      }
    } else {
      // It is NOT the active car. Hide it far away.
      targetX = 30;
      targetZ = -10;
    }

    // Dynamic movement based on scroll/carousel state
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 4, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 4, delta);
    groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, targetRotZ, 4, delta);
  });

  return (
    <group ref={groupRef} dispose={null}>
      {/* Adjusted scale back for the Jeep */}
      <primitive object={scene} scale={0.85} position={[0, -0.4, 0]} />
    </group>
  );
}

useGLTF.preload('/Jeep Gladiator.glb');
