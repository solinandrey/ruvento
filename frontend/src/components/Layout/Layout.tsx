import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <motion.div
    initial={{ x: -30, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    // exit={{ x: 30, opacity: 0 }}
    transition={{
      type: "spring",
      duration: 0.3
    }}
  >
    {children}
  </motion.div>
);
export default Layout;