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
        initial={{ backgroundColor: "#F3F3F4" }}
        exit={{
            opacity: 0,
            backgroundColor: "#F3F3F4",
            transition: { backgroundColor: { delay: 0 }, opacity: { delay: 0.1 } }
        }}
        transition={{
            duration: 0.25,
            delay: 0.5
        }}
        >
        <div className="description">
            <Wave /> 
            <div className="tipcontent">
            <strong>Tip:</strong> Get reminders and support with your application.
            <Link href="#"><a className="nbs-link" style={{ fontSize: "16px" }}> Manage your email preferences</a></Link>
            </div>

        </div>
        </motion.aside>
      </div>
  );
}