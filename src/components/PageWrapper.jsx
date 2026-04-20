import { motion } from "framer-motion";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15, filter: "blur(4px)", scale: 0.98 }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      exit={{ opacity: 0, y: -15, filter: "blur(4px)", scale: 0.98 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      style={{ isolation: "isolate" }}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
