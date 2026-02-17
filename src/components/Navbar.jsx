import { useState } from "react";
import { Menu, X } from "lucide-react";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
   
    <nav className="fixed w-full backdrop-blur-md bg-white/10 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold text-primary">YD.dev</h1>
        <div className="space-x-6 hidden md:flex">
          {["About", "Skills", "Projects","Experience","Blogs", "Contact"].map((item) => (
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
      <div className="md:hidden">
        
        
      </div>
    </nav>
    {/* Top Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 md:hidden backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-white font-semibold tracking-wide">
            YD.dev
          </h1>

          <button onClick={() => setOpen(!open)}>
            {open ? (
              <X className="text-white w-6 h-6" />
            ) : (
              <Menu className="text-white w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#0f172a] z-40 transform transition-transform duration-500 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col mt-24 gap-8 px-8 text-white text-lg">

          <NavItem label="Home" onClick={() => setOpen(false)} />
          <NavItem label="About" onClick={() => setOpen(false)} />
          <NavItem label="Experience" onClick={() => setOpen(false)} />
          <NavItem label="Projects" onClick={() => setOpen(false)} />
          <NavItem label="Blogs" onClick={() => setOpen(false)} />
          <NavItem label="Contact" onClick={() => setOpen(false)} />

        </div>
      </div>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}
      </>
  );
}
function NavItem({ label, onClick }) {
  return (
    <a
      href={`#${label.toLowerCase()}`}
      onClick={onClick}
      className="hover:text-[#7B61FF] transition duration-300"
    >
      {label}
    </a>
  );
}
export default Navbar;
