import { useEffect, useState } from "react";
import useTheme from "./hooks/useTheme";
import useReveal from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhyHireMe from "./components/WhyHireMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(t);
  }, []);

  useReveal([loading]);

  return (
    <>
      <div
        className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ${
          loading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--bg-page)" }}
      >
        <p className="font-mono text-sm text-[var(--color-coral)]">
          <span className="type-cursor">loading_portfolio()</span>
        </p>
      </div>

      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <WhyHireMe />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
