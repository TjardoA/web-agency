import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio#about", label: "Over mij" },
  { href: "/diensten", label: "Diensten" },
  { href: "/#development", label: "Development" },
  { href: "/contact", label: "Contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-midnightSoft bg-midnight/95 backdrop-blur-sm shadow-soft">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="text-lg font-semibold tracking-tight text-white">
          Antonie studio
        </a>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toon navigatie"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
          </div>
        </button>

        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-200 sm:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-blue-200">
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden border-t border-midnightSoft bg-midnight"
          >
            <div className="mx-auto max-w-6xl px-4 py-4 space-y-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-white transition hover:bg-white/5"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
