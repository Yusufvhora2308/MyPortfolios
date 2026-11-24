import { FiCode, FiTarget, FiBookOpen } from "react-icons/fi";
import { profile } from "../data/content";
import SectionHeading from "./SectionHeading";

const points = [
  { icon: FiCode, title: "What I build", text: "Laravel-backed web apps with clean, maintainable PHP and responsive interfaces." },
  { icon: FiTarget, title: "How I work", text: "Systematic debugging, version control discipline, and realistic scoping." },
  { icon: FiBookOpen, title: "What's next", text: `Currently deepening my skills in ${profile.currentlyLearning}.` },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading index="01" label="about" title="A developer who reads the schema before writing the query" />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="reveal card-surface rounded-2xl p-7">
            <p className="text-[15px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {profile.about}
            </p>
            <div className="mt-6 pt-6 flex items-center gap-3 font-mono text-[12px]" style={{ borderTop: "1px solid var(--line)" }}>
              <span className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse" />
              <span style={{ color: "var(--text-muted)" }}>Currently learning: <span className="text-[var(--color-amber)]">{profile.currentlyLearning}</span></span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {points.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="reveal card-surface rounded-2xl p-6 hover:border-[var(--color-coral)] transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-coral)]/10 text-[var(--color-coral)] mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)]">{title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
