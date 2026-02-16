function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-white/10 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-primary">YD.dev</h1>
        <div className="space-x-6 hidden md:flex">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-primary transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
