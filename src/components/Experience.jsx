import { FiGitCommit, FiGitBranch } from "react-icons/fi";
import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";

function hash(i) {
  return (0x9e3779b9 + i * 2654435761).toString(16).slice(0, 7);
}

export default function Experience() {
  return (
    <section id="experience" className="py-24" style={{ backgroundColor: "var(--bg-panel-2)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading index="06" label="experience" title="Where I've worked" description="Logged like a commit history — each entry is a real contribution, not a job-title bullet." />

        <div className="reveal card-surface rounded-2xl p-7 sm:p-9 max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6" style={{ borderBottom: "1px solid var(--line)" }}>
            <div className="flex items-center gap-3">
              <FiGitBranch className="text-[var(--color-coral)]" size={18} />
              <div>
                <h3 className="font-display font-semibold text-[var(--text-primary)]">{experience.role}</h3>
                <p className="text-[13px]" style={{ color: "var(--text-muted)" }}>{experience.company}</p>
              </div>
            </div>
            <span className="font-mono text-[11px] px-3 py-1 rounded-full" style={{ backgroundColor: "var(--bg-panel-2)", border: "1px solid var(--line)", color: "var(--color-amber)" }}>
              {experience.duration}
            </span>
          </div>

          <div className="mt-6 space-y-0">
            {experience.responsibilities.map((item, i) => (
              <div key={item} className="flex gap-4 relative pb-6 last:pb-0">
                {i < experience.responsibilities.length - 1 && (
                  <span className="absolute left-[9px] top-5 bottom-0 w-px" style={{ backgroundColor: "var(--line)" }} />
                )}
                <FiGitCommit className="text-[var(--color-coral)] shrink-0 mt-0.5" size={19} />
                <div>
                  <p className="text-[13.5px] leading-relaxed text-[var(--text-primary)]">{item}</p>
                  <p className="font-mono text-[10.5px] mt-1" style={{ color: "var(--text-muted)" }}>commit {hash(i)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-2 pt-6 flex flex-wrap gap-1.5" style={{ borderTop: "1px solid var(--line)" }}>
            {experience.stack.map((tech) => (
              <span key={tech} className="font-mono text-[10.5px] px-2.5 py-1 rounded-md" style={{ backgroundColor: "var(--bg-panel-2)", color: "var(--text-muted)" }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
