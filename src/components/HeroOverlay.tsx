import { Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroOverlay({ activeCarIndex, setActiveCarIndex }: { activeCarIndex: number, setActiveCarIndex: (idx: number) => void }) {
  const cars = [
    {
      power: '740',
      speed: '332',
      title: 'JC96',
      desc: 'The Jeep Gladiator embodies pure focus: lighter, faster, and more connected to the road than ever.',
      modelName: 'GLADIATOR',
    },
    {
      power: '850',
      speed: '350',
      title: 'ANNIH',
      desc: 'Raw power and uncompromising performance metrics showcased here in this custom beast.',
      modelName: 'ANNIHSTROD',
    },
    {
      power: '1200',
      speed: '400',
      title: 'MANH',
      desc: 'Sleek design with futuristic aerodynamics built for the ultimate driving experience.',
      modelName: 'CUSTOM MANH',
    }
  ];
  
  const activeCar = cars[activeCarIndex];

  return (
    <div style={{ width: '100vw', padding: '0 5vw', color: 'white' }}>
      {/* Navigation Bar */}
      <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', padding: '2rem 5vw', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 100 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', cursor: 'pointer' }}>
          <div style={{ width: '30px', height: '2px', background: 'white' }}></div>
          <div style={{ width: '20px', height: '2px', background: 'white' }}></div>
          <div style={{ width: '20px', height: '2px', background: 'white' }}></div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          <span style={{ cursor: 'pointer' }}>Rental</span>
          <span style={{ cursor: 'pointer' }}>Collections</span>
          <span style={{ cursor: 'pointer' }}>Contact</span>
        </div>
      </nav>

      {/* Page 1: Hero Carousel */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>

        {/* Left Pagination Dots */}
        <div style={{ position: 'absolute', left: '2vw', top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 50 }}>
          {[0, 1, 2].map((i) => (
            <div 
              key={i} 
              onClick={() => setActiveCarIndex(i)}
              style={{ 
                width: '12px', 
                height: '12px', 
                borderRadius: '50%', 
                border: '2px solid white', 
                background: i === activeCarIndex ? 'white' : 'transparent',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
            ></div>
          ))}
        </div>

        {/* Bottom Stats (Left) */}
        <div style={{ position: 'absolute', bottom: '3rem', left: '5vw', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <motion.div key={`power-${activeCarIndex}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="font-bebas" style={{ fontSize: '3rem', lineHeight: 0.8 }}>
              {activeCar.power} <span style={{ fontSize: '1.2rem', fontFamily: 'Outfit' }}>hp</span>
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.5rem' }}>Power</p>
          </motion.div>
          <motion.div key={`speed-${activeCarIndex}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }}>
            <h2 className="font-bebas" style={{ fontSize: '3rem', lineHeight: 0.8 }}>
              {activeCar.speed} <span style={{ fontSize: '1.2rem', fontFamily: 'Outfit' }}>km/h</span>
            </h2>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.5rem' }}>Top Speed</p>
          </motion.div>
        </div>

        {/* Bottom Center Text */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <motion.div key={`title-${activeCarIndex}`} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 0.9, scale: 1 }} transition={{ duration: 0.4 }} className="font-bebas" style={{ fontSize: '8rem', color: 'white', lineHeight: 0.8 }}>
            {activeCar.title}
          </motion.div>
          <motion.p key={`desc-${activeCarIndex}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.2 }} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', maxWidth: '300px', marginTop: '1rem', lineHeight: 1.5 }}>
            {activeCar.desc}
          </motion.p>
        </div>

        {/* Bottom Right Preview Card */}
        <div style={{ position: 'absolute', bottom: '3rem', right: '5vw', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <motion.div key={`card-${activeCarIndex}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} className="glass-panel" style={{ width: '250px', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.9)' }}>
            <div style={{ color: 'black', textAlign: 'center' }}>
              <h3 className="font-bebas" style={{ fontSize: '2rem' }}>{activeCar.modelName}</h3>
              <p style={{ fontSize: '0.8rem', fontWeight: 600 }}>Explore Model</p>
            </div>
          </motion.div>
          <button style={{ background: '#ff7700', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            Explore &rarr;
          </button>
        </div>

      </section>

      {/* Page 2: Features */}
      <section style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: '5vw' }}>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="glass-panel"
          style={{ padding: '3rem', maxWidth: '400px' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Performance<br />Redefined.</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,51,102,0.1)', borderRadius: '12px', color: 'var(--accent-color)' }}>
                <Zap size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>0-60 mph in 2.9s</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Instant torque delivery</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ padding: '1rem', background: 'rgba(255,51,102,0.1)', borderRadius: '12px', color: 'var(--accent-color)' }}>
                <Shield size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Active Safety</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>360° situational awareness</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Page 3: Call to Action */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1rem' }}>Ready to Roll?</h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Join our premium membership and get exclusive access to our newest arrivals.
          </p>
          <button className="btn-primary" style={{ padding: '20px 48px', fontSize: '1.2rem' }}>Reserve Your Car</button>
        </motion.div>
      </section>

      {/* Page 4: Cinematic Details Section */}
      <section style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ position: 'absolute', top: '20vh', left: '8vw', maxWidth: '320px' }}
        >
          <div style={{ width: '40px', height: '2px', background: '#ff7700', marginBottom: '1rem' }}></div>
          <h3 className="font-bebas" style={{ fontSize: '2.5rem', letterSpacing: '2px', margin: 0, lineHeight: 1 }}>AERODYNAMICS</h3>
          <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginTop: '0.5rem' }}>Active Flow Control</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '1rem', lineHeight: 1.6 }}>
            Dynamic spoilers adapt instantly to your speed, maximizing downforce and cornering stability at high velocities.
          </p>
        </motion.div>

        {/* Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ position: 'absolute', top: '20vh', right: '8vw', maxWidth: '320px', textAlign: 'right' }}
        >
          <div style={{ width: '40px', height: '2px', background: '#ff7700', marginBottom: '1rem', marginLeft: 'auto' }}></div>
          <h3 className="font-bebas" style={{ fontSize: '2.5rem', letterSpacing: '2px', margin: 0, lineHeight: 1 }}>POWERTRAIN</h3>
          <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginTop: '0.5rem' }}>Hybrid V8 Twin-Turbo</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '1rem', lineHeight: 1.6 }}>
            Instant electric torque meets the roaring crescendo of an internal combustion masterpiece.
          </p>
        </motion.div>

        {/* Bottom Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ position: 'absolute', bottom: '20vh', left: '8vw', maxWidth: '320px' }}
        >
          <div style={{ width: '40px', height: '2px', background: '#ff7700', marginBottom: '1rem' }}></div>
          <h3 className="font-bebas" style={{ fontSize: '2.5rem', letterSpacing: '2px', margin: 0, lineHeight: 1 }}>CHASSIS</h3>
          <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginTop: '0.5rem' }}>Carbon Monocoque</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '1rem', lineHeight: 1.6 }}>
            Ultra-lightweight monolithic construction provides unprecedented torsional rigidity while shedding crucial weight.
          </p>
        </motion.div>

        {/* Bottom Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ position: 'absolute', bottom: '20vh', right: '8vw', maxWidth: '320px', textAlign: 'right' }}
        >
          <div style={{ width: '40px', height: '2px', background: '#ff7700', marginBottom: '1rem', marginLeft: 'auto' }}></div>
          <h3 className="font-bebas" style={{ fontSize: '2.5rem', letterSpacing: '2px', margin: 0, lineHeight: 1 }}>INTERIOR</h3>
          <h4 style={{ color: 'var(--text-secondary)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '2px', marginTop: '0.5rem' }}>Driver-Centric Cockpit</h4>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: '1rem', lineHeight: 1.6 }}>
            Minimalist luxury. Everything you need is at your fingertips, perfectly aligned with your sightline.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
