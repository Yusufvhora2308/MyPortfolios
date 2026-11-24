import { FiGlobe, FiGrid, FiSmartphone, FiDatabase, FiShare2, FiLock } from "react-icons/fi";
import { services } from "../data/content";
import SectionHeading from "./SectionHeading";

const icons = [FiGlobe, FiGrid, FiSmartphone, FiDatabase, FiShare2, FiLock];

export default function Services() {
  return (
    <section id="services" className="py-24" style={{ backgroundColor: "var(--bg-panel-2)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading index="04" label="services" title="What I can build for you" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={service.title}
                className="reveal card-surface rounded-2xl p-6 hover:-translate-y-1 hover:border-[var(--color-coral)] transition-all"
                style={{ transitionDelay: `${(i % 3) * 60}ms` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--color-coral)]/10 text-[var(--color-coral)] mb-4">
                  <Icon size={18} />
                </div>
                <h3 className="font-display font-semibold text-[var(--text-primary)]">{service.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
