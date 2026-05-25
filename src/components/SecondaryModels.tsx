import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

export default function SecondaryModels({ activeCarIndex }: { activeCarIndex: number }) {
  const scroll = useScroll();
  
  // Load the 2 secondary models
  const model1 = useGLTF('/images1/annihstrod.glb');
  const model2 = useGLTF('/images1/manhcustom.glb');
  
  const group1 = useRef<THREE.Group>(null);
  const group2 = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (!group1.current || !group2.current) return;
    
    // Rotate models slowly in the spotlight
    group1.current.rotation.y += delta * 0.1;
    group2.current.rotation.y += delta * 0.1;

    const offset = scroll.offset;
    const page = 1 / 4;
    
    // Default hidden positions
    let targetX1 = 30;
    let targetZ1 = -10;
    let targetX2 = 30;
    let targetZ2 = -10;
    
    // Logic for Annihstrod
    if (activeCarIndex === 1) {
      if (offset < page) {
        // Page 1 -> 2 transition (Moving to left side for Features)
        const progress = offset / page;
        targetX1 = THREE.MathUtils.lerp(0, -2.5, progress);
        targetZ1 = THREE.MathUtils.lerp(0, 4, progress);
      } else if (offset < page * 2) {
        // Page 2 -> 3 transition (Moving to center for Call to Action)
        const progress = (offset - page) / page;
        targetX1 = THREE.MathUtils.lerp(-2.5, 0, progress);
        targetZ1 = THREE.MathUtils.lerp(4, 5, progress);
      } else if (offset < page * 3) {
        // Page 3 -> 4 transition (Pushing back for 4-Card Section)
        const progress = (offset - page * 2) / page;
        targetX1 = 0;
        targetZ1 = THREE.MathUtils.lerp(5, -2, progress);
      } else {
        // Page 4 and beyond
        targetX1 = 0;
        targetZ1 = -2;
      }
    }

    // Logic for Custom Manh
    if (activeCarIndex === 2) {
      if (offset < page) {
        // Page 1 -> 2 transition (Moving to left side for Features)
        const progress = offset / page;
        targetX2 = THREE.MathUtils.lerp(0, -2.5, progress);
        targetZ2 = THREE.MathUtils.lerp(0, 4, progress);
      } else if (offset < page * 2) {
        // Page 2 -> 3 transition (Moving to center for Call to Action)
        const progress = (offset - page) / page;
        targetX2 = THREE.MathUtils.lerp(-2.5, 0, progress);
        targetZ2 = THREE.MathUtils.lerp(4, 5, progress);
      } else if (offset < page * 3) {
        // Page 3 -> 4 transition (Pushing back for 4-Card Section)
        const progress = (offset - page * 2) / page;
        targetX2 = 0;
        targetZ2 = THREE.MathUtils.lerp(5, -2, progress);
      } else {
        // Page 4 and beyond
        targetX2 = 0;
        targetZ2 = -2;
      }
    }

    // Smoothly interpolate positions
    group1.current.position.x = THREE.MathUtils.damp(group1.current.position.x, targetX1, 4, delta);
    group1.current.position.z = THREE.MathUtils.damp(group1.current.position.z, targetZ1, 4, delta);
    
    group2.current.position.x = THREE.MathUtils.damp(group2.current.position.x, targetX2, 4, delta);
    group2.current.position.z = THREE.MathUtils.damp(group2.current.position.z, targetZ2, 4, delta);
    
    // Keep them vertically aligned exactly like the Jeep
    group1.current.position.y = -0.7;
    group2.current.position.y = -0.7;
  });

  return (
    <group>
      <group ref={group1}>
        <primitive object={model1.scene} scale={1.5} />
      </group>
      
      <group ref={group2}>
        <primitive object={model2.scene} scale={1.5} />
      </group>
    </group>
  );
}
