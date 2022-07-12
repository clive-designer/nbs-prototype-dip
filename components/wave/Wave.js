import { motion } from "framer-motion";
import Image from "next/image";
import infoTip from '../../public/images/IconInformationTip.svg';

export default function Wave() {
  return (
    <motion.div
      className="wave"
      whileInView={{ scale: [1.0, 1.1, 1.0] }}
      animate={{ rotate: [8, 0, -8, 0, 8, 0, -8, 0, 8, 0, -8, 0] }}
      transition={{
        rotate: { duration: 1.2, repeat: Infinity, repeatDelay: 3 },
        scale: { duration: 1, delay: 3 }
      }}
      initial={{ rotate: 0 }}
    >
      <span role="img" aria-label="wave">
        {/* 👋 */}
        <Image src={infoTip} alt="Image of tick"/>
      </span>
    </motion.div>
  );
}