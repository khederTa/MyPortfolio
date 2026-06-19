import { motion } from "framer-motion";

export default function ScrollReveal({ children, delay = 0, direction = "up", className = "" }) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const d = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, y: d.y, x: d.x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}