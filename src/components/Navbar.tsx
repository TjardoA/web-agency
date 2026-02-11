const Navbar = () => (
  <header className="sticky top-0 z-20 backdrop-blur bg-mist/80 border-b border-soft">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
      <span className="text-lg font-semibold tracking-tight">WebAgency</span>
      <a
        href="#contact"
        className="text-sm font-medium text-accent hover:underline"
      >
        Plan een gesprek
      </a>
    </div>
  </header>
);

export default Navbar;
