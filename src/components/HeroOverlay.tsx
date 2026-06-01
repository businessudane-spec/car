import { Zap, Shield, Phone, Mail, MapPin, Share2, Send, Rss, ArrowRight } from 'lucide-react';
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

      {/* Page 4: Car Showcase Slider */}
      <CarShowcaseSlider activeCarIndex={activeCarIndex} setActiveCarIndex={setActiveCarIndex} />

      {/* Page 5: Footer */}
      <Footer />
    </div>
  );
}

// ─── Car Showcase Data ───────────────────────────────────────────────────────

const carShowcaseData = [
  {
    name: 'GLADIATOR',
    tagline: 'Born for the Wild',
    color: '#ff7700',
    specs: {
      aerodynamics: { title: 'AERODYNAMICS', sub: 'Active Flow Control',    desc: 'Dynamic spoilers adapt instantly to your speed, maximizing downforce and cornering stability at high velocities.' },
      powertrain:   { title: 'POWERTRAIN',   sub: 'Hybrid V8 Twin-Turbo',   desc: 'Instant electric torque meets the roaring crescendo of an internal combustion masterpiece.' },
      chassis:      { title: 'CHASSIS',      sub: 'Carbon Monocoque',        desc: 'Ultra-lightweight monolithic construction provides unprecedented torsional rigidity while shedding crucial weight.' },
      interior:     { title: 'INTERIOR',     sub: 'Driver-Centric Cockpit',  desc: 'Minimalist luxury. Everything you need is at your fingertips, perfectly aligned with your sightline.' },
    },
    stats: [
      { label: 'Power',    value: '740 hp'    },
      { label: 'Top Speed', value: '332 km/h' },
      { label: '0–100',    value: '3.2s'      },
      { label: 'Weight',   value: '1,490 kg'  },
    ],
  },
  {
    name: 'ANNIHSTROD',
    tagline: 'Unbridled Aggression',
    color: '#e03030',
    specs: {
      aerodynamics: { title: 'AERODYNAMICS', sub: 'Razor-Edge Splitter',    desc: 'Front splitter generates 320 kg of downforce at top speed, pinning the car to the road with surgical precision.' },
      powertrain:   { title: 'POWERTRAIN',   sub: 'Twin-Turbo V10',          desc: 'Ten cylinders of raw fury deliver explosive acceleration across every inch of the rev range.' },
      chassis:      { title: 'CHASSIS',      sub: 'Space-Frame Alloy',       desc: 'Aircraft-grade aluminium space-frame delivers torsional stiffness 40% beyond its rivals.' },
      interior:     { title: 'INTERIOR',     sub: 'Race-Bred Cockpit',       desc: 'Carbon bucket seats, heads-up display and haptic steering wheel keep you in perfect control at all times.' },
    },
    stats: [
      { label: 'Power',    value: '850 hp'    },
      { label: 'Top Speed', value: '350 km/h' },
      { label: '0–100',    value: '2.8s'      },
      { label: 'Weight',   value: '1,380 kg'  },
    ],
  },
  {
    name: 'CUSTOM MANH',
    tagline: 'Future, Redefined',
    color: '#4a90e2',
    specs: {
      aerodynamics: { title: 'AERODYNAMICS', sub: 'Active Morphing Body',   desc: 'Shape-shifting body panels adjust in real-time, reducing drag by 35% at highway speeds for maximum efficiency.' },
      powertrain:   { title: 'POWERTRAIN',   sub: 'Tri-Motor EV',            desc: 'Three independent electric motors produce seamless all-wheel torque vectoring at every speed.' },
      chassis:      { title: 'CHASSIS',      sub: 'Full Carbon Tub',         desc: 'One-piece carbon fibre monocoque weighing just 68 kg — the stiffest ever fitted to a production car.' },
      interior:     { title: 'INTERIOR',     sub: 'Digital Sanctuary',       desc: 'Wrap-around OLED display, voice-activated AI co-pilot and zero-gravity seating define the future of luxury.' },
    },
    stats: [
      { label: 'Power',    value: '1,200 hp'  },
      { label: 'Top Speed', value: '400 km/h' },
      { label: '0–100',    value: '1.9s'      },
      { label: 'Weight',   value: '1,210 kg'  },
    ],
  },
];

// ─── Car Showcase Slider ─────────────────────────────────────────────────────

