import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  className = "",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <motion.button
    whileHover={{ y: -1 }}
    whileTap={{ scale: 0.98 }}
    className={`inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-soft transition ${className}`}
    {...rest}
  >
    {children}
  </motion.button>
);

export default Button;
