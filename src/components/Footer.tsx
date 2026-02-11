const Footer = () => (
  <footer className="border-t border-soft bg-white">
    <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-slate-600">
        © {new Date().getFullYear()} WebAgency. Alle rechten voorbehouden.
      </p>
      <div className="flex items-center gap-4 text-sm text-slate-600">
        <a href="#services" className="hover:text-ink">
          Diensten
        </a>
        <a href="#projects" className="hover:text-ink">
          Projecten
        </a>
        <a href="#contact" className="hover:text-ink">
          Contact
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
