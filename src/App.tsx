import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Scene from './components/Scene';
import HeroOverlay from './components/HeroOverlay';
import HomePage from './components/HomePage';
import './index.css';

function App() {
  const [activeCarIndex, setActiveCarIndex] = useState(0);
  const [showHomePage, setShowHomePage] = useState(true);

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', position: 'relative', background: '#050505' }}>

      {/* ── Home Page ── */}
      <AnimatePresence>
        {showHomePage && (
          <motion.div
            key="homepage"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ position: 'fixed', inset: 0, zIndex: 50, overflowY: 'auto' }}
          >
            <HomePage onEnter={() => setShowHomePage(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── 3D Canvas (always mounted, revealed when homepage exits) ── */}
      <div
        className="canvas-container"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #2a2a2a 0%, #050505 80%)',
          backgroundColor: '#050505',
          width: '100vw', height: '100vh',
          position: 'fixed', top: 0, left: 0, zIndex: 0,
        }}
      >
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

          <Suspense fallback={null}>
            <ScrollControls pages={5} damping={0.25}>
              <Scene activeCarIndex={activeCarIndex} />

              <Scroll html style={{ width: '100vw' }}>
                <HeroOverlay activeCarIndex={activeCarIndex} setActiveCarIndex={setActiveCarIndex} />
              </Scroll>
            </ScrollControls>
          </Suspense>
        </Canvas>

        {/* Back to Home button (only visible when homepage is hidden) */}
        <AnimatePresence>
          {!showHomePage && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.8 }}
              onClick={() => setShowHomePage(true)}
              style={{
                position: 'fixed', top: '2rem', right: '5vw', zIndex: 400,
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
                borderRadius: '8px',
                padding: '9px 20px',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                textTransform: 'uppercase',
                letterSpacing: '1.5px',
                fontFamily: 'Outfit, sans-serif',
              }}
            >
              ← Home
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

export default App;
