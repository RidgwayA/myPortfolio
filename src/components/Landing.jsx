import React from 'react';
import ParticlesBackground from '../effects/ParticlesBackground';
import { Typewriter } from 'react-simple-typewriter';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { fadeIn } from '../framerMotion/variants';
import TypewriterText  from '../effects/TypewriterText';

const Landing = () => {
  return (
    <section id='landing' className="relative h-screen overflow-hidden flex flex-col items-center justify-center text-center bg-primary"
      onMouseEnter={() => window.dispatchEvent(new Event("landing-hover"))}
      onMouseLeave={() => window.dispatchEvent(new Event("landing-leave"))}
      >
      <ParticlesBackground />

      <motion.h1
        variants={fadeIn('down', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="z-10 text-3xl md:text-6xl font-bold text-secondary px-4"
      >
        Hi, my name is{' '}
        <span className="text-accent">Austin Ridgway</span>{' '}
        and I am a <br /> {TypewriterText ()}
      </motion.h1>
    </section>
  );
};

export default Landing;
