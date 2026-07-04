import React from 'react';
// eslint-disable-next-line no-unused-vars -- motion is used as <motion.*> JSX
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}
