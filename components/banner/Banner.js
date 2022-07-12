import { motion } from "framer-motion";
import Wave from "../wave/Wave";
import Link from "next/link";

// export default function Banner({ onDismiss }: { onDismiss: () => void }) {
export default function Banner () {
  return (
      <div>
        <motion.aside
        className="overlay"
        whileInView={{ backgroundColor: "#E5F0F9" }}
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
            <Wave /> <strong>Tip:</strong> Let&apos;s stay in touch. 
            <Link href="#"><a className="nbs-link" style={{ fontSize: "16px" }}> Manage your email preferences</a></Link>
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