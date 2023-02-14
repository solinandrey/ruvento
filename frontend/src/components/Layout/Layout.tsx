import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <motion.div
    initial={{ y: 30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 30, opacity: 0 }}
    transition={{
      type: "spring",
      duration: 0.4
    }}
  >
    {children}
  </motion.div>
);
export default Layout;