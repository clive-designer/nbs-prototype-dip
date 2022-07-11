import { motion } from "framer-motion";

export default function Wave() {
  return (
    <motion.div
      className="wave"
      whileInView={{ scale: [1.0, 1.3, 1.0] }}
      animate={{ rotate: [12, 0, -12, 0, 12, 0, -12, 0, 12, 0, -12, 0] }}
      transition={{
        rotate: { duration: 1.2, repeat: Infinity, repeatDelay: 3 },
        scale: { duration: 1, delay: 3 }
      }}
      initial={{ rotate: 0 }}
    >
      <span role="img" aria-label="wave">
        👋
      </span>
    </motion.div>
  );
}