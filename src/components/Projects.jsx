import { useState } from "react";
import { FiGithub, FiExternalLink, FiCheck } from "react-icons/fi";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading index="03" label="projects" title="Selected builds" description="A few full-stack projects that show how I structure data, secure access, and ship a usable interface." />

        <div className="reveal flex flex-wrap gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="font-mono text-[12px] px-4 py-2 rounded-full border transition-colors"
              style={{
                borderColor: filter === cat ? "var(--color-coral)" : "var(--line)",
                color: filter === cat ? "#fff" : "var(--text-muted)",
                backgroundColor: filter === cat ? "var(--color-coral)" : "transparent",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, i) => (
            <article
              key={project.title}
              className="reveal group card-surface rounded-2xl overflow-hidden flex flex-col hover:border-[var(--color-coral)] transition-colors"
              style={{ transitionDelay: `${(i % 3) * 70}ms` }}
            >
              {/* mock browser-window preview */}
              <div className="relative aspect-[16/10] overflow-hidden" style={{ backgroundColor: "var(--bg-panel-2)" }}>
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div className="absolute top-0 inset-x-0 flex items-center gap-1.5 px-3 py-2" style={{ borderBottom: "1px solid var(--line)" }}>
                  <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
                  <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
                  <span className="w-2 h-2 rounded-full bg-[#28c840]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display font-semibold text-2xl text-gradient text-center px-6">
                    {project.title}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                  <a href={project.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform" aria-label={`${project.title} GitHub repo`}>
                    <FiGithub size={16} />
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white text-black hover:scale-110 transition-transform" aria-label={`${project.title} live demo`}>
                      <FiExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <span className="font-mono text-[10.5px] uppercase tracking-wide text-[var(--color-amber)]">{project.category}</span>
                <h3 className="font-display font-semibold text-lg mt-1.5 text-[var(--text-primary)]">{project.title}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[12.5px]" style={{ color: "var(--text-muted)" }}>
                      <FiCheck className="mt-0.5 shrink-0 text-[var(--color-coral)]" size={13} />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-5 flex flex-wrap gap-1.5" style={{ borderTop: "1px solid var(--line)" }}>
                  {project.stack.map((tech) => (
                    <span key={tech} className="font-mono text-[10.5px] px-2.5 py-1 rounded-md" style={{ backgroundColor: "var(--bg-panel-2)", color: "var(--text-muted)" }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
