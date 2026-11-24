import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMenu, FiX, FiGithub, FiDownload } from "react-icons/fi";
import { navLinks, profile } from "../data/content";

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
      setScrolled(scrollTop > 12);

      const sections = navLinks.map((l) => document.querySelector(l.href));
      let current = "#home";
      sections.forEach((sec, i) => {
        if (sec && sec.getBoundingClientRect().top <= 120) {
          current = navLinks[i].href;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-colors duration-300 backdrop-blur"
      style={{
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
      }}
    >
      <div className="h-[2px] w-full">
        <div
          className="h-full bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-amber)] transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-2.5 font-display font-semibold text-lg tracking-tight text-[var(--text-primary)]">
          <span
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-[13px] font-bold shrink-0"
            style={{ background: "linear-gradient(135deg, var(--color-coral), var(--color-amber))" }}
          >
            YV
          </span>
          Yusuf<span className="text-gradient">Vhora</span>
        </a>

        <ul className="hidden lg:flex items-center gap-7 font-mono text-[13px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-[var(--color-coral)]"
                style={{ color: active === link.href ? "var(--color-coral)" : "var(--text-muted)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="p-2 rounded-full border transition-colors hover:text-[var(--color-coral)] hover:border-[var(--color-coral)]"
            style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}
          >
            <FiGithub size={16} />
          </a>
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark or light mode"
            className="p-2 rounded-full border transition-colors hover:text-[var(--color-amber)] hover:border-[var(--color-amber)]"
            style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}
          >
            {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <a
            href={profile.resumeFile}
            download
            className="flex items-center gap-2 font-mono text-[13px] px-4 py-2 rounded-full bg-[var(--color-coral)] text-white hover:brightness-110 transition"
          >
            <FiDownload size={14} /> Resume
          </a>
        </div>

        <button
          className="lg:hidden p-2 text-[var(--text-primary)]"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden card-surface mx-4 mb-3 rounded-2xl px-6 py-6 flex flex-col gap-5 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-[var(--color-coral)]"
              style={{ color: "var(--text-muted)" }}
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--line)" }}>
            <a href={profile.github} target="_blank" rel="noreferrer" className="p-2 rounded-full border" style={{ borderColor: "var(--line)" }}>
              <FiGithub size={16} />
            </a>
            <button onClick={toggleTheme} className="p-2 rounded-full border" style={{ borderColor: "var(--line)" }}>
              {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
            <a href={profile.resumeFile} download className="flex-1 text-center px-4 py-2 rounded-full bg-[var(--color-coral)] text-white">
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
