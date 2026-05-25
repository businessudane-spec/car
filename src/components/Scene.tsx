import { Environment, Float, Stars, ContactShadows } from '@react-three/drei';
import CarModel from './CarModel';
import SecondaryModels from './SecondaryModels';

export default function Scene({ activeCarIndex }: { activeCarIndex: number }) {
  return (
    <>
      <fog attach="fog" args={['#2a1100', 5, 25]} />
      
      {/* Studio environment usually looks cleaner for cars */}
      <Environment preset="studio" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* Cinematic orange rim light */}
      <spotLight position={[-5, 5, -5]} angle={0.5} penumbra={1} intensity={5} color="#ff5500" />
      
      {/* Dynamic spotlight specifically for the center parked car */}
      <spotLight position={[0, 10, 5]} angle={0.3} penumbra={1} intensity={2} castShadow color="#ffffff" />
      
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.1}>
        <CarModel activeCarIndex={activeCarIndex} />
      </Float>

      <SecondaryModels activeCarIndex={activeCarIndex} />

      <ContactShadows 
        position={[0, -0.7, 0]} 
        opacity={0.8} 
        scale={20} 
        blur={2.5} 
        far={4.5} 
        color="#000000" 
      />
    </>
  );
}
