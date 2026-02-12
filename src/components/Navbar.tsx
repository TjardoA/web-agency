const Navbar = () => (
  <header className="sticky top-0 z-20 border-b border-midnightSoft bg-midnight shadow-soft">
    <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
      <a href="/" className="text-lg font-semibold tracking-tight text-white">
        Antonie studio
      </a>
      <nav className="flex items-center gap-5 text-sm font-medium text-slate-200">
        <a href="/portfolio" className="text-white transition hover:text-blue-200">
          Portfolio
        </a>
        <a href="/#about" className="transition hover:text-blue-200">
          Over mij
        </a>
        <a href="/#services" className="transition hover:text-blue-200">
          Diensten
        </a>
        <a href="/#development" className="transition hover:text-blue-200">
          Development
        </a>
        <a href="/contact" className="transition hover:text-blue-200">
          Contact
        </a>
      </nav>
    </div>
  </header>
);

export default Navbar;