function CarShowcaseSlider({
  activeCarIndex,
  setActiveCarIndex,
}: {
  activeCarIndex: number;
  setActiveCarIndex: (i: number) => void;
}) {
  const car = carShowcaseData[activeCarIndex];
  const total = carShowcaseData.length;

  const prev = () => setActiveCarIndex((activeCarIndex - 1 + total) % total);
  const next = () => setActiveCarIndex((activeCarIndex + 1) % total);

  const accentColor = car.color;

  return (
    <section
      style={{
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Ambient colour glow */}
      <motion.div
        key={`glow-${activeCarIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '320px',
          borderRadius: '50%',
          background: `radial-gradient(ellipse, ${accentColor}20 0%, transparent 70%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Ghost watermark text */}
      <div
        className="font-bebas"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(4rem, 18vw, 15rem)',
          color: 'rgba(255,255,255,0.028)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          letterSpacing: '0.05em',
          zIndex: 0,
        }}
      >
        {car.name}
      </div>

      {/* Horizontal divider through car middle */}
      <motion.div
        key={`divider-${activeCarIndex}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.05 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '8vw',
          right: '8vw',
          height: '1px',
          background: `linear-gradient(90deg, transparent, ${accentColor}55, transparent)`,
          transformOrigin: 'center',
          zIndex: 2,
        }}
      />

      {/* Top header — car name & counter */}
      <div
        style={{
          position: 'absolute',
          top: '6vh',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          zIndex: 10,
        }}
      >
        <motion.div
          key={`header-${activeCarIndex}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p
            style={{
              fontSize: '0.72rem',
              color: accentColor,
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
            }}
          >
            {String(activeCarIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </p>
          <h2
            className="font-bebas"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.8rem)',
              letterSpacing: '4px',
              color: 'white',
              lineHeight: 1,
            }}
          >
            {car.name}
          </h2>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-secondary)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginTop: '0.3rem',
            }}
          >
            {car.tagline}
          </p>
        </motion.div>
      </div>

      {/* Main 2-column × 2-row grid — center is empty so 3D car shows through */}
      <div
        style={{
          position: 'relative',
          zIndex: 5,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: '1fr 1fr',
          height: '65vh',
          paddingTop: '12vh',
          paddingBottom: '0',
          /* Push spec columns to the outer edges, leaving the center clear */
          columnGap: '44vw',
        }}
      >
        {/* Top-Left — Aerodynamics */}
        <SpecBlock
          key={`aero-${activeCarIndex}`}
          spec={car.specs.aerodynamics}
          accentColor={accentColor}
          align="left"
          delay={0.1}
        />

        {/* Top-Right — Powertrain */}
        <SpecBlock
          key={`power-${activeCarIndex}`}
          spec={car.specs.powertrain}
          accentColor={accentColor}
          align="right"
          delay={0.15}
        />

        {/* Bottom-Left — Chassis */}
        <SpecBlock
          key={`chassis-${activeCarIndex}`}
          spec={car.specs.chassis}
          accentColor={accentColor}
          align="left"
          delay={0.2}
        />

        {/* Bottom-Right — Interior */}
        <SpecBlock
          key={`interior-${activeCarIndex}`}
          spec={car.specs.interior}
          accentColor={accentColor}
          align="right"
          delay={0.25}
        />
      </div>

      {/* Bottom bar — stats + arrow navigation */}
      <div
        style={{
          position: 'absolute',
          bottom: '4vh',
          left: 0,
          right: 0,
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.2rem',
        }}
      >
        {/* Stats row */}
        <motion.div
          key={`stats-${activeCarIndex}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          {car.stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div
                className="font-bebas"
                style={{ fontSize: '1.6rem', color: accentColor, lineHeight: 1 }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: '0.62rem',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  marginTop: '4px',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ← dots → */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <NavArrow direction="left" accentColor={accentColor} onClick={prev} />
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {carShowcaseData.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveCarIndex(i)}
                style={{
                  width: i === activeCarIndex ? '28px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  border: 'none',
                  background:
                    i === activeCarIndex
                      ? accentColor
                      : 'rgba(255,255,255,0.22)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
          <NavArrow direction="right" accentColor={accentColor} onClick={next} />
        </div>
      </div>
    </section>
  );
}

// ─── Spec Block ──────────────────────────────────────────────────────────────

function SpecBlock({
  spec,
  accentColor,
  align,
  delay,
}: {
  spec: { title: string; sub: string; desc: string };
  accentColor: string;
  align: 'left' | 'right';
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === 'left' ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.55, delay }}
      style={{
        padding: '0 clamp(1.2rem, 4vw, 4rem)',
        textAlign: align,
        alignSelf: 'center',
      }}
    >
      <div
        style={{
          width: '36px',
          height: '2px',
          background: accentColor,
          marginBottom: '0.8rem',
          marginLeft: align === 'right' ? 'auto' : undefined,
        }}
      />
      <h3
        className="font-bebas"
        style={{
          fontSize: 'clamp(1.35rem, 2.4vw, 2.1rem)',
          letterSpacing: '2px',
          margin: 0,
          lineHeight: 1,
          color: 'white',
        }}
      >
        {spec.title}
      </h3>
      <h4
        style={{
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          fontSize: '0.7rem',
          letterSpacing: '2px',
          marginTop: '0.4rem',
        }}
      >
        {spec.sub}
      </h4>
      <p
        style={{
          color: 'rgba(255,255,255,0.52)',
          fontSize: '0.84rem',
          marginTop: '0.75rem',
          lineHeight: 1.68,
          maxWidth: '270px',
          marginLeft: align === 'right' ? 'auto' : undefined,
        }}
      >
        {spec.desc}
      </p>
    </motion.div>
  );
}

// ─── Nav Arrow ───────────────────────────────────────────────────────────────

function NavArrow({
  direction,
  accentColor,
  onClick,
}: {
  direction: 'left' | 'right';
  accentColor: string;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.12, backgroundColor: accentColor }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: `1.5px solid ${accentColor}`,
        background: 'rgba(0,0,0,0.35)',
        color: 'white',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        backdropFilter: 'blur(8px)',
        transition: 'background 0.25s ease',
      }}
    >
      {direction === 'left' ? '←' : '→'}
    </motion.button>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  const navGroups = [
    {
      heading: 'Explore',
      links: ['Fleet Collection', 'New Arrivals', 'Performance Builds', 'Luxury Edition', 'Off-Road Series'],
    },
    {
      heading: 'Support',
      links: ['Book a Test Drive', 'Rental Process', 'Insurance & Coverage', 'FAQs', 'Track Your Order'],
    },
    {
      heading: 'Company',
      links: ['About Us', 'Careers', 'Press Room', 'Partnerships', 'Privacy Policy'],
    },
  ];

  const socials = [
    { Icon: Share2, label: 'Instagram' },
    { Icon: Send,   label: 'Twitter'   },
    { Icon: Rss,    label: 'YouTube'   },
  ];

  return (
    <footer
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #050505 0%, #0a0a0a 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        color: 'white',
        padding: '0 5vw',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Ambient glow top-left */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '500px', height: '350px',
        background: 'radial-gradient(ellipse at top left, rgba(255,119,0,0.07) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      {/* ── Main grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr repeat(3, 1fr)',
          gap: '3rem',
          paddingTop: '6rem',
          paddingBottom: '4rem',
        }}
      >
        {/* Brand column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h2
              className="font-bebas"
              style={{ fontSize: '2.8rem', letterSpacing: '4px', lineHeight: 1, color: 'white' }}
            >
              APEX<span style={{ color: '#ff7700' }}>DRIVE</span>
            </h2>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', letterSpacing: '3px', textTransform: 'uppercase', marginTop: '0.3rem' }}>
              Premium Car Rentals
            </p>
          </div>

          <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75, maxWidth: '280px' }}>
            Experience the world's most extraordinary machines. Every detail engineered for those who demand the absolute best.
          </p>

          {/* Contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { Icon: Phone,   text: '+1 (800) APEX-DRIVE' },
              { Icon: Mail,    text: 'hello@apexdrive.com'  },
              { Icon: MapPin,  text: 'Dubai · London · NYC' },
            ].map(({ Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
                <div style={{ color: '#ff7700', flexShrink: 0 }}>
                  <Icon size={14} />
                </div>
                <span style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.5)' }}>{text}</span>
              </div>
            ))}
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            {socials.map(({ Icon, label }) => (
              <motion.button
                key={label}
                whileHover={{ scale: 1.12, borderColor: '#ff7700', color: '#ff7700' }}
                whileTap={{ scale: 0.93 }}
                aria-label={label}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'transparent',
                  color: 'rgba(255,255,255,0.55)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.25s ease',
                }}
              >
                <Icon size={16} />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Nav link groups */}
        {navGroups.map((group, gi) => (
          <motion.div
            key={group.heading}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * (gi + 1) }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <h4 style={{
              fontSize: '0.72rem',
              textTransform: 'uppercase',
              letterSpacing: '3px',
              color: '#ff7700',
              marginBottom: '0.5rem',
            }}>
              {group.heading}
            </h4>
            {group.links.map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ x: 4, color: 'white' }}
                style={{
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  transition: 'color 0.2s ease',
                  display: 'inline-block',
                }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        ))}
      </motion.div>

      {/* ── Newsletter bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          padding: '2.5rem 0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.3rem' }}>
            Stay in the fast lane.
          </h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            Get early access to new arrivals, exclusive offers &amp; events.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0', flexShrink: 0 }}>
          <input
            type="email"
            placeholder="your@email.com"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRight: 'none',
              borderRadius: '8px 0 0 8px',
              padding: '12px 20px',
              color: 'white',
              fontSize: '0.88rem',
              outline: 'none',
              width: '260px',
              fontFamily: 'Outfit, sans-serif',
            }}
          />
          <motion.button
            whileHover={{ background: '#ff8811' }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: '#ff7700',
              color: 'white',
              border: 'none',
              borderRadius: '0 8px 8px 0',
              padding: '12px 20px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.88rem',
              fontWeight: 600,
              fontFamily: 'Outfit, sans-serif',
              transition: 'background 0.25s ease',
            }}
          >
            Subscribe <ArrowRight size={15} />
          </motion.button>
        </div>
      </motion.div>

      {/* ── Copyright bar ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '2rem 0',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)' }}>
          © 2026 ApexDrive. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
            <a
              key={item}
              href="#"
              style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.25)', textDecoration: 'none' }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Large background brand text */}
      <div
        className="font-bebas"
        style={{
          position: 'absolute',
          bottom: '-1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(5rem, 18vw, 14rem)',
          color: 'rgba(255,255,255,0.018)',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          letterSpacing: '0.1em',
          userSelect: 'none',
        }}
      >
        APEXDRIVE
      </div>
    </footer>
  );
}
