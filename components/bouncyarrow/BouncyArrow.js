import { motion } from "framer-motion";

export default function BouncyArrow() {
  return (
    <motion.div
      whileInView={{ y: [-8, 0] }}
      transition={{ repeat: Infinity, duration: 0.3, delay: 1 }}
    >
      <span role="img" aria-label="wave">
        🔽
      </span>
    </motion.div>
  );
}