import { motion } from "framer-motion";
import Wave from "../wave/Wave";

// export default function Banner({ onDismiss }: { onDismiss: () => void }) {
export default function Banner () {
  return (
      <div>
        <motion.aside
        className="overlay"
        whileInView={{ backgroundColor: "#2b0687" }}
        initial={{ backgroundColor: "#dadada" }}
        exit={{
            opacity: 0,
            backgroundColor: "#dadada",
            transition: { backgroundColor: { delay: 0 }, opacity: { delay: 0.1 } }
        }}
        transition={{
            duration: 0.25,
            delay: 0.5
        }}
        >
        <p className="description">
            <Wave /> There's something new avialable, right now!
        </p>
        <motion.button
            className="close-btn"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            Close
        </motion.button>
        </motion.aside>
      </div>
  );
}