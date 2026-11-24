import { FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile, stats } from "../data/content";
import TypingText from "./TypingText";
import AnimatedCounter from "./AnimatedCounter";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
      <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-[var(--color-coral)]/10 blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center relative">
        {/* Left: copy */}
        <div>
          <p className="font-mono text-[13px] text-[var(--color-coral)] mb-5">
             <span className="text-[var(--text-muted)]">Available For Opportunities</span>
          </p>

          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight text-[var(--text-primary)]">
            {profile.name}
          </h1>

          <p className="mt-4 font-display text-xl sm:text-2xl text-gradient font-medium h-9">
            <TypingText words={["Full Stack Web Developer", "Laravel & PHP Specialist", "MCA Student"]} />
          </p>

          <p className="mt-6 max-w-xl text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-[var(--color-coral)] text-white font-mono text-[13px] hover:brightness-110 transition"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border font-mono text-[13px] hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] transition"
              style={{ borderColor: "var(--line)", color: "var(--text-primary)" }}
            >
              Get In Touch
            </a>
            <div className="flex items-center gap-2 ml-1">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2.5 rounded-full border hover:text-[var(--color-coral)] hover:border-[var(--color-coral)] transition" style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}>
                <FiGithub size={16} />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2.5 rounded-full border hover:text-[var(--color-coral)] hover:border-[var(--color-coral)] transition" style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}>
                <FiLinkedin size={16} />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2.5 rounded-full border hover:text-[var(--color-coral)] hover:border-[var(--color-coral)] transition" style={{ borderColor: "var(--line)", color: "var(--text-muted)" }}>
                <FiMail size={16} />
              </a>
            </div>
          </div>

          {/* Animated stats */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-primary)]">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </p>
                <p className="text-[11.5px] leading-tight mt-1" style={{ color: "var(--text-muted)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: signature terminal card + photo */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px]">
            <div className="absolute -inset-3 rounded-[28px] bg-gradient-to-br from-[var(--color-coral)]/25 to-[var(--color-amber)]/10 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden card-surface shadow-2xl">
              <img
                src={profileImg}
                alt={profile.name}
                className="w-full aspect-[4/5] object-cover"
              />
            </div>

       
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-1 font-mono text-[11px] animate-bounce"
        style={{ color: "var(--text-muted)" }}
      >
        scroll
        <FiArrowDown size={14} />
      </a>
    </section>
  );
}
