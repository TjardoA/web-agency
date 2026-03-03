import { ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  className = "",
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <motion.button
    whileHover={{ y: -1, boxShadow: "0px 10px 30px -18px rgba(37,99,235,0.8)" }}
    whileTap={{ scale: 0.98 }}
    className={`inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-soft transition ${className}`}
    {...rest}
  >
    {children}
  </motion.button>
);

export default Button;
