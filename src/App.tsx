import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Suspense } from 'react';
import Scene from './components/Scene';
import HeroOverlay from './components/HeroOverlay';
import './index.css';

function App() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);

  return (
    <div className="canvas-container" style={{ background: 'radial-gradient(circle at 50% 50%, #2a2a2a 0%, #050505 80%)', backgroundColor: '#050505', width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
      <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        
        <Suspense fallback={null}>
          <ScrollControls pages={4} damping={0.25}>
            <Scene activeCarIndex={activeCarIndex} />
            
            <Scroll html style={{ width: '100vw' }}>
              <HeroOverlay activeCarIndex={activeCarIndex} setActiveCarIndex={setActiveCarIndex} />
            </Scroll>
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
