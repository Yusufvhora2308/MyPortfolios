import { FiAward } from "react-icons/fi";
import { education, certificates } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading index="07" label="education" title="Academic background" />
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.degree} className="reveal card-surface rounded-2xl p-6 relative">
                {edu.status === "current" && (
                  <span className="absolute top-6 right-6 font-mono text-[10px] px-2.5 py-1 rounded-full bg-[var(--color-coral)]/10 text-[var(--color-coral)]">
                    in progress
                  </span>
                )}
                <h3 className="font-display font-semibold text-[var(--text-primary)] pr-20">{edu.degree}</h3>
                <p className="mt-1.5 text-[13.5px]" style={{ color: "var(--text-muted)" }}>{edu.institution}</p>
                <p className="mt-1 font-mono text-[11.5px] text-[var(--color-amber)]">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="certificates">
          <SectionHeading index="08" label="certificates" title="Certifications" />
          <div className="grid sm:grid-cols-2 gap-4">
            {certificates.map((cert, i) => (
              <div
                key={cert.title}
                className="reveal card-surface rounded-2xl p-5 flex items-start gap-3 hover:border-[var(--color-coral)] transition-colors"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--color-amber)]/10 text-[var(--color-amber)] shrink-0">
                  <FiAward size={16} />
                </div>
                <div>
                  <h4 className="text-[13.5px] font-medium leading-snug text-[var(--text-primary)]">{cert.title}</h4>
                  <p className="font-mono text-[11px] mt-1" style={{ color: "var(--text-muted)" }}>{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
