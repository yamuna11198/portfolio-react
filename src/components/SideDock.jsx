import { FileText, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

function SideDock() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Dock */}
      <div
        className={`fixed right-6  top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6 px-6 py-3 rounded-2xl 
        bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-500
        ${scrolled ? "shadow-[0_0_30px_rgba(123,97,255,0.4)]" : ""}`}
      >
        <DockIcon tooltip="Resume" href="public/assets/YamunaDevi_Resume_Updated.pdf" external>
          <FileText className="text-indigo-900"/>
        </DockIcon>

        <DockIcon tooltip="LinkedIn" href="https://www.linkedin.com/in/yamunadevi-k-05a6791b5/" external>
          <Linkedin className="text-indigo-900" />
        </DockIcon>

        <DockIcon tooltip="yamuna11198@gmail.com" href="mailto:yourmail@email.com">
          <Mail className="text-indigo-900"/>
        </DockIcon>

        <DockIcon tooltip="Contact" href="#contact">
          < MessageCircle className="text-indigo-900 border-gray-300"/>
        </DockIcon>
      </div>

      {/* Mobile Dock */}
      <div
        className={`fixed bottom-15 left-1/2 -translate-x-1/2 z-50 flex md:hidden gap-6 px-6 py-3 rounded-2xl 
        bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-500
        ${scrolled ? "shadow-[0_0_30px_rgba(123,97,255,0.4)]" : ""}`}
      >
        <DockIcon href="public/assets/YamunaDevi_Resume_Updated.pdf" external>
          <FileText />
        </DockIcon>

        <DockIcon href="https://linkedin.com/in/YOUR_LINKEDIN" external>
          <Linkedin />
        </DockIcon>

        <DockIcon href="mailto:yourmail@email.com">
          <Mail />
        </DockIcon>

        <DockIcon href="#contact">
          <MessageCircle />
        </DockIcon>
      </div>
    </>
  );
}

function DockIcon({ href, children, external, tooltip }) {
  return (
    <div className="relative group">
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 
        flex items-center justify-center text-white 
        hover:border-[#7B61FF] hover:text-[#7B61FF] 
        border-gray-300
        transition duration-300"
      >
        {children}
      </a>

      {/* Tooltip (Desktop Only) */}
      {tooltip && (
        <span className="absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap 
        px-3 py-1 text-xs rounded-md bg-[#111827] text-white opacity-0 
        group-hover:opacity-100 transition duration-300 pointer-events-none">
          {tooltip}
        </span>
      )}
    </div>
  );
}

export default SideDock;
