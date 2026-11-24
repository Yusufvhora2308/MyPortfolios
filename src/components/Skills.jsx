import { FiTerminal, FiLayers, FiTool } from "react-icons/fi";
import { skills } from "../data/content";
import SectionHeading from "./SectionHeading";

function SkillBar({ name, level, note }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-[13.5px] font-medium text-[var(--text-primary)]">
          {name} {note && <span className="font-mono text-[10.5px] text-[var(--color-amber)]">({note})</span>}
        </span>
        <span className="font-mono text-[11px]" style={{ color: "var(--text-muted)" }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: "var(--bg-panel-2)" }}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-[var(--color-coral)] to-[var(--color-amber)] transition-[width] duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24" style={{ backgroundColor: "var(--bg-panel-2)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading index="02" label="skills" title="The stack I ship with" />

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="reveal card-surface rounded-2xl p-7">
            <div className="flex items-center gap-2.5 mb-6">
              <FiTerminal className="text-[var(--color-coral)]" size={18} />
              <h3 className="font-display font-semibold text-[var(--text-primary)]">Languages</h3>
            </div>
            <div className="space-y-4">
              {skills.languages.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="reveal card-surface rounded-2xl p-7" style={{ transitionDelay: "80ms" }}>
            <div className="flex items-center gap-2.5 mb-6">
              <FiLayers className="text-[var(--color-coral)]" size={18} />
              <h3 className="font-display font-semibold text-[var(--text-primary)]">Frameworks</h3>
            </div>
            <div className="space-y-4">
              {skills.frameworks.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>

          <div className="reveal card-surface rounded-2xl p-7" style={{ transitionDelay: "160ms" }}>
            <div className="flex items-center gap-2.5 mb-6">
              <FiTool className="text-[var(--color-coral)]" size={18} />
              <h3 className="font-display font-semibold text-[var(--text-primary)]">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {skills.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[12px] px-3 py-1.5 rounded-lg"
                  style={{ backgroundColor: "var(--bg-panel-2)", border: "1px solid var(--line)", color: "var(--text-primary)" }}
                >
                  {tool}
                </span>
              ))}
            </div>
            <p className="mt-6 text-[13px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
              My day-to-day environment for building, versioning, and testing Laravel & PHP applications locally before deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
