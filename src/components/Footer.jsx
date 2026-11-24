import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/content";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <footer className="py-8" style={{ borderTop: "1px solid var(--line)" }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[12px]" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
          </p>
          <p className="font-mono text-[12px]" style={{ color: "var(--text-muted)" }}>
            {profile.location}
          </p>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[var(--color-coral)] text-white shadow-lg transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <FiArrowUp size={18} />
      </button>
    </>
  );
}
