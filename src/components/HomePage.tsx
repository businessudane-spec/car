import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight, Star, Shield, Clock, Zap, ArrowRight, Play } from 'lucide-react';

interface HomePageProps {
  onEnter: () => void;
}

export default function HomePage({ onEnter }: HomePageProps) {
  const [pickupCity, setPickupCity] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [carType, setCarType] = useState('All');

  const stats = [
    { value: '500+', label: 'Premium Vehicles' },
    { value: '50+',  label: 'Cities Worldwide'  },
    { value: '98%',  label: 'Client Satisfaction'},
    { value: '24/7', label: 'Concierge Support'  },
  ];

  const fleet = [
    { name: 'Lamborghini Urus',  category: 'SUV',     price: '1,200', tag: 'Most Booked', color: '#ff7700' },
    { name: 'Porsche 911 GT3',   category: 'Sports',  price: '980',   tag: 'New',         color: '#4a90e2' },
    { name: 'Mercedes G-Wagon',  category: 'Luxury',  price: '850',   tag: 'Popular',     color: '#22c55e' },
    { name: 'Ferrari 488 Pista', category: 'Supercar',price: '1,500', tag: 'Exclusive',   color: '#e03030' },
  ];

  const features = [
    { Icon: Shield, title: 'Full Insurance',    desc: 'Comprehensive coverage on every rental — zero stress, total peace of mind.'  },
    { Icon: Clock,  title: 'Instant Booking',   desc: 'Reserve in under 60 seconds. Your dream car confirmed before you blink.'      },
    { Icon: Zap,    title: 'Door Delivery',     desc: 'We bring the car to you. Your hotel, office, or private villa — no detours.' },
    { Icon: Star,   title: 'Loyalty Rewards',   desc: 'Every mile earns points. Redeem for upgrades, free days, and VIP perks.'     },
  ];

  return (
    <div style={{
      width: '100vw',
      minHeight: '100vh',
      background: '#050505',
      color: 'white',
      fontFamily: 'Outfit, sans-serif',
      overflowX: 'hidden',
    }}>

      {/* ── NAV ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
        padding: '1.4rem 5vw',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: 'linear-gradient(180deg, rgba(5,5,5,0.95) 0%, transparent 100%)',
        backdropFilter: 'blur(8px)',
      }}>
        <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.8rem', letterSpacing: '4px', color: 'white' }}>
          APEX<span style={{ color: '#ff7700' }}>DRIVE</span>
        </span>
        <div style={{ display: 'flex', gap: '2.5rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1.5px', color: 'rgba(255,255,255,0.6)' }}>
          {['Fleet', 'Locations', 'About', 'Contact'].map(item => (
            <motion.span key={item} whileHover={{ color: '#ff7700' }} style={{ cursor: 'pointer', transition: 'color 0.2s' }}>{item}</motion.span>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.04, background: '#ff8811' }}
          whileTap={{ scale: 0.97 }}
          style={{ background: '#ff7700', color: 'white', border: 'none', borderRadius: '8px', padding: '10px 24px', fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', letterSpacing: '1px', textTransform: 'uppercase', fontFamily: 'Outfit, sans-serif' }}
        >
          Book Now
        </motion.button>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

        {/* Hero image */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'url(/hero_car.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
          filter: 'brightness(0.45)',
        }} />

        {/* Gradient overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.3) 55%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(0deg, #050505 0%, transparent 100%)' }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 2, padding: '0 5vw', maxWidth: '700px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '36px', height: '2px', background: '#ff7700' }} />
              <span style={{ fontSize: '0.75rem', color: '#ff7700', letterSpacing: '4px', textTransform: 'uppercase' }}>Premium Car Rental</span>
            </div>

            <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3.5rem, 8vw, 7.5rem)', lineHeight: 0.9, letterSpacing: '2px', marginBottom: '1.5rem' }}>
              Drive the<br />
              <span style={{ color: '#ff7700' }}>Extraordinary.</span>
            </h1>

            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, maxWidth: '480px', marginBottom: '2.5rem' }}>
              From city streets to open highways — we put the world's most thrilling machines at your fingertips. No compromises, just pure performance.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 8px 30px rgba(255,119,0,0.5)' }}
                whileTap={{ scale: 0.97 }}
                style={{ background: '#ff7700', color: 'white', border: 'none', borderRadius: '10px', padding: '16px 36px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Outfit, sans-serif' }}
              >
                Explore Fleet <ArrowRight size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={onEnter}
                style={{ background: 'rgba(255,255,255,0.07)', color: 'white', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '16px 36px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem', backdropFilter: 'blur(8px)', fontFamily: 'Outfit, sans-serif' }}
              >
                <Play size={16} fill="white" /> View 3D Showcase
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Right side floating badge */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            position: 'absolute', right: '5vw', bottom: '18vh', zIndex: 2,
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '16px',
            padding: '1.5rem 2rem',
            backdropFilter: 'blur(16px)',
            display: 'flex', flexDirection: 'column', gap: '0.5rem',
          }}
        >
          <div style={{ display: 'flex', gap: '3px' }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#ff7700" color="#ff7700" />)}
          </div>
          <p style={{ fontSize: '0.9rem', fontWeight: 600 }}>Rated #1 in 2026</p>
          <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)' }}>Luxury Car Rental Awards</p>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', letterSpacing: '2px', textTransform: 'uppercase' }}
        >
          <span>Scroll</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(180deg, rgba(255,119,0,0.6), transparent)' }} />
        </motion.div>
      </section>

      {/* ── BOOKING BAR ── */}
      <section style={{ background: '#0a0a0a', padding: '3rem 5vw', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 160px 160px',
            gap: '0',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '14px',
            overflow: 'hidden',
          }}
        >
          {/* Pickup location */}
          <BookingField icon={<MapPin size={16} />} label="Pick-up City">
            <input
              value={pickupCity}
              onChange={e => setPickupCity(e.target.value)}
              placeholder="Dubai, UAE"
              style={inputStyle}
            />
          </BookingField>

          {/* From date */}
          <BookingField icon={<Calendar size={16} />} label="From">
            <input
              type="date"
              value={fromDate}
              onChange={e => setFromDate(e.target.value)}
              style={{ ...inputStyle, colorScheme: 'dark' }}
            />
          </BookingField>

          {/* To date */}
          <BookingField icon={<Calendar size={16} />} label="To" noBorderRight>
            <input
              type="date"
              value={toDate}
              onChange={e => setToDate(e.target.value)}
              style={{ ...inputStyle, colorScheme: 'dark' }}
            />
          </BookingField>

          {/* Car type */}
          <div style={{ padding: '1.4rem 1.5rem', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontSize: '0.65rem', color: '#ff7700', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Category</p>
            <select
              value={carType}
              onChange={e => setCarType(e.target.value)}
              style={{ ...inputStyle, background: 'transparent', border: 'none', cursor: 'pointer', paddingLeft: 0 }}
            >
              {['All', 'Sports', 'Luxury', 'SUV', 'Supercar', 'Electric'].map(t => (
                <option key={t} value={t} style={{ background: '#111' }}>{t}</option>
              ))}
            </select>
          </div>

          {/* Search button */}
          <motion.button
            whileHover={{ background: '#ff8811' }}
            whileTap={{ scale: 0.97 }}
            style={{ background: '#ff7700', color: 'white', border: 'none', padding: '0 1.5rem', fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', fontFamily: 'Outfit, sans-serif', transition: 'background 0.2s' }}
          >
            Search <ChevronRight size={18} />
          </motion.button>
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: '5rem 5vw', background: '#050505' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ textAlign: 'center', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
            >
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#ff7700', lineHeight: 1 }}>{value}</div>
              <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '0.6rem' }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FLEET SECTION ── */}
      <section style={{ padding: '5rem 5vw', background: '#0a0a0a' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div style={{ width: '30px', height: '2px', background: '#ff7700' }} />
              <span style={{ fontSize: '0.72rem', color: '#ff7700', letterSpacing: '3px', textTransform: 'uppercase' }}>Our Fleet</span>
            </div>
            <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '2px', lineHeight: 1 }}>
              Choose Your<br /><span style={{ color: '#ff7700' }}>Machine.</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ x: 4 }}
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)', borderRadius: '8px', padding: '10px 22px', fontSize: '0.82rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'Outfit, sans-serif' }}
          >
            View All <ArrowRight size={14} />
          </motion.button>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {fleet.map(({ name, category, price, tag, color }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, boxShadow: `0 20px 40px ${color}20` }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Car image placeholder with gradient */}
              <div style={{ height: '180px', background: `linear-gradient(135deg, #111 0%, #1a1a1a 100%)`, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src="/fleet_cars.png" alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, filter: 'brightness(0.8)' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${color}22 0%, transparent 60%)` }} />
                {/* Tag badge */}
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: color, color: 'white', fontSize: '0.65rem', fontWeight: 700, padding: '3px 10px', borderRadius: '999px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {tag}
                </div>
              </div>

              <div style={{ padding: '1.4rem' }}>
                <div style={{ fontSize: '0.65rem', color: color, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '0.3rem' }}>{category}</div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>{name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.6rem', color: color }}>${price}</span>
                    <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', marginLeft: '4px' }}>/day</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.06, background: color }}
                    style={{ background: `${color}22`, color, border: `1px solid ${color}55`, borderRadius: '8px', padding: '8px 16px', fontSize: '0.78rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'Outfit, sans-serif', transition: 'all 0.2s' }}
                  >
                    Book
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ padding: '6rem 5vw', background: '#050505' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div style={{ width: '30px', height: '2px', background: '#ff7700' }} />
            <span style={{ fontSize: '0.72rem', color: '#ff7700', letterSpacing: '3px', textTransform: 'uppercase' }}>Why ApexDrive</span>
            <div style={{ width: '30px', height: '2px', background: '#ff7700' }} />
          </div>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '2px' }}>
            The Standard Others<br /><span style={{ color: '#ff7700' }}>Aspire To.</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {features.map(({ Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ borderColor: 'rgba(255,119,0,0.3)' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ padding: '2rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)', transition: 'border-color 0.3s' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,119,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff7700', marginBottom: '1.5rem' }}>
                <Icon size={22} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.75rem' }}>{title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3D SHOWCASE CTA ── */}
      <section style={{ padding: '7rem 5vw', background: 'linear-gradient(135deg, #0a0500 0%, #0a0a0a 50%, #050505 100%)', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '400px', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(255,119,0,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
          <p style={{ fontSize: '0.72rem', color: '#ff7700', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '1rem' }}>Interactive Experience</p>
          <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(3rem, 7vw, 6rem)', letterSpacing: '3px', lineHeight: 0.95, marginBottom: '1.5rem' }}>
            Explore Our Fleet<br />in <span style={{ color: '#ff7700' }}>3D.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.45)', maxWidth: '500px', margin: '0 auto 3rem', lineHeight: 1.8 }}>
            Step inside the next dimension of car discovery. Rotate, inspect, and experience every model up close — before you even turn the key.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 12px 40px rgba(255,119,0,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onEnter}
            style={{ background: '#ff7700', color: 'white', border: 'none', borderRadius: '12px', padding: '18px 48px', fontSize: '1.05rem', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'Outfit, sans-serif' }}
          >
            Enter 3D Showcase <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
}

// ── Booking field wrapper ──────────────────────────────────────────────────────

function BookingField({ icon, label, children, noBorderRight }: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
  noBorderRight?: boolean;
}) {
  return (
    <div style={{ padding: '1.2rem 1.5rem', borderRight: noBorderRight ? 'none' : '1px solid rgba(255,255,255,0.06)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.4rem', color: '#ff7700' }}>
        {icon}
        <span style={{ fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase' }}>{label}</span>
      </div>
      {children}
    </div>
  );
}

import React from 'react';

const inputStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'white',
  fontSize: '0.95rem',
  fontFamily: 'Outfit, sans-serif',
  width: '100%',
  padding: '2px 0',
};
